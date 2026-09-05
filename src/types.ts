export type DeviceMode = 'responsive' | 'mobile' | 'tablet' | 'laptop' | 'desktop' | '4k' | 'tv100';

export interface AccessibilitySettings {
  darkMode: boolean;
  fontSizeScale: 'normal' | 'large' | 'xlarge';
  highContrast: boolean;
  reducedMotion: boolean;
  dyslexicFont: boolean;
  screenReaderHighlight: boolean;
  tvPresentationMode: boolean;
}

export type ServiceCategory = 'enterprise' | 'ai' | 'digital';

export interface ServiceItem {
  id: string;
  title: string;
  category: ServiceCategory;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  keyFeatures: string[];
  workflowFlow?: string;
  /** What the architecture is engineered to achieve — a design target, not a measured client result. */
  engineeredFor?: string;
}

export type TechCategory = 'frontend' | 'backend' | 'databases' | 'ai' | 'cloud' | 'enterprise';

export interface TechItem {
  name: string;
  category: TechCategory;
  description: string;
  popularFor: string;
  badge: string;
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  description: string;
  deliverables: string;
  duration: string;
  keyActivities: string[];
}

/**
 * A representative solution blueprint showing how we approach a class of problem.
 * These describe our engineering approach and design targets — they are not
 * claimed results from named client engagements.
 */
export interface CapabilityShowcase {
  id: string;
  title: string;
  domain: string;
  scale: string;
  summary: string;
  problem: string;
  approach: string;
  /** Design targets the architecture is built to hit. */
  targets: { label: string; value: string }[];
  techUsed: string[];
  featured: boolean;
  /**
   * Set when the blueprint is an actual product we build and operate, rather
   * than a representative architecture. Rendered as a badge on the card.
   */
  status?: string;
}

export interface ProductItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  url: string;
  sector: string;
  /** Two-letter mark rendered in the generated card visual. */
  monogram: string;
  /**
   * Walkthrough recording. Wired up ahead of the files existing — the demo
   * section falls back to a live-walkthrough invitation until they do.
   */
  demo: {
    video: string;
    poster: string;
    /** Optional WebVTT captions track. */
    captions?: string;
    /** What the recording actually shows, for the section copy. */
    covers: string;
  };
}

export interface AIRecommendation {
  recommendedArchitecture: string;
  summary: string;
  recommendedTechStack: {
    frontend: string[];
    backend: string[];
    database: string[];
    aiAutomation: string[];
    cloud: string[];
  };
  milestones: { phase: string; duration: string; deliverables: string }[];
  estimatedTimelineWeeks: string;
  aiInsight: string;
}
