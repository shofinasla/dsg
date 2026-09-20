import React from 'react';
import { X, MessageCircle, FileText, Check, MapPin, Sparkles, Utensils, Scale, Waves } from 'lucide-react';
import { FishProduct } from '../types';

interface FishDetailModalProps {
  fish: FishProduct | null;
  onClose: () => void;
  onAddToQuote: (fishName: string) => void;
  lang: 'en' | 'id';
}

export const FishDetailModal: React.FC<FishDetailModalProps> = ({
  fish,
  onClose,
  onAddToQuote,
  lang,
}) => {
  if (!fish) return null;

  const whatsappUrl = `https://wa.me/966556764073?text=Hi%20Dried%20Seafood%20Global,%20I%20am%20interested%20in%20ordering%20or%20inquiring%20about%20*${encodeURIComponent(
    fish.name
  )}*.%20Could%20you%20please%20provide%20current%20pricing%20and%20availability?`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm animate-fade-up">
      {/* Click outside backdrop */}
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl z-10 border border-slate-100 flex flex-col">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-md transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Hero Image */}
        <div className="relative h-64 sm:h-80 w-full bg-gradient-to-b from-[#092237] to-[#0f3455] overflow-hidden flex-shrink-0">
          <img
            src={fish.image}
            alt={fish.name}
            className="w-full h-full object-contain p-6 transform hover:scale-105 transition-transform duration-500 filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.6)]"
            loading="lazy"
          />
          <div className="absolute top-5 left-5 flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#0284c7] text-white shadow-md">
              {fish.wildOrFarmed}
            </span>
            {fish.localArabicName && (
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/20 text-white backdrop-blur-md border border-white/30">
                {fish.localArabicName}
              </span>
            )}
          </div>
        </div>

        {/* Details Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <div className="flex items-center justify-between gap-4">
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#092237]">
                {fish.name}
              </h3>
              {fish.localArabicName && (
                <span className="text-xl sm:text-2xl font-bold font-serif text-[#0284c7]">
                  {fish.localArabicName}
                </span>
              )}
            </div>
            {fish.scientificName && (
              <p className="text-xs italic text-slate-400 mt-0.5">{fish.scientificName}</p>
            )}
            <p className="text-slate-600 mt-3 leading-relaxed">{fish.desc}</p>
          </div>

          {/* Quick Specifications Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-100">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-xl bg-sky-100 text-[#0284c7]">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium">
                  {lang === 'id' ? 'Profil Rasa' : 'Flavor Profile'}
                </p>
                <p className="text-xs font-semibold text-slate-800 mt-0.5">{fish.flavor}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded-xl bg-amber-100 text-amber-700">
                <Waves className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium">
                  {lang === 'id' ? 'Tekstur Daging' : 'Texture'}
                </p>
                <p className="text-xs font-semibold text-slate-800 mt-0.5">{fish.texture}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded-xl bg-emerald-100 text-emerald-700">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium">
                  {lang === 'id' ? 'Asal Perairan' : 'Origin Waters'}
                </p>
                <p className="text-xs font-semibold text-slate-800 mt-0.5">{fish.origin}</p>
              </div>
            </div>
          </div>

          {/* Culinary & Cooking Methods */}
          <div>
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-800 mb-2.5">
              <Utensils className="w-4 h-4 text-[#0284c7]" />
              <span>{lang === 'id' ? 'Rekomendasi Cara Memasak' : 'Recommended Cooking Styles'}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {fish.cookingMethods.map((method) => (
                <span
                  key={method}
                  className="px-3 py-1.5 rounded-xl bg-sky-50 text-slate-700 text-xs font-medium border border-sky-100 flex items-center gap-1.5"
                >
                  <Check className="w-3.5 h-3.5 text-[#0284c7]" />
                  {method}
                </span>
              ))}
            </div>
          </div>

          {/* Footer CTAs */}
          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:flex-1 py-3.5 px-6 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/20 transition-all hover:scale-[1.02]"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>{lang === 'id' ? 'Pesan via WhatsApp' : 'Order / Inquire via WhatsApp'}</span>
            </a>

            <button
              onClick={() => {
                onAddToQuote(fish.name);
                onClose();
              }}
              className="w-full sm:w-auto py-3.5 px-6 rounded-2xl bg-[#092237] hover:bg-[#0f3455] text-white font-semibold text-sm flex items-center justify-center gap-2 transition-colors"
            >
              <FileText className="w-4 h-4 text-[#38bdf8]" />
              <span>{lang === 'id' ? 'Tambah ke Penawaran' : 'Add to B2B Quote'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
