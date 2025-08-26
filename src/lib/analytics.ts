// Google Analytics configuration
export const GA_TRACKING_ID = typeof window !== 'undefined' ? (window as unknown as { VITE_GA_TRACKING_ID?: string }).VITE_GA_TRACKING_ID || '' : '';

// Google Ads configuration
export const GOOGLE_ADS_ID = typeof window !== 'undefined' ? (window as unknown as { VITE_GOOGLE_ADS_ID?: string }).VITE_GOOGLE_ADS_ID || '' : '';

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }

  interface LayoutShift extends PerformanceEntry {
    value: number;
    hadRecentInput: boolean;
  }

  interface PerformanceEventTiming extends PerformanceEntry {
    processingStart: number;
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
export const trackPurchase = (transactionId: string, value: number, items: Record<string, unknown>[]) => {
  if (typeof window === 'undefined' || typeof window.gtag === 'undefined') return;

  window.gtag('event', 'purchase', {
    transaction_id: transactionId,
    value: value,
    currency: 'BRL',
    items: items
  });
};

// Core Web Vitals tracking for SEO performance
export const trackWebVitals = () => {
  if (typeof window === 'undefined') return;

  // Track FCP (First Contentful Paint)
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (entry.entryType === 'paint' && entry.name === 'first-contentful-paint') {
        trackEvent('core_web_vitals', 'fcp', 'first_contentful_paint', Math.round(entry.startTime));
      }
    }
  });
  observer.observe({ entryTypes: ['paint'] });

  // Track LCP (Largest Contentful Paint) 
  const lcpObserver = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      trackEvent('core_web_vitals', 'lcp', 'largest_contentful_paint', Math.round(entry.startTime));
    }
  });
  lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

  // Track CLS (Cumulative Layout Shift)
  let clsValue = 0;
  const clsObserver = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      const layoutShift = entry as LayoutShift;
      if (!layoutShift.hadRecentInput) {
        clsValue += layoutShift.value;
      }
    }
    trackEvent('core_web_vitals', 'cls', 'cumulative_layout_shift', Math.round(clsValue * 1000));
  });
  clsObserver.observe({ entryTypes: ['layout-shift'] });

  // Track FID (First Input Delay)
  const fidObserver = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      const perfEntry = entry as PerformanceEventTiming;
      trackEvent('core_web_vitals', 'fid', 'first_input_delay', Math.round(perfEntry.processingStart - perfEntry.startTime));
    }
  });
  fidObserver.observe({ entryTypes: ['first-input'] });
};

// Enhanced user engagement tracking
export const setupEngagementTracking = () => {
  if (typeof window === 'undefined') return;

  const startTime = Date.now();
  let maxScroll = 0;
  let hasTracked25 = false;
  let hasTracked50 = false;
  let hasTracked75 = false;
  let hasTracked100 = false;

  // Scroll depth tracking
  const trackScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;

    if (scrollPercent > maxScroll) {
      maxScroll = scrollPercent;
      
      if (scrollPercent >= 25 && !hasTracked25) {
        trackEvents.scrollDepth(25);
        hasTracked25 = true;
      }
      if (scrollPercent >= 50 && !hasTracked50) {
        trackEvents.scrollDepth(50);
        hasTracked50 = true;
      }
      if (scrollPercent >= 75 && !hasTracked75) {
        trackEvents.scrollDepth(75);
        hasTracked75 = true;
      }
      if (scrollPercent >= 100 && !hasTracked100) {
        trackEvents.scrollDepth(100);
        hasTracked100 = true;
      }
    }
  };

  // Time on page tracking
  const trackTimeOnPage = () => {
    const timeSpent = Math.floor((Date.now() - startTime) / 1000);
    trackEvents.timeOnPage(timeSpent);
  };

  // Event listeners
  window.addEventListener('scroll', trackScroll, { passive: true });
  
  // Track time intervals
  setTimeout(() => trackTimeOnPage(), 30000); // 30 seconds
  setTimeout(() => trackTimeOnPage(), 60000); // 1 minute  
  setTimeout(() => trackTimeOnPage(), 180000); // 3 minutes

  // Track on page unload
  window.addEventListener('beforeunload', trackTimeOnPage);
};

// AI-specific conversion tracking
export const trackAIConsultingEvents = {
  // Specific AI service interests
  machineLearningInterest: () => {
    trackEvent('ai_service_interest', 'machine_learning', 'ml_page_view');
    trackConversion(GOOGLE_ADS_ID, 'ml_interest', 75);
  },
  
  computerVisionInterest: () => {
    trackEvent('ai_service_interest', 'computer_vision', 'cv_page_view');
    trackConversion(GOOGLE_ADS_ID, 'cv_interest', 75);
  },
  
  nlpInterest: () => {
    trackEvent('ai_service_interest', 'nlp', 'nlp_page_view');
    trackConversion(GOOGLE_ADS_ID, 'nlp_interest', 75);
  },
  
  automationInterest: () => {
    trackEvent('ai_service_interest', 'automation', 'automation_page_view');
    trackConversion(GOOGLE_ADS_ID, 'automation_interest', 75);
  },

  // Lead qualification events
  highValueLead: () => {
    trackEvent('lead_qualification', 'high_value', 'enterprise_inquiry');
    trackConversion(GOOGLE_ADS_ID, 'high_value_lead', 500);
  },

  techLeadView: () => {
    trackEvent('content_engagement', 'technical', 'tech_lead_content');
  },

  caseStudyView: (caseStudy: string) => {
    trackEvent('case_study', 'view', caseStudy);
    trackConversion(GOOGLE_ADS_ID, 'case_study_view', 30);
  },

  portfolioDownload: () => {
    trackEvent('lead_generation', 'portfolio', 'portfolio_download');
    trackConversion(GOOGLE_ADS_ID, 'portfolio_download', 150);
  }
}; 