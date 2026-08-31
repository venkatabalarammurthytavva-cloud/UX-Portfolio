import { CaseStudy, ShopItem, MusicTrack, DesignToken, MusicPlatformPlaylist } from '../types';
import tedVisual from '../assets/images/ted_platform_visual_1788106429517.jpg';
import bobVisual from '../assets/images/bob_banking_audit_1788106457893.jpg';
import axisVisual from '../assets/images/axis_amc_wealth_1788106472766.jpg';
import finovationVisual from '../assets/images/finovation_platform_1788106489570.jpg';
import crimeVisual from '../assets/images/crime_analytics_visual_1788106508732.jpg';

export const PROFILE_IMAGE = "https://lh3.googleusercontent.com/aida-public/AB6AXuCfyn6AHFwsnb8ed7fqgaJGMHPFsXxZds6ejl0tDmO1tHjyCpgc2BCmZBlbSI0vQ_xCWpuiMvP9KZv23C_coIlbTNR96LdwCurHmYs3wE_ssic7qTj4e3_jolxtUOWms8mYyvxEJ_7tbJ3NHLm-VTQbsyiiKbT76iZokRYzNqZXBrsz3xYCQiE71mTbDoWpx77Jrqhq7Nac3EhK-R46R8Ls_clzVgDf6fqVlcNcBDeckfeTl5V2nIR50algAyaw4X61";

export const HERO_BACKGROUND = "https://lh3.googleusercontent.com/aida-public/AB6AXuAwhEON2og8ZPNVuO26a1T7ggEDuhoGOvdGW6stKVzOPZVneFgtL_HdTCDp8_vVpmEb7nDxdkjrNT7gZVoAOqeKJxGnUIs7mEmzBMaa2Wkc12olnHOYdac8PLBX9XP4Yager4pYsgM2U7AISQh17fG9_zkUkqaETbIcBWEZL2ZDXlT5keEnXzYcmLDyhyJIk0LtZrYKFDyYESjhTOnm3_62cIlJBGuq9gp1ZWfwO4f7tVgMtGA1dw0";

export interface ClientItem {
  name: string;
  scope: string;
  isFeatured?: boolean;
}

export interface DomainCapability {
  id: string;
  icon: string;
  title: string;
  description: string;
  highlight: string;
}

export const SELECTED_CLIENTS: ClientItem[] = [
  {
    name: "Bank of Baroda",
    scope: "Mobile Banking · UX Transformation",
    isFeatured: true
  },
  {
    name: "Axis Asset Management Company",
    scope: "Wealth Management · Investment Experience",
    isFeatured: true
  },
  {
    name: "Brierley+Partners",
    scope: "Enterprise Platforms · Design Systems",
    isFeatured: true
  },
  {
    name: "Virnichi",
    scope: "End-to-End Digital Product Experience"
  },
  {
    name: "Airlinq",
    scope: "Digital Product Experience · UX/UI"
  },
  {
    name: "Himalaya",
    scope: "Retail · Consumer Experience"
  }
];

export const DOMAINS_WORKED_UPON: DomainCapability[] = [
  {
    id: "fintech",
    icon: "account_balance",
    title: "Fintech & Digital Banking",
    description: "Banking journeys & financial products",
    highlight: "Bank of Baroda · Axis AMC"
  },
  {
    id: "wealth",
    icon: "monitoring",
    title: "Wealth & Asset Management",
    description: "Investment & portfolio experiences",
    highlight: "Axis AMC · Portfolio Management"
  },
  {
    id: "lending",
    icon: "payments",
    title: "Lending & Loan Management",
    description: "Credit workflows & loan operations",
    highlight: "Q-Fund · Loan Management"
  },
  {
    id: "payments",
    icon: "credit_card",
    title: "Payments & Financial Platforms",
    description: "Transaction & payment experiences",
    highlight: "MYnilpay"
  },
  {
    id: "b2b-saas",
    icon: "hub",
    title: "B2B SaaS & Enterprise",
    description: "Complex workflows & operational platforms",
    highlight: "Enterprise SaaS · Operational Tools"
  },
  {
    id: "compliance",
    icon: "gavel",
    title: "Compliance, Risk & Audit",
    description: "Governance & regulated workflows",
    highlight: "Compliance & Audit Platforms"
  },
  {
    id: "analytics",
    icon: "insights",
    title: "Data Analytics & Intelligence",
    description: "Decision-support & data visualization",
    highlight: "Crime Analytics Platform"
  },
  {
    id: "iot",
    icon: "devices_other",
    title: "IoT & Marketplace",
    description: "Connected products & marketplace ecosystems",
    highlight: "IoT Marketplace"
  },
  {
    id: "retail",
    icon: "shopping_bag",
    title: "Retail & E-commerce",
    description: "Customer journeys & retail experiences",
    highlight: "Himalaya Retail"
  },
  {
    id: "devtools",
    icon: "terminal",
    title: "Engineering & Developer Tools",
    description: "Operational dashboards & engineering workflows",
    highlight: "TED Engineering Dashboard"
  },
  {
    id: "design-systems",
    icon: "layers",
    title: "Design Systems & Governance",
    description: "Scalable systems & UX consistency",
    highlight: "Kona · Brierley+Partners"
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "ted-ai-platform",
    title: "TED",
    subtitle: "AI-Powered Value Stream Intelligence & Enterprise Observability Platform",
    category: "Enterprise",
    indexNumber: "01 / 05",
    team: "Enterprise Intelligence",
    bgImage: tedVisual,
    isLocked: false,
    metrics: [
      { label: "Engineering Velocity", value: "+30%" },
      { label: "DevOps Tool Integrations", value: "200+" },
      { label: "Telemetry Latency", value: "<1.2s" },
      { label: "Design System", value: "0 to 1" }
    ],
    overview: "Architected the zero-to-one product experience and comprehensive design system for TED, an AI-powered Value Stream Intelligence and maturity assessment workstation.",
    challenge: "Enterprise engineering leaders lacked end-to-end visibility into software delivery bottlenecks across hundreds of disconnected developer tools and CI/CD pipelines.",
    solution: "Engineered an intuitive intelligence suite featuring automated bottleneck discovery, proactive telemetry dashboards, and multi-tier developer productivity governance.",
    impact: [
      "Enabled client organizations to achieve 30% higher development velocity and workflow transparency.",
      "Unified telemetry pipelines from 200+ developer platforms into actionable executive insights.",
      "Built scalable design token architecture and component library from the ground up."
    ],
    tags: ["Enterprise AI", "Value Stream Intelligence", "DevOps Observability", "Design Systems"],
    galleryImages: [tedVisual],
    architecture: {
      componentsCount: 420,
      tokensCount: 165,
      figmaVariants: 1350,
      frameworks: ["React", "TypeScript", "Tailwind CSS", "Recharts"]
    }
  },
  {
    id: "bank-of-baroda-ux-audit",
    title: "Bank of Baroda — UX Audit",
    subtitle: "Mobile Banking Experience Audit & Redesign",
    category: "Banking UX",
    indexNumber: "02 / 05",
    team: "FinTech UX Audit",
    bgImage: bobVisual,
    isLocked: false,
    metrics: [
      { label: "Loan Processing Speed", value: "+30%" },
      { label: "Drop-off Reduction", value: "-42%" },
      { label: "Regulatory Compliance", value: "100%" },
      { label: "Banker Adoption", value: "4.8 / 5.0" }
    ],
    overview: "Heuristic UX audit and end-to-end workflow transformation for retail and commercial loan origination, introducing AI-driven credit scoring and frictionless underwriting.",
    challenge: "Legacy multi-step loan evaluation workflows suffered from excessive cognitive load, high application drop-offs at compliance gates, and prolonged manual credit review.",
    solution: "Redesigned the loan evaluation lifecycle with progressive disclosure, real-time risk assessment indicators, AI document verification, and automated status telemetry.",
    impact: [
      "Achieved 30% faster loan processing cycles via AI credit evaluation models.",
      "Eliminated 6 redundant manual verification screens, drastically cutting cognitive fatigue for branch officers.",
      "Standardized digital banking workflows across retail lending and commercial SME divisions."
    ],
    tags: ["Banking UX", "UX Audit", "Financial Workflows", "AI Credit Scoring", "FinTech"],
    galleryImages: [bobVisual],
    architecture: {
      componentsCount: 310,
      tokensCount: 120,
      figmaVariants: 890,
      frameworks: ["React", "TypeScript", "Tailwind CSS", "Motion"]
    }
  },
  {
    id: "axis-amc-wealth",
    title: "Axis AMC",
    subtitle: "Wealth Management & Investment Experience",
    category: "Wealth Management",
    indexNumber: "03 / 05",
    team: "Wealth Tech",
    bgImage: axisVisual,
    isLocked: false,
    metrics: [
      { label: "QAAUM Ecosystem", value: "₹3.6L+ Cr" },
      { label: "Digital Inflow Growth", value: "+45%" },
      { label: "Onboarding Speed", value: "3.2x Faster" },
      { label: "Order Execution", value: "99.8%" }
    ],
    overview: "End-to-end digital wealth management journeys and institutional investment portal catering to the ₹3.6L+ Cr QAAUM ecosystem, including GIFT City and MSME investment avenues.",
    challenge: "High-net-worth and institutional investors needed to monitor complex multi-asset allocations and offshore funds without navigating cluttered legacy financial tables.",
    solution: "Created a high-density, data-dense portfolio workstation featuring interactive asset allocation curves, real-time NAV tracking, and streamlined GIFT City onboarding.",
    impact: [
      "Streamlined high-volume institutional investor journeys and GIFT City onboarding workflows.",
      "Visualized deep multi-asset portfolio telemetry with responsive, real-time interactive charts.",
      "Increased self-serve digital portfolio rebalancing among institutional investors."
    ],
    tags: ["Wealth Management", "Asset Allocation", "Financial Dashboards", "Data Visualization", "FinTech"],
    galleryImages: [axisVisual],
    architecture: {
      componentsCount: 280,
      tokensCount: 98,
      figmaVariants: 780,
      frameworks: ["React", "D3.js", "Tailwind CSS", "Recharts"]
    }
  },
  {
    id: "finovation-platform",
    title: "Finovation Platform",
    subtitle: "Lending & Business Management Platform",
    category: "Enterprise Platform",
    indexNumber: "04 / 05",
    team: "Enterprise FinTech",
    bgImage: finovationVisual,
    isLocked: false,
    metrics: [
      { label: "Disbursements Handled", value: "$28B+" },
      { label: "Underwriting Latency", value: "-54%" },
      { label: "Audit Accuracy", value: "100%" },
      { label: "Enterprise Teams", value: "18 Teams" }
    ],
    overview: "Enterprise-grade financial operations and lending workstation designed to support multi-million dollar disbursements with automated risk underwriting and audit trails.",
    challenge: "Underwriters and operations managers navigated disjointed tools, leading to operational friction, manual data entry errors, and slow disbursement turnarounds.",
    solution: "Architected a unified enterprise workstation featuring visual workflow builders, multi-tier approval matrixes, automated rule engines, and instant compliance logging.",
    impact: [
      "Cut institutional underwriting cycle times by more than half through intelligent automation.",
      "Delivered a component-driven enterprise design system adopted across multiple financial product suites.",
      "Enabled seamless auditability and role-based access control for compliance teams."
    ],
    tags: ["Enterprise Platform", "Lending Workflows", "Design Systems", "FinTech Architecture"],
    galleryImages: [finovationVisual],
    architecture: {
      componentsCount: 390,
      tokensCount: 145,
      figmaVariants: 1100,
      frameworks: ["React", "TypeScript", "Tailwind CSS", "Motion"]
    }
  },
  {
    id: "crime-analytics-platform",
    title: "Crime Analytics Platform",
    subtitle: "Data-Driven Crime Insights & Analytics Platform",
    category: "Big Data & Analytics",
    indexNumber: "05 / 05",
    team: "Intelligence UX",
    bgImage: crimeVisual,
    isLocked: false,
    metrics: [
      { label: "Records Ingested", value: "1B+" },
      { label: "Law Enforcement Agencies", value: "2,100+" },
      { label: "Geospatial Query", value: "<800ms" },
      { label: "Commercial Deals", value: "~$2.5M" }
    ],
    overview: "Enterprise geospatial crime analytics and intelligence console ingesting 1B+ records across 2,100+ law enforcement agencies, enabling rapid incident correlation and predictive hotspot mapping.",
    challenge: "Intelligence analysts and investigators struggled with fragmented cross-jurisdictional datasets with no unified way to correlate incidents in real time.",
    solution: "Architected a high-density, dark-mode geospatial intelligence console with multi-layer map filtering, automated link-analysis graphs, incident timeline reconstruction, and sub-second query response.",
    impact: [
      "Enabled multi-agency coordination with sub-second querying across billion-scale incident datasets.",
      "Drove ~$2.5M in enterprise commercial contracts through superior UX and mission-critical visualization clarity.",
      "Reduced incident pattern recognition time from hours to minutes for field analysts."
    ],
    tags: ["Big Data Analytics", "Geospatial Intelligence", "Information Architecture", "Data Visualization", "Enterprise UX"],
    galleryImages: [crimeVisual],
    architecture: {
      componentsCount: 450,
      tokensCount: 180,
      figmaVariants: 1520,
      frameworks: ["React", "D3.js", "Mapbox GL", "Tailwind CSS"]
    }
  }
];

export const WORK_EXPERIENCE = [
  {
    role: "UI/UX Designer",
    company: "NeoSOFT Technologies",
    period: "March 2024 - Present",
    location: "Remote",
    description: "Led user research and complex workflow redesigns across Banking, Wealth Management, Public Safety, and Retail. Bank of Baroda UX audit informed improvements achieving 30% faster loan processing via AI credit evaluation; designed Axis AMC GIFT City/MSME digital journeys across ₹3.6L+ Cr QAAUM ecosystem; UI architecture for Crime Analytics Platform (1B+ records across 2,100+ agencies).",
    highlights: [
      "Axis AMC ₹3.6L+ Cr digital transformation",
      "Bank of Baroda UX audit (30% faster loan processing)",
      "Crime Analytics Platform (~$2.5M commercial deals)",
      "HMart retail store field research in Mumbai"
    ]
  },
  {
    role: "Senior CX Designer (Promoted)",
    company: "Qentelli Solutions",
    period: "February 2022 - March 2024",
    location: "Hyderabad, India",
    description: "Sole designer responsible for TED and Maturity Assessment partnering with Product Architect, VP, and CEO stakeholders. Shaped AI-powered Value Stream Intelligence, ACM, dashboards, API integrations across 200+ platforms, and design system from scratch. TED helped clients achieve 30% higher productivity.",
    highlights: [
      "Sole designer for TED & Maturity Assessment",
      "AI-powered Value Stream Intelligence & 200+ API integrations",
      "Design system architected from scratch",
      "Helped clients achieve 30% higher productivity"
    ]
  },
  {
    role: "UI/UX Designer",
    company: "Get Infy Solutions",
    period: "February 2021 - February 2022",
    location: "Hyderabad, India",
    description: "Simplified complex lending workflows for Q-Fund supporting $28B+ in total disbursements. Designed screens and took ownership of product thinking across lending, warehouse operations, IoT marketplaces, automotive dashboards, crypto, and financial products while mentoring trainees.",
    highlights: [
      "Q-Fund lending platform ($28B+ disbursements)",
      "IoT Marketplace & automotive dashboard UX",
      "Mentored trainees & built reusable UI kits",
      "Selected projects: Q-Fund, Marketlinq, Finovate, Trepont.ai"
    ]
  }
];

export const DESIGN_TOKENS: DesignToken[] = [
  { name: "background", category: "color", value: "#0D0D0E", description: "Deepest architectural black canvas background" },
  { name: "surface-container", category: "color", value: "#1A1A1C", description: "Bento box mid-layer card surface" },
  { name: "surface-border", category: "color", value: "#27272A", description: "High-precision grid hairline border" },
  { name: "accent-emerald", category: "color", value: "#10B981", description: "Success status & system health indicator" },
  { name: "primary-text", category: "color", value: "#E5E2E1", description: "Off-white primary content typography" },
  { name: "font-display", category: "typography", value: "Inter (700 Bold)", description: "High-impact display title scale" },
  { name: "font-label-caps", category: "typography", value: "JetBrains Mono (500)", description: "Technical caps & metadata label scale" },
  { name: "radius-card", category: "radius", value: "0.75rem (12px)", description: "Bento box outer container radius" },
  { name: "grid-spacing", category: "spacing", value: "24px", description: "Base structural layout gutter" }
];

export const MUSIC_TRACKS: MusicTrack[] = [
  {
    id: "track-1",
    title: "Midnight Figma Loops",
    genre: "Lo-Fi / Synthwave",
    duration: "2:45",
    bpm: 92,
    key: "Fm",
    audioSampleUrl: "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=lofi-study-112191.mp3",
    coverArt: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "track-2",
    title: "Architectural Oscillations",
    genre: "Deep House / Ambient",
    duration: "3:20",
    bpm: 122,
    key: "Am",
    audioSampleUrl: "https://cdn.pixabay.com/download/audio/2022/01/18/audio_d0a13f69d2.mp3?filename=chill-abstract-intention-12099.mp3",
    coverArt: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "track-3",
    title: "Design Tokens & Analog Synths",
    genre: "Chillhop",
    duration: "2:15",
    bpm: 85,
    key: "C#m",
    audioSampleUrl: "https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8a705b6.mp3?filename=lofi-chill-140858.mp3",
    coverArt: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80"
  }
];

export const MUSIC_PLATFORM_PLAYLISTS: MusicPlatformPlaylist[] = [
  {
    id: "spotify-playlist",
    platform: "Spotify",
    title: "Deep Flow & Late Night Synths",
    curatorNote: "Curated collection of mellow analog synths, low-tempo beats, and deep focus rhythms crafted for uninterrupted Figma and coding deep work.",
    url: "https://open.spotify.com/playlist/37i9dQZF1DXdLEN7aqioXM",
    trackCount: "48 Tracks · 2h 45m",
    genreTag: "Lo-Fi / Synthwave",
    featuredTracks: [
      "Midnight Figma Loops",
      "Architectural Oscillations",
      "Design Tokens & Analog Synths",
      "Sub-bass Heuristics"
    ],
    themeColor: "#1DB954",
    badge: "Curated Playlist"
  },
  {
    id: "ytmusic-playlist",
    platform: "YouTube Music",
    title: "Ambient Modular Sessions",
    curatorNote: "Long-play ambient recordings, generative Eurorack modular patches, and immersive hardware groovebox soundscapes.",
    url: "https://music.youtube.com/playlist?list=RDCLAK5uy_kfdijBaq83DDGT4UpS-G0fA-L1fQf5f9M",
    trackCount: "32 Sessions · 3h 10m",
    genreTag: "Ambient Modular",
    featuredTracks: [
      "Eurorack Generative Patch #04",
      "Analog Filter Sweeps (Live)",
      "Late Night Sine Waves",
      "Resonant Decay Study"
    ],
    themeColor: "#FF0000",
    badge: "Live Sessions & Stems"
  },
  {
    id: "soundcloud-playlist",
    platform: "SoundCloud",
    title: "Unreleased Patches & Live Jams",
    curatorNote: "Raw works in progress, live hardware jam recordings, prototype synthesizer soundscapes, and lossy experimental sound design clips.",
    url: "https://soundcloud.com/discover/sets/weekly",
    trackCount: "24 Original Mixes",
    genreTag: "Chillhop / Modular",
    featuredTracks: [
      "Prophet Rev2 Jam - Take 3",
      "Lofi Tape Saturation Loop",
      "Moog Subharmonicon Sketch",
      "Spring Reverb Reflections"
    ],
    themeColor: "#FF5500",
    badge: "WIPs & Unreleased"
  }
];

export const SHOP_ITEMS: ShopItem[] = [
  {
    id: "architect-ui-kit",
    title: "Architect Enterprise UI Kit",
    description: "4,000+ Figma components, autolayout 5.0, variables, dark & light themes, WCAG AAA compliant.",
    price: "$49",
    rating: 4.9,
    downloads: 1420,
    category: "Figma Template",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=600&q=80",
    tags: ["Figma Variables", "Tokens", "Enterprise", "Dark Mode"]
  },
  {
    id: "fintech-dashboard-kit",
    title: "FinTech & Loan Management System",
    description: "Complete UI kit for banking, loan origination, debt waterfall charts, and risk analysis dashboards.",
    price: "$39",
    rating: 5.0,
    downloads: 890,
    category: "UI Kit",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
    tags: ["FinTech", "Recharts", "Dashboard", "Trading"]
  },
  {
    id: "mono-icon-pack",
    title: "Precision Mono Icon Pack",
    description: "250+ vector icons crafted on a 24px grid with 1.5px stroke weight, exported for SVG, React, & Vue.",
    price: "$19",
    rating: 4.8,
    downloads: 2150,
    category: "Icon Pack",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
    tags: ["Icons", "SVG", "React Icons", "Grid 24px"]
  },
  {
    id: "design-tokens-json",
    title: "Style Dictionary Tokens Engine",
    description: "Automated JSON token config repository generator for syncing Figma variables to Tailwind CSS & Web.",
    price: "$29",
    rating: 4.9,
    downloads: 640,
    category: "Token Set",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80",
    tags: ["Tokens", "JSON", "Style Dictionary", "DevOps"]
  }
];
