/**
 * Performance monitoring utilities
 * Tracks Core Web Vitals and custom metrics
 */

import { logger } from '@/services/logger';

interface PerformanceMetric {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
}

// Core Web Vitals thresholds
const THRESHOLDS = {
  FCP: { good: 1800, poor: 3000 }, // First Contentful Paint
  LCP: { good: 2500, poor: 4000 }, // Largest Contentful Paint
  FID: { good: 100, poor: 300 },   // First Input Delay
  CLS: { good: 0.1, poor: 0.25 },  // Cumulative Layout Shift
  TTFB: { good: 800, poor: 1800 }, // Time to First Byte
  INP: { good: 200, poor: 500 },   // Interaction to Next Paint
};

const getRating = (
  metric: string,
  value: number
): 'good' | 'needs-improvement' | 'poor' => {
  const threshold = THRESHOLDS[metric as keyof typeof THRESHOLDS];
  if (!threshold) return 'good';
  
  if (value <= threshold.good) return 'good';
  if (value <= threshold.poor) return 'needs-improvement';
  return 'poor';
};

const reportMetric = (metric: PerformanceMetric) => {
  logger.trackPerformance(metric.name, metric.value, 'ms');
  
  if (metric.rating === 'poor') {
    logger.warn(`Poor ${metric.name} performance`, {
      value: metric.value,
      rating: metric.rating,
    });
  }
};

/**
 * Report Core Web Vitals
 */
export const reportWebVitals = () => {
  if (typeof window === 'undefined') return;

  // Use the web-vitals library for accurate measurements
  import('web-vitals').then(({ onCLS, onFID, onFCP, onLCP, onTTFB, onINP }) => {
    onCLS((metric) => {
      reportMetric({
        name: 'CLS',
        value: metric.value,
        rating: getRating('CLS', metric.value),
      });
    });

    onFID((metric) => {
      reportMetric({
        name: 'FID',
        value: metric.value,
        rating: getRating('FID', metric.value),
      });
    });

    onFCP((metric) => {
      reportMetric({
        name: 'FCP',
        value: metric.value,
        rating: getRating('FCP', metric.value),
      });
    });

    onLCP((metric) => {
      reportMetric({
        name: 'LCP',
        value: metric.value,
        rating: getRating('LCP', metric.value),
      });
    });

    onTTFB((metric) => {
      reportMetric({
        name: 'TTFB',
        value: metric.value,
        rating: getRating('TTFB', metric.value),
      });
    });

    onINP((metric) => {
      reportMetric({
        name: 'INP',
        value: metric.value,
        rating: getRating('INP', metric.value),
      });
    });
  });
};

/**
 * Measure custom performance marks
 */
export const measurePerformance = (
  name: string,
  startMark: string,
  endMark: string
) => {
  if (!performance.measure) return;

  try {
    const measure = performance.measure(name, startMark, endMark);
    logger.trackPerformance(name, measure.duration, 'ms');
  } catch (error) {
    logger.error('Failed to measure performance', error);
  }
};

/**
 * Create performance mark
 */
export const mark = (name: string) => {
  if (!performance.mark) return;
  performance.mark(name);
};

/**
 * Track page load time
 */
export const trackPageLoad = () => {
  if (typeof window === 'undefined') return;

  window.addEventListener('load', () => {
    setTimeout(() => {
      const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      if (perfData) {
        logger.trackPerformance('DOM_Interactive', perfData.domInteractive, 'ms');
        logger.trackPerformance('DOM_Complete', perfData.domComplete, 'ms');
        logger.trackPerformance('Load_Complete', perfData.loadEventEnd, 'ms');
        
        const pageLoadTime = perfData.loadEventEnd - perfData.fetchStart;
        logger.trackPerformance('Page_Load_Time', pageLoadTime, 'ms');
      }
    }, 0);
  });
};

/**
 * Track resource timing
 */
export const trackResourceTiming = () => {
  if (typeof window === 'undefined') return;

  window.addEventListener('load', () => {
    const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
    
    const slowResources = resources.filter((resource) => resource.duration > 1000);
    
    if (slowResources.length > 0) {
      logger.warn('Slow resources detected', {
        count: slowResources.length,
        resources: slowResources.map((r) => ({
          name: r.name,
          duration: r.duration,
          size: (r as any).transferSize,
        })),
      });
    }
  });
};

/**
 * Initialize performance monitoring
 */
export const initPerformanceMonitoring = () => {
  if (import.meta.env.PROD) {
    reportWebVitals();
    trackPageLoad();
    trackResourceTiming();
  }
};
