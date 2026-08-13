import { CaseStudy, ShopItem, MusicTrack, DesignToken } from '../types';

export const PROFILE_IMAGE = "https://lh3.googleusercontent.com/aida-public/AB6AXuAxjzu35L6fm9qqspWudfz0VVyKKF0k8iwwMHHHQ00rsV2bdjO2qPgDfFNwKoslTHCzillxtn9gv648xxbhcAe4atveTQq3EnuqJNsFVp97QpCk06C9k6mtO64XRu32tx1MPMI1tNgbeyhFZRgcRbOMZ5gDTo6J8Rbc6v-Kl4riYN5Q_Hu73vYqLhAfh9F8pMZKp2U4QikdTfuVjebu0FS_gFhb8CqUbkfe9s53LiKyZoAVBG4Hc3VQYZh1iJAWWDlM";

export const HERO_BACKGROUND = "https://lh3.googleusercontent.com/aida-public/AB6AXuAwhEON2og8ZPNVuO26a1T7ggEDuhoGOvdGW6stKVzOPZVneFgtL_HdTCDp8_vVpmEb7nDxdkjrNT7gZVoAOqeKJxGnUIs7mEmzBMaa2Wkc12olnHOYdac8PLBX9XP4Yager4pYsgM2U7AISQh17fG9_zkUkqaETbIcBWEZL2ZDXlT5keEnXzYcmLDyhyJIk0LtZrYKFDyYESjhTOnm3_62cIlJBGuq9gp1ZWfwO4f7tVgMtGA1dw0";

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "aether-capital",
    title: "Aether Capital",
    subtitle: "Enterprise FinTech Loan Management Workflow",
    category: "Enterprise",
    team: "Aether Design",
    bgImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6IyGnRO45FgZwfYbRih8muYvuOYFinC5Xn9aJYPMp8_VqAe6W4yy8vJT_giQsRqdiRdYSXiGKQOqTIBbXLnZyYsg40w4mvgDNpnkVj6wjLvCq0FVnZKwXuQOaTjuWSq_da4_ynK0e-KqY-dKema2kqQg8ihtTl-AXF2Q-rEX_B4Kwv_6Dh7b7-_jdAbQdzL8SUa_l5ySt-onZAUiFFW92HmAayuhQjyD7ETtRPVh2GpLOvvFEzZ0",
    logoUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_p6isciRFlpsYDUfeaHm7O6iUEd-fukuuz6WDAHzeveMnZk9wGXI2GgT76x2D4PhtL6GkkDIXHtTKI_sg_yKWqRFqoMq_LUZTL-tcATfxcPR1AMWVYDqbovi-lr9hxOx-heasUF79sVqvEPVwwx_GCts6XpPeNcBXVPg1Fb3lwDqymJgNxyXQtIO_rLVtpG7OkRgyzJL6NrOsfcoL56LR9tcugocuApOKNQPYA1k6lXnu_jyyyRg",
    isLocked: true,
    metrics: [
      { label: "Loan Approval Speed", value: "3.4x Faster" },
      { label: "Underwriting Errors", value: "-68%" },
      { label: "Capital Deployed", value: "$1.18B" },
      { label: "User Satisfaction", value: "98.4%" }
    ],
    overview: "Aether Capital required an end-to-end loan management workstation for institutional loan underwriters, risk analysts, and portfolio managers handling complex debt structures.",
    challenge: "Institutional loan processing was bogged down by fragmented spreadsheets, legacy green-screen terminals, and high cognitive load leading to costly compliance and underwriting mistakes.",
    solution: "Designed a dark-mode optimized, high-density dashboard system featuring automated risk telemetry, interactive debt waterfall charts, and streamlined multi-tier approval flows.",
    impact: [
      "Reduced average loan origination cycle time from 14 days to 4 days.",
      "Eliminated manual spreadsheet reconciliation across 1,200+ daily loan entries.",
      "Adopted by 45+ institutional debt funds across North America."
    ],
    tags: ["FinTech", "Enterprise UX", "Design Systems", "Data Visualization"],
    galleryImages: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC6IyGnRO45FgZwfYbRih8muYvuOYFinC5Xn9aJYPMp8_VqAe6W4yy8vJT_giQsRqdiRdYSXiGKQOqTIBbXLnZyYsg40w4mvgDNpnkVj6wjLvCq0FVnZKwXuQOaTjuWSq_da4_ynK0e-KqY-dKema2kqQg8ihtTl-AXF2Q-rEX_B4Kwv_6Dh7b7-_jdAbQdzL8SUa_l5ySt-onZAUiFFW92HmAayuhQjyD7ETtRPVh2GpLOvvFEzZ0"
    ],
    architecture: {
      componentsCount: 380,
      tokensCount: 140,
      figmaVariants: 1200,
      frameworks: ["React", "TypeScript", "Tailwind CSS", "Recharts"]
    }
  },
  {
    id: "wealth-portal",
    title: "Investment & Wealth Portal",
    subtitle: "Premium Wealth Management Dashboard",
    category: "FinTech",
    team: "Wealth UX",
    bgImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDOhkfCwtrRf8HPfeMkS2tWefo1eoOJGQiqUQJmFDCmrHRw_MhVh6bodQMxPAh7UrCMkffgX83jcTeAnr-NdrjdmQSH_fwjmrSdEANmzreRUVQ5zMFbwWrpM3Ze8QnTfoK2k9P2vHVHVONCbR8ZPqD4b9043ZZyuDiPwwoFUqNe-U-oZWUBcH6VD_7_dj1GoQ2kwEkgXcjynSoaFila-LFXrc6rq5IYgaWVjTd-xQ88MLl9TFNOuFE",
    icon: "account_balance_wallet",
    isLocked: true,
    metrics: [
      { label: "AUM Monitored", value: "$14.8B" },
      { label: "Daily Active Users", value: "420K" },
      { label: "NPS Score", value: "+74" },
      { label: "Session Duration", value: "+45%" }
    ],
    overview: "A unified wealth portal for high-net-worth individuals and wealth advisors, featuring real-time portfolio health metrics, tax-loss harvesting recommendations, and asset allocation breakdown.",
    challenge: "High net-worth clients struggled to visualize cross-asset exposure (crypto, real estate, public equities, private equity) in a single coherent interface.",
    solution: "Architected a modular Bento-grid portal with responsive chart modules, custom dark luxury theme, and instant one-click rebalancing workflows.",
    impact: [
      "Increased user engagement by 45% month-over-month.",
      "Featured as Best Wealth Tech Design at Finovate 2024.",
      "Streamlined advisory review prep time from 2 hours to 15 minutes."
    ],
    tags: ["Wealth Tech", "Dashboard", "Bento Grid", "Data Viz"],
    galleryImages: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDOhkfCwtrRf8HPfeMkS2tWefo1eoOJGQiqUQJmFDCmrHRw_MhVh6bodQMxPAh7UrCMkffgX83jcTeAnr-NdrjdmQSH_fwjmrSdEANmzreRUVQ5zMFbwWrpM3Ze8QnTfoK2k9P2vHVHVONCbR8ZPqD4b9043ZZyuDiPwwoFUqNe-U-oZWUBcH6VD_7_dj1GoQ2kwEkgXcjynSoaFila-LFXrc6rq5IYgaWVjTd-xQ88MLl9TFNOuFE"
    ],
    architecture: {
      componentsCount: 290,
      tokensCount: 95,
      figmaVariants: 850,
      frameworks: ["React", "D3.js", "Tailwind CSS", "Motion"]
    }
  },
  {
    id: "design-system",
    title: "Multi-Brand Design System",
    subtitle: "4,000+ Reusable Components",
    category: "System",
    team: "Design Ops",
    bgImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAyOlC1Cx1rvnSEKGHI0gwZffAoB5d27AZMpFLSMgSdvOtJ5pK2sh2ReERmrfGwjo6T-YBvR0uUW-sU8z7DMAy7jF4IQm1k2avBpfZQNNG0Uokc_gGIPTKm72aymBmhZOpNSjomWXVgAfYsUTkk8zDa2ocjC6mvLNp-4CLXWuIPMnT0SW58fc2Vhwk2ZK4M2ZrRixxzBI-LxxJcKdA2P6htDXFn63K7cSXfNVQ8nRKM5y4imhfkBOI",
    icon: "category",
    isLocked: true,
    metrics: [
      { label: "Reusable Components", value: "4,000+" },
      { label: "Teams Onboarded", value: "18 Product Teams" },
      { label: "Dev Efficiency", value: "+52%" },
      { label: "Accessibility Rate", value: "100% WCAG AAA" }
    ],
    overview: "Built a comprehensive token-first design system named Architect, enabling 18 product teams across 3 brand verticals to ship pixel-perfect, accessible UI components at scale.",
    challenge: "Fragmented UI components across web, iOS, and Android resulted in brand inconsistency, accessibility compliance failures, and duplicated frontend engineering effort.",
    solution: "Created single-source-of-truth Figma variable tokens synced automatically via Style Dictionary pipeline to React, Web Components, and React Native repositories.",
    impact: [
      "Accelerated feature design-to-production handoff velocity by 52%.",
      "Achieved 100% WCAG 2.1 AAA color contrast and keyboard navigation compliance.",
      "Saved an estimated $1.2M annually in engineering rework."
    ],
    tags: ["Design System", "Tokens", "Figma Variables", "Accessibility"],
    galleryImages: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAyOlC1Cx1rvnSEKGHI0gwZffAoB5d27AZMpFLSMgSdvOtJ5pK2sh2ReERmrfGwjo6T-YBvR0uUW-sU8z7DMAy7jF4IQm1k2avBpfZQNNG0Uokc_gGIPTKm72aymBmhZOpNSjomWXVgAfYsUTkk8zDa2ocjC6mvLNp-4CLXWuIPMnT0SW58fc2Vhwk2ZK4M2ZrRixxzBI-LxxJcKdA2P6htDXFn63K7cSXfNVQ8nRKM5y4imhfkBOI"
    ],
    architecture: {
      componentsCount: 4200,
      tokensCount: 520,
      figmaVariants: 14000,
      frameworks: ["Figma Tokens", "Style Dictionary", "React", "Tailwind CSS"]
    }
  },
  {
    id: "mobile-banking",
    title: "Mobile Banking Redesign",
    subtitle: "Increasing Precision in UX flows",
    category: "Feature",
    team: "Microsoft AI / Banking",
    bgImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBs6JqU7zEsNM0g3iGR9iM37zzpwHvmrDtfucXvdtEadz5j801Co8ZarYSaYamOV4A3dl2PZ97lDSVyZwxvPAR33Pod1sZGdq7owIr9HBYi8L0FKE1A1a6mZ9--0mTjKm6n9L8PyJwThLQHxo4vf6GtVTYwLOrnB-if9mDjCKypCbP9CRGZ9YxhZY_IGDYIrpdqu9KfiLThX8JuP9qda6k1KFbolUGpg2NIzUHuZLWqlikzJBLiGww",
    logoUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_p6isciRFlpsYDUfeaHm7O6iUEd-fukuuz6WDAHzeveMnZk9wGXI2GgT76x2D4PhtL6GkkDIXHtTKI_sg_yKWqRFqoMq_LUZTL-tcATfxcPR1AMWVYDqbovi-lr9hxOx-heasUF79sVqvEPVwwx_GCts6XpPeNcBXVPg1Fb3lwDqymJgNxyXQtIO_rLVtpG7OkRgyzJL6NrOsfcoL56LR9tcugocuApOKNQPYA1k6lXnu_jyyyRg",
    isLocked: true,
    metrics: [
      { label: "App Store Rating", value: "4.9 / 5.0" },
      { label: "Transfer Friction", value: "-34%" },
      { label: "Monthly Transfers", value: "2.4M" },
      { label: "Biometric Auth", value: "99.1%" }
    ],
    overview: "Complete UX overhaul for a top-tier retail mobile banking application serving millions of daily active users, introducing quick-pay cards, smart category tagging, and Face ID instant execution.",
    challenge: "Complex multi-step payment transfer flows resulted in high drop-offs and customer support calls regarding accidental misdirected funds.",
    solution: "Designed a streamlined single-screen payment card interface with real-time beneficiary verification, tactile gesture triggers, and haptic feedback loops.",
    impact: [
      "Reduced transaction friction by 34% with zero reported misdirected payments.",
      "Increased App Store user rating from 3.8 to 4.9 stars.",
      "Processed 2.4 million seamless mobile transfers within the first quarter."
    ],
    tags: ["Mobile UX", "iOS / Android", "FinTech", "Micro-interactions"],
    galleryImages: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBs6JqU7zEsNM0g3iGR9iM37zzpwHvmrDtfucXvdtEadz5j801Co8ZarYSaYamOV4A3dl2PZ97lDSVyZwxvPAR33Pod1sZGdq7owIr9HBYi8L0FKE1A1a6mZ9--0mTjKm6n9L8PyJwThLQHxo4vf6GtVTYwLOrnB-if9mDjCKypCbP9CRGZ9YxhZY_IGDYIrpdqu9KfiLThX8JuP9qda6k1KFbolUGpg2NIzUHuZLWqlikzJBLiGww"
    ],
    architecture: {
      componentsCount: 190,
      tokensCount: 75,
      figmaVariants: 620,
      frameworks: ["React Native", "Figma", "Motion"]
    }
  },
  {
    id: "ecommerce-checkout",
    title: "E-commerce Checkout Flow",
    subtitle: "Optimizing conversion for global retail",
    category: "Conversion",
    team: "Commerce UX",
    bgImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuC2m-CnPtExm6XD7OpRaq_fSA76XhQHzMNaAwIFsjIUcQL7jgRT_xj5WldMlZBAy1PIWcOiK7nm1TFdkttz3qjnpdBhGbVkAlBPHexr4MaIzEX5w8fQGi_FDhmY-f7yj7RieD7Nhexjn_gniVbsFeYz0YUL_TGIZTW4yx6qBzF7VGq8Z70GBO8R5ZwUkZLzcPJc_hCTrrMQp8gXu96JmVLLgIMOCFzcZDZZXBh0bXdN31rOuP4D0Ig",
    icon: "shopping_cart",
    isLocked: true,
    metrics: [
      { label: "Checkout Conversion", value: "+28.4%" },
      { label: "Cart Abandonment", value: "-19%" },
      { label: "Average Order Value", value: "+$42" },
      { label: "Global Currencies", value: "32 Supported" }
    ],
    overview: "High-converting single-page checkout flow for a global luxury streetwear retailer, unifying multi-currency payments, Express Apple/Google Pay, and inline customs tax calculation.",
    challenge: "High cart abandonment at checkout due to confusing multi-page steps, unexpected shipping fee reveals, and lack of localized payment gateways.",
    solution: "Engineered a transparent single-page accordion checkout interface with live order summary recalculation, instant address auto-complete, and one-tap guest checkout.",
    impact: [
      "Boosted checkout completion rate by +28.4% globally.",
      "Decreased cart abandonment rate by 19% across EU and APAC regions.",
      "Lifted overall Average Order Value (AOV) by $42 per transaction."
    ],
    tags: ["E-Commerce", "Conversion Rate Optimization", "Checkout", "Global Payments"],
    galleryImages: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC2m-CnPtExm6XD7OpRaq_fSA76XhQHzMNaAwIFsjIUcQL7jgRT_xj5WldMlZBAy1PIWcOiK7nm1TFdkttz3qjnpdBhGbVkAlBPHexr4MaIzEX5w8fQGi_FDhmY-f7yj7RieD7Nhexjn_gniVbsFeYz0YUL_TGIZTW4yx6qBzF7VGq8Z70GBO8R5ZwUkZLzcPJc_hCTrrMQp8gXu96JmVLLgIMOCFzcZDZZXBh0bXdN31rOuP4D0Ig"
    ],
    architecture: {
      componentsCount: 140,
      tokensCount: 60,
      figmaVariants: 480,
      frameworks: ["React", "Shopify Hydrogen", "Tailwind CSS"]
    }
  }
];

export const WORK_EXPERIENCE = [
  {
    role: "Senior Systems & Product Designer",
    company: "NeoSOFT",
    period: "2023 - Present",
    location: "Hyderabad, India",
    description: "Leading enterprise FinTech UI architecture, multi-brand design system operations, and mentoring junior UI/UX engineers. Designing complex loan management and trading platforms.",
    highlights: ["Built Architect Enterprise Design System", "Shipped 6 enterprise portals", "Achieved 100% WCAG AAA compliance"]
  },
  {
    role: "UI/UX Product Specialist",
    company: "Qentelli",
    period: "2021 - 2023",
    location: "Hyderabad, India",
    description: "Spearheaded user research, rapid interactive prototyping, and cross-platform mobile banking redesigns for Fortune 500 financial institutions.",
    highlights: ["Redesigned retail banking app for 2M+ active users", "Reduced user drop-off by 34%", "Led client design workshops"]
  },
  {
    role: "UI Designer & Developer",
    company: "Get Infy Solutions",
    period: "2019 - 2021",
    location: "Hyderabad, India",
    description: "Crafted high-converting e-commerce web applications, visual design guidelines, and interactive dashboard UI components.",
    highlights: ["Designed 15+ SaaS and e-commerce platforms", "Created custom icon sets and illustration libraries"]
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
