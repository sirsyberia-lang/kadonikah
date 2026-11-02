import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import DesktopHeader from '../../components/DesktopHeader';
import BottomNavV2 from '../../components/BottomNavV2';
import { vendorsV2 as staticVendors, vendorCategories, type VendorV2 } from '../../data/vendorsV2';

function formatRupiah(num: number): string {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(num);
}

export default function V2Vendor() {
  const [activeCategory, setActiveCategory] = useState('popular');
  const [vendors, setVendors] = useState<VendorV2[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/api/v2/vendor')
      .then(res => {
        if (!res.ok) throw new Error('Not found');
        return res.json();
      })
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          setVendors(data);
        } else {
          setVendors(staticVendors);
        }
      })
      .catch(() => {
        setVendors(staticVendors);
      })
      .finally(() => setIsLoading(false));
  }, []);

  // Filter vendors based on active category
  const filteredVendors = activeCategory === 'popular' 
    ? vendors 
    : vendors.filter(v => v.category.toLowerCase().includes(activeCategory.toLowerCase()));

  const handleWhatsAppChat = (phone: string, vendorName: string) => {
    const waLink = `https://wa.me/${phone}?text=Halo%20${encodeURIComponent(vendorName)}%2C%20saya%20tertarik%20dengan%20produk%20Anda%20di%20KadoNikah.id`;
    window.open(waLink, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#F5F3F0] pb-32">
      <Head>
        <title>Direktori Vendor Souvenir V2 | KadoNikah.id</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <DesktopHeader onOpenLogin={() => {}} />

      {/* Hero Stats Section */}
      <section className="bg-gradient-to-b from-rose-50 via-[#FAF8F5] to-transparent py-8 md:py-12 border-b border-rose-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-rose-100 text-rose-700 text-[10px] font-bold uppercase tracking-wider mb-3">
            ✨ RINGKASAN VENDOR
          </span>
          <h1 className="font-serif-title text-2xl md:text-5xl font-bold text-stone-900 max-w-3xl mx-auto leading-tight">
            Inspirasi Vendor Souvenir & Rekanan Kreatif Pernikahan
          </h1>
          <p className="text-stone-600 text-xs md:text-base max-w-2xl mx-auto mt-2 md:mt-4">
            Terkurasi & terverifikasi. Harga transparan, garansi kualitas, dan pengiriman tepat waktu untuk hari bahagia Anda.
          </p>

          {/* Stats Bar */}
          <div className="grid grid-cols-3 max-w-2xl mx-auto mt-8 md:mt-10 p-5 md:p-6 bg-white/80 backdrop-blur rounded-2xl border border-stone-200 shadow-sm text-center">
            <div className="px-2">
              <div className="font-bold text-rose-700 text-lg md:text-2xl">800+</div>
              <div className="text-[9px] md:text-[11px] text-stone-500 font-medium uppercase tracking-wider">Vendor Terverifikasi</div>
            </div>
            <div className="border-x border-stone-200 px-2">
              <div className="font-bold text-rose-700 text-lg md:text-2xl">4.9 / 5.0</div>
              <div className="text-[9px] md:text-[11px] text-stone-500 font-medium uppercase tracking-wider">Rating Rata-Rata</div>
            </div>
            <div className="px-2">
              <div className="font-bold text-rose-700 text-lg md:text-2xl">15K+</div>
              <div className="text-[9px] md:text-[11px] text-stone-500 font-medium uppercase tracking-wider">Ulasan Pengantin</div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="max-w-7xl mx-auto px-4 py-4 md:py-6 sticky top-16 md:top-20 bg-[#F5F3F0]/90 backdrop-blur-md z-30 border-b border-stone-100">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 text-xs font-semibold whitespace-nowrap custom-scrollbar">
          {vendorCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 md:px-6 py-2.5 rounded-xl transition-all flex-shrink-0 font-bold tracking-tight ${
                activeCategory === cat.id
                  ? 'bg-stone-900 text-white shadow-lg'
                  : 'bg-white text-stone-600 border border-stone-200 hover:border-rose-700 hover:text-rose-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Vendor Grid */}
      <main className="max-w-7xl mx-auto px-4 py-8 md:py-12 flex-grow">
        {isLoading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-rose-700"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredVendors.map((vendor: VendorV2) => (
              <div
                key={vendor.id}
                className="bg-white rounded-[2.5rem] border border-stone-200 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col group"
              >
                <div className="relative aspect-[4/3] bg-stone-100 overflow-hidden">
                  <img
                    src={vendor.image}
                    alt={vendor.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1603006905003-be475563bc59?w=500&q=80' }}
                  />
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <span className="bg-white/90 backdrop-blur text-stone-800 text-[10px] font-extrabold px-3 py-1 rounded-full border border-stone-200 shadow-sm">
                      Vendor Terverifikasi
                    </span>
                  </div>
                </div>

                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-2">
                     <div className="flex items-center gap-1.5 text-xs text-amber-700 font-bold">
                      <span className="bg-amber-50 px-2 py-0.5 rounded-lg border border-amber-100">⭐ {vendor.rating}</span>
                      <span className="text-stone-400 font-medium">({vendor.reviews} ulasan)</span>
                    </div>
                    <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">{vendor.location}</span>
                  </div>

                  <h3 className="font-serif-title font-bold text-stone-900 text-lg md:text-xl leading-snug group-hover:text-rose-700 transition-colors">
                    {vendor.name}
                  </h3>

                  <span className="text-[10px] font-black text-rose-500 uppercase tracking-widest mt-1 mb-3">{vendor.category}</span>

                  <p className="text-xs md:text-sm text-stone-500 line-clamp-2 flex-grow mb-4 leading-relaxed">
                    {vendor.description}
                  </p>

                  <div className="pt-5 border-t border-stone-100 mb-6">
                    <div className="flex justify-between items-end">
                      <div>
                        <div className="text-[10px] text-stone-400 font-bold uppercase tracking-widest mb-1">Mulai Dari</div>
                        <div className="text-xl font-bold text-stone-900">
                          {formatRupiah(vendor.startPrice)}
                          <span className="text-xs text-stone-400 font-normal ml-1">{vendor.priceLabel}</span>
                        </div>
                      </div>
                      <div className="text-right">
                         <div className="text-[9px] text-stone-400 font-bold uppercase tracking-widest">Min. Order</div>
                         <div className="text-xs font-bold text-stone-700">{vendor.minOrder}</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => handleWhatsAppChat(vendor.phone, vendor.name)}
                      className="flex-1 px-4 py-3 rounded-2xl border-2 border-stone-100 text-stone-600 text-xs font-bold hover:border-rose-700 hover:text-rose-700 hover:bg-rose-50/30 transition-all active:scale-95"
                    >
                      Portofolio
                    </button>
                    <button
                      onClick={() => handleWhatsAppChat(vendor.phone, vendor.name)}
                      className="flex-1 px-4 py-3 rounded-2xl bg-rose-700 hover:bg-rose-800 text-white text-xs font-bold transition-all shadow-lg shadow-rose-200 active:scale-95 flex items-center justify-center gap-2"
                    >
                      <span>Chat Vendor</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      <BottomNavV2 />
    </div>
  );
}
