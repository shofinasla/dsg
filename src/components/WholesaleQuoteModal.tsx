import React, { useState } from 'react';
import { X, MessageCircle, Send, Check, Calculator, Building, MapPin, Scale } from 'lucide-react';
import { FISH_PRODUCTS } from '../data/fishData';

interface WholesaleQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSelectedFish?: string[];
  lang: 'en' | 'id';
}

export const WholesaleQuoteModal: React.FC<WholesaleQuoteModalProps> = ({
  isOpen,
  onClose,
  initialSelectedFish = [],
  lang,
}) => {
  if (!isOpen) return null;

  const [companyName, setCompanyName] = useState('');
  const [contactName, setContactName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('Jeddah');
  const [businessType, setBusinessType] = useState('Restaurant');
  const [volumeKg, setVolumeKg] = useState<number>(200);
  const [frequency, setFrequency] = useState('Weekly');
  const [selectedFish, setSelectedFish] = useState<string[]>(
    initialSelectedFish.length > 0 ? initialSelectedFish : ['Najil (Saddleback Grouper / Coral Trout)', 'Grouper (Hamour)']
  );
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const toggleFish = (name: string) => {
    if (selectedFish.includes(name)) {
      setSelectedFish(selectedFish.filter((f) => f !== name));
    } else {
      setSelectedFish([...selectedFish, name]);
    }
  };

  const cities = ['Jeddah', 'Riyadh', 'Dammam', 'Mecca', 'Medina', 'Yanbu', 'Khobar', 'Jizan', 'Tabuk'];
  const businessTypes = ['Restaurant', 'Hotel & Resort', 'Catering Service', 'Supermarket', 'Wholesale Trader', 'Direct Consumer'];
  const frequencies = ['One-time Spot Order', 'Weekly Supply', 'Bi-weekly Contract', 'Monthly Standing Order'];

  const generateWhatsAppMessage = () => {
    const text = `*New B2B Quotation Request - Dried Seafood Global*
---------------------------------------
*Company:* ${companyName || 'N/A'}
*Contact Person:* ${contactName || 'N/A'}
*Phone:* ${phone || 'N/A'}
*City / Destination:* ${city}
*Business Type:* ${businessType}
*Estimated Volume:* ${volumeKg} kg
*Frequency:* ${frequency}
*Fish Varieties:*
${selectedFish.length > 0 ? selectedFish.map((f) => `• ${f}`).join('\n') : '• General Seafood Inquiry'}
*Special Instructions:* ${notes || 'None'}
---------------------------------------
Please provide an official wholesale quotation.`;
    return encodeURIComponent(text);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const waUrl = `https://wa.me/966556764073?text=${generateWhatsAppMessage()}`;
    window.open(waUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md animate-fade-up">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto bg-white rounded-3xl shadow-2xl z-10 border border-slate-100 flex flex-col">
        {/* Modal Header */}
        <div className="sticky top-0 bg-[#092237] text-white p-6 rounded-t-3xl flex items-center justify-between z-20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0284c7] flex items-center justify-center text-white">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display text-xl font-bold">
                {lang === 'id' ? 'Kalkulator Penawaran Grosir B2B' : 'B2B Wholesale Quote Calculator'}
              </h3>
              <p className="text-xs text-[#93c5fd]">
                Mawasem Al Nahda Trading Est. • SFDA Approved Supply
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
          {/* Step 1: Select Fish Species */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              {lang === 'id' ? '1. Pilih Jenis Ikan / Seafood' : '1. Select Fish Varieties'} ({selectedFish.length} selected)
            </label>
            <div className="max-h-40 overflow-y-auto p-3 rounded-2xl bg-slate-50 border border-slate-200 flex flex-wrap gap-2">
              {FISH_PRODUCTS.map((f) => {
                const isSelected = selectedFish.includes(f.name);
                return (
                  <button
                    type="button"
                    key={f.id}
                    onClick={() => toggleFish(f.name)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all flex items-center gap-1.5 ${
                      isSelected
                        ? 'bg-[#0284c7] text-white shadow-sm'
                        : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    {isSelected && <Check className="w-3.5 h-3.5" />}
                    <span>{f.name.split(' (')[0]}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Volume & Frequency */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  {lang === 'id' ? '2. Perkiraan Volume (KG)' : '2. Estimated Volume (KG)'}
                </label>
                <span className="text-sm font-extrabold text-[#0284c7]">{volumeKg} KG</span>
              </div>
              <input
                type="range"
                min="50"
                max="5000"
                step="50"
                value={volumeKg}
                onChange={(e) => setVolumeKg(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0284c7]"
              />
              <div className="flex justify-between text-[0.65rem] text-slate-400 mt-1">
                <span>50 kg</span>
                <span>1,000 kg</span>
                <span>5,000+ kg (5 Tons)</span>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                {lang === 'id' ? 'Frekuensi Pasokan' : 'Supply Frequency'}
              </label>
              <select
                value={frequency}
                onChange={(e) => setFrequency(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 bg-white focus:ring-2 focus:ring-[#0284c7] focus:outline-none"
              >
                {frequencies.map((freq) => (
                  <option key={freq} value={freq}>{freq}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Step 3: Company & Contact */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                {lang === 'id' ? 'Nama Perusahaan / Restoran' : 'Company / Restaurant Name'}
              </label>
              <input
                type="text"
                required
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="e.g. Al-Bahari Seafood Resto"
                className="w-full p-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-[#0284c7] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                {lang === 'id' ? 'Nama Kontak Person' : 'Contact Person'}
              </label>
              <input
                type="text"
                required
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                placeholder="e.g. Chef Ahmed / Mr. Faisal"
                className="w-full p-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-[#0284c7] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                {lang === 'id' ? 'Nomor Telepon / WhatsApp' : 'Phone / WhatsApp'}
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+966 ..."
                className="w-full p-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-[#0284c7] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                {lang === 'id' ? 'Kota Tujuan Pengiriman' : 'Destination City (KSA)'}
              </label>
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 bg-white focus:ring-2 focus:ring-[#0284c7] focus:outline-none"
              >
                {cities.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              {lang === 'id' ? 'Catatan Khusus (Spesifikasi Potongan / Fillet / Jadwal)' : 'Special Specifications or Packaging'}
            </label>
            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="e.g. Skin-on fillets, gut-clean on ice, early morning delivery"
              className="w-full p-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-[#0284c7] focus:outline-none resize-none"
            />
          </div>

          {/* Submit Action */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <button
              type="submit"
              className="w-full sm:flex-1 py-3.5 px-6 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/20 transition-all hover:scale-[1.01]"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>{lang === 'id' ? 'Kirim Permintaan via WhatsApp' : 'Send Quote Request via WhatsApp'}</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-auto px-6 py-3.5 rounded-2xl border border-slate-200 text-slate-600 hover:bg-slate-50 text-sm font-semibold transition-colors"
            >
              {lang === 'id' ? 'Batal' : 'Close'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
