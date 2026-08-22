import React, { useState } from 'react';
import { AIRecommendation } from '../types';
import {
  Bot, Sparkles, Cpu, Send, CheckCircle, CheckCircle2, ArrowRight, Loader2,
  Terminal, ShieldCheck, Database, Layers, BrainCircuit, Settings
} from 'lucide-react';

export const AIHub: React.FC = () => {
  const [projectType, setProjectType] = useState('Enterprise ERP with AI Chatbot & OCR');
  const [businessGoal, setBusinessGoal] = useState('Automate multi-location inventory & invoice processing');
  const [keyFeatures, setKeyFeatures] = useState('Real-time stock alerts, AI invoice extraction, executive MIS analytics');
  const [techPreferences, setTechPreferences] = useState('React, Node.js, PostgreSQL, AWS, Gemini AI');
  const [budgetRange, setBudgetRange] = useState('Enterprise Tier ($15k - $50k)');

  const [loading, setLoading] = useState(false);
  const [recommendation, setRecommendation] = useState<AIRecommendation | null>(null);
  const [errorMsg, setErrorMsg] = useState('');

  const handleGenerateAI = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      const res = await fetch('/api/ai-consultant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          projectType,
          businessGoal,
          keyFeatures,
          techPreferences,
          budgetRange,
        })
      });

      if (!res.ok) {
        throw new Error('Failed to fetch AI recommendation');
      }

      const data = await res.json();
      setRecommendation(data);
    } catch (err: any) {
      setErrorMsg(err?.message || 'Error communicating with AI Architect');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-hub-section" className="pt-6 pb-16 lg:pt-8 lg:pb-24 transition-colors bg-transparent border-b border-sky-200/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b6908b5] tracking-tight">
            Transform Operations with <span className="font-algeria text-[#0b6908b5] font-normal">SRI REAL TIME</span> AI
          </h2>
          <p className="mt-4 text-slate-600 text-base leading-relaxed font-normal">
            From intelligent document extraction and predictive analytics to custom conversational virtual assistants, we embed cutting-edge AI models directly into your enterprise ERP, CRM, and SCM workflows.
          </p>
        </div>

        {/* First Featured Box: Manufacturer Domain – AI-Powered Machine Workflow Automation */}
        <div className="mb-12 p-8 apple-card text-slate-900 shadow-xl border-l-4 border-l-sky-600 relative overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600 shadow-xs">
                <Settings className="w-6 h-6" />
              </div>
              <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-sky-600 text-white font-mono shadow-xs">
                FIRST AI MODULE • MANUFACTURER DOMAIN
              </span>
            </div>
            <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-sky-50 text-sky-700 border border-sky-200 font-mono">
              Predictive Telemetry & Zero Unplanned Downtime
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
            Manufacturer Domain – AI-Powered Machine Workflow Automation
          </h3>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mb-6">
            Our solution enables manufacturers to transform traditional machine operations into an intelligent, automated and predictive manufacturing environment. It connects machines, sensors, production workflows and maintenance operations to continuously monitor machine health and production performance. AI/ML can analyze machine telemetry, historical failures and operational patterns to detect anomalies and predict potential failures before they cause unplanned downtime.
          </p>

          {/* Core Workflow Step Diagram */}
          <div className="p-5 bg-sky-50/80 rounded-2xl border border-sky-200">
            <span className="text-[10px] font-bold text-sky-700 uppercase tracking-widest block font-mono mb-3">
              Core Workflow
            </span>
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-900 font-mono">
              {[
                "Machine/IoT Data",
                "Real-Time Monitoring",
                "AI Anomaly Detection",
                "Error Identification",
                "Root-Cause Analysis",
                "AI Resolution Recommendation",
                "Automated Maintenance Workflow",
                "Technician Action",
                "Verification",
                "Learning & Prediction"
              ].map((step, sIdx, arr) => (
                <React.Fragment key={sIdx}>
                  <span className="px-3 py-1.5 bg-white border border-slate-200 rounded-xl text-slate-900 shadow-xs flex items-center gap-2">
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
        </div>

        {/* 6 Core AI Capabilities Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {[
            {
              title: "AI-Powered Chatbots & Virtual Assistants",
              desc: "Context-aware conversational AI for 24/7 customer support, internal knowledge management, and lead qualification.",
              icon: Bot,
              badge: "RAG & GenAI"
            },
            {
              title: "Predictive Analytics & BI",
              desc: "Machine learning models forecasting demand spikes, customer churn, revenue trends, and anomaly detection.",
              icon: BrainCircuit,
              badge: "Time-Series ML"
            },
            {
              title: "Intelligent Document Processing (OCR / NLP)",
              desc: "Automated extraction of invoices, receipts, contracts, and IDs with near 99% accuracy into structured JSON.",
              icon: Terminal,
              badge: "LayoutLM / OCR"
            },
            {
              title: "Machine Learning Model Integration",
              desc: "Deploy custom PyTorch or TensorFlow models seamlessly into your existing Node.js or Python backend endpoints.",
              icon: Cpu,
              badge: "Custom ML"
            },
            {
              title: "Workflow & Process Automation (RPA)",
              desc: "Robotic process automation connecting legacy software, email triggers, and cloud databases without manual friction.",
              icon: Layers,
              badge: "RPA Engine"
            },
            {
              title: "AI Integration into ERP, CRM & SCM",
              desc: "Supercharge your business software with real-time AI scoring, automatic reordering, and smart pipeline alerts.",
              icon: Database,
              badge: "Enterprise Sync"
            }
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 apple-card flex flex-col justify-between group shadow-xl"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600 shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest bg-sky-50 text-sky-700 border border-sky-200 font-mono">
                    {item.badge}
                  </span>
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">{item.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Interactive AI Architect Generator Form & Output */}
        <div className="apple-card text-slate-900 p-8 lg:p-12 shadow-xl relative overflow-hidden">
          <div className="max-w-3xl mb-8">
            <div className="flex items-center gap-2 text-sky-700 font-bold text-xs uppercase tracking-widest mb-2 font-mono">
              <Sparkles className="w-4 h-4" />
              <span>SRI REAL TIME AI SOLUTION ARCHITECT</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Get an Instant AI Tech Stack & Milestone Recommendation
            </h3>
            <p className="text-slate-600 text-sm mt-2 font-normal">
              Input your requirements below and let our AI Architect generate a tailored enterprise architecture and sprint roadmap.
            </p>
          </div>

          <form onSubmit={handleGenerateAI} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-2 font-mono">
                Project Type / System Scope
              </label>
              <input
                type="text"
                value={projectType}
                onChange={(e) => setProjectType(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-1 focus:ring-sky-500 font-medium"
                placeholder="e.g. ERP, Mobile App, AI Chatbot"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-2 font-mono">
                Primary Business Goal
              </label>
              <input
                type="text"
                value={businessGoal}
                onChange={(e) => setBusinessGoal(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-1 focus:ring-sky-500 font-medium"
                placeholder="e.g. Reduce operational delays"
                required
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-2 font-mono">
                Key Features & Integrations Requested
              </label>
              <input
                type="text"
                value={keyFeatures}
                onChange={(e) => setKeyFeatures(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-1 focus:ring-sky-500 font-medium"
                placeholder="e.g. Inventory barcode scanning, PDF OCR, WhatsApp chatbot"
                required
              />
            </div>

            <div className="md:col-span-2 flex items-center justify-between pt-2">
              <span className="text-xs text-slate-500 hidden sm:inline font-mono">
                Powered by Gemini AI Engine & SRI REAL TIME Architecture Rules
              </span>
              <button
                type="submit"
                disabled={loading}
                id="generate-ai-arch-btn"
                className="w-full sm:w-auto px-8 py-3.5 bg-sky-600 hover:bg-sky-500 text-white font-bold rounded-full shadow-lg shadow-sky-600/20 transition flex items-center justify-center gap-2 text-xs uppercase tracking-widest disabled:opacity-50 cursor-pointer"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-white" />
                    <span>Architecting Architecture...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-white" />
                    <span>Generate AI Recommendation</span>
                  </>
                )}
              </button>
            </div>
          </form>

          {/* AI Result Output Display */}
          {errorMsg && (
            <div className="mt-8 p-4 bg-rose-50 border border-rose-200 text-rose-700 rounded-xl text-xs font-mono">
              {errorMsg}
            </div>
          )}

          {recommendation && (
            <div className="mt-10 pt-8 border-t border-slate-200/80 space-y-6 animate-in fade-in duration-300">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-sky-50 text-sky-700 border border-sky-200 font-mono">
                    AI Architecture Plan
                  </span>
                  <h4 className="text-xl font-bold text-slate-900 mt-2">
                    {recommendation.recommendedArchitecture}
                  </h4>
                </div>
                <div className="text-right">
                  <span className="text-xs text-slate-500 uppercase tracking-widest font-bold font-mono">Estimated Timeline</span>
                  <div className="text-lg font-bold font-mono text-sky-700">{recommendation.estimatedTimelineWeeks}</div>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                {recommendation.summary}
              </p>

              {/* Recommended Stack */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-slate-50 p-5 rounded-xl border border-slate-200 text-xs font-mono">
                <div>
                  <span className="font-bold text-sky-700 block mb-1">Frontend & Mobile</span>
                  <div className="flex flex-wrap gap-1">
                    {recommendation.recommendedTechStack.frontend.map((t, i) => (
                      <span key={i} className="px-2 py-0.5 bg-white border border-slate-200 rounded text-slate-800 font-medium">{t}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="font-bold text-sky-700 block mb-1">Backend & Database</span>
                  <div className="flex flex-wrap gap-1">
                    {recommendation.recommendedTechStack.backend.concat(recommendation.recommendedTechStack.database).map((t, i) => (
                      <span key={i} className="px-2 py-0.5 bg-white border border-slate-200 rounded text-slate-800 font-medium">{t}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="font-bold text-sky-700 block mb-1">AI & Cloud</span>
                  <div className="flex flex-wrap gap-1">
                    {recommendation.recommendedTechStack.aiAutomation.concat(recommendation.recommendedTechStack.cloud).map((t, i) => (
                      <span key={i} className="px-2 py-0.5 bg-white border border-slate-200 rounded text-slate-800 font-medium">{t}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* AI Insight */}
              <div className="p-4 bg-sky-50 border-l-4 border-sky-600 border-y border-r border-sky-200 rounded-r-xl text-xs text-slate-700 flex items-start gap-3">
                <BrainCircuit className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block text-slate-900 mb-0.5">AI ROI Recommendation:</span>
                  {recommendation.aiInsight}
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
