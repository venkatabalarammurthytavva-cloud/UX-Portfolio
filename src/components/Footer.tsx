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

        <nav className="flex flex-wrap gap-6 font-label-caps text-xs uppercase tracking-widest">
          <a
            href="https://www.linkedin.com/in/t-balaram/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#c5c6ca] hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://www.behance.net/tavvabalaram"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#c5c6ca] hover:text-white transition-colors"
          >
            Behance
          </a>
          <a
            href="https://dribbble.com/tavvabalaram"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#c5c6ca] hover:text-white transition-colors"
          >
            Dribbble
          </a>
          <a
            href="https://medium.com/@tavvabalaram"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#c5c6ca] hover:text-white transition-colors"
          >
            Medium
          </a>
          <a
            href="mailto:venkatabalarammurthy.tavva@gmail.com"
            className="text-[#c5c6ca] hover:text-white transition-colors"
          >
            Email
          </a>
        </nav>

        <div className="font-label-caps text-xs text-[#c5c6ca]">
          © {new Date().getFullYear()} Systems Designer. Built with precision.
        </div>
      </div>
    </footer>
  );
};
