import React, { useState } from 'react';
import { NavTab } from '../types';
import { Calculator, Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Clock, DollarSign, Download, Share2 } from 'lucide-react';

interface ProjectEstimatorProps {
  setCurrentTab: (tab: NavTab) => void;
  onShareEstimateWithContact?: (specs: string) => void;
}

export const ProjectEstimator: React.FC<ProjectEstimatorProps> = ({ setCurrentTab, onShareEstimateWithContact }) => {
  const [appType, setAppType] = useState('erp');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    'mis_dashboard', 'ai_chatbot', 'role_permissions'
  ]);
  const [platform, setPlatform] = useState('web_mobile');
  const [slaSupport, setSlaSupport] = useState('24_7_priority');

  const appTypes = [
    { id: 'mobile', label: 'Mobile App (iOS/Android)', baseWeeks: 6, baseCost: 12000 },
    { id: 'web', label: 'Custom Enterprise Web App', baseWeeks: 5, baseCost: 10000 },
    { id: 'erp', label: 'Full Enterprise ERP System', baseWeeks: 10, baseCost: 25000 },
    { id: 'crm', label: '360° CRM & Pipeline Hub', baseWeeks: 7, baseCost: 15000 },
    { id: 'inventory', label: 'Smart Inventory & SCM', baseWeeks: 8, baseCost: 18000 },
    { id: 'ai_module', label: 'AI & Process Automation', baseWeeks: 4, baseCost: 9000 },
  ];

  const featuresList = [
    { id: 'mis_dashboard', label: 'Management Info System (MIS) Analytics', weeks: 1.5, cost: 2500 },
    { id: 'ai_chatbot', label: 'AI Virtual Assistant (Gemini / RAG)', weeks: 2, cost: 3500 },
    { id: 'ocr_extraction', label: 'Intelligent Document OCR Extraction', weeks: 2, cost: 4000 },
    { id: 'warehouse_sync', label: 'Multi-Warehouse Barcode Sync', weeks: 1.5, cost: 3000 },
    { id: 'role_permissions', label: 'Granular Role-Based Access Control', weeks: 1, cost: 1500 },
    { id: 'payment_gateway', label: 'Multi-Currency E-Commerce Checkout', weeks: 1, cost: 2000 },
    { id: 'offline_sync', label: 'Offline-First Local SQLite Data Engine', weeks: 1.5, cost: 2500 },
    { id: 'cloud_devops', label: 'AWS / Azure CI/CD Zero-Downtime Pipeline', weeks: 1, cost: 2000 },
  ];

  const toggleFeature = (id: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  const currentApp = appTypes.find(a => a.id === appType) || appTypes[2];

  const addedWeeks = selectedFeatures.reduce((acc, featId) => {
    const f = featuresList.find(item => item.id === featId);
    return acc + (f ? f.weeks : 0);
  }, 0);

  const addedCost = selectedFeatures.reduce((acc, featId) => {
    const f = featuresList.find(item => item.id === featId);
    return acc + (f ? f.cost : 0);
  }, 0);

  const totalWeeks = Math.round((currentApp.baseWeeks + addedWeeks) * 10) / 10;
  const totalCost = currentApp.baseCost + addedCost;

  const handleBookWithSpecs = () => {
    const summaryText = `Selected Scope: ${currentApp.label} with ${selectedFeatures.length} custom features (${selectedFeatures.join(', ')}). Estimated Timeline: ~${totalWeeks} Weeks.`;
    if (onShareEstimateWithContact) {
      onShareEstimateWithContact(summaryText);
    }
    setCurrentTab('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="estimator-section" className="pt-6 pb-16 lg:pt-8 lg:pb-24 transition-colors bg-transparent border-b border-sky-200/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b6908b5] tracking-tight">
            Interactive Project Timeline & <span className="italic font-serif text-[#0b6908b5]">Scope Calculator</span>
          </h2>
          <p className="mt-4 text-slate-600 text-base leading-relaxed font-normal">
            Select your desired software category, enterprise features, and deployment requirements to generate an instant estimate for your project roadmap.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Controls Panel (2 columns) */}
          <div className="lg:col-span-2 space-y-8">
            {/* Step 1: Solution Category */}
            <div className="apple-card p-6 shadow-lg">
              <h3 className="text-xs font-bold uppercase tracking-widest text-sky-700 mb-4 flex items-center gap-2 font-mono">
                <span>01. Select Solution Category</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {appTypes.map((type) => (
                  <button
                    key={type.id}
                    id={`estimator-type-${type.id}`}
                    onClick={() => setAppType(type.id)}
                    className={`p-4 rounded-xl border text-left text-xs font-bold transition-all uppercase tracking-wider cursor-pointer ${appType === type.id
                        ? 'bg-sky-600 text-white border-sky-600 shadow-lg shadow-sky-600/20'
                        : 'bg-slate-50 border-slate-200 text-slate-800 hover:border-sky-500/50'
                      }`}
                  >
                    <div>{type.label}</div>
                    <div className={`text-[10px] font-mono mt-1 ${appType === type.id ? 'text-white/90' : 'text-slate-500'}`}>
                      From ~{type.baseWeeks} Weeks
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Key Feature Modules */}
            <div className="apple-card p-6 shadow-lg">
              <h3 className="text-xs font-bold uppercase tracking-widest text-sky-700 mb-4 flex items-center gap-2 font-mono">
                <span>02. Choose Enterprise Modules & AI Extensions</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {featuresList.map((feat) => {
                  const isChecked = selectedFeatures.includes(feat.id);
                  return (
                    <button
                      key={feat.id}
                      id={`estimator-feat-${feat.id}`}
                      onClick={() => toggleFeature(feat.id)}
                      className={`p-3.5 rounded-xl border text-left text-xs font-medium flex items-center justify-between transition cursor-pointer ${isChecked
                          ? 'bg-sky-50 border-sky-500 text-sky-800 font-bold'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
                        }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div className={`w-4 h-4 rounded flex items-center justify-center border ${isChecked ? 'bg-sky-600 border-sky-600 text-white' : 'border-slate-300'}`}>
                          {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                        </div>
                        <span>{feat.label}</span>
                      </div>
                      <span className="text-[10px] text-slate-500 shrink-0 font-mono">+~{feat.weeks}w</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: SLA & Support Tier */}
            <div className="apple-card p-6 shadow-lg">
              <h3 className="text-xs font-bold uppercase tracking-widest text-sky-700 mb-4 font-mono">
                03. Support & Deployment Package
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                {[
                  { id: 'standard', label: 'Standard Launch', desc: 'Deployment + 30-Day Support' },
                  { id: '24_7_priority', label: '24/7 Priority SLA', desc: 'Zero-Downtime AWS + 24/7 Hotline' },
                  { id: 'managed_devops', label: 'Full Managed DevOps', desc: 'Dedicated Engineer + Monthly Upgrades' }
                ].map((item) => (
                  <button
                    key={item.id}
                    id={`estimator-sla-${item.id}`}
                    onClick={() => setSlaSupport(item.id)}
                    className={`p-4 rounded-xl border text-left font-bold transition uppercase tracking-wider cursor-pointer ${slaSupport === item.id
                        ? 'bg-sky-600 text-white border-sky-600 shadow-lg shadow-sky-600/20'
                        : 'bg-slate-50 border-slate-200 text-slate-800 hover:border-sky-500/50'
                      }`}
                  >
                    <div>{item.label}</div>
                    <div className={`text-[9px] font-normal mt-1 normal-case font-mono ${slaSupport === item.id ? 'text-white/90' : 'text-slate-500'}`}>
                      {item.desc}
                    </div>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Estimate Summary Result Sticky Box */}
          <div className="lg:col-span-1">
            <div className="apple-card text-slate-900 p-8 shadow-xl sticky top-28 space-y-6">

              <div className="flex items-center justify-between border-b border-slate-200/80 pb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-sky-700 font-mono">
                  ESTIMATED ROADMAP
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest bg-sky-50 text-sky-700 border border-sky-200 font-mono">
                  Custom Scope
                </span>
              </div>

              <div>
                <span className="text-xs text-slate-500 font-bold uppercase tracking-wider block mb-1">Turnaround Estimate</span>
                <div className="text-4xl font-light font-serif text-slate-900 flex items-baseline gap-2">
                  <span className="text-sky-600 font-bold">~{totalWeeks}</span>
                  <span className="text-xs text-slate-500 font-sans uppercase tracking-widest font-semibold">Weeks</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-2 font-mono shadow-xs">
                <div className="flex justify-between text-slate-600">
                  <span>Architecture:</span>
                  <span className="font-bold text-slate-900">{currentApp.label}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Modules:</span>
                  <span className="font-bold text-sky-700">{selectedFeatures.length} Features</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>SLA Guarantee:</span>
                  <span className="font-bold text-sky-700">24 / 7 Dedicated</span>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <button
                  id="book-estimator-specs-btn"
                  onClick={handleBookWithSpecs}
                  className="w-full py-4 bg-sky-600 hover:bg-sky-500 text-white font-bold rounded-full shadow-lg shadow-sky-600/20 transition flex items-center justify-center gap-2 text-xs uppercase tracking-widest cursor-pointer"
                >
                  <span>Book Consultation With Specs</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>

                <p className="text-[10px] text-center text-neutral-500 uppercase tracking-widest font-mono">
                  Includes PRD workshop, wireframing & 24/7 SLA.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
