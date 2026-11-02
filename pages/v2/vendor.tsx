import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import DesktopHeader from '../../components/DesktopHeader';
import BottomNavV2 from '../../components/BottomNavV2';
import { vendorsV2, vendorCategories, type VendorV2 } from '../../data/vendorsV2';

function formatRupiah(num: number): string {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(num);
}

export default function V2Vendor() {
  const [activeCategory, setActiveCategory] = useState('popular');

  // Filter vendors based on active category
  // In a real app, this would filter by category id. For now, we show all vendors in 'popular' or just the full list.
  const filteredVendors = activeCategory === 'popular' ? vendorsV2 : vendorsV2.filter(v => 
    v.category.toLowerCase().includes(activeCategory.toLowerCase()) || 
    activeCategory === 'popular'
  );

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {(filteredVendors.length > 0 ? filteredVendors : vendorsV2).map((vendor: VendorV2) => (
            <div
              key={vendor.id}
              className="bg-white rounded-[2.5rem] border border-stone-200 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col group"
            >
              {/* Image Container - 4:3 aspect ratio */}
              <div className="relative aspect-[4/3] bg-stone-100 overflow-hidden">
                <img
                  src={vendor.image}
                  alt={vendor.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <span className="bg-white/90 backdrop-blur text-stone-800 text-[10px] font-extrabold px-3 py-1 rounded-full border border-stone-200 shadow-sm">
                    Vendor Terverifikasi
                  </span>
                  <span className="bg-amber-500 text-white text-[9px] font-black px-2.5 py-1 rounded-full shadow-sm uppercase tracking-tighter w-fit">
                    Best Seller
                  </span>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-rose-600 p-2 rounded-full border border-stone-100 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                {/* Rating */}
                <div className="flex items-center justify-between mb-2">
                   <div className="flex items-center gap-1.5 text-xs text-amber-700 font-bold">
                    <span className="bg-amber-50 px-2 py-0.5 rounded-lg border border-amber-100">⭐ {vendor.rating}</span>
                    <span className="text-stone-400 font-medium">({vendor.reviews} ulasan)</span>
                  </div>
                  <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">{vendor.location}</span>
                </div>

                {/* Title */}
                <h3 className="font-serif-title font-bold text-stone-900 text-lg md:text-xl leading-snug group-hover:text-rose-700 transition-colors">
                  {vendor.name}
                </h3>

                {/* Category Badge */}
                <span className="text-[10px] font-black text-rose-500 uppercase tracking-widest mt-1 mb-3">{vendor.category}</span>

                {/* Description */}
                <p className="text-xs md:text-sm text-stone-500 line-clamp-2 flex-grow mb-4 leading-relaxed">
                  {vendor.description}
                </p>

                {/* Price & Info Section */}
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

                {/* Dual Chat Buttons */}
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
      </main>

      {/* Promo Banner Section */}
      <section className="bg-gradient-to-br from-rose-800 via-rose-900 to-[#5A1B30] py-12 md:py-20 border-t border-rose-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-64 h-64 border-4 border-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 border-4 border-white rounded-full translate-x-1/3 translate-y-1/3"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="inline-block mb-4 p-3 bg-white/10 backdrop-blur-sm rounded-2xl">
            <span className="text-3xl">🎁</span>
          </div>
          <h2 className="font-serif-title text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Penawaran Eksklusif <br className="hidden md:block"/> Vendor Terkurasi
          </h2>
          <p className="text-rose-100 text-sm md:text-lg mb-8 max-w-2xl mx-auto font-medium opacity-90">
            Dapatkan diskon hingga <span className="text-amber-300 font-bold">20%</span> dan bonus paket kemasan mewah untuk pemesanan melalui KadoNikah.id bulan ini.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-10 py-4 rounded-2xl bg-amber-400 text-rose-950 font-black text-sm hover:bg-amber-300 transition-all shadow-2xl active:scale-95 uppercase tracking-widest">
              Lihat Semua Promo →
            </button>
            <button className="w-full sm:w-auto px-10 py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-sm hover:bg-white/20 transition-all active:scale-95">
              Konsultasi Gratis
            </button>
          </div>
        </div>
      </section>

      {/* Vendor Registration CTA */}
      <section className="max-w-7xl mx-auto px-4 py-16 md:py-24 text-center">
        <div className="bg-white rounded-[3rem] p-8 md:p-16 border border-stone-100 shadow-sm max-w-4xl mx-auto">
          <div className="text-rose-500 mb-4 inline-block">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
             </svg>
          </div>
          <h2 className="font-serif-title text-2xl md:text-4xl font-bold text-stone-900 mb-4">
            Bergabung Sebagai Vendor Rekanan
          </h2>
          <p className="text-stone-600 text-sm md:text-base mb-10 max-w-lg mx-auto leading-relaxed">
            Perluas jangkauan bisnis souvenir Anda dan jangkau lebih dari <span className="font-bold text-stone-900">5.000 calon pengantin</span> setiap bulannya melalui platform kami.
          </p>
          <button className="bg-stone-900 text-white font-bold text-sm px-10 py-4 rounded-2xl hover:bg-rose-700 transition-all shadow-xl shadow-stone-200 active:scale-95 uppercase tracking-widest">
            Daftar Sekarang ✨
          </button>
        </div>
      </section>

      <BottomNavV2 />
    </div>
  );
}
