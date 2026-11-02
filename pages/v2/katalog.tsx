import React, { useState, useMemo, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import BottomNavV2 from '../../components/BottomNavV2';

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
  const [selectedProductForMarketplace, setSelectedProductForMarketplace] = useState<any>(null);
  const [products, setProducts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch('/api/v2/products');
        if (res.ok) {
          const data = await res.json();
          setProducts(data);
        }
        setIsLoading(false);
      } catch (e) {
        console.warn('Fetch error:', e);
        setIsLoading(false);
      }
    }
    fetchProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    let list = products;
    
    if (activeFilter !== 'all') {
      list = list.filter(s => s.category === activeFilter);
    }
    
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      list = list.filter(s => s.name.toLowerCase().includes(q) || (s.description && s.description.toLowerCase().includes(q)));
    }

    if (activePriceRange !== null) {
      const range = priceFilters[activePriceRange];
      list = list.filter(s => s.price >= range.min && s.price < range.max);
    }

    return list;
  }, [activeFilter, searchQuery, activePriceRange, products]);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-800 antialiased pb-24">
      <Head>
        <title>Katalog Pilihan Souvenir Pernikahan Berkesan | KadoNikah V2</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <header className="bg-white border-b border-stone-100 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/v2" className="font-serif-title text-xl font-bold text-stone-900 flex items-center gap-2">
            <span className="text-rose-500">✨</span> Souvenir Murah
          </Link>
          <div className="flex items-center gap-4">
            <button className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-600">🔍</button>
            <div className="w-10 h-10 rounded-full bg-stone-900 flex items-center justify-center text-white font-bold text-sm">DB</div>
          </div>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8 text-center md:text-left">
          <h1 className="font-serif-title text-3xl font-bold text-stone-900 leading-tight">Katalog Pilihan Souvenir<br/>Pernikahan Berkesan</h1>
          <p className="text-stone-500 mt-2 text-sm">Temukan inspirasi terbaik untuk hari istimewa Anda.</p>
        </div>

        {/* Stats Summary */}
        <div className="bg-white rounded-3xl p-6 mb-10 border border-stone-100 flex justify-around items-center shadow-sm">
          <div className="text-center">
            <div className="text-2xl font-bold text-stone-900">{products.length}+</div>
            <div className="text-[10px] text-stone-400 uppercase tracking-widest font-bold">Collections</div>
          </div>
          <div className="h-10 w-px bg-stone-100"></div>
          <div className="text-center">
            <div className="text-2xl font-bold text-stone-900">99.4%</div>
            <div className="text-[10px] text-stone-400 uppercase tracking-widest font-bold">Satisfaction</div>
          </div>
          <div className="h-10 w-px bg-stone-100 hidden sm:block"></div>
          <div className="text-center hidden sm:block">
            <div className="text-2xl font-bold text-stone-900">Free</div>
            <div className="text-[10px] text-stone-400 uppercase tracking-widest font-bold">Samples</div>
          </div>
        </div>

        {/* Categories / Filters */}
        <div className="flex gap-2 overflow-x-auto pb-8 no-scrollbar -mx-4 px-4">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`whitespace-nowrap px-6 py-3 rounded-full text-xs font-bold transition-all flex items-center gap-2 ${
                activeFilter === cat.id 
                ? 'bg-stone-900 text-white shadow-lg' 
                : 'bg-white text-stone-600 border border-stone-200 hover:border-stone-400'
              }`}
            >
              <span>{cat.icon}</span> {cat.name}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        {isLoading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-stone-900"></div>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {filteredProducts.map((p: any) => (
              <div key={p.id} className="bg-white rounded-[2rem] p-4 border border-stone-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group">
                <div className="aspect-square rounded-2xl bg-stone-50 mb-4 relative overflow-hidden flex items-center justify-center">
                  <img 
                    src={p.image} 
                    alt={p.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    onError={(e) => { (e.target as HTMLImageElement).src = '/images/souvenirs/original/1-reed-diffuser.jpg' }}
                  />
                  <div className="absolute top-2 right-2 bg-white/95 backdrop-blur px-2.5 py-1 rounded-full text-[10px] font-extrabold text-stone-900 shadow-sm">
                    {formatRupiah(p.price)}
                  </div>
                </div>
                <h3 className="font-serif-title font-bold text-stone-900 text-sm mb-1 line-clamp-1">{p.name}</h3>
                <div className="flex items-center gap-1 mb-4">
                  <span className="text-amber-400 text-[10px]">★★★★★</span>
                  <span className="text-[9px] text-stone-400 font-bold">(4.9)</span>
                </div>
                <button 
                  onClick={() => { setSelectedProductForMarketplace(p); setShowMarketplaceModal(true); }}
                  className="w-full py-2.5 rounded-xl bg-stone-50 text-stone-700 text-[10px] font-bold hover:bg-rose-500 hover:text-white transition-all border border-stone-100 shadow-sm"
                >
                  Cek Vendor
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Custom Packaging Section */}
        <div className="mb-12">
          <h2 className="font-serif-title text-xl font-bold text-stone-900 mb-6 text-center">Upgrade Packaging Opsi</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {packagingOptions.map((opt) => (
              <div key={opt.name} className="p-5 rounded-2xl bg-white border border-stone-100 flex items-center gap-4 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-stone-50 flex items-center justify-center text-2xl">{opt.icon}</div>
                <div>
                  <div className="text-xs font-bold text-stone-900">{opt.name}</div>
                  <div className="text-[10px] text-rose-600 font-bold">+ {formatRupiah(opt.price)} / pcs</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-stone-900 rounded-[3rem] p-8 sm:p-12 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10">
            <h2 className="font-serif-title text-2xl sm:text-3xl font-bold mb-4">Ingin Hitung Sesuai Anggaran?</h2>
            <p className="text-stone-400 text-sm mb-8 max-w-md mx-auto">Gunakan kalkulator budget otomatis kami untuk simulasi souvenir dan wedding coffee bar impian Anda.</p>
            <Link href="/v2" className="inline-flex items-center gap-2 bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-lg shadow-rose-500/30 active:scale-95">
              Mulai Simulasi Budget ✨
            </Link>
          </div>
        </div>
      </main>

      <BottomNavV2 />

      {showMarketplaceModal && selectedProductForMarketplace && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setShowMarketplaceModal(false)}>
          <div className="bg-white rounded-[2.5rem] p-8 max-w-md w-full shadow-2xl border border-stone-100 relative" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setShowMarketplaceModal(false)} className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-stone-100 text-stone-500 hover:bg-rose-500 hover:text-white transition-all duration-200">
              ✕
            </button>
            <div className="text-center mb-8">
              <div className="text-2xl font-serif-title font-bold text-stone-900">{selectedProductForMarketplace.name}</div>
              <div className="text-lg font-bold text-rose-600 mt-2">{formatRupiah(selectedProductForMarketplace.price)}</div>
            </div>
            <div className="space-y-4">
              <button className="w-full py-4 rounded-2xl bg-[#EE4D2D] text-white font-bold text-sm transition-all flex items-center justify-center gap-3 shadow-lg shadow-orange-500/10 active:scale-95" onClick={() => window.open(selectedProductForMarketplace.marketplaceLinks?.shopee || '#', '_blank')}>
                🛍️ Beli di Shopee
              </button>
              <button className="w-full py-4 rounded-2xl bg-black text-white font-bold text-sm transition-all flex items-center justify-center gap-3 shadow-lg shadow-stone-900/10 active:scale-95" onClick={() => window.open(selectedProductForMarketplace.marketplaceLinks?.tiktok || '#', '_blank')}>
                🎵 Beli di TikTok Shop
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
