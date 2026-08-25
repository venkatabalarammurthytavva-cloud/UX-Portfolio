import React, { useState, useEffect } from 'react';
import { HERO_BACKGROUND } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const titles = ["Product Designer", "UI/UX Designer", "B2B SaaS Architect", "FinTech Specialist"];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        setIsFading(false);
      }, 300);
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[720px] md:min-h-[820px] flex items-center justify-center overflow-hidden border-b border-[#27272A] grid-bg">
      {/* Background Photograph */}
      <div className="absolute inset-0 z-0 opacity-60">
        <img 
          src={HERO_BACKGROUND} 
          alt="Cinematic visual" 
          className="w-full h-full object-cover filter contrast-110 saturate-125 brightness-95"
        />
      </div>

      {/* Gradient Masking */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0E]/25 via-[#0D0D0E]/55 to-[#0D0D0E] z-0"></div>
      {/* Soft Center Vignette for Readability */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(13,13,14,0.45)_0%,rgba(13,13,14,0.85)_100%)] z-0"></div>

      {/* Floating Animated Metric Cards */}
      <div className="absolute inset-0 z-10 pointer-events-none hidden lg:block overflow-hidden max-w-[1400px] mx-auto">
        {/* Stat 1: 5+ Years */}
        <div className="absolute top-[12%] left-[6%] rotate-[-3deg] animate-float bg-[#0D0D0E]/80 backdrop-blur-xl border border-white/15 p-5 rounded-xl flex flex-col items-center pointer-events-auto hover:border-white/30 transition-all shadow-[0_8px_30px_rgb(0,0,0,0.5)]">
          <span className="font-display text-4xl font-bold text-[#ff4d2d] mb-1">5+</span>
          <span className="font-label-caps text-[10px] uppercase tracking-widest text-[#e2e3e7]">Years of Experience</span>
        </div>

        {/* Stat 2: 10+ Projects */}
        <div className="absolute top-[68%] left-[6%] rotate-[4deg] animate-float-delayed bg-[#0D0D0E]/80 backdrop-blur-xl border border-white/15 p-5 rounded-xl flex flex-col items-center pointer-events-auto hover:border-white/30 transition-all shadow-[0_8px_30px_rgb(0,0,0,0.5)]">
          <span className="font-display text-4xl font-bold text-[#2d5bff] mb-1">10+</span>
          <span className="font-label-caps text-[10px] uppercase tracking-widest text-[#e2e3e7]">Projects Completed</span>
        </div>

        {/* Stat 3: 15L+ Users */}
        <div className="absolute top-[14%] right-[6%] rotate-[-2deg] animate-float-slow bg-[#0D0D0E]/80 backdrop-blur-xl border border-white/15 p-5 rounded-xl flex flex-col items-center pointer-events-auto hover:border-white/30 transition-all shadow-[0_8px_30px_rgb(0,0,0,0.5)]">
          <span className="font-display text-4xl font-bold text-[#10b981] mb-1">15L+</span>
          <span className="font-label-caps text-[10px] uppercase tracking-widest text-[#e2e3e7]">Users Served</span>
        </div>

        {/* Stat 4: 0 Escalations */}
        <div className="absolute top-[72%] right-[6%] rotate-[5deg] animate-float bg-[#0D0D0E]/80 backdrop-blur-xl border border-white/15 p-5 rounded-xl flex flex-col items-center pointer-events-auto hover:border-white/30 transition-all shadow-[0_8px_30px_rgb(0,0,0,0.5)]">
          <span className="font-display text-4xl font-bold text-white mb-1">0</span>
          <span className="font-label-caps text-[10px] uppercase tracking-widest text-[#e2e3e7]">Escalations</span>
        </div>
      </div>

      {/* Main Center Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-6 pt-12">
        <h1 className="font-display text-[52px] sm:text-[80px] md:text-[110px] font-bold text-white tracking-tighter leading-[0.92] mb-2 drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]">
          Hi, I'm <span className="text-emerald-400">Balaram!</span>
        </h1>

        <p className="font-body-md text-lg sm:text-xl md:text-2xl text-zinc-100 max-w-2xl leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
          I'm a{' '}
          <span className="inline-block min-w-[190px] text-center align-middle">
            <span
              className={`inline-block font-display font-bold px-3 py-1 rounded-lg transform -skew-x-3 transition-opacity duration-300 ease-in-out text-[#ffff04] bg-[#ffff04]/15 border border-[#ffff04]/40 shadow-md ${
                isFading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
              }`}
            >
              {titles[currentTitleIndex]}
            </span>
          </span>{' '}
          building end-to-end digital experiences from scratch for any industry or screen. When I close Figma, you'll find me producing music.
        </p>

        {/* Mobile Stats Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-lg mt-4 lg:hidden">
          <div className="bg-[#1A1A1C] border border-[#27272A] p-3 rounded-lg text-center">
            <div className="text-2xl font-bold text-[#ff4d2d]">5+</div>
            <div className="text-[10px] font-label-caps text-[#c5c6ca] uppercase">Years Exp</div>
          </div>
          <div className="bg-[#1A1A1C] border border-[#27272A] p-3 rounded-lg text-center">
            <div className="text-2xl font-bold text-[#2d5bff]">10+</div>
            <div className="text-[10px] font-label-caps text-[#c5c6ca] uppercase">Projects</div>
          </div>
          <div className="bg-[#1A1A1C] border border-[#27272A] p-3 rounded-lg text-center">
            <div className="text-2xl font-bold text-[#10b981]">15L+</div>
            <div className="text-[10px] font-label-caps text-[#c5c6ca] uppercase">Users</div>
          </div>
          <div className="bg-[#1A1A1C] border border-[#27272A] p-3 rounded-lg text-center">
            <div className="text-2xl font-bold text-white">0</div>
            <div className="text-[10px] font-label-caps text-[#c5c6ca] uppercase">Escalations</div>
          </div>
        </div>

        {/* Company Logos */}
        <div className="mt-8 flex flex-wrap justify-center items-center gap-8 sm:gap-14 opacity-75 grayscale hover:grayscale-0 transition-all duration-500">
          <span className="font-display font-bold tracking-tighter text-2xl sm:text-3xl text-white/90">NeoSOFT</span>
          <span className="font-display font-bold tracking-tighter text-2xl sm:text-3xl text-white/90">Qentelli</span>
          <span className="font-display font-bold tracking-tighter text-2xl sm:text-3xl text-white/90">Get Infy Solutions</span>
        </div>
      </div>
    </section>
  );
};
