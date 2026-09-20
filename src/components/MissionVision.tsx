import React from 'react';
import { Target, Compass, HeartHandshake, Award } from 'lucide-react';

interface MissionProps {
  lang: 'en' | 'id';
}

export const MissionVision: React.FC<MissionProps> = ({ lang }) => {
  return (
    <section id="mission" className="relative bg-white text-slate-900 py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#0284c7] bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-100">
            {lang === 'id' ? 'KOMITMEN KAMI' : 'OUR PURPOSE'}
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-5xl font-bold text-[#092237]">
            {lang === 'id' ? 'Visi & Misi Dried Seafood Global' : 'Mission & Vision'}
          </h2>
          <p className="mt-3 text-slate-500 text-base sm:text-lg font-light">
            {lang === 'id'
              ? 'Membangun ekosistem pasokan ikan terbaik yang menjaga integritas kesegaran laut hingga ke dapur Anda.'
              : 'Forging a dependable cold-chain distribution network built on safety, freshness, and culinary excellence.'}
          </p>
        </div>

        {/* Two Grand Mission / Vision Cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Mission Card */}
          <div className="group relative overflow-hidden rounded-[2.5rem] p-8 sm:p-12 shadow-xl bg-[#f5f0e6] transition-all duration-500 hover:-translate-y-2 border border-amber-200/50 flex flex-col justify-between">
            {/* Subtle decorative backdrop glow */}
            <div className="absolute -right-10 -bottom-10 h-48 w-48 rounded-full bg-[#38bdf8]/15 blur-3xl transition-transform duration-700 group-hover:scale-150 pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#0284c7]">
                  {lang === 'id' ? 'MISI KAMI' : 'OUR MISSION'}
                </span>
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#0284c7]">
                  <Target className="w-6 h-6" />
                </div>
              </div>

              <h3 className="font-display text-3xl sm:text-4xl font-bold text-[#092237]">
                {lang === 'id' ? 'Misi Kami' : 'Mission'}
              </h3>

              <p className="mt-6 text-lg leading-relaxed text-slate-700 font-light">
                {lang === 'id'
                  ? 'Menghadirkan ikan segar & beku berkualitas premium dan bersumber secara berkelanjutan kepada seluruh pelanggan kami, sembari mempertahankan standar tertinggi dalam mutu, pelayanan, dan integritas kepercayaan.'
                  : 'To deliver premium-quality, sustainably sourced fresh & frozen fish to our customers while maintaining the highest standards of quality, service, and trust.'}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-amber-200/60 flex items-center gap-2 text-xs font-semibold text-slate-600">
              <Award className="w-4 h-4 text-[#0284c7]" />
              <span>SFDA Certified • Uncompromised Quality</span>
            </div>
          </div>

          {/* Vision Card */}
          <div className="group relative overflow-hidden rounded-[2.5rem] p-8 sm:p-12 shadow-xl bg-[#f5f0e6] transition-all duration-500 hover:-translate-y-2 border border-amber-200/50 flex flex-col justify-between">
            {/* Subtle decorative backdrop glow */}
            <div className="absolute -left-10 -bottom-10 h-48 w-48 rounded-full bg-amber-400/15 blur-3xl transition-transform duration-700 group-hover:scale-150 pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-amber-700">
                  {lang === 'id' ? 'VISI KAMI' : 'OUR VISION'}
                </span>
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-amber-700">
                  <Compass className="w-6 h-6" />
                </div>
              </div>

              <h3 className="font-display text-3xl sm:text-4xl font-bold text-[#092237]">
                {lang === 'id' ? 'Visi Kami' : 'Vision'}
              </h3>

              <p className="mt-6 text-lg leading-relaxed text-slate-700 font-light">
                {lang === 'id'
                  ? 'Menjadi pemasok seafood terkemuka di Arab Saudi yang dikenal atas keunggulan, inovasi rantai pasok, dan komitmen tinggi terhadap kepuasan pelanggan, sekaligus memperluas jangkauan melalui layanan pengiriman langsung ke rumah.'
                  : 'To become the leading seafood supplier in Saudi Arabia, known for excellence, innovation, and a commitment to customer satisfaction, while expanding our reach through direct-to-customer services.'}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-amber-200/60 flex items-center gap-2 text-xs font-semibold text-slate-600">
              <HeartHandshake className="w-4 h-4 text-amber-700" />
              <span>Innovation • Customer Satisfaction • B2B & B2C</span>
            </div>
          </div>
        </div>
      </div>

      {/* Wave bottom separator transitioning to services section background */}
      <div className="relative z-10 w-full leading-none mt-20">
        <svg
          className="w-full h-12 sm:h-20 text-[#f5f0e6] fill-current"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path d="M0,48 C240,110 480,10 720,45 C960,80 1200,115 1440,60 L1440,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  );
};
