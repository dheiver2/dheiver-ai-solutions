export const MENTORING_PHONE = '5551989889898';
export const MENTORING_DISPLAY_PHONE = '(51) 98988-9898';
export const MENTORING_SEATS_LEFT = 3;
export const MENTORING_MONTHLY_PRICE = 697;
export const MENTORING_TOTAL_PRICE = 2091;

export const MENTORING_INSTALLMENTS = 3;
export const MENTORING_PIX_DISCOUNT_PERCENT = 8;
export const MENTORING_PIX_PRICE = 1924;
export const MENTORING_PIX_SAVINGS = MENTORING_TOTAL_PRICE - MENTORING_PIX_PRICE;

// Stripe Payment Link (fallback de checkout hospedado).
// O checkout primário agora passa por /api/create-checkout, que cria uma Checkout
// Session com payment_method_options.card.installments.enabled=true — isso
// garante via código que o parcelamento em 3x aparece pro cliente. O Payment
// Link abaixo fica como fallback caso o endpoint falhe.
// Success/cancel URLs do Payment Link são configuradas no Dashboard:
//   success_url: https://dheiver.com.br/#/obrigado?method=cartao (ou ?method=pix)
//   cancel_url:  https://dheiver.com.br/
export const MENTORING_STRIPE_CARD_LINK = 'https://buy.stripe.com/bJe3cxdww6po8F431j93y05';
// Empty until a Pix-only Stripe Payment Link is created. While empty, the Pix
// CTAs fall back to a pre-filled WhatsApp message so the user still gets a path
// to completion (see buildMentoringPixWhatsAppLink below).
export const MENTORING_STRIPE_PIX_LINK = '';

// Chave publicável do Stripe (segura no frontend — publishable keys são públicas
// por design). Usada caso se queira montar Stripe Elements; o fluxo atual via
// create-checkout não precisa dela no cliente.
export const MENTORING_STRIPE_PUBLISHABLE_KEY =
  'pk_live_51QyNtCRt1eR0wQGIr9zfeqyE1xxstaCSC4QgTeCKZgsS0cebP2EO927onziOjSObt040KKjzWMFZTrFvC8Iuy6ZT00I7N5hcbV';

export const buildMentoringWhatsAppLink = (message: string) =>
  `https://wa.me/${MENTORING_PHONE}?text=${encodeURIComponent(message)}`;

export const buildMentoringPixWhatsAppLink = () =>
  buildMentoringWhatsAppLink(
    `Quero pagar a mentoria via Pix (R$ ${MENTORING_PIX_PRICE} - ${MENTORING_PIX_DISCOUNT_PERCENT}% off). Pode me mandar a chave?`
  );

// Cria uma Checkout Session via /api/create-checkout e redireciona o browser.
// Em caso de falha, cai no Payment Link como fallback pra não quebrar conversão.
export const startMentoringCheckout = async (email?: string): Promise<void> => {
  try {
    const response = await fetch('/api/create-checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });
    if (!response.ok) throw new Error(`status ${response.status}`);
    const data = (await response.json()) as { url?: string };
    if (!data.url) throw new Error('no url in response');
    window.location.href = data.url;
  } catch (err) {
    console.error('[checkout] create-checkout failed, falling back to Payment Link', err);
    window.location.href = MENTORING_STRIPE_CARD_LINK;
  }
};
