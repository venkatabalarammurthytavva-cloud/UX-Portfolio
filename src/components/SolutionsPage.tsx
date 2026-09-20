import React, { useEffect } from 'react';
import { CaseStudy } from '../types';
import { CASE_STUDIES } from '../data/portfolioData';

// Image assets
import crimeVisual from '../assets/images/crime_analytics_visual_1788106508732.jpg';
import crimeComplexGraph from '../assets/images/crime_intel_complex_graph_exact.png';
import crimeEvidenceWall from '../assets/images/crime_intel_evidence_wall_1788181384097.jpg';
import bobVisual from '../assets/images/bob_banking_audit_1788106457893.jpg';
import tedVisual from '../assets/images/ted_platform_visual_1788106429517.jpg';
import axisVisual from '../assets/images/axis_amc_wealth_1788106472766.jpg';
import finovationVisual from '../assets/images/finovation_platform_1788106489570.jpg';

interface SolutionsPageProps {
  onSelectCaseStudy?: (caseStudy: CaseStudy) => void;
  onOpenCrimeCaseStudy?: () => void;
  onOpenBOBCaseStudy?: () => void;
}

export const SolutionsPage: React.FC<SolutionsPageProps> = ({
  onSelectCaseStudy,
  onOpenCrimeCaseStudy,
  onOpenBOBCaseStudy,
}) => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, []);

  const handleOpenCrime = () => {
    if (onOpenCrimeCaseStudy) {
      onOpenCrimeCaseStudy();
    } else if (onSelectCaseStudy) {
      const cs = CASE_STUDIES.find((c) => c.id === 'crime-analytics-platform');
      if (cs) onSelectCaseStudy(cs);
    }
  };

  const handleOpenBOB = () => {
    if (onOpenBOBCaseStudy) {
      onOpenBOBCaseStudy();
    } else if (onSelectCaseStudy) {
      const cs = CASE_STUDIES.find((c) => c.id === 'bank-of-baroda-ux-audit');
      if (cs) onSelectCaseStudy(cs);
    }
  };

  const handleOpenProject = (id: string) => {
    if (id === 'crime-analytics-platform') {
      handleOpenCrime();
    } else if (id === 'bank-of-baroda-ux-audit') {
      handleOpenBOB();
    } else if (onSelectCaseStudy) {
      const cs = CASE_STUDIES.find((c) => c.id === id);
      if (cs) onSelectCaseStudy(cs);
    }
  };

  return (
    <div className="w-full bg-[#0D0D0E] text-[#e5e2e1] min-h-screen">
      {/* 
        Editorial narrow centered column (700px - 760px)
        Directly following existing navigation. NO HERO SECTION.
      */}
      <div className="max-w-[740px] mx-auto px-5 sm:px-6 pt-10 sm:pt-14 pb-28 sm:pb-36 flex flex-col divide-y divide-white/[0.07]">
        
        {/* =========================================================================
            SOLUTION 01: Crime Investigation Platform
        ========================================================================= */}
        <article id="solution-01" className="pb-24 sm:pb-32 flex flex-col gap-6 sm:gap-7">
          {/* Header metadata */}
          <div className="space-y-2">
            <div className="text-xs uppercase tracking-[0.18em] text-zinc-400 font-medium font-label-caps">
              SEPTEMBER 2024 · BIG DATA & INTELLIGENCE
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-white tracking-tight leading-tight">
              Crime Investigation Platform: Making complex intelligence easier to act on
            </h2>

            <p className="text-sm text-zinc-400 font-normal">
              Lead UX & Systems Designer · Law Enforcement Intelligence Console & Entity Graphs
            </p>
          </div>

          {/* Visual composition: Grouped screenshots with rounded corners and consistent width */}
          <div className="flex flex-col gap-3 sm:gap-4 my-2">
            {/* Row 1: Side-by-side details (Entity link-analysis graph & evidence board) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="rounded-xl overflow-hidden border border-white/10 bg-[#161618] shadow-lg aspect-[4/3]">
                <img
                  src={crimeComplexGraph}
                  alt="Crime Investigation Platform entity relationship graph"
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                />
              </div>
              <div className="rounded-xl overflow-hidden border border-white/10 bg-[#161618] shadow-lg aspect-[4/3]">
                <img
                  src={crimeEvidenceWall}
                  alt="Crime Investigation Platform lead correlation and evidence board"
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                />
              </div>
            </div>

            {/* Row 2: Full-width operations console */}
            <div className="rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 bg-[#161618] shadow-xl w-full">
              <img
                src={crimeVisual}
                alt="Crime Investigation Platform primary geospatial intelligence operations console"
                className="w-full h-auto object-cover"
                loading="eager"
              />
            </div>
          </div>

          {/* Editorial Challenge / Action / Result */}
          <div className="space-y-3.5 text-[15px] sm:text-base text-zinc-300 font-normal leading-relaxed">
            <p>
              <strong className="text-white font-semibold">Challenge: </strong>
              Law enforcement teams—including detectives, intelligence analysts, and patrol officers—struggled to correlate leads across fragmented cross-jurisdictional datasets. Navigating through disconnected tools for people, vehicles, locations, and incident timelines created significant cognitive drag and delayed time-critical field decisions.
            </p>

            <p>
              <strong className="text-white font-semibold">Action: </strong>
              Architected a high-density, dark-mode geospatial intelligence console from the ground up. Introduced interactive entity relationship graphs, unified multi-parameter search, incident timeline reconstruction, and progressive disclosure to streamline complex investigative inquiries.
            </p>

            <p>
              <strong className="text-white font-semibold">Result: </strong>
              Unified intelligence workflows across 2,100+ law enforcement agencies and 1B+ records, reduced incident pattern recognition time from hours to minutes, and drove ~$2.5M in enterprise commercial contracts.
            </p>
          </div>

          {/* Editorial navigation trigger */}
          <div className="pt-1">
            <button
              type="button"
              onClick={handleOpenCrime}
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-400 hover:text-emerald-300 transition-colors py-1 focus:outline-none focus:underline"
              aria-label="View full Crime Investigation Platform case study"
            >
              <span>View Full Case Study</span>
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </article>

        {/* =========================================================================
            SOLUTION 02: Bank of Baroda (BOB ePay & BOB World)
        ========================================================================= */}
        <article id="solution-02" className="pt-20 sm:pt-28 pb-24 sm:pb-32 flex flex-col gap-6 sm:gap-7">
          {/* Header metadata */}
          <div className="space-y-2">
            <div className="text-xs uppercase tracking-[0.18em] text-zinc-400 font-medium font-label-caps">
              OCTOBER 2023 · FINTECH & DIGITAL BANKING
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-white tracking-tight leading-tight">
              BOB ePay & BOB World: Frictionless mobile banking & lending journeys
            </h2>

            <p className="text-sm text-zinc-400 font-normal">
              Lead UX Designer · Heuristic UX Audit, Financial Workflows & Design Governance
            </p>
          </div>

          {/* Visual composition: Large high-resolution visual of the mobile banking audit */}
          <div className="my-2 w-full">
            <div className="rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 bg-[#161618] shadow-xl w-full">
              <img
                src={bobVisual}
                alt="Bank of Baroda BOB ePay and BOB World mobile banking UX audit and workflow redesign"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Editorial Challenge / Action / Result */}
          <div className="space-y-3.5 text-[15px] sm:text-base text-zinc-300 font-normal leading-relaxed">
            <p>
              <strong className="text-white font-semibold">Challenge: </strong>
              Bank of Baroda retail and commercial customers faced friction across BOB World and BOB ePay. Crucial banking journeys required unnecessary steps, key navigation paths were obscured, and compliance gates triggered high application drop-offs in loan evaluation workflows.
            </p>

            <p>
              <strong className="text-white font-semibold">Action: </strong>
              Conducted extensive heuristic evaluations and end-to-end journey audits. Redesigned the information architecture with progressive disclosure, real-time risk indicators, automated KYC document checks, and standardized design tokens across retail and commercial lending branches.
            </p>

            <p>
              <strong className="text-white font-semibold">Result: </strong>
              Accelerated loan origination speed by 30%, reduced step friction to cut customer drop-offs by 42%, and eliminated 6 redundant verification screens across retail lending and commercial SME divisions.
            </p>
          </div>

          {/* Editorial navigation trigger */}
          <div className="pt-1">
            <button
              type="button"
              onClick={handleOpenBOB}
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-400 hover:text-emerald-300 transition-colors py-1 focus:outline-none focus:underline"
              aria-label="View full Bank of Baroda UX audit case study"
            >
              <span>View Full Case Study</span>
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </article>

        {/* =========================================================================
            SOLUTION 03: TED AI Platform
        ========================================================================= */}
        <article id="solution-03" className="pt-20 sm:pt-28 pb-24 sm:pb-32 flex flex-col gap-6 sm:gap-7">
          {/* Header metadata */}
          <div className="space-y-2">
            <div className="text-xs uppercase tracking-[0.18em] text-zinc-400 font-medium font-label-caps">
              APRIL 2023 · ENTERPRISE AI & OBSERVABILITY
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-white tracking-tight leading-tight">
              TED: AI-powered value stream intelligence & engineering observability
            </h2>

            <p className="text-sm text-zinc-400 font-normal">
              Staff Product Designer · 0-to-1 Product Architecture, Telemetry & Design System
            </p>
          </div>

          {/* Visual composition: Large visual composition */}
          <div className="my-2 w-full">
            <div className="rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 bg-[#161618] shadow-xl w-full">
              <img
                src={tedVisual}
                alt="TED AI-powered value stream intelligence and engineering observability dashboard"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Editorial Challenge / Action / Result */}
          <div className="space-y-3.5 text-[15px] sm:text-base text-zinc-300 font-normal leading-relaxed">
            <p>
              <strong className="text-white font-semibold">Challenge: </strong>
              Enterprise engineering leaders and DevOps directors lacked unified visibility into software delivery bottlenecks across hundreds of disconnected developer tools, CI/CD pipelines, and delivery metrics.
            </p>

            <p>
              <strong className="text-white font-semibold">Action: </strong>
              Engineered the zero-to-one product experience and comprehensive design system for an AI-powered intelligence suite, introducing automated bottleneck discovery, proactive team health telemetry, and sub-1.2s metric aggregation.
            </p>

            <p>
              <strong className="text-white font-semibold">Result: </strong>
              Enabled client organizations to achieve +30% higher development velocity and workflow transparency, unified telemetry pipelines from 200+ developer platforms into actionable executive dashboards, and created a 420-component design system.
            </p>
          </div>

          {/* Editorial navigation trigger */}
          <div className="pt-1">
            <button
              type="button"
              onClick={() => handleOpenProject('ted-ai-platform')}
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-400 hover:text-emerald-300 transition-colors py-1 focus:outline-none focus:underline"
              aria-label="View TED platform details"
            >
              <span>View Project Details</span>
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </article>

        {/* =========================================================================
            SOLUTION 04: Axis AMC Wealth Management
        ========================================================================= */}
        <article id="solution-04" className="pt-20 sm:pt-28 pb-24 sm:pb-32 flex flex-col gap-6 sm:gap-7">
          {/* Header metadata */}
          <div className="space-y-2">
            <div className="text-xs uppercase tracking-[0.18em] text-zinc-400 font-medium font-label-caps">
              NOVEMBER 2022 · WEALTH & ASSET MANAGEMENT
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-white tracking-tight leading-tight">
              Axis AMC: Wealth management & institutional portfolio workstation
            </h2>

            <p className="text-sm text-zinc-400 font-normal">
              Lead Product Designer · Multi-Asset Allocation, Interactive Telemetry & GIFT City
            </p>
          </div>

          {/* Visual composition: Large high-resolution visual */}
          <div className="my-2 w-full">
            <div className="rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 bg-[#161618] shadow-xl w-full">
              <img
                src={axisVisual}
                alt="Axis AMC wealth management workstation and institutional investment experience"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Editorial Challenge / Action / Result */}
          <div className="space-y-3.5 text-[15px] sm:text-base text-zinc-300 font-normal leading-relaxed">
            <p>
              <strong className="text-white font-semibold">Challenge: </strong>
              High-net-worth and institutional investors needed to monitor complex multi-asset allocations, NAV benchmarks, and offshore funds without navigating cluttered legacy financial tables, obscuring performance attribution and delaying capital allocations.
            </p>

            <p>
              <strong className="text-white font-semibold">Action: </strong>
              Created a high-density, data-dense portfolio workstation featuring interactive asset allocation curves, real-time NAV tracking, historical scenario modeling, and streamlined GIFT City investor onboarding.
            </p>

            <p>
              <strong className="text-white font-semibold">Result: </strong>
              Transformed digital investment journeys for a ₹3.6L+ Cr QAAUM ecosystem, delivering +45% digital inflow growth and accelerating institutional onboarding by 3.2x.
            </p>
          </div>

          {/* Editorial navigation trigger */}
          <div className="pt-1">
            <button
              type="button"
              onClick={() => handleOpenProject('axis-amc-wealth')}
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-400 hover:text-emerald-300 transition-colors py-1 focus:outline-none focus:underline"
              aria-label="View Axis AMC project details"
            >
              <span>View Project Details</span>
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </article>

        {/* =========================================================================
            SOLUTION 05: Finovation Platform
        ========================================================================= */}
        <article id="solution-05" className="pt-20 sm:pt-28 pb-10 flex flex-col gap-6 sm:gap-7">
          {/* Header metadata */}
          <div className="space-y-2">
            <div className="text-xs uppercase tracking-[0.18em] text-zinc-400 font-medium font-label-caps">
              MAY 2022 · ENTERPRISE LENDING & OPERATIONS
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-white tracking-tight leading-tight">
              Finovation Platform: Enterprise lending operations & automated underwriting
            </h2>

            <p className="text-sm text-zinc-400 font-normal">
              Product Systems Architect · Workflow Builders, Multi-Tier Approvals & Design Systems
            </p>
          </div>

          {/* Visual composition: Large high-resolution visual */}
          <div className="my-2 w-full">
            <div className="rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 bg-[#161618] shadow-xl w-full">
              <img
                src={finovationVisual}
                alt="Finovation enterprise lending operations and business management platform"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Editorial Challenge / Action / Result */}
          <div className="space-y-3.5 text-[15px] sm:text-base text-zinc-300 font-normal leading-relaxed">
            <p>
              <strong className="text-white font-semibold">Challenge: </strong>
              Financial operations teams and loan underwriters navigated disjointed spreadsheets and legacy back-office tools, generating manual data entry errors and prolonged turnaround times on multi-million dollar facilities.
            </p>

            <p>
              <strong className="text-white font-semibold">Action: </strong>
              Architected a unified enterprise workstation featuring visual workflow builders, multi-tier approval matrixes, automated credit rule engines, and instant immutable compliance audit logging.
            </p>

            <p>
              <strong className="text-white font-semibold">Result: </strong>
              Supported $28B+ in disbursements with 100% audit accuracy, cut loan underwriting cycle times by 54%, and established a reusable enterprise component library adopted across 18 teams.
            </p>
          </div>

          {/* Editorial navigation trigger */}
          <div className="pt-1">
            <button
              type="button"
              onClick={() => handleOpenProject('finovation-platform')}
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-400 hover:text-emerald-300 transition-colors py-1 focus:outline-none focus:underline"
              aria-label="View Finovation platform details"
            >
              <span>View Project Details</span>
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </article>

      </div>
    </div>
  );
};
