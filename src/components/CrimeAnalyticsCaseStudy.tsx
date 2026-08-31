import React, { useEffect } from 'react';
import heroOpsImg from '../assets/images/crime_intel_hero_ops_exact.jpg';
import complexGraphImg from '../assets/images/crime_intel_complex_graph_exact.png';
import evidenceWallImg from '../assets/images/crime_intel_evidence_wall_1788181384097.jpg';
import turningPointImg from '../assets/images/crime_intel_turning_point_1788181396392.jpg';
import experienceUiImg from '../assets/images/crime_intel_experience_1788181411316.jpg';
import crimeVisual from '../assets/images/crime_analytics_visual_1788106508732.jpg';

interface CrimeAnalyticsCaseStudyProps {
  onBack: () => void;
  onNextCaseStudy?: () => void;
}

export const CrimeAnalyticsCaseStudy: React.FC<CrimeAnalyticsCaseStudyProps> = ({
  onBack,
  onNextCaseStudy,
}) => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, []);

  return (
    <article className="relative w-full bg-[#09090b] text-[#e4e4e7] min-h-screen font-sans selection:bg-amber-500/25 selection:text-amber-200">
      
      {/* Top Header Navigation */}
      <header className="sticky top-20 z-30 w-full bg-[#09090b]/90 backdrop-blur-lg border-b border-white/10 px-6 sm:px-12 py-4">
        <div className="max-w-[1080px] mx-auto flex items-center justify-between">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-400 hover:text-amber-300 transition-colors cursor-pointer group"
            aria-label="Return to Selected Work"
          >
            <span className="transition-transform group-hover:-translate-x-1">←</span>
            <span>Back to Selected Work</span>
          </button>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[11px] font-mono tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              Confidential · NDA Protected
            </span>
          </div>
        </div>
      </header>

      {/* Main Editorial Reading Column */}
      <div className="max-w-[1080px] mx-auto px-6 sm:px-10 md:px-12 py-16 sm:py-24 flex flex-col gap-28 sm:gap-36">

        {/* =========================================================================
            SECTION 01 — HERO
        ========================================================================= */}
        <section id="hero-section" className="flex flex-col gap-10">
          
          <div className="space-y-6 max-w-[900px]">
            <div className="inline-flex items-center gap-2">
              <span className="font-mono text-xs text-amber-400 uppercase tracking-widest font-semibold">
                Case Study
              </span>
              <span className="w-8 h-[1px] bg-amber-500/40" />
              <span className="font-mono text-[11px] text-zinc-400">Enterprise UX Revamp</span>
            </div>

            <h1 className="font-display text-3xl sm:text-5xl md:text-[56px] font-extrabold text-white tracking-tight leading-[1.12]">
              Crime Analytics Platform
            </h1>

            <p className="text-xl sm:text-2xl text-zinc-200 font-light leading-relaxed max-w-[820px]">
              Revamping a complex intelligence platform around the way law-enforcement teams actually work.
            </p>
          </div>

          {/* Metadata Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-6 border-y border-white/10 font-mono text-xs">
            <div>
              <span className="block text-zinc-400 uppercase text-[10px] tracking-wider mb-1">Role</span>
              <span className="text-white font-medium text-sm">Senior Product Designer</span>
            </div>
            <div>
              <span className="block text-zinc-400 uppercase text-[10px] tracking-wider mb-1">Focus</span>
              <span className="text-white font-medium text-sm">UX Research · Product Revamp · Data Visualization · Design System</span>
            </div>
            <div className="sm:col-span-2 md:col-span-1">
              <span className="block text-amber-400 uppercase text-[10px] tracking-wider mb-1">NDA Note</span>
              <span className="text-zinc-300 font-normal text-xs leading-relaxed">
                Due to NDA, company names, real data, and production screens cannot be shown.
              </span>
            </div>
          </div>

          {/* IMAGE 01 — HERO VISUAL (Prominently placed below hero content with intentional breathing room) */}
          <div className="w-full rounded-2xl overflow-hidden border border-white/15 bg-[#121215] shadow-2xl relative my-2">
            <div className="aspect-[16/9] sm:aspect-[21/9] w-full relative">
              <img
                src={heroOpsImg}
                alt="Law enforcement operations center and multi-source intelligence environment"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-black/30 pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-zinc-300 bg-[#09090b]/85 backdrop-blur-md px-4 py-2.5 rounded-lg border border-white/10">
                <span className="text-zinc-200 font-medium">Mission-Critical Intelligence Environment</span>
                <span className="text-amber-400/90 font-mono text-[10px]">Contextual Representation</span>
              </div>
            </div>
          </div>

        </section>


        {/* =========================================================================
            SECTION 02 — BACKGROUND
        ========================================================================= */}
        <section id="background-section" className="flex flex-col gap-10">
          
          <div className="max-w-[760px] space-y-5">
            <div className="inline-flex items-center gap-2">
              <span className="font-mono text-xs text-amber-400 uppercase tracking-widest font-semibold">
                Background
              </span>
              <span className="w-6 h-[1px] bg-amber-500/40" />
            </div>

            <h2 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight leading-snug">
              It started with a lot of information.
            </h2>

            <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
              When I joined this project, I was working on a revamp of an existing crime analytics platform. It already brought together an enormous amount of law-enforcement information, but the experience had become complex as the platform expanded. Before redesigning it, I wanted to understand how different teams actually used it and where the experience could better support their work.
            </p>
          </div>

          {/* IMAGE 02 — PLATFORM OVERVIEW (Editorial composition, not a card) */}
          <div className="w-full rounded-2xl overflow-hidden border border-white/10 bg-[#e4e7eb] shadow-2xl relative">
            <div className="w-full relative flex items-center justify-center p-3 sm:p-6 md:p-8 bg-[#e4e7eb]">
              <img
                src={complexGraphImg}
                alt="Multi-source data synthesis diagram showing isolated structured and unstructured inputs"
                referrerPolicy="no-referrer"
                className="w-full h-auto max-h-[560px] object-contain mx-auto rounded-lg"
              />
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 font-mono text-[10px] uppercase tracking-wider text-rose-300 bg-black/80 border border-rose-500/40 px-3 py-1 rounded-full backdrop-blur-md">
                Disparate Input Streams
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-zinc-300 bg-[#121216] px-5 py-3.5 border-t border-white/10">
              <span className="text-zinc-200 font-medium">Multi-Source Information Streams & Relational Synthesis</span>
              <span className="text-zinc-400 text-[11px]">Structured & Unstructured Intelligence</span>
            </div>
          </div>

        </section>


        {/* =========================================================================
            SECTION 03 — USERS
        ========================================================================= */}
        <section id="users-section" className="flex flex-col gap-10">
          
          <div className="max-w-[760px] space-y-5">
            <div className="inline-flex items-center gap-2">
              <span className="font-mono text-xs text-amber-400 uppercase tracking-widest font-semibold">
                Users & Context
              </span>
              <span className="w-6 h-[1px] bg-amber-500/40" />
            </div>

            <h2 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight leading-snug">
              So I started with the people using it.
            </h2>

            <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
              The platform supported law enforcement agencies, patrol officers, investigators, and security professionals. Their situations were very different. A patrol officer needed to know what mattered before heading into a shift, while an investigator needed to dig deeper into information and build a case. Analysts needed to see patterns, while command teams needed to understand the bigger picture.
            </p>
          </div>

          {/* IMAGE 03 — USER CONTEXT (Editorial imagery representing human context of the product) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
            
            {/* Visual Column */}
            <div className="md:col-span-7 rounded-2xl overflow-hidden border border-white/10 bg-[#121216] relative min-h-[320px]">
              <img
                src={evidenceWallImg}
                alt="Investigative analysis and case evidence correlation workspace"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter brightness-90 contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-xs font-mono text-zinc-300 bg-black/70 backdrop-blur-md px-3.5 py-2 rounded-lg border border-white/10">
                <span>Investigative Synthesis · Connecting disparate entities in field operations</span>
              </div>
            </div>

            {/* Editorial Role Context Breakdown */}
            <div className="md:col-span-5 flex flex-col justify-between gap-4 bg-[#111114] border border-white/10 rounded-2xl p-6 sm:p-7">
              <div className="space-y-4">
                <span className="text-[11px] font-mono uppercase tracking-widest text-amber-400 font-bold block">
                  User Profiles & Working Needs
                </span>

                <div className="space-y-4 text-xs text-zinc-300 font-sans">
                  <div className="pb-3 border-b border-white/5">
                    <span className="text-white font-semibold block text-sm mb-0.5">Patrol Officers</span>
                    <p className="text-zinc-400 leading-relaxed">
                      Time-critical shift briefings: rapid awareness of active warrants, repeat locations, and high-priority alerts before hitting the field.
                    </p>
                  </div>

                  <div className="pb-3 border-b border-white/5">
                    <span className="text-white font-semibold block text-sm mb-0.5">Detectives & Investigators</span>
                    <p className="text-zinc-400 leading-relaxed">
                      Deep exploratory workflows: cross-referencing suspects, vehicles, field notes, ballistics, and compiling legally admissible case dossiers.
                    </p>
                  </div>

                  <div className="pb-3 border-b border-white/5">
                    <span className="text-white font-semibold block text-sm mb-0.5">Intelligence Analysts</span>
                    <p className="text-zinc-400 leading-relaxed">
                      Macro pattern detection: uncovering regional crime trends, series correlations, spatial clusters, and entity network graphs.
                    </p>
                  </div>

                  <div>
                    <span className="text-white font-semibold block text-sm mb-0.5">Command & Security Leadership</span>
                    <p className="text-zinc-400 leading-relaxed">
                      Strategic situational awareness: high-level resource deployment, inter-agency metrics, and longitudinal crime reduction insights.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </section>


        {/* =========================================================================
            SECTION 04 — COMPETITIVE ANALYSIS
        ========================================================================= */}
        <section id="competitive-section" className="flex flex-col gap-8">
          
          <div className="max-w-[760px] space-y-5">
            <div className="inline-flex items-center gap-2">
              <span className="font-mono text-xs text-amber-400 uppercase tracking-widest font-semibold">
                Landscape
              </span>
              <span className="w-6 h-[1px] bg-amber-500/40" />
            </div>

            <h2 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight leading-snug">
              Competitive Analysis
            </h2>

            <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
              I studied the existing experience alongside Peregrine, Force Metrics, and Beagle Analytics. I looked at how these products approached search, investigation, analysis, and information discovery — not just what features they offered. This helped me understand the expectations users already had and where the existing experience could be improved.
            </p>
          </div>

          {/* Restrained Editorial Comparison Visual */}
          <div className="w-full bg-[#111114] border border-white/10 rounded-2xl p-6 sm:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
              
              <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-2.5">
                <span className="text-amber-400 font-bold uppercase tracking-wider text-[11px] block">
                  Peregrine
                </span>
                <span className="text-white font-medium text-xs block">Search & Integration</span>
                <p className="text-zinc-400 text-[11px] leading-relaxed font-sans">
                  Strong unified search across multiple departments; highlighted user expectations around single-query multi-entity retrieval.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-2.5">
                <span className="text-amber-400 font-bold uppercase tracking-wider text-[11px] block">
                  Force Metrics
                </span>
                <span className="text-white font-medium text-xs block">Patrol Context & Speed</span>
                <p className="text-zinc-400 text-[11px] leading-relaxed font-sans">
                  Focused on quick field-level summary views; emphasized the need for zero-latency, high-priority safety alerts.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-2.5">
                <span className="text-amber-400 font-bold uppercase tracking-wider text-[11px] block">
                  Beagle Analytics
                </span>
                <span className="text-white font-medium text-xs block">Analytics & Exploration</span>
                <p className="text-zinc-400 text-[11px] leading-relaxed font-sans">
                  Advanced relational filtering and pattern detection; demonstrated that complex analytical tools require clear progressive disclosure.
                </p>
              </div>

            </div>
          </div>

        </section>


        {/* =========================================================================
            SECTION 05 — PROBLEM
        ========================================================================= */}
        <section id="problem-section" className="flex flex-col gap-10">
          
          <div className="max-w-[760px] space-y-5">
            <div className="inline-flex items-center gap-2">
              <span className="font-mono text-xs text-rose-400 uppercase tracking-widest font-semibold">
                The Core Friction
              </span>
              <span className="w-6 h-[1px] bg-rose-500/40" />
            </div>

            <h2 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight leading-snug">
              The problem became clearer.
            </h2>

            <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
              The platform had access to an enormous amount of information, but different users needed very different ways to work with it. The challenge was no longer just helping someone find information. It was helping them turn that information into something useful — whether they were preparing for a shift, following an investigation, analysing patterns, or making an operational decision.
            </p>
          </div>

          {/* IMAGE 05 — PROBLEM VISUAL: Transition Large amount of information → understanding → action */}
          <div className="w-full bg-[#111114] border border-white/10 rounded-2xl p-6 sm:p-10 relative overflow-hidden">
            <div className="max-w-[860px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
              
              {/* Step 1 */}
              <div className="flex-1 text-center md:text-left space-y-2">
                <div className="font-mono text-[11px] uppercase tracking-wider text-zinc-400 font-semibold">
                  Phase 01
                </div>
                <div className="text-lg sm:text-xl font-bold text-zinc-200">
                  Large Amount of Information
                </div>
                <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                  Millions of isolated incident logs, records, ballistics, and field narratives.
                </p>
              </div>

              {/* Arrow */}
              <div className="text-amber-400 font-mono text-xl sm:text-2xl rotate-90 md:rotate-0">
                →
              </div>

              {/* Step 2 */}
              <div className="flex-1 text-center md:text-left space-y-2">
                <div className="font-mono text-[11px] uppercase tracking-wider text-amber-400 font-semibold">
                  Phase 02
                </div>
                <div className="text-lg sm:text-xl font-bold text-amber-300">
                  Understanding
                </div>
                <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                  Synthesized relationships, contextual relevance, and pattern discovery.
                </p>
              </div>

              {/* Arrow */}
              <div className="text-emerald-400 font-mono text-xl sm:text-2xl rotate-90 md:rotate-0">
                →
              </div>

              {/* Step 3 */}
              <div className="flex-1 text-center md:text-left space-y-2">
                <div className="font-mono text-[11px] uppercase tracking-wider text-emerald-400 font-semibold">
                  Phase 03
                </div>
                <div className="text-lg sm:text-xl font-bold text-emerald-300">
                  Action
                </div>
                <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                  Shift readiness, case progression, tactical deployment, and crime prevention.
                </p>
              </div>

            </div>
          </div>

        </section>


        {/* =========================================================================
            SECTION 06 — DESIGN DIRECTION (Large Standalone Statement with Whitespace)
        ========================================================================= */}
        <section id="direction-section" className="py-12 sm:py-20 flex flex-col items-start justify-center border-y border-white/10">
          
          <div className="max-w-[900px] space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-amber-400 font-semibold">
              Design Direction
            </span>
            <blockquote className="font-display text-3xl sm:text-5xl md:text-[52px] font-bold text-white tracking-tight leading-[1.18]">
              “So I redesigned the experience around the way each user actually works.”
            </blockquote>
          </div>

        </section>


        {/* =========================================================================
            SECTION 07 — SOLUTION
        ========================================================================= */}
        <section id="solution-section" className="flex flex-col gap-20 sm:gap-28">
          
          {/* Solution Intro */}
          <div className="max-w-[760px] space-y-5">
            <div className="inline-flex items-center gap-2">
              <span className="font-mono text-xs text-amber-400 uppercase tracking-widest font-semibold">
                The solution
              </span>
              <span className="w-6 h-[1px] bg-amber-500/40" />
            </div>

            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
              One platform, multiple ways to get the job done.
            </h2>

            <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
              The revamp covered a broad set of modules, each designed around a different part of the law-enforcement workflow.
            </p>
          </div>

          {/* Module Chapters (Clean, typography-focused editorial grid) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

            {/* MODULE 01: Patrol Briefing */}
            <div className="p-8 rounded-2xl bg-[#111114] border border-white/10 flex flex-col justify-between space-y-6 hover:border-amber-400/30 transition-colors">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 font-mono text-[11px] text-amber-400 uppercase tracking-widest font-semibold">
                  <span>Module 01</span>
                  <span className="w-4 h-[1px] bg-amber-500/40" />
                </div>
                <h3 className="font-display text-2xl font-bold text-white tracking-tight">
                  Patrol Briefing
                </h3>
                <p className="text-sm sm:text-base text-zinc-300 font-normal leading-relaxed">
                  A focused view that helps officers start their shift with the information that matters — including recent incidents, priority locations, and active alerts.
                </p>
              </div>
            </div>

            {/* MODULE 02: Investigative Search */}
            <div className="p-8 rounded-2xl bg-[#111114] border border-white/10 flex flex-col justify-between space-y-6 hover:border-amber-400/30 transition-colors">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 font-mono text-[11px] text-amber-400 uppercase tracking-widest font-semibold">
                  <span>Module 02</span>
                  <span className="w-4 h-[1px] bg-amber-500/40" />
                </div>
                <h3 className="font-display text-2xl font-bold text-white tracking-tight">
                  Investigative Search
                </h3>
                <p className="text-sm sm:text-base text-zinc-300 font-normal leading-relaxed">
                  A faster way to explore large amounts of intelligence and move from an initial question toward relevant information.
                </p>
              </div>
            </div>

            {/* MODULE 03: Case Management */}
            <div className="p-8 rounded-2xl bg-[#111114] border border-white/10 flex flex-col justify-between space-y-6 hover:border-amber-400/30 transition-colors">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 font-mono text-[11px] text-amber-400 uppercase tracking-widest font-semibold">
                  <span>Module 03</span>
                  <span className="w-4 h-[1px] bg-amber-500/40" />
                </div>
                <h3 className="font-display text-2xl font-bold text-white tracking-tight">
                  Case Management
                </h3>
                <p className="text-sm sm:text-base text-zinc-300 font-normal leading-relaxed">
                  A workspace for investigators to bring relevant information together, organize their findings, and build a more complete case.
                </p>
              </div>
            </div>

            {/* MODULE 04: Entity Exploration */}
            <div className="p-8 rounded-2xl bg-[#111114] border border-white/10 flex flex-col justify-between space-y-6 hover:border-amber-400/30 transition-colors">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 font-mono text-[11px] text-amber-400 uppercase tracking-widest font-semibold">
                  <span>Module 04</span>
                  <span className="w-4 h-[1px] bg-amber-500/40" />
                </div>
                <h3 className="font-display text-2xl font-bold text-white tracking-tight">
                  Entity Exploration
                </h3>
                <p className="text-sm sm:text-base text-zinc-300 font-normal leading-relaxed">
                  Experiences for exploring the information surrounding people, places, vehicles, and other entities during an investigation.
                </p>
              </div>
            </div>

            {/* MODULE 05: Analytics & Dashboards */}
            <div className="p-8 rounded-2xl bg-[#111114] border border-white/10 flex flex-col justify-between space-y-6 hover:border-amber-400/30 transition-colors">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 font-mono text-[11px] text-amber-400 uppercase tracking-widest font-semibold">
                  <span>Module 05</span>
                  <span className="w-4 h-[1px] bg-amber-500/40" />
                </div>
                <h3 className="font-display text-2xl font-bold text-white tracking-tight">
                  Analytics & Dashboards
                </h3>
                <p className="text-sm sm:text-base text-zinc-300 font-normal leading-relaxed">
                  Configurable views that help teams understand crime trends, emerging hotspots, repeat activity, and other patterns.
                </p>
              </div>
            </div>

            {/* MODULE 06: AI-Assisted Intelligence */}
            <div className="p-8 rounded-2xl bg-[#111114] border border-white/10 flex flex-col justify-between space-y-6 hover:border-amber-400/30 transition-colors">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 font-mono text-[11px] text-amber-400 uppercase tracking-widest font-semibold">
                  <span>Module 06</span>
                  <span className="w-4 h-[1px] bg-amber-500/40" />
                </div>
                <h3 className="font-display text-2xl font-bold text-white tracking-tight">
                  AI-Assisted Intelligence
                </h3>
                <p className="text-sm sm:text-base text-zinc-300 font-normal leading-relaxed">
                  Experiences that help users work through large amounts of information more efficiently — including natural-language search and summarization of lengthy reports.
                </p>
              </div>
            </div>

          </div>

        </section>


        {/* =========================================================================
            SECTION 08 — CONNECTING THE MODULES
        ========================================================================= */}
        <section id="connecting-section" className="flex flex-col gap-10">
          
          <div className="max-w-[760px] space-y-5">
            <div className="inline-flex items-center gap-2">
              <span className="font-mono text-xs text-amber-400 uppercase tracking-widest font-semibold">
                Architecture
              </span>
              <span className="w-6 h-[1px] bg-amber-500/40" />
            </div>

            <h2 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight leading-snug">
              The modules were different. The experience couldn't be.
            </h2>

            <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
              While each module served a different purpose, I designed them to work as parts of one larger platform. The information architecture, interaction patterns, visual hierarchy, and components needed to feel familiar as users moved from one experience to another.
            </p>
          </div>

          {/* IMAGE 12: Clean, editorial visual relationship: Patrol → Search → Investigation → Case → Analytics */}
          <div className="w-full bg-[#111114] border border-white/10 rounded-2xl p-6 sm:p-10 relative overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs">
              
              <div className="w-full md:w-auto p-4 rounded-xl bg-black/40 border border-white/5 text-center space-y-1">
                <span className="text-[10px] text-amber-400 block uppercase font-bold">01</span>
                <span className="text-white font-bold text-sm block">Patrol</span>
                <span className="text-[11px] text-zinc-400 block font-sans">Shift Readiness</span>
              </div>

              <div className="text-amber-400 text-lg rotate-90 md:rotate-0">→</div>

              <div className="w-full md:w-auto p-4 rounded-xl bg-black/40 border border-white/5 text-center space-y-1">
                <span className="text-[10px] text-cyan-400 block uppercase font-bold">02</span>
                <span className="text-white font-bold text-sm block">Search</span>
                <span className="text-[11px] text-zinc-400 block font-sans">Query & Discovery</span>
              </div>

              <div className="text-cyan-400 text-lg rotate-90 md:rotate-0">→</div>

              <div className="w-full md:w-auto p-4 rounded-xl bg-black/40 border border-white/5 text-center space-y-1">
                <span className="text-[10px] text-blue-400 block uppercase font-bold">03</span>
                <span className="text-white font-bold text-sm block">Investigation</span>
                <span className="text-[11px] text-zinc-400 block font-sans">Entity Exploration</span>
              </div>

              <div className="text-blue-400 text-lg rotate-90 md:rotate-0">→</div>

              <div className="w-full md:w-auto p-4 rounded-xl bg-black/40 border border-white/5 text-center space-y-1">
                <span className="text-[10px] text-emerald-400 block uppercase font-bold">04</span>
                <span className="text-white font-bold text-sm block">Case</span>
                <span className="text-[11px] text-zinc-400 block font-sans">Dossier Assembly</span>
              </div>

              <div className="text-emerald-400 text-lg rotate-90 md:rotate-0">→</div>

              <div className="w-full md:w-auto p-4 rounded-xl bg-black/40 border border-white/5 text-center space-y-1">
                <span className="text-[10px] text-purple-400 block uppercase font-bold">05</span>
                <span className="text-white font-bold text-sm block">Analytics</span>
                <span className="text-[11px] text-zinc-400 block font-sans">Patterns & Trends</span>
              </div>

            </div>

            <div className="mt-6 pt-6 border-t border-white/5 text-center font-mono text-[11px] text-zinc-400">
              Unified Information Architecture · Shared Entity Hierarchy · Consistent Interaction Semantics
            </div>
          </div>

        </section>


        {/* =========================================================================
            SECTION 09 — DESIGN SYSTEM
        ========================================================================= */}
        <section id="design-system-section" className="flex flex-col gap-10">
          
          <div className="max-w-[760px] space-y-5">
            <div className="inline-flex items-center gap-2">
              <span className="font-mono text-xs text-amber-400 uppercase tracking-widest font-semibold">
                Design System
              </span>
              <span className="w-6 h-[1px] bg-amber-500/40" />
            </div>

            <h2 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight leading-snug">
              A platform this large needed a shared foundation.
            </h2>

            <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
              As I worked across multiple modules, consistency became a challenge of its own. I created a design system covering reusable components, visual foundations, interaction patterns, and states.
            </p>

            <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
              This gave the different modules a common language and made it easier to extend the product without reinventing the experience every time.
            </p>
          </div>

          {/* IMAGE 13 — DESIGN SYSTEM VISUAL SECTION */}
          <div className="w-full bg-[#111114] border border-white/10 rounded-2xl p-6 sm:p-10 space-y-8">
            
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="font-mono text-xs uppercase tracking-widest text-amber-400 font-bold">
                System Foundations & Component Governance
              </span>
              <span className="font-mono text-[11px] text-zinc-400">Enterprise Token Architecture</span>
            </div>

            {/* Foundations & Component Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 font-mono text-xs">
              
              {/* Foundations */}
              <div className="p-5 rounded-xl bg-black/40 border border-white/5 space-y-3">
                <span className="text-amber-400 font-bold uppercase tracking-wider text-[11px] block">
                  01 / Visual Foundations
                </span>
                <p className="text-zinc-300 text-xs font-sans leading-relaxed">
                  Mission-critical dark theme tokens, high-contrast accessible typography, strict 4px/8px spatial rhythm, and WCAG AA contrast compliance for high-stress field conditions.
                </p>
                <div className="flex items-center gap-2 pt-2">
                  <span className="w-4 h-4 rounded-full bg-[#09090b] border border-white/20" title="Canvas" />
                  <span className="w-4 h-4 rounded-full bg-[#18181b] border border-white/20" title="Surface" />
                  <span className="w-4 h-4 rounded-full bg-amber-500" title="Accent Signal" />
                  <span className="w-4 h-4 rounded-full bg-emerald-500" title="Safe Status" />
                  <span className="w-4 h-4 rounded-full bg-rose-500" title="Critical Alert" />
                </div>
              </div>

              {/* Reusable Components */}
              <div className="p-5 rounded-xl bg-black/40 border border-white/5 space-y-3">
                <span className="text-amber-400 font-bold uppercase tracking-wider text-[11px] block">
                  02 / Reusable Components
                </span>
                <p className="text-zinc-300 text-xs font-sans leading-relaxed">
                  High-density entity cards, multi-facet filter chips, rapid query bars, collapsible case timelines, and standardized evidence attachment drawers.
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  <span className="px-2 py-0.5 rounded bg-white/10 text-[10px] text-zinc-300">EntityCard</span>
                  <span className="px-2 py-0.5 rounded bg-white/10 text-[10px] text-zinc-300">FacetFilter</span>
                  <span className="px-2 py-0.5 rounded bg-white/10 text-[10px] text-zinc-300">DossierRail</span>
                </div>
              </div>

              {/* Interaction Patterns & States */}
              <div className="p-5 rounded-xl bg-black/40 border border-white/5 space-y-3 sm:col-span-2 lg:col-span-1">
                <span className="text-amber-400 font-bold uppercase tracking-wider text-[11px] block">
                  03 / Interaction & States
                </span>
                <p className="text-zinc-300 text-xs font-sans leading-relaxed">
                  Explicit error states, sub-second query loading skeletons, bulk entity selection gestures, and progressive disclosure for complex investigation trees.
                </p>
                <div className="flex items-center justify-between text-[10px] text-zinc-400 pt-2 border-t border-white/5">
                  <span>Keyboard Shortcuts</span>
                  <span className="text-amber-300 font-bold">Cmd + K Search</span>
                </div>
              </div>

            </div>

            {/* Data Visualization Tokens */}
            <div className="p-5 rounded-xl bg-black/30 border border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs">
              <div>
                <span className="text-white font-semibold block text-sm mb-0.5">Data Visualization Standards</span>
                <span className="text-zinc-400 text-xs font-sans">
                  Harmonized geospatial choropleths, entity link graph physics, time-series crime velocity charts, and spatial clustering radii.
                </span>
              </div>
              <span className="px-3 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[11px] font-mono shrink-0">
                Shared Token Library
              </span>
            </div>

          </div>

        </section>


        {/* =========================================================================
            SECTION 10 — RESULT
        ========================================================================= */}
        <section id="result-section" className="flex flex-col gap-10">
          
          <div className="max-w-[760px] space-y-5">
            <div className="inline-flex items-center gap-2">
              <span className="font-mono text-xs text-amber-400 uppercase tracking-widest font-semibold">
                The result
              </span>
              <span className="w-6 h-[1px] bg-amber-500/40" />
            </div>

            <h2 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight leading-snug">
              Less effort to get from information to action.
            </h2>

            <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
              The revamped experience gave different teams clearer ways to work with the same underlying intelligence.
            </p>

            <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
              Patrol officers could start informed. Investigators could search and build cases. Analysts could identify patterns. Command teams could get the information they needed at a higher level.
            </p>

            <p className="text-lg sm:text-xl text-amber-300 font-medium leading-relaxed pt-2">
              The complexity remained in the platform — not in the user's path through it.
            </p>
          </div>

          {/* IMAGE 14 — FINAL PRODUCT VISUAL (Visual climax of the case study) */}
          <div className="w-full rounded-2xl overflow-hidden border border-white/15 bg-[#121215] shadow-2xl relative my-2">
            <div className="aspect-[16/9] sm:aspect-[21/9] w-full relative">
              <img
                src={heroOpsImg}
                alt="Unified crime intelligence operational platform in active law-enforcement workflow"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center filter brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex items-center justify-between text-xs font-mono text-zinc-300 bg-black/85 backdrop-blur-md px-4 py-2.5 rounded-lg border border-white/10">
                <span className="text-zinc-200 font-medium">Unified Platform Experience: From Fragmented Records to Actionable Clarity</span>
                <span className="text-emerald-400 font-semibold">Production Revamp</span>
              </div>
            </div>
          </div>

        </section>


        {/* =========================================================================
            SECTION 11 — WHAT I LEARNED (Typography-led, substantial whitespace)
        ========================================================================= */}
        <section id="learnings-section" className="py-8 sm:py-14 flex flex-col gap-6 border-y border-white/10">
          
          <div className="max-w-[840px] space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="font-mono text-xs text-amber-400 uppercase tracking-widest font-semibold">
                What I learned
              </span>
              <span className="w-6 h-[1px] bg-amber-500/40" />
            </div>

            <h2 className="font-display text-2xl sm:text-4xl md:text-[42px] font-bold text-white tracking-tight leading-snug">
              Complex products don't need less information. They need better ways through it.
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
              <p>
                This project changed how I approach enterprise products. When the underlying problem is inherently complex, simplifying the information isn't always possible — or desirable.
              </p>
              <p className="text-zinc-200 font-medium">
                What I can control is how people find it, understand it, and act on it.
              </p>
            </div>
          </div>

        </section>


        {/* =========================================================================
            SECTION 12 — IMPACT
        ========================================================================= */}
        <section id="impact-section" className="flex flex-col gap-16 sm:gap-24 pt-4">
          
          {/* Header & Scale Context */}
          <div className="max-w-[820px] space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="font-mono text-xs sm:text-sm text-amber-400 uppercase tracking-widest font-semibold">
                Impact
              </span>
              <span className="w-8 h-[1px] bg-amber-500/40" />
            </div>

            <h2 className="font-display text-3xl sm:text-5xl md:text-[54px] font-extrabold text-white tracking-tight leading-[1.12]">
              Built for decisions that matter.
            </h2>

            <p className="text-lg sm:text-xl text-zinc-200 font-light leading-relaxed">
              The platform is used by 2,100+ agencies and 300+ public-safety customers nationwide.
            </p>

            {/* Contextual Platform Scale Indicators (Editorial, understated) */}
            <div className="flex flex-wrap items-baseline gap-x-12 gap-y-6 pt-4 pb-2 border-y border-white/10">
              <div className="flex items-baseline gap-3">
                <span className="font-display text-3xl sm:text-4xl font-bold text-amber-400">2,100+</span>
                <span className="font-mono text-xs uppercase tracking-wider text-zinc-400">agencies</span>
              </div>
              <div className="flex items-baseline gap-3">
                <span className="font-display text-3xl sm:text-4xl font-bold text-white">300+</span>
                <span className="font-mono text-xs uppercase tracking-wider text-zinc-400">public-safety customers</span>
              </div>
            </div>

            <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed pt-2">
              The feedback from users showed me that the value went beyond simply accessing information.
            </p>
          </div>

          {/* Testimonial 01 — Dominant Testimonial */}
          <div className="max-w-[900px] pl-6 sm:pl-8 border-l-2 border-amber-400/60 space-y-4 my-2">
            <blockquote className="font-display text-2xl sm:text-3xl md:text-[34px] font-normal text-zinc-100 leading-[1.3] tracking-tight">
              “It has become essential to how we build workups. It pulls together the information officers and detectives need in one place.”
            </blockquote>
            <div className="font-mono text-xs sm:text-sm text-amber-400/90 font-medium tracking-wide">
              — Law Enforcement Intelligence Analyst
            </div>
          </div>

          {/* Supporting Copy */}
          <div className="max-w-[760px]">
            <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
              For the teams using the platform, that meant having the information they needed to investigate, understand situations, and act with greater confidence.
            </p>
          </div>

          {/* Testimonial 02 — Secondary Visual Moment */}
          <div className="max-w-[820px] pl-5 sm:pl-7 border-l border-zinc-600/60 space-y-3 my-2">
            <blockquote className="font-display text-lg sm:text-xl md:text-2xl font-light text-zinc-300 leading-relaxed italic">
              “It not only hastens the response of police officers to shootings but can also identify shootings that may not have been reported to 9-1-1.”
            </blockquote>
            <div className="font-mono text-xs text-zinc-400 font-medium tracking-wide">
              — Law Enforcement Intelligence Professional
            </div>
          </div>

          {/* Large Standalone Closing Statement */}
          <div className="max-w-[920px] py-10 sm:py-16 my-4 border-t border-white/10">
            <p className="font-display text-2xl sm:text-4xl md:text-[40px] font-bold text-white tracking-tight leading-[1.25]">
              The goal was never to make complex intelligence simple. It was to make it more useful when people needed it most.
            </p>
          </div>

          {/* Bottom Next Project Footer Navigation */}
          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <button
              type="button"
              onClick={onBack}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-mono uppercase tracking-wider text-zinc-300 hover:text-white transition-colors cursor-pointer border border-white/10"
            >
              ← Back to Selected Work
            </button>

            {onNextCaseStudy && (
              <button
                type="button"
                onClick={onNextCaseStudy}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-xs font-mono uppercase tracking-wider text-amber-300 hover:text-amber-200 transition-colors cursor-pointer border border-amber-500/30 font-bold"
              >
                <span>Next Case Study: Bank of Baroda UX Audit</span>
                <span>→</span>
              </button>
            )}
          </div>

        </section>

      </div>

    </article>
  );
};
