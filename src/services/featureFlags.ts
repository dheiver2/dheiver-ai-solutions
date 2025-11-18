/**
 * Feature flags service for controlled feature rollout
 */

import { config } from '@/config/env';

export interface FeatureFlags {
  chatbot: boolean;
  blog: boolean;
  newsletter: boolean;
  analytics: boolean;
  errorTracking: boolean;
  pwa: boolean;
  serviceWorker: boolean;
  darkMode?: boolean;
  betaFeatures?: boolean;
}

class FeatureFlagService {
  private static instance: FeatureFlagService;
  private flags: FeatureFlags;

  private constructor() {
    this.flags = {
      chatbot: config.features.chatbot,
      blog: config.features.blog,
      newsletter: config.features.newsletter,
      analytics: config.features.analytics,
      errorTracking: config.features.errorTracking,
      pwa: config.features.pwa,
      serviceWorker: config.features.serviceWorker,
      // Additional flags can be set here
      darkMode: false,
      betaFeatures: false,
    };
  }

  public static getInstance(): FeatureFlagService {
    if (!FeatureFlagService.instance) {
      FeatureFlagService.instance = new FeatureFlagService();
    }
    return FeatureFlagService.instance;
  }

  /**
   * Check if a feature is enabled
   */
  public isEnabled(feature: keyof FeatureFlags): boolean {
    return this.flags[feature] ?? false;
  }

  /**
   * Enable a feature
   */
  public enable(feature: keyof FeatureFlags): void {
    this.flags[feature] = true;
  }

  /**
   * Disable a feature
   */
  public disable(feature: keyof FeatureFlags): void {
    this.flags[feature] = false;
  }

  /**
   * Toggle a feature
   */
  public toggle(feature: keyof FeatureFlags): void {
    this.flags[feature] = !this.flags[feature];
  }

  /**
   * Get all feature flags
   */
  public getAllFlags(): FeatureFlags {
    return { ...this.flags };
  }

  /**
   * Override flags (useful for testing)
   */
  public override(flags: Partial<FeatureFlags>): void {
    this.flags = { ...this.flags, ...flags };
  }
}

// Export singleton instance
export const featureFlags = FeatureFlagService.getInstance();

// Convenience hook for React components
export const useFeatureFlag = (feature: keyof FeatureFlags): boolean => {
  return featureFlags.isEnabled(feature);
};

export default featureFlags;
