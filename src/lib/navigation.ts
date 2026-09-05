export interface NavItem {
  path: string;
  label: string;
  /** Shown in the mobile drawer under the label. */
  hint: string;
}

export const NAV_ITEMS: NavItem[] = [
  { path: '/', label: 'Home', hint: 'Who we are and what we build' },
  { path: '/services', label: 'Services', hint: 'Enterprise, AI and digital product work' },
  { path: '/ai', label: 'AI & Automation', hint: 'Assistants, prediction and document AI' },
  { path: '/technology', label: 'Technology', hint: 'The stack we build on' },
  { path: '/process', label: 'Process', hint: 'How a project runs, stage by stage' },
  { path: '/work', label: 'Capabilities', hint: 'Solution blueprints we can build' },
  { path: '/estimator', label: 'Estimator', hint: 'Scope and timeline calculator' },
  { path: '/contact', label: 'Contact', hint: 'Start a conversation' },
];
