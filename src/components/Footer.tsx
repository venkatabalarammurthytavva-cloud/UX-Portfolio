import React from 'react';

interface FooterProps {
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  return (
    <footer className="w-full py-12 bg-[#0E0E0E] border-t border-[#27272A] transition-opacity duration-300">
      <div className="flex flex-col md:flex-row justify-between items-center px-6 max-w-[1280px] mx-auto space-y-4 md:space-y-0">
        <div className="font-display text-xl font-bold text-white tracking-tight">
          Systems Designer
        </div>

        <nav className="flex gap-6 font-label-caps text-xs uppercase tracking-widest">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#c5c6ca] hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://dribbble.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#c5c6ca] hover:text-white transition-colors"
          >
            Dribbble
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#c5c6ca] hover:text-white transition-colors"
          >
            GitHub
          </a>
          <button
            onClick={onOpenContact}
            className="text-[#c5c6ca] hover:text-white transition-colors focus:outline-none"
          >
            Email
          </button>
        </nav>

        <div className="font-label-caps text-xs text-[#c5c6ca]">
          © {new Date().getFullYear()} Systems Designer. Built with precision.
        </div>
      </div>
    </footer>
  );
};
