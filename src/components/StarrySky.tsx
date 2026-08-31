import React, { useMemo } from 'react';

interface Star {
  id: number;
  x: number; // percentage 0-100
  y: number; // percentage 0-100
  size: number; // px
  opacity: number;
  duration: number; // seconds
  delay: number; // seconds
  color: string;
  isBright?: boolean;
}

export const StarrySky: React.FC = () => {
  // Generate a rich, fixed constellation of stars with realistic variance
  const stars: Star[] = useMemo(() => {
    const starColors = [
      '#ffffff',
      '#f0fdf4', // faint mint
      '#ecfeff', // faint cyan
      '#eff6ff', // faint blue
      '#fefce8', // faint warm gold
    ];

    const count = 110;
    const generated: Star[] = [];

    for (let i = 0; i < count; i++) {
      // Deterministic pseudorandom distribution
      const seed1 = Math.sin(i * 997.3 + 13.7) * 10000;
      const seed2 = Math.cos(i * 613.1 + 71.9) * 10000;
      const seed3 = Math.sin(i * 389.7 + 43.1) * 10000;
      const seed4 = Math.cos(i * 821.5 + 29.3) * 10000;

      const rand1 = seed1 - Math.floor(seed1);
      const rand2 = seed2 - Math.floor(seed2);
      const rand3 = seed3 - Math.floor(seed3);
      const rand4 = seed4 - Math.floor(seed4);

      const isBright = i % 12 === 0;
      const size = isBright ? 2.5 + rand3 * 1.5 : 1 + rand3 * 1.4;
      const color = starColors[Math.floor(rand4 * starColors.length)];

      generated.push({
        id: i,
        x: rand1 * 100,
        y: rand2 * 100,
        size,
        opacity: isBright ? 0.7 + rand3 * 0.3 : 0.25 + rand3 * 0.55,
        duration: 2.5 + rand2 * 4.5,
        delay: rand1 * 5,
        color,
        isBright
      });
    }

    return generated;
  }, []);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {/* Deep Cosmos Radial Gradients */}
      <div 
        className="absolute inset-0 opacity-40 mix-blend-screen"
        style={{
          backgroundImage: `
            radial-gradient(ellipse at 20% 15%, rgba(16, 185, 129, 0.12) 0%, transparent 60%),
            radial-gradient(ellipse at 80% 25%, rgba(59, 130, 246, 0.14) 0%, transparent 65%),
            radial-gradient(ellipse at 50% 60%, rgba(99, 102, 241, 0.08) 0%, transparent 70%)
          `
        }}
      />

      {/* Star Field Layer */}
      <div className="absolute inset-0">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              backgroundColor: star.color,
              boxShadow: star.isBright
                ? `0 0 ${star.size * 3}px ${star.color}, 0 0 ${star.size * 6}px ${star.color}`
                : `0 0 ${star.size * 1.5}px ${star.color}`,
              animation: `twinkle ${star.duration}s ease-in-out infinite alternate`,
              animationDelay: `${star.delay}s`,
              opacity: star.opacity,
            }}
          >
            {/* 4-Point Celestial Sparkle Cross for Bright Focal Stars */}
            {star.isBright && (
              <>
                <div 
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[11px] h-[1px] bg-white/70 blur-[0.5px]"
                  style={{ animation: `sparkleCross ${star.duration * 1.2}s ease-in-out infinite alternate`, animationDelay: `${star.delay}s` }}
                />
                <div 
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-[11px] bg-white/70 blur-[0.5px]"
                  style={{ animation: `sparkleCross ${star.duration * 1.2}s ease-in-out infinite alternate`, animationDelay: `${star.delay}s` }}
                />
              </>
            )}
          </div>
        ))}
      </div>

      {/* Dynamic Shooting Stars / Meteor Streaks */}
      <div className="shooting-star shooting-star-1" />
      <div className="shooting-star shooting-star-2" />
      <div className="shooting-star shooting-star-3" />
    </div>
  );
};
