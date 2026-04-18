import type { VercelRequest, VercelResponse } from '@vercel/node';
import Stripe from 'stripe';

const stripeSecret = process.env.STRIPE_SECRET_KEY;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!stripeSecret) {
    return res.status(500).json({ error: 'STRIPE_SECRET_KEY missing' });
  }

  const rawEmail = typeof req.query.email === 'string' ? req.query.email : '';
  const email = rawEmail.trim().toLowerCase();
  if (!email) {
    return res.status(400).json({ error: 'email query param required' });
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
        return res.status(200).json({ allowed: true, customer_id: customer.id });
      }
    }

    return res.status(200).json({ allowed: false, reason: 'no_paid_session' });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'unknown error';
    return res.status(500).json({ error: message });
  }
}
