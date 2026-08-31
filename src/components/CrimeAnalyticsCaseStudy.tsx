import React, { useState, useEffect } from 'react';
import { CrimeAnalyticsLogo } from './BrandLogos';
import crimeVisual from '../assets/images/crime_analytics_visual_1788106508732.jpg';

interface CrimeAnalyticsCaseStudyProps {
  onBack: () => void;
  onNextCaseStudy: () => void;
}

export const CrimeAnalyticsCaseStudy: React.FC<CrimeAnalyticsCaseStudyProps> = ({
  onBack,
  onNextCaseStudy,
}) => {
  // State for interactive elements in the case study
  const [activePersona, setActivePersona] = useState<number>(0);
  const [activeWireframe, setActiveWireframe] = useState<'tri-view' | 'chronological' | 'search-graph'>('tri-view');
  const [selectedEntityNode, setSelectedEntityNode] = useState<string>('poi-1');
  const [transformationStep, setTransformationStep] = useState<'silo' | 'connected' | 'intelligence'>('connected');

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, []);

  // Persona Data (Role-based, NDA-safe)
  const PERSONAS = [
    {
      role: "Crime Analyst",
      badge: "Pattern & Trend Discovery",
      avatarIcon: "insights",
      primaryGoal: "Identify cross-jurisdiction serial patterns, temporal spikes, and spatial hotspot anomalies across macro incident datasets.",
      keyPainPoint: "Exporting raw records across 5+ disconnected SQL and CAD databases into Excel and GIS tools just to detect a basic repeating modus operandi.",
      informationNeeded: "Aggregated incident clusters, day-of-week heatmaps, MO similarities, historical baselines, and cross-boundary correlation flags.",
      decisionToMake: "Where should tactical patrol resources and specialized intervention units be preemptively deployed next shift?"
    },
    {
      role: "Lead Investigator / Detective",
      badge: "Evidentiary Link Analysis",
      avatarIcon: "fingerprint",
      primaryGoal: "Build a coherent, legally sound investigative timeline linking suspect entities, vehicles, and co-offenders to specific crime scenes.",
      keyPainPoint: "Critical connections are buried in 40-page narrative case notes; no visual way to trace secondary relationships without manually drawing whiteboards.",
      informationNeeded: "Direct & indirect ties between persons of interest, registered vehicles, known associate rosters, and verified timestamped alibis.",
      decisionToMake: "Is there sufficient corroborating link evidence and multi-point entity triangulation to establish probable cause for a search warrant?"
    },
    {
      role: "Tactical Operations Officer",
      badge: "Real-Time Field Triage",
      avatarIcon: "shield",
      primaryGoal: "Rapidly assess real-time threat levels, active warrants, and associate networks before executing field operations or high-risk stops.",
      keyPainPoint: "High cognitive friction and information latency; legacy interfaces overload mobile terminals with dense unformatted tables during fast-moving events.",
      informationNeeded: "Immediate cautionary flags (weapons, flight risk), geofenced active alerts, vehicle registration histories, and instant associate summaries.",
      decisionToMake: "What immediate officer safety risks exist at this address right now, and what backup profile is mandated?"
    },
    {
      role: "Command Staff / Decision-Maker",
      badge: "Strategic Resource Governance",
      avatarIcon: "account_balance",
      primaryGoal: "Monitor division-wide case clearance metrics, inter-agency resource sharing, and strategic crime reduction program efficacy.",
      keyPainPoint: "Granular case-level systems lack executive synthesis, forcing manual weekly slide deck preparation by senior staff.",
      informationNeeded: "Jurisdiction-wide clearance velocity, unit workload distribution, hot spot suppression efficacy, and multi-agency collaboration logs.",
      decisionToMake: "How should municipal safety budgets, specialized task forces, and technology investments be allocated across sectors?"
    }
  ];

  // Competitor Matrix Data (High-level, public observations)
  const COMPETITORS = [
    {
      name: "Peregrine",
      category: "Enterprise Data Integration",
      overview: "Comprehensive ingestion of disparate enterprise public safety data into unified data layers.",
      strengths: "Broad multi-source data ingestion, robust cloud architecture, and high data reliability across municipal departments.",
      friction: "Steep learning curve for non-technical detectives; requires significant query configuration before surfacing visual relationship insights.",
      opportunity: "Introduce intuitive visual-first entity graphing that enables detectives to explore relationships without constructing complex query syntax."
    },
    {
      name: "Force Metrics",
      category: "Frontline Field Intelligence",
      overview: "Rapid 911 dispatch enrichment and situational awareness for frontline patrol officers.",
      strengths: "Fast-loading mobile experiences, streamlined contextual summaries for 911 dispatch calls, intuitive field triage.",
      friction: "Primarily optimized for immediate tactical response rather than deep, multi-week investigative link analysis, timeline reconstruction, and case dossier compilation.",
      opportunity: "Bridge the gap between rapid tactical lookup and deep longitudinal investigative dossier management in a unified canvas."
    },
    {
      name: "Beagle Analytics",
      category: "Statistical & Query Reporting",
      overview: "Structured statistical reporting and automated query templates for administrative crime analysis.",
      strengths: "Reliable standardized reporting templates, predictable tabular exports for statutory crime reporting.",
      friction: "Siloed tabular reporting models with limited interactive geospatial-temporal graph exploration; users cannot directly click on a relationship to inspect evidence.",
      opportunity: "Transform static tabular records into interactive, synchronized spatial-temporal link networks where every node is directly inspectable."
    }
  ];

  // Fictional Conceptual Graph Nodes for Relationship Visualizer
  const GRAPH_NODES: Record<string, {
    id: string;
    label: string;
    type: 'person' | 'incident' | 'location' | 'vehicle' | 'organization';
    category: string;
    connectedTo: string[];
    confidence: string;
    details: string;
    sourceRecords: string[];
  }> = {
    'poi-1': {
      id: 'poi-1',
      label: 'Person of Interest "Alpha"',
      type: 'person',
      category: 'Primary Subject',
      connectedTo: ['inc-101', 'veh-88', 'org-1', 'loc-4'],
      confidence: '94% High Confidence',
      details: 'Identified at scene via forensic vehicle registration match and multiple cross-referenced witness MO descriptions.',
      sourceRecords: ['CAD Incident #2024-8819', 'ALPR Camera Hit #4402', 'Witness Statement Exhibit C']
    },
    'inc-101': {
      id: 'inc-101',
      label: 'Commercial Burglary #841',
      type: 'incident',
      category: 'Target Incident',
      connectedTo: ['poi-1', 'loc-4', 'veh-88'],
      confidence: 'Verified Event',
      details: 'Forced entry via rear loading dock at 02:45 AM. Modus operandi matches 3 prior occurrences within a 2-mile radius.',
      sourceRecords: ['Case Report CR-2024-0941', 'Surveillance Log Cam-04']
    },
    'veh-88': {
      id: 'veh-88',
      label: 'Sedan "Silver Plate #402"',
      type: 'vehicle',
      category: 'Transport Entity',
      connectedTo: ['poi-1', 'inc-101', 'poi-2'],
      confidence: '88% Corroborated',
      details: 'Automated License Plate Reader logged 300m from incident 8 minutes prior; co-registered to associate address.',
      sourceRecords: ['ALPR East Sector Gate 2', 'DMV Registry Cross-Match']
    },
    'poi-2': {
      id: 'poi-2',
      label: 'Associate "Beta"',
      type: 'person',
      category: 'Known Associate',
      connectedTo: ['veh-88', 'org-1', 'loc-2'],
      confidence: '76% Moderate Correlation',
      details: 'Co-defendant in 2022 commercial logistics incident; shared commercial warehouse lease agreement.',
      sourceRecords: ['Municipal Court Filing #22-K-901', 'Lease Records Division']
    },
    'org-1': {
      id: 'org-1',
      label: 'Apex Logistics LLC',
      type: 'organization',
      category: 'Commercial Entity',
      connectedTo: ['poi-1', 'poi-2', 'loc-2'],
      confidence: 'Verified Business Record',
      details: 'Commercial shell registered under shared commercial suite; utilized for freight vehicle registrations.',
      sourceRecords: ['Corporate Entity Filing #CO-9982', 'State Secretary of State']
    },
    'loc-4': {
      id: 'loc-4',
      label: 'East Harbor District Depot',
      type: 'location',
      category: 'Crime Scene / Geo-Anchor',
      connectedTo: ['inc-101', 'poi-1'],
      confidence: 'Verified Geo Anchor',
      details: 'Primary incident coordinate; historical hotspot for overnight commercial freight entry incidents.',
      sourceRecords: ['GIS Coordinate Index 37.7812, -122.3981', 'CAD Sector 4']
    },
    'loc-2': {
      id: 'loc-2',
      label: 'Warehouse Suite #12-B',
      type: 'location',
      category: 'Associated Address',
      connectedTo: ['poi-2', 'org-1'],
      confidence: 'Verified Address',
      details: 'Secondary storage location flagged in lease cross-reference; registered utility bills match Associate Beta.',
      sourceRecords: ['County Assessor Parcel #881-A', 'Utility Billing Audit']
    }
  };

  const selectedEntity = GRAPH_NODES[selectedEntityNode] || GRAPH_NODES['poi-1'];

  return (
    <article className="w-full bg-[#0D0D0E] text-[#e5e2e1] min-h-screen font-sans selection:bg-amber-500/20 selection:text-amber-300">
      
      {/* Top Floating Sticky Sub-Header: Project Context & Back Button */}
      <header className="sticky top-20 z-40 w-full bg-[#0D0D0E]/90 backdrop-blur-xl border-b border-white/10 px-4 sm:px-8 py-3.5 transition-all">
        <div className="max-w-[1140px] mx-auto flex items-center justify-between">
          {/* Back to Work Navigation */}
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-label-caps uppercase tracking-wider text-zinc-300 hover:text-white transition-colors group cursor-pointer"
            aria-label="Return to selected work portfolio"
          >
            <span className="text-base transition-transform group-hover:-translate-x-1" aria-hidden="true">←</span>
            <span>Back to Work</span>
          </button>

          {/* Project Tag & NDA Indicator */}
          <div className="flex items-center gap-2.5">
            <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[11px] font-label-caps uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              NDA-Protected Project
            </span>
            <span className="text-xs text-zinc-400 font-mono">
              Enterprise Crime Analytics
            </span>
          </div>
        </div>
      </header>

      {/* Main Case Study Container - Restricted Width (1100-1140px max) */}
      <div className="max-w-[1140px] mx-auto px-5 sm:px-8 md:px-12 py-12 sm:py-16 md:py-20 flex flex-col gap-24 sm:gap-32">

        {/* =========================================================================
            SECTION 01: HERO SECTION
        ========================================================================= */}
        <section id="section-hero" aria-labelledby="case-study-hero-heading" className="flex flex-col gap-8 sm:gap-10">
          
          {/* Top Metadata Badges */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-label-caps uppercase tracking-widest font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              NDA Protected Case Study
            </span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-xs font-label-caps uppercase tracking-wider">
              Enterprise Crime Analytics
            </span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-xs font-label-caps uppercase tracking-wider">
              Public Safety & Intelligence
            </span>
          </div>

          {/* Hero Editorial Headlines */}
          <div className="space-y-4 max-w-4xl">
            <h1 
              id="case-study-hero-heading" 
              className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-[62px] font-bold text-white tracking-tight leading-[1.08]"
            >
              Designing a Crime Intelligence Platform for Faster, Evidence-Based Investigations
            </h1>
            <p className="font-body-md text-lg sm:text-2xl text-zinc-300 font-light leading-relaxed max-w-3xl">
              Turning fragmented information into connected intelligence.
            </p>
          </div>

          {/* Editorial Meta Specs Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 py-6 border-y border-white/10 font-mono text-xs text-zinc-300">
            <div>
              <span className="block text-zinc-400 uppercase text-[10px] tracking-wider mb-1 font-label-caps">Role</span>
              <span className="text-white font-medium text-sm">Senior Product Designer</span>
            </div>
            <div>
              <span className="block text-zinc-400 uppercase text-[10px] tracking-wider mb-1 font-label-caps">Focus</span>
              <span className="text-white font-medium text-sm">Research · IA · Workflows</span>
            </div>
            <div>
              <span className="block text-zinc-400 uppercase text-[10px] tracking-wider mb-1 font-label-caps">Product Scale</span>
              <span className="text-white font-medium text-sm">Enterprise Intelligence</span>
            </div>
            <div>
              <span className="block text-zinc-400 uppercase text-[10px] tracking-wider mb-1 font-label-caps">Outcome</span>
              <span className="text-amber-300 font-medium text-sm">Multi-Agency Workflow</span>
            </div>
          </div>

          {/* Hero Contextual Editorial Image */}
          <div className="w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-white/15 shadow-2xl relative aspect-[16/9] sm:aspect-[21/9] bg-[#141416]">
            <img
              src={crimeVisual}
              alt="Conceptual representation of crime analytics and spatial-temporal intelligence data visualization"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0E] via-transparent to-black/30 pointer-events-none" />
            
            {/* Context Caption */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex items-center justify-between text-[11px] font-mono text-zinc-300 bg-black/60 backdrop-blur-md px-3.5 py-2 rounded-lg border border-white/10">
              <span>Sanitized Editorial Representation · Multi-Layer Geospatial & Entity Intelligence</span>
              <span className="hidden sm:inline text-zinc-400">Public Safety Domain</span>
            </div>
          </div>

        </section>


        {/* =========================================================================
            SECTION 02: THE CHALLENGE
        ========================================================================= */}
        <section id="section-challenge" aria-labelledby="challenge-heading" className="flex flex-col gap-8">
          
          <div className="space-y-3">
            <span className="font-label-caps text-xs text-amber-400 uppercase tracking-widest font-semibold">
              01 / The Challenge
            </span>
            <h2 id="challenge-heading" className="font-display text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Making sense of complexity.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-7 space-y-5 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
              <p>
                In high-stakes investigative environments, the fundamental problem facing law enforcement professionals is rarely a shortage of records. Instead, it is the profound friction of <strong className="text-white font-semibold">fragmentation</strong>.
              </p>
              <p>
                Crucial evidence—ranging from 911 Computer Aided Dispatch (CAD) logs and automated license plate hits to field interview cards, ballistics notes, and cross-county criminal histories—typically lives in separate, non-interoperable software silos.
              </p>
              <p>
                Investigators and crime analysts spent hours manually exporting data, cross-referencing disjointed spreadsheets, and pinning printed photographs to literal whiteboards. The challenge was to design a unified intelligence platform that could transform this flood of disconnected raw records into clear, actionable, and legally sound intelligence.
              </p>
            </div>

            {/* Contextual Metric / Highlight Box */}
            <div className="md:col-span-5 bg-[#161619] border border-white/10 rounded-2xl p-6 flex flex-col gap-4">
              <span className="font-label-caps text-xs text-zinc-400 uppercase tracking-wider">
                Core Design Tension
              </span>
              <h3 className="font-display text-xl text-white font-bold">
                High Velocity Data vs. Cognitive Bottlenecks
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                When critical investigative decisions must be made in minutes, requiring a human investigator to manually cross-reference 6 different systems creates dangerous blind spots and analytical fatigue.
              </p>
              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-amber-300">
                <span>Objective: Cognitive Load Reduction</span>
                <span>Zero Data Loss</span>
              </div>
            </div>
          </div>

          {/* Interactive Transformation Visual: Disconnected Nodes -> Relationships -> Intelligence */}
          <div className="w-full bg-[#131316] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col gap-6">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
              <div>
                <h4 className="text-base font-semibold text-white">The Transformation Model</h4>
                <p className="text-xs text-zinc-400">How the design shifts user cognition from raw isolated records to confident action.</p>
              </div>

              {/* Step Selector Tabs */}
              <div className="flex bg-black/40 p-1 rounded-xl border border-white/10 self-start sm:self-auto font-label-caps text-xs">
                <button
                  type="button"
                  onClick={() => setTransformationStep('silo')}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    transformationStep === 'silo' ? 'bg-zinc-800 text-white shadow-sm font-semibold' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  1. Fragmented Silos
                </button>
                <button
                  type="button"
                  onClick={() => setTransformationStep('connected')}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    transformationStep === 'connected' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm font-semibold' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  2. Relational Links
                </button>
                <button
                  type="button"
                  onClick={() => setTransformationStep('intelligence')}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    transformationStep === 'intelligence' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm font-semibold' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  3. Actionable Intelligence
                </button>
              </div>
            </div>

            {/* Dynamic Visual Stage */}
            <div className="relative w-full min-h-[220px] sm:min-h-[260px] bg-black/50 rounded-xl border border-white/5 p-6 flex items-center justify-center overflow-hidden">
              
              {transformationStep === 'silo' && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-2xl animate-fadeIn">
                  <div className="p-4 rounded-xl bg-zinc-900/90 border border-red-500/30 text-center space-y-1">
                    <span className="text-xs font-mono text-red-400 block">CAD 911 Records</span>
                    <span className="text-lg font-bold text-white">Isolated Log</span>
                    <span className="text-[11px] text-zinc-500 block">No entity cross-reference</span>
                  </div>
                  <div className="p-4 rounded-xl bg-zinc-900/90 border border-red-500/30 text-center space-y-1">
                    <span className="text-xs font-mono text-red-400 block">ALPR Scans</span>
                    <span className="text-lg font-bold text-white">Plate Hits</span>
                    <span className="text-[11px] text-zinc-500 block">Unlinked camera feeds</span>
                  </div>
                  <div className="p-4 rounded-xl bg-zinc-900/90 border border-red-500/30 text-center space-y-1">
                    <span className="text-xs font-mono text-red-400 block">RMS Case Files</span>
                    <span className="text-lg font-bold text-white">Narratives</span>
                    <span className="text-[11px] text-zinc-500 block">Buried in PDFs</span>
                  </div>
                  <div className="p-4 rounded-xl bg-zinc-900/90 border border-red-500/30 text-center space-y-1">
                    <span className="text-xs font-mono text-red-400 block">GIS Spatial</span>
                    <span className="text-lg font-bold text-white">Static Maps</span>
                    <span className="text-[11px] text-zinc-500 block">No temporal slider</span>
                  </div>
                </div>
              )}

              {transformationStep === 'connected' && (
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full max-w-3xl animate-fadeIn">
                  <div className="p-4 rounded-xl bg-zinc-900 border border-amber-500/40 text-center w-full sm:w-48">
                    <span className="text-xs font-mono text-amber-400">Incident Anchor</span>
                    <p className="text-sm font-bold text-white mt-1">Burglary #841</p>
                    <span className="text-[10px] text-zinc-400">02:45 AM · East Depot</span>
                  </div>

                  <div className="flex flex-col items-center text-amber-400 font-mono text-xs">
                    <span className="px-2 py-1 rounded bg-amber-500/20 border border-amber-500/30">
                      Co-occurrence Link
                    </span>
                    <span className="text-lg">↔</span>
                  </div>

                  <div className="p-4 rounded-xl bg-zinc-900 border border-amber-500/40 text-center w-full sm:w-48">
                    <span className="text-xs font-mono text-amber-400">Vehicle Entity</span>
                    <p className="text-sm font-bold text-white mt-1">Silver Sedan</p>
                    <span className="text-[10px] text-zinc-400">ALPR Hit 300m away</span>
                  </div>

                  <div className="flex flex-col items-center text-amber-400 font-mono text-xs">
                    <span className="px-2 py-1 rounded bg-amber-500/20 border border-amber-500/30">
                      Registered Associate
                    </span>
                    <span className="text-lg">↔</span>
                  </div>

                  <div className="p-4 rounded-xl bg-zinc-900 border border-amber-500/40 text-center w-full sm:w-48">
                    <span className="text-xs font-mono text-amber-400">Suspect Entity</span>
                    <p className="text-sm font-bold text-white mt-1">Person "Alpha"</p>
                    <span className="text-[10px] text-zinc-400">Matched MO Pattern</span>
                  </div>
                </div>
              )}

              {transformationStep === 'intelligence' && (
                <div className="w-full max-w-2xl bg-gradient-to-r from-emerald-950/40 via-zinc-900 to-emerald-950/40 border border-emerald-500/40 rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4 animate-fadeIn">
                  <div className="space-y-1 text-center sm:text-left">
                    <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[11px] font-mono font-bold uppercase">
                      ✓ Triangulated Intelligence
                    </div>
                    <h5 className="text-base font-bold text-white">High-Confidence Suspect Correlation</h5>
                    <p className="text-xs text-zinc-300">
                      Cross-referenced 1 incident + 1 vehicle + 2 co-offenders + 3 historical MO matches into a court-ready evidentiary chain.
                    </p>
                  </div>
                  <div className="px-4 py-2 bg-emerald-400 text-black font-semibold text-xs rounded-lg whitespace-nowrap shadow-md">
                    Warrant Dossier Ready
                  </div>
                </div>
              )}

            </div>
          </div>

        </section>


        {/* =========================================================================
            SECTION 03: THE ENVIRONMENT
        ========================================================================= */}
        <section id="section-environment" aria-labelledby="environment-heading" className="flex flex-col gap-8">
          
          <div className="space-y-3">
            <span className="font-label-caps text-xs text-amber-400 uppercase tracking-widest font-semibold">
              02 / The Environment
            </span>
            <h2 id="environment-heading" className="font-display text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              The problem wasn&apos;t a lack of data.
            </h2>
          </div>

          <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed max-w-3xl">
            In modern public safety operations, data is continually streaming from hundreds of sources. The system had to represent an entire investigative ecosystem where <strong className="text-white">6 core entity dimensions</strong> intersect at all times:
          </p>

          {/* Original Abstract Intelligence Ecosystem Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            
            {/* 1. Incidents */}
            <div className="bg-[#151518] border border-white/10 rounded-xl p-5 hover:border-amber-500/40 transition-all group">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs text-amber-400 font-semibold uppercase">01 / Incidents</span>
                <span className="w-2 h-2 rounded-full bg-amber-400/60 group-hover:bg-amber-400" />
              </div>
              <h3 className="text-base font-bold text-white mb-1.5">Event Classifications</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Modus operandi parameters, offense severity hierarchies, call priority codes, and dispatch resolution timestamps.
              </p>
            </div>

            {/* 2. People */}
            <div className="bg-[#151518] border border-white/10 rounded-xl p-5 hover:border-amber-500/40 transition-all group">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs text-amber-400 font-semibold uppercase">02 / People</span>
                <span className="w-2 h-2 rounded-full bg-amber-400/60 group-hover:bg-amber-400" />
              </div>
              <h3 className="text-base font-bold text-white mb-1.5">Human Entities</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Persons of interest, verified victims, reporting parties, witnesses, known associate rosters, and alias cross-references.
              </p>
            </div>

            {/* 3. Locations */}
            <div className="bg-[#151518] border border-white/10 rounded-xl p-5 hover:border-amber-500/40 transition-all group">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs text-amber-400 font-semibold uppercase">03 / Locations</span>
                <span className="w-2 h-2 rounded-full bg-amber-400/60 group-hover:bg-amber-400" />
              </div>
              <h3 className="text-base font-bold text-white mb-1.5">Geospatial Anchors</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Precise coordinates, multi-polygon geofences, historical hot spot density contours, parcel data, and jurisdiction boundaries.
              </p>
            </div>

            {/* 4. Timelines */}
            <div className="bg-[#151518] border border-white/10 rounded-xl p-5 hover:border-amber-500/40 transition-all group">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs text-amber-400 font-semibold uppercase">04 / Timelines</span>
                <span className="w-2 h-2 rounded-full bg-amber-400/60 group-hover:bg-amber-400" />
              </div>
              <h3 className="text-base font-bold text-white mb-1.5">Temporal Sequences</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Chronological sequence reconstruction, recurring day-of-week rhythms, alibi timeline windows, and temporal gap discovery.
              </p>
            </div>

            {/* 5. Evidence */}
            <div className="bg-[#151518] border border-white/10 rounded-xl p-5 hover:border-amber-500/40 transition-all group">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs text-amber-400 font-semibold uppercase">05 / Evidence</span>
                <span className="w-2 h-2 rounded-full bg-amber-400/60 group-hover:bg-amber-400" />
              </div>
              <h3 className="text-base font-bold text-white mb-1.5">Corroborating Artifacts</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Surveillance video clips, ALPR plate captures, ballistics forensics, digital telemetry logs, and physical property chains.
              </p>
            </div>

            {/* 6. Relationships */}
            <div className="bg-[#151518] border border-white/10 rounded-xl p-5 hover:border-amber-500/40 transition-all group">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs text-amber-400 font-semibold uppercase">06 / Relationships</span>
                <span className="w-2 h-2 rounded-full bg-amber-400/60 group-hover:bg-amber-400" />
              </div>
              <h3 className="text-base font-bold text-white mb-1.5">Link Topologies</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Co-offending clusters, commercial organizational structures, vehicle loan ties, and multi-hop link strength coefficients.
              </p>
            </div>

          </div>

        </section>


        {/* =========================================================================
            SECTION 04: UNDERSTANDING THE USERS (PERSONAS)
        ========================================================================= */}
        <section id="section-users" aria-labelledby="users-heading" className="flex flex-col gap-8">
          
          <div className="space-y-3">
            <span className="font-label-caps text-xs text-amber-400 uppercase tracking-widest font-semibold">
              03 / Research & Personas
            </span>
            <h2 id="users-heading" className="font-display text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Understanding how investigations actually happen.
            </h2>
          </div>

          <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed max-w-3xl">
            To design an architecture that served diverse operational needs, we mapped out <strong className="text-white">4 core role-based personas</strong>. Each role approached the platform with fundamentally distinct analytical goals, cognitive constraints, and evidentiary thresholds:
          </p>

          {/* Persona Selector Tabs (Mobile / Tablet / Desktop) */}
          <div className="flex flex-wrap gap-2 sm:gap-3 border-b border-white/10 pb-4">
            {PERSONAS.map((p, idx) => (
              <button
                key={p.role}
                type="button"
                onClick={() => setActivePersona(idx)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center gap-2 cursor-pointer ${
                  activePersona === idx
                    ? 'bg-amber-500 text-black font-semibold shadow-md'
                    : 'bg-[#18181B] text-zinc-300 hover:text-white hover:bg-zinc-800'
                }`}
              >
                <span className="font-mono text-[10px] opacity-75">0{idx + 1}</span>
                <span>{p.role}</span>
              </button>
            ))}
          </div>

          {/* Active Persona Detailed Editorial Card */}
          <div className="bg-[#141417] border border-white/15 rounded-2xl p-6 sm:p-8 md:p-10 shadow-2xl relative overflow-hidden transition-all duration-300 animate-fadeIn">
            
            {/* Background Ambient Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 flex flex-col gap-6 sm:gap-8">
              
              {/* Header: Title + Focus Badge */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-5">
                <div>
                  <span className="font-label-caps text-xs text-amber-400 uppercase tracking-widest block mb-1">
                    Role-Based Archetype
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                    {PERSONAS[activePersona].role}
                  </h3>
                </div>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-xs font-mono self-start sm:self-auto">
                  {PERSONAS[activePersona].badge}
                </span>
              </div>

              {/* 4 Dimension Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                
                {/* 1. Primary Goal */}
                <div className="space-y-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 block font-semibold">
                    Primary Operational Goal
                  </span>
                  <p className="text-sm sm:text-base text-zinc-200 leading-relaxed">
                    {PERSONAS[activePersona].primaryGoal}
                  </p>
                </div>

                {/* 2. Key Pain Point */}
                <div className="space-y-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-rose-400 block font-semibold">
                    Critical Pain Point
                  </span>
                  <p className="text-sm sm:text-base text-zinc-200 leading-relaxed">
                    {PERSONAS[activePersona].keyPainPoint}
                  </p>
                </div>

                {/* 3. Information Needed */}
                <div className="space-y-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 block font-semibold">
                    Essential Information Inputs
                  </span>
                  <p className="text-sm sm:text-base text-zinc-200 leading-relaxed">
                    {PERSONAS[activePersona].informationNeeded}
                  </p>
                </div>

                {/* 4. Decision to Make */}
                <div className="space-y-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-amber-400 block font-semibold">
                    Core Decision Mandate
                  </span>
                  <p className="text-sm sm:text-base text-zinc-200 leading-relaxed italic bg-black/40 p-3 rounded-lg border border-white/5">
                    &ldquo;{PERSONAS[activePersona].decisionToMake}&rdquo;
                  </p>
                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =========================================================================
            SECTION 05: COMPETITIVE LANDSCAPE
        ========================================================================= */}
        <section id="section-competitors" aria-labelledby="competitors-heading" className="flex flex-col gap-8">
          
          <div className="space-y-3">
            <span className="font-label-caps text-xs text-amber-400 uppercase tracking-widest font-semibold">
              04 / Competitive Analysis
            </span>
            <h2 id="competitors-heading" className="font-display text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Learning from the intelligence ecosystem.
            </h2>
          </div>

          <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed max-w-3xl">
            We conducted high-level heuristic and workflow analysis across prominent platforms in the public safety intelligence ecosystem to understand existing conventions and identify untapped UX opportunities:
          </p>

          {/* 3 Competitor Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {COMPETITORS.map((c) => (
              <div 
                key={c.name} 
                className="bg-[#151518] border border-white/10 rounded-2xl p-6 flex flex-col justify-between gap-6 hover:border-white/25 transition-all"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <h3 className="font-display text-xl font-bold text-white">{c.name}</h3>
                    <span className="text-[10px] font-mono text-zinc-400 uppercase px-2 py-0.5 rounded bg-white/5">
                      {c.category}
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-xs font-mono text-emerald-400 block font-medium">Observed Strengths</span>
                    <p className="text-xs text-zinc-300 leading-relaxed">{c.strengths}</p>
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-xs font-mono text-rose-400 block font-medium">Observed Friction</span>
                    <p className="text-xs text-zinc-300 leading-relaxed">{c.friction}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 space-y-1.5 bg-black/20 p-3 rounded-lg">
                  <span className="text-[11px] font-mono text-amber-300 font-bold block uppercase tracking-wider">
                    Our Design Opportunity
                  </span>
                  <p className="text-xs text-zinc-300 leading-relaxed">{c.opportunity}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Where the Opportunity Emerged - 4 Strategic Pillars */}
          <div className="bg-gradient-to-b from-[#18181C] to-[#121214] border border-amber-500/30 rounded-2xl p-6 sm:p-8 mt-4 space-y-6">
            <div className="space-y-1">
              <span className="font-label-caps text-xs text-amber-400 uppercase tracking-widest font-semibold">
                Strategic Takeaway
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                Where the opportunity emerged
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-2">
                <span className="text-amber-400 font-mono text-xs font-bold block">01 / Unified Canvas</span>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  Eliminate transitions between map, timeline, and link graph; synchronize all three views in a single stateful container.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-2">
                <span className="text-amber-400 font-mono text-xs font-bold block">02 / Progressive Depth</span>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  Serve both 30-second situational patrol checks and 30-day complex racketeering link investigations in one UI hierarchy.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-2">
                <span className="text-amber-400 font-mono text-xs font-bold block">03 / Traceable Attribution</span>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  Every automated node connection links directly to underlying official police reports, establishing evidentiary chain of custody.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-2">
                <span className="text-amber-400 font-mono text-xs font-bold block">04 / Stateful Hypotheses</span>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  Enable investigators to branch, save, and collaboratively share investigative theory boards without losing live query sync.
                </p>
              </div>
            </div>
          </div>

        </section>


        {/* =========================================================================
            SECTION 06: DEFINING THE DESIGN PROBLEM
        ========================================================================= */}
        <section id="section-problem-statement" aria-labelledby="problem-heading" className="flex flex-col gap-10">
          
          <div className="space-y-3">
            <span className="font-label-caps text-xs text-amber-400 uppercase tracking-widest font-semibold">
              05 / Core Thesis
            </span>
            <h2 id="problem-heading" className="font-display text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              How might we turn complexity into clarity?
            </h2>
          </div>

          {/* Large Editorial Problem Statement */}
          <div className="p-8 sm:p-12 rounded-2xl sm:rounded-3xl bg-[#141416] border-l-4 border-l-amber-400 border-y border-r border-white/10 shadow-2xl space-y-4">
            <p className="font-display text-xl sm:text-3xl md:text-3xl font-medium text-white leading-snug">
              &ldquo;How might we design an intelligence workspace that transforms high-volume, fragmented public safety data into traceable, interconnected insights—enabling investigators to move from raw data to confident action in seconds rather than days?&rdquo;
            </p>
            <span className="font-mono text-xs text-zinc-400 block pt-2">
              Primary UX Mandate · Senior Product Design Framework
            </span>
          </div>

          {/* Central Thesis Transition: DATA -> CONTEXT -> RELATIONSHIPS -> INTELLIGENCE -> ACTION */}
          <div className="space-y-4">
            <span className="font-label-caps text-xs text-zinc-400 uppercase tracking-wider block">
              The 5-Stage Cognitive Pathway
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
              
              {/* 1. DATA */}
              <div className="p-4 rounded-xl bg-[#151518] border border-white/10 flex flex-col justify-between gap-3 text-center sm:text-left">
                <span className="font-mono text-[10px] text-zinc-500 uppercase">Stage 01</span>
                <div>
                  <h3 className="font-display text-lg font-bold text-white">DATA</h3>
                  <p className="text-xs text-zinc-400 mt-1">Raw logs, CAD events, ALPR hits, arrest reports.</p>
                </div>
                <span className="text-xs font-mono text-zinc-500">Unfiltered input</span>
              </div>

              {/* 2. CONTEXT */}
              <div className="p-4 rounded-xl bg-[#151518] border border-white/10 flex flex-col justify-between gap-3 text-center sm:text-left">
                <span className="font-mono text-[10px] text-zinc-500 uppercase">Stage 02</span>
                <div>
                  <h3 className="font-display text-lg font-bold text-white">CONTEXT</h3>
                  <p className="text-xs text-zinc-400 mt-1">Spatial boundaries, timestamps, modus operandi.</p>
                </div>
                <span className="text-xs font-mono text-zinc-500">Normalized schema</span>
              </div>

              {/* 3. RELATIONSHIPS */}
              <div className="p-4 rounded-xl bg-[#151518] border border-white/10 flex flex-col justify-between gap-3 text-center sm:text-left">
                <span className="font-mono text-[10px] text-zinc-500 uppercase">Stage 03</span>
                <div>
                  <h3 className="font-display text-lg font-bold text-amber-300">RELATIONSHIPS</h3>
                  <p className="text-xs text-zinc-400 mt-1">Entity co-offending, vehicle ties, shared locations.</p>
                </div>
                <span className="text-xs font-mono text-amber-400">Link graph analysis</span>
              </div>

              {/* 4. INTELLIGENCE */}
              <div className="p-4 rounded-xl bg-[#151518] border border-white/10 flex flex-col justify-between gap-3 text-center sm:text-left">
                <span className="font-mono text-[10px] text-zinc-500 uppercase">Stage 04</span>
                <div>
                  <h3 className="font-display text-lg font-bold text-emerald-400">INTELLIGENCE</h3>
                  <p className="text-xs text-zinc-400 mt-1">Triangulated suspect leads and evidentiary trails.</p>
                </div>
                <span className="text-xs font-mono text-emerald-400">Synthesized insights</span>
              </div>

              {/* 5. ACTION */}
              <div className="p-4 rounded-xl bg-gradient-to-b from-amber-500/20 to-zinc-900 border border-amber-500/40 flex flex-col justify-between gap-3 text-center sm:text-left">
                <span className="font-mono text-[10px] text-amber-400 uppercase font-bold">Stage 05</span>
                <div>
                  <h3 className="font-display text-lg font-bold text-white">ACTION</h3>
                  <p className="text-xs text-zinc-200 mt-1">Warrants, tactical patrol allocation, case clearance.</p>
                </div>
                <span className="text-xs font-mono text-amber-300 font-bold">Mission outcome</span>
              </div>

            </div>
          </div>

        </section>


        {/* =========================================================================
            SECTION 07: INFORMATION ARCHITECTURE
        ========================================================================= */}
        <section id="section-ia" aria-labelledby="ia-heading" className="flex flex-col gap-8">
          
          <div className="space-y-3">
            <span className="font-label-caps text-xs text-amber-400 uppercase tracking-widest font-semibold">
              06 / Information Architecture
            </span>
            <h2 id="ia-heading" className="font-display text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Designing the intelligence model.
            </h2>
            <p className="text-xs font-mono text-zinc-400">
              Sanitized representation of the information model.
            </p>
          </div>

          <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed max-w-3xl">
            Investigations are inherently non-linear. Rather than forcing users into deep hierarchical folder trees, we designed an entity-centric information architecture centered around the <strong className="text-white">Investigation Container</strong> as the primary cognitive anchor:
          </p>

          {/* Abstract IA Tree Visualization */}
          <div className="bg-[#121215] border border-white/10 rounded-2xl p-6 sm:p-8 font-mono text-xs overflow-x-auto">
            <div className="min-w-[650px] space-y-4">
              
              {/* Root Node */}
              <div className="flex items-center gap-3">
                <span className="px-3.5 py-1.5 rounded-lg bg-amber-500 text-black font-bold font-sans text-sm shadow-md">
                  INVESTIGATION WORKSPACE
                </span>
                <span className="text-zinc-500 text-xs">Primary Stateful Canvas</span>
              </div>

              {/* Branches */}
              <div className="pl-6 border-l-2 border-dashed border-zinc-700 ml-4 space-y-4 pt-2">
                
                {/* Branch 1: Incidents */}
                <div className="flex items-start gap-3">
                  <span className="text-zinc-500 mt-1">├──</span>
                  <div className="p-3 bg-[#19191D] border border-white/10 rounded-lg flex-1">
                    <span className="text-amber-300 font-bold text-sm block font-sans">Incidents Hub</span>
                    <span className="text-zinc-400 text-[11px] block mt-0.5">
                      Offense Categorization · Modus Operandi Matching · Call Logs · Response Timestamps
                    </span>
                  </div>
                </div>

                {/* Branch 2: People */}
                <div className="flex items-start gap-3">
                  <span className="text-zinc-500 mt-1">├──</span>
                  <div className="p-3 bg-[#19191D] border border-white/10 rounded-lg flex-1">
                    <span className="text-amber-300 font-bold text-sm block font-sans">People & Entities</span>
                    <span className="text-zinc-400 text-[11px] block mt-0.5">
                      Persons of Interest · Victims · Reporting Witnesses · Known Associate Clusters · Aliases
                    </span>
                  </div>
                </div>

                {/* Branch 3: Locations */}
                <div className="flex items-start gap-3">
                  <span className="text-zinc-500 mt-1">├──</span>
                  <div className="p-3 bg-[#19191D] border border-white/10 rounded-lg flex-1">
                    <span className="text-amber-300 font-bold text-sm block font-sans">Geospatial Anchors</span>
                    <span className="text-zinc-400 text-[11px] block mt-0.5">
                      Geofence Boundaries · Hot Spot Density Maps · Address Registries · Jurisdictional Sectors
                    </span>
                  </div>
                </div>

                {/* Branch 4: Organizations */}
                <div className="flex items-start gap-3">
                  <span className="text-zinc-500 mt-1">├──</span>
                  <div className="p-3 bg-[#19191D] border border-white/10 rounded-lg flex-1">
                    <span className="text-amber-300 font-bold text-sm block font-sans">Organizations & Vehicles</span>
                    <span className="text-zinc-400 text-[11px] block mt-0.5">
                      Commercial Shells · Registered Fleet Profiles · License Plate Reader Capture Logs
                    </span>
                  </div>
                </div>

                {/* Branch 5: Evidence */}
                <div className="flex items-start gap-3">
                  <span className="text-zinc-500 mt-1">├──</span>
                  <div className="p-3 bg-[#19191D] border border-white/10 rounded-lg flex-1">
                    <span className="text-amber-300 font-bold text-sm block font-sans">Evidence & Artifacts</span>
                    <span className="text-zinc-400 text-[11px] block mt-0.5">
                      Surveillance Stills · Ballistics Index · Digital Telemetry Logs · Chain of Custody
                    </span>
                  </div>
                </div>

                {/* Branch 6: Timelines */}
                <div className="flex items-start gap-3">
                  <span className="text-zinc-500 mt-1">├──</span>
                  <div className="p-3 bg-[#19191D] border border-white/10 rounded-lg flex-1">
                    <span className="text-amber-300 font-bold text-sm block font-sans">Timeline Reconstruction</span>
                    <span className="text-zinc-400 text-[11px] block mt-0.5">
                      Synchronized Chronology Slider · Alibi Overlap Intervals · Temporal Gaps
                    </span>
                  </div>
                </div>

                {/* Branch 7: Relationships */}
                <div className="flex items-start gap-3">
                  <span className="text-zinc-500 mt-1">└──</span>
                  <div className="p-3 bg-gradient-to-r from-amber-500/10 to-[#19191D] border border-amber-500/40 rounded-lg flex-1">
                    <span className="text-amber-300 font-bold text-sm block font-sans">Relationship Topology Engine</span>
                    <span className="text-zinc-300 text-[11px] block mt-0.5">
                      Multi-Hop Link Analysis · Co-Occurrence Confidence Index · Branching Hypothesis Trees
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </section>


        {/* =========================================================================
            SECTION 08: EXPLORATION (LOW-FIDELITY WIREFRAMING PROCESS)
        ========================================================================= */}
        <section id="section-exploration" aria-labelledby="exploration-heading" className="flex flex-col gap-8">
          
          <div className="space-y-3">
            <span className="font-label-caps text-xs text-amber-400 uppercase tracking-widest font-semibold">
              07 / Wireframing & Exploration
            </span>
            <h2 id="exploration-heading" className="font-display text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Before the interface, we explored the structure.
            </h2>
          </div>

          <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed max-w-3xl">
            To validate how investigators mentally model complex cases, we explored multiple structural layouts in intentionally low-fidelity wireframes before committing to visual styling:
          </p>

          {/* Wireframe Concept Switcher */}
          <div className="flex flex-wrap gap-2.5 border-b border-white/10 pb-4 font-mono text-xs">
            <button
              type="button"
              onClick={() => setActiveWireframe('tri-view')}
              className={`px-4 py-2 rounded-xl transition-all ${
                activeWireframe === 'tri-view'
                  ? 'bg-zinc-200 text-black font-bold shadow-md'
                  : 'bg-[#18181C] text-zinc-400 hover:text-white'
              }`}
            >
              Concept A: Synchronized Tri-Pane
            </button>
            <button
              type="button"
              onClick={() => setActiveWireframe('chronological')}
              className={`px-4 py-2 rounded-xl transition-all ${
                activeWireframe === 'chronological'
                  ? 'bg-zinc-200 text-black font-bold shadow-md'
                  : 'bg-[#18181C] text-zinc-400 hover:text-white'
              }`}
            >
              Concept B: Chronological River
            </button>
            <button
              type="button"
              onClick={() => setActiveWireframe('search-graph')}
              className={`px-4 py-2 rounded-xl transition-all ${
                activeWireframe === 'search-graph'
                  ? 'bg-zinc-200 text-black font-bold shadow-md'
                  : 'bg-[#18181C] text-zinc-400 hover:text-white'
              }`}
            >
              Concept C: Search-to-Graph Expansion
            </button>
          </div>

          {/* Wireframe Display Blueprint Box */}
          <div className="bg-[#101013] border border-white/15 rounded-2xl p-6 sm:p-8 space-y-6">
            
            {activeWireframe === 'tri-view' && (
              <div className="space-y-6 animate-fadeIn">
                {/* Low-Fi UI Schematic */}
                <div className="w-full bg-[#18181C] border border-dashed border-zinc-600 rounded-xl p-4 sm:p-6 space-y-4 font-mono text-[11px]">
                  <div className="flex justify-between items-center border-b border-zinc-700 pb-3">
                    <span className="text-zinc-400">[Global Navigation · Case ID: #CR-2024-8819]</span>
                    <span className="text-amber-400 font-bold">[EXPLORATION CONCEPT A]</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-3 min-h-[180px]">
                    {/* Left: Map Pane */}
                    <div className="md:col-span-4 bg-zinc-900 border border-zinc-700 rounded-lg p-3 flex flex-col justify-between">
                      <span className="text-zinc-300 font-bold block mb-2">[Geospatial Map Canvas]</span>
                      <div className="space-y-1 text-zinc-500 text-[10px]">
                        <div>• Incident Marker Cluster</div>
                        <div>• Geofence Radius Overlay</div>
                        <div>• ALPR Camera Gate Pins</div>
                      </div>
                      <span className="text-zinc-600 text-[9px] mt-2 block">Spatial Context Anchor</span>
                    </div>

                    {/* Center: Graph Canvas */}
                    <div className="md:col-span-5 bg-zinc-900 border border-amber-500/50 rounded-lg p-3 flex flex-col justify-between">
                      <span className="text-amber-300 font-bold block mb-2">[Interactive Node Link Graph]</span>
                      <div className="space-y-1 text-zinc-400 text-[10px]">
                        <div>• Node (Person A) ↔ Node (Vehicle 88)</div>
                        <div>• Node (Vehicle 88) ↔ Incident #841</div>
                        <div>• Hover: Link confidence score</div>
                      </div>
                      <span className="text-amber-400/80 text-[9px] mt-2 block">★ Selected Primary Direction</span>
                    </div>

                    {/* Right: Record Dossier Drawer */}
                    <div className="md:col-span-3 bg-zinc-900 border border-zinc-700 rounded-lg p-3 flex flex-col justify-between">
                      <span className="text-zinc-300 font-bold block mb-2">[Context Dossier]</span>
                      <div className="space-y-1 text-zinc-500 text-[10px]">
                        <div>• Entity Metadata</div>
                        <div>• Prior Offenses</div>
                        <div>• Attached Evidentiary Stills</div>
                      </div>
                      <span className="text-zinc-600 text-[9px] mt-2 block">Non-modal side sheet</span>
                    </div>
                  </div>

                  {/* Bottom Timeline */}
                  <div className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-2.5 flex items-center justify-between text-zinc-400 text-[10px]">
                    <span>[Timeline Slider: 00:00 - 06:00 AM]</span>
                    <span>Scrubbing updates Map & Graph simultaneously</span>
                  </div>
                </div>

                {/* Design Rationale Annotation */}
                <div className="space-y-2 border-t border-white/10 pt-4">
                  <h4 className="text-sm font-bold text-white font-sans">Design Rationale for Concept A:</h4>
                  <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                    <strong>Why it won:</strong> Synchronizing the map and graph alongside a non-intrusive side dossier allowed investigators to see spatial, relational, and chronological context without switching tabs. Scrubbing the timeline filtered nodes on both the map and graph instantly.
                  </p>
                </div>
              </div>
            )}

            {activeWireframe === 'chronological' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="w-full bg-[#18181C] border border-dashed border-zinc-600 rounded-xl p-4 sm:p-6 space-y-4 font-mono text-[11px]">
                  <div className="flex justify-between items-center border-b border-zinc-700 pb-3">
                    <span className="text-zinc-400">[Chronology-First River Layout]</span>
                    <span className="text-zinc-500">[EXPLORATION CONCEPT B]</span>
                  </div>

                  <div className="space-y-2">
                    <div className="p-3 bg-zinc-900 border border-zinc-700 rounded-lg flex items-center justify-between">
                      <span>02:14 AM — ALPR Scan: Silver Sedan Plate #402 at East Harbor Gate</span>
                      <span className="text-zinc-500">[Vehicle Pin]</span>
                    </div>
                    <div className="p-3 bg-zinc-900 border border-zinc-700 rounded-lg flex items-center justify-between">
                      <span>02:45 AM — CAD Dispatch: Silent Alarm Triggered at Freight Depot</span>
                      <span className="text-amber-400">[Target Event]</span>
                    </div>
                    <div className="p-3 bg-zinc-900 border border-zinc-700 rounded-lg flex items-center justify-between">
                      <span>03:10 AM — Witness Call: Person fleeing on foot toward North Blvd</span>
                      <span className="text-zinc-500">[Witness Statement]</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 border-t border-white/10 pt-4">
                  <h4 className="text-sm font-bold text-white font-sans">Design Rationale for Concept B:</h4>
                  <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                    <strong>Why it was adapted:</strong> Excellent for linear narrative storytelling, but struggled when investigations branched into multi-suspect co-offending rings where spatial and relational proximity mattered more than strict chronological order. We preserved this as a synchronized sub-view.
                  </p>
                </div>
              </div>
            )}

            {activeWireframe === 'search-graph' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="w-full bg-[#18181C] border border-dashed border-zinc-600 rounded-xl p-4 sm:p-6 space-y-4 font-mono text-[11px]">
                  <div className="flex justify-between items-center border-b border-zinc-700 pb-3">
                    <span className="text-zinc-400">[Command Bar to Dynamic Graph Expansion]</span>
                    <span className="text-zinc-500">[EXPLORATION CONCEPT C]</span>
                  </div>

                  <div className="p-4 bg-zinc-900 border border-zinc-700 rounded-lg text-center space-y-3">
                    <div className="w-full max-w-md mx-auto py-2 px-3 bg-black border border-zinc-600 rounded text-zinc-400 text-left">
                      🔍 Search: Person &quot;Alpha&quot; OR Plate &quot;402&quot;
                    </div>
                    <div className="flex justify-center gap-4 text-[10px] text-zinc-400">
                      <span>[Auto-suggest entities]</span>
                      <span>[1-Hop expansion]</span>
                      <span>[2-Hop expansion]</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 border-t border-white/10 pt-4">
                  <h4 className="text-sm font-bold text-white font-sans">Design Rationale for Concept C:</h4>
                  <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                    <strong>Integration:</strong> We integrated the smart tokenized search bar directly into the top canvas header of Concept A, allowing zero-state queries to instantly instantiate graph clusters.
                  </p>
                </div>
              </div>
            )}

          </div>

        </section>


        {/* =========================================================================
            SECTION 09: DESIGN PRINCIPLES
        ========================================================================= */}
        <section id="section-principles" aria-labelledby="principles-heading" className="flex flex-col gap-8">
          
          <div className="space-y-3">
            <span className="font-label-caps text-xs text-amber-400 uppercase tracking-widest font-semibold">
              08 / Design Principles
            </span>
            <h2 id="principles-heading" className="font-display text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Designing for investigative thinking.
            </h2>
          </div>

          <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed max-w-3xl">
            Complex intelligence software fails when it forces users to conform to rigid software conventions. We established <strong className="text-white">5 core design principles</strong> grounded in investigative human factors:
          </p>

          {/* 5 Principles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Principle 1 */}
            <div className="bg-[#141417] border border-white/10 rounded-2xl p-6 flex flex-col justify-between gap-4">
              <div className="space-y-3">
                <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center font-mono text-amber-300 font-bold text-sm">
                  01
                </div>
                <h3 className="font-display text-lg font-bold text-white">
                  Reduce cognitive load
                </h3>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  Prevent sensory overload by collapsing secondary attributes until an entity is brought into active investigative focus. Highlight high-confidence links automatically.
                </p>
              </div>
              <div className="pt-3 border-t border-white/10 text-[11px] font-mono text-zinc-400">
                Focus on signal over background noise
              </div>
            </div>

            {/* Principle 2 */}
            <div className="bg-[#141417] border border-white/10 rounded-2xl p-6 flex flex-col justify-between gap-4">
              <div className="space-y-3">
                <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center font-mono text-amber-300 font-bold text-sm">
                  02
                </div>
                <h3 className="font-display text-lg font-bold text-white">
                  Surface relationships
                </h3>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  Treat connections as first-class objects. Prioritize co-offending frequency, shared location anchors, and vehicle ties over isolated tabular rows.
                </p>
              </div>
              <div className="pt-3 border-t border-white/10 text-[11px] font-mono text-zinc-400">
                Entities exist only in context
              </div>
            </div>

            {/* Principle 3 */}
            <div className="bg-[#141417] border border-white/10 rounded-2xl p-6 flex flex-col justify-between gap-4">
              <div className="space-y-3">
                <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center font-mono text-amber-300 font-bold text-sm">
                  03
                </div>
                <h3 className="font-display text-lg font-bold text-white">
                  Preserve context
                </h3>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  Ensure investigators never lose their global orientation when drilling down into deep forensic sub-dossiers through non-modal sliding sheets.
                </p>
              </div>
              <div className="pt-3 border-t border-white/10 text-[11px] font-mono text-zinc-400">
                Zero disruptive full-page redirects
              </div>
            </div>

            {/* Principle 4 */}
            <div className="bg-[#141417] border border-white/10 rounded-2xl p-6 flex flex-col justify-between gap-4">
              <div className="space-y-3">
                <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center font-mono text-amber-300 font-bold text-sm">
                  04
                </div>
                <h3 className="font-display text-lg font-bold text-white">
                  Reveal complexity progressively
                </h3>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  Transition seamlessly from high-level triage cards to deep ballistics and cell tower metadata as the user deepens their investigative inquiry.
                </p>
              </div>
              <div className="pt-3 border-t border-white/10 text-[11px] font-mono text-zinc-400">
                Scalable analytical fidelity
              </div>
            </div>

            {/* Principle 5 */}
            <div className="bg-[#141417] border border-white/10 rounded-2xl p-6 flex flex-col justify-between gap-4 md:col-span-2 lg:col-span-2">
              <div className="space-y-3">
                <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center font-mono text-amber-300 font-bold text-sm">
                  05
                </div>
                <h3 className="font-display text-lg font-bold text-white">
                  Make evidence traceable
                </h3>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  Every automated line on a graph or pin on a map must cite its exact evidentiary origin. Trust in public safety systems requires verifiable audit trails suitable for legal prosecution.
                </p>
              </div>
              <div className="pt-3 border-t border-white/10 text-[11px] font-mono text-emerald-400 font-bold">
                ✓ Court-admissible evidentiary chain of custody
              </div>
            </div>

          </div>

        </section>


        {/* =========================================================================
            SECTION 10: VISUALIZING RELATIONSHIPS (HIGHLIGHT VISUAL)
        ========================================================================= */}
        <section id="section-relationships" aria-labelledby="relationships-heading" className="flex flex-col gap-8">
          
          <div className="space-y-3">
            <span className="font-label-caps text-xs text-amber-400 uppercase tracking-widest font-semibold">
              09 / Relationship Topology Engine
            </span>
            <h2 id="relationships-heading" className="font-display text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              From isolated records to connected intelligence.
            </h2>
            <p className="text-xs font-mono text-zinc-400">
              Conceptual visualization created for NDA-safe storytelling. All labels and data points are fictional.
            </p>
          </div>

          {/* Interactive Relationship Graph Canvas */}
          <div className="bg-[#121215] border border-white/15 rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl relative flex flex-col lg:flex-row gap-8 items-start">
            
            {/* Left: Node Graph Explorer */}
            <div className="flex-1 w-full space-y-4">
              <div className="flex items-center justify-between text-xs font-mono border-b border-white/10 pb-3">
                <span className="text-zinc-300">Interactive Entity Network</span>
                <span className="text-amber-400">Click any node to inspect links</span>
              </div>

              {/* Node Cards Cluster Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {Object.values(GRAPH_NODES).map((node) => {
                  const isSelected = node.id === selectedEntityNode;
                  const isConnected = selectedEntity.connectedTo.includes(node.id);

                  return (
                    <button
                      key={node.id}
                      type="button"
                      onClick={() => setSelectedEntityNode(node.id)}
                      className={`p-4 rounded-xl text-left transition-all border cursor-pointer flex flex-col justify-between gap-2 ${
                        isSelected
                          ? 'bg-amber-500/20 border-amber-400 text-white shadow-lg ring-1 ring-amber-400'
                          : isConnected
                          ? 'bg-zinc-900/90 border-amber-500/40 text-zinc-200'
                          : 'bg-zinc-900/40 border-white/5 text-zinc-400 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded ${
                          node.type === 'person' ? 'bg-purple-500/20 text-purple-300' :
                          node.type === 'incident' ? 'bg-rose-500/20 text-rose-300' :
                          node.type === 'vehicle' ? 'bg-cyan-500/20 text-cyan-300' :
                          node.type === 'organization' ? 'bg-amber-500/20 text-amber-300' :
                          'bg-emerald-500/20 text-emerald-300'
                        }`}>
                          {node.category}
                        </span>
                        {isSelected && <span className="text-xs text-amber-400 font-bold">● Active Anchor</span>}
                        {!isSelected && isConnected && <span className="text-[10px] text-amber-300/80 font-mono">Linked</span>}
                      </div>

                      <div>
                        <h4 className="text-sm font-bold text-white leading-snug">{node.label}</h4>
                        <p className="text-[11px] text-zinc-400 mt-1 line-clamp-1">{node.details}</p>
                      </div>

                      <div className="text-[10px] font-mono text-zinc-500 pt-1 border-t border-white/5 flex justify-between">
                        <span>{node.confidence}</span>
                        <span>{node.connectedTo.length} Links</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right: Selected Node Evidentiary Inspector */}
            <div className="w-full lg:w-80 bg-zinc-900/90 border border-white/10 rounded-2xl p-6 flex flex-col justify-between gap-6 shadow-xl sticky top-36">
              
              <div className="space-y-4">
                <div className="border-b border-white/10 pb-3">
                  <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block">
                    Entity Inspector
                  </span>
                  <h4 className="text-lg font-bold text-white mt-1">
                    {selectedEntity.label}
                  </h4>
                  <span className="text-xs text-emerald-400 font-mono block mt-0.5">
                    {selectedEntity.confidence}
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-mono text-zinc-400 block uppercase">Investigative Summary</span>
                  <p className="text-xs text-zinc-200 leading-relaxed bg-black/40 p-3 rounded-lg border border-white/5">
                    {selectedEntity.details}
                  </p>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-mono text-zinc-400 block uppercase">Verified Source Records</span>
                  <div className="space-y-1">
                    {selectedEntity.sourceRecords.map((rec) => (
                      <div key={rec} className="flex items-center gap-1.5 text-[11px] text-zinc-300 font-mono bg-zinc-800/80 px-2.5 py-1 rounded">
                        <span className="text-amber-400">📄</span>
                        <span className="truncate">{rec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-mono text-zinc-400 block uppercase">Active Relational Connections</span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedEntity.connectedTo.map((targetId) => {
                      const targetNode = GRAPH_NODES[targetId];
                      return (
                        <button
                          key={targetId}
                          type="button"
                          onClick={() => setSelectedEntityNode(targetId)}
                          className="px-2 py-1 rounded bg-amber-500/10 hover:bg-amber-500/30 border border-amber-500/30 text-amber-300 text-[10px] font-mono transition-colors"
                        >
                          → {targetNode?.label || targetId}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 text-[10px] font-mono text-zinc-500">
                Audit Trail ID: #SEC-99120 · Evidentiary Integrity Verified
              </div>

            </div>

          </div>

        </section>


        {/* =========================================================================
            SECTION 11: FROM WIREFRAMES TO PRODUCT DIRECTION
        ========================================================================= */}
        <section id="section-evolution" aria-labelledby="evolution-heading" className="flex flex-col gap-8">
          
          <div className="space-y-3">
            <span className="font-label-caps text-xs text-amber-400 uppercase tracking-widest font-semibold">
              10 / Product Evolution
            </span>
            <h2 id="evolution-heading" className="font-display text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Turning the model into an experience.
            </h2>
          </div>

          <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed max-w-3xl">
            We orchestrated the evolution from foundational field research into a production-grade enterprise design system:
          </p>

          {/* 5-Step Evolution Roadmap */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            
            <div className="p-5 rounded-2xl bg-[#141417] border border-white/10 space-y-2">
              <span className="font-mono text-xs text-zinc-500 block">Step 01</span>
              <h3 className="font-display text-base font-bold text-white">Research</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Mapped 4 operational personas and investigative cognitive friction points.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#141417] border border-white/10 space-y-2">
              <span className="font-mono text-xs text-zinc-500 block">Step 02</span>
              <h3 className="font-display text-base font-bold text-white">Architecture</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Structured the 6-entity intelligence model centered on the investigation container.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#141417] border border-white/10 space-y-2">
              <span className="font-mono text-xs text-zinc-500 block">Step 03</span>
              <h3 className="font-display text-base font-bold text-white">Wireframes</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Iterated 3 structural layouts to validate synchronized multi-pane views.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#141417] border border-white/10 space-y-2">
              <span className="font-mono text-xs text-zinc-500 block">Step 04</span>
              <h3 className="font-display text-base font-bold text-white">Interactions</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Engineered progressive disclosure, non-modal dossiers, and timeline scrubbing.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-gradient-to-b from-amber-500/15 to-[#141417] border border-amber-500/40 space-y-2">
              <span className="font-mono text-xs text-amber-400 font-bold block">Step 05</span>
              <h3 className="font-display text-base font-bold text-white">Product Direction</h3>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Delivered high-density dark mode design system and scalable component library.
              </p>
            </div>

          </div>

        </section>


        {/* =========================================================================
            SECTION 12: THE DESIGN OUTCOME
        ========================================================================= */}
        <section id="section-outcomes" aria-labelledby="outcomes-heading" className="flex flex-col gap-8">
          
          <div className="space-y-3">
            <span className="font-label-caps text-xs text-amber-400 uppercase tracking-widest font-semibold">
              11 / Design Outcome
            </span>
            <h2 id="outcomes-heading" className="font-display text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Making complex intelligence easier to navigate.
            </h2>
          </div>

          <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed max-w-3xl">
            The resulting product architecture fundamentally transformed how investigative teams uncover, organize, and act upon critical public safety data:
          </p>

          {/* Qualitative Impact Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="bg-[#151518] border border-white/10 rounded-2xl p-6 space-y-3">
              <span className="text-emerald-400 font-mono text-xs font-bold block uppercase">
                ✓ Information Hierarchy
              </span>
              <h3 className="font-display text-lg font-bold text-white">
                Clearer Cognitive Structure
              </h3>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Transformed overwhelming multi-page tabular database dumps into clean, hierarchical entity dossiers with instant visual summary headers.
              </p>
            </div>

            <div className="bg-[#151518] border border-white/10 rounded-2xl p-6 space-y-3">
              <span className="text-emerald-400 font-mono text-xs font-bold block uppercase">
                ✓ Multi-View Synchronization
              </span>
              <h3 className="font-display text-lg font-bold text-white">
                Connected Investigative Context
              </h3>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Unified map coordinates, timeline milestones, and link graph nodes so filtering one automatically highlights relevant entities across all views.
              </p>
            </div>

            <div className="bg-[#151518] border border-white/10 rounded-2xl p-6 space-y-3">
              <span className="text-emerald-400 font-mono text-xs font-bold block uppercase">
                ✓ Accelerated Discovery
              </span>
              <h3 className="font-display text-lg font-bold text-white">
                Streamlined Lead Triangulation
              </h3>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Cut down hours of manual spreadsheet cross-referencing to seconds by automatically surfacing co-offenders and vehicle registration matches.
              </p>
            </div>

            <div className="bg-[#151518] border border-white/10 rounded-2xl p-6 space-y-3">
              <span className="text-emerald-400 font-mono text-xs font-bold block uppercase">
                ✓ Reduced Cognitive Overload
              </span>
              <h3 className="font-display text-lg font-bold text-white">
                Progressive Complexity Disclosure
              </h3>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Protected high-stress users from decision fatigue by keeping secondary forensic metadata neatly tucked into on-demand side panels.
              </p>
            </div>

            <div className="bg-[#151518] border border-white/10 rounded-2xl p-6 space-y-3">
              <span className="text-emerald-400 font-mono text-xs font-bold block uppercase">
                ✓ Multi-Agency Collaboration
              </span>
              <h3 className="font-display text-lg font-bold text-white">
                Structured Case Sharing
              </h3>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Standardized how detectives compile, annotate, and export court-ready hypothesis dossiers across neighboring municipal jurisdictions.
              </p>
            </div>

            <div className="bg-[#151518] border border-white/10 rounded-2xl p-6 space-y-3">
              <span className="text-emerald-400 font-mono text-xs font-bold block uppercase">
                ✓ Evidentiary Traceability
              </span>
              <h3 className="font-display text-lg font-bold text-white">
                Auditable Link Integrity
              </h3>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Guaranteed that every relationship connection is 100% traceable to source CAD, ALPR, or RMS police records for courtroom integrity.
              </p>
            </div>

          </div>

        </section>


        {/* =========================================================================
            SECTION 13: NDA NOTE
        ========================================================================= */}
        <section id="section-nda" aria-label="Non-disclosure notice" className="w-full">
          <div className="bg-[#141416] border border-amber-500/30 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-5 shadow-xl">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-300 text-lg flex-shrink-0">
              🔒
            </div>
            <div className="space-y-1.5 flex-1">
              <span className="font-label-caps text-xs text-amber-400 uppercase tracking-wider font-semibold block">
                NDA & Non-Disclosure Notice
              </span>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                Because this product was developed under NDA, confidential interfaces, client identity, proprietary datasets, and production information cannot be shown publicly.
              </p>
              <p className="text-xs text-zinc-400 leading-relaxed">
                The visuals presented here are sanitized conceptual representations created to communicate the design process without exposing protected information.
              </p>
            </div>
          </div>
        </section>


        {/* =========================================================================
            SECTION 14: REFLECTION
        ========================================================================= */}
        <section id="section-reflection" aria-labelledby="reflection-heading" className="flex flex-col gap-6">
          
          <div className="space-y-2">
            <span className="font-label-caps text-xs text-amber-400 uppercase tracking-widest font-semibold">
              12 / Senior Designer Reflection
            </span>
            <h2 id="reflection-heading" className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
              What I learned designing for intelligence workflows.
            </h2>
          </div>

          <div className="p-8 sm:p-10 rounded-2xl bg-[#141417] border border-white/10 space-y-4">
            <blockquote className="font-display text-xl sm:text-2xl font-medium text-amber-200/90 leading-snug italic border-l-2 border-amber-400 pl-4">
              &ldquo;The challenge wasn&apos;t putting more information on the screen. It was helping users understand what matters, what connects, and what deserves their attention next.&rdquo;
            </blockquote>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed pt-2">
              Designing for public safety and enterprise intelligence requires extreme empathy for high-stress cognitive thresholds. When lives, community safety, and legal justice depend on software, the designer&apos;s true responsibility is clarity, traceability, and mental stillness.
            </p>
          </div>

        </section>


        {/* =========================================================================
            FINAL SECTION: NEXT CASE STUDY TRANSITION
        ========================================================================= */}
        <section id="section-next" aria-label="Next Case Study Transition" className="pt-12 border-t border-white/15">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-8 rounded-2xl bg-gradient-to-r from-[#18120B] via-[#141416] to-[#18120B] border border-orange-500/30 hover:border-orange-500/60 transition-all duration-300 group">
            
            <div className="space-y-2">
              <span className="font-label-caps text-xs text-orange-400 uppercase tracking-widest font-semibold block">
                Next Case Study
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white group-hover:text-orange-200 transition-colors">
                Bank of Baroda — UX Audit &amp; Mobile Banking Transformation
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400">
                Heuristic evaluation, loan origination workflow redesign, and AI credit scoring for major commercial banking.
              </p>
            </div>

            <button
              type="button"
              onClick={onNextCaseStudy}
              className="px-6 py-3 rounded-full bg-white text-black text-xs sm:text-sm font-semibold tracking-wider font-label-caps uppercase hover:bg-orange-400 transition-all hover:scale-105 active:scale-95 flex items-center gap-2 whitespace-nowrap cursor-pointer shadow-lg flex-shrink-0"
              aria-label="View next case study: Bank of Baroda"
            >
              <span>View Case Study</span>
              <span className="text-base group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span>
            </button>

          </div>
        </section>

      </div>
    </article>
  );
};
