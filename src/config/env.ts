/**
 * Environment configuration utility
 * Provides type-safe access to environment variables with fallbacks
 */

interface AppConfig {
  app: {
    name: string;
    version: string;
    env: string;
  };
  site: {
    url: string;
    apiUrl: string;
  };
  contact: {
    email: string;
    phone: string;
    supportEmail: string;
  };
  analytics: {
    googleAnalyticsId?: string;
    googleTagManagerId?: string;
    facebookPixelId?: string;
    linkedinInsightTag?: string;
  };
  monitoring: {
    sentryDsn?: string;
    sentryEnvironment: string;
    logEndpoint: string;
    enableConsoleLogs: boolean;
  };
  features: {
    chatbot: boolean;
    blog: boolean;
    newsletter: boolean;
    analytics: boolean;
    errorTracking: boolean;
    pwa: boolean;
    serviceWorker: boolean;
  };
  social: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
  seo: {
    defaultOgImage: string;
    twitterHandle?: string;
  };
  rateLimiting: {
    maxRequests: number;
    windowMs: number;
  };
}

const getEnvVar = (key: string, defaultValue: string = ''): string => {
  return import.meta.env[key] || defaultValue;
};

const getEnvBoolean = (key: string, defaultValue: boolean = false): boolean => {
  const value = import.meta.env[key];
  if (value === undefined) return defaultValue;
  return value === 'true' || value === true;
};

const getEnvNumber = (key: string, defaultValue: number = 0): number => {
  const value = import.meta.env[key];
  if (value === undefined) return defaultValue;
  const parsed = parseInt(value, 10);
  return isNaN(parsed) ? defaultValue : parsed;
};

export const config: AppConfig = {
  app: {
    name: getEnvVar('VITE_APP_NAME', 'Dr. Dheiver Santos - Consultoria em IA'),
    version: getEnvVar('VITE_APP_VERSION', '1.0.0'),
    env: getEnvVar('VITE_APP_ENV', import.meta.env.MODE),
  },
  site: {
    url: getEnvVar('VITE_SITE_URL', 'https://dheiver.com'),
    apiUrl: getEnvVar('VITE_API_URL', 'https://api.dheiver.com'),
  },
  contact: {
    email: getEnvVar('VITE_CONTACT_EMAIL', 'contato@dheiver.com'),
    phone: getEnvVar('VITE_CONTACT_PHONE', '+55 (11) 99999-9999'),
    supportEmail: getEnvVar('VITE_SUPPORT_EMAIL', 'suporte@dheiver.com'),
  },
  analytics: {
    googleAnalyticsId: getEnvVar('VITE_GOOGLE_ANALYTICS_ID'),
    googleTagManagerId: getEnvVar('VITE_GOOGLE_TAG_MANAGER_ID'),
    facebookPixelId: getEnvVar('VITE_FACEBOOK_PIXEL_ID'),
    linkedinInsightTag: getEnvVar('VITE_LINKEDIN_INSIGHT_TAG'),
  },
  monitoring: {
    sentryDsn: getEnvVar('VITE_SENTRY_DSN'),
    sentryEnvironment: getEnvVar('VITE_SENTRY_ENVIRONMENT', 'production'),
    logEndpoint: getEnvVar('VITE_LOG_ENDPOINT', '/api/logs'),
    enableConsoleLogs: getEnvBoolean('VITE_ENABLE_CONSOLE_LOGS', !import.meta.env.PROD),
  },
  features: {
    chatbot: getEnvBoolean('VITE_ENABLE_CHATBOT', true),
    blog: getEnvBoolean('VITE_ENABLE_BLOG', true),
    newsletter: getEnvBoolean('VITE_ENABLE_NEWSLETTER', true),
    analytics: getEnvBoolean('VITE_ENABLE_ANALYTICS', true),
    errorTracking: getEnvBoolean('VITE_ENABLE_ERROR_TRACKING', true),
    pwa: getEnvBoolean('VITE_ENABLE_PWA', true),
    serviceWorker: getEnvBoolean('VITE_ENABLE_SERVICE_WORKER', true),
  },
  social: {
    linkedin: getEnvVar('VITE_LINKEDIN_URL'),
    github: getEnvVar('VITE_GITHUB_URL'),
    twitter: getEnvVar('VITE_TWITTER_URL'),
  },
  seo: {
    defaultOgImage: getEnvVar('VITE_DEFAULT_OG_IMAGE', '/og-image.jpg'),
    twitterHandle: getEnvVar('VITE_TWITTER_HANDLE'),
  },
  rateLimiting: {
    maxRequests: getEnvNumber('VITE_RATE_LIMIT_REQUESTS', 5),
    windowMs: getEnvNumber('VITE_RATE_LIMIT_WINDOW', 60000),
  },
};

export const isDevelopment = import.meta.env.DEV;
export const isProduction = import.meta.env.PROD;
export const isTest = import.meta.env.MODE === 'test';

export default config;
