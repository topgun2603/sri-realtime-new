export type NavTab = 
  | 'home'
  | 'services'
  | 'ai-hub'
  | 'tech-stack'
  | 'delivery-process'
  | 'portfolio'
  | 'estimator'
  | 'contact';

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
  metrics?: string;
  samplePreviewType?: 'mis' | 'erp' | 'inventory' | 'ecommerce' | 'crm' | 'scm' | 'chatbot' | 'predictive' | 'docproc' | 'mobile' | 'web' | 'api';
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

export interface PortfolioItem {
  id: string;
  title: string;
  domain: string;
  clientType: 'Enterprise' | 'SME' | 'Startup';
  summary: string;
  challenge: string;
  solution: string;
  metrics: { label: string; value: string }[];
  techUsed: string[];
  featured: boolean;
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
