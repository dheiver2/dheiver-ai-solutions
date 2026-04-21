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
// IMPORTANT: the success_url and cancel_url for these links are configured in the
// Stripe Dashboard, not here. Expected values:
//   success_url: https://dheiver.com.br/#/obrigado?method=cartao  (or ?method=pix)
//   cancel_url:  https://dheiver.com.br/
// If you change these links, re-verify that the Dashboard's success/cancel URLs
// still point to the correct routes. A mismatch breaks the post-payment flow.
export const MENTORING_STRIPE_CARD_LINK = 'https://buy.stripe.com/bJe3cxdww6po8F431j93y05';
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
