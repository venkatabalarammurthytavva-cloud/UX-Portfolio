import React, { useEffect } from 'react';

interface BOBEpayCaseStudyProps {
  onBack: () => void;
  onNextCaseStudy?: () => void;
}

export const BOBEpayCaseStudy: React.FC<BOBEpayCaseStudyProps> = ({
  onBack,
  onNextCaseStudy,
}) => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, []);

  return (
    <article className="relative w-full bg-[#09090b] text-[#e4e4e7] min-h-screen selection:bg-orange-500/25 selection:text-orange-200">
      
      {/* Top Header Navigation */}
      <header className="sticky top-20 z-30 w-full bg-[#09090b]/90 backdrop-blur-lg border-b border-white/10 px-6 sm:px-12 py-4">
        <div className="max-w-[1080px] mx-auto flex items-center justify-between">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-zinc-400 hover:text-orange-300 transition-colors cursor-pointer group"
            aria-label="Return to Selected Work"
          >
            <span className="transition-transform group-hover:-translate-x-1">←</span>
            <span>Back to Selected Work</span>
          </button>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-300 text-[11px] tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
              Mobile Banking · UX Audit
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
              BOB ePay & BOB World UX Audit
            </h1>

            <h2 className="text-xl sm:text-2xl md:text-3xl text-zinc-200 font-light leading-relaxed">
              Making everyday banking easier to navigate
            </h2>

            <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed pt-2">
              Bank of Baroda customers were finding it difficult to complete everyday banking tasks across its <strong className="font-semibold text-white">BOB World and BOB ePay mobile apps</strong>. Some journeys required unnecessary effort, important features weren't always easy to find, and accessibility issues made parts of the experience harder to use.
            </p>
          </div>

          {/* Role & Tags Bar */}
          <div className="py-5 border-y border-white/10">
            <div className="text-xs sm:text-sm text-orange-400 font-medium tracking-wide">
              <strong>Senior Product Designer · UX Research · UX Audit · Competitive Analysis · Information Architecture · Accessibility</strong>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION: CUSTOMERS WERE STRUGGLING
        ========================================================================= */}
        <section id="customers-struggling" className="flex flex-col gap-6 max-w-[820px]">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
            Customers were struggling
          </h2>

          <div className="space-y-5 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            <p>
              The management team was seeing increasing complaints across online channels, Play Store and App Store reviews, along with recurring customer queries and support tickets.
            </p>
            <p>
              Customers reported <strong className="font-semibold text-zinc-100">screens getting stuck, unnecessary steps during tasks, important features being difficult to find, and everyday tasks taking more clicks than expected.</strong>
            </p>
            <div className="pt-2">
              <p className="text-lg sm:text-xl text-white font-medium leading-relaxed border-l-2 border-orange-400 pl-5">
                <strong>So I dug into the problems at their roots, looking beyond individual screens to understand what was making the mobile apps difficult to use—and find a better way forward.</strong>
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION: THE FRICTION
        ========================================================================= */}
        <section id="the-friction" className="flex flex-col gap-6 max-w-[820px]">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
            The friction
          </h2>

          <div className="space-y-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            <p>
              The problems weren't isolated to one journey. They appeared across <strong className="font-semibold text-zinc-100">navigation, transactions, search, rewards, nominee updates, error handling, and accessibility.</strong>
            </p>
            <p>
              What looked like individual complaints pointed to broader issues with <strong className="font-semibold text-zinc-100">information hierarchy, interaction flow, and how the product guided users through tasks.</strong>
            </p>
          </div>
        </section>

        {/* =========================================================================
            SECTION: WHAT USERS TOLD US
        ========================================================================= */}
        <section id="what-users-told-us" className="flex flex-col gap-6 max-w-[820px]">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
            What users told us
          </h2>

          <div className="space-y-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            <p>
              We spoke with <strong className="font-bold text-orange-400">30+ customers</strong> to understand how they used the apps, where they struggled, and what they expected from their banking experience.
            </p>
            <p>
              Their feedback helped reveal recurring patterns and gave us a clearer picture of where the experience was falling short.
            </p>
          </div>
        </section>

        {/* =========================================================================
            SECTION: THE CONSTRAINTS
        ========================================================================= */}
        <section id="the-constraints" className="flex flex-col gap-6 max-w-[820px]">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
            The constraints
          </h2>

          <div className="space-y-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            <p>
              I wasn't redesigning the apps from scratch.
            </p>
            <p>
              There were existing journeys, business requirements, technical dependencies, and a large number of features to consider.
            </p>
            <div className="pt-2">
              <p className="text-lg text-zinc-100 font-medium">
                <strong>The goal was to improve the areas causing the most friction without redesigning everything.</strong>
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION: COMPETITIVE ANALYSIS
        ========================================================================= */}
        <section id="competitive-analysis" className="flex flex-col gap-6 max-w-[820px]">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
            Competitive Analysis
          </h2>

          <div className="space-y-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            <p>
              I looked at how other banking experiences handled navigation, information hierarchy, search, and common interactions.
            </p>
            <p>
              This helped me identify familiar patterns and opportunities that could make the existing experience easier to use.
            </p>
          </div>
        </section>

        {/* =========================================================================
            SECTION: FINDING THE PATTERNS
        ========================================================================= */}
        <section id="finding-the-patterns" className="flex flex-col gap-6 max-w-[820px]">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
            Finding the patterns
          </h2>

          <div className="space-y-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            <p>
              I brought together <strong className="font-semibold text-zinc-100">User Interviews, Affinity Mapping, SWOT Analysis, UX Audit, Competitive Analysis, User Flows, Information Architecture, and Wireframing</strong>.
            </p>
            <p>
              This helped me move from individual complaints to <strong className="font-semibold text-orange-400">specific UX problems and opportunities.</strong>
            </p>
          </div>
        </section>

        {/* =========================================================================
            SECTION: THE RECOMMENDATIONS
        ========================================================================= */}
        <section id="the-recommendations" className="flex flex-col gap-10 max-w-[860px]">
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
              The recommendations
            </h2>
            <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
              I turned the audit findings into <strong className="font-semibold text-white">practical UX recommendations</strong> across the key journeys.
            </p>
          </div>

          <div className="flex flex-col gap-8 border-l border-white/10 pl-6 sm:pl-8">
            {/* Recommendation 1 */}
            <div className="space-y-2">
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Navigation & Information Architecture
              </h3>
              <p className="text-base text-zinc-300 font-normal leading-relaxed">
                Made important features easier to find and created clearer paths through the experience.
              </p>
            </div>

            {/* Recommendation 2 */}
            <div className="space-y-2">
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Transaction Journeys
              </h3>
              <p className="text-base text-zinc-300 font-normal leading-relaxed">
                Recommended simpler interactions and clearer presentation of information, actions, confirmations, and errors.
              </p>
            </div>

            {/* Recommendation 3 */}
            <div className="space-y-2">
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Error Handling
              </h3>
              <p className="text-base text-zinc-300 font-normal leading-relaxed">
                Made errors easier to understand and gave users clearer direction on what to do next.
              </p>
            </div>

            {/* Recommendation 4 */}
            <div className="space-y-2">
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Accessibility
              </h3>
              <p className="text-base text-zinc-300 font-normal leading-relaxed">
                Identified accessibility issues and recommended improvements to make important interactions easier to use.
              </p>
            </div>

            {/* Recommendation 5 */}
            <div className="space-y-2">
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Feature Discovery
              </h3>
              <p className="text-base text-zinc-300 font-normal leading-relaxed">
                Improved the visibility and presentation of important banking functions such as rewards and nominee updates.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION: AI-ASSISTED BANKING
        ========================================================================= */}
        <section id="ai-assisted-banking" className="flex flex-col gap-6 max-w-[820px]">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
            AI-assisted banking
          </h2>

          <div className="space-y-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            <p>
              Some tasks still required users to navigate through several screens.
            </p>
            <p>
              I proposed an <strong className="font-semibold text-zinc-100">AI banking assistant</strong> that could handle certain repetitive tasks on behalf of users.
            </p>
            <p>
              Instead of making users figure out where to go, the assistant could understand what they wanted and help them complete supported tasks more directly.
            </p>
            <div className="pt-2">
              <p className="text-lg sm:text-xl text-orange-400 font-semibold leading-relaxed">
                <strong>Let users tell the app what they need instead of making them figure out where to go.</strong>
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION: WHAT CHANGED
        ========================================================================= */}
        <section id="what-changed" className="flex flex-col gap-12 max-w-[860px]">
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
              What changed
            </h2>
          </div>

          {/* Sub-block 1: From friction to clearer journeys */}
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              From friction to clearer journeys.
            </h3>

            <p className="text-base text-zinc-300 font-normal">
              <strong>Before → After</strong>
            </p>

            <p className="text-base text-zinc-300 font-normal leading-relaxed">
              Show your strongest <strong>Before → After</strong> screens here.
            </p>

            <p className="text-base text-zinc-300 font-normal leading-relaxed">
              Focus on the areas where your recommendations made the biggest difference:
            </p>

            <p className="text-base sm:text-lg text-orange-400 font-medium">
              <strong>Navigation · Task Flow · Information Hierarchy · Error Handling · Feature Discovery</strong>
            </p>
          </div>

          {/* Sub-block 2: Measured outcomes */}
          <div className="space-y-6 pt-6 border-t border-white/10">
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Measured outcomes
            </h3>

            <div className="space-y-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
              <div className="space-y-1">
                <div className="text-xl font-bold text-white">
                  <strong>[CONFIRMED BOB METRIC]</strong>
                </div>
                <div className="text-zinc-400">[What it improved]</div>
              </div>

              <div className="space-y-1">
                <div className="text-xl font-bold text-white">
                  <strong>[CONFIRMED BOB METRIC]</strong>
                </div>
                <div className="text-zinc-400">[What it improved/reduced]</div>
              </div>

              <div className="space-y-1 pt-2">
                <div className="text-3xl font-extrabold text-orange-400">
                  <strong>30+</strong>
                </div>
                <div className="text-zinc-200 font-medium">Customers involved in research</div>
              </div>

              <p className="pt-4">
                The audit turned recurring customer frustrations into a <strong className="font-semibold text-white">focused set of UX improvements that the product team could act on.</strong>
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION: WHAT I LEARNED
        ========================================================================= */}
        <section id="what-i-learned" className="flex flex-col gap-6 max-w-[820px]">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
            What I learned
          </h2>

          <div className="space-y-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            <p>
              A banking experience can feel difficult even when every feature technically works.
            </p>
            <p>
              Good banking UX is about helping users <strong className="font-semibold text-zinc-100">find what they need, understand what to do, complete the task, and recover when something goes wrong.</strong>
            </p>
            <p>
              This project reinforced the importance of looking beyond individual screens and understanding the complete journey.
            </p>
          </div>
        </section>

        {/* =========================================================================
            CLOSING STATEMENT
        ========================================================================= */}
        <section id="closing-statement" className="py-12 sm:py-20 border-t border-white/10 max-w-[900px]">
          <h2 className="text-2xl sm:text-4xl md:text-[42px] font-bold text-white tracking-tight leading-[1.25] mb-6">
            The goal wasn't to redesign banking for the sake of redesigning it.
          </h2>
          <p className="text-xl sm:text-2xl md:text-3xl text-orange-400 font-medium leading-relaxed">
            <strong>It was to remove the friction that made everyday tasks harder than they needed to be.</strong>
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
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-orange-400 hover:text-orange-300 font-semibold transition-colors cursor-pointer group"
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
