import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, FileText, Globe, Fish } from 'lucide-react';

interface NavbarProps {
  onOpenQuote: () => void;
  lang: 'en' | 'id';
  onToggleLang: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote, lang, onToggleLang }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#collection', label: lang === 'id' ? 'Koleksi Ikan' : 'Collection' },
    { href: '#quality', label: lang === 'id' ? 'Kualitas' : 'Quality' },
    { href: '#about', label: lang === 'id' ? 'Tentang Kami' : 'About' },
    { href: '#mission', label: lang === 'id' ? 'Visi & Misi' : 'Mission' },
    { href: '#services', label: lang === 'id' ? 'Layanan' : 'Services' },
    { href: '#contact', label: lang === 'id' ? 'Kontak' : 'Contact' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#092237]/90 backdrop-blur-md shadow-lg shadow-black/20 py-3 border-b border-white/10'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#top" className="flex items-center gap-3 group text-white">
          <div className="relative w-12 h-12 flex-shrink-0">
            <img
              src="/assets/logo-hvnwmuS1.png"
              alt="Dried Seafood Global Brand Logo"
              className="w-full h-full object-contain filter drop-shadow-md transition-transform duration-300 group-hover:scale-105"
              width={48}
              height={48}
            />
          </div>
          <div className="flex flex-col">
            <span className="font-montserrat font-extrabold text-lg sm:text-xl tracking-[0.08em] text-white leading-none">
              DRIED SEAFOOD GLOBAL
            </span>
            <span className="text-[0.62rem] uppercase tracking-[0.28em] text-[#93c5fd] font-medium mt-1">
              Fresh & Frozen Fish
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-white/85">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors duration-200 hover:text-[#38bdf8] focus:outline-none focus:text-[#38bdf8]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Language Toggle */}
          <button
            id="btn-lang-toggle"
            onClick={onToggleLang}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-white/90 bg-white/10 hover:bg-white/20 border border-white/15 transition-colors"
            title="Toggle Language (EN / ID)"
          >
            <Globe className="w-3.5 h-3.5 text-[#38bdf8]" />
            <span>{lang.toUpperCase()}</span>
          </button>

          {/* Quick RFQ button */}
          <button
            id="btn-nav-quote"
            onClick={onOpenQuote}
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-[#092237] bg-[#f5eedc] hover:bg-white transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            <FileText className="w-3.5 h-3.5 text-[#0369a1]" />
            <span>{lang === 'id' ? 'Minta Penawaran' : 'Request Quote'}</span>
          </button>

          {/* WhatsApp Direct */}
          <a
            id="btn-nav-whatsapp"
            href="https://wa.me/966556764073?text=Hi%20Dried%20Seafood%20Global,%20I%20would%20like%20to%20inquire%20about%20fresh%20and%20frozen%20fish%20supply"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-white bg-[#25D366] hover:bg-[#20bd5a] transition-all shadow-md shadow-[#25D366]/20 hover:scale-105"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-current" />
            <span className="hidden xl:inline">+966 55 676 4073</span>
            <span className="xl:hidden">WhatsApp</span>
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onToggleLang}
            className="px-2.5 py-1 text-xs font-bold rounded-md bg-white/10 text-white border border-white/15"
          >
            {lang.toUpperCase()}
          </button>
          <button
            id="btn-mobile-menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#092237] border-b border-white/15 px-6 pt-4 pb-6 space-y-4 shadow-2xl animate-fade-up">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-white/90 hover:text-[#38bdf8] py-1 border-b border-white/5"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full py-2.5 rounded-xl font-semibold text-sm bg-[#f5eedc] text-[#092237] flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4 text-[#0369a1]" />
              {lang === 'id' ? 'Kalkulator Penawaran B2B' : 'B2B Wholesale Quote'}
            </button>
            <a
              href="https://wa.me/966556764073?text=Hi%20Dried%20Seafood%20Global,%20I%20would%20like%20to%20inquire%20about%20seafood"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-xl font-semibold text-sm bg-[#25D366] text-white flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              WhatsApp: +966 55 676 4073
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
