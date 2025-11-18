/**
 * Sentry integration for error tracking and performance monitoring
 */

import * as Sentry from '@sentry/react';
import { config } from '@/config/env';

/**
 * Initialize Sentry error tracking
 */
export const initSentry = (): void => {
  if (!config.features.errorTracking || !config.monitoring.sentryDsn) {
    console.log('Sentry disabled or no DSN configured');
    return;
  }

  Sentry.init({
    dsn: config.monitoring.sentryDsn,
    environment: config.monitoring.sentryEnvironment,
    
    // Performance Monitoring
    integrations: [
      new Sentry.BrowserTracing({
        // Set sampling rate for performance monitoring
        tracePropagationTargets: [config.site.url, config.site.apiUrl],
      }),
      new Sentry.Replay({
        // Session replay for debugging
        maskAllText: true,
        blockAllMedia: true,
      }),
    ],

    // Performance traces sample rate (0.0 to 1.0)
    tracesSampleRate: config.app.env === 'production' ? 0.1 : 1.0,

    // Session Replay sample rate
    replaysSessionSampleRate: 0.1, // 10% of sessions
    replaysOnErrorSampleRate: 1.0, // 100% of sessions with errors

    // Release tracking
    release: `${config.app.name}@${config.app.version}`,

    // Before send hook to filter sensitive data
    beforeSend(event, hint) {
      // Filter out sensitive information
      if (event.request?.headers) {
        delete event.request.headers['Authorization'];
        delete event.request.headers['Cookie'];
      }

      // Add custom context
      event.tags = {
        ...event.tags,
        app_version: config.app.version,
      };

      return event;
    },

    // Ignore specific errors
    ignoreErrors: [
      // Browser extensions
      'top.GLOBALS',
      'canvas.contentDocument',
      // Random plugins/extensions
      'atomicFindClose',
      // Facebook errors
      'fb_xd_fragment',
      // Network errors that are expected
      'NetworkError',
      'Non-Error promise rejection captured',
    ],

    // Denyurls - don't report errors from these URLs
    denyUrls: [
      /extensions\//i,
      /^chrome:\/\//i,
      /^moz-extension:\/\//i,
    ],
  });

  console.log('Sentry initialized successfully');
};

/**
 * Capture exception manually
 */
export const captureException = (error: Error, context?: Record<string, any>): void => {
  if (!config.features.errorTracking) return;

  Sentry.captureException(error, {
    extra: context,
  });
};

/**
 * Capture message
 */
export const captureMessage = (
  message: string,
  level: Sentry.SeverityLevel = 'info'
): void => {
  if (!config.features.errorTracking) return;

  Sentry.captureMessage(message, level);
};

/**
 * Set user context
 */
export const setUser = (user: { id: string; email?: string; username?: string }): void => {
  Sentry.setUser(user);
};

/**
 * Clear user context
 */
export const clearUser = (): void => {
  Sentry.setUser(null);
};

/**
 * Add breadcrumb for debugging
 */
export const addBreadcrumb = (
  category: string,
  message: string,
  data?: Record<string, any>
): void => {
  Sentry.addBreadcrumb({
    category,
    message,
    data,
    level: 'info',
  });
};

/**
 * Start a performance transaction
 */
export const startTransaction = (name: string, op: string) => {
  return Sentry.startTransaction({
    name,
    op,
  });
};

export default Sentry;
