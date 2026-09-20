import React, { useState, useEffect, useRef } from 'react';
import { CASE_STUDIES } from '../data/portfolioData';
import { CaseStudy } from '../types';
import { 
  BankOfBarodaLogo, 
  AxisAMCLogo, 
  TEDLogo, 
  FinovationLogo, 
  CrimeAnalyticsLogo 
} from './BrandLogos';

interface FeaturedWorkProps {
  onSelectCaseStudy: (caseStudy: CaseStudy) => void;
}

interface ProjectTheme {
  bgBase: string;
  ambientPrimary: string;
  ambientSecondary: string;
  accentColor: string;
  tagline: string;
  accentBadgeBg: string;
  badgeTextColor: string;
}

const PROJECT_THEMES: Record<string, ProjectTheme> = {
  'ted-ai-platform': {
    // Rich Deep Forest Emerald (Vivid & atmospheric, matching Finovation intensity)
    bgBase: '#051c14',
    ambientPrimary: 'rgba(16, 185, 129, 0.48)',
    ambientSecondary: 'rgba(52, 211, 153, 0.25)',
    accentColor: '#34d399',
    tagline: 'Value Stream AI',
    accentBadgeBg: 'rgba(16, 185, 129, 0.20)',
    badgeTextColor: '#6ee7b7'
  },
  'bank-of-baroda-ux-audit': {
    // Luminous Sunset Amber & Terracotta (Rich warmth and depth matching Finovation)
    bgBase: '#220e05',
    ambientPrimary: 'rgba(249, 115, 22, 0.52)',
    ambientSecondary: 'rgba(251, 146, 60, 0.26)',
    accentColor: '#fb923c',
    tagline: 'Banking Experience Audit',
    accentBadgeBg: 'rgba(249, 115, 22, 0.20)',
    badgeTextColor: '#fdba74'
  },
  'axis-amc-wealth': {
    // Luminous Royal Wine & Ruby Rose (Deep vibrant radiance matching Finovation)
    bgBase: '#1f0616',
    ambientPrimary: 'rgba(244, 63, 94, 0.52)',
    ambientSecondary: 'rgba(251, 113, 133, 0.26)',
    accentColor: '#fb7185',
    tagline: 'Wealth Management Tech',
    accentBadgeBg: 'rgba(244, 63, 94, 0.20)',
    badgeTextColor: '#fda4af'
  },
  'finovation-platform': {
    // Royal Sapphire & Cobalt Reference Benchmark
    bgBase: '#051329',
    ambientPrimary: 'rgba(59, 130, 246, 0.48)',
    ambientSecondary: 'rgba(96, 165, 250, 0.24)',
    accentColor: '#60a5fa',
    tagline: 'Lending Operations',
    accentBadgeBg: 'rgba(59, 130, 246, 0.20)',
    badgeTextColor: '#93c5fd'
  },
  'crime-analytics-platform': {
    // Luminous Topaz Gold & Warm Amber Reference Benchmark
    bgBase: '#1a1504',
    ambientPrimary: 'rgba(245, 180, 20, 0.50)',
    ambientSecondary: 'rgba(251, 191, 36, 0.25)',
    accentColor: '#facc15',
    tagline: 'Intelligence Analytics',
    accentBadgeBg: 'rgba(234, 179, 8, 0.20)',
    badgeTextColor: '#fde047'
  }
};

const DEFAULT_THEME: ProjectTheme = {
  bgBase: '#0D0D0E',
  ambientPrimary: 'rgba(255, 255, 255, 0.18)',
  ambientSecondary: 'rgba(255, 255, 255, 0.08)',
  accentColor: '#34d399',
  tagline: 'Featured Work',
  accentBadgeBg: 'rgba(255, 255, 255, 0.1)',
  badgeTextColor: '#ffffff'
};

export const FeaturedWork: React.FC<FeaturedWorkProps> = ({ onSelectCaseStudy }) => {
  const [activeProjectId, setActiveProjectId] = useState<string>(CASE_STUDIES[0]?.id || 'ted-ai-platform');
  const projectRefs = useRef<Map<string, HTMLElement>>(new Map());

  // Set up intersection observer & scroll tracking to smoothly transition background
  useEffect(() => {
    const handleScroll = () => {
      // Find the card closest to viewport center
      const viewportCenter = window.innerHeight / 2;
      let closestId = activeProjectId;
      let minDistance = Infinity;

      projectRefs.current.forEach((el, id) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const distance = Math.abs(cardCenter - viewportCenter);

        if (distance < minDistance) {
          minDistance = distance;
          closestId = id;
        }
      });

      if (closestId && closestId !== activeProjectId) {
        setActiveProjectId(closestId);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeProjectId]);

  const activeTheme = PROJECT_THEMES[activeProjectId] || DEFAULT_THEME;

  const getProjectMetadata = (project: CaseStudy) => {
    switch (project.id) {
      case 'ted-ai-platform':
        return {
          company: 'TED Intelligence',
          readTime: '5 min',
          LogoComponent: TEDLogo,
          headline: project.subtitle || project.title,
        };
      case 'bank-of-baroda-ux-audit':
        return {
          company: 'Bank of Baroda',
          readTime: '6 min',
          LogoComponent: BankOfBarodaLogo,
          headline: project.subtitle || 'Making everyday banking easier to navigate',
        };
      case 'axis-amc-wealth':
        return {
          company: 'Axis AMC',
          readTime: '5 min',
          LogoComponent: AxisAMCLogo,
          headline: project.subtitle || 'Wealth Management & Investment Experience',
        };
      case 'finovation-platform':
        return {
          company: 'Finovation',
          readTime: '4 min',
          LogoComponent: FinovationLogo,
          headline: project.subtitle || 'Lending & Business Management Platform',
        };
      case 'crime-analytics-platform':
        return {
          company: 'Crime Analytics',
          readTime: '6 min',
          LogoComponent: CrimeAnalyticsLogo,
          headline: project.subtitle || 'Data-Driven Crime Insights & Analytics Platform',
        };
      default:
        return {
          company: project.team || project.category || 'Product Design',
          readTime: '5 min',
          LogoComponent: TEDLogo,
          headline: project.subtitle || project.title,
        };
    }
  };

  return (
    <section 
      id="featured-work" 
      aria-labelledby="selected-work-heading" 
      className="w-full relative flex flex-col items-center py-10 sm:py-14 md:py-16 transition-colors duration-700 ease-out overflow-hidden"
      style={{ 
        backgroundColor: activeTheme.bgBase
      }}
    >
      {/* Unified Architect Grid Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none grid-bg opacity-70" aria-hidden="true" />

      {/* Structural Vertical Grid Guidelines (Architect Enterprise style matching all views) */}
      <div className="absolute inset-0 pointer-events-none z-0 hidden lg:block" aria-hidden="true">
        <div className="absolute top-0 bottom-0 left-[25%] w-[1px] bg-[#27272A]/40" />
        <div className="absolute top-0 bottom-0 left-[50%] w-[1px] bg-[#27272A]/40" />
        <div className="absolute top-0 bottom-0 left-[75%] w-[1px] bg-[#27272A]/40" />
      </div>

      {/* Section blend masks for seamless transition */}
      <div 
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute top-0 inset-x-0 h-16 sm:h-20 bg-gradient-to-b from-[#0D0D0E] to-transparent pointer-events-none opacity-90" />
        <div className="absolute bottom-0 inset-x-0 h-16 sm:h-20 bg-gradient-to-t from-[#0D0D0E] to-transparent pointer-events-none opacity-90" />
      </div>

      <div className="w-full max-w-4xl px-5 sm:px-8 md:px-12 flex flex-col relative z-10">
        {/* Section Heading: "Selected Work" */}
        <div className="flex items-center justify-between mb-8 sm:mb-10 border-b border-white/10 pb-4">
          <div className="space-y-1">
            <h2 
              id="selected-work-heading" 
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight"
            >
              Selected Work
            </h2>
            <p className="text-xs sm:text-sm text-zinc-300">
              Deep dive into case studies across enterprise AI, FinTech, and systems.
            </p>
          </div>
        </div>

        {/* Project List */}
        <div className="w-full flex flex-col space-y-10 sm:space-y-14 md:space-y-16">
          {CASE_STUDIES.map((project, index) => {
            const { company, readTime, LogoComponent, headline } = getProjectMetadata(project);
            const isCurrentActive = project.id === activeProjectId;
            const projectTheme = PROJECT_THEMES[project.id] || DEFAULT_THEME;

            return (
              <article
                key={project.id}
                ref={(el) => {
                  if (el) projectRefs.current.set(project.id, el);
                  else projectRefs.current.delete(project.id);
                }}
                data-project-id={project.id}
                id={`project-card-${project.id}`}
                aria-labelledby={`project-headline-${project.id}`}
                className="w-full flex flex-col group scroll-mt-20 justify-between transition-all duration-500 relative"
              >
                {/* Dedicated Overhead Card Lighting Source (Identical top-center 50% origin for each card, matching Finovation) */}
                <div 
                  className="absolute -top-12 left-1/2 -translate-x-1/2 w-[92%] sm:w-[88%] h-[300px] rounded-full blur-[95px] pointer-events-none transition-opacity duration-700 -z-10"
                  style={{
                    backgroundImage: `radial-gradient(ellipse at 50% 20%, ${projectTheme.ambientPrimary} 0%, ${projectTheme.ambientSecondary} 45%, transparent 75%)`,
                    opacity: isCurrentActive ? 0.95 : 0.45
                  }}
                  aria-hidden="true"
                />

                {/* 1. Large Rounded Visual Container - flexible height to fit single viewport */}
                <div 
                  className="w-full aspect-[16/10] sm:aspect-[16/9] md:max-h-[520px] rounded-[20px] sm:rounded-[28px] overflow-hidden bg-[#161618] border border-white/10 shadow-2xl relative transition-all duration-500"
                >
                  <img
                    src={project.bgImage}
                    alt={`${project.title} project preview visual`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    loading={index === 0 ? 'eager' : 'lazy'}
                  />
                  {/* Subtle hover gradient sheen */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors pointer-events-none" />
                </div>

                {/* 2. Metadata + Headline + Read Case Study Button Directly Below the Visual */}
                <div className="w-full flex-shrink-0 flex flex-col sm:flex-row sm:items-end justify-between gap-3.5 sm:gap-4 mt-3 sm:mt-4 md:mt-5 px-0 sm:px-1">
                  {/* Left Column: Metadata + Large Bold Headline */}
                  <div className="flex-1 min-w-0">
                    {/* Row 1: Logo + Company Name · Read Time */}
                    <div className="flex items-center gap-2 text-xs sm:text-[13px] md:text-[14px] text-zinc-400 font-normal">
                      <LogoComponent className="w-4 h-4 sm:w-4.5 sm:h-4.5 rounded-full flex-shrink-0" />
                      <span className="font-medium text-zinc-200">{company}</span>
                      <span className="text-zinc-500 font-bold" aria-hidden="true">·</span>
                      <span className="text-zinc-400">{readTime}</span>
                    </div>

                    {/* Row 2: Large Bold Headline */}
                    <h3 
                      id={`project-headline-${project.id}`}
                      className="font-display text-lg sm:text-xl md:text-2xl lg:text-[26px] font-bold text-white tracking-tight leading-snug mt-1.5 sm:mt-2 transition-colors duration-300"
                      style={{
                        color: isCurrentActive ? '#ffffff' : undefined
                      }}
                    >
                      {headline}
                    </h3>
                  </div>

                  {/* Right Column: Read Case Study Button (Full Width Edge-to-Edge on Mobile) */}
                  <div className="w-full sm:w-auto flex-shrink-0 pt-1 sm:pt-0">
                    <button
                      id={`btn-read-case-study-${project.id}`}
                      type="button"
                      onClick={() => onSelectCaseStudy(project)}
                      aria-haspopup="dialog"
                      aria-label={`Read case study for ${project.title}`}
                      className="w-full sm:w-auto justify-center inline-flex items-center gap-2 px-5 py-3 sm:py-2.5 rounded-full bg-white text-black text-xs sm:text-[13px] font-semibold tracking-wide uppercase font-label-caps cursor-pointer transition-all duration-200 hover:scale-[1.02] sm:hover:scale-[1.04] active:scale-95 shadow-md"
                    >
                      <span>Read Case Study</span>
                      <span className="text-sm transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true">→</span>
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
