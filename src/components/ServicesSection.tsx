import React from 'react';
import { CLIENT_PARTNERS } from '../data/fishData';
import { Ship, Store, Home, ArrowRight, Building2, CheckCircle } from 'lucide-react';

interface ServicesProps {
  onOpenQuote: () => void;
  lang: 'en' | 'id';
}

export const ServicesSection: React.FC<ServicesProps> = ({ onOpenQuote, lang }) => {
  const speciesTags = [
    'Coral Trout (Najil)',
    'Emperor Fish (Sheri)',
    'Parrot Fish (Harid)',
    'King Fish (Kanaad)',
    'Mackerel (Bagha)',
    'Tuna',
    'Seabream (Dennis)',
    'Seabass (Arosah)',
    'Shrimp & Prawns',
    'Norwegian Salmon',
    'Spiny Lobster',
    'Squid (Hubbar)',
  ];

  return (
    <section id="services" className="relative bg-[#f5f0e6] py-24 sm:py-32 text-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#0284c7]">
            {lang === 'id' ? 'APA YANG KAMI LAKUKAN' : 'WHAT WE DO'}
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-5xl font-bold text-[#092237]">
            {lang === 'id' ? 'Layanan Unggulan Kami' : 'Our Services'}
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg font-light">
            {lang === 'id'
              ? 'Menyediakan solusi rantai pasok maritim terintegrasi untuk kebutuhan restoran, ritel, dan pengadaan komersial.'
              : 'End-to-end maritime supply chain solutions for commercial hospitality, fine dining, and retail distributors.'}
          </p>
        </div>

        {/* 2 Core Services Bento Grid */}
        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Service 01 */}
          <div className="rounded-[2.5rem] bg-white p-8 sm:p-12 shadow-xl border border-slate-200/80 flex flex-col justify-between hover:shadow-2xl transition-all duration-300">
            <div>
              <div className="flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#092237] text-white font-display text-xl font-bold">
                  01
                </div>
                <div className="p-3 rounded-2xl bg-sky-50 text-[#0284c7]">
                  <Ship className="w-6 h-6" />
                </div>
              </div>

              <h3 className="mt-8 font-display text-2xl sm:text-3xl font-bold text-[#092237]">
                {lang === 'id'
                  ? 'Impor Ikan Segar & Beku Berkualitas Tinggi'
                  : 'Importing High-Quality Fresh & Frozen Fish'}
              </h3>

              <p className="mt-4 leading-relaxed text-slate-600 font-light">
                {lang === 'id'
                  ? 'Kami mendatangkan dan mengimpor beragam pilihan hidangan laut segar dan beku langsung dari para nelayan dan penangkar terpercaya di seluruh dunia, mencakup Coral Trout, Emperor Fish, Parrot Fish, King Fish, Mackerel, Tuna, Seabream, Seabass, udang, salmon, dan banyak lagi.'
                  : 'We source and import a wide variety of fresh and frozen seafood, including Coral Trout, Emperor Fish, Parrot Fish, King Fish, Mackerel, Tuna, Seabream, Seabass, shrimp, salmon, and more, from trusted suppliers across the globe.'}
              </p>

              {/* Species Chips */}
              <div className="mt-6 flex flex-wrap gap-2">
                {speciesTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700 hover:border-[#0284c7] hover:text-[#0284c7] transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500">SFDA Certified Imports</span>
              <button
                onClick={onOpenQuote}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0284c7] hover:text-[#092237] transition-colors"
              >
                <span>{lang === 'id' ? 'Minta Katalog' : 'Request Spec Sheet'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Service 02 */}
          <div className="rounded-[2.5rem] bg-white p-8 sm:p-12 shadow-xl border border-slate-200/80 flex flex-col justify-between hover:shadow-2xl transition-all duration-300">
            <div>
              <div className="flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0284c7] text-white font-display text-xl font-bold">
                  02
                </div>
                <div className="p-3 rounded-2xl bg-amber-50 text-amber-600">
                  <Store className="w-6 h-6" />
                </div>
              </div>

              <h3 className="mt-8 font-display text-2xl sm:text-3xl font-bold text-[#092237]">
                {lang === 'id' ? 'Memasok Kebutuhan Perusahaan & Restoran' : 'Supplying to Businesses'}
              </h3>

              <p className="mt-4 leading-relaxed text-slate-600 font-light">
                {lang === 'id'
                  ? 'Kami bangga menjadi mitra pemasok utama bagi restoran dan perusahaan terkemuka di Arab Saudi, di antaranya:'
                  : 'We are proud suppliers to leading restaurants and companies in Saudi Arabia, including:'}
              </p>

              {/* Client List Grid */}
              <ul className="mt-5 grid sm:grid-cols-2 gap-2.5">
                {CLIENT_PARTNERS.map((client) => (
                  <li
                    key={client.name}
                    className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-100"
                  >
                    <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold text-slate-800 block">{client.name}</span>
                      <span className="text-[0.68rem] text-slate-500">{client.type}</span>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Upcoming Direct-to-Home note */}
              <div className="mt-6 p-4 rounded-2xl bg-sky-50 border border-sky-100 flex items-start gap-3">
                <Home className="w-5 h-5 text-[#0284c7] flex-shrink-0 mt-0.5" />
                <p className="text-xs leading-relaxed text-slate-700">
                  <span className="font-bold text-[#092237]">
                    {lang === 'id' ? 'Layanan Ke Rumah (Segera Hadir): ' : 'Direct-to-Home Delivery (Soon): '}
                  </span>
                  {lang === 'id'
                    ? "Sebagai bagian dari strategi pertumbuhan kami, kami berkomitmen menghadirkan ikan segar & beku langsung ke pintu rumah pelanggan dengan kenyamanan dan kesegaran maksimal."
                    : "As part of our growth strategy, we aim to bring fresh & frozen fish directly to our customers' homes, ensuring quality, freshness, and convenience."}
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500">150-200 Tons Monthly Capacity</span>
              <button
                onClick={onOpenQuote}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0284c7] hover:text-[#092237] transition-colors"
              >
                <span>{lang === 'id' ? 'Daftar Kemitraan Restoran' : 'Partner with Dried Seafood Global'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
