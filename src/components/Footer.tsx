import React from 'react';

interface FooterProps {
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  return (
    <footer className="relative w-full bg-[#111110] border-t border-[#222220] text-white overflow-hidden transition-all duration-300">
      {/* Main Footer Container */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20 pt-20 pb-12 sm:pt-24 sm:pb-16 flex flex-col justify-between">
        
        {/* Centered Single-Line Headline & Green Action Button */}
        <div className="flex flex-col items-center justify-center text-center py-10 sm:py-16">
          {/* Single Line Headline */}
          <h2 className="font-display font-extrabold text-[38px] sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#EEEEF0] mb-8 sm:mb-10 select-none whitespace-nowrap">
            Let&apos;s Work Together
          </h2>

          {/* Drop an Email Button in Vibrant Green */}
          <button
            type="button"
            onClick={onOpenContact}
            className="px-7 sm:px-8 py-3.5 sm:py-4 bg-[#10B981] hover:bg-[#059669] text-black font-mono font-semibold text-sm sm:text-base rounded-full shadow-[0_4px_24px_rgba(16,185,129,0.35)] hover:shadow-[0_6px_30px_rgba(16,185,129,0.5)] transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
          >
            Drop an Email
          </button>
        </div>

        {/* Bottom Sub-Row */}
        <div className="pt-8 mt-12 sm:mt-16 border-t border-[#222220] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          {/* Author Name - Big & Prominent */}
          <div className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight hover:text-emerald-400 transition-colors select-none">
            Tavva Balaram
          </div>

          {/* Copyright / Attribution */}
          <div className="font-mono text-xs sm:text-sm text-[#707074] tracking-tight">
            Made with Precision
          </div>
        </div>

      </div>
    </footer>
  );
};
