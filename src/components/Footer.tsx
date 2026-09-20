import React from 'react';
import { Linkedin } from 'lucide-react';

interface FooterProps {
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  return (
    <footer className="relative w-full bg-[#111110] border-t border-[#222220] text-white overflow-hidden transition-all duration-300">
      {/* Main Footer Container */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20 pt-10 pb-8 sm:pt-14 sm:pb-10 flex flex-col justify-between">
        
        {/* Centered Headline (2 lines on mobile), Availability Subtitle & Action Buttons */}
        <div className="flex flex-col items-center justify-center text-center py-4 sm:py-6">
          {/* Headline - 2 lines on mobile, single line on larger screens */}
          <h2 className="font-display font-extrabold text-[40px] xs:text-[46px] sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#EEEEF0] mb-3 sm:mb-5 select-none leading-[1.08] sm:leading-tight">
            <span className="block sm:inline">Let&apos;s Work</span>{' '}
            <span className="block sm:inline">Together</span>
          </h2>

          {/* Availability Statement */}
          <p className="max-w-2xl text-zinc-400 text-base sm:text-lg md:text-xl font-normal leading-relaxed mb-6 sm:mb-7 px-4">
            I&apos;m available for full-time roles, speaking engagements, leadership coaching, and advisory work with product and design teams.
          </p>

          {/* Action Buttons: Drop an Email & Connect on Linkedin */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto">
            {/* Drop an Email Button in Vibrant Green */}
            <button
              id="footer-drop-email-button"
              type="button"
              onClick={onOpenContact}
              className="w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 bg-[#10B981] hover:bg-[#059669] text-black font-semibold text-sm sm:text-base rounded-full shadow-[0_4px_24px_rgba(16,185,129,0.35)] hover:shadow-[0_6px_30px_rgba(16,185,129,0.5)] transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
            >
              Drop an Email
            </button>

            {/* Connect on Linkedin Button */}
            <a
              id="footer-connect-linkedin-button"
              href="https://www.linkedin.com/in/t-balaram/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect on LinkedIn (opens in new tab)"
              className="w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 bg-[#0A66C2] hover:bg-[#08529d] text-white font-semibold text-sm sm:text-base rounded-full shadow-[0_4px_24px_rgba(10,102,194,0.35)] hover:shadow-[0_6px_30px_rgba(10,102,194,0.5)] transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] cursor-pointer inline-flex items-center justify-center gap-2.5"
            >
              <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
              <span>Connect on Linkedin</span>
            </a>
          </div>
        </div>

        {/* Bottom Sub-Row */}
        <div className="pt-6 mt-8 sm:mt-10 border-t border-[#222220] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
          {/* Author Details - Styled to match Made with Precision */}
          <div className="font-mono text-xs sm:text-sm text-[#707074] tracking-tight">
            © Tavva Balaram · 2026 · Senior UI/UX Product Designer
          </div>

          {/* Attribution */}
          <div className="font-mono text-xs sm:text-sm text-[#707074] tracking-tight">
            Made with Precision
          </div>
        </div>

      </div>
    </footer>
  );
};
