/**
 * Rate limiting utility to prevent abuse and spam
 * Implements client-side rate limiting for API calls and form submissions
 */

interface RateLimitConfig {
  maxRequests: number;
  windowMs: number;
}

interface RateLimitEntry {
  count: number;
  resetTime: number;
}

class RateLimiter {
  private static instance: RateLimiter;
  private storage: Map<string, RateLimitEntry>;
  private config: RateLimitConfig;

  private constructor(config: RateLimitConfig) {
    this.storage = new Map();
    this.config = config;
    
    // Clean up expired entries periodically
    setInterval(() => this.cleanup(), this.config.windowMs);
  }

  public static getInstance(config?: RateLimitConfig): RateLimiter {
    if (!RateLimiter.instance) {
      RateLimiter.instance = new RateLimiter(
        config || { maxRequests: 5, windowMs: 60000 }
      );
    }
    return RateLimiter.instance;
  }

  private cleanup(): void {
    const now = Date.now();
    for (const [key, entry] of this.storage.entries()) {
      if (entry.resetTime <= now) {
        this.storage.delete(key);
      }
    }
  }

  public check(identifier: string): {
    allowed: boolean;
    remaining: number;
    resetTime: number;
  } {
    const now = Date.now();
    let entry = this.storage.get(identifier);

    // Create new entry or reset if window expired
    if (!entry || entry.resetTime <= now) {
      entry = {
        count: 0,
        resetTime: now + this.config.windowMs,
      };
      this.storage.set(identifier, entry);
    }

    const allowed = entry.count < this.config.maxRequests;
    
    if (allowed) {
      entry.count++;
    }

    return {
      allowed,
      remaining: Math.max(0, this.config.maxRequests - entry.count),
      resetTime: entry.resetTime,
    };
  }

  public reset(identifier: string): void {
    this.storage.delete(identifier);
  }

  public getRemainingTime(identifier: string): number {
    const entry = this.storage.get(identifier);
    if (!entry) return 0;
    
    const remaining = entry.resetTime - Date.now();
    return Math.max(0, remaining);
  }
}

export const createRateLimiter = (config?: RateLimitConfig) => {
  return RateLimiter.getInstance(config);
};

/**
 * Hook for rate limiting in React components
 */
export const useRateLimit = (
  identifier: string,
  config?: RateLimitConfig
): {
  check: () => boolean;
  remaining: number;
  resetTime: number;
  reset: () => void;
} => {
  const limiter = RateLimiter.getInstance(config);
  const result = limiter.check(identifier);

  return {
    check: () => limiter.check(identifier).allowed,
    remaining: result.remaining,
    resetTime: result.resetTime,
    reset: () => limiter.reset(identifier),
  };
};

/**
 * Decorator for rate limiting API calls
 */
export const withRateLimit = <T extends (...args: any[]) => Promise<any>>(
  fn: T,
  identifier: string,
  config?: RateLimitConfig
): T => {
  const limiter = RateLimiter.getInstance(config);

  return (async (...args: any[]) => {
    const result = limiter.check(identifier);
    
    if (!result.allowed) {
      const waitTime = Math.ceil(limiter.getRemainingTime(identifier) / 1000);
      throw new Error(
        `Taxa de solicitação excedida. Tente novamente em ${waitTime} segundos.`
      );
    }

    return fn(...args);
  }) as T;
};

export default RateLimiter;
