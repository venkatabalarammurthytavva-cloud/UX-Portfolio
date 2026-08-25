import React from 'react';
import { CaseStudy } from '../types';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  onSelect: (cs: CaseStudy) => void;
}

export const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ caseStudy, onSelect }) => {
  return (
    <article 
      aria-labelledby={`card-title-${caseStudy.id}`}
      className="bento-card group relative w-full rounded-xl overflow-hidden flex flex-col justify-between p-8 md:p-12 min-h-[580px] bg-cover bg-center border border-[#27272A] transition-all duration-300 hover:border-white/40"
      style={{ backgroundImage: `url("${caseStudy.bgImage}")` }}
    >
      {/* Dark Blur Overlay */}
      <div className="absolute inset-0 bg-black/55 group-hover:bg-black/40 transition-colors duration-300 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#0D0D0E] opacity-95 pointer-events-none z-0" aria-hidden="true"></div>

      {/* Top Header Tag */}
      <div className="relative z-10 flex items-center gap-3">
        {caseStudy.logoUrl ? (
          <img 
            src={caseStudy.logoUrl} 
            alt={`${caseStudy.title} logo`} 
            className="h-6 w-auto brightness-200"
          />
        ) : caseStudy.icon ? (
          <span className="material-symbols-outlined text-white text-xl" aria-hidden="true">{caseStudy.icon}</span>
        ) : (
          <span className="material-symbols-outlined text-white text-xl" aria-hidden="true">dataset</span>
        )}
        <span className="font-label-caps text-xs uppercase tracking-widest text-white/90 font-medium">
          {caseStudy.title}
        </span>
      </div>

      {/* Title & Subtitle */}
      <div className="relative z-10 mt-auto pt-24">
        <h3 id={`card-title-${caseStudy.id}`} className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tighter mb-2 group-hover:text-emerald-300 transition-colors">
          {caseStudy.title}
        </h3>
        <p className="font-body-md text-lg md:text-xl text-zinc-200 max-w-xl">
          {caseStudy.subtitle}
        </p>
      </div>

      {/* Bottom Actions & Tags - Aligned to Left */}
      <div className="relative z-10 flex flex-col sm:flex-row justify-start items-start sm:items-center gap-4 sm:gap-6 mt-8 pt-4 border-t border-white/15">
        <button 
          type="button"
          onClick={() => onSelect(caseStudy)}
          aria-haspopup="dialog"
          aria-label={`View case study: ${caseStudy.title} — ${caseStudy.subtitle}`}
          className="flex items-center gap-2 px-6 py-3 border border-white/20 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 group-hover:border-emerald-400/50 transition-all text-xs font-label-caps uppercase tracking-widest text-white shadow-lg focus:ring-2 focus:ring-emerald-400"
        >
          <span className="material-symbols-outlined text-sm text-emerald-400" aria-hidden="true">
            visibility
          </span>
          <span>View case study</span>
        </button>

        <div className="flex flex-wrap items-center gap-3">
          <span className="font-label-caps text-[11px] uppercase tracking-widest text-zinc-300">
            Team: {caseStudy.team}
          </span>
          <span className="px-3 py-1 bg-white/10 rounded-full border border-white/20 font-label-caps text-[10px] uppercase tracking-widest text-white">
            {caseStudy.category}
          </span>
        </div>
      </div>
    </article>
  );
};
