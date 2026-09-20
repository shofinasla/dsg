import React from 'react';
import { ThermometerSnowflake, CheckCircle2, Award, Truck, Sparkles } from 'lucide-react';

interface QualityProps {
  lang: 'en' | 'id';
}

export const QualityAndExpertise: React.FC<QualityProps> = ({ lang }) => {
  return (
    <section id="quality" className="relative bg-[#fafbfc] py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column: Image with floating badges */}
          <div className="relative order-2 lg:order-1">
            {/* Ambient blur glow behind image */}
            <div className="absolute -inset-4 sm:-inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-tr from-[#38bdf8]/20 via-[#0284c7]/15 to-[#f5eedc]/30 blur-2xl opacity-70" />

            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-sky-100 group">
              <img
                src="/assets/underwater-BA5N2b9p.jpg"
                alt="Underwater seascape with swimming fish"
                className="w-full h-auto object-cover transform duration-700 group-hover:scale-105 animate-float-slow"
                loading="lazy"
                width={800}
                height={600}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#092237]/60 via-transparent to-transparent pointer-events-none" />

              {/* Floating Stat Pill on the image */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#092237]/80 backdrop-blur-md border border-white/20 text-white flex items-center justify-between shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0284c7] flex items-center justify-center text-white">
                    <ThermometerSnowflake className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#93c5fd] font-semibold">
                      {lang === 'id' ? 'Kontrol Suhu Presisi' : 'Cold-Chain Integrity'}
                    </p>
                    <p className="text-sm font-bold">-18°C Deep Frozen • 0°C - 2°C Fresh Catch</p>
                  </div>
                </div>
                <span className="hidden sm:inline-flex px-2.5 py-1 rounded-full text-[0.65rem] font-bold bg-[#38bdf8]/20 text-[#7dd3fc] border border-[#38bdf8]/30">
                  SFDA
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Text & Pillars */}
          <div className="order-1 lg:order-2 space-y-10">
            {/* Block 1: Quality */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-[0.25em] text-[#0284c7] bg-sky-50 border border-sky-100">
                <Sparkles className="w-3.5 h-3.5 text-[#0284c7]" />
                <span>{lang === 'id' ? 'KUALITAS' : 'QUALITY'}</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#092237] leading-[1.15]">
                {lang === 'id' ? 'Ikan Segar & Berkualitas di Genggaman Anda' : 'Fresh and Quality Fish in your hand'}
              </h2>
              <p className="text-base sm:text-lg font-medium text-[#0284c7]">
                {lang === 'id' ? 'Diperoleh langsung dari sumber terpercaya' : 'Sourcing from trusted source'}
              </p>
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg font-light">
                {lang === 'id'
                  ? 'Kami berdedikasi menyediakan ikan segar dan beku terbaik dengan harga bersaing. Komitmen kami adalah menghadirkan seafood berkualitas tinggi, dipanen langsung demi kenikmatan dan kesehatan hidangan Anda.'
                  : 'We are excited to offer you the finest, freshest & frozen fish at affordable prices. Our commitment is to provide high-quality seafood, sourced directly for your enjoyment.'}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 text-sm font-medium text-slate-700 bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#0284c7] flex-shrink-0" />
                  <span>{lang === 'id' ? 'Kualitas Mutu SFDA' : 'SFDA Quality Standard'}</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm font-medium text-slate-700 bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#0284c7] flex-shrink-0" />
                  <span>{lang === 'id' ? 'Seleksi Langsung dari Nelayan' : 'Direct Harbor Selection'}</span>
                </div>
              </div>
            </div>

            {/* Block 2: Expertise */}
            <div className="border-t border-slate-200 pt-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-[0.25em] text-[#eab308] bg-amber-50 border border-amber-200">
                <Award className="w-3.5 h-3.5 text-amber-600" />
                <span>{lang === 'id' ? 'KEAHLIAN' : 'EXPERTISE'}</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#092237]">
                {lang === 'id' ? 'Dipilih oleh Tim Profesional & Berpengalaman' : 'Sourced by a professional & expert team'}
              </h3>
              <p className="text-base text-slate-500 font-medium">
                {lang === 'id' ? 'Pengadaan oleh tangan-tangan ahli maritim' : 'Sourcing by professional hands'}
              </p>
              <p className="text-slate-600 leading-relaxed font-light">
                {lang === 'id'
                  ? 'Didukung oleh tim profesional berdedikasi tinggi dengan pengalaman lebih dari satu dekade dalam logistik rantai dingin dan pemotongan higienis, menghasilkan kualitas ikan terbaik untuk disajikan.'
                  : 'Served by a professional team to create a truly quality fish to serve.'}
              </p>

              <div className="flex items-center gap-4 pt-2">
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Truck className="w-4 h-4 text-[#0284c7]" />
                  <span>{lang === 'id' ? 'Armada Berpendingin Khusus' : 'Refrigerated Fleet Across KSA'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
