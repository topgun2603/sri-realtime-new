import React, { useState } from 'react';
import { X, Play, RefreshCw, Send, CheckCircle2, TrendingUp, DollarSign, Package, Users, ShieldAlert, Cpu } from 'lucide-react';

interface DemoPreviewModalProps {
  previewType: string | null;
  title: string;
  onClose: () => void;
}

export const DemoPreviewModal: React.FC<DemoPreviewModalProps> = ({ previewType, title, onClose }) => {
  if (!previewType) return null;

  // State for interactive features inside modal preview
  const [chatMessages, setChatMessages] = useState([
    { sender: 'bot', text: 'Hello! I am SRI REAL TIME Assistant. How can I assist your enterprise workflow today?' },
    { sender: 'user', text: 'Show me stock reorder status for Warehouse B.' }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [activeTab, setActiveTab] = useState('overview');
  const [inventoryQty, setInventoryQty] = useState(1450);

  const handleSendChat = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    const userMsg = chatInput;
    setChatMessages((prev) => [...prev, { sender: 'user', text: userMsg }]);
    setChatInput('');

    setTimeout(() => {
      setChatMessages((prev) => [
        ...prev,
        {
          sender: 'bot',
          text: `[SRI REAL TIME AI Response]: Analyzing ERP records for "${userMsg}". Warehouse B reorder threshold reached for 3 SKUs. Automated purchase orders queued for manager approval.`
        }
      ]);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-4 overflow-y-auto">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl w-full max-w-4xl overflow-hidden animate-in fade-in zoom-in duration-200">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-sky-600 text-white rounded-xl font-bold text-xs uppercase tracking-wider">
              Live Preview
            </div>
            <div>
              <h3 className="font-extrabold text-lg text-slate-900 dark:text-white">{title}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">Interactive SRI REAL TIME Solution Showcase</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content depending on previewType */}
        <div className="p-6">
          
          {/* ERP / MIS Dashboard Preview */}
          {(previewType === 'erp' || previewType === 'mis') && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 bg-sky-50 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-800/80 rounded-2xl">
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold uppercase">Total Monthly Revenue</span>
                  <div className="text-2xl font-black text-sky-600 dark:text-sky-400 mt-1">$482,900</div>
                  <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1 mt-1">
                    <TrendingUp className="w-3.5 h-3.5" /> +14.2% vs last month
                  </span>
                </div>
                <div className="p-4 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/80 rounded-2xl">
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold uppercase">Active ERP Workflows</span>
                  <div className="text-2xl font-black text-emerald-600 dark:text-emerald-400 mt-1">1,240</div>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1 block">Finance, HR & Logistics Sync</span>
                </div>
                <div className="p-4 bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/80 rounded-2xl">
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold uppercase">System Efficiency</span>
                  <div className="text-2xl font-black text-indigo-600 dark:text-indigo-400 mt-1">99.8%</div>
                  <span className="text-xs text-indigo-600 dark:text-indigo-400 font-medium mt-1 block">Zero Bottleneck Detection</span>
                </div>
              </div>

              {/* Mock Table */}
              <div className="border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden">
                <div className="bg-slate-100 dark:bg-slate-800 px-4 py-3 font-bold text-xs uppercase tracking-wider text-slate-600 dark:text-slate-300 flex justify-between">
                  <span>Module Activity Log</span>
                  <span className="text-sky-600 dark:text-sky-400 font-normal">Real-Time Data Feed</span>
                </div>
                <div className="divide-y divide-slate-200 dark:divide-slate-800 text-xs">
                  <div className="p-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold">APPROVED</span>
                      <span className="font-semibold">Procurement PO #8892 - Raw Materials</span>
                    </div>
                    <span className="text-slate-500">2 mins ago</span>
                  </div>
                  <div className="p-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 font-bold">SYNCED</span>
                      <span className="font-semibold">Payroll Batch July - 140 Employees</span>
                    </div>
                    <span className="text-slate-500">12 mins ago</span>
                  </div>
                  <div className="p-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 font-bold">AUTO REORDER</span>
                      <span className="font-semibold">Inventory SKU #SKU-490 (Warehouse 3)</span>
                    </div>
                    <span className="text-slate-500">45 mins ago</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* AI Chatbot / Virtual Assistant Preview */}
          {(previewType === 'chatbot' || previewType === 'predictive') && (
            <div className="space-y-4">
              <div className="bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 h-64 overflow-y-auto space-y-3">
                {chatMessages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-xs sm:text-sm ${
                        msg.sender === 'user'
                          ? 'bg-sky-600 text-white rounded-br-none'
                          : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-bl-none shadow-xs'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>
              
              <form onSubmit={handleSendChat} className="flex gap-2">
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Test AI Chatbot by typing a question (e.g. Check revenue or inventory)..."
                  className="flex-1 px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-sky-600 hover:bg-sky-700 text-white rounded-xl font-bold text-xs flex items-center gap-1 shadow-md"
                >
                  <Send className="w-4 h-4" />
                  Send
                </button>
              </form>
            </div>
          )}

          {/* Inventory Management Interactive Demo */}
          {previewType === 'inventory' && (
            <div className="space-y-4">
              <div className="p-4 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl flex items-center justify-between">
                <div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-semibold">Live Stock Control Simulator</div>
                  <div className="text-xl font-black text-slate-900 dark:text-white">SKU-9021: Industrial Microcontrollers</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-black text-sky-600 dark:text-sky-400">{inventoryQty} Units</div>
                  <span className="text-xs text-emerald-600 font-semibold">Status: Optimal Stock</span>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setInventoryQty((prev) => prev + 100)}
                  className="flex-1 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-1"
                >
                  + Simulate Inbound Shipment (+100)
                </button>
                <button
                  onClick={() => setInventoryQty((prev) => Math.max(0, prev - 150))}
                  className="flex-1 py-3 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-1"
                >
                  - Simulate Order Dispatch (-150)
                </button>
              </div>
            </div>
          )}

          {/* Default Preview fallback for other items */}
          {previewType !== 'erp' && previewType !== 'mis' && previewType !== 'chatbot' && previewType !== 'predictive' && previewType !== 'inventory' && (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-sky-100 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 flex items-center justify-center mx-auto">
                <Cpu className="w-8 h-8" />
              </div>
              <div>
                <h4 className="font-bold text-base text-slate-900 dark:text-white">Custom SRI REAL TIME Architecture Ready</h4>
                <p className="text-xs text-slate-500 max-w-md mx-auto mt-1">
                  Our engineering team tailors every system module with high security, microservice APIs, and automated telemetry.
                </p>
              </div>
              <div className="pt-2">
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 bg-sky-600 text-white font-bold rounded-xl text-xs shadow-md"
                >
                  Return to Overview
                </button>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-100 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
          <span className="flex items-center gap-1.5 font-medium text-emerald-600 dark:text-emerald-400">
            <CheckCircle2 className="w-4 h-4" /> SRI REAL TIME Certified Design Pattern
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg font-semibold hover:bg-slate-300 dark:hover:bg-slate-700 transition"
          >
            Close Preview
          </button>
        </div>

      </div>
    </div>
  );
};
