import React, { useEffect } from 'react';

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
    <article className="relative w-full bg-[#09090b] text-[#e4e4e7] min-h-screen selection:bg-amber-500/25 selection:text-amber-200">
      
      {/* Top Header Navigation */}
      <header className="sticky top-20 z-30 w-full bg-[#09090b]/90 backdrop-blur-lg border-b border-white/10 px-6 sm:px-12 py-4">
        <div className="max-w-[1080px] mx-auto flex items-center justify-between">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-zinc-400 hover:text-amber-300 transition-colors cursor-pointer group"
            aria-label="Return to Selected Work"
          >
            <span className="transition-transform group-hover:-translate-x-1">←</span>
            <span>Back to Selected Work</span>
          </button>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[11px] tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              Confidential · NDA Protected
            </span>
          </div>
        </div>
      </header>

      {/* Main Editorial Reading Column */}
      <div className="max-w-[1080px] mx-auto px-6 sm:px-10 md:px-12 py-16 sm:py-24 flex flex-col gap-24 sm:gap-32">

        {/* =========================================================================
            HEADER & HERO SECTION
        ========================================================================= */}
        <section id="hero-section" className="flex flex-col gap-10">
          <div className="space-y-6 max-w-[900px]">
            <h1 className="text-3xl sm:text-5xl md:text-[56px] font-extrabold text-white tracking-tight leading-[1.12]">
              Crime Investigation Platform UX Revamp
            </h1>

            <h2 className="text-xl sm:text-2xl md:text-3xl text-zinc-200 font-light leading-relaxed">
              Making complex intelligence easier to act on
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed pt-2">
              <p>
                Law enforcement teams were using the platform to <strong className="font-semibold text-white">investigate crime incidents, follow criminal leads, and visualize connections between people, vehicles, locations, incidents, and other intelligence.</strong> But working through that information across different areas of the product could be difficult.
              </p>

              <p>
                The stakeholders wanted to revamp the platform for a wide range of users — <strong className="font-semibold text-white">patrol officers, intelligence officers, detectives, crime and intelligence analysts, gun intelligence officers, and more.</strong>
              </p>

              <div className="pt-2">
                <p className="text-lg sm:text-xl text-white font-medium leading-relaxed border-l-2 border-amber-400 pl-5">
                  <strong>I didn't see this as just another product revamp. I saw an opportunity to help these teams investigate faster, connect the right intelligence, and make better-informed decisions when time matters.</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Role & Tags Bar */}
          <div className="py-5 border-y border-white/10">
            <div className="text-xs sm:text-sm text-amber-400 font-medium tracking-wide">
              <strong>Senior Product Designer · UX Research · UX Audit · Competitive Analysis · Information Architecture · Interaction Design · Data Visualisation · AI Analytics · Design System</strong>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION: THE INFORMATION WAS SPREAD ACROSS THE INVESTIGATION
        ========================================================================= */}
        <section id="information-spread" className="flex flex-col gap-6 max-w-[900px]">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
            The information was spread across the investigation
          </h2>

          <div className="space-y-5 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            <p>
              Users had to search records, review details, follow leads, and connect information across different parts of the platform.
            </p>
            <p>
              Relationships between <strong className="font-semibold text-zinc-100">people, vehicles, locations, incidents, documents, and other intelligence</strong> could be difficult to see, while moving between searches, maps, and records could make it harder to keep the investigation in context.
            </p>
            <div className="pt-2">
              <p className="text-lg text-zinc-100 font-medium">
                <strong>The real opportunity was to make those connections visible and bring the relevant intelligence closer to the user.</strong>
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION: THE CHALLENGE WAS BIGGER THAN A UX REVAMP
        ========================================================================= */}
        <section id="the-challenge" className="flex flex-col gap-6 max-w-[900px]">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
            The challenge was bigger than a UX revamp
          </h2>

          <div className="space-y-5 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            <p>
              This was an existing platform handling <strong className="font-semibold text-white">sensitive criminal and investigative data</strong>, with complex datasets, established workflows, access considerations, and different needs across law-enforcement teams.
            </p>
            <p>
              I had to improve how users worked with the information without compromising the <strong className="font-semibold text-white">depth, control, and investigative value</strong> the platform required.
            </p>
            <p>
              I benchmarked other intelligence and public-safety platforms, studied the investigative workflows, and explored different ways to structure and visualize the information before moving into the redesigned experience.
            </p>
          </div>
        </section>

        {/* =========================================================================
            SECTION: DESIGNED TO SAVE INVESTIGATORS TIME (FEATURE CARDS)
        ========================================================================= */}
        <section id="designed-to-save-time" className="flex flex-col gap-12">
          <div className="space-y-4 max-w-[900px]">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
              Designed to save investigators time
            </h2>
            <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
              I redesigned key experiences around the moments where users spent the most effort — <strong className="font-semibold text-white">finding information, exploring entities, connecting leads, understanding relationships, reviewing evidence, and building a case.</strong>
            </p>
          </div>

          {/* Visual Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">

            {/* Feature Card 1: Patrol Dashboard */}
            <div className="p-8 rounded-2xl bg-[#111114] border border-white/10 flex flex-col justify-between space-y-4 hover:border-amber-400/30 transition-colors">
              <div className="space-y-3">
                <div className="text-xs uppercase tracking-widest text-amber-400 font-semibold">
                  <h3><strong>See what is happening</strong></h3>
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  <strong>Patrol Dashboard</strong>
                </h4>
                <p className="text-sm sm:text-base text-zinc-300 font-normal leading-relaxed">
                  A real-time operational view brings together crime activity, recent incidents, BOLO information, maps, heatmaps, and intelligence summaries so patrol teams can understand what is happening around them more quickly.
                </p>
              </div>
            </div>

            {/* Feature Card 2: Contextual Search */}
            <div className="p-8 rounded-2xl bg-[#111114] border border-white/10 flex flex-col justify-between space-y-4 hover:border-amber-400/30 transition-colors">
              <div className="space-y-3">
                <div className="text-xs uppercase tracking-widest text-amber-400 font-semibold">
                  <h3><strong>Find what matters</strong></h3>
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  <strong>Contextual Search</strong>
                </h4>
                <p className="text-sm sm:text-base text-zinc-300 font-normal leading-relaxed">
                  Users can search across different intelligence types and refine the results using relevant filters, helping them get to the information they need without navigating through disconnected systems.
                </p>
              </div>
            </div>

            {/* Feature Card 3: Relationship Discovery */}
            <div className="p-8 rounded-2xl bg-[#111114] border border-white/10 flex flex-col justify-between space-y-4 hover:border-amber-400/30 transition-colors">
              <div className="space-y-3">
                <div className="text-xs uppercase tracking-widest text-amber-400 font-semibold">
                  <h3><strong>Connect the dots</strong></h3>
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  <strong>Relationship Discovery</strong>
                </h4>
                <div className="space-y-3 text-sm sm:text-base text-zinc-300 font-normal leading-relaxed">
                  <p>
                    Instead of manually cross-referencing records, relationships between people, vehicles, locations, incidents, and other entities can be explored through interactive network visualisation.
                  </p>
                  <p>
                    This makes hidden relationships easier to see and helps investigators follow leads without losing the bigger picture.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature Card 4: Entity & Document Exploration */}
            <div className="p-8 rounded-2xl bg-[#111114] border border-white/10 flex flex-col justify-between space-y-4 hover:border-amber-400/30 transition-colors">
              <div className="space-y-3">
                <div className="text-xs uppercase tracking-widest text-amber-400 font-semibold">
                  <h3><strong>Understand the evidence</strong></h3>
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  <strong>Entity & Document Exploration</strong>
                </h4>
                <div className="space-y-3 text-sm sm:text-base text-zinc-300 font-normal leading-relaxed">
                  <p>
                    Entity profiles bring related information together, while progressive disclosure lets users move from a quick summary into deeper investigative details when required.
                  </p>
                  <p>
                    AI-assisted summaries help users understand important document information without having to process every detail first.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature Card 5: Evidence Timeline & Geospatial Intelligence */}
            <div className="p-8 rounded-2xl bg-[#111114] border border-white/10 flex flex-col justify-between space-y-4 hover:border-amber-400/30 transition-colors">
              <div className="space-y-3">
                <div className="text-xs uppercase tracking-widest text-amber-400 font-semibold">
                  <h3><strong>Follow the story</strong></h3>
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  <strong>Evidence Timeline & Geospatial Intelligence</strong>
                </h4>
                <p className="text-sm sm:text-base text-zinc-300 font-normal leading-relaxed">
                  Information can be understood through <strong className="font-semibold text-zinc-100">time and location</strong>, helping investigators examine how incidents, movements, and other evidence relate to one another.
                </p>
              </div>
            </div>

            {/* Feature Card 6: Case Workspace */}
            <div className="p-8 rounded-2xl bg-[#111114] border border-white/10 flex flex-col justify-between space-y-4 hover:border-amber-400/30 transition-colors">
              <div className="space-y-3">
                <div className="text-xs uppercase tracking-widest text-amber-400 font-semibold">
                  <h3><strong>Build the case</strong></h3>
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  <strong>Case Workspace</strong>
                </h4>
                <p className="text-sm sm:text-base text-zinc-300 font-normal leading-relaxed">
                  Relevant intelligence can be brought together into a focused workspace, allowing investigators to organize verified information and build a clearer case from the evidence they have collected.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* =========================================================================
            SECTION: DESIGN SYSTEM
        ========================================================================= */}
        <section id="design-system" className="flex flex-col gap-6 max-w-[900px]">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
            Design System
          </h2>

          <div className="space-y-5 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            <p>
              With multiple experiences being redesigned, consistency became an important part of the work.
            </p>
            <p>
              I created a <strong className="font-semibold text-white">design system</strong> with reusable components, interaction patterns, visual rules, and common states that could be applied across the platform.
            </p>
            <p>
              This created a consistent foundation for the different investigation experiences while making the product easier to extend.
            </p>
          </div>
        </section>

        {/* =========================================================================
            SECTION: WHAT CHANGED
        ========================================================================= */}
        <section id="what-changed" className="flex flex-col gap-10 max-w-[900px]">
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
              What changed
            </h2>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              From disconnected information to connected intelligence.
            </h3>
            <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
              The redesigned experience gave users clearer ways to <strong className="font-semibold text-white">search, explore, connect, visualize, and understand intelligence</strong> without constantly losing the context of their investigation.
            </p>
          </div>

          {/* Before -> After Comparison */}
          <div className="space-y-6 pt-2">
            <div className="text-base sm:text-lg text-white font-bold">
              <strong>Before → After</strong>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Before Column */}
              <div className="p-6 rounded-xl bg-[#111114] border border-white/10 space-y-4">
                <div className="text-lg font-bold text-zinc-300">
                  <strong>Before</strong>
                </div>
                <ul className="space-y-3 text-sm sm:text-base text-zinc-400 font-normal leading-relaxed list-disc list-inside">
                  <li>Information spread across disconnected experiences</li>
                  <li>Relationships difficult to uncover</li>
                  <li>Manual cross-referencing created additional effort</li>
                  <li>Switching between views could break investigative context</li>
                </ul>
              </div>

              {/* After Column */}
              <div className="p-6 rounded-xl bg-[#111114] border border-amber-400/20 space-y-4">
                <div className="text-lg font-bold text-amber-400">
                  <strong>After</strong>
                </div>
                <ul className="space-y-3 text-sm sm:text-base text-zinc-200 font-normal leading-relaxed list-disc list-inside">
                  <li>Connected intelligence across entities</li>
                  <li>Interactive relationship visualisation</li>
                  <li>Contextual search and entity exploration</li>
                  <li>Synchronized maps, timelines, and investigation workflows</li>
                  <li>A more consistent experience across the platform</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="pt-2">
            <p className="text-base sm:text-lg text-zinc-200 font-medium leading-relaxed">
              <strong>The result was a platform designed to help law-enforcement professionals spend less time finding and connecting information, and more time understanding what it means.</strong>
            </p>
          </div>
        </section>

        {/* =========================================================================
            SECTION: WHAT I LEARNED
        ========================================================================= */}
        <section id="what-i-learned" className="flex flex-col gap-6 max-w-[860px]">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
            What I learned
          </h2>

          <div className="space-y-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            <p>
              Working on a platform built around sensitive criminal intelligence taught me that complexity isn't something a designer can simply remove.
            </p>
            <p>
              The real challenge is to <strong className="font-semibold text-white">organize it, visualize it, preserve context, and help professionals understand what matters.</strong>
            </p>
          </div>
        </section>

        {/* =========================================================================
            CLOSING STATEMENT
        ========================================================================= */}
        <section id="closing-statement" className="py-12 sm:py-20 border-t border-white/10 max-w-[900px]">
          <h2 className="text-2xl sm:text-4xl md:text-[42px] font-bold text-white tracking-tight leading-[1.25] mb-6">
            The goal wasn't to make the platform look simpler.
          </h2>
          <p className="text-xl sm:text-2xl md:text-3xl text-amber-400 font-medium leading-relaxed">
            <strong>It was to make complex intelligence easier to understand, investigate, and act on.</strong>
          </p>
        </section>

        {/* Footer Navigation */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-zinc-400 hover:text-white transition-colors cursor-pointer group"
          >
            <span className="transition-transform group-hover:-translate-x-1">←</span>
            <span>Return to Selected Work</span>
          </button>

          {onNextCaseStudy && (
            <button
              type="button"
              onClick={onNextCaseStudy}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-amber-400 hover:text-amber-300 font-semibold transition-colors cursor-pointer group"
            >
              <span>Next Case Study</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </button>
          )}
        </div>

      </div>
    </article>
  );
};
