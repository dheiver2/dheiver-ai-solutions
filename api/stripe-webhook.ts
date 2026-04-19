import type { VercelRequest, VercelResponse } from '@vercel/node';
import Stripe from 'stripe';
import { Resend } from 'resend';
import { getSupabaseAdmin } from './_lib/supabase';

export const config = {
  api: {
    bodyParser: false,
  },
};

const stripeSecret = process.env.STRIPE_SECRET_KEY;
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
const resendKey = process.env.RESEND_API_KEY;
const resendFromEnv = process.env.RESEND_FROM_EMAIL;
const resendFrom = resendFromEnv || 'Mentoria Dheiver <onboarding@resend.dev>';
const siteUrl = process.env.VITE_SITE_URL || 'https://dheiver.com.br';
const mentorWhatsApp = process.env.VITE_MENTORING_WHATSAPP || '5551997636679';

if (!resendFromEnv) {
  console.error(
    '[resend] RESEND_FROM_EMAIL not set — falling back to onboarding@resend.dev. Emails likely go to spam. Verify a domain in Resend and set RESEND_FROM_EMAIL.'
  );
}

const readRawBody = async (req: VercelRequest): Promise<Buffer> => {
  const chunks: Buffer[] = [];
  for await (const chunk of req) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : (chunk as Buffer));
  }
  return Buffer.concat(chunks);
};

const escapeHtml = (value: string): string =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const buildWelcomeEmail = (params: { name: string | null; email: string }) => {
  const greetingName = params.name?.split(' ')[0] || 'mentorando';
  const safeName = escapeHtml(greetingName);
  const safeEmail = escapeHtml(params.email);
  const loginUrl = `${siteUrl}/#/area-mentorando/login`;
  const whatsappUrl = `https://wa.me/${mentorWhatsApp}?text=${encodeURIComponent(
    `Acabei de comprar a mentoria (${params.email}) e quero agendar a primeira sessão.`
  )}`;

  const subject = 'Bem-vindo à mentoria — acesso liberado agora';

  const text = [
    `Olá, ${greetingName}!`,
    '',
    'Pagamento confirmado. Sua área do mentorando já está liberada.',
    '',
    'PRÓXIMOS PASSOS',
    '',
    `1. Crie sua conta na área do mentorando: ${loginUrl}`,
    `   - Use o MESMO email do pagamento: ${params.email}`,
    '   - Aba "Cadastro" → escolha uma senha → entre',
    '',
    `2. Agende sua primeira sessão 1:1 no WhatsApp: ${whatsappUrl}`,
    '',
    '3. Comece pela aba "Visão geral" para ver o roadmap de 90 dias.',
    '',
    'Qualquer dúvida, responda este email ou me chame no WhatsApp.',
    '',
    'Dr. Dheiver Santos',
    'dheiver.com.br',
  ].join('\n');

  const html = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escapeHtml(subject)}</title>
</head>
<body style="margin:0;padding:0;background:#0B1020;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#1a202c;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#0B1020;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 8px 24px rgba(0,0,0,0.2);">
          <tr>
            <td style="background:linear-gradient(135deg,#f59e0b,#ea580c);padding:32px 32px 24px;text-align:center;">
              <p style="margin:0;font-size:11px;letter-spacing:0.2em;font-weight:700;color:#fff;text-transform:uppercase;">Mentoria IA Júnior</p>
              <h1 style="margin:12px 0 0;font-size:28px;font-weight:800;color:#fff;line-height:1.2;">Bem-vindo, ${safeName}!</h1>
              <p style="margin:8px 0 0;font-size:14px;color:rgba(255,255,255,0.92);">Pagamento confirmado · Acesso liberado</p>
            </td>
          </tr>
          <tr>
            <td style="padding:32px;">
              <p style="margin:0 0 16px;font-size:16px;line-height:1.6;color:#1a202c;">
                Sua área do mentorando já está liberada. Siga os 3 passos abaixo para começar.
              </p>

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:24px 0 8px;">
                <tr>
                  <td style="padding:16px;background:#fef3c7;border-left:4px solid #f59e0b;border-radius:8px;">
                    <p style="margin:0 0 6px;font-size:12px;font-weight:700;color:#92400e;text-transform:uppercase;letter-spacing:0.08em;">Passo 1 · Criar conta</p>
                    <p style="margin:0 0 12px;font-size:14px;line-height:1.6;color:#1a202c;">
                      Use o <strong>mesmo email do pagamento</strong>: <code style="background:#fff;padding:2px 6px;border-radius:4px;font-size:13px;">${safeEmail}</code>
                    </p>
                    <a href="${loginUrl}" style="display:inline-block;background:#f59e0b;color:#000;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:700;font-size:14px;">
                      Criar conta agora →
                    </a>
                  </td>
                </tr>
              </table>

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:16px 0 8px;">
                <tr>
                  <td style="padding:16px;background:#dcfce7;border-left:4px solid #16a34a;border-radius:8px;">
                    <p style="margin:0 0 6px;font-size:12px;font-weight:700;color:#15803d;text-transform:uppercase;letter-spacing:0.08em;">Passo 2 · Agendar 1ª sessão</p>
                    <p style="margin:0 0 12px;font-size:14px;line-height:1.6;color:#1a202c;">
                      Vamos combinar a primeira mentoria 1:1 no WhatsApp.
                    </p>
                    <a href="${whatsappUrl}" style="display:inline-block;background:#16a34a;color:#fff;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:700;font-size:14px;">
                      Falar com Dheiver no WhatsApp →
                    </a>
                  </td>
                </tr>
              </table>

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:16px 0 8px;">
                <tr>
                  <td style="padding:16px;background:#dbeafe;border-left:4px solid #2563eb;border-radius:8px;">
                    <p style="margin:0 0 6px;font-size:12px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:0.08em;">Passo 3 · Comece a estudar</p>
                    <p style="margin:0;font-size:14px;line-height:1.6;color:#1a202c;">
                      Na área do mentorando, abra <strong>Visão geral</strong> para conhecer o roadmap de 90 dias e começar pela <strong>Fase 1 — Base técnica</strong>.
                    </p>
                  </td>
                </tr>
              </table>

              <p style="margin:32px 0 8px;font-size:13px;color:#64748b;line-height:1.6;text-align:center;">
                Qualquer dúvida, é só responder este email.
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding:24px 32px;background:#f8fafc;border-top:1px solid #e2e8f0;text-align:center;">
              <p style="margin:0;font-size:12px;color:#64748b;">
                Dr. Dheiver Santos · <a href="${siteUrl}" style="color:#f59e0b;text-decoration:none;">dheiver.com.br</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  return { subject, text, html };
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!stripeSecret || !webhookSecret) {
    return res.status(500).json({ error: 'Stripe env vars missing' });
  }

  const stripe = new Stripe(stripeSecret);
  const signature = req.headers['stripe-signature'];
  if (typeof signature !== 'string') {
    return res.status(400).json({ error: 'Missing stripe-signature header' });
  }

  let event: Stripe.Event;
  try {
    const rawBody = await readRawBody(req);
    event = stripe.webhooks.constructEvent(rawBody, signature, webhookSecret);
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Invalid signature';
    return res.status(400).json({ error: `Webhook signature verification failed: ${message}` });
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;
    const email = session.customer_details?.email;
    const name = session.customer_details?.name ?? null;

    console.log('[stripe] checkout.session.completed', {
      id: session.id,
      email,
      name,
      amount_total: session.amount_total,
      payment_status: session.payment_status,
    });

    if (email && session.payment_status === 'paid') {
      const supabase = getSupabaseAdmin();
      if (supabase) {
        const { error } = await supabase.from('paid_customers').upsert(
          {
            email,
            stripe_session_id: session.id,
            stripe_customer_id:
              typeof session.customer === 'string' ? session.customer : session.customer?.id ?? null,
            amount_total: session.amount_total ?? null,
            currency: session.currency ?? null,
            name,
            raw_session: session as unknown as Record<string, unknown>,
          },
          { onConflict: 'stripe_session_id' }
        );
        if (error) {
          console.error('[supabase] failed to upsert paid_customer', { email, error: error.message });
          return res.status(500).json({ error: 'DB write failed — Stripe should retry.' });
        }
        console.log('[supabase] paid_customer upserted', { email, session: session.id });
      } else {
        console.warn('[supabase] not configured — skipping paid_customer persistence', { email });
      }
    }

    if (email && session.payment_status === 'paid' && resendKey) {
      try {
        const resend = new Resend(resendKey);
        const { subject, text, html } = buildWelcomeEmail({ name, email });
        const sendResult = await resend.emails.send(
          {
            from: resendFrom,
            to: email,
            subject,
            text,
            html,
          },
          { idempotencyKey: session.id }
        );
        if (sendResult.error) {
          console.error('[resend] send returned error', { to: email, error: sendResult.error });
          return res.status(500).json({ error: 'Email send failed — Stripe should retry.' });
        }
        console.log('[resend] welcome email sent', { to: email, id: sendResult.data?.id });
      } catch (err) {
        console.error('[resend] failed to send welcome email', { to: email, error: err instanceof Error ? err.message : err });
        return res.status(500).json({ error: 'Email send threw — Stripe should retry.' });
      }
    } else if (email && !resendKey) {
      console.warn('[resend] RESEND_API_KEY missing — skipping welcome email', { to: email });
    }
  }

  return res.status(200).json({ received: true });
}
