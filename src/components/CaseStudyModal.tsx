import React, { useState, useEffect, useRef } from 'react';
import { CaseStudy } from '../types';
import { BankOfBarodaLogo, AxisAMCLogo } from './BrandLogos';

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
  onOpenContact: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  caseStudy,
  onClose,
  onOpenContact,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'impact'>('overview');
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!caseStudy) return;

    // Focus close button on modal open
    closeButtonRef.current?.focus();

    // ESC key listener (WCAG 2.1.2)
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [caseStudy, onClose]);

  if (!caseStudy) return null;

  return (
    <div 
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-case-study-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-xl overflow-y-auto animate-fadeIn"
    >
      <div className="relative w-full max-w-5xl bg-[#141313] border border-[#27272A] rounded-2xl overflow-hidden shadow-2xl my-8 text-[#e5e2e1]">
        {/* Modal Top Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-[#27272A] bg-[#1A1A1C]">
          <div className="flex items-center gap-3">
            <span className="font-label-caps text-xs text-emerald-400 uppercase tracking-widest px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/20">
              {caseStudy.category}
            </span>
            <span className="font-label-caps text-xs text-[#c5c6ca] uppercase tracking-wider">
              {caseStudy.team}
            </span>
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close case study details"
            className="p-2 rounded-full hover:bg-white/10 text-zinc-300 hover:text-white transition-colors focus:ring-2 focus:ring-emerald-400"
          >
            <span className="material-symbols-outlined text-xl" aria-hidden="true">close</span>
          </button>
        </div>

        {/* Hero Section of Case Study */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url("${caseStudy.bgImage}")` }}>
          <div className="absolute inset-0 bg-gradient-to-t from-[#141313] via-[#141313]/60 to-transparent pointer-events-none" aria-hidden="true"></div>
          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex items-center gap-3.5 mb-2">
              {caseStudy.id === 'bank-of-baroda-ux-audit' && (
                <BankOfBarodaLogo className="h-9 sm:h-11 w-auto" />
              )}
              {caseStudy.id === 'axis-amc-wealth' && (
                <AxisAMCLogo className="h-9 sm:h-11 w-auto" />
              )}
              <h2 id="modal-case-study-title" className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
                {caseStudy.title}
              </h2>
            </div>
            <p className="font-body-md text-base sm:text-xl text-zinc-200 max-w-2xl">
              {caseStudy.subtitle}
            </p>
          </div>
        </div>

        {/* Unlocked Full Case Study Content */}
        <div className="p-6 sm:p-10 space-y-8">
          {/* Nav Tabs */}
          <div role="tablist" aria-label="Case study sections" className="flex border-b border-[#27272A] gap-8 font-label-caps text-xs uppercase tracking-widest text-[#c5c6ca]">
            <button
              id="tab-overview"
              role="tab"
              type="button"
              aria-selected={activeTab === 'overview'}
              aria-controls="tabpanel-overview"
              onClick={() => setActiveTab('overview')}
              className={`pb-3 ${activeTab === 'overview' ? 'text-white border-b-2 border-emerald-400 font-bold' : 'hover:text-white'}`}
            >
              01 / Overview & Solution
            </button>
            <button
              id="tab-impact"
              role="tab"
              type="button"
              aria-selected={activeTab === 'impact'}
              aria-controls="tabpanel-impact"
              onClick={() => setActiveTab('impact')}
              className={`pb-3 ${activeTab === 'impact' ? 'text-white border-b-2 border-emerald-400 font-bold' : 'hover:text-white'}`}
            >
              02 / Key Metrics & Impact
            </button>
            <button
              id="tab-architecture"
              role="tab"
              type="button"
              aria-selected={activeTab === 'architecture'}
              aria-controls="tabpanel-architecture"
              onClick={() => setActiveTab('architecture')}
              className={`pb-3 ${activeTab === 'architecture' ? 'text-white border-b-2 border-emerald-400 font-bold' : 'hover:text-white'}`}
            >
              03 / System Architecture
            </button>
          </div>

          {/* Tab 1: Overview */}
          {activeTab === 'overview' && (
            <div id="tabpanel-overview" role="tabpanel" aria-labelledby="tab-overview" className="space-y-8 animate-fadeIn">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 space-y-6">
                  <div>
                    <h3 className="font-label-caps text-xs text-emerald-400 uppercase tracking-widest mb-2">Project Overview</h3>
                    <p className="text-base text-[#e5e2e1] leading-relaxed">{caseStudy.overview}</p>
                  </div>

                  <div>
                    <h3 className="font-label-caps text-xs text-red-400 uppercase tracking-widest mb-2">The Core Challenge</h3>
                    <p className="text-base text-zinc-200 leading-relaxed">{caseStudy.challenge}</p>
                  </div>

                  <div>
                    <h3 className="font-label-caps text-xs text-blue-400 uppercase tracking-widest mb-2">Architectural Solution</h3>
                    <p className="text-base text-[#e5e2e1] leading-relaxed">{caseStudy.solution}</p>
                  </div>
                </div>

                {/* Sidebar Info */}
                <div className="bg-[#1A1A1C] border border-[#27272A] p-6 rounded-xl space-y-6 h-fit">
                  <div>
                    <span className="font-label-caps text-[10px] text-zinc-300 uppercase tracking-wider block mb-1">Tags & Domain</span>
                    <div className="flex flex-wrap gap-1.5">
                      {caseStudy.tags.map((tag, idx) => (
                        <span key={idx} className="px-2.5 py-1 bg-[#27272A] rounded text-xs text-white font-label-caps">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {caseStudy.architecture && (
                    <div>
                      <span className="font-label-caps text-[10px] text-zinc-300 uppercase tracking-wider block mb-2">Tech Stack</span>
                      <div className="flex flex-wrap gap-1.5">
                        {caseStudy.architecture.frameworks.map((fw, idx) => (
                          <span key={idx} className="px-2 py-0.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded text-xs font-label-caps">
                            {fw}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={onOpenContact}
                    className="w-full py-3 bg-emerald-500 text-black font-label-caps text-xs uppercase tracking-widest font-bold rounded-xl hover:bg-emerald-400 transition-all flex items-center justify-center gap-2"
                  >
                    <span className="material-symbols-outlined text-sm" aria-hidden="true">calendar_month</span>
                    Book Strategy Call
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Metrics */}
          {activeTab === 'impact' && (
            <div id="tabpanel-impact" role="tabpanel" aria-labelledby="tab-impact" className="space-y-8 animate-fadeIn">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {caseStudy.metrics.map((metric, idx) => (
                  <div key={idx} className="bg-[#1A1A1C] border border-[#27272A] p-6 rounded-xl text-center">
                    <div className="font-display text-3xl sm:text-4xl font-bold text-emerald-400 mb-2">
                      {metric.value}
                    </div>
                    <div className="font-label-caps text-xs text-zinc-300 uppercase tracking-wider">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-[#1A1A1C] border border-[#27272A] p-6 rounded-xl">
                <h3 className="font-label-caps text-xs text-emerald-400 uppercase tracking-widest mb-4">Measured Business Outcomes</h3>
                <ul className="space-y-3">
                  {caseStudy.impact.map((imp, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-base text-[#e5e2e1]">
                      <span className="material-symbols-outlined text-emerald-400 text-lg mt-0.5" aria-hidden="true">check_circle</span>
                      <span>{imp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Tab 3: Architecture */}
          {activeTab === 'architecture' && (
            <div id="tabpanel-architecture" role="tabpanel" aria-labelledby="tab-architecture" className="space-y-8 animate-fadeIn">
              {caseStudy.architecture ? (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="bg-[#1A1A1C] border border-[#27272A] p-6 rounded-xl text-center">
                    <div className="font-display text-4xl font-bold text-white mb-1">
                      {caseStudy.architecture.componentsCount}
                    </div>
                    <div className="font-label-caps text-xs text-zinc-300 uppercase">Figma Components</div>
                  </div>

                  <div className="bg-[#1A1A1C] border border-[#27272A] p-6 rounded-xl text-center">
                    <div className="font-display text-4xl font-bold text-emerald-400 mb-1">
                      {caseStudy.architecture.tokensCount}
                    </div>
                    <div className="font-label-caps text-xs text-zinc-300 uppercase">Design Tokens</div>
                  </div>

                  <div className="bg-[#1A1A1C] border border-[#27272A] p-6 rounded-xl text-center">
                    <div className="font-display text-4xl font-bold text-blue-400 mb-1">
                      {caseStudy.architecture.figmaVariants}
                    </div>
                    <div className="font-label-caps text-xs text-zinc-300 uppercase">Component Variants</div>
                  </div>
                </div>
              ) : null}

              <div className="bg-[#1A1A1C] border border-[#27272A] p-6 rounded-xl space-y-4">
                <h3 className="font-label-caps text-xs text-white uppercase tracking-widest">System Diagram & Token Pipeline</h3>
                <p className="text-sm text-zinc-300">
                  Single source of truth architecture synchronized from Figma variables down to React component libraries with automated CI/CD style dictionary transformations.
                </p>

                <div className="p-4 bg-[#0D0D0E] rounded-lg border border-[#27272A] font-label-caps text-xs text-emerald-400 space-y-1">
                  <div>Figma Variables (Brand Tokens) ➔ Token Transformer ➔ Style Dictionary ➔ Tailwind CSS & React Tokens</div>
                  <div className="text-zinc-400">Status: Automated Sync Pipeline Active (100% WCAG AAA Compliant)</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
