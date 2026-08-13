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
    <header className="fixed top-0 w-full z-50 bg-[#0D0D0E]/85 backdrop-blur-md border-b border-[#27272A] transition-all duration-200 ease-in-out">
      <div className="flex justify-between items-center h-16 px-6 max-w-[1280px] mx-auto">
        {/* Left Profile Avatar */}
        <div className="flex items-center w-32">
          <button 
            onClick={() => setActiveTab('work')}
            className="flex items-center gap-2 group focus:outline-none"
            title="Balaram - Systems Designer"
          >
            <img 
              src={PROFILE_IMAGE} 
              alt="Balaram Profile" 
              className="h-10 w-10 rounded-full object-cover border border-white/20 group-hover:border-emerald-400 transition-colors shadow-sm"
            />
          </button>
        </div>

        {/* Center Navigation Links */}
        <nav className="hidden md:flex gap-8 font-label-caps text-[12px] uppercase tracking-widest font-medium">
          <button
            onClick={() => setActiveTab('work')}
            className={`pb-1 transition-colors relative ${
              activeTab === 'work'
                ? 'text-white border-b-2 border-white font-semibold'
                : 'text-[#c5c6ca] hover:text-white'
            }`}
          >
            Work
          </button>
          
          <button
            onClick={() => setActiveTab('systems')}
            className={`pb-1 transition-colors relative flex items-center gap-1.5 ${
              activeTab === 'systems'
                ? 'text-white border-b-2 border-white font-semibold'
                : 'text-[#c5c6ca] hover:text-white'
            }`}
          >
            Systems
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          </button>

          <button
            onClick={() => setActiveTab('about')}
            className={`pb-1 transition-colors relative ${
              activeTab === 'about'
                ? 'text-white border-b-2 border-white font-semibold'
                : 'text-[#c5c6ca] hover:text-white'
            }`}
          >
            About
          </button>

          <button
            onClick={() => setActiveTab('shop')}
            className={`pb-1 transition-colors relative flex items-center gap-1 ${
              activeTab === 'shop'
                ? 'text-white border-b-2 border-white font-semibold'
                : 'text-[#c5c6ca] hover:text-white'
            }`}
          >
            Shop 
            <span className="material-symbols-outlined text-sm">north_east</span>
          </button>
        </nav>

        {/* Right Action Icons & AI Assistant Button */}
        <div className="flex items-center gap-3 justify-end">
          {/* Ask AI Twin Button */}
          <button
            onClick={onOpenAI}
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 transition-all font-label-caps text-[11px] uppercase tracking-wider"
            title="Ask Balaram's AI Assistant"
          >
            <span className="material-symbols-outlined text-sm animate-spin-slow">auto_awesome</span>
            <span>Ask AI</span>
          </button>

          {/* Social / Direct Icons */}
          <div className="flex items-center gap-3 border-l border-[#27272A] pl-3">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#c5c6ca] hover:text-white transition-colors"
              title="LinkedIn"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
            </a>

            <a 
              href="https://dribbble.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#c5c6ca] hover:text-white transition-colors"
              title="Dribbble"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.65 5.26c.85 1.19 1.35 2.65 1.35 4.22 0 .1-.01.19-.01.28-.06-.01-.11-.02-.17-.02-1.62 0-3.06.71-4.02 1.83-.15-.34-.31-.67-.49-.99 1.9-.88 3.35-2.59 3.35-4.61 0-.24-.02-.47-.06-.71h.05zm-9.07-1.47c.86-.59 1.89-.94 3-.94.53 0 1.03.08 1.52.22-.05.38-.08.78-.08 1.18 0 1.32.3 2.55.82 3.64-1.14.43-2.41.67-3.74.67-.92 0-1.81-.11-2.65-.32.28-1.8 1.1-3.38 2.13-4.45zm-5.34 4.54c0-.1.01-.19.01-.28.01-.05.02-.1.02-.15 1.32-.21 2.5-.81 3.44-1.67.65.18 1.34.28 2.06.28.83 0 1.62-.13 2.35-.37.16.3.31.61.44.93-1.23.47-2.33 1.21-3.19 2.12-2.1-.4-4.33-.55-5.13-.86zm.54 6.14c.5-.14 1.24-.22 2.45-.22.72 0 1.55.03 2.51.12-.09.43-.15.88-.15 1.34 0 1.57.63 3 1.65 4.03-2.85-.18-5.27-1.99-6.46-5.27zm8.33 5.47c-.99-.94-1.6-2.25-1.6-3.7 0-.31.03-.61.08-.91 1.58.35 2.89 1.17 3.62 2.25-.58.86-1.38 1.58-2.31 2.05-.25.11-.51.21-.79.31zm4.54-2.16c-.8-.95-1.99-1.58-3.32-1.73.82-1.02 2.09-1.67 3.51-1.67.17 0 .33.01.5.03-.06 1.29-.31 2.49-.69 3.37z"/>
              </svg>
            </a>

            <button
              onClick={onOpenContact}
              className="text-[#c5c6ca] hover:text-white transition-colors focus:outline-none"
              title="Send Message / Hire"
            >
              <span className="material-symbols-outlined text-xl">mail</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sub-Navigation Bar */}
      <div className="flex md:hidden justify-around items-center h-10 border-t border-[#27272A] bg-[#141313] font-label-caps text-[11px] uppercase tracking-widest text-[#c5c6ca]">
        <button 
          onClick={() => setActiveTab('work')}
          className={activeTab === 'work' ? 'text-white font-bold border-b border-white' : ''}
        >
          Work
        </button>
        <button 
          onClick={() => setActiveTab('systems')}
          className={activeTab === 'systems' ? 'text-white font-bold border-b border-white' : ''}
        >
          Systems
        </button>
        <button 
          onClick={() => setActiveTab('about')}
          className={activeTab === 'about' ? 'text-white font-bold border-b border-white' : ''}
        >
          About
        </button>
        <button 
          onClick={() => setActiveTab('shop')}
          className={activeTab === 'shop' ? 'text-white font-bold border-b border-white' : ''}
        >
          Shop
        </button>
        <button 
          onClick={onOpenAI}
          className="text-emerald-400 font-bold"
        >
          Ask AI
        </button>
      </div>
    </header>
  );
};
