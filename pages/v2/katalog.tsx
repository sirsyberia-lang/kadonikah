import React, { useState, useMemo } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Search, SlidersHorizontal, Heart, Star, ChevronRight, Calculator, Gift, Coffee, Store } from 'lucide-react';
import DesktopHeader from '../../components/DesktopHeader';
import BottomNavV2 from '../../components/BottomNavV2';
import { souvenirs as defaultSouvenirs, Souvenir } from '../../data/souvenirs';

function formatRupiah(num: number): string {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(num);
}

const categories = [
  { id: 'all', name: 'Semua', icon: '✨' },
  { id: 'eksklusif', name: 'Aromaterapi & Lilin', icon: '🕯️' },
  { id: 'budget-fit', name: 'Alat Makan & Dapur', icon: '🍽️' },
  { id: 'hemat', name: 'Aksesoris & Lainnya', icon: '🧵' },
];

const priceFilters = [
  { label: '< Rp 5.000', min: 0, max: 5000 },
  { label: 'Rp 5k - 10k', min: 5000, max: 10000 },
  { label: 'Rp 10k+', min: 10000, max: 9999999 },
];

const packagingOptions = [
  { 
    name: 'Hardbox Monogram', 
    price: 4500, 
    icon: '📦', 
    badge: 'Premium Choice',
    description: 'Kotak kaku mewah dengan inisial foil emas/silver.' 
  },
  { 
    name: 'Kaleng Tin Can', 
    price: 3200, 
    icon: '🥫', 
    badge: 'Vintage Look',
    description: 'Kemasan kaleng estetik tahan lama & reusable.' 
  },
  { 
    name: 'Wax Seal & Dried Flower', 
    price: 1500, 
    icon: '🕯️', 
    badge: 'Artisan Touch',
    description: 'Segel lilin klasik dengan hiasan bunga kering.' 
  },
];

export default function V2Katalog() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activePriceRange, setActivePriceRange] = useState<number | null>(null);
  const [showMarketplaceModal, setShowMarketplaceModal] = useState(false);
  const [selectedProductForMarketplace, setSelectedProductForMarketplace] = useState<Souvenir | null>(null);

  const filteredProducts = useMemo(() => {
    let list = defaultSouvenirs;
    
    if (activeFilter !== 'all') {
      list = list.filter(s => s.category === activeFilter);
    }
    
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      list = list.filter(s => s.name.toLowerCase().includes(q) || s.description.toLowerCase().includes(q));
    }

    if (activePriceRange !== null) {
      const range = priceFilters[activePriceRange];
      list = list.filter(s => s.price >= range.min && s.price <= range.max);
    }
    
    return list;
  }, [activeFilter, searchQuery, activePriceRange]);

  return (
    <div className="min-h-screen bg-[#FAF6F6] pb-32 font-sans selection:bg-rose-100 selection:text-rose-900">
      <Head>
        <title>Katalog Souvenir V2 | Souvenir Murah Wedding Estimator</title>
      </Head>

      <DesktopHeader onOpenLogin={() => {}} />
      
      <main className="max-w-7xl mx-auto px-4 py-6 md:py-10">
        
        {/* Yellow Top Banner (from mockup) */}
        <div className="mb-6 bg-[#FFFBEC] border border-amber-100 rounded-2xl p-3 flex items-center justify-between text-amber-900 shadow-sm animate-in fade-in slide-in-from-top-4 duration-500">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-amber-400 flex items-center justify-center text-white text-xs font-bold">🔔</div>
            <p className="text-xs font-bold leading-none">
              <span className="opacity-70">1.420+ Vendor Tersertifikasi</span> • 99.4% Puas
            </p>
          </div>
          <ChevronRight className="w-4 h-4 opacity-50" />
        </div>

        {/* Hero Section */}
        <div className="mb-8 text-center md:text-left">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-[#2D1B22] leading-tight mb-3">
            Katalog Souvenir<br/>Pernikahan Berkesan
          </h1>
          <p className="text-sm text-stone-500 max-w-lg mb-6 leading-relaxed">
            Temukan pilihan cinderamata terbaik yang dikurasi khusus untuk hari bahagia anda. Mulai dari lilin wangi, alat makan kayu, hingga pouch eksklusif.
          </p>

          {/* Search & Filter Bar */}
          <div className="flex flex-col md:flex-row gap-3 items-center">
            <div className="relative w-full md:flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
              <input 
                type="text" 
                placeholder="Cari souvenir, lilin wangi, pouch..."
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#6B3E52]/20 focus:border-[#6B3E52] transition-all shadow-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <button className="flex-1 md:flex-none p-4 rounded-2xl bg-white border border-stone-200 text-[#6B3E52] hover:bg-stone-50 transition-all flex items-center justify-center gap-2 shadow-sm">
                <SlidersHorizontal className="w-5 h-5" />
                <span className="md:hidden font-bold text-xs uppercase tracking-wider">Filter</span>
              </button>
            </div>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex gap-2 overflow-x-auto pb-4 no-scrollbar -mx-4 px-4 mb-2">
          {categories.map(c => (
            <button
              key={c.id}
              onClick={() => setActiveFilter(c.id)}
              className={`whitespace-nowrap px-6 py-3 rounded-full text-xs font-bold transition-all flex items-center gap-2 shadow-sm ${
                activeFilter === c.id 
                ? 'bg-[#6B3E52] text-white' 
                : 'bg-white text-stone-600 border border-stone-200 hover:border-[#6B3E52]/30'
              }`}
            >
              <span>{c.icon}</span> {c.name}
            </button>
          ))}
        </div>

        {/* Price Tiers (from mockup) */}
        <div className="flex gap-2 mb-8 overflow-x-auto no-scrollbar">
          {priceFilters.map((f, i) => (
            <button
              key={i}
              onClick={() => setActivePriceRange(activePriceRange === i ? null : i)}
              className={`whitespace-nowrap px-5 py-2.5 rounded-xl text-[11px] font-extrabold uppercase tracking-widest transition-all ${
                activePriceRange === i
                ? 'bg-[#6B3E52]/10 text-[#6B3E52] border-2 border-[#6B3E52]'
                : 'bg-white text-stone-500 border border-stone-200'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
          {filteredProducts.map((p) => (
            <div key={p.id} className="bg-white rounded-[32px] p-3 md:p-4 border border-stone-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group relative overflow-hidden">
              {/* Product Image & Badges */}
              <div className="aspect-square rounded-2xl bg-[#F9F7F5] mb-4 relative overflow-hidden flex items-center justify-center">
                {p.image && !p.image.includes('placeholder') ? (
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                ) : (
                  <span className="text-4xl opacity-30">🎁</span>
                )}
                
                {/* Floating Labels from Mockup */}
                <div className="absolute top-2 left-2 flex flex-col gap-1">
                  <div className="bg-[#FFEB3B] text-[#2D1B22] text-[8px] md:text-[9px] font-black px-2 py-1 rounded-md shadow-sm uppercase">FREE TAG & PITA</div>
                  <div className="bg-[#FFEB3B] text-[#2D1B22] text-[8px] md:text-[9px] font-black px-2 py-1 rounded-md shadow-sm uppercase">FREE ENGRAVE</div>
                </div>

                <button className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-[#6B3E52] shadow-sm hover:bg-[#6B3E52] hover:text-white transition-all">
                  <Heart className="w-4 h-4" />
                </button>
              </div>

              {/* Rating & Stats */}
              <div className="flex items-center gap-1.5 mb-2">
                <div className="flex items-center gap-0.5 text-amber-400">
                  <Star className="w-3 h-3 fill-current" />
                  <span className="text-[10px] md:text-xs font-black text-stone-900">4.9</span>
                </div>
                <span className="text-[10px] text-stone-400 font-bold">• Min. 100pcs</span>
              </div>

              <h3 className="font-serif text-sm md:text-base font-bold text-[#2D1B22] mb-1 line-clamp-1 group-hover:text-[#6B3E52] transition-colors">{p.name}</h3>
              <p className="text-[10px] md:text-xs text-stone-400 mb-4 line-clamp-2 leading-relaxed min-h-[32px]">{p.description}</p>
              
              <div className="mt-auto">
                <div className="text-[#6B3E52] font-black text-sm md:text-lg mb-3">
                  {formatRupiah(p.price)} <span className="text-[10px] font-bold text-stone-400">/pcs</span>
                </div>
                <button 
                  onClick={() => { setSelectedProductForMarketplace(p); setShowMarketplaceModal(true); }}
                  className="w-full py-3 rounded-2xl bg-[#FFF1F3] text-[#6B3E52] text-[11px] font-black uppercase tracking-widest hover:bg-[#6B3E52] hover:text-white transition-all active:scale-95 shadow-sm"
                >
                  Cek Vendor
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Layanan Custom Kemasan Section (from mockup) */}
        <div className="mb-16">
          <div className="flex items-end justify-between mb-8">
            <div>
              <div className="inline-block px-3 py-1 rounded-md bg-[#6B3E52] text-white text-[9px] font-black uppercase tracking-widest mb-3 shadow-md">Packaging</div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#2D1B22]">Layanan Custom Kemasan</h2>
              <p className="text-sm text-stone-500 mt-1">Upgrade tampilan souvenir anda dengan pilihan box & dekorasi premium.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {packagingOptions.map((opt, i) => (
              <div key={i} className="bg-white rounded-[32px] p-6 border border-stone-100 flex flex-col items-start shadow-sm hover:shadow-lg transition-all group overflow-hidden relative">
                <div className="absolute top-4 right-4 bg-[#6B3E52] text-white text-[8px] font-black px-2.5 py-1 rounded-full uppercase tracking-tighter">
                  {opt.badge}
                </div>
                <div className="w-16 h-16 bg-[#FAF6F6] rounded-3xl flex items-center justify-center text-4xl mb-5 group-hover:scale-110 transition-transform duration-500">{opt.icon}</div>
                <h4 className="text-base font-bold text-[#2D1B22] mb-1">{opt.name}</h4>
                <p className="text-xs text-stone-400 mb-6 leading-relaxed">{opt.description}</p>
                <div className="mt-auto flex items-center justify-between w-full">
                  <div className="text-sm font-black text-rose-600">
                    +{formatRupiah(opt.price)} <span className="text-[10px] text-stone-400 font-bold">/unit</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center text-stone-400 group-hover:bg-[#6B3E52] group-hover:text-white transition-all">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Section (from mockup) */}
        <div className="bg-[#2D1B22] rounded-[40px] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl shadow-rose-900/20">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#6B3E52] rounded-full -mr-20 -mt-20 opacity-50 blur-3xl"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <div className="w-16 h-16 bg-[#6B3E52] rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-xl mx-auto md:mx-0">🧮</div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-3">Hitung Total Biaya Tamu?</h2>
              <p className="text-rose-100/70 text-sm md:text-base max-w-sm">Simulasikan jumlah pcs & alokasi budget souvenir untuk estimasi lebih akurat.</p>
            </div>
            <Link href="/v2" className="w-full md:w-auto px-10 py-5 rounded-2xl bg-[#FFEB3B] text-[#2D1B22] font-black text-sm md:text-base uppercase tracking-widest shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3">
              Hitung Sekarang <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </main>

      <BottomNavV2 />

      {/* Marketplace Modal */}
      {showMarketplaceModal && selectedProductForMarketplace && (
        <div className="fixed inset-0 z-[9998] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300" onClick={() => setShowMarketplaceModal(false)}>
          <div className="bg-white rounded-[32px] p-6 sm:p-8 max-w-md w-full shadow-2xl border border-stone-100 animate-in zoom-in-95 duration-300" onClick={(e) => e.stopPropagation()}>
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-stone-50 rounded-2xl mx-auto mb-4 overflow-hidden">
                <img src={selectedProductForMarketplace.image} alt={selectedProductForMarketplace.name} className="w-full h-full object-cover" />
              </div>
              <h2 className="text-2xl font-serif font-bold text-[#2D1B22]">{selectedProductForMarketplace.name}</h2>
              <div className="text-[#6B3E52] font-black text-xl mt-2">{formatRupiah(selectedProductForMarketplace.price)}</div>
            </div>
            <div className="space-y-3.5">
              <button 
                className="w-full py-4 rounded-2xl bg-[#EE4D2D] text-white font-black text-xs uppercase tracking-widest flex items-center justify-center gap-3 shadow-lg shadow-orange-100 active:scale-95 transition-all" 
                onClick={() => window.open(selectedProductForMarketplace.marketplaceLinks?.shopee || '#', '_blank')}
              >
                🛍️ Beli di Shopee
              </button>
              <button 
                className="w-full py-4 rounded-2xl bg-black text-white font-black text-xs uppercase tracking-widest flex items-center justify-center gap-3 shadow-lg shadow-stone-200 active:scale-95 transition-all" 
                onClick={() => window.open(selectedProductForMarketplace.marketplaceLinks?.tiktok || '#', '_blank')}
              >
                🎵 Beli di TikTok Shop
              </button>
            </div>
            <button onClick={() => setShowMarketplaceModal(false)} className="mt-8 w-full py-3 rounded-xl text-stone-400 font-bold text-xs uppercase tracking-widest hover:bg-stone-50 transition-all">✕ Tutup</button>
          </div>
        </div>
      )}
    </div>
  );
}