export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  category: 'Enterprise' | 'FinTech' | 'System' | 'Feature' | 'Conversion';
  team: string;
  bgImage: string;
  logoUrl?: string;
  icon?: string;
  isLocked?: boolean;
  metrics: { label: string; value: string }[];
  overview: string;
  challenge: string;
  solution: string;
  impact: string[];
  tags: string[];
  galleryImages: string[];
  architecture?: {
    componentsCount: number;
    tokensCount: number;
    figmaVariants: number;
    frameworks: string[];
  };
}

export interface DesignToken {
  name: string;
  category: 'color' | 'typography' | 'spacing' | 'radius';
  value: string;
  description: string;
}

export interface MusicTrack {
  id: string;
  title: string;
  genre: string;
  duration: string;
  bpm: number;
  key: string;
  audioSampleUrl: string;
  coverArt: string;
}

export interface ShopItem {
  id: string;
  title: string;
  description: string;
  price: string;
  rating: number;
  downloads: number;
  category: 'Figma Template' | 'UI Kit' | 'Icon Pack' | 'Token Set';
  image: string;
  tags: string[];
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
}
