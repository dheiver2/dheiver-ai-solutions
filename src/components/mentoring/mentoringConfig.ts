export const MENTORING_PHONE = '5551989889898';
export const MENTORING_DISPLAY_PHONE = '(51) 98988-9898';
export const MENTORING_SEATS_LEFT = 3;
export const MENTORING_MONTHLY_PRICE = 697;
export const MENTORING_TOTAL_PRICE = 2091;

export const MENTORING_INSTALLMENTS = 3;
export const MENTORING_PIX_DISCOUNT_PERCENT = 8;
export const MENTORING_PIX_PRICE = 1924;
export const MENTORING_PIX_SAVINGS = MENTORING_TOTAL_PRICE - MENTORING_PIX_PRICE;

// Stripe Payment Links (hosted checkout).
// Card link runs as a 3-month subscription (R$ 697/mês × 3). Auto-cancels after
// the 3rd paid invoice via api/stripe-webhook.ts (invoice.paid handler) so the
// customer is never charged a 4th time. If you swap the link, confirm the new
// price has metadata {installments:"3"} and the Dashboard's success/cancel URLs
// still point to https://dheiver.com.br/#/obrigado?method=cartao and /.
export const MENTORING_STRIPE_CARD_LINK = 'https://buy.stripe.com/aFafZj6448xw3kKeK193y06';
// Empty until a Pix-only Stripe Payment Link is created. While empty, the Pix
// CTAs fall back to a pre-filled WhatsApp message so the user still gets a path
// to completion (see buildMentoringPixWhatsAppLink below).
export const MENTORING_STRIPE_PIX_LINK = '';

export const buildMentoringWhatsAppLink = (message: string) =>
  `https://wa.me/${MENTORING_PHONE}?text=${encodeURIComponent(message)}`;

export const buildMentoringPixWhatsAppLink = () =>
  buildMentoringWhatsAppLink(
    `Quero pagar a mentoria via Pix (R$ ${MENTORING_PIX_PRICE} - ${MENTORING_PIX_DISCOUNT_PERCENT}% off). Pode me mandar a chave?`
  );
