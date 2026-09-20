import React from 'react';
import { PROFILE_IMAGE } from '../data/portfolioData';
import { scrollToTop } from '../utils/smoothScroll';

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
  const handleHomeClick = () => {
    if (activeTab !== 'work') {
      setActiveTab('work');
    }
    scrollToTop();
  };

  const handleAboutClick = () => {
    setActiveTab('about');
    scrollToTop();
  };

  const handleSolutionsClick = () => {
    setActiveTab('systems');
    scrollToTop();
  };

  const isHomeActive = activeTab === 'work';
  const isAboutActive = activeTab === 'about';
  const isSolutionsActive = activeTab === 'systems';

  return (
    <header role="banner" className="fixed top-0 left-0 right-0 z-50 bg-[#0D0D0E]/95 backdrop-blur-md border-b border-[#202022] transition-all">
      <div className="relative flex justify-between items-center h-20 px-4 sm:px-8 max-w-[1440px] mx-auto w-full">
        {/* Left: Circular Profile Picture */}
        <div className="flex items-center z-10">
          <button
            type="button"
            onClick={handleHomeClick}
            className="flex items-center group transition-transform hover:scale-105 active:scale-95 rounded-full"
            aria-label="Tavva Balaram homepage, go to Work section"
          >
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden border border-white/20 group-hover:border-white transition-colors bg-[#1A1A1C] shadow-md flex items-center justify-center">
              <img
                src={PROFILE_IMAGE}
                alt="Tavva Balaram portrait"
                className="w-full h-full object-cover"
              />
            </div>
          </button>
        </div>

        {/* Center: Navigation Links - Horizontal Rounded Liquid Glass Pill */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-1 p-1 rounded-full bg-[#121215]/75 backdrop-blur-2xl border border-white/[0.12] shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_1px_0_rgba(255,255,255,0.22),inset_0_-1px_1px_0_rgba(0,0,0,0.4)] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto z-20"
        >
          {/* Home */}
          <button
            type="button"
            onClick={handleHomeClick}
            aria-current={isHomeActive ? 'page' : undefined}
            className={`px-4 py-1.5 rounded-full text-[13px] font-medium transition-all duration-200 ${
              isHomeActive
                ? 'text-white font-semibold bg-white/[0.14] border border-white/[0.14] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.28),0_2px_8px_rgba(0,0,0,0.25)]'
                : 'text-[#A1A1AA] hover:text-white hover:bg-white/[0.08] border border-transparent'
            }`}
          >
            Home
          </button>

          {/* About */}
          <button
            type="button"
            onClick={handleAboutClick}
            aria-current={isAboutActive ? 'page' : undefined}
            className={`px-4 py-1.5 rounded-full text-[13px] font-medium transition-all duration-200 ${
              isAboutActive
                ? 'text-white font-semibold bg-white/[0.14] border border-white/[0.14] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.28),0_2px_8px_rgba(0,0,0,0.25)]'
                : 'text-[#A1A1AA] hover:text-white hover:bg-white/[0.08] border border-transparent'
            }`}
          >
            About
          </button>

          {/* Solutions */}
          <button
            type="button"
            onClick={handleSolutionsClick}
            aria-current={isSolutionsActive ? 'page' : undefined}
            className={`px-4 py-1.5 rounded-full text-[13px] font-medium transition-all duration-200 ${
              isSolutionsActive
                ? 'text-white font-semibold bg-white/[0.14] border border-white/[0.14] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.28),0_2px_8px_rgba(0,0,0,0.25)]'
                : 'text-[#A1A1AA] hover:text-white hover:bg-white/[0.08] border border-transparent'
            }`}
          >
            Solutions
          </button>
        </nav>

        {/* Right: 5 Circular Social & Action Badges */}
        <div className="flex items-center gap-2 sm:gap-3 z-10" role="toolbar" aria-label="Social and contact links">
          {/* 1. LinkedIn Badge */}
          <a
            href="https://www.linkedin.com/in/t-balaram/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile (opens in new tab)"
            className="w-9 h-9 rounded-full bg-[#1A1C20] border border-white/20 flex items-center justify-center text-white/90 hover:text-white hover:bg-white/15 hover:border-white/40 hover:shadow-[0_0_12px_rgba(255,255,255,0.25)] transition-all duration-200 hover:scale-105 active:scale-95 flex-shrink-0"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
            </svg>
          </a>

          {/* 2. Behance Badge */}
          <a
            href="https://www.behance.net/tavvabalaram"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Behance portfolio (opens in new tab)"
            className="w-9 h-9 rounded-full bg-[#1A1C20] border border-white/20 flex items-center justify-center text-white/90 hover:text-white hover:bg-white/15 hover:border-white/40 hover:shadow-[0_0_12px_rgba(255,255,255,0.25)] transition-all duration-200 hover:scale-105 active:scale-95 flex-shrink-0"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M22 7h-7v2h7V7zm-1.86 5.86c-.53-.41-1.3-.61-2.28-.61-1.22 0-2.22.42-2.92 1.25-.69.83-1.04 1.95-1.04 3.32 0 1.42.36 2.53 1.07 3.34.72.8 1.77 1.2 3.14 1.2 1.2 0 2.15-.31 2.86-.94.71-.62 1.09-1.44 1.15-2.45h-2.29c-.06.45-.23.8-.52 1.04-.29.24-.71.36-1.25.36-.67 0-1.2-.2-1.57-.61-.38-.41-.58-1-.6-1.78h6.58c.03-.23.04-.49.04-.76 0-1.46-.39-2.61-1.18-3.37zm-4.04 2.45c.04-.57.21-1.01.5-1.31.29-.3.69-.45 1.2-.45.5 0 .89.14 1.16.42.27.28.43.71.47 1.34h-3.33zM8.34 11.23c.75-.41 1.29-1.08 1.29-2.02 0-.74-.29-1.36-.83-1.79C8.26 7 7.42 6.78 6.32 6.78H0v12.39h6.73c1.23 0 2.19-.3 2.82-.88.63-.58.98-1.39.98-2.39 0-1.14-.73-2.06-2.19-2.67zM2.87 8.7h3.19c.65 0 1.14.12 1.43.34.29.23.45.57.45 1.01 0 .47-.17.82-.49 1.04-.33.22-.84.34-1.53.34H2.87V8.7zm3.43 8.56H2.87v-3.32h3.48c.76 0 1.32.13 1.66.38.34.25.53.64.53 1.17 0 .58-.2 1.01-.58 1.29-.39.29-.98.48-1.66.48z" />
            </svg>
          </a>

          {/* 3. Dribbble Badge */}
          <a
            href="https://dribbble.com/tavvabalaram"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Dribbble portfolio (opens in new tab)"
            className="w-9 h-9 rounded-full bg-[#1A1C20] border border-white/20 flex items-center justify-center text-white/90 hover:text-white hover:bg-white/15 hover:border-white/40 hover:shadow-[0_0_12px_rgba(255,255,255,0.25)] transition-all duration-200 hover:scale-105 active:scale-95 flex-shrink-0"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.65 5.26c.85 1.19 1.35 2.65 1.35 4.22 0 .1-.01.19-.01.28-.06-.01-.11-.02-.17-.02-1.62 0-3.06.71-4.02 1.83-.15-.34-.31-.67-.49-.99 1.9-.88 3.35-2.59 3.35-4.61 0-.24-.02-.47-.06-.71h.05zm-9.07-1.47c.86-.59 1.89-.94 3-.94.53 0 1.03.08 1.52.22-.05.38-.08.78-.08 1.18 0 1.32.3 2.55.82 3.64-1.14.43-2.41.67-3.74.67-.92 0-1.81-.11-2.65-.32.28-1.8 1.1-3.38 2.13-4.45zm-5.34 4.54c0-.1.01-.19.01-.28.01-.05.02-.1.02-.15 1.32-.21 2.5-.81 3.44-1.67.65.18 1.34.28 2.06.28.83 0 1.62-.13 2.35-.37.16.3.31.61.44.93-1.23.47-2.33 1.21-3.19 2.12-2.1-.4-4.33-.55-5.13-.86zm.54 6.14c.5-.14 1.24-.22 2.45-.22.72 0 1.55.03 2.51.12-.09.43-.15.88-.15 1.34 0 1.57.63 3 1.65 4.03-2.85-.18-5.27-1.99-6.46-5.27zm8.33 5.47c-.99-.94-1.6-2.25-1.6-3.7 0-.31.03-.61.08-.91 1.58.35 2.89 1.17 3.62 2.25-.58.86-1.38 1.58-2.31 2.05-.25.11-.51.21-.79.31zm4.54-2.16c-.8-.95-1.99-1.58-3.32-1.73.82-1.02 2.09-1.67 3.51-1.67.17 0 .33.01.5.03-.06 1.29-.31 2.49-.69 3.37z" />
            </svg>
          </a>

          {/* 4. Medium Badge */}
          <a
            href="https://medium.com/@tavvabalaram"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Medium articles (opens in new tab)"
            className="w-9 h-9 rounded-full bg-[#1A1C20] border border-white/20 flex items-center justify-center text-white/90 hover:text-white hover:bg-white/15 hover:border-white/40 hover:shadow-[0_0_12px_rgba(255,255,255,0.25)] transition-all duration-200 hover:scale-105 active:scale-95 flex-shrink-0"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
            </svg>
          </a>

          {/* 5. Direct Email / Connect Badge */}
          <a
            href="mailto:venkatabalarammurthy.tavva@gmail.com"
            aria-label="Send email to Balaram"
            className="w-9 h-9 rounded-full bg-[#1A1C20] border border-white/20 flex items-center justify-center text-white/90 hover:text-white hover:bg-white/15 hover:border-white/40 hover:shadow-[0_0_12px_rgba(255,255,255,0.25)] transition-all duration-200 hover:scale-105 active:scale-95 flex-shrink-0"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </a>
        </div>
      </div>

      {/* Mobile Sub-Navigation Bar */}
      <nav aria-label="Mobile Navigation" className="flex md:hidden justify-around items-center h-12 border-t border-[#202022] bg-[#111113] text-[12px] font-medium text-[#A1A1AA] px-4 overflow-x-auto">
        <button
          type="button"
          onClick={handleHomeClick}
          aria-current={isHomeActive ? 'page' : undefined}
          className={`py-1 px-3 whitespace-nowrap rounded ${isHomeActive ? 'text-white font-semibold border-b-2 border-white' : 'hover:text-white'}`}
        >
          Home
        </button>
        <button
          type="button"
          onClick={handleAboutClick}
          aria-current={isAboutActive ? 'page' : undefined}
          className={`py-1 px-3 whitespace-nowrap rounded ${isAboutActive ? 'text-white font-semibold border-b-2 border-white' : 'hover:text-white'}`}
        >
          About
        </button>
        <button
          type="button"
          onClick={handleSolutionsClick}
          aria-current={isSolutionsActive ? 'page' : undefined}
          className={`py-1 px-3 whitespace-nowrap rounded ${isSolutionsActive ? 'text-white font-semibold border-b-2 border-white' : 'hover:text-white'}`}
        >
          Solutions
        </button>
      </nav>
    </header>
  );
};
