import React, { useState } from 'react';
import { DESIGN_TOKENS } from '../data/portfolioData';

export const DesignSystemExplorer: React.FC = () => {
  const [copiedToken, setCopiedToken] = useState<string | null>(null);
  const [buttonState, setButtonState] = useState<'default' | 'hover' | 'active'>('default');
  const [bentoTitle, setBentoTitle] = useState('Architect Loan Engine');
  const [bentoCategory, setBentoCategory] = useState('FinTech');
  const [bentoStatus, setBentoStatus] = useState<'success' | 'warning' | 'error'>('success');
  const [customSampleText, setCustomSampleText] = useState('High-Density Systems & FinTech Interfaces');

  const copyToken = (val: string) => {
    navigator.clipboard.writeText(val);
    setCopiedToken(val);
    setTimeout(() => setCopiedToken(null), 2000);
  };

  const exportTokensJson = () => {
    const jsonStr = JSON.stringify(DESIGN_TOKENS, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'architect-design-tokens.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-[1280px] mx-auto px-6 py-12 space-y-12 animate-fadeIn">
      {/* Title Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-[#27272A] pb-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-label-caps text-xs uppercase tracking-widest text-emerald-400">
              Architect Design System v2.4
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Design System & Tokens Explorer
          </h2>
          <p className="font-body-md text-base text-[#c5c6ca] max-w-2xl mt-2">
            Explore the atomic tokens, components, and layout specs driving Balaram's enterprise FinTech applications.
          </p>
        </div>

        <button
          onClick={exportTokensJson}
          className="flex items-center gap-2 px-6 py-3 bg-white text-black font-label-caps text-xs uppercase tracking-widest font-bold rounded-xl hover:bg-emerald-400 transition-all shadow-lg"
        >
          <span className="material-symbols-outlined text-base">download</span>
          Export Tokens (.JSON)
        </button>
      </div>

      {/* 1. Design Tokens Grid */}
      <div className="space-y-6">
        <h3 className="font-label-caps text-sm uppercase tracking-widest text-[#c5c6ca] flex items-center gap-2">
          <span className="material-symbols-outlined text-emerald-400 text-base">palette</span>
          01 / Atomic Design Tokens
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {DESIGN_TOKENS.map((token, idx) => (
            <div
              key={idx}
              onClick={() => copyToken(token.value)}
              className="bg-[#1A1A1C] border border-[#27272A] p-5 rounded-xl hover:border-emerald-400/50 transition-all cursor-pointer group flex flex-col justify-between h-36"
            >
              <div className="flex justify-between items-start">
                <div>
                  <span className="font-label-caps text-[10px] uppercase tracking-wider text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10">
                    {token.category}
                  </span>
                  <h4 className="font-display text-base font-semibold text-white mt-2 group-hover:text-emerald-300 transition-colors">
                    {token.name}
                  </h4>
                </div>

                {token.category === 'color' && (
                  <div
                    className="w-7 h-7 rounded-lg border border-white/20 shadow-inner"
                    style={{ backgroundColor: token.value }}
                  />
                )}
              </div>

              <div className="flex justify-between items-end pt-3 border-t border-[#27272A]">
                <code className="font-label-caps text-xs text-[#c5c6ca]">{token.value}</code>
                <span className="font-label-caps text-[10px] text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  {copiedToken === token.value ? 'Copied!' : 'Click to Copy'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Interactive Typography Scale Tester */}
      <div className="bg-[#1A1A1C] border border-[#27272A] p-8 rounded-2xl space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-[#27272A] pb-4">
          <h3 className="font-label-caps text-sm uppercase tracking-widest text-[#c5c6ca] flex items-center gap-2">
            <span className="material-symbols-outlined text-blue-400 text-base">text_fields</span>
            02 / Typography Hierarchy & Scale
          </h3>

          <input
            type="text"
            value={customSampleText}
            onChange={(e) => setCustomSampleText(e.target.value)}
            placeholder="Type sample text..."
            className="px-4 py-2 bg-[#0D0D0E] border border-[#27272A] rounded-lg text-xs font-label-caps text-white w-full sm:w-72 focus:outline-none focus:border-blue-400"
          />
        </div>

        <div className="space-y-6 font-display">
          <div>
            <span className="font-label-caps text-[10px] text-gray-500 uppercase block mb-1">
              Display Title (Inter 64px / Bold)
            </span>
            <div className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
              {customSampleText}
            </div>
          </div>

          <div>
            <span className="font-label-caps text-[10px] text-gray-500 uppercase block mb-1">
              Headline Large (Inter 32px / SemiBold)
            </span>
            <div className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
              {customSampleText}
            </div>
          </div>

          <div>
            <span className="font-label-caps text-[10px] text-gray-500 uppercase block mb-1">
              Technical Labels (JetBrains Mono 12px / Medium)
            </span>
            <div className="font-label-caps text-xs text-emerald-400 tracking-widest uppercase">
              {customSampleText}
            </div>
          </div>
        </div>
      </div>

      {/* 3. Interactive Component Playground */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Buttons & Status Chips */}
        <div className="bg-[#1A1A1C] border border-[#27272A] p-8 rounded-2xl space-y-6">
          <h3 className="font-label-caps text-sm uppercase tracking-widest text-[#c5c6ca] flex items-center gap-2">
            <span className="material-symbols-outlined text-emerald-400 text-base">smart_button</span>
            03 / Button & Status Tokens
          </h3>

          {/* Buttons State Controls */}
          <div className="space-y-4">
            <div className="text-xs font-label-caps text-gray-400 uppercase">Interactive Primary Button</div>
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-white text-black font-label-caps text-xs uppercase tracking-widest font-bold rounded hover:bg-emerald-400 transition-all">
                Primary Button
              </button>
              <button className="px-6 py-3 border border-white/20 bg-white/5 text-white font-label-caps text-xs uppercase tracking-widest font-medium rounded hover:bg-white/15 transition-all">
                Secondary Ghost
              </button>
              <button className="px-6 py-3 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-label-caps text-xs uppercase tracking-widest font-medium rounded flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">check_circle</span>
                System Action
              </button>
            </div>
          </div>

          {/* Status Chips */}
          <div className="space-y-3 pt-4 border-t border-[#27272A]">
            <div className="text-xs font-label-caps text-gray-400 uppercase">Status Chips</div>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-full font-label-caps text-[11px] uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Approved
              </span>
              <span className="px-3 py-1 bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 rounded-full font-label-caps text-[11px] uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400"></span> In Review
              </span>
              <span className="px-3 py-1 bg-red-500/10 border border-red-500/30 text-red-400 rounded-full font-label-caps text-[11px] uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span> Rejected
              </span>
            </div>
          </div>
        </div>

        {/* Dynamic Bento Box Playground */}
        <div className="bg-[#1A1A1C] border border-[#27272A] p-8 rounded-2xl space-y-6">
          <h3 className="font-label-caps text-sm uppercase tracking-widest text-[#c5c6ca] flex items-center gap-2">
            <span className="material-symbols-outlined text-purple-400 text-base">dashboard_customize</span>
            04 / Dynamic Bento Card Configurator
          </h3>

          {/* Config Controls */}
          <div className="grid grid-cols-2 gap-3 text-xs font-label-caps">
            <div>
              <label className="text-gray-400 block mb-1">Card Title</label>
              <input
                type="text"
                value={bentoTitle}
                onChange={(e) => setBentoTitle(e.target.value)}
                className="w-full px-3 py-2 bg-[#0D0D0E] border border-[#27272A] rounded text-white focus:outline-none focus:border-emerald-400"
              />
            </div>
            <div>
              <label className="text-gray-400 block mb-1">Category Tag</label>
              <input
                type="text"
                value={bentoCategory}
                onChange={(e) => setBentoCategory(e.target.value)}
                className="w-full px-3 py-2 bg-[#0D0D0E] border border-[#27272A] rounded text-white focus:outline-none focus:border-emerald-400"
              />
            </div>
          </div>

          {/* Live Bento Result */}
          <div className="bento-card p-6 rounded-xl border border-[#27272A] bg-[#141313] space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-label-caps text-[10px] text-emerald-400 uppercase tracking-widest">
                {bentoCategory}
              </span>
              <span className="material-symbols-outlined text-white text-lg">auto_awesome</span>
            </div>
            <h4 className="font-display text-2xl font-bold text-white">{bentoTitle}</h4>
            <p className="text-xs text-[#c5c6ca]">
              Live configured Bento box module built with Architect Enterprise design tokens.
            </p>
          </div>
        </div>
      </div>

      {/* 4. High Density FinTech Data Table */}
      <div className="bg-[#1A1A1C] border border-[#27272A] p-8 rounded-2xl space-y-6">
        <h3 className="font-label-caps text-sm uppercase tracking-widest text-[#c5c6ca] flex items-center gap-2">
          <span className="material-symbols-outlined text-emerald-400 text-base">table_chart</span>
          05 / Enterprise Data Table Spec
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-left font-body-md border-collapse">
            <thead>
              <tr className="border-b border-[#27272A] font-label-caps text-[11px] text-[#c5c6ca] uppercase">
                <th className="py-3 px-4">Transaction ID</th>
                <th className="py-3 px-4">Borrower Entity</th>
                <th className="py-3 px-4">Capital Amount</th>
                <th className="py-3 px-4">Risk Rating</th>
                <th className="py-3 px-4">Approval Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#27272A] text-sm text-white">
              <tr className="hover:bg-white/5 transition-colors">
                <td className="py-3.5 px-4 font-label-caps text-emerald-400 text-xs">TX-98402-US</td>
                <td className="py-3.5 px-4 font-semibold">Quantum Capital Holdings</td>
                <td className="py-3.5 px-4 font-label-caps">$14,250,000</td>
                <td className="py-3.5 px-4"><span className="text-emerald-400 font-bold">AAA</span></td>
                <td className="py-3.5 px-4">
                  <span className="px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-xs font-label-caps">Approved</span>
                </td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors">
                <td className="py-3.5 px-4 font-label-caps text-emerald-400 text-xs">TX-88210-EU</td>
                <td className="py-3.5 px-4 font-semibold">Apex Debt Partners</td>
                <td className="py-3.5 px-4 font-label-caps">$8,900,000</td>
                <td className="py-3.5 px-4"><span className="text-yellow-400 font-bold">AA+</span></td>
                <td className="py-3.5 px-4">
                  <span className="px-2.5 py-0.5 rounded bg-yellow-500/10 text-yellow-400 text-xs font-label-caps">Under Review</span>
                </td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors">
                <td className="py-3.5 px-4 font-label-caps text-emerald-400 text-xs">TX-77341-APAC</td>
                <td className="py-3.5 px-4 font-semibold">Nexon Global Ventures</td>
                <td className="py-3.5 px-4 font-label-caps">$24,500,000</td>
                <td className="py-3.5 px-4"><span className="text-emerald-400 font-bold">AAA</span></td>
                <td className="py-3.5 px-4">
                  <span className="px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-xs font-label-caps">Approved</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
