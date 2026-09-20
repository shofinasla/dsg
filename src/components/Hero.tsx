import React from 'react';
import { ArrowRight, ShieldCheck, Waves, Anchor, Award } from 'lucide-react';

interface HeroProps {
  onOpenQuote: () => void;
  lang: 'en' | 'id';
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote, lang }) => {
  return (
    <section id="top" className="relative isolate min-h-screen overflow-hidden flex flex-col justify-between">
      {/* Background Hero Image */}
      <img
        src="/assets/hero-fish-DLIMF3vb.jpg"
        alt="Fresh fish on ice"
        className="absolute inset-0 h-full w-full object-cover object-center scale-105 filter brightness-90"
        loading="eager"
        width={1920}
        height={1080}
      />

      {/* Atmospheric Ocean Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(115deg, rgba(7, 24, 40, 0.95) 0%, rgba(10, 42, 69, 0.85) 45%, rgba(14, 58, 92, 0.55) 100%)',
        }}
      />

      {/* Ambient Caustics / Water shimmer effect */}
      <div className="absolute inset-0 pointer-events-none caustics-layer opacity-40" />

      {/* Floating subtle particle bubbles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-subtle" />
        <div className="absolute bottom-1/3 right-12 w-96 h-96 bg-sky-400/10 rounded-full blur-3xl animate-pulse-subtle" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 sm:pt-44 pb-20 flex-1 flex flex-col justify-center">
        <div className="max-w-3xl">
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-[#bae6fd] backdrop-blur-md mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#38bdf8] animate-ping" />
            <span>{lang === 'id' ? 'Ikan Segar & Beku Berkualitas' : 'Fresh and Frozen Fish'}</span>
            <span className="text-white/40">•</span>
            <span className="text-white/90">SFDA Approved</span>
          </div>

          {/* Main Display Headline */}
          <h1 className="font-display font-bold text-4xl sm:text-6xl lg:text-7xl leading-[1.08] text-white tracking-tight">
            {lang === 'id' ? (
              <>
                Menghadirkan{' '}
                <span className="block italic text-[#f5eedc] font-medium font-serif">
                  Kesegaran Samudra
                </span>{' '}
                ke Meja Anda
              </>
            ) : (
              <>
                Delivering the{' '}
                <span className="block italic text-[#f5eedc] font-medium font-serif">
                  Freshness of the Ocean
                </span>{' '}
                to Your Table
              </>
            )}
          </h1>

          {/* Description */}
          <p className="mt-6 text-lg sm:text-xl leading-relaxed text-white/90 max-w-2xl font-light">
            {lang === 'id'
              ? 'Seafood premium kualitas terbaik, diperoleh langsung dari perairan terpercaya di seluruh dunia dan dikirimkan dengan rantai dingin terstandar ke seluruh Arab Saudi.'
              : 'Premium seafood, sourced directly from trusted waters around the world and delivered with care across Saudi Arabia.'}
          </p>

          {/* Action CTAs */}
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              id="cta-explore-fish"
              href="#collection"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#f5eedc] px-7 py-3.5 font-semibold text-[#092237] shadow-xl hover:bg-white transition-all transform hover:-translate-y-0.5"
            >
              <span>{lang === 'id' ? 'Jelajahi Ikan Kami' : 'Explore our Fish'}</span>
              <ArrowRight className="w-4 h-4 text-[#0369a1]" />
            </a>

            <a
              id="cta-our-story"
              href="#about"
              className="inline-flex items-center justify-center rounded-full border border-white/70 px-7 py-3.5 font-semibold text-white transition-all duration-300 hover:bg-white/15 backdrop-blur-sm"
            >
              {lang === 'id' ? 'Cerita Kami' : 'Our Story'}
            </a>

            <button
              id="cta-wholesale-quote"
              onClick={onOpenQuote}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0284c7]/30 border border-[#38bdf8]/40 px-6 py-3.5 font-semibold text-white hover:bg-[#0284c7]/50 backdrop-blur-md transition-all"
            >
              <Anchor className="w-4 h-4 text-[#7dd3fc]" />
              <span>{lang === 'id' ? 'Penawaran B2B' : 'B2B Wholesale Inquiry'}</span>
            </button>
          </div>

          {/* Quick Trust Pillars */}
          <div className="mt-12 pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-white">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-[#38bdf8]">
                <Waves className="w-5 h-5" />
              </div>
              <div>
                <p className="text-lg font-bold font-montserrat">150+ Tons</p>
                <p className="text-xs text-white/70">{lang === 'id' ? 'Suplai Bulanan' : 'Monthly Supply'}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-[#f5eedc]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-lg font-bold font-montserrat">SFDA Certified</p>
                <p className="text-xs text-white/70">{lang === 'id' ? 'Standar Resmi Saudi' : 'Safety Approved'}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-[#38bdf8]">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <p className="text-lg font-bold font-montserrat">25+ Species</p>
                <p className="text-xs text-white/70">{lang === 'id' ? 'Pilihan Segar & Beku' : 'Seafood Varieties'}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-[#f5eedc]">
                <Anchor className="w-5 h-5" />
              </div>
              <div>
                <p className="text-lg font-bold font-montserrat">Est. 2015</p>
                <p className="text-xs text-white/70">{lang === 'id' ? '10+ Tahun Dipercaya' : 'Trusted Heritage'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modern Wave Divider connecting smoothly to next section */}
      <div className="relative z-10 w-full leading-none">
        <svg
          className="w-full h-12 sm:h-20 text-[#fafbfc] fill-current"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path d="M0,48 C240,110 480,10 720,45 C960,80 1200,115 1440,60 L1440,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  );
};
