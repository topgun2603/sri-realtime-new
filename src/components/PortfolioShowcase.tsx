import React, { useState } from 'react';
import { PORTFOLIO_CASE_STUDIES } from '../data/companyData';
import { Briefcase, TrendingUp, CheckCircle2, ArrowRight, Layers, Building } from 'lucide-react';

export const PortfolioShowcase: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'Enterprise' | 'SME'>('all');

  const filtered = filter === 'all'
    ? PORTFOLIO_CASE_STUDIES
    : PORTFOLIO_CASE_STUDIES.filter(p => p.clientType === filter);

  return (
    <section id="portfolio-section" className="pt-6 pb-16 lg:pt-8 lg:pb-24 bg-transparent border-b border-sky-200/30 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b6908b5] tracking-tight">
            Proven Impact Across <span className="italic font-serif text-[#0b6908b5]">Enterprise Domains</span>
          </h2>
          <p className="mt-4 text-slate-600 text-base leading-relaxed font-normal">
            Discover how SRI REAL TIME partnered with enterprises and high-growth SMEs to modernize legacy systems, integrate AI, and accelerate digital outcomes.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-2 mb-12">
          {[
            { id: 'all', label: 'All Success Stories' },
            { id: 'Enterprise', label: 'Enterprise Deployments' },
            { id: 'SME', label: 'SME & Growth Apps' },
          ].map((item) => (
            <button
              key={item.id}
              id={`portfolio-filter-${item.id}`}
              onClick={() => setFilter(item.id as any)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition cursor-pointer ${filter === item.id
                ? 'bg-sky-600 text-white shadow-md shadow-sky-600/20'
                : 'apple-card text-slate-800 border-slate-200/80 hover:border-sky-500/50'
                }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="apple-card p-8 shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-sky-50 text-sky-700 border border-sky-200 font-mono">
                    {item.domain}
                  </span>
                  <span className="text-xs font-mono text-slate-600 flex items-center gap-1 font-medium">
                    <Building className="w-3.5 h-3.5 text-sky-600" /> {item.clientType} Client
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-600 mb-6 leading-relaxed font-normal">
                  {item.summary}
                </p>

                {/* Challenge & Solution */}
                <div className="space-y-3 mb-6 p-4.5 rounded-xl bg-slate-50 border border-slate-200 text-xs shadow-xs">
                  <div>
                    <span className="font-bold text-slate-900 block mb-0.5 uppercase tracking-wider text-[10px] font-mono">The Challenge:</span>
                    <p className="text-slate-600">{item.challenge}</p>
                  </div>
                  <div>
                    <span className="font-bold text-sky-700 block mb-0.5 uppercase tracking-wider text-[10px] font-mono">SRI REAL TIME Solution:</span>
                    <p className="text-slate-900 font-medium">{item.solution}</p>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 mb-6">
                  {item.metrics.map((m, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center shadow-xs">
                      <div className="text-lg font-bold font-mono text-sky-700">{m.value}</div>
                      <div className="text-[9px] text-slate-500 uppercase tracking-widest font-semibold">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Badges */}
              <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-2 text-xs">
                <div className="flex flex-wrap gap-1 font-mono">
                  {item.techUsed.map((t, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-md bg-white text-slate-700 text-[10px] border border-slate-200 font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
