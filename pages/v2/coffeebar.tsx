import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import DesktopHeader from '../../components/DesktopHeader';
import Footer from '../../components/Footer';
import BottomNavV2 from '../../components/BottomNavV2';
import { ChevronDown, Check, Coffee, Phone } from 'lucide-react';

const partnerBrands = [
  { name: 'Calf Coffee', icon: '🐮', color: 'bg-amber-50 border-amber-200 text-amber-700' },
  { name: 'Janji Jiwa', icon: '☕', color: 'bg-stone-50 border-stone-200 text-stone-700' },
  { name: 'Kopi Kenangan', icon: '🍃', color: 'bg-emerald-50 border-emerald-200 text-emerald-700' },
  { name: 'Fore Coffee', icon: '✨', color: 'bg-purple-50 border-purple-200 text-purple-700' },
  { name: 'Tanamera Coffee', icon: '🌿', color: 'bg-green-50 border-green-200 text-green-700' },
];

const pricingTiers = [
  {
    name: 'Paket Petite',
    cups: 200,
    price: 1500000,
    pricePerCup: 7500,
    partner: 'Calf / Janji Jiwa',
    features: ['1 Barista profesional', 'Manual brew setup', '1 menu signature', '3 jam standby'],
    featured: false,
  },
  {
    name: 'Paket Medium',
    cups: 350,
    price: 2500000,
    pricePerCup: 7140,
    partner: 'Kopi Kenangan / Fore',
    features: ['2 Barista profesional', 'Espresso machine', '2-3 menu signature', 'Custom sleeve & logo', '4 jam standby'],
    featured: true,
  },
  {
    name: 'Paket Grande',
    cups: 500,
    price: 3500000,
    pricePerCup: 7000,
    partner: 'Premium Mix (Custom blend)',
    features: ['3 Barista profesional', 'Full mobile bar', 'Unlimited menu', 'Premium glassware', '5 jam standby'],
    featured: false,
  },
  {
    name: 'Custom Quote',
    cups: null,
    price: null,
    pricePerCup: null,
    partner: 'Pilih brand favorit',
    features: ['Custom menu & setup', 'Dedicated team', 'Unlimited service', 'Personal consultation'],
    featured: false,
  },
];

const galleryImages = [
  'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80',
  'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&q=80',
  'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80',
  'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=600&q=80',
];

const faqItems = [
  {
    question: 'Apakah saya bisa request brand kopi tertentu?',
    answer: 'Ya, Anda bisa memilih brand partner favorit sesuai paket. Untuk Petite, tersedia Calf atau Janji Jiwa. Medium tersedia Kopi Kenangan atau Fore. Grande bisa custom mix dari semua brand.',
  },
  {
    question: 'Apakah harga sudah termasuk bahan baku kopi?',
    answer: 'Ya, semua paket sudah termasuk 100% biji kopi Arabica premium, susu, sirup, gula, dan cup sleeve dengan logo custom. Untuk Grande, termasuk premium glassware yang bisa dibawa pulang tamu.',
  },
  {
    question: 'Berapa lama durasi service dan setup?',
    answer: 'Setup dilakukan H-2 jam sebelum resepsi. Durasi standby barista: Petite 3 jam, Medium 4 jam, Grande 5 jam. Kami bisa extend durasi dengan biaya tambahan Rp 250.000/jam.',
  },
  {
    question: 'Area cakupan service Jabodetabek saja?',
    answer: 'Saat ini kami fokus melayani area Jabodetabek dan Bandung. Untuk area luar (Surabaya, Yogyakarta, Bali), tersedia Custom Quote dengan biaya transportasi dan akomodasi barista.',
  },
];

function formatRupiah(num: number): string {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(num);
}

export default function V2CoffeeBar() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleSelectPackage = (packageName: string, price: number | null) => {
    let message = '';
    if (price) {
      message = `Halo, saya tertarik dengan *${packageName}* (${formatRupiah(price)}) untuk resepsi pernikahan. Mohon info lebih lanjut!`;
    } else {
      message = `Halo, saya tertarik dengan *${packageName}* untuk resepsi pernikahan. Mohon info lebih lanjut dan custom quote!`;
    }
    const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-800 antialiased">
      <Head>
        <title>KadoNikah Coffee Bar — Multi-Brand Partnership Platform</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Plus+Jakarta+Sans:wght@400;600;700&display=swap" rel="stylesheet" />
      </Head>

      <style jsx global>{`
        .font-serif-title {
          font-family: 'Playfair Display', serif;
        }
        body {
          font-family: 'Plus Jakarta Sans', sans-serif;
        }
      `}</style>

      <DesktopHeader onOpenLogin={() => {}} />

      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F5EFE6] to-transparent py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#DC4456]/10 border border-[#DC4456]/20 text-[#DC4456] text-xs font-bold uppercase tracking-wider mb-6">
            <Coffee className="w-4 h-4" />
            <span>Multi-Brand Partnership Platform</span>
          </div>
          <h1 className="font-serif-title text-4xl sm:text-5xl lg:text-6xl font-bold text-[#201A1C] mb-6 leading-tight">
            KadoNikah Coffee Bar —<br />Partner Brand
          </h1>
          <p className="text-lg sm:text-xl text-stone-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            Hadirkan suasana kafe favorit di resepsi pernikahanmu — kerjasama eksklusif dengan brand kopi lokal terbaik Indonesia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#pricing" className="px-8 py-4 rounded-2xl bg-[#DC4456] hover:bg-[#C93A48] text-white font-bold text-sm transition-all shadow-lg shadow-rose-500/30 active:scale-95">
              Lihat Paket & Harga
            </a>
            <a href="#booking" className="px-8 py-4 rounded-2xl bg-white border-2 border-stone-200 hover:border-[#DC4456] text-stone-700 font-bold text-sm transition-all">
              Hubungi Konsultan
            </a>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        
        {/* 2. Partner Brand Showcase */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-[#201A1C] mb-4">Partner Brand Resmi</h2>
            <p className="text-stone-600 text-base">Kemitraan eksklusif dengan brand kopi lokal ternama dan berkualitas premium.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6">
            {partnerBrands.map((brand, idx) => (
              <div key={idx} className={`p-6 rounded-3xl border-2 ${brand.color} hover:shadow-xl transition-all duration-300 text-center group`}>
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{brand.icon}</div>
                <div className="text-xs font-bold uppercase tracking-wider">{brand.name}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Pricing Tiers */}
        <section id="pricing" className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-[#201A1C] mb-4">Pilihan Paket Coffee Bar</h2>
            <p className="text-stone-600 text-base">Paket transparan dengan harga all-in, tanpa biaya tersembunyi.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingTiers.map((tier, idx) => (
              <div key={idx} className={`bg-white rounded-3xl p-6 border-2 transition-all duration-300 flex flex-col relative ${
                tier.featured 
                  ? 'border-[#DC4456] shadow-2xl shadow-rose-500/20 scale-105' 
                  : 'border-stone-100 hover:shadow-lg hover:border-stone-200'
              }`}>
                {tier.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#DC4456] text-white text-xs font-bold rounded-full uppercase tracking-wider shadow-md">
                    Paling Populer
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="font-serif-title text-2xl font-bold text-[#201A1C] mb-2">{tier.name}</h3>
                  {tier.price ? (
                    <>
                      <div className="text-3xl font-bold text-[#DC4456] mb-1">{formatRupiah(tier.price)}</div>
                      <div className="text-xs text-stone-500 font-semibold">{tier.cups} Cups · {formatRupiah(tier.pricePerCup)}/cup</div>
                    </>
                  ) : (
                    <div className="text-2xl font-bold text-[#B88E5B] mb-1">Request Quote</div>
                  )}
                  <div className="mt-3 text-xs font-bold text-stone-400 uppercase tracking-wider">Partner: {tier.partner}</div>
                </div>
                <ul className="space-y-3 mb-6 flex-grow">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-stone-700">
                      <Check className="w-5 h-5 text-[#476A56] flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={() => handleSelectPackage(tier.name, tier.price)}
                  className={`w-full py-3 rounded-2xl font-bold text-sm transition-all ${
                    tier.featured 
                      ? 'bg-[#DC4456] hover:bg-[#C93A48] text-white shadow-lg shadow-rose-500/20' 
                      : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                  }`}
                >
                  {tier.price ? 'Pilih Paket' : 'Konsultasi Custom'}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Interactive Gallery */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-[#201A1C] mb-4">Galeri Booth & Setup</h2>
            <p className="text-stone-600 text-base">Inspirasi booth kopi estetik yang menyatu dengan dekorasi resepsi Anda.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((img, idx) => (
              <div key={idx} className="aspect-square rounded-3xl overflow-hidden border border-stone-100 shadow-sm hover:shadow-xl transition-all duration-500 group">
                <img src={img} alt={`Gallery ${idx + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
            ))}
          </div>
        </section>

        {/* 5. Interactive FAQ Accordion */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-[#201A1C] mb-4">Pertanyaan Umum (FAQ)</h2>
            <p className="text-stone-600 text-base">Jawaban lengkap untuk pertanyaan seputar Coffee Bar service kami.</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-stone-100 overflow-hidden shadow-sm hover:shadow-md transition-all">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left font-bold text-stone-900 hover:text-[#DC4456] transition-colors"
                >
                  <span className="text-base">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-[#B88E5B] transition-transform duration-300 ${openFaqIndex === idx ? 'rotate-180' : ''}`} />
                </button>
                {openFaqIndex === idx && (
                  <div className="px-6 pb-5 text-stone-600 text-sm leading-relaxed border-t border-stone-50 pt-4 animate-in fade-in slide-in-from-top-2 duration-300">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* 6. Booking CTA Section */}
        <section id="booking" className="bg-[#476A56] rounded-[3rem] p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#B88E5B]/10 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#B88E5B]/20 border border-[#B88E5B]/30 text-[#F5EFE6] text-xs font-bold uppercase tracking-wider mb-6">
              Kemitraan Eksklusif Pengrajin
            </div>
            <h2 className="font-serif-title text-3xl sm:text-4xl font-bold mb-4 leading-tight">Siap Live Coffee Bar untuk Resepsi Anda?</h2>
            <p className="text-stone-200 text-base mb-8 max-w-2xl">Hubungi konsultan kami untuk konsultasi menu, jadwal, dan simulasi budget coffee bar yang sesuai dengan tema pernikahan Anda.</p>
            
            <div className="flex flex-wrap gap-4 mb-10">
              <div className="flex items-center gap-2 text-sm">
                <Check className="w-5 h-5 text-[#F5EFE6]" />
                <span>Barista Bersertifikasi</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Check className="w-5 h-5 text-[#F5EFE6]" />
                <span>Direct Chat WhatsApp</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Check className="w-5 h-5 text-[#F5EFE6]" />
                <span>Fitur Simulasi Anggaran</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/6281234567890?text=Halo%2C%20saya%20tertarik%20dengan%20paket%20Coffee%20Bar%20untuk%20resepsi%20pernikahan" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-[#DC4456] hover:bg-[#C93A48] text-white font-bold text-sm transition-all shadow-xl shadow-rose-500/30 active:scale-95">
                <Phone className="w-5 h-5" />
                <span>Hubungi Konsultan Sekarang</span>
              </a>
              <Link href="/v2/katalog" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-transparent border-2 border-white/30 hover:border-white hover:bg-white/10 text-white font-bold text-sm transition-all">
                Lihat Katalog Lainnya
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <BottomNavV2 />
    </div>
  );
}
