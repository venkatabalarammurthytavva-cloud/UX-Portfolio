import React from 'react';
import { CaseStudy } from '../types';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  onSelect: (cs: CaseStudy) => void;
}

export const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ caseStudy, onSelect }) => {
  return (
    <div 
      onClick={() => onSelect(caseStudy)}
      className="bento-card group relative w-full rounded-xl overflow-hidden flex flex-col justify-between p-8 md:p-12 min-h-[580px] cursor-pointer bg-cover bg-center border border-[#27272A] transition-all duration-300 hover:border-white/40"
      style={{ backgroundImage: `url("${caseStudy.bgImage}")` }}
    >
      {/* Dark Blur Overlay */}
      <div className="absolute inset-0 bg-black/50 group-hover:bg-black/35 transition-colors duration-300"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#0D0D0E] opacity-95 pointer-events-none z-0"></div>

      {/* Top Header Tag */}
      <div className="relative z-10 flex items-center gap-3">
        {caseStudy.logoUrl ? (
          <img 
            src={caseStudy.logoUrl} 
            alt={caseStudy.title} 
            className="h-6 w-auto brightness-200"
          />
        ) : caseStudy.icon ? (
          <span className="material-symbols-outlined text-white text-xl">{caseStudy.icon}</span>
        ) : (
          <span className="material-symbols-outlined text-white text-xl">dataset</span>
        )}
        <span className="font-label-caps text-xs uppercase tracking-widest text-white/90 font-medium">
          {caseStudy.title}
        </span>
      </div>

      {/* Title & Subtitle */}
      <div className="relative z-10 mt-auto pt-24">
        <h3 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tighter mb-2 group-hover:text-emerald-300 transition-colors">
          {caseStudy.title}
        </h3>
        <p className="font-body-md text-lg md:text-xl text-[#c5c6ca] max-w-xl">
          {caseStudy.subtitle}
        </p>
      </div>

      {/* Bottom Actions & Tags */}
      <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mt-8 pt-4 border-t border-white/10">
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-label-caps text-[11px] uppercase tracking-widest text-[#c5c6ca]">
            Team: {caseStudy.team}
          </span>
          <span className="px-3 py-1 bg-white/10 rounded-full border border-white/15 font-label-caps text-[10px] uppercase tracking-widest text-white">
            {caseStudy.category}
          </span>
        </div>

        <button 
          onClick={(e) => {
            e.stopPropagation();
            onSelect(caseStudy);
          }}
          className="flex items-center gap-2 px-6 py-3 border border-white/20 rounded-full bg-white/5 backdrop-blur-md hover:bg-white/15 group-hover:border-emerald-400/50 transition-all text-xs font-label-caps uppercase tracking-widest text-white shadow-lg"
        >
          <span className="material-symbols-outlined text-sm text-emerald-400">
            {caseStudy.isLocked ? 'lock' : 'visibility'}
          </span>
          <span>View case study</span>
        </button>
      </div>
    </div>
  );
};
