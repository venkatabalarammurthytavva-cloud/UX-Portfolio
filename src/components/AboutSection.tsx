import React from 'react';
import { 
  PROFILE_IMAGE, 
  SELECTED_CLIENTS, 
  DOMAINS_WORKED_UPON 
} from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <div className="relative w-full max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 py-8 space-y-20 text-[#e5e2e1] animate-fadeIn">
      {/* Unified Architect Dot / Line Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none grid-bg opacity-70" aria-hidden="true" />

      {/* Structural Vertical Grid Guidelines (Architect Enterprise style) */}
      <div className="absolute inset-0 pointer-events-none z-0 hidden lg:block" aria-hidden="true">
        <div className="absolute top-0 bottom-0 left-[25%] w-[1px] bg-[#27272A]/40" />
        <div className="absolute top-0 bottom-0 left-[50%] w-[1px] bg-[#27272A]/40" />
        <div className="absolute top-0 bottom-0 left-[75%] w-[1px] bg-[#27272A]/40" />
      </div>

      {/* ========================================================================= */}
      {/* SECTION 01: INTRODUCTION / HERO                                          */}
      {/* ========================================================================= */}
      <section 
        id="hero"
        aria-label="Introduction"
        className="relative min-h-[580px] flex items-center border-t border-[#27272A] pt-12 pb-6"
      >
        {/* Section Pill Label */}
        <div className="absolute -top-3 left-4 sm:left-6 font-label-caps text-[11px] tracking-widest text-emerald-400 bg-[#0D0D0E] px-3 py-0.5 border border-emerald-500/40 rounded-full z-30 uppercase shadow-sm flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
          <span>01 / INTRODUCTION</span>
        </div>

        {/* Ambient Backlight Glow */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-end">
          <div className="w-[500px] sm:w-[650px] h-[500px] sm:h-[650px] bg-emerald-500/10 rounded-full blur-[140px] opacity-40 translate-x-1/4 -translate-y-10" />
        </div>

        {/* Masked Portrait with Gradient Blending */}
        <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden flex justify-end items-end md:items-start opacity-70 sm:opacity-90">
          <div className="relative w-full max-w-[560px] h-full flex justify-end">
            <img 
              src={PROFILE_IMAGE} 
              alt="Balaram Portrait"
              className="w-full max-w-[480px] lg:max-w-[540px] h-auto object-cover object-top filter grayscale contrast-110 brightness-95"
              style={{
                maskImage: 'linear-gradient(to right, transparent 0%, black 25%), linear-gradient(to top, transparent 0%, black 20%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 25%), linear-gradient(to top, transparent 0%, black 20%)'
              }}
            />
          </div>
        </div>

        {/* Gradient overlays to guarantee crisp text legibility */}
        <div className="absolute inset-0 z-15 pointer-events-none bg-gradient-to-r from-[#0D0D0E] via-[#0D0D0E]/85 to-transparent sm:w-3/4" />
        <div className="absolute inset-0 z-15 pointer-events-none bg-gradient-to-t from-[#0D0D0E] via-transparent to-transparent sm:hidden" />

        {/* Content Container */}
        <div className="relative z-20 w-full py-8 sm:py-12">
          <div className="max-w-2xl space-y-6">
            {/* Distinct Introduction Tag */}
            <div className="flex items-center gap-2">
              <span className="font-label-caps text-xs font-semibold text-emerald-400 uppercase tracking-widest">
                Senior Product & UX Designer
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-[-0.04em]">
              Designing Systems.<br />
              <span className="text-[#e4e2e3]">Delivering Clarity.</span>
            </h1>

            <p className="font-body-md text-base sm:text-lg text-[#c5c6ca] leading-relaxed max-w-xl">
              I’m Balaram, a <span className="text-white font-semibold">Senior Product & UX Designer</span> who specializes in <span className="text-white font-semibold">turning complexity into clarity</span>. Across 5+ years in FinTech, banking, B2B SaaS, and data-heavy products, I’ve designed experiences where users, business requirements, and complex systems intersect.
            </p>

            <p className="font-body-md text-sm sm:text-base text-[#c5c6ca]/90 leading-relaxed max-w-xl">
              I bring a systems-oriented approach to product design—connecting research, information architecture, interaction design, visual systems, and high-fidelity execution to create products that are easier to understand and scale. I care about making complex things feel simple without making them simplistic.
            </p>

            {/* Status & Resume Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#1A1A1C] border border-[#27272A] rounded-full font-label-caps text-xs text-[#e5e2e1]">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Hyderabad, India</span>
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/30 rounded-full font-label-caps text-xs text-emerald-400">
                <span>Available for Systems & FinTech Advisory</span>
              </span>

              <a
                href="/Balaram.tavva_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-white hover:bg-neutral-200 text-black font-semibold text-xs rounded-full transition-all shadow-md active:scale-95 ml-auto sm:ml-0"
              >
                <span>View Resume</span>
                <span className="material-symbols-outlined text-sm">north_east</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 02: TIMELINE (CAREER VECTOR)                                     */}
      {/* ========================================================================= */}
      <section 
        id="experience"
        aria-labelledby="career-vector-heading"
        className="relative border-t border-[#27272A] pt-14"
      >
        <div className="absolute -top-3 left-4 sm:left-6 font-label-caps text-[11px] tracking-widest text-[#c5c6ca] bg-[#0D0D0E] px-2.5 py-0.5 border border-[#27272A] rounded z-20 uppercase">
          02 / TIMELINE
        </div>

        <h2 id="career-vector-heading" className="font-display text-3xl sm:text-4xl font-bold text-white mb-12 tracking-tight">
          Career Vector
        </h2>

        <div className="relative border-l border-[#27272A] ml-3 sm:ml-6 pl-6 sm:pl-10 space-y-12">
          {/* Timeline Node 1: NeoSOFT (2024 - Present) */}
          <div className="relative group">
            <div className="absolute -left-[31px] sm:-left-[47px] top-1 w-3.5 h-3.5 bg-[#0D0D0E] border-2 border-emerald-400 rounded-full z-10 group-hover:bg-emerald-400 transition-colors shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
            
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2 gap-2">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                Senior UI/UX Designer
              </h3>
              <div className="font-label-caps text-xs text-emerald-400 flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm">calendar_today</span>
                <span>2024 – Present</span>
              </div>
            </div>

            <div className="font-label-caps text-xs text-[#c5c6ca] mb-4">
              NeoSOFT
            </div>

            <div className="bento-card p-6 sm:p-7 rounded-xl w-full lg:w-4/5">
              <p className="text-[#c5c6ca] text-sm sm:text-base leading-relaxed mb-5">
                Leading end-to-end product design across complex FinTech and enterprise platforms, from UX research and information architecture to high-fidelity UI and design systems. Currently shaping the Bank of Baroda mobile banking revamp and contributing to financial products including Axis Asset Management, translating complex workflows and dense data into clearer, more usable experiences.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full font-label-caps text-[10px] uppercase tracking-widest text-[#e5e2e1]">
                  FINTECH
                </span>
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full font-label-caps text-[10px] uppercase tracking-widest text-[#e5e2e1]">
                  ENTERPRISE UX
                </span>
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full font-label-caps text-[10px] uppercase tracking-widest text-[#e5e2e1]">
                  PRODUCT DESIGN
                </span>
              </div>
            </div>
          </div>

          {/* Timeline Node 2: Qentelli (2022 - 2024) */}
          <div className="relative group">
            <div className="absolute -left-[31px] sm:-left-[47px] top-1 w-3.5 h-3.5 bg-[#0D0D0E] border-2 border-[#8F9194] rounded-full z-10 group-hover:border-white transition-colors" />
            
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2 gap-2">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-[#e5e2e1]">
                Senior CX Designer
              </h3>
              <div className="font-label-caps text-xs text-[#c5c6ca] flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm">calendar_today</span>
                <span>2022 – 2024</span>
              </div>
            </div>

            <div className="font-label-caps text-xs text-[#c5c6ca] mb-4">
              Qentelli
            </div>

            <div className="bento-card p-6 sm:p-7 rounded-xl w-full lg:w-4/5 bg-[#141313]">
              <p className="text-[#c5c6ca] text-sm sm:text-base leading-relaxed mb-5">
                Designed complex B2B and enterprise products across payments, engineering, compliance, and digital transformation. Worked across MYnilpay, Brierley+Partners’ design system governance, TED engineering analytics, and compliance platforms—connecting research, interaction design, and scalable systems to make complex workflows easier to understand and operate.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full font-label-caps text-[10px] uppercase tracking-widest text-[#e5e2e1]">
                  B2B SAAS
                </span>
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full font-label-caps text-[10px] uppercase tracking-widest text-[#e5e2e1]">
                  DESIGN SYSTEMS
                </span>
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full font-label-caps text-[10px] uppercase tracking-widest text-[#e5e2e1]">
                  COMPLEX WORKFLOWS
                </span>
              </div>
            </div>
          </div>

          {/* Timeline Node 3: Get Infy Solutions (2021 - 2022) */}
          <div className="relative group">
            <div className="absolute -left-[31px] sm:-left-[47px] top-1 w-3.5 h-3.5 bg-[#0D0D0E] border-2 border-[#8F9194] rounded-full z-10 group-hover:border-white transition-colors" />
            
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2 gap-2">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-[#e5e2e1]">
                UI/UX Designer
              </h3>
              <div className="font-label-caps text-xs text-[#c5c6ca] flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm">calendar_today</span>
                <span>2021 – 2022</span>
              </div>
            </div>

            <div className="font-label-caps text-xs text-[#c5c6ca] mb-4">
              Get Infy Solutions
            </div>

            <div className="bento-card p-6 sm:p-7 rounded-xl w-full lg:w-4/5 bg-[#141313]">
              <p className="text-[#c5c6ca] text-sm sm:text-base leading-relaxed mb-5">
                Built product design foundations across portfolio management, lending, crypto, and IoT marketplace experiences. Led design for multiple digital products while collaborating with a small design team, developing an end-to-end approach spanning user research, information architecture, interaction design, prototyping, and visual design.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full font-label-caps text-[10px] uppercase tracking-widest text-[#e5e2e1]">
                  PRODUCT DESIGN
                </span>
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full font-label-caps text-[10px] uppercase tracking-widest text-[#e5e2e1]">
                  FINTECH
                </span>
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full font-label-caps text-[10px] uppercase tracking-widest text-[#e5e2e1]">
                  UX RESEARCH
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 03: SELECTED CLIENTS                                             */}
      {/* ========================================================================= */}
      <section 
        id="clients"
        aria-labelledby="clients-heading"
        className="relative border-t border-[#27272A] pt-14"
      >
        <div className="absolute -top-3 left-4 sm:left-6 font-label-caps text-[11px] tracking-widest text-[#c5c6ca] bg-[#0D0D0E] px-2.5 py-0.5 border border-[#27272A] rounded z-20 uppercase">
          03 / CLIENTS
        </div>

        <div className="mb-10 border-b border-[#27272A] pb-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="material-symbols-outlined text-white text-2xl">work</span>
            <h2 id="clients-heading" className="font-display text-2xl sm:text-3xl font-bold text-white">
              Selected Clients
            </h2>
          </div>
          <p className="font-body-md text-sm sm:text-base text-[#c5c6ca] max-w-3xl">
            I've designed digital products across banking, wealth management, fintech, retail, enterprise platforms, and emerging digital experiences.
          </p>
        </div>

        {/* 6 Client Bento Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SELECTED_CLIENTS.map((client, idx) => (
            <div 
              key={idx}
              className={`bento-card p-7 flex flex-col justify-between min-h-[160px] rounded-xl group transition-all duration-300 ${
                client.isFeatured ? 'bg-[#201F1F] border-[#3F3F46]' : 'bg-[#1A1A1C]'
              } hover:border-emerald-400/50 hover:bg-[#252424]`}
            >
              <div>
                <h3 className="font-display text-xl font-bold text-white group-hover:text-emerald-400 transition-colors mb-2">
                  {client.name}
                </h3>
              </div>
              <p className="font-label-caps text-[11px] text-[#c5c6ca] uppercase tracking-widest pt-4 border-t border-[#27272A]/60">
                {client.scope}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 04: DOMAINS WORKED UPON (CAPABILITIES)                           */}
      {/* ========================================================================= */}
      <section 
        id="capabilities"
        aria-labelledby="capabilities-heading"
        className="relative border-t border-[#27272A] pt-14"
      >
        <div className="absolute -top-3 left-4 sm:left-6 font-label-caps text-[11px] tracking-widest text-[#c5c6ca] bg-[#0D0D0E] px-2.5 py-0.5 border border-[#27272A] rounded z-20 uppercase">
          04 / CAPABILITIES
        </div>

        <div className="flex items-center gap-3 mb-8 border-b border-[#27272A] pb-6">
          <span className="material-symbols-outlined text-white text-2xl">domain</span>
          <h2 id="capabilities-heading" className="font-display text-2xl sm:text-3xl font-bold text-white">
            Domains Worked Upon
          </h2>
        </div>

        {/* 11 Domains Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {DOMAINS_WORKED_UPON.map((domain) => (
            <div 
              key={domain.id}
              className="bento-card p-6 rounded-xl group transition-all duration-200 hover:bg-[#201F1F] hover:border-emerald-500/40 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between mb-4">
                  <span className="material-symbols-outlined text-emerald-400 text-2xl group-hover:scale-110 transition-transform duration-200">
                    {domain.icon}
                  </span>
                </div>
                <h3 className="font-label-caps text-xs uppercase tracking-wider text-white font-semibold mb-1.5">
                  {domain.title}
                </h3>
                <p className="text-[#c5c6ca] text-xs leading-relaxed opacity-80">
                  {domain.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#27272A]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <p className="text-emerald-400 text-[11px] font-label-caps uppercase tracking-tight">
                  → {domain.highlight}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

