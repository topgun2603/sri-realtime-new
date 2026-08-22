import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { NavTab, ServiceCategory } from '../types';
import { ShieldCheck, Mail, Phone, MapPin, Clock, ArrowUpRight, CheckCircle } from 'lucide-react';

interface FooterProps {
  setCurrentTab: (tab: NavTab) => void;
  onNavigateToServiceCategory?: (category: ServiceCategory, targetId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentTab, onNavigateToServiceCategory }) => {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 transition-colors pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">

          {/* Company Bio */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="SRI REAL TIME Logo"
                className="h-12 w-auto object-contain flex-shrink-0 drop-shadow-md"
              />
              <span className="font-algeria text-2xl text-white tracking-tight">
                SRI REAL TIME
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-md font-normal">
              {COMPANY_INFO.summary}
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-2">
              {["50+ Projects", "10+ Domains", "24/7 SLA Support"].map((stat, i) => (
                <span key={i} className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-sky-500/10 text-sky-400 border border-sky-500/30 font-mono uppercase tracking-wider">
                  <CheckCircle className="w-3.5 h-3.5 text-sky-400" />
                  {stat}
                </span>
              ))}
            </div>
          </div>

          {/* Core Services */}
          <div>
            <h4 className="text-sky-400 font-bold text-xs mb-4 tracking-widest uppercase font-mono">
              Enterprise Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: "Management Information System", tab: "services", category: "enterprise" as ServiceCategory, targetId: "service-card-mis" },
                { label: "Enterprise Resource Planning", tab: "services", category: "enterprise" as ServiceCategory, targetId: "service-card-erp" },
                { label: "Smart Inventory Management", tab: "services", category: "enterprise" as ServiceCategory, targetId: "service-card-inventory" },
                { label: "E-Commerce Solutions", tab: "services", category: "enterprise" as ServiceCategory, targetId: "service-card-ecommerce" },
                { label: "360° CRM Platforms", tab: "services", category: "enterprise" as ServiceCategory, targetId: "service-card-crm" },
                { label: "Supply Chain Management", tab: "services", category: "enterprise" as ServiceCategory, targetId: "service-card-scm" }
              ].map((item, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => {
                      if (item.category && onNavigateToServiceCategory) {
                        onNavigateToServiceCategory(item.category, item.targetId);
                      } else {
                        setCurrentTab(item.tab as NavTab);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }
                    }}
                    className="text-slate-400 hover:text-sky-400 transition flex items-center gap-1 group text-xs cursor-pointer whitespace-nowrap"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition text-sky-400 shrink-0" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* AI & Digital Products */}
          <div>
            <h4 className="text-sky-400 font-bold text-xs mb-4 tracking-widest uppercase font-mono">
              AI & Digital Solutions
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: "AI Workflow Automation", tab: "services", category: "ai" as ServiceCategory, targetId: "service-card-mfg-ai-workflow" },
                { label: "AI Chatbots & Assistants", tab: "ai-hub" },
                { label: "Predictive Analytics & BI", tab: "ai-hub" },
                { label: "Document Processing (OCR)", tab: "ai-hub" },
                { label: "Android & iOS Mobile Apps", tab: "services", category: "digital" as ServiceCategory, targetId: "service-card-mobile-dev" },
                { label: "Custom Web Applications", tab: "services", category: "digital" as ServiceCategory, targetId: "service-card-web-dev" },
                { label: "REST & Cloud Microservices", tab: "tech-stack" }
              ].map((item, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => {
                      if (item.category && onNavigateToServiceCategory) {
                        onNavigateToServiceCategory(item.category, item.targetId);
                      } else {
                        setCurrentTab(item.tab as NavTab);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }
                    }}
                    className="text-slate-400 hover:text-sky-400 transition flex items-center gap-1 group text-xs cursor-pointer"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition text-sky-400" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details & Support */}
          <div>
            <h4 className="text-sky-400 font-bold text-xs mb-4 tracking-widest uppercase font-mono">
              Global Support Desk
            </h4>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition text-xs font-mono">
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div className="text-xs font-mono">
                  <p className="text-slate-200">{COMPANY_INFO.contactNumbers[0]}</p>
                  <p className="text-[10px] text-slate-500">{COMPANY_INFO.contactNumbers[1]}</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-200 text-xs uppercase tracking-wider font-mono">24 / 7 Available</span>
                  <p className="text-[10px] text-slate-500 font-mono">Continuous Incident SLA</p>
                </div>
              </div>
              <div className="pt-2">
                <button
                  onClick={() => { setCurrentTab('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="w-full py-2.5 px-3 bg-sky-600 hover:bg-sky-500 text-white rounded-full text-xs font-bold uppercase tracking-widest transition cursor-pointer shadow-md shadow-sky-600/20"
                >
                  Schedule Workshop
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <p>© {new Date().getFullYear()} SRI REAL TIME. All rights reserved. Enterprise Digital Engineering.</p>
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1 text-slate-400">
              <ShieldCheck className="w-4 h-4 text-sky-400" />
              ISO 27001 Security Compliant
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
