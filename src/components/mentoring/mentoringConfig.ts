export const MENTORING_PHONE = '5551989889898';
export const MENTORING_DISPLAY_PHONE = '(51) 98988-9898';
export const MENTORING_SEATS_LEFT = 3;
export const MENTORING_MONTHLY_PRICE = 697;
export const MENTORING_TOTAL_PRICE = 2091;

export const MENTORING_INSTALLMENTS = 3;
export const MENTORING_PIX_DISCOUNT_PERCENT = 8;
export const MENTORING_PIX_PRICE = 1924;
export const MENTORING_PIX_SAVINGS = MENTORING_TOTAL_PRICE - MENTORING_PIX_PRICE;

export const buildMentoringWhatsAppLink = (message: string) =>
  `https://wa.me/${MENTORING_PHONE}?text=${encodeURIComponent(message)}`;
