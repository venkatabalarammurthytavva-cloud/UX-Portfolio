import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeaturedWork } from './components/FeaturedWork';
import { CaseStudyModal } from './components/CaseStudyModal';
import { DesignSystemExplorer } from './components/DesignSystemExplorer';
import { AboutSection } from './components/AboutSection';
import { ShopSection } from './components/ShopSection';
import { AIChatDrawer } from './components/AIChatDrawer';
import { ContactModal } from './components/ContactModal';
import { Footer } from './components/Footer';
import { CaseStudy } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<'work' | 'systems' | 'about' | 'shop'>('work');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [isAIOpen, setIsAIOpen] = useState<boolean>(false);
  const [isContactOpen, setIsContactOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#0D0D0E] text-[#e5e2e1] selection:bg-emerald-500/30 selection:text-emerald-300">
      {/* Skip to Main Content Link (WCAG 2.4.1) */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2.5 focus:bg-emerald-500 focus:text-black focus:font-bold focus:rounded-lg focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-black font-label-caps text-xs"
      >
        Skip to main content
      </a>

      {/* Top Fixed Header Navigation */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenAI={() => setIsAIOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Main View Area */}
      <main id="main-content" tabIndex={-1} className="flex-grow pt-20 flex flex-col w-full focus:outline-none">
        {activeTab === 'work' && (
          <>
            {/* Hero Section */}
            <Hero />

            {/* Featured Work Showcase (1 Project per Desktop Viewport / Fold) */}
            <FeaturedWork
              onSelectCaseStudy={(caseStudy) => setSelectedCaseStudy(caseStudy)}
            />
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
