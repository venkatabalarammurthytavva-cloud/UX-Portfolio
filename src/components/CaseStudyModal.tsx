import React, { useState } from 'react';
import { CaseStudy } from '../types';

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
  if (!caseStudy) return null;

  const [isUnlocked, setIsUnlocked] = useState(!caseStudy.isLocked);
  const [passcode, setPasscode] = useState('');
  const [passcodeError, setPasscodeError] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'impact'>('overview');

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode.trim().toUpperCase() === 'BALARAM' || passcode.trim() === '1234' || passcode.trim().length > 0) {
      setIsUnlocked(true);
      setPasscodeError(false);
    } else {
      setPasscodeError(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-xl overflow-y-auto animate-fadeIn">
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
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-[#c5c6ca] hover:text-white transition-colors"
            title="Close modal"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        {/* Hero Section of Case Study */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url("${caseStudy.bgImage}")` }}>
          <div className="absolute inset-0 bg-gradient-to-t from-[#141313] via-[#141313]/60 to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6">
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight mb-2">
              {caseStudy.title}
            </h2>
            <p className="font-body-md text-base sm:text-xl text-[#c5c6ca] max-w-2xl">
              {caseStudy.subtitle}
            </p>
          </div>
        </div>

        {/* If Locked, show Passcode/Access Request */}
        {!isUnlocked ? (
          <div className="p-8 sm:p-12 flex flex-col items-center text-center max-w-md mx-auto">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6">
              <span className="material-symbols-outlined text-3xl">lock</span>
            </div>
            <h3 className="font-display text-2xl font-bold text-white mb-2">Protected Case Study</h3>
            <p className="text-sm text-[#c5c6ca] mb-6">
              This NDA case study contains sensitive financial workflow diagrams and system architecture. Enter access key or request instant access below.
            </p>

            <form onSubmit={handleUnlock} className="w-full space-y-4 mb-6">
              <div>
                <input
                  type="password"
                  placeholder="Enter passcode (or type 'BALARAM')"
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  className="w-full px-4 py-3 bg-[#1A1A1C] border border-[#27272A] rounded-xl text-white font-label-caps text-sm focus:outline-none focus:border-emerald-400 transition-colors"
                />
                {passcodeError && (
                  <p className="text-xs text-red-400 mt-1">Please enter a passcode to unlock.</p>
                )}
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-white text-black font-label-caps text-xs uppercase tracking-widest font-bold rounded-xl hover:bg-emerald-400 transition-all"
              >
                Unlock Case Study
              </button>
            </form>

            <div className="border-t border-[#27272A] pt-4 w-full flex justify-between items-center text-xs text-[#c5c6ca]">
              <span>Don't have a passcode?</span>
              <button
                onClick={() => setIsUnlocked(true)}
                className="text-emerald-400 hover:underline font-label-caps"
              >
                Instant NDA Preview
              </button>
            </div>
          </div>
        ) : (
          /* Unlocked Full Case Study Content */
          <div className="p-6 sm:p-10 space-y-8">
            {/* Nav Tabs */}
            <div className="flex border-b border-[#27272A] gap-8 font-label-caps text-xs uppercase tracking-widest text-[#c5c6ca]">
              <button
                onClick={() => setActiveTab('overview')}
                className={`pb-3 ${activeTab === 'overview' ? 'text-white border-b-2 border-emerald-400 font-bold' : 'hover:text-white'}`}
              >
                01 / Overview & Solution
              </button>
              <button
                onClick={() => setActiveTab('impact')}
                className={`pb-3 ${activeTab === 'impact' ? 'text-white border-b-2 border-emerald-400 font-bold' : 'hover:text-white'}`}
              >
                02 / Key Metrics & Impact
              </button>
              <button
                onClick={() => setActiveTab('architecture')}
                className={`pb-3 ${activeTab === 'architecture' ? 'text-white border-b-2 border-emerald-400 font-bold' : 'hover:text-white'}`}
              >
                03 / System Architecture
              </button>
            </div>

            {/* Tab 1: Overview */}
            {activeTab === 'overview' && (
              <div className="space-y-8 animate-fadeIn">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-2 space-y-6">
                    <div>
                      <h4 className="font-label-caps text-xs text-emerald-400 uppercase tracking-widest mb-2">Project Overview</h4>
                      <p className="text-base text-[#e5e2e1] leading-relaxed">{caseStudy.overview}</p>
                    </div>

                    <div>
                      <h4 className="font-label-caps text-xs text-red-400 uppercase tracking-widest mb-2">The Core Challenge</h4>
                      <p className="text-base text-[#c5c6ca] leading-relaxed">{caseStudy.challenge}</p>
                    </div>

                    <div>
                      <h4 className="font-label-caps text-xs text-blue-400 uppercase tracking-widest mb-2">Architectural Solution</h4>
                      <p className="text-base text-[#e5e2e1] leading-relaxed">{caseStudy.solution}</p>
                    </div>
                  </div>

                  {/* Sidebar Info */}
                  <div className="bg-[#1A1A1C] border border-[#27272A] p-6 rounded-xl space-y-6 h-fit">
                    <div>
                      <span className="font-label-caps text-[10px] text-[#c5c6ca] uppercase tracking-wider block mb-1">Tags & Domain</span>
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
                        <span className="font-label-caps text-[10px] text-[#c5c6ca] uppercase tracking-wider block mb-2">Tech Stack</span>
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
                      onClick={onOpenContact}
                      className="w-full py-3 bg-emerald-500 text-black font-label-caps text-xs uppercase tracking-widest font-bold rounded-xl hover:bg-emerald-400 transition-all flex items-center justify-center gap-2"
                    >
                      <span className="material-symbols-outlined text-sm">calendar_month</span>
                      Book Strategy Call
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2: Metrics */}
            {activeTab === 'impact' && (
              <div className="space-y-8 animate-fadeIn">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {caseStudy.metrics.map((metric, idx) => (
                    <div key={idx} className="bg-[#1A1A1C] border border-[#27272A] p-6 rounded-xl text-center">
                      <div className="font-display text-3xl sm:text-4xl font-bold text-emerald-400 mb-2">
                        {metric.value}
                      </div>
                      <div className="font-label-caps text-xs text-[#c5c6ca] uppercase tracking-wider">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-[#1A1A1C] border border-[#27272A] p-6 rounded-xl">
                  <h4 className="font-label-caps text-xs text-emerald-400 uppercase tracking-widest mb-4">Measured Business Outcomes</h4>
                  <ul className="space-y-3">
                    {caseStudy.impact.map((imp, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-base text-[#e5e2e1]">
                        <span className="material-symbols-outlined text-emerald-400 text-lg mt-0.5">check_circle</span>
                        <span>{imp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Tab 3: Architecture */}
            {activeTab === 'architecture' && (
              <div className="space-y-8 animate-fadeIn">
                {caseStudy.architecture ? (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="bg-[#1A1A1C] border border-[#27272A] p-6 rounded-xl text-center">
                      <div className="font-display text-4xl font-bold text-white mb-1">
                        {caseStudy.architecture.componentsCount}
                      </div>
                      <div className="font-label-caps text-xs text-[#c5c6ca] uppercase">Figma Components</div>
                    </div>

                    <div className="bg-[#1A1A1C] border border-[#27272A] p-6 rounded-xl text-center">
                      <div className="font-display text-4xl font-bold text-emerald-400 mb-1">
                        {caseStudy.architecture.tokensCount}
                      </div>
                      <div className="font-label-caps text-xs text-[#c5c6ca] uppercase">Design Tokens</div>
                    </div>

                    <div className="bg-[#1A1A1C] border border-[#27272A] p-6 rounded-xl text-center">
                      <div className="font-display text-4xl font-bold text-blue-400 mb-1">
                        {caseStudy.architecture.figmaVariants}
                      </div>
                      <div className="font-label-caps text-xs text-[#c5c6ca] uppercase">Component Variants</div>
                    </div>
                  </div>
                ) : null}

                <div className="bg-[#1A1A1C] border border-[#27272A] p-6 rounded-xl space-y-4">
                  <h4 className="font-label-caps text-xs text-white uppercase tracking-widest">System Diagram & Token Pipeline</h4>
                  <p className="text-sm text-[#c5c6ca]">
                    Single source of truth architecture synchronized from Figma variables down to React component libraries with automated CI/CD style dictionary transformations.
                  </p>

                  <div className="p-4 bg-[#0D0D0E] rounded-lg border border-[#27272A] font-label-caps text-xs text-emerald-400 space-y-1">
                    <div>Figma Variables (Brand Tokens) ➔ Token Transformer ➔ Style Dictionary ➔ Tailwind CSS & React Tokens</div>
                    <div className="text-gray-500">Status: Automated Sync Pipeline Active (100% WCAG AAA Compliant)</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
