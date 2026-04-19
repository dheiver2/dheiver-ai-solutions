import type { VercelRequest, VercelResponse } from '@vercel/node';
import Stripe from 'stripe';
import { getSupabaseAdmin } from './_lib/supabase.js';

const stripeSecret = process.env.STRIPE_SECRET_KEY;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const rawEmail = typeof req.query.email === 'string' ? req.query.email : '';
  const email = rawEmail.trim().toLowerCase();
  if (!email) {
    return res.status(400).json({ error: 'email query param required' });
  }

  // 1) Supabase: caminho rápido — o webhook já persistiu ao confirmar pagamento.
  const supabase = getSupabaseAdmin();
  if (supabase) {
    const { data, error } = await supabase
      .from('paid_customers')
      .select('stripe_customer_id')
      .eq('email_normalized', email)
      .limit(1)
      .maybeSingle();

    if (error) {
      console.error('[supabase] is-paid-email query failed', { email, error: error.message });
    } else if (data) {
      return res.status(200).json({ allowed: true, customer_id: data.stripe_customer_id, source: 'db' });
    }
  }

  // 2) Fallback Stripe: para compras antes do webhook gravar, ou se o DB estiver indisponível.
  if (!stripeSecret) {
    return res.status(200).json({ allowed: false, reason: 'no_customer' });
  }

  const stripe = new Stripe(stripeSecret);

  try {
    const customers = await stripe.customers.list({ email, limit: 10 });
    if (customers.data.length === 0) {
      return res.status(200).json({ allowed: false, reason: 'no_customer' });
    }

    for (const customer of customers.data) {
      const sessions = await stripe.checkout.sessions.list({ customer: customer.id, limit: 20 });
      const paid = sessions.data.some((session) => session.payment_status === 'paid');
      if (paid) {
        return res.status(200).json({ allowed: true, customer_id: customer.id, source: 'stripe' });
      }
    }

    return res.status(200).json({ allowed: false, reason: 'no_paid_session' });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'unknown error';
    return res.status(500).json({ error: message });
  }
}
