import {
  ProcessStep,
  ServiceItem,
  TechItem,
  CapabilityShowcase,
  ProductItem,
} from '../types';

export const COMPANY_INFO = {
  name: 'SRI REAL TIME',
  tagline: 'Enterprise systems, engineered in real time.',
  summary:
    'SRI REAL TIME is a full-service technology company specialising in the design, development and deployment of enterprise-grade digital systems — from mobile applications and professional websites to ERP, CRM, supply chain, inventory and MIS platforms with AI woven through them.',
  aboutDetailed:
    'Founded on a conviction that clean design and robust engineering belong together, SRI REAL TIME combines deep technical expertise with a client-first approach — turning complex business problems into elegant, scalable digital products. We partner with startups, SMEs and enterprises to help them grow, automate operations and stay ahead in a competitive market.',
  vision:
    'To be a trusted technology partner for businesses seeking to establish and expand their digital footprint through innovative, high-quality enterprise and mobile solutions.',
  mission:
    'To deliver reliable, user-friendly and future-ready digital products and enterprise systems that empower our clients to achieve their business goals.',
  stats: [
    { label: 'Projects Delivered', value: '50', suffix: '+', detail: 'Successful releases' },
    { label: 'Domains Served', value: '10', suffix: '+', detail: 'Industry verticals' },
    { label: 'Support Coverage', value: '24/7', suffix: '', detail: 'Continuous SLA' },
    { label: 'Delivery Stages', value: '7', suffix: '', detail: 'Discovery to handover' },
  ],
  email: 'org@srirealtime.com',
  website: 'https://srirealtime.com',
  offices: [
    { city: 'Coimbatore', region: 'Tamil Nadu, India', role: 'Engineering & delivery hub' },
  ],
  responseWindow: 'Within 1 business day',
};

/** In-house products built and operated by SRI REAL TIME. */
export const PRODUCTS: ProductItem[] = [
  {
    id: 'pasumaivelanmai',
    name: 'Pasumaivelanmai',
    tagline: 'Agriculture, digitised end to end',
    description:
      'A platform connecting growers with modern agricultural practice — built in-house and run in production, covering the field-to-market journey.',
    url: 'https://pasumaivelanmai.com',
    sector: 'AgriTech',
    monogram: 'PV',
    demo: {
      video: '/videos/pasumaivelanmai-demo.mp4',
      poster: '/images/demo-pasumaivelanmai.png',
      captions: '/videos/pasumaivelanmai-demo.vtt',
      covers: 'Grower onboarding, crop records and the field-to-market flow.',
    },
  },
  {
    id: 'pasumaitrade',
    name: 'Pasumai Trade',
    tagline: 'Commodity trade, moving in real time',
    description:
      'A trading and marketplace product for agricultural commodities, engineered on the same enterprise foundations we build for clients.',
    url: 'https://pasumaitrade.com',
    sector: 'Marketplace',
    monogram: 'PT',
    demo: {
      video: '/videos/pasumaitrade-demo.mp4',
      poster: '/images/demo-pasumaitrade.png',
      captions: '/videos/pasumaitrade-demo.vtt',
      covers: 'Listing a commodity, matching a buyer and closing the trade.',
    },
  },
];

export const SERVICES_DATA: ServiceItem[] = [
  // ---------------- Enterprise Business Systems ----------------
  {
    id: 'mis',
    title: 'Management Information System',
    category: 'enterprise',
    shortDescription:
      'Centralised dashboards, KPI reporting and real-time analytics that give management a single version of the truth.',
    fullDescription:
      'Turn scattered operational data into strategic intelligence with real-time MIS dashboards, automated executive summaries and cross-department analytics.',
    iconName: 'BarChart3',
    keyFeatures: [
      'Centralised executive dashboards',
      'Automated KPI reporting and export',
      'Real-time aggregation across systems',
      'Role-based access and granular permissions',
    ],
    engineeredFor: 'Shorter executive reporting cycles',
  },
  {
    id: 'erp',
    title: 'Enterprise Resource Planning',
    category: 'enterprise',
    shortDescription:
      'End-to-end ERP spanning finance, HR, procurement, production and reporting on one unified platform.',
    fullDescription:
      'Unify core operations with a custom or modular ERP architecture connecting finance, payroll, procurement, production schedules and compliance.',
    iconName: 'Settings',
    keyFeatures: [
      'Financial ledger and multi-currency accounting',
      'Human resource and payroll management',
      'Procurement, purchase orders and vendor portal',
      'Production planning and resource allocation',
    ],
    engineeredFor: 'Unified operational visibility across units',
  },
  {
    id: 'inventory',
    title: 'Inventory Management',
    category: 'enterprise',
    shortDescription:
      'Smart stock control, warehouse management, multi-location tracking and automated reorder workflows.',
    fullDescription:
      'Precision over stock levels, multi-warehouse movements, SKU barcoding, batch expiry and automated reorder notifications.',
    iconName: 'Boxes',
    keyFeatures: [
      'Multi-location and warehouse tracking',
      'Automated reorder point workflows',
      'Barcode and QR scanner integration',
      'Batch tracking with FIFO/LIFO valuation',
    ],
    engineeredFor: 'High stock accuracy and stockout prevention',
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Platforms',
    category: 'enterprise',
    shortDescription:
      'Feature-rich storefronts with catalogues, secure checkout, payment gateways and order management.',
    fullDescription:
      'Scalable digital storefronts engineered for conversion, fast page loads, frictionless checkout and automated multi-channel order processing.',
    iconName: 'ShoppingBag',
    keyFeatures: [
      'High-speed responsive product catalogue',
      'Multi-currency and localised payment gateways',
      'Automated fulfilment and order tracking',
      'Inventory sync and promotions engine',
    ],
    engineeredFor: 'Sub-second checkout and higher conversion',
  },
  {
    id: 'crm',
    title: 'Customer Relationship Management',
    category: 'enterprise',
    shortDescription:
      'A 360° view of every customer — leads, pipeline, history, automated follow-ups and analytics.',
    fullDescription:
      'Give sales and customer success teams automated deal pipelines, communication timelines, lead scoring and retention analytics.',
    iconName: 'Users',
    keyFeatures: [
      'Visual sales pipeline and deal stages',
      'Automated lead assignment and follow-ups',
      'Full customer interaction history',
      'Sales forecasting and activity tracking',
    ],
    engineeredFor: 'Higher lead-to-close conversion',
  },
  {
    id: 'scm',
    title: 'Supply Chain Management',
    category: 'enterprise',
    shortDescription:
      'End-to-end supply chain visibility — sourcing, logistics, vendor management and demand forecasting.',
    fullDescription:
      'Optimise logistics, vendor compliance, raw material procurement and predictive shipment routing for resilient operations.',
    iconName: 'Truck',
    keyFeatures: [
      'Vendor onboarding and performance scorecards',
      'Real-time shipment and fleet tracking',
      'Demand forecasting from historical trends',
      'Logistics cost optimisation',
    ],
    engineeredFor: 'Reduced supply chain turnaround latency',
  },

  // ---------------- AI & Automation ----------------
  {
    id: 'mfg-ai-workflow',
    title: 'AI-Powered Machine Workflow Automation',
    category: 'ai',
    shortDescription:
      'Turn traditional machine operations into an intelligent, automated and predictive manufacturing environment.',
    fullDescription:
      'Connect machines, sensors, production workflows and maintenance operations to continuously monitor machine health and production performance. AI models analyse telemetry, historical failures and operational patterns to detect anomalies and predict failures before they cause unplanned downtime.',
    iconName: 'Factory',
    keyFeatures: [
      'Machine and IoT telemetry ingestion',
      'AI anomaly detection and error identification',
      'Root-cause analysis with resolution recommendations',
      'Automated maintenance workflow dispatch',
      'Verification loop that feeds back into prediction',
    ],
    workflowFlow:
      'Machine/IoT Data → Real-Time Monitoring → AI Anomaly Detection → Error Identification → Root-Cause Analysis → AI Resolution Recommendation → Automated Maintenance Workflow → Technician Action → Verification → Learning & Prediction',
    engineeredFor: 'Predictive telemetry and minimal unplanned downtime',
  },
  {
    id: 'ai-chatbots',
    title: 'AI Assistants & Conversational Interfaces',
    category: 'ai',
    shortDescription:
      'Context-aware conversational AI for customer support, internal knowledge access and lead qualification.',
    fullDescription:
      'Deploy intelligent assistants grounded in your own enterprise knowledge base, resolving routine queries instantly and escalating cleanly when a human is needed.',
    iconName: 'Bot',
    keyFeatures: [
      'Multilingual RAG over your knowledge base',
      'Natural conversation via Gemini or GPT models',
      'Seamless human escalation and ticket routing',
      'Multi-channel: web, mobile, WhatsApp, Slack',
    ],
    engineeredFor: 'Round-the-clock response with high deflection',
  },
  {
    id: 'predictive-analytics',
    title: 'Predictive Analytics & Business Intelligence',
    category: 'ai',
    shortDescription:
      'Machine learning models forecasting demand, churn, revenue trends and financial anomalies.',
    fullDescription:
      'Anticipate customer behaviour, detect anomalies, forecast revenue and optimise pricing with models trained on your own operational history.',
    iconName: 'TrendingUp',
    keyFeatures: [
      'Time-series demand and revenue forecasting',
      'Churn prediction and risk scoring',
      'Anomaly detection across transactions',
      'Custom BI dashboards and visualisation',
    ],
    engineeredFor: 'Reliable forecasting on a 90-day horizon',
  },
  {
    id: 'doc-processing',
    title: 'Intelligent Document Processing',
    category: 'ai',
    shortDescription:
      'Automated extraction from invoices, receipts, contracts and identity documents using OCR and NLP.',
    fullDescription:
      'Eliminate manual data entry by extracting fields, line items and verification data from PDFs, scans and email attachments automatically.',
    iconName: 'FileText',
    keyFeatures: [
      'OCR and layout-aware field extraction',
      'Invoice matching against ERP purchase orders',
      'Identity document verification',
      'Automatic categorisation into structured JSON',
    ],
    engineeredFor: 'Near-elimination of manual data entry',
  },

  // ---------------- Digital Product Development ----------------
  {
    id: 'mobile-dev',
    title: 'Mobile App Development',
    category: 'digital',
    shortDescription:
      'Native Android and iOS, cross-platform Flutter and React Native, UI/UX design and ongoing support.',
    fullDescription:
      'High-performance, intuitive mobile experiences engineered for fluid frame rates, offline persistence and deep hardware integration.',
    iconName: 'Smartphone',
    keyFeatures: [
      'Native iOS (Swift) and Android (Kotlin)',
      'Cross-platform Flutter and React Native',
      'Offline-first sync and push notifications',
      'App Store and Play Store release management',
    ],
    engineeredFor: 'Fluid 60fps interfaces that work offline',
  },
  {
    id: 'web-dev',
    title: 'Web Platforms & Custom Applications',
    category: 'digital',
    shortDescription:
      'Business sites, custom web applications, mobile-first responsive design and CMS integration.',
    fullDescription:
      'Modern, accessible, fast web applications designed for flawless performance on every screen, from phones to large-format displays.',
    iconName: 'Globe',
    keyFeatures: [
      'React, Vite, Next.js and Tailwind architecture',
      'Responsive from mobile to large-format display',
      'SEO-ready with strong Core Web Vitals',
      'Headless CMS and custom backend integration',
    ],
    engineeredFor: 'Top-tier Lighthouse performance and accessibility',
  },
  {
    id: 'api-cloud',
    title: 'API Engineering & Cloud Infrastructure',
    category: 'digital',
    shortDescription:
      'RESTful and GraphQL APIs, third-party integrations, AWS and Azure deployment, and DevOps support.',
    fullDescription:
      'Resilient microservices, secure API gateways, auto-scaling cloud infrastructure and automated deployment pipelines.',
    iconName: 'Cloud',
    keyFeatures: [
      'REST and GraphQL API design and documentation',
      'AWS (EC2, Lambda, RDS, S3) and Azure setup',
      'Docker containerisation and Kubernetes orchestration',
      'CI/CD automation with GitHub Actions',
    ],
    engineeredFor: 'High-availability infrastructure with zero-downtime deploys',
  },
];

export const WHY_CHOOSE_US = [
  {
    title: 'Experienced Team',
    description:
      'Developers, designers and domain experts who have shipped production systems, not just prototypes.',
    icon: 'Award',
  },
  {
    title: 'Built to Fit',
    description:
      'Every engagement is architected around your operations. No off-the-shelf template forced into shape.',
    icon: 'Cpu',
  },
  {
    title: 'Predictable Delivery',
    description:
      'Sprint cadence, visible progress and dates we commit to — with scope handled openly, not silently.',
    icon: 'Clock',
  },
  {
    title: 'Client-Centric Approach',
    description:
      'Continuous communication, transparent reporting and dedicated support across the whole lifecycle.',
    icon: 'HeartHandshake',
  },
  {
    title: 'Honest Pricing',
    description:
      'Competitive, transparent rates. You see what drives cost and can trade scope against it deliberately.',
    icon: 'DollarSign',
  },
  {
    title: 'End-to-End Capability',
    description:
      'Discovery, design, build, deploy and maintain — one partner across the full digital journey.',
    icon: 'Layers',
  },
];

export const DELIVERY_PROCESS: ProcessStep[] = [
  {
    stepNumber: '01',
    title: 'Requirement Gathering',
    description:
      'Understanding your business goals, user needs and technical constraints through structured workshops.',
    deliverables: 'Product requirement document, scope matrix and feature roadmap',
    duration: '1–2 weeks',
    keyActivities: [
      'Stakeholder interviews',
      'User persona mapping',
      'Technical feasibility analysis',
    ],
  },
  {
    stepNumber: '02',
    title: 'Strategy & Architecture',
    description:
      'Defining the technology stack, system design, integration map and delivery roadmap.',
    deliverables: 'Architecture diagram, database schema and API specifications',
    duration: '1–2 weeks',
    keyActivities: [
      'Cloud infrastructure planning',
      'Entity relationship modelling',
      'Security and compliance design',
    ],
  },
  {
    stepNumber: '03',
    title: 'UX & UI Design',
    description:
      'Creating intuitive, brand-aligned interfaces with wireframes, prototypes and user testing.',
    deliverables: 'Interactive prototypes, design system and accessibility specs',
    duration: '2–3 weeks',
    keyActivities: [
      'Wireframing and user journeys',
      'High-fidelity component library',
      'Usability feedback loops',
    ],
  },
  {
    stepNumber: '04',
    title: 'Development',
    description:
      'Agile sprint-based development with continuous integration, code review and client demos.',
    deliverables: 'Sprint builds, staging environment and a clean repository',
    duration: '4–8 weeks',
    keyActivities: [
      'Frontend and mobile implementation',
      'Backend API and database build',
      'AI model training and integration',
    ],
  },
  {
    stepNumber: '05',
    title: 'Quality Assurance',
    description: 'Rigorous functional, performance and security testing before every release.',
    deliverables: 'QA audit report, vulnerability matrix and performance logs',
    duration: '1–2 weeks',
    keyActivities: [
      'Automated unit and end-to-end tests',
      'Cross-browser and cross-device testing',
      'Penetration and load testing',
    ],
  },
  {
    stepNumber: '06',
    title: 'Deployment',
    description:
      'Smooth, zero-downtime production launch on cloud infrastructure with rollback capability.',
    deliverables: 'Live application, domain and SSL setup, infrastructure monitoring',
    duration: '3–5 days',
    keyActivities: [
      'Production CI/CD trigger',
      'DNS routing and SSL certification',
      'Post-deployment smoke tests',
    ],
  },
  {
    stepNumber: '07',
    title: 'Support & Maintenance',
    description:
      'Ongoing monitoring, updates, feature enhancements and incident support after launch.',
    deliverables: 'Support SLA, scheduled security patches and analytics reporting',
    duration: 'Ongoing',
    keyActivities: [
      'Proactive health checks',
      'Iterative feature updates',
      'Dedicated support ticket desk',
    ],
  },
];

export const TECH_EXPERTISE: TechItem[] = [
  // Frontend
  { name: 'React', category: 'frontend', description: 'Component-driven UI architecture.', popularFor: 'Dynamic web apps and dashboards', badge: 'Core' },
  { name: 'Vite', category: 'frontend', description: 'Ultra-fast build tool with instant cold start.', popularFor: 'High-performance SPA builds', badge: 'Core' },
  { name: 'Tailwind CSS', category: 'frontend', description: 'Utility-first styling for responsive layouts.', popularFor: 'Mobile to large-format responsive UI', badge: 'Core' },
  { name: 'Next.js', category: 'frontend', description: 'Full-stack React framework with SSR and SSG.', popularFor: 'Enterprise portals and e-commerce', badge: 'Framework' },
  { name: 'Vue.js', category: 'frontend', description: 'Progressive JavaScript framework.', popularFor: 'Lightweight enterprise dashboards', badge: 'Framework' },
  { name: 'Flutter', category: 'frontend', description: 'Cross-platform UI toolkit from Google.', popularFor: 'Native iOS and Android apps', badge: 'Mobile' },
  { name: 'React Native', category: 'frontend', description: 'Native mobile UI built with React.', popularFor: 'Cross-platform mobile ecosystems', badge: 'Mobile' },

  // Backend
  { name: 'Node.js', category: 'backend', description: 'Asynchronous event-driven JavaScript runtime.', popularFor: 'High-throughput API backends', badge: 'Runtime' },
  { name: 'Express.js', category: 'backend', description: 'Fast, unopinionated web framework for Node.', popularFor: 'RESTful microservices', badge: 'Framework' },
  { name: 'FastAPI', category: 'backend', description: 'Modern, high-performance Python framework.', popularFor: 'AI/ML integration and data processing', badge: 'AI Service' },
  { name: 'Django', category: 'backend', description: 'High-level Python framework with a strong ORM.', popularFor: 'Enterprise web systems', badge: 'Framework' },
  { name: 'REST & GraphQL', category: 'backend', description: 'API query and state transport standards.', popularFor: 'Clean frontend-backend contracts', badge: 'API Standard' },

  // Databases
  { name: 'PostgreSQL', category: 'databases', description: 'Advanced open-source relational database.', popularFor: 'Transactional ERP, CRM and financials', badge: 'Relational' },
  { name: 'MySQL', category: 'databases', description: 'Reliable, high-speed relational engine.', popularFor: 'E-commerce and management systems', badge: 'Relational' },
  { name: 'MongoDB', category: 'databases', description: 'Flexible document-oriented NoSQL database.', popularFor: 'Real-time analytics and catalogues', badge: 'NoSQL' },
  { name: 'Redis', category: 'databases', description: 'In-memory data structure store for caching.', popularFor: 'Sub-millisecond session and rate limiting', badge: 'Cache' },
  { name: 'SQLite', category: 'databases', description: 'Embedded lightweight SQL database.', popularFor: 'Offline mobile data and local storage', badge: 'Embedded' },
  { name: 'AWS RDS', category: 'databases', description: 'Managed cloud relational database service.', popularFor: 'Auto-scaling enterprise databases', badge: 'Cloud DB' },
  { name: 'Firebase', category: 'databases', description: 'Real-time document database and auth.', popularFor: 'Live sync and rapid prototypes', badge: 'BaaS' },

  // AI / ML
  { name: 'Claude', category: 'ai', description: 'Anthropic’s frontier models, strong on long-context reasoning.', popularFor: 'Agents, code generation and document analysis', badge: 'Frontier LLM' },
  { name: 'Gemini & GPT', category: 'ai', description: 'Frontier LLMs for reasoning and retrieval.', popularFor: 'Assistants, summarisation and agents', badge: 'GenAI' },
  { name: 'TensorFlow', category: 'ai', description: 'End-to-end machine learning platform.', popularFor: 'Deep learning and computer vision', badge: 'ML Library' },
  { name: 'PyTorch', category: 'ai', description: 'Flexible deep learning framework.', popularFor: 'Predictive analytics and custom models', badge: 'ML Library' },
  { name: 'scikit-learn', category: 'ai', description: 'Classical machine learning toolkit.', popularFor: 'Classification and regression pipelines', badge: 'Data Science' },
  { name: 'LangChain', category: 'ai', description: 'Framework for LLM application flows.', popularFor: 'Enterprise knowledge retrieval (RAG)', badge: 'Agentic' },
  { name: 'Hugging Face', category: 'ai', description: 'Open model repository and transformers.', popularFor: 'Domain-specific custom models', badge: 'Hub' },

  // Cloud & DevOps
  { name: 'AWS', category: 'cloud', description: 'EC2, RDS, S3, Lambda and the wider AWS suite.', popularFor: 'Global enterprise cloud hosting', badge: 'Cloud Provider' },
  { name: 'Azure', category: 'cloud', description: 'Microsoft cloud with enterprise directory integration.', popularFor: 'Hybrid enterprise deployments', badge: 'Cloud Provider' },
  { name: 'Docker', category: 'cloud', description: 'Containerisation for consistent environments.', popularFor: 'Microservices and standardised builds', badge: 'DevOps' },
  { name: 'Kubernetes', category: 'cloud', description: 'Automated container orchestration and scaling.', popularFor: 'High-availability multi-cluster', badge: 'DevOps' },
  { name: 'GitHub Actions', category: 'cloud', description: 'Automated CI/CD pipelines.', popularFor: 'Automated testing and deployment', badge: 'CI/CD' },
  { name: 'Terraform', category: 'cloud', description: 'Infrastructure as code provisioning.', popularFor: 'Reproducible cloud environments', badge: 'IaC' },

  // Enterprise
  { name: 'Custom ERP Modules', category: 'enterprise', description: 'Bespoke business logic for specific operations.', popularFor: 'Unique enterprise workflows', badge: 'Enterprise' },
  { name: 'Odoo Integration', category: 'enterprise', description: 'Open-source suite of business applications.', popularFor: 'Modular ERP extension', badge: 'ERP Platform' },
  { name: 'SAP Integration', category: 'enterprise', description: 'Connecting web and mobile apps to SAP hubs.', popularFor: 'Corporate system integration', badge: 'Enterprise API' },
  { name: 'BI & Reporting', category: 'enterprise', description: 'D3, Power BI and custom reporting engines.', popularFor: 'Executive KPI visualisation', badge: 'Analytics' },
];

/**
 * Solution blueprints. Entries carrying a `status` are products we build and
 * operate ourselves; the rest describe how we approach a class of problem and
 * the targets the architecture is designed to hit. Neither kind claims an
 * outcome on behalf of a named client.
 */
export const CAPABILITY_SHOWCASES: CapabilityShowcase[] = [
  {
    id: 'showcase-school-erp',
    title: 'Multi-Tenant School ERP & Learning Platform',
    domain: 'Education',
    scale: 'Multi-tenant SaaS',
    summary:
      'One deployment that serves many schools, each with its own users, data, branding and switchable modules — from admissions through fees, exams and timetabling.',
    problem:
      'Schools run on disconnected tools: admissions in spreadsheets, fees in a separate ledger, marks somewhere else again. Serving each school from its own deployment keeps the data apart but multiplies the cost of every change.',
    approach:
      'A single tenanted platform where every database query is rewritten to the current school, so a forgotten filter cannot leak another school’s rows. Every sellable module is a per-school switch enforced at the API rather than hidden in a menu, money posts to a real double-entry ledger, and AI runs through one metered gateway instead of an API key in each module.',
    targets: [
      { label: 'Tenant isolation', value: 'Enforced twice' },
      { label: 'Access control', value: '68 permissions' },
      { label: 'Finance', value: 'Double-entry ledger' },
    ],
    techUsed: ['NestJS', 'Prisma', 'PostgreSQL', 'Next.js', 'React', 'Flutter', 'Tailwind CSS'],
    featured: true,
    status: 'Our own product, in active development',
  },
  {
    id: 'showcase-scm',
    title: 'Multi-Warehouse Supply Chain & Inventory ERP',
    domain: 'Supply Chain & ERP',
    scale: 'Multi-site enterprise',
    summary:
      'A centralised ERP and live inventory layer designed for distributors operating across many regional warehouses.',
    problem:
      'Stock counts drift between locations, orders are tracked in spreadsheets, and head office sees the position days late.',
    approach:
      'A single inventory ledger with automated reorder triggers, an offline-capable mobile barcode scanner for floor staff, and an executive MIS dashboard reading from the same source of truth.',
    targets: [
      { label: 'Stock accuracy', value: 'Near-perfect' },
      { label: 'Order processing', value: 'Minutes, not days' },
      { label: 'Position visibility', value: 'Live' },
    ],
    techUsed: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Flutter', 'AWS'],
    featured: true,
  },
  {
    id: 'showcase-idp',
    title: 'Intelligent Claims & Document Processing',
    domain: 'FinTech & Insurance',
    scale: 'High-volume operations',
    summary:
      'An OCR and generative-AI pipeline designed to absorb large monthly volumes of claim and invoice documents without manual keying.',
    problem:
      'Manual auditing creates a growing backlog, and every re-keyed field is a chance to introduce an error.',
    approach:
      'Layout-aware extraction feeds a verification model that flags low-confidence fields for human review, so people only touch the exceptions.',
    targets: [
      { label: 'Turnaround', value: 'Under a minute' },
      { label: 'Extraction confidence', value: 'Scored per field' },
      { label: 'Human review', value: 'Exceptions only' },
    ],
    techUsed: ['FastAPI', 'Python', 'Gemini', 'React', 'PostgreSQL', 'Docker'],
    featured: true,
  },
  {
    id: 'showcase-commerce',
    title: 'Omnichannel Commerce & Unified CRM',
    domain: 'Retail & E-Commerce',
    scale: 'Multi-brand SME',
    summary:
      'A headless commerce architecture with one customer profile shared across every storefront and channel.',
    problem:
      'Customer data fragments across separate store brands, so nobody can see the whole relationship or market across it.',
    approach:
      'A headless storefront layer over a unified CRM, with a single customer identity, shared loyalty state and recommendation models trained on combined behaviour.',
    targets: [
      { label: 'Customer identity', value: 'One profile' },
      { label: 'Page load', value: 'Sub-second' },
      { label: 'Channel coverage', value: 'Web, mobile, in-store' },
    ],
    techUsed: ['Next.js', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Stripe'],
    featured: true,
  },
  {
    id: 'showcase-field',
    title: 'Field Service & Asset Management',
    domain: 'Facilities & Field Operations',
    scale: 'Distributed workforce',
    summary:
      'A mobile-first field service application built for technicians who work where connectivity is not guaranteed.',
    problem:
      'Field technicians lack offline access to equipment manuals and cannot see or update ticket status from site.',
    approach:
      'A cross-platform app with local SQLite sync, biometric sign-in, GPS-aware routing and maintenance schedules that reconcile when the device reconnects.',
    targets: [
      { label: 'Offline capability', value: 'Full read/write' },
      { label: 'Sync model', value: 'Conflict-aware' },
      { label: 'Dispatch', value: 'Route-optimised' },
    ],
    techUsed: ['Flutter', 'SQLite', 'Express.js', 'AWS S3', 'Firebase'],
    featured: false,
  },
];
