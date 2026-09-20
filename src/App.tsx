import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeaturedWork } from './components/FeaturedWork';
import { CaseStudyModal } from './components/CaseStudyModal';
import { CrimeAnalyticsCaseStudy } from './components/CrimeAnalyticsCaseStudy';
import { BOBEpayCaseStudy } from './components/BOBEpayCaseStudy';
import { SolutionsPage } from './components/SolutionsPage';
import { AboutSection } from './components/AboutSection';
import { ShopSection } from './components/ShopSection';
import { AIChatDrawer } from './components/AIChatDrawer';
import { ContactModal } from './components/ContactModal';
import { Footer } from './components/Footer';
import { CaseStudy } from './types';
import { CASE_STUDIES } from './data/portfolioData';
import {
  initSmoothScroll,
  pauseSmoothScroll,
  resumeSmoothScroll,
  scrollToTop,
} from './utils/smoothScroll';

export default function App() {
  const [activeTab, setActiveTab] = useState<'work' | 'systems' | 'about' | 'shop'>('work');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [isCrimeAnalyticsOpen, setIsCrimeAnalyticsOpen] = useState<boolean>(false);
  const [isBOBCaseStudyOpen, setIsBOBCaseStudyOpen] = useState<boolean>(false);
  const [isAIOpen, setIsAIOpen] = useState<boolean>(false);
  const [isContactOpen, setIsContactOpen] = useState<boolean>(false);

  // Initialize Lenis smooth scroll engine
  useEffect(() => {
    const cleanup = initSmoothScroll();
    return cleanup;
  }, []);

  // Pause smooth scroll when fixed overlay modals/drawers are open
  useEffect(() => {
    const isOverlayModalOpen = Boolean(selectedCaseStudy || isAIOpen || isContactOpen);
    if (isOverlayModalOpen) {
      pauseSmoothScroll();
    } else {
      resumeSmoothScroll();
    }
  }, [selectedCaseStudy, isAIOpen, isContactOpen]);

  // Check URL hash for direct links (e.g. #crime-analytics or #bob-epay-ux-audit)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#crime-analytics' || hash === '#crime-analytics-platform') {
        setIsCrimeAnalyticsOpen(true);
        setIsBOBCaseStudyOpen(false);
        setSelectedCaseStudy(null);
        scrollToTop(true);
      } else if (
        hash === '#bob-epay-ux-audit' ||
        hash === '#bob-ux-audit' ||
        hash === '#bank-of-baroda-ux-audit' ||
        hash === '#bank-of-baroda'
      ) {
        setIsBOBCaseStudyOpen(true);
        setIsCrimeAnalyticsOpen(false);
        setSelectedCaseStudy(null);
        scrollToTop(true);
      } else if (hash === '#solutions' || hash === '#systems') {
        setIsCrimeAnalyticsOpen(false);
        setIsBOBCaseStudyOpen(false);
        setSelectedCaseStudy(null);
        setActiveTab('systems');
        scrollToTop(true);
      } else if (hash === '#about') {
        setIsCrimeAnalyticsOpen(false);
        setIsBOBCaseStudyOpen(false);
        setSelectedCaseStudy(null);
        setActiveTab('about');
        scrollToTop(true);
      } else if (hash === '#home' || hash === '#work' || hash === '') {
        setIsCrimeAnalyticsOpen(false);
        setIsBOBCaseStudyOpen(false);
        setSelectedCaseStudy(null);
        setActiveTab('work');
        scrollToTop(true);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSelectCaseStudy = (caseStudy: CaseStudy) => {
    if (caseStudy.id === 'crime-analytics-platform') {
      setIsCrimeAnalyticsOpen(true);
      setIsBOBCaseStudyOpen(false);
      setSelectedCaseStudy(null);
      window.history.pushState(null, '', '#crime-analytics');
      scrollToTop();
    } else if (caseStudy.id === 'bank-of-baroda-ux-audit') {
      setIsBOBCaseStudyOpen(true);
      setIsCrimeAnalyticsOpen(false);
      setSelectedCaseStudy(null);
      window.history.pushState(null, '', '#bob-epay-ux-audit');
      scrollToTop();
    } else {
      setIsCrimeAnalyticsOpen(false);
      setIsBOBCaseStudyOpen(false);
      setSelectedCaseStudy(caseStudy);
    }
  };

  const handleBackToWork = () => {
    setIsCrimeAnalyticsOpen(false);
    setIsBOBCaseStudyOpen(false);
    setSelectedCaseStudy(null);
    if (window.location.hash) {
      window.history.pushState(null, '', window.location.pathname);
    }
    setActiveTab('work');
    scrollToTop();
  };

  const handleNextFromCrimeAnalytics = () => {
    setIsCrimeAnalyticsOpen(false);
    setIsBOBCaseStudyOpen(true);
    window.history.pushState(null, '', '#bob-epay-ux-audit');
    scrollToTop();
  };

  const handleNextFromBOB = () => {
    setIsBOBCaseStudyOpen(false);
    if (window.location.hash) {
      window.history.pushState(null, '', window.location.pathname);
    }
    const axisProject = CASE_STUDIES.find((cs) => cs.id === 'axis-amc-wealth') || null;
    setSelectedCaseStudy(axisProject);
  };

  const handleTabChange = (tab: 'work' | 'systems' | 'about' | 'shop') => {
    if (isCrimeAnalyticsOpen || isBOBCaseStudyOpen) {
      setIsCrimeAnalyticsOpen(false);
      setIsBOBCaseStudyOpen(false);
      if (window.location.hash) {
        window.history.pushState(null, '', window.location.pathname);
      }
    }
    setActiveTab(tab);
    scrollToTop();
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
        ) : isBOBCaseStudyOpen ? (
          /* Dedicated BOB ePay & BOB World UX Audit Case Study Page */
          <BOBEpayCaseStudy
            onBack={handleBackToWork}
            onNextCaseStudy={handleNextFromBOB}
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

            {/* Solutions Editorial Page */}
            {activeTab === 'systems' && (
              <SolutionsPage
                onSelectCaseStudy={handleSelectCaseStudy}
                onOpenCrimeCaseStudy={() => {
                  setIsCrimeAnalyticsOpen(true);
                  setIsBOBCaseStudyOpen(false);
                  setSelectedCaseStudy(null);
                  window.history.pushState(null, '', '#crime-analytics');
                }}
                onOpenBOBCaseStudy={() => {
                  setIsBOBCaseStudyOpen(true);
                  setIsCrimeAnalyticsOpen(false);
                  setSelectedCaseStudy(null);
                  window.history.pushState(null, '', '#bob-epay-ux-audit');
                }}
              />
            )}

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
