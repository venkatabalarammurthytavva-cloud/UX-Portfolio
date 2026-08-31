import React from 'react';

interface LogoProps {
  className?: string;
  size?: number | string;
  showText?: boolean;
}

export const BankOfBarodaLogo: React.FC<LogoProps> = ({ 
  className = "h-5 w-auto", 
  size,
  showText = false
}) => {
  const logoImgSrc = "https://1000logos.net/wp-content/uploads/2021/06/Bank-of-Baroda-icon.png";

  if (showText) {
    return (
      <span className={`inline-flex items-center gap-2.5 flex-shrink-0 align-middle ${className}`} title="Bank of Baroda" aria-label="Bank of Baroda Logo">
        <img 
          src={logoImgSrc}
          alt="Bank of Baroda Symbol"
          referrerPolicy="no-referrer"
          className="h-6 w-auto object-contain flex-shrink-0"
          style={size ? { height: size, width: size } : undefined}
        />
        <span className="flex flex-col text-left leading-tight">
          <span className="text-[#F26522] font-extrabold text-[12px] tracking-wide">बैंक ऑफ़ बड़ौदा</span>
          <span className="text-[#F26522] font-black italic text-[14px] tracking-tight">Bank of Baroda</span>
        </span>
      </span>
    );
  }

  return (
    <span 
      className={`inline-flex items-center justify-center flex-shrink-0 align-middle rounded-full overflow-hidden ${className}`} 
      title="Bank of Baroda" 
      aria-label="Bank of Baroda Emblem"
    >
      <img 
        src={logoImgSrc}
        alt="Bank of Baroda"
        referrerPolicy="no-referrer"
        className="w-full h-full object-contain"
        style={size ? { height: size, width: size } : undefined}
      />
    </span>
  );
};

export const AxisAMCLogo: React.FC<LogoProps> = ({ 
  className = "h-5 w-auto", 
  size,
  showText = false
}) => {
  if (showText) {
    return (
      <span className={`inline-flex items-center gap-2 flex-shrink-0 align-middle ${className}`} title="Axis AMC / Axis Mutual Fund" aria-label="Axis Mutual Fund Logo">
        <svg 
          viewBox="0 0 520 100" 
          className="h-full w-auto drop-shadow-sm" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          style={size ? { height: size } : undefined}
        >
          <g fill="#971243">
            <path d="M50 4 L 10 96 L 36 96 L 63 32 Z" />
            <path d="M56 46 L 41 80 L 78 80 L 93 46 Z" />
          </g>
          <g fill="#971243">
            <text x="108" y="72" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="48" letterSpacing="3">
              AXIS MUTUAL FUND
            </text>
          </g>
        </svg>
      </span>
    );
  }

  return (
    <span 
      className={`inline-flex items-center justify-center flex-shrink-0 align-middle rounded-full w-5 h-5 bg-[#971243] overflow-hidden ${className}`} 
      title="Axis AMC / Axis Mutual Fund" 
      aria-label="Axis AMC Emblem"
    >
      <svg 
        viewBox="0 0 100 100" 
        className="w-3.5 h-3.5" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        style={size ? { height: size, width: size } : undefined}
      >
        <g fill="#FFFFFF">
          <path d="M52 8 L 14 92 L 38 92 L 64 32 Z" />
          <path d="M56 46 L 43 78 L 78 78 L 92 46 Z" />
        </g>
      </svg>
    </span>
  );
};

export const TEDLogo: React.FC<LogoProps> = ({ 
  className = "h-5 w-auto" 
}) => {
  return (
    <span 
      className={`inline-flex items-center justify-center flex-shrink-0 align-middle rounded-full w-5 h-5 bg-gradient-to-tr from-[#3b82f6] to-[#06b6d4] shadow-sm ${className}`} 
      title="TED Intelligence" 
      aria-label="TED Emblem"
    >
      <svg viewBox="0 0 24 24" className="w-3 h-3 text-white" fill="currentColor">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </svg>
    </span>
  );
};

export const FinovationLogo: React.FC<LogoProps> = ({ 
  className = "h-5 w-auto" 
}) => {
  return (
    <span 
      className={`inline-flex items-center justify-center flex-shrink-0 align-middle rounded-full w-5 h-5 bg-gradient-to-tr from-[#10b981] to-[#059669] shadow-sm ${className}`} 
      title="Finovation" 
      aria-label="Finovation Emblem"
    >
      <svg viewBox="0 0 24 24" className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    </span>
  );
};

export const CrimeAnalyticsLogo: React.FC<LogoProps> = ({ 
  className = "h-5 w-auto" 
}) => {
  return (
    <span 
      className={`inline-flex items-center justify-center flex-shrink-0 align-middle rounded-full w-5 h-5 bg-gradient-to-tr from-[#8b5cf6] to-[#6366f1] shadow-sm ${className}`} 
      title="Crime Analytics" 
      aria-label="Crime Analytics Emblem"
    >
      <svg viewBox="0 0 24 24" className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="22" y1="12" x2="18" y2="12" />
        <line x1="12" y1="6" x2="12" y2="2" />
        <line x1="12" y1="22" x2="12" y2="18" />
      </svg>
    </span>
  );
};

export const SpotifyLogo: React.FC<LogoProps> = ({
  className = "w-5 h-5"
}) => {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="#1DB954">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.48.66.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
    </svg>
  );
};

export const YouTubeMusicLogo: React.FC<LogoProps> = ({
  className = "w-5 h-5"
}) => {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <circle cx="12" cy="12" r="11" fill="#FF0000"/>
      <circle cx="12" cy="12" r="7" stroke="#FFFFFF" strokeWidth="1.8"/>
      <polygon points="10,8.5 16,12 10,15.5" fill="#FFFFFF"/>
    </svg>
  );
};

export const SoundCloudLogo: React.FC<LogoProps> = ({
  className = "w-5 h-5"
}) => {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="#FF5500">
      <path d="M1.176 13.064c-.074 0-.138.064-.148.148l-.244 2.534.244 2.45c.01.084.074.148.148.148.085 0 .149-.064.149-.148l.053-2.45-.053-2.534c0-.084-.064-.148-.149-.148zm1.062-1.02c-.095 0-.17.075-.18.17l-.234 3.564.234 3.424c.01.096.085.17.18.17.096 0 .17-.074.181-.17l.074-3.424-.074-3.564c-.011-.095-.085-.17-.181-.17zm1.18-.542c-.106 0-.191.085-.202.191l-.223 4.106.223 3.935c.011.107.096.192.202.192.106 0 .191-.085.202-.192l.095-3.935-.095-4.106c-.011-.106-.096-.191-.202-.191zm1.233-.51c-.127 0-.223.106-.234.234l-.202 4.627.202 4.414c.011.128.107.234.234.234.128 0 .223-.106.234-.234l.117-4.414-.117-4.627c-.011-.128-.106-.234-.234-.234zm1.254-.053c-.138 0-.244.117-.255.255l-.17 4.69.17 4.436c.011.138.117.255.255.255.138 0 .244-.117.255-.255l.138-4.436-.138-4.69c-.011-.138-.117-.255-.255-.255zm1.275.404c-.149 0-.266.128-.276.276l-.138 4.307.138 4.468c.01.148.127.276.276.276.149 0 .266-.128.277-.276l.17-4.468-.17-4.307c-.011-.148-.128-.276-.277-.276zm1.317-1.127c-.16 0-.287.138-.287.298l-.117 5.434.117 4.542c0 .16.127.298.287.298.16 0 .287-.138.298-.298l.191-4.542-.191-5.434c-.011-.16-.138-.298-.298-.298zm1.328-1.52c-.17 0-.308.148-.308.318l-.106 6.956.106 4.574c0 .17.138.319.308.319.17 0 .309-.149.309-.319l.212-4.574-.212-6.956c0-.17-.139-.318-.309-.318zm1.35-.383c-.18 0-.33.149-.33.33l-.085 7.339.085 4.606c0 .18.15.33.33.33.181 0 .33-.15.33-.33l.234-4.606-.234-7.339c0-.181-.149-.33-.33-.33zm1.881-2.425c-.095 0-.191.032-.276.085-.149.096-.234.255-.234.425l-.064 9.68.064 4.616c0 .191.149.34.34.34.096 0 .192-.042.266-.106.128-.106.191-.255.191-.425l.255-4.425-.255-9.68c-.01-.276-.234-.51-.487-.51zm4.814 3.733c-.478 0-.935.138-1.328.383-.34-2.266-2.287-4.01-4.637-4.01-.34 0-.67.042-.989.117-.191.042-.319.223-.298.414l.032.224.276 9.488.01.213c.032.18.181.308.362.308h6.572c1.787 0 3.244-1.457 3.244-3.244 0-1.787-1.457-3.244-3.244-3.244z"/>
    </svg>
  );
};
