// Google Analytics configuration
export const GA_TRACKING_ID = typeof window !== 'undefined' ? (window as any).VITE_GA_TRACKING_ID || '' : '';

// Google Ads configuration
export const GOOGLE_ADS_ID = typeof window !== 'undefined' ? (window as any).VITE_GOOGLE_ADS_ID || '' : '';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

// Initialize Google Analytics
export const initGA = () => {
  if (typeof window === 'undefined' || !GA_TRACKING_ID) return;

  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
  document.head.appendChild(script1);

  const script2 = document.createElement('script');
  script2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_TRACKING_ID}', {
      page_title: document.title,
      page_location: window.location.href,
    });
  `;
  document.head.appendChild(script2);
};

// Track page views
export const trackPageView = (path: string, title?: string) => {
  if (typeof window === 'undefined' || typeof window.gtag === 'undefined') return;

  window.gtag('config', GA_TRACKING_ID, {
    page_title: title || document.title,
    page_location: window.location.href,
    page_path: path,
  });
};

// Track events
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window === 'undefined' || typeof window.gtag === 'undefined') return;

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// Track conversions for Google Ads
export const trackConversion = (conversionId: string, conversionLabel: string, value?: number) => {
  if (typeof window === 'undefined' || typeof window.gtag === 'undefined') return;

  window.gtag('event', 'conversion', {
    send_to: `${conversionId}/${conversionLabel}`,
    value: value || 1,
    currency: 'BRL',
  });
};

// Predefined events for the AI consulting business
export const trackEvents = {
  // Contact form events
  contactFormStart: () => trackEvent('form_start', 'contact', 'contact_form'),
  contactFormSubmit: () => {
    trackEvent('form_submit', 'contact', 'contact_form');
    trackConversion(GOOGLE_ADS_ID, 'contact_form_submit', 100);
  },
  
  // Service page events
  servicePageView: (service: string) => trackEvent('page_view', 'services', service),
  serviceInquiry: (service: string) => {
    trackEvent('inquiry', 'services', service);
    trackConversion(GOOGLE_ADS_ID, 'service_inquiry', 50);
  },
  
  // CTA button clicks
  ctaClick: (cta: string, location: string) => trackEvent('cta_click', 'engagement', `${cta}_${location}`),
  
  // Download events
  downloadResource: (resource: string) => trackEvent('download', 'resources', resource),
  
  // Phone/email clicks
  phoneClick: () => {
    trackEvent('phone_click', 'contact', 'header_phone');
    trackConversion(GOOGLE_ADS_ID, 'phone_click', 25);
  },
  emailClick: () => {
    trackEvent('email_click', 'contact', 'header_email');
    trackConversion(GOOGLE_ADS_ID, 'email_click', 25);
  },
  
  // Consultation booking
  consultationRequest: () => {
    trackEvent('consultation_request', 'conversion', 'schedule_consultation');
    trackConversion(GOOGLE_ADS_ID, 'consultation_request', 200);
  },
  
  // Engagement tracking
  timeOnPage: (seconds: number) => {
    if (seconds > 30) trackEvent('engagement', 'time_on_page', '30_seconds');
    if (seconds > 60) trackEvent('engagement', 'time_on_page', '1_minute');
    if (seconds > 180) trackEvent('engagement', 'time_on_page', '3_minutes');
  },
  
  scrollDepth: (percentage: number) => {
    if (percentage >= 25) trackEvent('scroll', 'engagement', '25_percent');
    if (percentage >= 50) trackEvent('scroll', 'engagement', '50_percent');
    if (percentage >= 75) trackEvent('scroll', 'engagement', '75_percent');
    if (percentage >= 100) trackEvent('scroll', 'engagement', '100_percent');
  }
};

// Enhanced e-commerce tracking for service packages
export const trackPurchase = (transactionId: string, value: number, items: any[]) => {
  if (typeof window === 'undefined' || typeof window.gtag === 'undefined') return;

  window.gtag('event', 'purchase', {
    transaction_id: transactionId,
    value: value,
    currency: 'BRL',
    items: items
  });
}; 