import React, { useState } from 'react';
import { DELIVERY_PROCESS } from '../data/companyData';
import {
  GitBranch, CheckCircle2, Clock, FileCheck, Layers, ChevronRight, Sparkles
} from 'lucide-react';

export const DeliveryProcess: React.FC = () => {
  const [selectedStep, setSelectedStep] = useState<string>("01");

  const currentDetail = DELIVERY_PROCESS.find(s => s.stepNumber === selectedStep) || DELIVERY_PROCESS[0];

  return (
    <section id="delivery-process-section" className="pt-6 pb-16 lg:pt-8 lg:pb-24 transition-colors bg-transparent border-b border-sky-200/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b6908b5] tracking-tight">
            Structured Agile <span className="italic font-serif text-[#0b6908b5]">Product Lifecycle</span>
          </h2>
          <p className="mt-4 text-slate-600 text-base leading-relaxed font-normal">
            From initial requirement discovery to post-launch 24/7 SLA maintenance, our 7-stage delivery methodology ensures transparent, predictable, and high-quality deployment.
          </p>
        </div>

        {/* Horizontal / Grid Step Selector Timeline */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 mb-12">
          {DELIVERY_PROCESS.map((step) => {
            const isSelected = selectedStep === step.stepNumber;
            return (
              <button
                key={step.stepNumber}
                id={`process-step-btn-${step.stepNumber}`}
                onClick={() => setSelectedStep(step.stepNumber)}
                className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${isSelected
                  ? 'bg-sky-600 text-white border-sky-600 shadow-lg shadow-sky-600/20 font-bold'
                  : 'apple-card text-slate-800 border-slate-200/80 hover:border-sky-500/50'
                  }`}
              >
                <div className={`text-2xl font-bold mb-1 font-mono ${isSelected ? 'text-white' : 'text-sky-600'}`}>
                  {step.stepNumber}
                </div>
                <div className="text-xs font-bold line-clamp-2 uppercase tracking-wider">
                  {step.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Detailed Showcase Box */}
        <div className="apple-card p-8 lg:p-12 shadow-xl transition-all">
          <div className="flex flex-col lg:flex-row justify-between gap-8">

            <div className="space-y-6 flex-1">
              <div className="flex items-center gap-3">
                <span className="text-4xl font-bold text-sky-600">
                  {currentDetail.stepNumber}
                </span>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    {currentDetail.title}
                  </h3>
                  <span className="text-xs font-mono text-sky-700 flex items-center gap-1 mt-0.5 font-bold">
                    <Clock className="w-3.5 h-3.5 text-sky-600" /> Average Duration: {currentDetail.duration}
                  </span>
                </div>
              </div>

              <p className="text-slate-600 text-base leading-relaxed font-normal">
                {currentDetail.description}
              </p>

              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 block mb-3 font-mono">
                  Key Sprint Activities
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentDetail.keyActivities.map((act, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-800 font-mono shadow-xs">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                      <span>{act}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Deliverables Box */}
            <div className="w-full lg:w-80 p-6 rounded-2xl bg-sky-50/80 border border-sky-200 text-slate-900 flex flex-col justify-between space-y-4 shadow-xs">
              <div>
                <div className="flex items-center gap-2 text-sky-700 font-bold text-xs uppercase tracking-widest mb-2 font-mono">
                  <FileCheck className="w-4 h-4 text-sky-600" />
                  <span>PHASE DELIVERABLES</span>
                </div>
                <h4 className="font-bold text-lg text-slate-900 mb-2">
                  Guaranteed Artifacts
                </h4>
                <p className="text-xs text-slate-700 leading-relaxed font-mono font-medium">
                  {currentDetail.deliverables}
                </p>
              </div>

              <div className="pt-4 border-t border-sky-200/80 flex items-center justify-between text-xs text-slate-500 font-mono">
                <span className="uppercase tracking-widest text-[10px] font-bold">Quality Standard</span>
                <span className="font-bold text-sky-700 flex items-center gap-1 text-[10px] uppercase tracking-widest">
                  <Sparkles className="w-3.5 h-3.5 text-sky-600" /> 100% Signed Off
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
