/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { QualityAndExpertise } from './components/QualityAndExpertise';
import { FishCollection } from './components/FishCollection';
import { FishDetailModal } from './components/FishDetailModal';
import { AboutStory } from './components/AboutStory';
import { MissionVision } from './components/MissionVision';
import { ServicesSection } from './components/ServicesSection';
import { WholesaleQuoteModal } from './components/WholesaleQuoteModal';
import { ContactFooter } from './components/ContactFooter';
import { FishProduct } from './types';

export default function App() {
  const [selectedFish, setSelectedFish] = useState<FishProduct | null>(null);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quotePrefillFish, setQuotePrefillFish] = useState<string[]>([]);
  const [lang, setLang] = useState<'en' | 'id'>('en');

  const handleOpenQuote = (initialFish?: string) => {
    if (initialFish) {
      setQuotePrefillFish([initialFish]);
    }
    setIsQuoteModalOpen(true);
  };

  const handleToggleLang = () => {
    setLang((prev) => (prev === 'en' ? 'id' : 'en'));
  };

  return (
    <div className="min-h-screen bg-[#fafbfc] text-[#092237] selection:bg-[#0284c7]/20 selection:text-[#0369a1] relative font-sans">
      {/* Sticky Navigation Header */}
      <Navbar
        onOpenQuote={() => handleOpenQuote()}
        lang={lang}
        onToggleLang={handleToggleLang}
      />

      {/* Main Sections Flow */}
      <main>
        {/* Hero Section with Live Ocean Visuals */}
        <Hero
          onOpenQuote={() => handleOpenQuote()}
          lang={lang}
        />

        {/* Quality & Maritime Expertise */}
        <QualityAndExpertise lang={lang} />

        {/* The 25 Species Fish Collection with Instant Search & Filtering */}
        <FishCollection
          onSelectFish={(fish) => setSelectedFish(fish)}
          lang={lang}
        />

        {/* About Dried Seafood Global, History Since 2015 & Global Sourcing Waters */}
        <AboutStory lang={lang} />

        {/* Purpose, Mission & Vision */}
        <MissionVision lang={lang} />

        {/* Services & Client Restaurant Partners */}
        <ServicesSection
          onOpenQuote={() => handleOpenQuote()}
          lang={lang}
        />
      </main>

      {/* Footer, Contact & Floating WhatsApp */}
      <ContactFooter
        onOpenQuote={() => handleOpenQuote()}
        lang={lang}
      />

      {/* Interactive Fish Detail Dialog */}
      <FishDetailModal
        fish={selectedFish}
        onClose={() => setSelectedFish(null)}
        onAddToQuote={(fishName) => {
          setSelectedFish(null);
          handleOpenQuote(fishName);
        }}
        lang={lang}
      />

      {/* B2B Wholesale Pricing & Delivery Quotation Modal */}
      <WholesaleQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        initialSelectedFish={quotePrefillFish}
        lang={lang}
      />
    </div>
  );
}

