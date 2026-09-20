import React, { useState } from 'react';
import { SOURCING_COUNTRIES } from '../data/fishData';
import { ShieldCheck, Anchor, Globe2, Building2, ChevronRight, Check } from 'lucide-react';

interface AboutProps {
  lang: 'en' | 'id';
}

export const AboutStory: React.FC<AboutProps> = ({ lang }) => {
  const [selectedCountry, setSelectedCountry] = useState(SOURCING_COUNTRIES[0]);

  return (
    <section id="about" className="relative bg-white text-slate-900 py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid Story */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text: 7 Cols */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-[0.25em] text-[#0284c7] bg-sky-50 border border-sky-100">
              <Anchor className="w-3.5 h-3.5 text-[#0284c7]" />
              <span>{lang === 'id' ? 'TENTANG DRIED SEAFOOD GLOBAL' : 'ABOUT DRIED SEAFOOD GLOBAL'}</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#092237] leading-[1.12]">
              {lang === 'id'
                ? 'Nama Terpercaya di Pasar Seafood Arab Saudi'
                : 'A trusted name in the Saudi seafood market'}
            </h2>

            <p className="text-lg leading-relaxed text-slate-600 font-light">
              {lang === 'id'
                ? 'Sejak tahun 2015, kami mengkhususkan diri dalam mengimpor ikan segar dan beku dari India, Sri Lanka, Indonesia, Pakistan, Dubai, Norwegia, dan Oman, guna memastikan pelanggan kami menikmati hidangan laut dengan kualitas terbaik.'
                : 'Since 2015, we have specialized in importing fresh and frozen fish from India, Sri Lanka, Indonesia, Pakistan, Dubai, Norway, and Oman, ensuring our customers enjoy the finest quality seafood.'}
            </p>

            <p className="text-base sm:text-lg leading-relaxed text-slate-600 font-light">
              {lang === 'id'
                ? 'Semua produk kami telah berstatus SFDA-approved (Badan Pengawas Obat & Makanan Saudi), dan saat ini kami menyuplai 150 hingga 200 ton ikan segar & beku setiap bulannya ke restoran-restoran dan perusahaan terkemuka. Dalam waktu dekat, kami juga akan melayani pengiriman langsung ke rumah-rumah konsumen.'
                : 'Our products are SFDA-approved, and we currently supply 150 to 200 tons of fresh & frozen fish monthly to leading restaurants and businesses. Soon, we will also deliver directly to homes.'}
            </p>

            {/* Metric highlight pillars */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-[#fafbfc] border border-slate-100 shadow-sm">
                <span className="text-2xl sm:text-3xl font-bold font-montserrat text-[#092237]">
                  2015
                </span>
                <p className="text-xs text-slate-500 mt-1">
                  {lang === 'id' ? 'Tahun Berdiri' : 'Established Heritage'}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#fafbfc] border border-slate-100 shadow-sm">
                <span className="text-2xl sm:text-3xl font-bold font-montserrat text-[#0284c7]">
                  150 - 200T
                </span>
                <p className="text-xs text-slate-500 mt-1">
                  {lang === 'id' ? 'Kapasitas Suplai Bulanan' : 'Monthly Distribution'}
                </p>
              </div>

              <div className="col-span-2 sm:col-span-1 p-4 rounded-2xl bg-[#fafbfc] border border-slate-100 shadow-sm">
                <span className="text-2xl sm:text-3xl font-bold font-montserrat text-emerald-600 flex items-center gap-1">
                  SFDA <Check className="w-5 h-5" />
                </span>
                <p className="text-xs text-slate-500 mt-1">
                  {lang === 'id' ? 'Sertifikasi Resmi Saudi' : 'Safety Certified'}
                </p>
              </div>
            </div>
          </div>

          {/* Right Visual Image: 5 Cols */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="/assets/fish-lemon-C6qrXVZx.jpg"
                alt="Fresh fish with lemon slices and rosemary garnish"
                className="w-full h-auto object-cover transform duration-500 hover:scale-105"
                loading="lazy"
                width={600}
                height={700}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="font-montserrat font-bold text-lg">Mawasem Al Nahda Trading Est.</p>
                <p className="text-xs text-white/80">Jeddah, Kingdom of Saudi Arabia</p>
              </div>
            </div>
          </div>
        </div>

        {/* Global Sourcing Countries Hub */}
        <div className="mt-24 p-8 sm:p-12 rounded-3xl bg-[#f5f0e6] border border-amber-100/60 shadow-lg">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-amber-200/50">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#0284c7]">
                <Globe2 className="w-4 h-4" />
                <span>{lang === 'id' ? 'JARINGAN SUMBER GLOBAL' : 'GLOBAL SOURCING NETWORK'}</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#092237] mt-1">
                {lang === 'id' ? '8 Perairan Terpercaya di Seluruh Dunia' : 'Trusted Waters Across 8 Nations'}
              </h3>
            </div>
            <p className="text-sm text-slate-600 max-w-md font-light">
              {lang === 'id'
                ? 'Kami memilih rekanan nelayan dan fasilitas budidaya terakreditasi internasional yang mematuhi kelestarian lingkungan dan standar SFDA.'
                : 'Direct partnerships with licensed international fisheries adhering to strict sustainability and SFDA cold-chain standards.'}
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {SOURCING_COUNTRIES.map((country) => (
              <button
                key={country.name}
                onClick={() => setSelectedCountry(country)}
                className={`p-4 rounded-2xl text-left transition-all flex flex-col justify-between ${
                  selectedCountry.name === country.name
                    ? 'bg-white shadow-md border-2 border-[#0284c7] scale-102'
                    : 'bg-white/60 hover:bg-white border border-slate-200/60'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-3xl">{country.flag}</span>
                  {selectedCountry.name === country.name && (
                    <span className="w-2 h-2 rounded-full bg-[#0284c7]" />
                  )}
                </div>
                <div className="mt-3">
                  <h4 className="font-bold text-sm text-[#092237]">{country.name}</h4>
                  <p className="text-[0.7rem] text-slate-500 truncate">{country.waters}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Sourcing Country Detail Box */}
          <div className="mt-6 p-5 rounded-2xl bg-white border border-slate-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="text-4xl">{selectedCountry.flag}</span>
              <div>
                <p className="text-sm font-bold text-[#092237]">
                  {selectedCountry.name} • <span className="text-slate-500 font-normal">{selectedCountry.waters}</span>
                </p>
                <p className="text-xs text-slate-600 mt-0.5">
                  <span className="font-semibold text-[#0284c7]">
                    {lang === 'id' ? 'Spesies Utama:' : 'Key Varieties:'}
                  </span>{' '}
                  {selectedCountry.specialty}
                </p>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 flex-shrink-0">
              SFDA Compliant Source
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
