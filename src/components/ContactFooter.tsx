import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle, ArrowUp, Send, Check } from 'lucide-react';

interface ContactFooterProps {
  onOpenQuote: () => void;
  lang: 'en' | 'id';
}

export const ContactFooter: React.FC<ContactFooterProps> = ({ onOpenQuote, lang }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setNewsletterEmail('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer
        id="contact"
        className="relative text-white overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, #071b2b 0%, #051421 100%)',
        }}
      >
        {/* Subtle glowing ambient */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0284c7]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 relative z-10">
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/10">
            {/* Column 1: Brand & Bio */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <img
                  src="/assets/logo-hvnwmuS1.png"
                  alt="Dried Seafood Global Logo"
                  className="w-14 h-14 object-contain filter drop-shadow-md"
                  width={56}
                  height={56}
                />
                <div>
                  <span className="font-montserrat font-bold text-xl tracking-[0.06em] block text-white leading-none">
                    DRIED SEAFOOD GLOBAL
                  </span>
                  <span className="text-[0.62rem] uppercase tracking-[0.25em] text-[#93c5fd] block mt-1">
                    Fresh and Frozen Fish
                  </span>
                </div>
              </div>

              <p className="text-white/80 leading-relaxed text-sm font-light">
                {lang === 'id'
                  ? 'Menghadirkan kesegaran samudra langsung ke meja Anda. Pemasok seafood terpercaya untuk restoran, hotel, dan bisnis di seluruh Arab Saudi.'
                  : 'Delivering the freshness of the ocean to your table. A trusted seafood partner across the Kingdom of Saudi Arabia.'}
              </p>

              <div className="pt-2">
                <button
                  onClick={onOpenQuote}
                  className="px-5 py-2.5 rounded-full bg-[#f5eedc] text-[#092237] text-xs font-bold hover:bg-white transition-all shadow-md"
                >
                  {lang === 'id' ? 'Minta Penawaran Grosir' : 'Request Wholesale Catalog'}
                </button>
              </div>
            </div>

            {/* Column 2: Navigation Links */}
            <div className="space-y-4">
              <h4 className="font-display font-semibold text-lg text-[#f5eedc] tracking-wide">
                {lang === 'id' ? 'Tautan Cepat' : 'Navigation'}
              </h4>
              <ul className="space-y-2.5 text-sm text-white/75 font-light">
                <li>
                  <a href="#collection" className="hover:text-[#38bdf8] transition-colors">
                    {lang === 'id' ? 'Koleksi Ikan (25 Spesies)' : 'Seafood Collection (25 Items)'}
                  </a>
                </li>
                <li>
                  <a href="#quality" className="hover:text-[#38bdf8] transition-colors">
                    {lang === 'id' ? 'Standar Kualitas & Cold Chain' : 'Quality & Cold-Chain Standards'}
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-[#38bdf8] transition-colors">
                    {lang === 'id' ? 'Kisah Perusahaan (Est. 2015)' : 'Our Story (Est. 2015)'}
                  </a>
                </li>
                <li>
                  <a href="#mission" className="hover:text-[#38bdf8] transition-colors">
                    {lang === 'id' ? 'Visi & Misi' : 'Mission & Vision'}
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-[#38bdf8] transition-colors">
                    {lang === 'id' ? 'Layanan B2B & Suplai' : 'B2B Services & Partners'}
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact Details */}
            <div className="space-y-4">
              <h4 className="font-display font-semibold text-lg text-[#f5eedc] tracking-wide">
                {lang === 'id' ? 'Hubungi Kami' : 'Get in touch'}
              </h4>
              <ul className="space-y-3.5 text-sm text-white/85">
                <li>
                  <a
                    href="mailto:hello@driedseafoodglobal.com"
                    className="inline-flex items-center gap-3 hover:text-[#38bdf8] transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-[#f5eedc] group-hover:bg-[#0284c7] transition-colors">
                      <Mail className="w-4 h-4" />
                    </div>
                    <span>hello@driedseafoodglobal.com</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/966556764073"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 hover:text-[#38bdf8] transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#25D366]/20 flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                      <MessageCircle className="w-4 h-4 fill-current" />
                    </div>
                    <span>+966 55 676 4073</span>
                  </a>
                </li>
              </ul>

              <div className="pt-2">
                <span className="text-xs text-white/50 block mb-1">
                  {lang === 'id' ? 'Jam Operasional:' : 'Working Hours:'}
                </span>
                <p className="text-xs text-white/80 font-medium">Sat – Thu: 8:00 AM – 8:00 PM</p>
              </div>
            </div>

            {/* Column 4: Location & Address */}
            <div className="space-y-4">
              <h4 className="font-display font-semibold text-lg text-[#f5eedc] tracking-wide">
                {lang === 'id' ? 'Kunjungi Kami' : 'Visit us'}
              </h4>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Computer%20City%2C%20Near%20Dallah%2C%20Palestine%2C%20Al-Rehab%2C%20Jeddah"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-sm text-white/85 hover:text-[#38bdf8] transition-colors group bg-white/5 p-3 rounded-2xl border border-white/10"
              >
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-[#f5eedc] flex-shrink-0 group-hover:bg-[#0284c7] transition-colors">
                  <MapPin className="w-4 h-4" />
                </div>
                <p className="leading-relaxed text-xs">
                  Computer City, Near Dallah, Palestine,
                  <br />
                  <span className="text-white/60">Al-Rehab, Jeddah, Saudi Arabia</span>
                </p>
              </a>

              {/* Newsletter / Market Update */}
              <div className="pt-2">
                <p className="text-xs text-white/70 mb-2">
                  {lang === 'id' ? 'Dapatkan update stok & harga pasar segar' : 'Receive fresh arrival alerts'}
                </p>
                <form onSubmit={handleSubscribe} className="flex items-center gap-1.5">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full px-3 py-2 rounded-xl bg-white/10 border border-white/15 text-xs text-white placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-[#38bdf8]"
                  />
                  <button
                    type="submit"
                    className="p-2 rounded-xl bg-[#0284c7] hover:bg-[#0369a1] text-white transition-colors flex-shrink-0"
                    aria-label="Subscribe"
                  >
                    {subscribed ? <Check className="w-4 h-4 text-emerald-300" /> : <Send className="w-4 h-4" />}
                  </button>
                </form>
                {subscribed && (
                  <p className="text-[0.68rem] text-emerald-400 mt-1">Thank you for subscribing!</p>
                )}
              </div>
            </div>
          </div>

          {/* Bottom Legal bar */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60 text-center sm:text-left">
            <p>© {new Date().getFullYear()} Mawasem Al Nahda Trading Est. All rights reserved.</p>
            <p className="font-montserrat text-white/80 font-medium">
              Dried Seafood Global — Fresh from sea to table.
            </p>
            <div className="flex items-center gap-4">
              <span>SFDA License Registered</span>
              <button
                onClick={scrollToTop}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Quick Action Button */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
        <a
          id="floating-whatsapp"
          href="https://wa.me/966556764073?text=Hi%20Dried%20Seafood%20Global,%20I%20am%20visiting%20your%20website%20and%20would%20like%20to%20inquire%20about%20fish%20supply"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] text-white font-bold text-sm shadow-2xl hover:bg-[#20bd5a] transition-all transform hover:scale-105"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
          <span className="hidden sm:inline">Chat WhatsApp</span>
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
          </span>
        </a>
      </div>
    </>
  );
};
