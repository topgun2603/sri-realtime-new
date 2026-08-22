import { ProcessStep, ServiceItem, TechItem, PortfolioItem } from '../types';

export const COMPANY_INFO = {
  name: "SRI REAL TIME",
  tagline: "Enterprise-Grade Digital Solutions & Cutting-Edge AI Integration",
  summary: "SRI REAL TIME is a full-service technology company specialising in the design, development, and deployment of enterprise-grade digital solutions — from mobile applications and professional websites to comprehensive business systems covering ERP, CRM, Supply Chain, Inventory, MIS, E-Commerce, and cutting-edge AI integration.",
  aboutDetailed: "Founded with a passion for clean design and robust engineering, SRI REAL TIME combines deep technical expertise with a client-first approach — turning complex business challenges into elegant, scalable digital products. We partner with startups, SMEs, and enterprises to help them grow, automate operations, and stay ahead in an increasingly competitive marketplace.",
  vision: "To be a trusted technology partner for businesses seeking to establish and expand their digital footprint through innovative, high-quality enterprise and mobile solutions.",
  mission: "To deliver reliable, user-friendly, and future-ready digital products and enterprise systems that empower our clients to achieve their business goals.",
  stats: [
    { label: "Projects Delivered", value: "50+", suffix: "Successful Releases" },
    { label: "Domains Served", value: "10+", suffix: "Global Industries" },
    { label: "Support Available", value: "24 / 7", suffix: "Continuous SLA" }
  ],
  email: "org@srirealtime.com",
  contactNumbers: ["+1 (800) 555-SRI-RT", "+91 (80) 4567-8900"],
  headquarters: "Tech Corridor HQ, Innovation Avenue, Global Hub",
  offices: ["Coimbatore, India"]
};

export const SERVICES_DATA: ServiceItem[] = [
  // Enterprise Business Systems
  {
    id: "mis",
    title: "Management Information System (MIS)",
    category: "enterprise",
    shortDescription: "Centralised dashboards, KPI reports, and real-time data analytics to empower management decisions.",
    fullDescription: "Transform scattered data into actionable strategic intelligence with real-time MIS dashboards, automated executive summaries, and multi-department analytics.",
    iconName: "BarChart3",
    keyFeatures: [
      "Centralised executive dashboards",
      "Automated KPI reporting & export",
      "Real-time data aggregation across systems",
      "Role-based access & granular permissions"
    ],
    metrics: "Up to 45% faster executive reporting cycle",
    samplePreviewType: "mis"
  },
  {
    id: "erp",
    title: "Enterprise Resource Planning (ERP)",
    category: "enterprise",
    shortDescription: "End-to-end ERP covering finance, HR, procurement, production, and reporting in one unified platform.",
    fullDescription: "Unify core operations with custom or modular ERP architecture that seamlessly connects finance, payroll, procurement, production schedules, and compliance.",
    iconName: "Settings",
    keyFeatures: [
      "Financial ledger & multi-currency accounting",
      "Human Resource & Payroll Management",
      "Procurement, Purchase Orders & Vendor Portal",
      "Production planning & resource allocation"
    ],
    metrics: "Unified operational visibility across all units",
    samplePreviewType: "erp"
  },
  {
    id: "inventory",
    title: "Inventory Management",
    category: "enterprise",
    shortDescription: "Smart stock control, warehouse management, multi-location tracking, and automated reorder workflows.",
    fullDescription: "Gain 100% precision over inventory levels, multi-warehouse stock movements, SKU barcoding, batch expiration, and automated reorder notifications.",
    iconName: "Boxes",
    keyFeatures: [
      "Multi-location & warehouse tracking",
      "Automated reorder point workflows",
      "Barcode & QR code scanner integration",
      "Batch tracking, FIFO/LIFO valuation"
    ],
    metrics: "99.8% stock accuracy with zero stockouts",
    samplePreviewType: "inventory"
  },
  {
    id: "ecommerce",
    title: "E-Commerce Solutions",
    category: "enterprise",
    shortDescription: "Feature-rich online stores with product catalogs, secure checkout, payment gateways, and order management.",
    fullDescription: "Scalable digital storefronts engineered for high conversion rates, ultra-fast page loads, seamless checkout flows, and automated multi-channel order processing.",
    iconName: "ShoppingBag",
    keyFeatures: [
      "High-speed responsive product catalog",
      "Multi-currency & localized payment gateways",
      "Automated order fulfillment & tracking",
      "Inventory sync & promotional engine"
    ],
    metrics: "Sub-second checkout load time & 3.2x conversion boost",
    samplePreviewType: "ecommerce"
  },
  {
    id: "crm",
    title: "Customer Relationship Management (CRM)",
    category: "enterprise",
    shortDescription: "360° CRM — leads, pipeline management, customer history, automated follow-ups, and analytics.",
    fullDescription: "Empower your sales and customer success teams with automated deal pipelines, communication timelines, lead scoring, and customer retention analytics.",
    iconName: "Users",
    keyFeatures: [
      "Visual sales pipeline & deal stages",
      "Automated lead assignment & email follow-ups",
      "360-degree customer interaction history",
      "Sales forecasting & team activity tracking"
    ],
    metrics: "35% higher lead conversion rate",
    samplePreviewType: "crm"
  },
  {
    id: "scm",
    title: "Supply Chain Management (SCM)",
    category: "enterprise",
    shortDescription: "End-to-end supply chain visibility — sourcing, logistics, vendor management, and demand forecasting.",
    fullDescription: "Optimize end-to-end logistics, vendor compliance, raw material procurement, and predictive shipment routing for resilient global operations.",
    iconName: "Truck",
    keyFeatures: [
      "Vendor onboarding & performance scorecards",
      "Real-time shipment & fleet tracking",
      "Demand forecasting powered by historical trends",
      "Logistics cost optimization algorithms"
    ],
    metrics: "28% reduction in supply chain turnaround latency",
    samplePreviewType: "scm"
  },

  // AI & Automation
  {
    id: "mfg-ai-workflow",
    title: "Manufacturer Domain – AI-Powered Machine Workflow Automation",
    category: "ai",
    shortDescription: "Transform traditional machine operations into an intelligent, automated and predictive manufacturing environment.",
    fullDescription: "Our solution enables manufacturers to transform traditional machine operations into an intelligent, automated and predictive manufacturing environment. It connects machines, sensors, production workflows and maintenance operations to continuously monitor machine health and production performance. AI/ML can analyze machine telemetry, historical failures and operational patterns to detect anomalies and predict potential failures before they cause unplanned downtime.",
    iconName: "Settings",
    keyFeatures: [
      "Machine/IoT Data → Real-Time Monitoring",
      "AI Anomaly Detection → Error Identification",
      "Root-Cause Analysis → AI Resolution Recommendation",
      "Automated Maintenance Workflow → Technician Action",
      "Verification → Learning & Prediction"
    ],
    workflowFlow: "Machine/IoT Data → Real-Time Monitoring → AI Anomaly Detection → Error Identification → Root-Cause Analysis → AI Resolution Recommendation → Automated Maintenance Workflow → Technician Action → Verification → Learning & Prediction",
    metrics: "Predictive Telemetry & Zero Unplanned Downtime",
    samplePreviewType: "erp"
  },
  {
    id: "ai-chatbots",
    title: "AI-Powered Chatbots & Virtual Assistants",
    category: "ai",
    shortDescription: "Context-aware conversational AI for customer support, internal knowledge access, and lead qualification.",
    fullDescription: "Deploy intelligent virtual assistants trained on your custom enterprise knowledge base to resolve up to 80% of support queries instantly.",
    iconName: "Bot",
    keyFeatures: [
      "Multilingual RAG knowledge base integration",
      "Natural conversational flow with Gemini / GPT",
      "Seamless human escalation & ticket routing",
      "Multi-channel support (Web, Mobile, WhatsApp, Slack)"
    ],
    metrics: "24/7 instant response with 80% deflection",
    samplePreviewType: "chatbot"
  },
  {
    id: "predictive-analytics",
    title: "Predictive Analytics & Business Intelligence",
    category: "ai",
    shortDescription: "Machine learning models forecasting market trends, customer churn, demand spikes, and financial health.",
    fullDescription: "Harness predictive intelligence to anticipate customer behavior, detect anomalies, forecast revenue streams, and optimize pricing dynamically.",
    iconName: "TrendingUp",
    keyFeatures: [
      "Time-series demand & revenue forecasting",
      "Customer churn prediction & risk scoring",
      "Anomaly detection in financial transactions",
      "Custom BI dashboard visualization with D3/Recharts"
    ],
    metrics: "92% forecast accuracy on 90-day horizon",
    samplePreviewType: "predictive"
  },
  {
    id: "doc-processing",
    title: "Intelligent Document Processing (OCR / NLP)",
    category: "ai",
    shortDescription: "Automate extraction of unstructured invoices, receipts, contracts, and IDs with near-perfect accuracy.",
    fullDescription: "Eliminate manual data entry by extracting key fields, line items, and verification data from PDF documents, scanned images, and emails automatically.",
    iconName: "FileText",
    keyFeatures: [
      "OCR & Layout LM field extraction",
      "Automated invoice matching with ERP purchase orders",
      "Identity document verification (Passport, Driving License)",
      "Automated categorization & structured JSON storage"
    ],
    metrics: "95% manual data entry time saved",
    samplePreviewType: "docproc"
  },

  // Digital Product Development
  {
    id: "mobile-dev",
    title: "Mobile App Development",
    category: "digital",
    shortDescription: "Android & iOS native apps, cross-platform (Flutter / React Native), UI/UX design, and ongoing support.",
    fullDescription: "Craft high-performance, intuitive mobile experiences engineered for fluid 60fps frame rates, offline persistence, and seamless hardware integration.",
    iconName: "Smartphone",
    keyFeatures: [
      "Native iOS (Swift) & Android (Kotlin) development",
      "Cross-platform Flutter & React Native builds",
      "Offline-first sync & push notification engines",
      "App Store & Google Play deployment management"
    ],
    metrics: "4.8+ average store rating on client apps",
    samplePreviewType: "mobile"
  },
  {
    id: "web-dev",
    title: "Website & Custom Web App Development",
    category: "digital",
    shortDescription: "Professional business sites, custom web apps, responsive mobile-first design, and CMS integration.",
    fullDescription: "Build modern, accessible, blazing-fast web applications designed for flawless performance across every screen size from smartphones to 100-inch 4K displays.",
    iconName: "Globe",
    keyFeatures: [
      "React, Vite, Next.js & Tailwind CSS architecture",
      "Ultra-responsive 100-inch display & mobile tuning",
      "SEO optimized with sub-second Core Web Vitals",
      "Headless CMS & custom backend integration"
    ],
    metrics: "100/100 Lighthouse performance & accessibility target",
    samplePreviewType: "web"
  },
  {
    id: "api-cloud",
    title: "API & Cloud Services",
    category: "digital",
    shortDescription: "RESTful API development, third-party integrations, AWS / Azure cloud deployment, and DevOps support.",
    fullDescription: "Architect resilient microservices, secure API gateways, auto-scaling cloud infrastructure, and automated continuous deployment pipelines.",
    iconName: "Cloud",
    keyFeatures: [
      "RESTful & GraphQL API design & documentation",
      "AWS (EC2, Lambda, RDS, S3) & Azure cloud setup",
      "Docker containerization & Kubernetes orchestration",
      "CI/CD automated deployment with GitHub Actions"
    ],
    metrics: "99.99% infrastructure uptime SLA",
    samplePreviewType: "api"
  }
];

export const WHY_CHOOSE_US = [
  {
    title: "Experienced Team",
    description: "Skilled developers, designers, and domain experts dedicated to delivering quality across every project.",
    icon: "Award"
  },
  {
    title: "Custom Solutions",
    description: "Every engagement is tailored to your specific business needs — no off-the-shelf templates.",
    icon: "Cpu"
  },
  {
    title: "Timely Delivery",
    description: "We are committed to meeting deadlines without compromising on quality or scope.",
    icon: "Clock"
  },
  {
    title: "Client-Centric Approach",
    description: "Continuous communication, transparent reporting, and dedicated support throughout the project lifecycle.",
    icon: "HeartHandshake"
  },
  {
    title: "Affordable Pricing",
    description: "Competitive, transparent rates — premium quality delivered at optimal cost.",
    icon: "DollarSign"
  },
  {
    title: "End-to-End Capability",
    description: "From discovery and design to deployment and maintenance — a single partner for your full digital journey.",
    icon: "Layers"
  }
];

export const DELIVERY_PROCESS: ProcessStep[] = [
  {
    stepNumber: "01",
    title: "Requirement Gathering",
    description: "Understanding your business goals, user needs, and technical constraints through structured workshops.",
    deliverables: "Product Requirement Document (PRD), Scope Matrix, & Feature Roadmap",
    duration: "1 - 2 Weeks",
    keyActivities: ["Stakeholder interviews", "User persona mapping", "Technical feasibility analysis"]
  },
  {
    stepNumber: "02",
    title: "Strategy & Architecture",
    description: "Defining the technology stack, system design, integration map, and project roadmap.",
    deliverables: "System Architecture Diagram, Database Schema & API Specifications",
    duration: "1 - 2 Weeks",
    keyActivities: ["Cloud infrastructure planning", "Database entity relation modeling", "Security compliance design"]
  },
  {
    stepNumber: "03",
    title: "UX / UI Design",
    description: "Creating intuitive, brand-aligned interfaces with wire-frames, prototypes, and user testing.",
    deliverables: "Figma Interactive Prototypes, Design System & Accessibility Specs",
    duration: "2 - 3 Weeks",
    keyActivities: ["Wireframing & user journeys", "High-fidelity component library", "Usability feedback loops"]
  },
  {
    stepNumber: "04",
    title: "Development",
    description: "Agile sprint-based development with continuous integration, code reviews, and client demos.",
    deliverables: "Sprint Builds, Staging Environment & Clean Code Repository",
    duration: "4 - 8 Weeks",
    keyActivities: ["Frontend & Mobile UI coding", "Backend API & Database implementation", "AI model training / API wiring"]
  },
  {
    stepNumber: "05",
    title: "Quality Assurance",
    description: "Rigorous functional, performance, and security testing before every release.",
    deliverables: "QA Audit Report, Security Vulnerability Matrix & Performance Logs",
    duration: "1 - 2 Weeks",
    keyActivities: ["Automated unit & E2E tests", "Cross-browser & screen size testing", "Penetration & load testing"]
  },
  {
    stepNumber: "06",
    title: "Deployment",
    description: "Smooth, zero-downtime production launch on cloud infrastructure with rollback capability.",
    deliverables: "Live Production Application, Domain/SSL Setup & Infrastructure Monitoring",
    duration: "3 - 5 Days",
    keyActivities: ["Production CI/CD trigger", "DNS routing & SSL certification", "Post-deployment smoke tests"]
  },
  {
    stepNumber: "07",
    title: "Support & Maintenance",
    description: "Ongoing monitoring, updates, feature enhancements, and 24/7 incident support post-launch.",
    deliverables: "24/7 SLA Hotline, Monthly Security Patches & Analytics Reports",
    duration: "Ongoing (SLA Partner)",
    keyActivities: ["Proactive health checks", "Feature iterative updates", "Dedicated support ticket desk"]
  }
];

export const TECH_EXPERTISE: TechItem[] = [
  // Frontend
  { name: "React.js", category: "frontend", description: "Standard component-driven UI architecture.", popularFor: "Dynamic Web Apps & Dashboards", badge: "Core" },
  { name: "Vite", category: "frontend", description: "Ultra-fast build tool with instant cold server start.", popularFor: "High-Performance SPA Builds", badge: "Core" },
  { name: "Tailwind CSS", category: "frontend", description: "Utility-first styling for responsive layouts.", popularFor: "Mobile to 100\" TV Responsive UI", badge: "Core" },
  { name: "Next.js", category: "frontend", description: "Full-stack React framework with SSR and SSG.", popularFor: "Enterprise Portals & E-Commerce", badge: "Framework" },
  { name: "Vue.js", category: "frontend", description: "Progressive JavaScript framework.", popularFor: "Lightweight Enterprise Dashboards", badge: "Framework" },
  { name: "Flutter", category: "frontend", description: "Google cross-platform UI toolkit.", popularFor: "Native iOS & Android Mobile Apps", badge: "Mobile" },
  { name: "React Native", category: "frontend", description: "Native mobile UI development with React.", popularFor: "Cross-Platform Mobile Ecosystems", badge: "Mobile" },

  // Backend
  { name: "Node.js", category: "backend", description: "Asynchronous event-driven JavaScript runtime.", popularFor: "High-throughput API Backends", badge: "Runtime" },
  { name: "Express.js", category: "backend", description: "Fast, unopinionated web framework for Node.js.", popularFor: "RESTful Microservices", badge: "Framework" },
  { name: "FastAPI (Python)", category: "backend", description: "Modern, high-performance Python web framework.", popularFor: "AI/ML Integration & Data Processing", badge: "AI Service" },
  { name: "Django", category: "backend", description: "High-level Python web framework with ORM.", popularFor: "Enterprise Web Systems", badge: "Framework" },
  { name: "REST & GraphQL", category: "backend", description: "Robust API query & state transport standards.", popularFor: "Seamless Frontend-Backend Contract", badge: "API Standard" },

  // Databases
  { name: "PostgreSQL", category: "databases", description: "Advanced relational open-source database.", popularFor: "Transactional ERP, CRM & Financials", badge: "Relational" },
  { name: "MySQL", category: "databases", description: "Reliable, high-speed relational database engine.", popularFor: "E-Commerce & Management Systems", badge: "Relational" },
  { name: "MongoDB", category: "databases", description: "Flexible document-based NoSQL database.", popularFor: "Real-time Analytics & Product Catalogs", badge: "NoSQL" },
  { name: "Redis", category: "databases", description: "In-memory data structure store for caching.", popularFor: "Sub-millisecond Session & Rate Limit", badge: "Cache" },
  { name: "SQLite", category: "databases", description: "Embedded lightweight SQL database.", popularFor: "Offline Mobile Data & Local Storage", badge: "Embedded" },
  { name: "AWS RDS", category: "databases", description: "Managed cloud relational database service.", popularFor: "Auto-scaling Enterprise Databases", badge: "Cloud DB" },
  { name: "Firebase", category: "databases", description: "Real-time document database & user auth.", popularFor: "Real-time Sync & Rapid Prototypes", badge: "BaaS" },

  // AI / ML
  { name: "OpenAI GPT / Gemini", category: "ai", description: "State-of-the-art LLMs for reasoning & RAG.", popularFor: "Chatbots, Summarization & Agents", badge: "GenAI" },
  { name: "TensorFlow", category: "ai", description: "End-to-end open source machine learning platform.", popularFor: "Deep Learning & Computer Vision", badge: "ML Library" },
  { name: "PyTorch", category: "ai", description: "Flexible deep learning framework.", popularFor: "Predictive Analytics & Custom Models", badge: "ML Library" },
  { name: "scikit-learn", category: "ai", description: "Machine learning tools in Python.", popularFor: "Classification & Regression Pipelines", badge: "Data Science" },
  { name: "LangChain", category: "ai", description: "Framework for developing LLM application flows.", popularFor: "Enterprise Knowledge Retrieval (RAG)", badge: "Agentic" },
  { name: "Hugging Face", category: "ai", description: "Open source AI model repository & transformers.", popularFor: "Domain-Specific Custom Models", badge: "Hub" },

  // Cloud & DevOps
  { name: "AWS (EC2, RDS, S3, Lambda)", category: "cloud", description: "Comprehensive Amazon Web Services cloud infrastructure.", popularFor: "Global Enterprise Cloud Hosting", badge: "Cloud Provider" },
  { name: "Azure", category: "cloud", description: "Microsoft cloud platform with enterprise Active Directory.", popularFor: "Hybrid Enterprise Deployments", badge: "Cloud Provider" },
  { name: "Docker", category: "cloud", description: "Containerization platform for consistent environments.", popularFor: "Microservices & Standardized Builds", badge: "DevOps" },
  { name: "Kubernetes", category: "cloud", description: "Automated container orchestration & scaling.", popularFor: "High-Availability Multi-Cluster", badge: "DevOps" },
  { name: "GitHub Actions", category: "cloud", description: "Automated CI/CD pipelines.", popularFor: "Automated Testing & Cloud Deployments", badge: "CI/CD" },
  { name: "Terraform", category: "cloud", description: "Infrastructure as Code (IaC) provisioning.", popularFor: "Reproducible Cloud Environments", badge: "IaC" },

  // Enterprise / ERP
  { name: "Custom ERP Modules", category: "enterprise", description: "Bespoke business logic tailored to specific operations.", popularFor: "Unique Enterprise Workflows", badge: "Enterprise" },
  { name: "Odoo Integration", category: "enterprise", description: "Open source suite of business applications.", popularFor: "Modular ERP Extension", badge: "ERP Platform" },
  { name: "SAP API Integration", category: "enterprise", description: "Connecting web/mobile apps to enterprise SAP hubs.", popularFor: "Global Corporate Integration", badge: "Enterprise API" },
  { name: "Business Intelligence Tools", category: "enterprise", description: "D3, PowerBI, and custom reporting analytics engines.", popularFor: "Executive KPI Visualization", badge: "Analytics" }
];

export const PORTFOLIO_CASE_STUDIES: PortfolioItem[] = [
  {
    id: "case-1",
    title: "Global Agri-Supply Chain & Inventory ERP",
    domain: "Supply Chain & ERP",
    clientType: "Enterprise",
    summary: "Built a centralized multi-warehouse ERP & real-time inventory tracking system for a multi-national agricultural distributor.",
    challenge: "High stock discrepancies across 14 regional warehouses and manual order delays in legacy spreadsheets.",
    solution: "Designed custom ERP with automated reorder triggers, offline mobile barcode scanner app, and real-time executive MIS dashboard.",
    metrics: [
      { label: "Stock Accuracy", value: "99.9%" },
      { label: "Processing Speed", value: "4x Faster" },
      { label: "Operational Savings", value: "$1.2M/yr" }
    ],
    techUsed: ["React.js", "Node.js", "PostgreSQL", "Redis", "Flutter", "AWS"],
    featured: true
  },
  {
    id: "case-2",
    title: "AI Intelligent Claims & Document Processing Platform",
    domain: "FinTech & Insurance",
    clientType: "Enterprise",
    summary: "Integrated OCR & GenAI models to process 25,000+ monthly medical & insurance claim documents automatically.",
    challenge: "Manual claims auditing was causing a 9-day processing backlog and human error risks.",
    solution: "Developed an Intelligent Document Processing engine using OCR, LayoutLM, and Gemini AI field verification.",
    metrics: [
      { label: "Turnaround Time", value: "Sub-1 Minute" },
      { label: "Extraction Precision", value: "98.7%" },
      { label: "Backlog Deflection", value: "90%" }
    ],
    techUsed: ["FastAPI", "Python", "Gemini AI", "React.js", "PostgreSQL", "Docker"],
    featured: true
  },
  {
    id: "case-3",
    title: "Multi-Store E-Commerce & Omnichannel CRM",
    domain: "Retail & E-Commerce",
    clientType: "SME",
    summary: "Created a unified e-commerce portal connected to a 360-degree CRM with automated customer loyalty workflows.",
    challenge: "Fragmented customer data across 3 separate store brands leading to lost sales and zero cross-channel visibility.",
    solution: "Engineered a headless E-Commerce architecture with integrated CRM, single customer profile, and AI product recommendations.",
    metrics: [
      { label: "Checkout Conversion", value: "+38%" },
      { label: "Repeat Purchase Rate", value: "+45%" },
      { label: "Page Load Time", value: "0.6s" }
    ],
    techUsed: ["Next.js", "Tailwind CSS", "Node.js", "MongoDB", "Stripe API"],
    featured: true
  },
  {
    id: "case-4",
    title: "Smart Facility & Asset Management Mobile App",
    domain: "Real Estate & Field Operations",
    clientType: "Enterprise",
    summary: "Mobile-first field service management app with offline asset inspection, GPS routing, and push maintenance alerts.",
    challenge: "Field technicians lacked offline access to machinery manuals and real-time ticket statuses.",
    solution: "Built cross-platform Flutter mobile application with SQLite local sync, biometric auth, and automated maintenance schedules.",
    metrics: [
      { label: "Ticket Resolution", value: "2.5x Speed" },
      { label: "Technician Adoption", value: "100%" },
      { label: "Equipment Uptime", value: "99.4%" }
    ],
    techUsed: ["Flutter", "SQLite", "Express.js", "AWS S3", "Firebase"],
    featured: false
  }
];
