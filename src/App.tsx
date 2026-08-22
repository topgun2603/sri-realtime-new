import React, { useState } from 'react';
import { AccessibilityProvider, useAccessibility } from './context/AccessibilityContext';
import { NavTab, ServiceCategory } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { AIHub } from './components/AIHub';
import { TechStackMatrix } from './components/TechStackMatrix';
import { DeliveryProcess } from './components/DeliveryProcess';
import { PortfolioShowcase } from './components/PortfolioShowcase';
import { ProjectEstimator } from './components/ProjectEstimator';
import { ContactSection } from './components/ContactSection';
import { WHY_CHOOSE_US, COMPANY_INFO } from './data/companyData';
import {
  Award, Cpu, Clock, HeartHandshake, DollarSign, Layers,
  CheckCircle2, ArrowRight, Sparkles
} from 'lucide-react';

function MainApp() {
  const [currentTab, setCurrentTab] = useState<NavTab>('home');
  const [estimateNotes, setEstimateNotes] = useState('');
  const [selectedServiceCategory, setSelectedServiceCategory] = useState<ServiceCategory>('enterprise');
  const [targetServiceId, setTargetServiceId] = useState<string | null>(null);
  const { settings } = useAccessibility();

  const handleSelectTab = (tab: NavTab) => {
    if (tab === 'services') {
      setSelectedServiceCategory('enterprise');
      setTargetServiceId(null);
    }
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToServiceCategory = (category: ServiceCategory, targetId?: string) => {
    setSelectedServiceCategory(category);
    setTargetServiceId(targetId || null);
    setCurrentTab('services');
  };

  const getWhyChooseIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award': return Award;
      case 'Cpu': return Cpu;
      case 'Clock': return Clock;
      case 'HeartHandshake': return HeartHandshake;
      case 'DollarSign': return DollarSign;
      case 'Layers': return Layers;
      default: return CheckCircle2;
    }
  };

  const handleShareEstimateWithContact = (specs: string) => {
    setEstimateNotes(specs);
  };

  return (
    <div className={`min-h-screen bg-transparent text-slate-900 font-sans transition-colors ${settings.fontSizeScale === 'large' ? 'text-lg' : settings.fontSizeScale === 'xlarge' ? 'text-xl' : 'text-base'}`}>

      {/* Fully Responsive Main Layout Container */}
      <div className="w-full bg-transparent">

        {/* Navigation Header */}
        <Navbar currentTab={currentTab} setCurrentTab={handleSelectTab} />

        {/* Tab / Page Views */}
        <main id="main-content-area">
          {currentTab === 'home' && (
            <div>
              <Hero setCurrentTab={setCurrentTab} />

              {/* Featured Services Teaser */}
              <ServicesSection />

              {/* WHY CHOOSE SRI REAL TIME Section */}
              <section className="py-16 lg:py-24 bg-transparent transition-colors border-b border-sky-200/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-[#0b6908b5] border border-emerald-200 mb-3 uppercase tracking-wider font-mono shadow-sm">
                      WHY CHOOSE <span className="font-algeria">SRI REAL TIME</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b6908b5] tracking-tight">
                      Built for Clean Design & Robust Engineering
                    </h2>
                    <p className="mt-4 text-slate-600 text-base leading-relaxed">
                      We combine deep domain expertise with a client-first approach — turning complex enterprise challenges into intuitive digital products.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {WHY_CHOOSE_US.map((item, idx) => {
                      const Icon = getWhyChooseIcon(item.icon);
                      return (
                        <div
                          key={idx}
                          className="p-8 apple-card shadow-xl group flex flex-col justify-between"
                        >
                          <div>
                            <div className="w-14 h-14 rounded-2xl bg-sky-50 border border-sky-200 text-sky-600 flex items-center justify-center mb-6 shadow-xs group-hover:scale-105 transition-transform">
                              <Icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">
                              {item.title}
                            </h3>
                            <p className="text-sm text-slate-600 leading-relaxed font-normal">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Callout Banner */}
                  <div className="mt-16 p-8 lg:p-12 rounded-[28px] bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white shadow-2xl border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="space-y-2 max-w-2xl">
                      <span className="text-sky-400 font-bold text-xs uppercase tracking-wider block font-mono">
                        Ready to establish or expand your digital footprint?
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-black text-white">
                        Partner with <span className="font-algeria">SRI REAL TIME</span> Technical Experts
                      </h3>
                      <p className="text-sm italic font-serif text-slate-300 leading-relaxed pt-1">
                        "Combining deep technical expertise with a client-first approach to turn complex business challenges into elegant, highly intuitive enterprise products."
                      </p>
                    </div>
                    <button
                      onClick={() => { setCurrentTab('estimator'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                      className="px-8 py-4 bg-sky-600 hover:bg-sky-500 text-white font-bold rounded-full shadow-lg shadow-sky-600/20 shrink-0 transition flex items-center gap-2 text-xs uppercase tracking-widest cursor-pointer"
                    >
                      <Sparkles className="w-4 h-4 text-white" />
                      <span>Start Project Scope Estimate</span>
                    </button>
                  </div>
                </div>
              </section>

              {/* Delivery Process Teaser */}
              <DeliveryProcess />

              {/* Tech Stack Matrix Teaser */}
              <TechStackMatrix />

              {/* Contact Teaser */}
              <ContactSection initialNotes={estimateNotes} />
            </div>
          )}

          {currentTab === 'services' && (
            <ServicesSection
              initialCategory={selectedServiceCategory}
              targetId={targetServiceId}
            />
          )}
          {currentTab === 'ai-hub' && <AIHub />}
          {currentTab === 'tech-stack' && <TechStackMatrix />}
          {currentTab === 'delivery-process' && <DeliveryProcess />}
          {currentTab === 'portfolio' && <PortfolioShowcase />}
          {currentTab === 'estimator' && (
            <ProjectEstimator
              setCurrentTab={setCurrentTab}
              onShareEstimateWithContact={handleShareEstimateWithContact}
            />
          )}
          {currentTab === 'contact' && <ContactSection initialNotes={estimateNotes} />}
        </main>

        {/* Global Footer */}
        <Footer
          setCurrentTab={handleSelectTab}
          onNavigateToServiceCategory={handleNavigateToServiceCategory}
        />

      </div>

    </div>
  );
}

export default function App() {
  return (
    <AccessibilityProvider>
      <MainApp />
    </AccessibilityProvider>
  );
}
