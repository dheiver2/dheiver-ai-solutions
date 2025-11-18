/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly MODE: string;
  readonly DEV: boolean;
  readonly PROD: boolean;
  readonly SSR: boolean;
  readonly VITE_APP_NAME: string;
  readonly VITE_APP_VERSION: string;
  readonly VITE_APP_ENV: string;
  readonly VITE_SITE_URL: string;
  readonly VITE_API_URL: string;
  readonly VITE_CONTACT_EMAIL: string;
  readonly VITE_CONTACT_PHONE: string;
  readonly VITE_SUPPORT_EMAIL: string;
  readonly VITE_GOOGLE_ANALYTICS_ID: string;
  readonly VITE_GOOGLE_TAG_MANAGER_ID: string;
  readonly VITE_FACEBOOK_PIXEL_ID: string;
  readonly VITE_LINKEDIN_INSIGHT_TAG: string;
  readonly VITE_SENTRY_DSN: string;
  readonly VITE_SENTRY_ENVIRONMENT: string;
  readonly VITE_LOG_ENDPOINT: string;
  readonly VITE_ENABLE_CONSOLE_LOGS: string;
  readonly VITE_ENABLE_CHATBOT: string;
  readonly VITE_ENABLE_BLOG: string;
  readonly VITE_ENABLE_NEWSLETTER: string;
  readonly VITE_ENABLE_ANALYTICS: string;
  readonly VITE_ENABLE_ERROR_TRACKING: string;
  readonly VITE_RECAPTCHA_SITE_KEY: string;
  readonly VITE_STRIPE_PUBLIC_KEY: string;
  readonly VITE_CALENDLY_URL: string;
  readonly VITE_LINKEDIN_URL: string;
  readonly VITE_GITHUB_URL: string;
  readonly VITE_TWITTER_URL: string;
  readonly VITE_DEFAULT_OG_IMAGE: string;
  readonly VITE_TWITTER_HANDLE: string;
  readonly VITE_ENABLE_PWA: string;
  readonly VITE_ENABLE_SERVICE_WORKER: string;
  readonly VITE_CACHE_VERSION: string;
  readonly VITE_RATE_LIMIT_REQUESTS: string;
  readonly VITE_RATE_LIMIT_WINDOW: string;
  readonly VITE_ENABLE_DEVTOOLS: string;
  readonly VITE_ENABLE_SOURCE_MAPS: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
