/* eslint-disable no-console */
// End-to-end validation of the mentoring subscription flow in Stripe test mode.
//
// Mirrors the production setup (recurring R$ 697/mês + metadata.max_invoices=3)
// and the webhook auto-cancel logic from api/stripe-webhook.ts. Uses a Test
// Clock to advance time across 3 billing cycles and asserts:
//   - subscription created and pays the 1st invoice
//   - webhook logic does NOT cancel on invoice #1 or #2
//   - webhook logic DOES cancel on invoice #3 (cancel_at_period_end=true)
//   - after advancing past the period end, Stripe does NOT create invoice #4
//
// Run:  SK_TEST=sk_test_xxx node scripts/test-subscription-flow.mjs

import Stripe from 'stripe';

const SK_TEST = process.env.SK_TEST;
if (!SK_TEST || !SK_TEST.startsWith('sk_test_')) {
  console.error('Set SK_TEST=sk_test_... in the environment');
  process.exit(1);
}

const stripe = new Stripe(SK_TEST);

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// Replica of the webhook handler's invoice.paid branch in api/stripe-webhook.ts.
// Given a subscription id, counts paid invoices and sets cancel_at_period_end
// once the count hits metadata.max_invoices. Returns { action, count, max }.
async function runWebhookAutoCancel(subId) {
  const sub = await stripe.subscriptions.retrieve(subId);
  const maxInvoicesRaw = sub.metadata?.max_invoices;
  const maxInvoices = maxInvoicesRaw ? parseInt(maxInvoicesRaw, 10) : 0;
  if (!maxInvoices) return { action: 'noop-no-metadata', count: 0, max: 0 };
  if (sub.cancel_at_period_end) return { action: 'noop-already-cancelling', count: null, max: maxInvoices };
  if (sub.status === 'canceled') return { action: 'noop-already-canceled', count: null, max: maxInvoices };

  const paid = await stripe.invoices.list({ subscription: subId, status: 'paid', limit: 100 });
  const count = paid.data.length;
  if (count >= maxInvoices) {
    await stripe.subscriptions.update(subId, { cancel_at_period_end: true });
    return { action: 'cancelled-at-period-end', count, max: maxInvoices };
  }
  return { action: 'keep-running', count, max: maxInvoices };
}

// In test clocks, new cycle invoices land as draft/open. Finalize drafts and
// pay any open invoices so the subscription advances as it would in prod.
async function settleOpenInvoices(subId, pmId) {
  const list = await stripe.invoices.list({ subscription: subId, limit: 100 });
  for (const inv of list.data) {
    if (inv.status === 'draft') {
      await stripe.invoices.finalizeInvoice(inv.id);
    }
  }
  const list2 = await stripe.invoices.list({ subscription: subId, limit: 100 });
  for (const inv of list2.data) {
    if (inv.status === 'open') {
      try {
        await stripe.invoices.pay(inv.id, { payment_method: pmId });
      } catch (e) {
        console.log(`    pay() failed for ${inv.id}: ${e.message}`);
      }
    }
  }
}

async function pollInvoiceCount(subId, expected, label, pmId, timeoutMs = 60000) {
  const deadline = Date.now() + timeoutMs;
  let lastSettle = 0;
  while (Date.now() < deadline) {
    const list = await stripe.invoices.list({ subscription: subId, limit: 100 });
    const paid = list.data.filter((i) => i.status === 'paid').length;
    if (paid >= expected) return { total: list.data.length, paid };
    // Try to push draft/open invoices forward every few seconds.
    if (Date.now() - lastSettle > 3000) {
      await settleOpenInvoices(subId, pmId);
      lastSettle = Date.now();
    }
    await sleep(1500);
  }
  const list = await stripe.invoices.list({ subscription: subId, limit: 100 });
  const paid = list.data.filter((i) => i.status === 'paid').length;
  throw new Error(
    `Timed out waiting for ${expected} paid invoices (${label}). Got total=${list.data.length}, paid=${paid}. Statuses: ${list.data.map((i) => i.status).join(',')}`
  );
}

async function main() {
  const created = { product: null, price: null, clock: null, customer: null, subscription: null };

  try {
    // 1. Product + recurring price (mirror of live config)
    console.log('\n[1/7] Creating test product + recurring price...');
    created.product = await stripe.products.create({
      name: 'Mentoria IA TEST (auto-cancel validation)',
      metadata: { purpose: 'automated-test-run', created_by: 'claude' },
    });
    created.price = await stripe.prices.create({
      product: created.product.id,
      unit_amount: 69700,
      currency: 'brl',
      recurring: { interval: 'month', interval_count: 1 },
      metadata: { installments: '3', max_invoices: '3' },
      nickname: 'Mentoria TEST - R$ 697/mes',
    });
    console.log(`    product=${created.product.id}  price=${created.price.id}`);

    // 2. Test clock anchored "now"
    console.log('\n[2/7] Creating test clock anchored at now...');
    const nowSeconds = Math.floor(Date.now() / 1000);
    created.clock = await stripe.testHelpers.testClocks.create({
      frozen_time: nowSeconds,
      name: 'mentoria-3x-auto-cancel-validation',
    });
    console.log(`    clock=${created.clock.id}  frozen_time=${new Date(nowSeconds * 1000).toISOString()}`);

    // 3. Customer on the clock + test PM attached
    console.log('\n[3/7] Creating test customer + attaching test Visa PM...');
    created.customer = await stripe.customers.create({
      email: 'test-mentoria@example.com',
      name: 'Test Mentorando',
      test_clock: created.clock.id,
    });
    const pm = await stripe.paymentMethods.attach('pm_card_visa', { customer: created.customer.id });
    await stripe.customers.update(created.customer.id, {
      invoice_settings: { default_payment_method: pm.id },
    });
    console.log(`    customer=${created.customer.id}  pm=${pm.id}`);

    // 4. Subscription with max_invoices=3 metadata (matches what the Payment Link sets).
    // We let Stripe charge automatically with the default PM on the customer.
    console.log('\n[4/7] Creating subscription (metadata.max_invoices=3)...');
    created.subscription = await stripe.subscriptions.create({
      customer: created.customer.id,
      items: [{ price: created.price.id }],
      metadata: { max_invoices: '3', auto_cancel_after: '3' },
      default_payment_method: pm.id,
      collection_method: 'charge_automatically',
      expand: ['latest_invoice'],
    });
    console.log(
      `    sub=${created.subscription.id}  status=${created.subscription.status}  ` +
        `metadata.max_invoices=${created.subscription.metadata.max_invoices}  ` +
        `latest_invoice.status=${created.subscription.latest_invoice?.status}`
    );

    // If the first invoice wasn't paid synchronously (open/draft), pay it explicitly.
    const firstInv = created.subscription.latest_invoice;
    if (firstInv && firstInv.status !== 'paid') {
      console.log(`    paying first invoice ${firstInv.id} (status=${firstInv.status})...`);
      await stripe.invoices.pay(firstInv.id, { payment_method: pm.id });
    }

    // 5. Wait for invoice #1 paid, then run webhook logic
    console.log('\n[5/7] Cycle 1: waiting for invoice #1 paid...');
    let status = await pollInvoiceCount(created.subscription.id, 1, 'cycle-1', pm.id);
    console.log(`    invoices total=${status.total} paid=${status.paid}`);
    let result = await runWebhookAutoCancel(created.subscription.id);
    console.log(`    webhook result: ${JSON.stringify(result)}`);
    if (result.action !== 'keep-running' || result.count !== 1) {
      throw new Error(`FAIL cycle-1: expected keep-running count=1, got ${JSON.stringify(result)}`);
    }
    console.log('    PASS — not cancelled after 1st invoice');

    // 6. Advance clock +1 month → invoice #2
    console.log('\n[6/7] Cycle 2: advancing test clock +1 month...');
    const sub1 = await stripe.subscriptions.retrieve(created.subscription.id);
    const nextPeriodEnd = sub1.current_period_end ?? sub1.items.data[0].current_period_end;
    await stripe.testHelpers.testClocks.advance(created.clock.id, { frozen_time: nextPeriodEnd + 60 });
    // Wait for the clock to settle ("ready" status).
    for (let i = 0; i < 60; i += 1) {
      const c = await stripe.testHelpers.testClocks.retrieve(created.clock.id);
      if (c.status === 'ready') break;
      await sleep(2000);
    }
    status = await pollInvoiceCount(created.subscription.id, 2, 'cycle-2', pm.id);
    console.log(`    invoices total=${status.total} paid=${status.paid}`);
    result = await runWebhookAutoCancel(created.subscription.id);
    console.log(`    webhook result: ${JSON.stringify(result)}`);
    if (result.action !== 'keep-running' || result.count !== 2) {
      throw new Error(`FAIL cycle-2: expected keep-running count=2, got ${JSON.stringify(result)}`);
    }
    console.log('    PASS — not cancelled after 2nd invoice');

    // 7. Advance clock +1 month → invoice #3, webhook should cancel
    console.log('\n[7/7] Cycle 3: advancing test clock +1 month (expect auto-cancel)...');
    const sub2 = await stripe.subscriptions.retrieve(created.subscription.id);
    const thirdPeriodEnd = sub2.current_period_end ?? sub2.items.data[0].current_period_end;
    await stripe.testHelpers.testClocks.advance(created.clock.id, { frozen_time: thirdPeriodEnd + 60 });
    for (let i = 0; i < 60; i += 1) {
      const c = await stripe.testHelpers.testClocks.retrieve(created.clock.id);
      if (c.status === 'ready') break;
      await sleep(2000);
    }
    status = await pollInvoiceCount(created.subscription.id, 3, 'cycle-3', pm.id);
    console.log(`    invoices total=${status.total} paid=${status.paid}`);
    result = await runWebhookAutoCancel(created.subscription.id);
    console.log(`    webhook result: ${JSON.stringify(result)}`);
    if (result.action !== 'cancelled-at-period-end' || result.count !== 3) {
      throw new Error(`FAIL cycle-3: expected cancelled-at-period-end count=3, got ${JSON.stringify(result)}`);
    }
    const sub3 = await stripe.subscriptions.retrieve(created.subscription.id);
    if (!sub3.cancel_at_period_end) throw new Error('FAIL cycle-3: cancel_at_period_end not true on subscription');
    console.log(`    PASS — cancel_at_period_end=true, cancel_at=${new Date(sub3.cancel_at * 1000).toISOString()}`);

    // 8. Advance past the 3rd period end — sub should cancel, no 4th invoice
    console.log('\n[extra] Advancing clock past cancel_at to confirm no 4th charge...');
    await stripe.testHelpers.testClocks.advance(created.clock.id, { frozen_time: sub3.cancel_at + 120 });
    for (let i = 0; i < 60; i += 1) {
      const c = await stripe.testHelpers.testClocks.retrieve(created.clock.id);
      if (c.status === 'ready') break;
      await sleep(2000);
    }
    const finalSub = await stripe.subscriptions.retrieve(created.subscription.id);
    const finalInvoices = await stripe.invoices.list({ subscription: created.subscription.id, limit: 100 });
    const finalPaid = finalInvoices.data.filter((i) => i.status === 'paid').length;
    console.log(
      `    final sub.status=${finalSub.status}  total_invoices=${finalInvoices.data.length}  paid=${finalPaid}`
    );
    if (finalSub.status !== 'canceled') throw new Error(`FAIL: expected status=canceled, got ${finalSub.status}`);
    if (finalPaid !== 3) throw new Error(`FAIL: expected exactly 3 paid invoices, got ${finalPaid}`);
    console.log('    PASS — subscription cancelled, exactly 3 paid invoices, no 4th charge');

    console.log('\n✅ ALL CHECKS PASSED — client subscription flow validated end-to-end.');
  } finally {
    console.log('\n[cleanup] Removing test artefacts...');
    if (created.clock) {
      try {
        await stripe.testHelpers.testClocks.del(created.clock.id);
        console.log(`    deleted clock=${created.clock.id} (cascades customer+subscription)`);
      } catch (e) {
        console.log(`    could not delete clock: ${e.message}`);
      }
    }
    if (created.price) {
      try {
        await stripe.prices.update(created.price.id, { active: false });
        console.log(`    archived price=${created.price.id}`);
      } catch (e) {
        console.log(`    could not archive price: ${e.message}`);
      }
    }
    if (created.product) {
      try {
        await stripe.products.update(created.product.id, { active: false });
        console.log(`    archived product=${created.product.id}`);
      } catch (e) {
        console.log(`    could not archive product: ${e.message}`);
      }
    }
  }
}

main().catch((err) => {
  console.error('\n❌ TEST FAILED:', err.message);
  if (err.raw) console.error('    raw:', err.raw.code, err.raw.param, err.raw.message);
  process.exit(1);
});
