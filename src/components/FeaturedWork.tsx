import React from 'react';
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

export const FeaturedWork: React.FC<FeaturedWorkProps> = ({ onSelectCaseStudy }) => {
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
          headline: project.subtitle || 'Mobile Banking Experience Audit & Redesign',
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
      aria-labelledby="select-work-heading" 
      className="w-full flex flex-col items-center bg-[#0D0D0E] py-16 sm:py-20 lg:py-24"
    >
      <div className="w-full max-w-4xl px-5 sm:px-8 md:px-12 flex flex-col">
        {/* Section Heading: "Selected Work" */}
        <h2 
          id="selected-work-heading" 
          className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight mb-10 sm:mb-14"
        >
          Selected Work
        </h2>

        {/* Project List */}
        <div className="w-full flex flex-col space-y-16 sm:space-y-24 md:space-y-28">
          {CASE_STUDIES.map((project, index) => {
            const { company, readTime, LogoComponent, headline } = getProjectMetadata(project);

            return (
              <article
                key={project.id}
                id={`project-card-${project.id}`}
                aria-labelledby={`project-headline-${project.id}`}
                className="w-full flex flex-col group scroll-mt-24 md:min-h-[480px] md:h-[calc(100vh-150px)] md:max-h-[700px] justify-between"
              >
                {/* 1. Large Rounded Visual Container - flexible height to fit single viewport */}
                <div className="w-full aspect-[16/10] md:aspect-auto md:flex-1 md:min-h-0 rounded-[24px] sm:rounded-[32px] overflow-hidden bg-[#161618] border border-[#232326] shadow-xl relative transition-all duration-300 group-hover:border-zinc-700 group-hover:shadow-2xl">
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
                <div className="w-full flex-shrink-0 flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4 mt-3 sm:mt-4 md:mt-5 px-1">
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
                      className="font-display text-lg sm:text-xl md:text-2xl lg:text-[26px] font-bold text-white tracking-tight leading-snug mt-1.5 sm:mt-2 group-hover:text-emerald-400 transition-colors"
                    >
                      {headline}
                    </h3>
                  </div>

                  {/* Right Column: Read Case Study Button */}
                  <div className="flex-shrink-0 pt-1 sm:pt-0">
                    <button
                      type="button"
                      onClick={() => onSelectCaseStudy(project)}
                      aria-haspopup="dialog"
                      aria-label={`Read case study for ${project.title}`}
                      className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white text-black text-xs sm:text-[13px] font-semibold tracking-wide uppercase font-label-caps cursor-pointer transition-all duration-200 hover:bg-zinc-200 hover:scale-[1.03] active:scale-95 shadow-md"
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
