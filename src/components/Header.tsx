import React from 'react';
import { PROFILE_IMAGE } from '../data/portfolioData';

interface HeaderProps {
  activeTab: 'work' | 'systems' | 'about' | 'shop';
  setActiveTab: (tab: 'work' | 'systems' | 'about' | 'shop') => void;
  onOpenAI: () => void;
  onOpenContact: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onOpenAI,
  onOpenContact,
}) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0D0D0E]/95 backdrop-blur-md border-b border-[#202022] transition-all">
      <div className="flex justify-between items-center h-20 px-6 sm:px-8 max-w-[1440px] mx-auto">
        {/* Left: Circular Profile Picture */}
        <div className="flex items-center">
          <button
            onClick={() => setActiveTab('work')}
            className="flex items-center group focus:outline-none transition-transform hover:scale-105 active:scale-95"
            title="Balaram - Senior Systems & Product Designer"
          >
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden border border-white/20 group-hover:border-white transition-colors bg-[#1A1A1C] shadow-md flex items-center justify-center">
              <img
                src={PROFILE_IMAGE}
                alt="Balaram"
                className="w-full h-full object-cover"
              />
            </div>
          </button>
        </div>

        {/* Center: Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-12 font-label-caps text-[13px] tracking-[0.18em] uppercase">
          {/* WORK */}
          <button
            onClick={() => setActiveTab('work')}
            className={`transition-all py-1 relative ${
              activeTab === 'work'
                ? 'text-white font-semibold after:content-[\'\'] after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[2px] after:bg-white'
                : 'text-[#A1A1AA] hover:text-white font-medium'
            }`}
          >
            WORK
          </button>

          {/* SOLUTIONS (mapped to systems & token explorer) */}
          <button
            onClick={() => setActiveTab('systems')}
            className={`transition-all py-1 relative ${
              activeTab === 'systems'
                ? 'text-white font-semibold after:content-[\'\'] after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[2px] after:bg-white'
                : 'text-[#A1A1AA] hover:text-white font-medium'
            }`}
          >
            SOLUTIONS
          </button>

          {/* ABOUT */}
          <button
            onClick={() => setActiveTab('about')}
            className={`transition-all py-1 relative ${
              activeTab === 'about'
                ? 'text-white font-semibold after:content-[\'\'] after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[2px] after:bg-white'
                : 'text-[#A1A1AA] hover:text-white font-medium'
            }`}
          >
            ABOUT
          </button>

          {/* CONNECT ↗ */}
          <button
            onClick={onOpenContact}
            className="text-[#A1A1AA] hover:text-white font-medium transition-all py-1 flex items-center gap-1.5 group"
          >
            <span>CONNECT</span>
            <span className="text-sm font-sans group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
          </button>
        </nav>

        {/* Right: 5 Circular Social & Action Badges */}
        <div className="flex items-center gap-3">
          {/* 1. LinkedIn Badge */}
          <a
            href="https://www.linkedin.com/in/t-balaram/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="w-[20px] h-[20px] flex-shrink-0 group transition-transform hover:scale-110 active:scale-95"
            title="LinkedIn Profile"
          >
            <svg className="w-[20px] h-[20px] block" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="10" fill="#C4C5C8" className="group-hover:fill-white transition-colors" />
              <circle cx="6.5" cy="6.2" r="1.15" fill="#000000" />
              <rect x="5.4" y="8.3" width="2.2" height="5.8" rx="0.3" fill="#000000" />
              <path d="M9.1 8.3h2.2v.9c.5-.7 1.3-1.05 2.2-1.05 1.6 0 2.7 1.0 2.7 2.8v4.4h-2.2v-3.7c0-.8-.3-1.3-1.1-1.3-.7 0-1.2.4-1.2 1.3v3.7H9.1V8.3z" fill="#000000" />
            </svg>
          </a>

          {/* 2. Behance Badge */}
          <a
            href="https://www.behance.net/tavvabalaram"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Behance Portfolio"
            className="w-[20px] h-[20px] flex-shrink-0 group transition-transform hover:scale-110 active:scale-95"
            title="Behance Portfolio"
          >
            <svg className="w-[20px] h-[20px] block" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="10" fill="#C4C5C8" className="group-hover:fill-white transition-colors" />
              <g transform="translate(3.1, 4.0) scale(0.57)">
                <path d="M22 7h-7v2h7V7zm-1.86 5.86c-.53-.41-1.3-.61-2.28-.61-1.22 0-2.22.42-2.92 1.25-.69.83-1.04 1.95-1.04 3.32 0 1.42.36 2.53 1.07 3.34.72.8 1.77 1.2 3.14 1.2 1.2 0 2.15-.31 2.86-.94.71-.62 1.09-1.44 1.15-2.45h-2.29c-.06.45-.23.8-.52 1.04-.29.24-.71.36-1.25.36-.67 0-1.2-.2-1.57-.61-.38-.41-.58-1-.6-1.78h6.58c.03-.23.04-.49.04-.76 0-1.46-.39-2.61-1.18-3.37zm-4.04 2.45c.04-.57.21-1.01.5-1.31.29-.3.69-.45 1.2-.45.5 0 .89.14 1.16.42.27.28.43.71.47 1.34h-3.33zM8.34 11.23c.75-.41 1.29-1.08 1.29-2.02 0-.74-.29-1.36-.83-1.79C8.26 7 7.42 6.78 6.32 6.78H0v12.39h6.73c1.23 0 2.19-.3 2.82-.88.63-.58.98-1.39.98-2.39 0-1.14-.73-2.06-2.19-2.67zM2.87 8.7h3.19c.65 0 1.14.12 1.43.34.29.23.45.57.45 1.01 0 .47-.17.82-.49 1.04-.33.22-.84.34-1.53.34H2.87V8.7zm3.43 8.56H2.87v-3.32h3.48c.76 0 1.32.13 1.66.38.34.25.53.64.53 1.17 0 .58-.2 1.01-.58 1.29-.39.29-.98.48-1.66.48z" fill="#000000" />
              </g>
            </svg>
          </a>

          {/* 3. Dribbble Badge */}
          <a
            href="https://dribbble.com/tavvabalaram"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Dribbble Portfolio"
            className="w-[20px] h-[20px] flex-shrink-0 group transition-transform hover:scale-110 active:scale-95"
            title="Dribbble Portfolio"
          >
            <svg className="w-[20px] h-[20px] block" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="10" fill="#C4C5C8" className="group-hover:fill-white transition-colors" />
              <g transform="translate(3.5, 3.5) scale(0.54)">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.65 5.26c.85 1.19 1.35 2.65 1.35 4.22 0 .1-.01.19-.01.28-.06-.01-.11-.02-.17-.02-1.62 0-3.06.71-4.02 1.83-.15-.34-.31-.67-.49-.99 1.9-.88 3.35-2.59 3.35-4.61 0-.24-.02-.47-.06-.71h.05zm-9.07-1.47c.86-.59 1.89-.94 3-.94.53 0 1.03.08 1.52.22-.05.38-.08.78-.08 1.18 0 1.32.3 2.55.82 3.64-1.14.43-2.41.67-3.74.67-.92 0-1.81-.11-2.65-.32.28-1.8 1.1-3.38 2.13-4.45zm-5.34 4.54c0-.1.01-.19.01-.28.01-.05.02-.1.02-.15 1.32-.21 2.5-.81 3.44-1.67.65.18 1.34.28 2.06.28.83 0 1.62-.13 2.35-.37.16.3.31.61.44.93-1.23.47-2.33 1.21-3.19 2.12-2.1-.4-4.33-.55-5.13-.86zm.54 6.14c.5-.14 1.24-.22 2.45-.22.72 0 1.55.03 2.51.12-.09.43-.15.88-.15 1.34 0 1.57.63 3 1.65 4.03-2.85-.18-5.27-1.99-6.46-5.27zm8.33 5.47c-.99-.94-1.6-2.25-1.6-3.7 0-.31.03-.61.08-.91 1.58.35 2.89 1.17 3.62 2.25-.58.86-1.38 1.58-2.31 2.05-.25.11-.51.21-.79.31zm4.54-2.16c-.8-.95-1.99-1.58-3.32-1.73.82-1.02 2.09-1.67 3.51-1.67.17 0 .33.01.5.03-.06 1.29-.31 2.49-.69 3.37z" fill="#000000" />
              </g>
            </svg>
          </a>

          {/* 4. Medium Badge */}
          <a
            href="https://medium.com/@tavvabalaram"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Medium Articles"
            className="w-[20px] h-[20px] flex-shrink-0 group transition-transform hover:scale-110 active:scale-95"
            title="Medium Articles"
          >
            <svg className="w-[20px] h-[20px] block" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="10" fill="#C4C5C8" className="group-hover:fill-white transition-colors" />
              <g transform="translate(3.1, 4.0) scale(0.57)">
                <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" fill="#000000" />
              </g>
            </svg>
          </a>

          {/* 5. Direct Email / Connect Badge */}
          <a
            href="mailto:venkatabalarammurthy.tavva@gmail.com"
            aria-label="Send Email to venkatabalarammurthy.tavva@gmail.com"
            className="w-[20px] h-[20px] flex-shrink-0 group transition-transform hover:scale-110 active:scale-95 focus:outline-none"
            title="Email / Send Direct Message"
          >
            <svg className="w-[20px] h-[20px] block" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="10" fill="#C4C5C8" className="group-hover:fill-white transition-colors" />
              <rect x="4.8" y="6.4" width="10.4" height="7.2" rx="1.0" stroke="#000000" strokeWidth="1.2" />
              <path d="M5.4 7.2l4.6 3.6 4.6-3.6" stroke="#000000" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>

      {/* Mobile Sub-Navigation Bar */}
      <div className="flex md:hidden justify-around items-center h-12 border-t border-[#202022] bg-[#111113] font-label-caps text-[11px] uppercase tracking-widest text-[#A1A1AA] px-4">
        <button
          onClick={() => setActiveTab('work')}
          className={`py-1 ${activeTab === 'work' ? 'text-white font-bold border-b-2 border-white' : 'hover:text-white'}`}
        >
          WORK
        </button>
        <button
          onClick={() => setActiveTab('systems')}
          className={`py-1 ${activeTab === 'systems' ? 'text-white font-bold border-b-2 border-white' : 'hover:text-white'}`}
        >
          SOLUTIONS
        </button>
        <button
          onClick={() => setActiveTab('about')}
          className={`py-1 ${activeTab === 'about' ? 'text-white font-bold border-b-2 border-white' : 'hover:text-white'}`}
        >
          ABOUT
        </button>
        <button
          onClick={onOpenContact}
          className="text-emerald-400 font-bold flex items-center gap-0.5"
        >
          CONNECT ↗
        </button>
        <button
          onClick={onOpenAI}
          className="text-purple-400 font-bold"
        >
          AI TWIN
        </button>
      </div>
    </header>
  );
};
