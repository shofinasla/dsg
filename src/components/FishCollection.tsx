import React, { useState, useMemo } from 'react';
import { Search, Sparkles, Filter, LayoutGrid, List, ArrowUpRight, Check, Eye } from 'lucide-react';
import { FISH_PRODUCTS } from '../data/fishData';
import { FishCategory, FishProduct } from '../types';

interface FishCollectionProps {
  onSelectFish: (fish: FishProduct) => void;
  lang: 'en' | 'id';
}

export const FishCollection: React.FC<FishCollectionProps> = ({ onSelectFish, lang }) => {
  const [activeCategory, setActiveCategory] = useState<FishCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  const [visibleCount, setVisibleCount] = useState(12);

  const categories: { id: FishCategory; label: string; labelId: string }[] = [
    { id: 'all', label: 'All Seafood (25)', labelId: 'Semua Seafood (25)' },
    { id: 'red-sea', label: 'Red Sea Prized Catch', labelId: 'Tangkapan Laut Merah' },
    { id: 'fresh', label: 'Fresh Catch', labelId: 'Ikan Segar' },
    { id: 'frozen', label: 'Frozen Quality', labelId: 'Ikan Beku' },
    { id: 'crustaceans', label: 'Crustaceans & Shellfish', labelId: 'Kepiting & Udang' },
    { id: 'fillet', label: 'Fresh Fillets', labelId: 'Fillet Segar' },
  ];

  const filteredFish = useMemo(() => {
    return FISH_PRODUCTS.filter((item) => {
      // Category match
      const matchCategory =
        activeCategory === 'all' || item.category.includes(activeCategory as any);

      // Search match (English name, Arabic name, description, flavor)
      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        (item.localArabicName && item.localArabicName.toLowerCase().includes(q)) ||
        (item.scientificName && item.scientificName.toLowerCase().includes(q)) ||
        item.desc.toLowerCase().includes(q) ||
        item.origin.toLowerCase().includes(q);

      return matchCategory && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  const displayedFish = filteredFish.slice(0, visibleCount);

  return (
    <section id="collection" className="relative py-28 text-white overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #071c2d 0%, #0a2942 50%, #071c2d 100%)',
      }}
    >
      {/* Decorative top wave */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none rotate-180 -translate-y-[1px] pointer-events-none">
        <svg
          className="w-full h-12 text-[#fafbfc] fill-current"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path d="M0,48 C240,110 480,10 720,45 C960,80 1200,115 1440,60 L1440,120 L0,120 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-[0.25em] text-[#38bdf8] bg-white/5 border border-white/10 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#38bdf8]" />
              <span>{lang === 'id' ? 'KATALOG SEAFOOD' : 'AUTHENTIC SELECTION'}</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">
              {lang === 'id' ? 'Koleksi Ikan & Hasil Laut' : 'Our Seafood Collection'}
            </h2>
            <p className="mt-3 text-base sm:text-lg text-white/70 max-w-2xl font-light">
              {lang === 'id'
                ? 'Dari kelezatan perairan dalam Laut Merah hingga Salmon Arktik Norwegia. Semua diproses dengan standar mutu SFDA tertinggi.'
                : 'From the prized deep waters of the Red Sea to Arctic Norwegian Salmon. Handled under stringent SFDA cold-chain standards.'}
            </p>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-2 self-start md:self-auto bg-white/10 p-1.5 rounded-2xl border border-white/15">
            <button
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                viewMode === 'grid'
                  ? 'bg-[#f5eedc] text-[#092237] shadow-md'
                  : 'text-white/80 hover:text-white'
              }`}
              aria-label="Grid view"
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>{lang === 'id' ? 'Grid' : 'Grid'}</span>
            </button>
            <button
              onClick={() => setViewMode('table')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                viewMode === 'table'
                  ? 'bg-[#f5eedc] text-[#092237] shadow-md'
                  : 'text-white/80 hover:text-white'
              }`}
              aria-label="Table view"
            >
              <List className="w-3.5 h-3.5" />
              <span>{lang === 'id' ? 'Tabel Spesifikasi' : 'Specs Table'}</span>
            </button>
          </div>
        </div>

        {/* Filter and Search Controls */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Chips */}
          <div className="w-full md:w-auto flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setVisibleCount(12);
                }}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                  activeCategory === cat.id
                    ? 'bg-[#f5eedc] text-[#092237] shadow-lg shadow-black/20 scale-105'
                    : 'bg-white/10 text-white/80 hover:bg-white/15 hover:text-white border border-white/10'
                }`}
              >
                {lang === 'id' ? cat.labelId : cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="w-full md:w-72 relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setVisibleCount(12);
              }}
              placeholder={lang === 'id' ? 'Cari ikan (contoh: Hamour, Najil)...' : 'Search fish (e.g. Hamour, Salmon)...'}
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white/10 border border-white/15 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#38bdf8] focus:bg-white/15 transition-all"
            />
          </div>
        </div>

        {/* Results Counter */}
        <div className="mt-4 flex items-center justify-between text-xs text-white/60">
          <span>
            {lang === 'id'
              ? `Menampilkan ${displayedFish.length} dari ${filteredFish.length} jenis seafood`
              : `Showing ${displayedFish.length} of ${filteredFish.length} seafood species`}
          </span>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="text-[#38bdf8] hover:underline"
            >
              {lang === 'id' ? 'Reset Pencarian' : 'Clear search'}
            </button>
          )}
        </div>

        {/* Product Grid View */}
        {viewMode === 'grid' && (
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {displayedFish.map((fish) => (
              <div
                key={fish.id}
                onClick={() => onSelectFish(fish)}
                className="group relative bg-[#092237]/80 hover:bg-[#0c2e4a] rounded-3xl p-5 border border-white/10 hover:border-[#38bdf8]/40 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1.5 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  {/* Fish Image Stage */}
                  <div className="relative h-44 w-full rounded-2xl bg-gradient-to-b from-white/5 to-white/10 flex items-center justify-center overflow-hidden mb-4 p-4">
                    <img
                      src={fish.image}
                      alt={fish.name}
                      className="w-full h-full object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] transform group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />

                    {/* Badge top-left */}
                    <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full text-[0.68rem] font-bold bg-[#0284c7] text-white">
                      {fish.wildOrFarmed}
                    </span>

                    {/* Arabic Name top-right */}
                    {fish.localArabicName && (
                      <span className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full text-[0.75rem] font-bold bg-white/15 text-[#f5eedc] backdrop-blur-md">
                        {fish.localArabicName}
                      </span>
                    )}
                  </div>

                  {/* Title and descriptions */}
                  <h3 className="font-display font-bold text-lg text-white group-hover:text-[#38bdf8] transition-colors leading-snug">
                    {fish.name}
                  </h3>
                  <p className="text-xs text-white/70 line-clamp-2 mt-2 font-light leading-relaxed">
                    {fish.desc}
                  </p>
                </div>

                {/* Card Footer */}
                <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[0.68rem] text-white/50 uppercase tracking-wider">
                      {lang === 'id' ? 'Asal' : 'Origin'}
                    </span>
                    <span className="text-xs text-[#bae6fd] font-medium truncate max-w-[140px]">
                      {fish.origin}
                    </span>
                  </div>

                  <button
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-[#f5eedc] text-white hover:text-[#092237] text-xs font-semibold transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectFish(fish);
                    }}
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>{lang === 'id' ? 'Detail' : 'Specs'}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Product Table View */}
        {viewMode === 'table' && (
          <div className="mt-8 overflow-x-auto bg-[#092237]/80 rounded-3xl border border-white/10 shadow-2xl">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-white/15 text-xs uppercase tracking-wider text-white/50 bg-white/5">
                <tr>
                  <th className="py-4 px-6">{lang === 'id' ? 'Produk' : 'Product'}</th>
                  <th className="py-4 px-6">{lang === 'id' ? 'Nama Lokal / Arab' : 'Arabic Name'}</th>
                  <th className="py-4 px-6">{lang === 'id' ? 'Tipe' : 'Type'}</th>
                  <th className="py-4 px-6">{lang === 'id' ? 'Profil Rasa & Tekstur' : 'Profile & Texture'}</th>
                  <th className="py-4 px-6">{lang === 'id' ? 'Asal' : 'Origin'}</th>
                  <th className="py-4 px-6 text-right">{lang === 'id' ? 'Aksi' : 'Action'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {displayedFish.map((fish) => (
                  <tr
                    key={fish.id}
                    onClick={() => onSelectFish(fish)}
                    className="hover:bg-white/5 transition-colors cursor-pointer"
                  >
                    <td className="py-3.5 px-6 flex items-center gap-3">
                      <img
                        src={fish.image}
                        alt={fish.name}
                        className="w-12 h-12 object-contain bg-white/5 rounded-xl p-1"
                        loading="lazy"
                      />
                      <div>
                        <p className="font-semibold text-white">{fish.name}</p>
                        <p className="text-xs text-white/50">{fish.averageWeight || 'Custom size'}</p>
                      </div>
                    </td>
                    <td className="py-3.5 px-6 font-medium text-[#38bdf8]">
                      {fish.localArabicName || '—'}
                    </td>
                    <td className="py-3.5 px-6">
                      <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-[#0284c7]/30 text-[#7dd3fc] border border-[#0284c7]/40">
                        {fish.wildOrFarmed}
                      </span>
                    </td>
                    <td className="py-3.5 px-6 text-xs text-white/80 max-w-xs truncate">
                      {fish.flavor}
                    </td>
                    <td className="py-3.5 px-6 text-xs text-white/70">
                      {fish.origin}
                    </td>
                    <td className="py-3.5 px-6 text-right">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectFish(fish);
                        }}
                        className="px-3 py-1 rounded-xl bg-white/10 hover:bg-[#f5eedc] hover:text-[#092237] text-xs font-semibold text-white transition-colors"
                      >
                        {lang === 'id' ? 'Lihat' : 'View'}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Load More Button if remaining */}
        {visibleCount < filteredFish.length && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setVisibleCount((prev) => prev + 12)}
              className="px-8 py-3.5 rounded-full bg-[#f5eedc] text-[#092237] font-semibold text-sm shadow-xl hover:bg-white transition-all transform hover:-translate-y-0.5"
            >
              {lang === 'id'
                ? `Muat Lebih Banyak (${filteredFish.length - visibleCount} tersisa)`
                : `Load More Seafood (${filteredFish.length - visibleCount} remaining)`}
            </button>
          </div>
        )}
      </div>

      {/* Bottom wave transition */}
      <div className="relative z-10 w-full leading-none mt-20">
        <svg
          className="w-full h-12 sm:h-20 text-white fill-current"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path d="M0,48 C240,110 480,10 720,45 C960,80 1200,115 1440,60 L1440,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  );
};
