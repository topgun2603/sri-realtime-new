import React, { useState, useEffect } from 'react';
import { SERVICES_DATA } from '../data/companyData';
import { ServiceCategory, ServiceItem } from '../types';
import { DemoPreviewModal } from './DemoPreviewModal';
import {
  BarChart3, Settings, Boxes, ShoppingBag, Users, Truck, Bot, TrendingUp,
  FileText, Smartphone, Globe, Cloud, CheckCircle2, ArrowRight, Eye, Sparkles
} from 'lucide-react';

interface ServicesSectionProps {
  initialCategory?: ServiceCategory;
  targetId?: string | null;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ initialCategory = 'enterprise', targetId }) => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>(initialCategory);
  const [activePreview, setActivePreview] = useState<{ type: string; title: string } | null>(null);

  useEffect(() => {
    if (initialCategory) {
      setActiveCategory(initialCategory);
    }
  }, [initialCategory]);

  useEffect(() => {
    if (targetId) {
      const timer = setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          const navbarOffset = 110;
          const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - navbarOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [targetId, activeCategory]);

  const categories: { id: ServiceCategory; num: string; title: string; subtitle: string; count: number }[] = [
    {
      id: 'enterprise',
      num: '01',
      title: 'ENTERPRISE BUSINESS SYSTEMS',
      subtitle: 'ERP, CRM, Inventory, MIS, SCM & E-Commerce Platforms',
      count: 6
    },
    {
      id: 'ai',
      num: '02',
      title: 'ARTIFICIAL INTELLIGENCE & AUTOMATION',
      subtitle: 'Chatbots, Predictive Analytics, OCR & Workflow RPA',
      count: 3
    },
    {
      id: 'digital',
      num: '03',
      title: 'DIGITAL PRODUCT DEVELOPMENT',
      subtitle: 'Android/iOS Apps, Web Applications & Cloud APIs',
      count: 3
    },
  ];

  const filteredServices = SERVICES_DATA.filter((s) => s.category === activeCategory);

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'BarChart3': return BarChart3;
      case 'Settings': return Settings;
      case 'Boxes': return Boxes;
      case 'ShoppingBag': return ShoppingBag;
      case 'Users': return Users;
      case 'Truck': return Truck;
      case 'Bot': return Bot;
      case 'TrendingUp': return TrendingUp;
      case 'FileText': return FileText;
      case 'Smartphone': return Smartphone;
      case 'Globe': return Globe;
      case 'Cloud': return Cloud;
      default: return Settings;
    }
  };

  return (
    <section id="services-section" className="pt-6 pb-16 lg:pt-8 lg:pb-24 bg-transparent border-b border-sky-200/30 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b6908b5] tracking-tight">
            Comprehensive <span className="italic font-serif text-[#0b6908b5]">Digital</span> & Enterprise Architecture
          </h2>
          <p className="mt-4 text-slate-600 text-base leading-relaxed font-normal">
            From unified business systems and mobile applications to intelligent AI automation workflows, <span className="font-algeria font-semibold text-slate-900">SRI REAL TIME</span> builds tailored solutions for every stage of your enterprise.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                id={`service-cat-${cat.id}`}
                onClick={() => setActiveCategory(cat.id)}
                className={`p-5 rounded-2xl text-left border transition-all duration-300 cursor-pointer ${isActive
                    ? 'bg-sky-600 text-white border-sky-600 shadow-xl shadow-sky-600/20 font-bold'
                    : 'apple-card text-slate-800 border-slate-200/80 hover:border-sky-500/50'
                  }`}
              >
                <div className="mb-2.5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className={`text-xs font-bold tracking-widest uppercase flex flex-wrap items-center gap-x-2 gap-y-1 ${isActive ? 'text-white' : 'text-sky-700'}`}>
                      <span>{cat.num}. {cat.title}</span>
                      <span className={`shrink-0 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase border ${isActive ? 'bg-white/20 border-white/30 text-white' : 'bg-sky-50 border-sky-200 text-sky-700 font-mono'}`}>
                        {cat.count} Modules
                      </span>
                    </div>
                  </div>
                </div>
                <p className={`text-xs ${isActive ? 'text-white/90 font-medium' : 'text-slate-600'}`}>
                  {cat.subtitle}
                </p>
              </button>
            );
          })}
        </div>

        {/* Category AI Highlight Bar */}
        {activeCategory === 'ai' && (
          <div className="mb-8 p-6 apple-card text-slate-900 shadow-xl border-l-4 border-l-sky-600 border-slate-200/80">
            <div className="flex items-center gap-2 text-sky-700 font-bold text-xs uppercase tracking-widest mb-2 font-mono">
              <Sparkles className="w-4 h-4" />
              <span>ARTIFICIAL INTELLIGENCE & AUTOMATION HIGHLIGHT</span>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed max-w-4xl">
              Leverage the power of AI to transform your business operations. We design and integrate intelligent solutions across your entire software ecosystem:
            </p>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 text-xs text-slate-800 font-medium font-mono">
              <div className="flex items-center gap-2">■ AI-Powered Chatbots & Virtual Assistants</div>
              <div className="flex items-center gap-2">■ Predictive Analytics & Business Intelligence</div>
              <div className="flex items-center gap-2">■ Intelligent Document Processing (OCR / NLP)</div>
              <div className="flex items-center gap-2">■ Machine Learning Model Integration</div>
              <div className="flex items-center gap-2">■ Workflow & Process Automation (RPA)</div>
              <div className="flex items-center gap-2">■ AI Integration into ERP, CRM & SCM</div>
            </div>
          </div>
        )}

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredServices.map((service) => {
            const Icon = getIconComponent(service.iconName);
            const isFeaturedMfg = service.id === 'mfg-ai-workflow';

            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className={`apple-card p-7 lg:p-8 shadow-xl flex flex-col justify-between group scroll-mt-28 ${isFeaturedMfg ? 'md:col-span-2 lg:col-span-3 border-l-4 border-l-sky-600' : ''
                  }`}
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600 group-hover:scale-105 transition-transform shadow-xs">
                        <Icon className="w-6 h-6" />
                      </div>
                      {isFeaturedMfg && (
                        <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-sky-600 text-white font-mono shadow-xs">
                          FIRST AI MODULE • MANUFACTURER DOMAIN
                        </span>
                      )}
                    </div>
                    {service.metrics && (
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-sky-50 text-sky-700 border border-sky-200 font-mono">
                        {service.metrics}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-600 mb-6 leading-relaxed font-normal">
                    {service.fullDescription}
                  </p>

                  {/* Core Workflow Step Diagram if present */}
                  {service.workflowFlow && (
                    <div className="mb-6 p-4 bg-sky-50/80 rounded-2xl border border-sky-200">
                      <span className="text-[10px] font-bold text-sky-700 uppercase tracking-widest block font-mono mb-2.5">
                        Core Workflow
                      </span>
                      <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-900 font-mono">
                        {service.workflowFlow.split(' → ').map((step, sIdx, arr) => (
                          <React.Fragment key={sIdx}>
                            <span className="px-2.5 py-1 bg-white border border-slate-200 rounded-lg text-slate-800 shadow-xs flex items-center gap-1.5">
                              <span className="w-4 h-4 rounded-full bg-sky-600 text-white text-[10px] flex items-center justify-center font-bold">
                                {sIdx + 1}
                              </span>
                              <span>{step}</span>
                            </span>
                            {sIdx < arr.length - 1 && (
                              <span className="text-sky-600 font-bold text-sm">→</span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="space-y-2 mb-6">
                    <span className="text-[10px] font-bold text-sky-700 uppercase tracking-widest block font-mono">Key Capabilities</span>
                    {service.keyFeatures.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-800 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between">
                  <button
                    id={`preview-service-${service.id}`}
                    onClick={() => setActivePreview({ type: service.samplePreviewType || 'erp', title: service.title })}
                    className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-600 hover:text-sky-700 transition cursor-pointer"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Interactive Demo</span>
                  </button>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-sky-600 group-hover:translate-x-1 transition" />
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Demo Modal */}
      {activePreview && (
        <DemoPreviewModal
          previewType={activePreview.type}
          title={activePreview.title}
          onClose={() => setActivePreview(null)}
        />
      )}
    </section>
  );
};
