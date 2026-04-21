import type { VercelRequest, VercelResponse } from '@vercel/node';
import Stripe from 'stripe';

const stripeSecret = process.env.STRIPE_SECRET_KEY;
const siteUrl = process.env.VITE_SITE_URL || 'https://dheiver.com.br';

// Parcelamento garantido por c\u00f3digo: habilita installments na Checkout Session.
// O cliente v\u00ea op\u00e7\u00f5es a partir de 2x; o plano "3x" aparece junto — ancorado pela UI.
// Pr\u00e9-requisito na conta Stripe (BR): Settings \u2192 Payments \u2192 Installments ativado.
const TOTAL_PRICE_CENTS = 209100; // R$ 2.091,00
const INSTALLMENTS = 3;
const MONTHLY_PRICE = 697;

const readJsonBody = async (req: VercelRequest): Promise<Record<string, unknown>> => {
  if (req.body && typeof req.body === 'object' && !Buffer.isBuffer(req.body)) {
    return req.body as Record<string, unknown>;
  }
  if (typeof req.body === 'string') {
    try {
      return JSON.parse(req.body);
    } catch {
      return {};
    }
  }
  return {};
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!stripeSecret) {
    console.error('[stripe] STRIPE_SECRET_KEY missing');
    return res.status(500).json({ error: 'Stripe n\u00e3o configurado' });
  }

  const body = await readJsonBody(req);
  const rawEmail = typeof body.email === 'string' ? body.email.trim().toLowerCase() : undefined;
  const email = rawEmail && /.+@.+\..+/.test(rawEmail) ? rawEmail : undefined;

  const stripe = new Stripe(stripeSecret);

  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      payment_method_options: {
        card: {
          installments: { enabled: true },
        },
      },
      locale: 'pt-BR',
      customer_email: email,
      line_items: [
        {
          price_data: {
            currency: 'brl',
            unit_amount: TOTAL_PRICE_CENTS,
            product_data: {
              name: 'Mentoria Engenharia de IA J\u00fanior \u2014 3 meses',
              description: `Acompanhamento 1:1 com Dr. Dheiver. Parcele em at\u00e9 ${INSTALLMENTS}x de R$ ${MONTHLY_PRICE} sem juros no cart\u00e3o. Inclui 12 sess\u00f5es, 5+ projetos, revis\u00e3o de curr\u00edculo e prepara\u00e7\u00e3o para entrevistas.`,
            },
          },
          quantity: 1,
        },
      ],
      success_url: `${siteUrl}/#/obrigado?method=cartao&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/#/mentoria`,
      allow_promotion_codes: true,
      billing_address_collection: 'required',
      metadata: {
        product: 'mentoring_3_months',
        installments_offered: String(INSTALLMENTS),
        source: 'create-checkout-api',
      },
    });

    if (!session.url) {
      return res.status(500).json({ error: 'Stripe n\u00e3o retornou URL de checkout' });
    }

    return res.status(200).json({ url: session.url, id: session.id });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Falha ao criar checkout';
    console.error('[stripe] create-checkout failed', { error: message });
    return res.status(500).json({ error: message });
  }
}
