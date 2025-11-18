/**
 * Analytics service for tracking user interactions and conversions
 * Supports Google Analytics, Facebook Pixel, and custom events
 */

import { config } from '@/config/env';
import { logger } from '@/services/logger';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

class Analytics {
  private static instance: Analytics;
  private isInitialized = false;

  private constructor() {}

  public static getInstance(): Analytics {
    if (!Analytics.instance) {
      Analytics.instance = new Analytics();
    }
    return Analytics.instance;
  }

  /**
   * Initialize analytics services
   */
  public init(): void {
    if (!config.features.analytics || this.isInitialized) return;

    if (config.analytics.googleAnalyticsId) {
      this.initGoogleAnalytics();
    }

    if (config.analytics.facebookPixelId) {
      this.initFacebookPixel();
    }

    this.isInitialized = true;
    logger.info('Analytics initialized');
  }

  /**
   * Initialize Google Analytics
   */
  private initGoogleAnalytics(): void {
    const gaId = config.analytics.googleAnalyticsId;
    if (!gaId) return;

    // Load Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    window.gtag = function() {
      window.dataLayer?.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', gaId, {
      send_page_view: false, // We'll handle page views manually
    });

    logger.info('Google Analytics initialized', { gaId });
  }

  /**
   * Initialize Facebook Pixel
   */
  private initFacebookPixel(): void {
    const fbPixelId = config.analytics.facebookPixelId;
    if (!fbPixelId) return;

    // Load Facebook Pixel
    (function(f: any, b: any, e: any, v: any, n?: any, t?: any, s?: any) {
      if (f.fbq) return;
      n = f.fbq = function() {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = '2.0';
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(
      window,
      document,
      'script',
      'https://connect.facebook.net/en_US/fbevents.js'
    );

    window.fbq?.('init', fbPixelId);
    window.fbq?.('track', 'PageView');

    logger.info('Facebook Pixel initialized', { fbPixelId });
  }

  /**
   * Track page view
   */
  public pageView(path: string, title?: string): void {
    if (!config.features.analytics) return;

    // Google Analytics
    if (window.gtag) {
      window.gtag('event', 'page_view', {
        page_path: path,
        page_title: title || document.title,
      });
    }

    // Facebook Pixel
    if (window.fbq) {
      window.fbq('track', 'PageView');
    }

    logger.trackEvent('page_view', { path, title });
  }

  /**
   * Track custom event
   */
  public event(
    eventName: string,
    parameters?: Record<string, any>
  ): void {
    if (!config.features.analytics) return;

    // Google Analytics
    if (window.gtag) {
      window.gtag('event', eventName, parameters);
    }

    // Facebook Pixel
    if (window.fbq) {
      window.fbq('trackCustom', eventName, parameters);
    }

    logger.trackEvent(eventName, parameters);
  }

  /**
   * Track button click
   */
  public trackClick(buttonName: string, location?: string): void {
    this.event('click', {
      button_name: buttonName,
      location: location || window.location.pathname,
    });
  }

  /**
   * Track form submission
   */
  public trackFormSubmit(formName: string, success: boolean = true): void {
    this.event('form_submit', {
      form_name: formName,
      success,
    });
  }

  /**
   * Track conversion
   */
  public trackConversion(
    conversionType: string,
    value?: number,
    currency: string = 'BRL'
  ): void {
    this.event('conversion', {
      conversion_type: conversionType,
      value,
      currency,
    });

    // Facebook Pixel conversion
    if (window.fbq) {
      window.fbq('track', 'Lead', {
        content_name: conversionType,
        value,
        currency,
      });
    }
  }

  /**
   * Track user engagement
   */
  public trackEngagement(action: string, category?: string): void {
    this.event('engagement', {
      action,
      category: category || 'User Interaction',
    });
  }

  /**
   * Track scroll depth
   */
  public trackScrollDepth(percentage: number): void {
    this.event('scroll', {
      scroll_depth: percentage,
    });
  }

  /**
   * Track outbound link
   */
  public trackOutboundLink(url: string, label?: string): void {
    this.event('click', {
      event_category: 'outbound',
      event_label: label || url,
      transport_type: 'beacon',
    });
  }
}

// Export singleton instance
export const analytics = Analytics.getInstance();

// Convenience functions
export const initAnalytics = () => analytics.init();
export const trackPageView = (path: string, title?: string) => 
  analytics.pageView(path, title);
export const trackEvent = (name: string, params?: Record<string, any>) => 
  analytics.event(name, params);
export const trackClick = (buttonName: string, location?: string) => 
  analytics.trackClick(buttonName, location);
export const trackFormSubmit = (formName: string, success?: boolean) => 
  analytics.trackFormSubmit(formName, success);
export const trackConversion = (type: string, value?: number, currency?: string) => 
  analytics.trackConversion(type, value, currency);
