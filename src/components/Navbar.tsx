import React, { useState } from 'react';
import { NavTab } from '../types';
import { useAccessibility } from '../context/AccessibilityContext';
import {
  Menu, X, Sun, Moon, Sparkles, ChevronRight, PhoneCall, Calculator,
  Layers, Bot, Cpu, GitBranch, Briefcase, Mail
} from 'lucide-react';

interface NavbarProps {
  currentTab: NavTab;
  setCurrentTab: (tab: NavTab) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentTab, setCurrentTab }) => {
  const { settings, toggleDarkMode } = useAccessibility();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: NavTab; label: string; icon: any }[] = [
    { id: 'home', label: 'Home', icon: Layers },
    { id: 'services', label: 'Services', icon: Layers },
    { id: 'ai-hub', label: 'AI & Automation', icon: Bot },
    { id: 'tech-stack', label: 'Tech Stack', icon: Cpu },
    { id: 'delivery-process', label: 'Process', icon: GitBranch },
    { id: 'portfolio', label: 'Portfolio', icon: Briefcase },
    { id: 'estimator', label: 'Estimator', icon: Calculator },
    { id: 'contact', label: 'Support', icon: Mail },
  ];

  const handleNavClick = (tab: NavTab) => {
    setCurrentTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="sticky top-0 z-30 bg-[#0b6908] border-b border-emerald-700/60 shadow-lg transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* First Line: Extended Full-Width White Brand Box & Quote Container */}
        <div className="flex items-center justify-between py-3 border-b border-emerald-600/40 gap-4">

          {/* Full-Width Extended White Background Box */}
          <div
            className="flex-1 flex items-center justify-between gap-4 sm:gap-6 cursor-pointer group bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/80 shadow-md w-full"
            onClick={() => handleNavClick('home')}
            id="brand-logo"
          >
            {/* Left Brand Identity */}
            <div className="flex items-center gap-3 shrink-0">
              <img
                src="/logo.png"
                alt="SRI REAL TIME Logo"
                className="h-11 w-auto object-contain group-hover:scale-105 transition-transform flex-shrink-0 drop-shadow-sm"
              />
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-algeria text-lg sm:text-xl tracking-tight text-[#0a1f64] font-bold whitespace-nowrap">
                    SRI REAL TIME
                  </span>
                  <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest bg-sky-50 text-sky-700 rounded border border-sky-200 font-mono shadow-xs whitespace-nowrap">
                    Enterprise
                  </span>
                </div>
                <p className="text-[11px] uppercase tracking-widest text-slate-500 font-medium whitespace-nowrap">
                  Emerging future unlimited
                </p>
              </div>
            </div>

            {/* Extended Statement next to Enterprise box (Golden Glitter Shimmer Text) */}
            <div className="hidden lg:block border-l border-amber-300/80 pl-4 py-0.5 flex-1">
              <p className="text-xs xl:text-sm font-bold leading-snug font-sans golden-glitter-text-dark">
                Combining deep technical expertise with a client-first approach to turn complex business challenges into elegant, highly intuitive enterprise products.
              </p>
            </div>
          </div>

          {/* Mobile Hamburger Menu Button (Mobile view only) */}
          <div className="flex lg:hidden items-center shrink-0">
            <button
              id="mobile-menu-trigger"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl border border-emerald-500/50 bg-emerald-800 text-white hover:bg-emerald-700 transition cursor-pointer shadow-xs"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Second Line: Menu Navigation (Desktop) */}
        <div className="hidden lg:flex items-center space-x-1.5 py-2.5 overflow-x-auto">
          {navItems.map((item) => {
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs uppercase tracking-widest font-bold transition-all cursor-pointer ${isActive
                    ? 'bg-white text-[#0b6908] shadow-md'
                    : 'text-white hover:text-white hover:bg-emerald-700/60'
                  }`}
              >
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Mobile Drawer Navigation Menu */}
      {mobileMenuOpen && (
        <div id="mobile-menu-drawer" className="lg:hidden bg-[#0b6908] border-b border-emerald-700 px-4 pt-2 pb-6 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                id={`mobile-nav-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold transition cursor-pointer ${isActive
                    ? 'bg-white text-[#0b6908]'
                    : 'text-white hover:bg-emerald-700/60'
                  }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-4 h-4 ${isActive ? 'text-[#0b6908]' : 'text-emerald-200'}`} />
                  <span>{item.label}</span>
                </div>
                <ChevronRight className={`w-4 h-4 ${isActive ? 'text-[#0b6908]' : 'text-emerald-200'}`} />
              </button>
            );
          })}

          <div className="pt-4 space-y-2">
            <button
              id="mobile-estimator-cta"
              onClick={() => handleNavClick('estimator')}
              className="w-full flex items-center justify-center gap-2 py-3 bg-amber-400 text-neutral-950 font-bold rounded-xl text-xs uppercase tracking-widest shadow-md"
            >
              <Sparkles className="w-4 h-4 text-neutral-950" />
              Calculate Project Scope & Cost
            </button>

            <button
              id="mobile-contact-cta"
              onClick={() => handleNavClick('contact')}
              className="w-full flex items-center justify-center gap-2 py-3 border border-lime-200/30 text-lime-100 font-bold rounded-xl text-xs uppercase tracking-widest"
            >
              <PhoneCall className="w-4 h-4 text-amber-400" />
              24/7 Consultation Request
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

