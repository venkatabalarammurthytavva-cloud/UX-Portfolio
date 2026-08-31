import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeaturedWork } from './components/FeaturedWork';
import { CaseStudyModal } from './components/CaseStudyModal';
import { CrimeAnalyticsCaseStudy } from './components/CrimeAnalyticsCaseStudy';
import { DesignSystemExplorer } from './components/DesignSystemExplorer';
import { AboutSection } from './components/AboutSection';
import { ShopSection } from './components/ShopSection';
import { AIChatDrawer } from './components/AIChatDrawer';
import { ContactModal } from './components/ContactModal';
import { Footer } from './components/Footer';
import { CaseStudy } from './types';
import { CASE_STUDIES } from './data/portfolioData';

export default function App() {
  const [activeTab, setActiveTab] = useState<'work' | 'systems' | 'about' | 'shop'>('work');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [isCrimeAnalyticsOpen, setIsCrimeAnalyticsOpen] = useState<boolean>(false);
  const [isAIOpen, setIsAIOpen] = useState<boolean>(false);
  const [isContactOpen, setIsContactOpen] = useState<boolean>(false);

  // Check URL hash for direct links (e.g. #crime-analytics)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#crime-analytics' || hash === '#crime-analytics-platform') {
        setIsCrimeAnalyticsOpen(true);
        setSelectedCaseStudy(null);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSelectCaseStudy = (caseStudy: CaseStudy) => {
    if (caseStudy.id === 'crime-analytics-platform') {
      setIsCrimeAnalyticsOpen(true);
      setSelectedCaseStudy(null);
      window.history.pushState(null, '', '#crime-analytics');
    } else {
      setIsCrimeAnalyticsOpen(false);
      setSelectedCaseStudy(caseStudy);
    }
  };

  const handleBackToWork = () => {
    setIsCrimeAnalyticsOpen(false);
    setSelectedCaseStudy(null);
    if (window.location.hash) {
      window.history.pushState(null, '', window.location.pathname);
    }
    setActiveTab('work');
  };

  const handleNextFromCrimeAnalytics = () => {
    setIsCrimeAnalyticsOpen(false);
    if (window.location.hash) {
      window.history.pushState(null, '', window.location.pathname);
    }
    const bobProject = CASE_STUDIES.find((cs) => cs.id === 'bank-of-baroda-ux-audit') || null;
    setSelectedCaseStudy(bobProject);
  };

  const handleTabChange = (tab: 'work' | 'systems' | 'about' | 'shop') => {
    if (isCrimeAnalyticsOpen) {
      setIsCrimeAnalyticsOpen(false);
      if (window.location.hash) {
        window.history.pushState(null, '', window.location.pathname);
      }
    }
    setActiveTab(tab);
  };

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
        setActiveTab={handleTabChange}
        onOpenAI={() => setIsAIOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Main View Area */}
      <main id="main-content" tabIndex={-1} className="flex-grow pt-20 flex flex-col w-full focus:outline-none">
        {isCrimeAnalyticsOpen ? (
          /* Dedicated Crime Analytics Case Study Page */
          <CrimeAnalyticsCaseStudy
            onBack={handleBackToWork}
            onNextCaseStudy={handleNextFromCrimeAnalytics}
          />
        ) : (
          <>
            {activeTab === 'work' && (
              <>
                {/* Hero Section */}
                <Hero />

                {/* Featured Work Showcase */}
                <FeaturedWork
                  onSelectCaseStudy={handleSelectCaseStudy}
                />
              </>
            )}

            {/* Systems View */}
            {activeTab === 'systems' && <DesignSystemExplorer />}

            {/* About View */}
            {activeTab === 'about' && <AboutSection />}

            {/* Shop View */}
            {activeTab === 'shop' && <ShopSection />}
          </>
        )}
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
