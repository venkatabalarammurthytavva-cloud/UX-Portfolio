import React, { useState, useRef } from 'react';
import { WORK_EXPERIENCE, MUSIC_TRACKS, PROFILE_IMAGE } from '../data/portfolioData';
import { MusicTrack } from '../types';

export const AboutSection: React.FC = () => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const currentTrack: MusicTrack = MUSIC_TRACKS[currentTrackIndex];

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch((e) => console.log('Audio playback prevented', e));
      setIsPlaying(true);
    }
  };

  const nextTrack = () => {
    const nextIdx = (currentTrackIndex + 1) % MUSIC_TRACKS.length;
    setCurrentTrackIndex(nextIdx);
    setIsPlaying(false);
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play().catch(() => {});
        setIsPlaying(true);
      }
    }, 100);
  };

  const prevTrack = () => {
    const prevIdx = (currentTrackIndex - 1 + MUSIC_TRACKS.length) % MUSIC_TRACKS.length;
    setCurrentTrackIndex(prevIdx);
    setIsPlaying(false);
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play().catch(() => {});
        setIsPlaying(true);
      }
    }, 100);
  };

  return (
    <div className="max-w-[1280px] mx-auto px-6 py-12 space-y-16 animate-fadeIn text-[#e5e2e1]">
      {/* 1. Header Bio Card */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center bg-[#1A1A1C] border border-[#27272A] p-8 sm:p-12 rounded-2xl relative overflow-hidden">
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
            <span className="font-label-caps text-xs uppercase tracking-widest text-emerald-400">
              Senior Systems & Product Designer
            </span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
            Designing complex digital systems with architectural precision.
          </h2>

          <p className="font-body-md text-base sm:text-lg text-[#c5c6ca] leading-relaxed">
            With over 5 years of hands-on experience, I bridge the gap between high-level user research, intricate FinTech workflows, and production-ready React component libraries. My approach focuses on scalability, WCAG accessibility, and eliminating cognitive friction.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <span className="px-3 py-1 bg-[#27272A] text-white font-label-caps text-xs rounded-full">
              📍 Hyderabad, India
            </span>
            <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-label-caps text-xs rounded-full">
              🟢 Open to Select Design Systems Consultancies
            </span>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl blur opacity-30 group-hover:opacity-75 transition duration-500"></div>
            <img
              src={PROFILE_IMAGE}
              alt="Balaram Profile"
              className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-2xl object-cover border border-white/20 shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* 2. Interactive Music Producer Studio */}
      <div className="bg-[#141313] border border-[#27272A] p-8 sm:p-10 rounded-2xl space-y-6 relative overflow-hidden grid-bg">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-purple-400 text-lg">graphic_eq</span>
              <span className="font-label-caps text-xs text-purple-400 uppercase tracking-widest">
                After Hours Studio
              </span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mt-1">
              "When I close Figma, you'll find me producing music."
            </h3>
          </div>

          <span className="px-3 py-1 bg-purple-500/10 border border-purple-500/30 text-purple-300 font-label-caps text-xs rounded-full">
            Lo-Fi & Ambient Synth Beats
          </span>
        </div>

        {/* Audio Player Control Widget */}
        <div className="bg-[#1A1A1C] border border-[#27272A] p-6 rounded-xl flex flex-col md:flex-row items-center gap-6 justify-between">
          <div className="flex items-center gap-4 w-full md:w-auto">
            <img
              src={currentTrack.coverArt}
              alt={currentTrack.title}
              className="w-16 h-16 rounded-lg object-cover border border-white/10"
            />
            <div>
              <h4 className="font-display text-lg font-bold text-white">{currentTrack.title}</h4>
              <p className="font-label-caps text-xs text-[#c5c6ca]">
                {currentTrack.genre} • {currentTrack.bpm} BPM • Key: {currentTrack.key}
              </p>
            </div>
          </div>

          {/* Equalizer Visualizer Bars */}
          <div className="flex items-center gap-1.5 h-10 px-4 py-2 bg-[#0D0D0E] rounded-lg border border-[#27272A]">
            {[40, 75, 55, 90, 60, 30, 85, 45, 95, 65, 50, 80].map((height, idx) => (
              <div
                key={idx}
                className={`w-1 bg-purple-400 rounded-full transition-all duration-300 ${
                  isPlaying ? 'animate-pulse' : 'opacity-40'
                }`}
                style={{ height: isPlaying ? `${Math.max(15, (height * (idx % 3 + 1)) % 100)}%` : '20%' }}
              />
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-4">
            <button
              onClick={prevTrack}
              className="p-2 rounded-full hover:bg-white/10 text-white transition-colors"
              title="Previous Track"
            >
              <span className="material-symbols-outlined text-2xl">skip_previous</span>
            </button>

            <button
              onClick={togglePlay}
              className="w-12 h-12 rounded-full bg-purple-500 hover:bg-purple-400 text-white flex items-center justify-center transition-all shadow-lg"
              title={isPlaying ? 'Pause Track' : 'Play Track'}
            >
              <span className="material-symbols-outlined text-2xl">
                {isPlaying ? 'pause' : 'play_arrow'}
              </span>
            </button>

            <button
              onClick={nextTrack}
              className="p-2 rounded-full hover:bg-white/10 text-white transition-colors"
              title="Next Track"
            >
              <span className="material-symbols-outlined text-2xl">skip_next</span>
            </button>
          </div>

          <audio
            ref={audioRef}
            src={currentTrack.audioSampleUrl}
            onEnded={nextTrack}
          />
        </div>
      </div>

      {/* 3. Career Experience Timeline */}
      <div className="space-y-8">
        <h3 className="font-label-caps text-sm uppercase tracking-widest text-[#c5c6ca] flex items-center gap-2">
          <span className="material-symbols-outlined text-emerald-400 text-base">work_history</span>
          Career Track & Achievements
        </h3>

        <div className="space-y-6">
          {WORK_EXPERIENCE.map((exp, idx) => (
            <div
              key={idx}
              className="bg-[#1A1A1C] border border-[#27272A] p-8 rounded-xl hover:border-white/30 transition-all space-y-4"
            >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                <div>
                  <h4 className="font-display text-2xl font-bold text-white">{exp.role}</h4>
                  <div className="font-label-caps text-xs text-emerald-400 uppercase tracking-wider mt-0.5">
                    {exp.company} • {exp.location}
                  </div>
                </div>
                <span className="px-3 py-1 bg-[#27272A] rounded font-label-caps text-xs text-[#c5c6ca]">
                  {exp.period}
                </span>
              </div>

              <p className="text-base text-[#c5c6ca] leading-relaxed">{exp.description}</p>

              <div className="flex flex-wrap gap-2 pt-2 border-t border-[#27272A]">
                {exp.highlights.map((h, hIdx) => (
                  <span
                    key={hIdx}
                    className="px-3 py-1 bg-white/5 border border-white/10 rounded-full font-label-caps text-[11px] text-white flex items-center gap-1.5"
                  >
                    <span className="material-symbols-outlined text-emerald-400 text-sm">check</span>
                    {h}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
