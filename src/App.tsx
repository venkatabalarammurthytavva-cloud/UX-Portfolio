import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CaseStudyCard } from './components/CaseStudyCard';
import { CaseStudyModal } from './components/CaseStudyModal';
import { DesignSystemExplorer } from './components/DesignSystemExplorer';
import { AboutSection } from './components/AboutSection';
import { ShopSection } from './components/ShopSection';
import { AIChatDrawer } from './components/AIChatDrawer';
import { ContactModal } from './components/ContactModal';
import { Footer } from './components/Footer';
import { CASE_STUDIES } from './data/portfolioData';
import { CaseStudy } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<'work' | 'systems' | 'about' | 'shop'>('work');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [isAIOpen, setIsAIOpen] = useState<boolean>(false);
  const [isContactOpen, setIsContactOpen] = useState<boolean>(false);

  const categories = ['All', 'Enterprise', 'FinTech', 'System', 'Feature', 'Conversion'];

  const filteredCaseStudies = CASE_STUDIES.filter((cs) => {
    const matchesCategory = selectedCategory === 'All' || cs.category === selectedCategory;
    const matchesSearch =
      cs.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cs.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cs.team.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col bg-[#0D0D0E] text-[#e5e2e1] selection:bg-emerald-500/30 selection:text-emerald-300">
      {/* Top Fixed Header Navigation */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenAI={() => setIsAIOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Main View Area */}
      <main className="flex-grow pt-20 flex flex-col w-full">
        {activeTab === 'work' && (
          <>
            {/* Hero Section */}
            <Hero />

            {/* Selected Work Bento Showcase */}
            <section className="flex flex-col gap-8 px-6 max-w-[1280px] mx-auto w-full py-16">
              {/* Section Header & Filters */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-4 border-b border-[#27272A]">
                <div className="flex items-center gap-4">
                  <h2 className="font-display text-3xl sm:text-4xl text-white font-bold tracking-tight">
                    Selected Work
                  </h2>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-label-caps text-xs">
                    {filteredCaseStudies.length} Projects
                  </span>
                </div>

                {/* Category Filter Pills & Search */}
                <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
                  <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full no-scrollbar">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-3.5 py-1.5 rounded-full font-label-caps text-xs transition-all uppercase tracking-wider ${
                          selectedCategory === cat
                            ? 'bg-white text-black font-bold shadow'
                            : 'bg-[#1A1A1C] border border-[#27272A] text-[#c5c6ca] hover:text-white hover:border-white/20'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>

                  <div className="relative flex-1 md:w-48">
                    <span className="material-symbols-outlined absolute left-3 top-2.5 text-gray-500 text-sm">
                      search
                    </span>
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Filter work..."
                      className="w-full pl-9 pr-3 py-1.5 bg-[#1A1A1C] border border-[#27272A] rounded-full text-xs text-white placeholder-gray-500 focus:outline-none focus:border-emerald-400"
                    />
                  </div>
                </div>
              </div>

              {/* Grid of Bento Case Studies */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredCaseStudies.map((cs) => (
                  <CaseStudyCard
                    key={cs.id}
                    caseStudy={cs}
                    onSelect={(caseStudy) => setSelectedCaseStudy(caseStudy)}
                  />
                ))}
              </div>

              {filteredCaseStudies.length === 0 && (
                <div className="p-12 text-center bg-[#1A1A1C] border border-[#27272A] rounded-2xl space-y-2">
                  <span className="material-symbols-outlined text-3xl text-gray-500">search_off</span>
                  <div className="font-display font-bold text-white text-lg">No matching projects found</div>
                  <div className="text-xs text-[#c5c6ca]">Try selecting 'All' or clearing your search term.</div>
                </div>
              )}
            </section>
          </>
        )}

        {/* Systems View */}
        {activeTab === 'systems' && <DesignSystemExplorer />}

        {/* About View */}
        {activeTab === 'about' && <AboutSection />}

        {/* Shop View */}
        {activeTab === 'shop' && <ShopSection />}
      </main>

      {/* Footer */}
      <Footer onOpenContact={() => setIsContactOpen(true)} />

      {/* Modals & Drawers */}
      <CaseStudyModal
        caseStudy={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        onOpenContact={() => {
          setSelectedCaseStudy(null);
          setIsContactOpen(true);
        }}
      />

      <AIChatDrawer isOpen={isAIOpen} onClose={() => setIsAIOpen(false)} />

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
}
