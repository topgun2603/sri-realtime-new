import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, Calendar, MessageSquare, ShieldCheck, Sparkles } from 'lucide-react';

interface ContactSectionProps {
  initialNotes?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialNotes = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceInterest: 'Enterprise ERP / Business System',
    preferredDate: '',
    message: initialNotes || '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact-section" className="pt-6 pb-16 lg:pt-8 lg:pb-24 transition-colors bg-transparent border-b border-sky-200/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b6908b5] tracking-tight">
            Let's Build Your <span className="italic font-serif text-[#0b6908b5]">Enterprise Solution</span>
          </h2>
          <p className="mt-4 text-slate-600 text-base leading-relaxed font-normal">
            Partner with <span className="font-algeria font-normal text-slate-900">SRI REAL TIME</span> to digitize operations, integrate intelligent AI, or launch scalable mobile & web products.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* Contact Details & Global Offices (2 Cols) */}
          <div className="lg:col-span-2 space-y-8">
            <div className="apple-card p-8 shadow-xl space-y-6 text-slate-900">
              <h3 className="font-bold text-xl text-slate-900">
                Global Operations & Support
              </h3>

              <div className="space-y-4 text-sm text-slate-600">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600 shrink-0 shadow-xs">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase tracking-widest block font-mono">Official Email</span>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="font-bold text-slate-900 hover:text-sky-600 transition">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600 shrink-0 shadow-xs">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase tracking-widest block font-mono">Phone Lines</span>
                    <p className="font-bold text-slate-900">{COMPANY_INFO.contactNumbers[0]}</p>
                    <p className="text-xs text-slate-600 font-mono font-medium">{COMPANY_INFO.contactNumbers[1]}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600 shrink-0 shadow-xs">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase tracking-widest block font-mono">Client Support SLA</span>
                    <p className="font-bold text-sky-700">24 / 7 Available Continuous Support</p>
                  </div>
                </div>
              </div>

              {/* Office Locations */}
              <div className="pt-6 border-t border-slate-200/80">
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 block mb-3 font-mono">
                  Regional Development Hubs
                </span>
                <div className="space-y-2 text-xs font-semibold text-slate-800 font-mono">
                  {COMPANY_INFO.offices.map((office, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-sky-600" />
                      <span>{office}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Security Guarantee Badge */}
            <div className="p-6 apple-card text-slate-900 shadow-lg flex items-center gap-4">
              <ShieldCheck className="w-10 h-10 text-sky-600 shrink-0" />
              <div>
                <h4 className="font-bold text-sm text-slate-900">Strict Enterprise NDA Protection</h4>
                <p className="text-xs text-slate-600 mt-0.5 font-normal">
                  All consultations and requirements shared are protected by non-disclosure agreements.
                </p>
              </div>
            </div>
          </div>

          {/* Consultation Booking Form (3 Cols) */}
          <div className="lg:col-span-3">
            <div className="apple-card p-8 lg:p-10 shadow-xl text-slate-900">

              {submitted ? (
                <div className="text-center py-12 space-y-6 animate-in fade-in duration-300">
                  <div className="w-20 h-20 rounded-full bg-sky-50 border border-sky-200 text-sky-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">Inquiry Received Successfully!</h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto mt-2 leading-relaxed">
                      Thank you for contacting SRI REAL TIME. Our Solutions Architect team will review your specs and contact you at <span className="font-bold text-sky-700">{formData.email}</span> within 4 business hours.
                    </p>
                  </div>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 bg-slate-900 text-white rounded-full font-bold text-xs uppercase tracking-widest hover:bg-slate-800 transition cursor-pointer"
                  >
                    Send Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">
                      Request Technical Consultation
                    </h3>
                    <p className="text-xs text-slate-600 mt-1">
                      Fill out the form below for a free technical workshop and scope estimate.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-2 font-mono">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500 font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-2 font-mono">
                        Work Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500 font-medium"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-2 font-mono">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500 font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-2 font-mono">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Enterprise Global Inc."
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500 font-medium"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-2 font-mono">
                      Primary Service Category
                    </label>
                    <select
                      value={formData.serviceInterest}
                      onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50 text-slate-900 text-sm focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500 font-medium"
                    >
                      <option>Enterprise ERP / Business System</option>
                      <option>Management Information System (MIS)</option>
                      <option>Smart Inventory & Supply Chain (SCM)</option>
                      <option>E-Commerce Solutions & CRM</option>
                      <option>AI Chatbot & Automation Integration</option>
                      <option>Mobile App Development (iOS/Android)</option>
                      <option>Website & Custom Web App</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-2 font-mono">
                      Project Goals / Scope Notes
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your technical requirements, timeline expectations, or desired integrations..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500 font-medium"
                    />
                  </div>

                  <button
                    type="submit"
                    id="submit-contact-form-btn"
                    className="w-full py-4 bg-sky-600 hover:bg-sky-500 text-white font-bold rounded-full shadow-lg shadow-sky-600/20 transition flex items-center justify-center gap-2 text-xs uppercase tracking-widest cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-white" />
                    <span>Submit Request for Consultation</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
