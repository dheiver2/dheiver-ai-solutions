import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { initSentry } from './services/sentry';
import { initAnalytics } from './services/analytics';
import { initPerformanceMonitoring } from './utils/performance';
import { logger } from './services/logger';

// Initialize error tracking
initSentry();

// Initialize analytics
initAnalytics();

// Initialize performance monitoring
initPerformanceMonitoring();

// Log application start
logger.info('Application starting', {
  version: import.meta.env.VITE_APP_VERSION || '1.0.0',
  environment: import.meta.env.MODE,
});

// Create root and render app
const rootElement = document.getElementById('root');

if (!rootElement) {
  logger.critical('Root element not found');
  throw new Error('Failed to find root element');
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// Log successful mount
logger.info('Application mounted successfully');
