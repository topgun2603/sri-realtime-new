import React, { useState } from 'react';
import { TECH_EXPERTISE } from '../data/companyData';
import { TechCategory } from '../types';
import { Cpu, Code, Server, Database, Bot, Cloud, Building2, CheckCircle2 } from 'lucide-react';

export const TechStackMatrix: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<TechCategory | 'all'>('all');

  const categories: { id: TechCategory | 'all'; label: string; icon: any }[] = [
    { id: 'all', label: 'All Technologies', icon: Cpu },
    { id: 'frontend', label: 'Frontend & Mobile', icon: Code },
    { id: 'backend', label: 'Backend APIs', icon: Server },
    { id: 'databases', label: 'Databases & Storage', icon: Database },
    { id: 'ai', label: 'AI & Machine Learning', icon: Bot },
    { id: 'cloud', label: 'Cloud & DevOps', icon: Cloud },
    { id: 'enterprise', label: 'Enterprise & ERP', icon: Building2 },
  ];

  const filteredItems = activeCategory === 'all'
    ? TECH_EXPERTISE
    : TECH_EXPERTISE.filter(t => t.category === activeCategory);

  return (
    <section id="tech-stack-section" className="pt-6 pb-16 lg:pt-8 lg:pb-24 bg-transparent border-b border-sky-200/30 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b6908b5] tracking-tight">
            Battle-Tested Stack & <span className="italic font-serif text-[#0b6908b5]">Enterprise</span> Tools
          </h2>
          <p className="mt-4 text-slate-600 text-base leading-relaxed font-normal">
            We leverage modern, production-ready frameworks, cloud platforms, and machine learning libraries to build resilient, high-performance applications.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                id={`tech-filter-${cat.id}`}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs uppercase tracking-widest font-bold transition-all cursor-pointer ${isActive
                  ? 'bg-sky-600 text-white shadow-md shadow-sky-600/20'
                  : 'apple-card text-slate-800 border-slate-200/80 hover:border-sky-500/50'
                  }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tech Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={idx}
              className="apple-card p-6 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-lg text-slate-900 group-hover:text-sky-600 transition">
                    {item.name}
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest bg-sky-50 text-sky-700 border border-sky-200 font-mono">
                    {item.badge}
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-4 font-normal">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between text-[11px] text-slate-500">
                <span className="font-semibold text-slate-900 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-600" />
                  Popular For:
                </span>
                <span className="truncate max-w-[170px] font-mono text-slate-700 font-medium">{item.popularFor}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
