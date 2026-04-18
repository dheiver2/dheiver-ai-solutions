export const MENTORING_PHONE = '5551989889898';
export const MENTORING_DISPLAY_PHONE = '(51) 98988-9898';
export const MENTORING_SEATS_LEFT = 3;
export const MENTORING_MONTHLY_PRICE = 697;
export const MENTORING_TOTAL_PRICE = 2091;

export const MENTORING_INSTALLMENTS = 3;
export const MENTORING_PIX_DISCOUNT_PERCENT = 8;
export const MENTORING_PIX_PRICE = 1924;
export const MENTORING_PIX_SAVINGS = MENTORING_TOTAL_PRICE - MENTORING_PIX_PRICE;

export const MENTORING_STRIPE_CARD_LINK = 'https://buy.stripe.com/bJe3cxdww6po8F431j93y05';
export const MENTORING_STRIPE_PIX_LINK = '';

export const buildMentoringWhatsAppLink = (message: string) =>
  `https://wa.me/${MENTORING_PHONE}?text=${encodeURIComponent(message)}`;

export const buildMentoringPixWhatsAppLink = () =>
  buildMentoringWhatsAppLink(
    `Quero pagar a mentoria via Pix (R$ ${MENTORING_PIX_PRICE} - ${MENTORING_PIX_DISCOUNT_PERCENT}% off). Pode me mandar a chave?`
  );
