/**
 * Centralized logging service for application-wide error tracking and monitoring
 * Supports multiple log levels and integrates with external monitoring services
 */

export enum LogLevel {
  DEBUG = 'debug',
  INFO = 'info',
  WARN = 'warn',
  ERROR = 'error',
  CRITICAL = 'critical',
}

interface LogEntry {
  level: LogLevel;
  message: string;
  timestamp: string;
  data?: any;
  context?: {
    url?: string;
    userAgent?: string;
    userId?: string;
    sessionId?: string;
    [key: string]: any;
  };
}

class Logger {
  private static instance: Logger;
  private isProduction: boolean;
  private apiEndpoint: string;
  private enableConsole: boolean;
  private buffer: LogEntry[] = [];
  private bufferSize: number = 10;
  private flushInterval: number = 30000; // 30 seconds

  private constructor() {
    this.isProduction = import.meta.env.PROD;
    this.apiEndpoint = import.meta.env.VITE_LOG_ENDPOINT || '/api/logs';
    this.enableConsole = !this.isProduction || import.meta.env.VITE_ENABLE_CONSOLE_LOGS === 'true';

    // Auto-flush buffer periodically
    if (this.isProduction) {
      setInterval(() => this.flush(), this.flushInterval);
    }

    // Flush on page unload
    window.addEventListener('beforeunload', () => this.flush());
  }

  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  private createLogEntry(
    level: LogLevel,
    message: string,
    data?: any,
    context?: any
  ): LogEntry {
    return {
      level,
      message,
      timestamp: new Date().toISOString(),
      data,
      context: {
        url: window.location.href,
        userAgent: navigator.userAgent,
        ...context,
      },
    };
  }

  private async sendToServer(entries: LogEntry[]): Promise<void> {
    if (!this.isProduction) return;

    try {
      await fetch(this.apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          logs: entries,
          environment: import.meta.env.MODE,
        }),
      });
    } catch (error) {
      console.error('Failed to send logs to server:', error);
    }
  }

  private addToBuffer(entry: LogEntry): void {
    this.buffer.push(entry);

    if (this.buffer.length >= this.bufferSize) {
      this.flush();
    }
  }

  private flush(): void {
    if (this.buffer.length === 0) return;

    const logsToSend = [...this.buffer];
    this.buffer = [];
    
    this.sendToServer(logsToSend);
  }

  private log(level: LogLevel, message: string, data?: any, context?: any): void {
    const entry = this.createLogEntry(level, message, data, context);

    // Console output
    if (this.enableConsole) {
      const consoleMethod = level === LogLevel.CRITICAL ? 'error' : level;
      console[consoleMethod](`[${level.toUpperCase()}] ${message}`, data || '');
    }

    // Add to buffer for server transmission
    this.addToBuffer(entry);
  }

  public debug(message: string, data?: any, context?: any): void {
    this.log(LogLevel.DEBUG, message, data, context);
  }

  public info(message: string, data?: any, context?: any): void {
    this.log(LogLevel.INFO, message, data, context);
  }

  public warn(message: string, data?: any, context?: any): void {
    this.log(LogLevel.WARN, message, data, context);
  }

  public error(message: string, error?: Error | any, context?: any): void {
    const errorData = error instanceof Error ? {
      message: error.message,
      stack: error.stack,
      name: error.name,
    } : error;

    this.log(LogLevel.ERROR, message, errorData, context);
  }

  public critical(message: string, error?: Error | any, context?: any): void {
    const errorData = error instanceof Error ? {
      message: error.message,
      stack: error.stack,
      name: error.name,
    } : error;

    this.log(LogLevel.CRITICAL, message, errorData, context);

    // Immediate flush for critical errors
    this.flush();
  }

  /**
   * Track custom events for analytics
   */
  public trackEvent(eventName: string, properties?: any): void {
    this.info(`Event: ${eventName}`, properties, { eventTracking: true });
  }

  /**
   * Track performance metrics
   */
  public trackPerformance(metric: string, value: number, unit: string = 'ms'): void {
    this.info(`Performance: ${metric}`, { value, unit }, { performance: true });
  }

  /**
   * Force flush all buffered logs
   */
  public forceFlush(): void {
    this.flush();
  }
}

// Export singleton instance
export const logger = Logger.getInstance();

// Convenience exports
export const logDebug = (message: string, data?: any, context?: any) => 
  logger.debug(message, data, context);

export const logInfo = (message: string, data?: any, context?: any) => 
  logger.info(message, data, context);

export const logWarn = (message: string, data?: any, context?: any) => 
  logger.warn(message, data, context);

export const logError = (message: string, error?: Error | any, context?: any) => 
  logger.error(message, error, context);

export const logCritical = (message: string, error?: Error | any, context?: any) => 
  logger.critical(message, error, context);

export const trackEvent = (eventName: string, properties?: any) => 
  logger.trackEvent(eventName, properties);

export const trackPerformance = (metric: string, value: number, unit?: string) => 
  logger.trackPerformance(metric, value, unit);
