import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { NavTab } from '../types';
import {
  Sparkles, ArrowRight, ShieldCheck, CheckCircle2, Bot,
  Settings, Smartphone, Globe, Layers, Award, Clock, ExternalLink
} from 'lucide-react';

interface HeroProps {
  setCurrentTab: (tab: NavTab) => void;
}

export const Hero: React.FC<HeroProps> = ({ setCurrentTab }) => {
  return (
    <section className="relative overflow-hidden pt-2 pb-12 lg:pt-4 lg:pb-20 border-b border-sky-200/30 bg-transparent">

      {/* Background Subtle Gradient Overlay */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-15">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-950/20 via-transparent to-sky-950/20" />
      </div>

      {/* Top Left Apple-style Sticker Cutout (Clickable: Pasumaivelanmai) */}
      <a
        href="https://pasumaivelanmai.com"
        target="_blank"
        rel="noopener noreferrer"
        title="Explore Pasumaivelanmai inhouse product"
        className="hidden lg:block absolute top-4 lg:top-8 xl:top-6 2xl:top-4 left-0 lg:-left-8 xl:-left-4 2xl:left-0 z-20 pointer-events-auto group animate-float cursor-pointer"
      >
        <div className="flex flex-col items-center">
          <img
            src="/hero_left_sticker.png"
            alt="Pasumaivelanmai - Carrot Agricultural Field & Farmers Harvest"
            className="w-48 lg:w-60 xl:w-72 2xl:w-80 h-auto drop-shadow-2xl group-hover:scale-105 transition-transform duration-300"
          />

          {/* Bottom Product Label Box */}
          <div className="mt-2 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full shadow-lg border border-emerald-200 flex items-center gap-1.5 text-xs font-bold text-emerald-900 group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600 transition-all duration-300">
            <span>Pasumaivelanmai</span>
            <ExternalLink className="w-3.5 h-3.5 text-emerald-600 group-hover:text-white transition-colors" />
          </div>
        </div>
      </a>

      {/* Top Right Apple-style Sticker Cutout (Clickable: Pasumai Trade) */}
      <a
        href="https://pasumaitrade.com"
        target="_blank"
        rel="noopener noreferrer"
        title="Explore Pasumai Trade inhouse product"
        className="hidden lg:block absolute top-4 lg:top-8 xl:top-6 2xl:top-4 right-0 lg:-right-8 xl:-right-4 2xl:right-0 z-20 pointer-events-auto group animate-float-delayed cursor-pointer"
      >
        <div className="flex flex-col items-center">
          <img
            src="/hero_right_sticker.png"
            alt="Explore Pasumai Trade inhouse product"
            className="w-48 lg:w-60 xl:w-72 2xl:w-80 h-auto drop-shadow-2xl group-hover:scale-105 transition-transform duration-300"
          />

          {/* Bottom Product Label Box */}
          <div className="mt-2 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full shadow-lg border border-sky-200 flex items-center gap-1.5 text-xs font-bold text-sky-900 group-hover:bg-sky-600 group-hover:text-white group-hover:border-sky-600 transition-all duration-300">
            <span>Pasumai Trade</span>
            <ExternalLink className="w-3.5 h-3.5 text-sky-600 group-hover:text-white transition-colors" />
          </div>
        </div>
      </a>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Main Headline */}
        <div className="text-center max-w-3xl lg:max-w-3xl xl:max-w-4xl mx-auto space-y-5 pt-0">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0b6908b5] leading-tight">
            Engineering <span className="text-[#0b6908b5] font-normal">Scalable</span> Future-Ready Systems.
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto font-normal">
            {COMPANY_INFO.summary}
          </p>

          {/* Light Theme CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              id="hero-services-cta"
              onClick={() => setCurrentTab('services')}
              className="w-full sm:w-auto px-8 py-3.5 bg-[#0b6908b5] hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-widest rounded-full shadow-lg shadow-emerald-700/20 transition flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Explore Enterprise Solutions</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              id="hero-estimator-cta"
              onClick={() => setCurrentTab('estimator')}
              className="w-full sm:w-auto px-8 py-3.5 bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 font-bold text-xs uppercase tracking-widest rounded-full shadow-sm transition flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-sky-600" />
              <span>AI Scope & Cost Calculator</span>
            </button>
          </div>
        </div>

        {/* Hero Showcase Banner */}
        <div className="mt-12 max-w-5xl mx-auto rounded-[28px] overflow-hidden apple-card p-3 border border-slate-200/80 shadow-2xl group">
          <div className="relative rounded-[22px] overflow-hidden aspect-video sm:aspect-[16/9.5] lg:aspect-[16/9] bg-slate-950">
            <img
              src="/images/hero_ai_architecture.jpg"
              alt="SRI REAL TIME Enterprise Architecture Platform"
              className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex items-end p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-sky-400 font-mono block mb-1">
                    ENTERPRISE ARCHITECTURE PLATFORM
                  </span>
                  <h4 className="text-lg sm:text-2xl font-bold text-white">
                    Unified Cloud Data Pipelines, Microservices & AI Automation
                  </h4>
                </div>
                <button
                  onClick={() => setCurrentTab('services')}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold transition shrink-0 cursor-pointer"
                >
                  <span>Explore Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Light Bento Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {COMPANY_INFO.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 apple-card flex items-center gap-5 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-sky-50 border border-sky-200/80 flex items-center justify-center text-sky-600 font-bold text-xl group-hover:scale-105 transition-transform shadow-xs">
                {idx === 0 ? <Award className="w-6 h-6" /> : idx === 1 ? <Layers className="w-6 h-6" /> : <Clock className="w-6 h-6" />}
              </div>
              <div>
                <div className="text-3xl font-bold text-slate-900 tracking-tight flex items-baseline gap-1">
                  <span className={idx === 1 ? 'text-sky-600' : 'text-slate-900'}>{stat.value}</span>
                </div>
                <div className="text-xs uppercase tracking-widest font-bold text-slate-700">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-500 font-medium">
                  {stat.suffix}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Vision & Mission Light Bento Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Vision Card */}
          <div className="p-8 apple-card relative overflow-hidden group">
            <div className="flex items-center gap-2 mb-2 text-sky-700 text-xs font-bold uppercase tracking-widest font-mono">
              <span>01. OUR VISION</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900">Partnering for Long-Term Digital Success</h3>
            <p className="text-slate-700 text-sm leading-relaxed font-normal">
              {COMPANY_INFO.vision}
            </p>
          </div>

          {/* Mission Card */}
          <div className="p-8 apple-card relative overflow-hidden group">
            <div className="flex items-center gap-2 mb-2 text-amber-700 text-xs font-bold uppercase tracking-widest font-mono">
              <span>02. OUR MISSION</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900">Reliable, Future-Ready Digital Engineering</h3>
            <p className="text-slate-700 text-sm leading-relaxed font-normal">
              {COMPANY_INFO.mission}
            </p>
          </div>
        </div>

        {/* Callout Banner (High Contrast Callout Box) */}
        <div className="mt-12 max-w-5xl mx-auto p-8 lg:p-10 rounded-[28px] bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white shadow-2xl border border-amber-500/40 relative overflow-hidden group">
          {/* Subtle Golden Ambient Light Accent */}
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-3 max-w-4xl relative z-10">
            <span className="text-amber-400 font-bold text-xs uppercase tracking-wider block font-mono">
              Ready to establish or expand your digital footprint?
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Partner with <span className="font-algeria">SRI REAL TIME</span> Technical Experts
            </h3>
            <p className="text-base sm:text-lg lg:text-xl font-bold font-sans leading-relaxed pt-1 golden-glitter-text tracking-wide">
              Combining deep technical expertise with a client-first approach to turn complex business challenges into elegant, highly intuitive enterprise products.
            </p>
          </div>
        </div>

        {/* Highlighted Service Badges */}
        <div className="mt-14 pt-8 border-t border-slate-200/80">
          <p className="text-center text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-6 font-mono">
            Core Engineering Expertise Across Enterprise Systems
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto text-xs font-semibold">
            {[
              { label: "Management Information System (MIS)", icon: Settings },
              { label: "Enterprise Resource Planning (ERP)", icon: Layers },
              { label: "Inventory Management", icon: CheckCircle2 },
              { label: "E-Commerce Solutions", icon: Globe },
              { label: "360° CRM Platforms", icon: ShieldCheck },
              { label: "Supply Chain Management (SCM)", icon: Layers },
              { label: "AI-Powered Chatbots", icon: Bot },
              { label: "Mobile Apps (Android/iOS)", icon: Smartphone }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl apple-card text-slate-800 hover:border-sky-400/50 transition font-medium text-xs shadow-xs"
                >
                  <Icon className="w-3.5 h-3.5 text-sky-600" />
                  <span>{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
