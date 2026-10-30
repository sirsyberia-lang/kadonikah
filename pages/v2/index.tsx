import React, { useState, useMemo, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { souvenirs } from '../../data/souvenirs';
import BottomNavV2 from '../../components/BottomNavV2';

function formatRupiah(num: number): string {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(num);
}

function parseRupiahInput(val: string): number {
  const clean = val.toString().replace(/[^0-9]/g, '');
  return parseInt(clean, 10) || 0;
}

const coffeePackages = [
  { id: '1500000', name: 'Petite', cups: 200, price: 1500000 },
  { id: '2500000', name: 'Medium', cups: 350, price: 2500000 },
  { id: '3500000', name: 'Grande', cups: 500, price: 3500000 },
];

export default function V2FullCalculator() {
  const [budget, setBudget] = useState('5.000.000');
  const [guests, setGuests] = useState(500);
  const [coffeeEnabled, setCoffeeEnabled] = useState(true);
  const [selectedPackage, setSelectedPackage] = useState(coffeePackages[0]);
  const [filterActive, setFilterActive] = useState<'all' | 'budget-fit' | 'hemat' | 'eksklusif'>('all');
  const [selectedProducts, setSelectedProducts] = useState<number[]>([]);
  const [showMarketplaceModal, setShowMarketplaceModal] = useState(false);
  const [modalProduct, setModalProduct] = useState({ title: '', price: 0 });
  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState('');

  useEffect(() => {
    document.querySelectorAll('[data-next-hide-fouc]').forEach(el => el.remove());
  }, []);

  const baseBudgetNum = parseRupiahInput(budget);
  const coffeeCost = coffeeEnabled ? selectedPackage.price : 0;
  const allocationPerUnit = guests > 0 ? Math.floor(baseBudgetNum / guests) : 0;

  // Opsi A: Biaya real = (harga souvenir × jumlah tamu) + coffee bar
  const selectedSouvenirsCost = selectedProducts.reduce((sum, id) => {
    const item = souvenirs.find(s => Number(s.id) === id);
    return sum + (item ? item.price * guests : 0);
  }, 0);
  // Souvenir Cost: pakai harga×tamu jika ada, fallback ke base budget
  const souvenirCost = selectedProducts.length > 0 ? selectedSouvenirsCost : baseBudgetNum;
  const totalEstimated = souvenirCost + coffeeCost;
  const totalPerUnit = guests > 0 ? Math.floor(totalEstimated / guests) : 0;
  const budgetStatus = totalEstimated - baseBudgetNum;

  const handleBudgetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const num = parseRupiahInput(e.target.value);
    setBudget(new Intl.NumberFormat('id-ID').format(num));
  };

  const displayToast = (msg: string) => {
    setToastMsg(msg); setShowToast(true);
    setTimeout(() => setShowToast(false), 2600);
  };

  const shareToWhatsApp = () => {
    if (selectedProducts.length === 0) {
      displayToast('⚠️ Pilih minimal 1 souvenir dulu sebelum share!');
      return;
    }
    const selectedNames = selectedProducts.map(id => souvenirs.find(s => Number(s.id) === id)?.name).filter(Boolean).join(', ');
    const text = encodeURIComponent(
      `Halo! 🎉 Cek rancangan souvenir & coffee bar kita:\n\n` +
      `💰 Base Budget: ${formatRupiah(baseBudgetNum)}\n` +
      `👥 ${guests} Tamu\n` +
      (coffeeEnabled ? `☕ Coffee Bar ${selectedPackage.name}: ${formatRupiah(coffeeCost)}\n` : '') +
      `🎁 Souvenir Terpilih (${selectedProducts.length} item):\n${selectedNames}\n` +
      `📊 Total Estimasi (real cost × pax): ${formatRupiah(totalEstimated)}\n` +
      `💡 Base Budget: ${formatRupiah(baseBudgetNum)} | Selisih: ${formatRupiah(budgetStatus)}\n\nLihat detail di KadoNikah V2`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  const copyLink = async () => {
    if (selectedProducts.length === 0) {
      displayToast('⚠️ Pilih minimal 1 souvenir dulu sebelum copy link!');
      return;
    }
    const selectedIds = selectedProducts.join(',');
    const url = `http://192.168.1.227:3000/v2?b=${baseBudgetNum}&g=${guests}&p=${selectedIds}`;
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(url);
    } else {
      const ta = document.createElement('textarea'); ta.value = url;
      document.body.appendChild(ta); ta.select();
      document.execCommand('copy'); document.body.removeChild(ta);
    }
    displayToast('✅ Link berhasil disalin!');
  };

  const filteredProducts = useMemo(() => {
    return (filterActive === 'all' ? souvenirs : souvenirs.filter(s => s.category === filterActive))
      .sort((a, b) => a.price - b.price);
  }, [filterActive]);

  const toggleProductSelection = (productId: number) => {
    setSelectedProducts(prev =>
      prev.includes(productId) ? prev.filter(id => id !== productId) : [...prev, productId]
    );
  };

  const getBadge = (price: number) => {
    const diff = price - allocationPerUnit;
    if (diff > 0) return { text: `+${formatRupiah(diff)}`, icon: '⚠️', bg: 'bg-amber-50 text-amber-700 border-amber-200' };
    if (diff < 0) return { text: `-${formatRupiah(Math.abs(diff))}`, icon: '✅', bg: 'bg-emerald-50 text-emerald-700 border-emerald-200' };
    return { text: 'PAS', icon: '✨', bg: 'bg-rose-50 text-rose-600 border-rose-200' };
  };

  const getCategoryIcon = (category: string) => {
    const iconClass = "w-12 h-12 text-amber-300";
    switch (category) {
      case 'eksklusif': return <span className={iconClass}>💎</span>;
      case 'hemat': return <span className={iconClass}>🔥</span>;
      default: return <span className={iconClass}>📦</span>;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-stone-800 antialiased">
      <Head>
        <title>Souvenir Murah - Kalkulator &amp; Rekomendasi Souvenir Pernikahan</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            tailwind.config = {
              theme: {
                extend: {
                  colors: {
                    champagne: { 50: '#FAF7F2', 100: '#F5EFE6', 200: '#EBDDC9', 300: '#DFC8A8', 400: '#CDAB81', 500: '#B88E5B', 600: '#9B7143' },
                    roseGold: { 50: '#FFF5F5', 100: '#FDE8E9', 200: '#FBD0D4', 300: '#F7A8B0', 400: '#EE7381', 500: '#DC4456', 600: '#C22B3D' },
                    rose: { 50: '#FFF1F2', 100: '#FFE4E6', 200: '#FECDD3', 300: '#FDA4AF', 400: '#FB7185', 500: '#F43B6b', 600: '#E11D48' },
                    dustyRose: { 50: '#FBEEF2', 100: '#FCE7ED', 200: '#FBD0D4', 300: '#F8A5B3', 400: '#F47D91', 500: '#F05271', 600: '#E62E59', 700: '#DA1E42' },
                    sage: { 50: '#F4F7F5', 100: '#E5EDE7', 500: '#5A826B', 600: '#476A56', 700: '#385444' }
                  },
                  fontFamily: {
                    serif: ['"Playfair Display"', 'Georgia', 'serif'],
                    sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif']
                  }
                }
              }
            }
          `
        }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <style>{`
          body { font-family: 'Plus Jakarta Sans', sans-serif; background-color: #FAF8F5; }
          .font-serif-title { font-family: 'Playfair Display', Georgia, serif; }
        `}</style>
      </Head>

      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-champagne-200 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/v2" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-full bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-500 group-hover:bg-rose-500 group-hover:text-white transition-all duration-300 shadow-sm">
              ✨
            </div>
            <div>
              <span className="font-serif-title text-2xl font-bold tracking-tight text-stone-900 block leading-tight">Souvenir Murah</span>
              <span className="text-[11px] tracking-wider uppercase text-amber-700 font-semibold block">Wedding Planner &amp; Calculator</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
          <Link href="/v2" className="text-roseGold-600 font-bold flex items-center gap-1.5">🧮 Kalkulator Budget</Link>
          <Link href="/v2/katalog" className="hover:text-roseGold-600 transition-colors flex items-center gap-1.5">🎁 Katalog Rekomendasi</Link>
          <Link href="/v2/coffeebar" className="hover:text-roseGold-600 transition-colors flex items-center gap-1.5">☕ Wedding Coffee Bar</Link>
          <Link href="/v2/vendor" className="hover:text-roseGold-600 transition-colors flex items-center gap-1.5">🏪 Inspirasi Vendor</Link>
          </nav>

          <div className="flex items-center gap-3">
            <button onClick={() => displayToast('Login segera tersedia!')} className="px-5 py-2.5 rounded-full bg-stone-900 text-white text-sm font-semibold hover:bg-stone-800 transition-shadow shadow-md">
              Masuk
            </button>
          </div>
        </div>
      </header>

      <section className="bg-gradient-to-b from-amber-100/40 via-amber-50/20 to-transparent py-10 md:py-14 border-b border-amber-100/60">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-100/80 border border-rose-200 text-rose-600 text-xs font-semibold mb-4 tracking-wide uppercase">
            🤝 Perencana Anggaran Pernikahan Praktis
          </div>
          <h1 className="font-serif-title text-2xl sm:text-4xl md:text-5xl font-bold text-stone-900 max-w-3xl mx-auto leading-tight">
            Hitung Budget Souvenir &amp; Temukan Pilihan Paling Elegan
          </h1>
          <p className="mt-4 text-stone-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Sesuaikan jumlah tamu, simulasi penambahan wedding coffee bar, dan temukan suvenir yang pas dengan alokasi rupiah per undangan.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-grow w-full pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          <aside className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-stone-200/50 border border-amber-200/80 lg:sticky lg:top-28 h-fit">
            <div className="flex items-center justify-between pb-5 border-b border-stone-100 mb-6">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center font-bold">🧮</div>
                <h2 className="font-serif-title text-xl font-bold text-stone-900">Kalkulator Anggaran</h2>
              </div>
              <span className="text-[11px] font-bold text-rose-600 bg-rose-100 px-2.5 py-1 rounded-full border border-rose-200">v2.1 ASOY</span>
            </div>

            <div className="space-y-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-2">Base Budget Souvenir (Rp)</label>
                <div className="relative rounded-2xl shadow-sm">
                  <span className="absolute inset-y-0 left-4 flex items-center text-stone-400 font-semibold text-sm">Rp</span>
                  <input
                    type="text" value={budget} onChange={handleBudgetChange}
                    className="block w-full rounded-2xl border-stone-300 pl-11 pr-4 py-3 text-stone-900 font-bold text-lg focus:border-rose-400 focus:ring-rose-300 transition-all bg-stone-50/50 focus:bg-white focus:outline-none"
                    placeholder="5.000.000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-2">Total Tamu Undangan (Pax)</label>
                <div className="relative rounded-2xl shadow-sm">
                  <span className="absolute inset-y-0 left-4 flex items-center text-stone-400 text-lg">👥</span>
                  <input
                    type="number" value={guests} onChange={(e) => setGuests(Number(e.target.value))} min="1"
                    className="block w-full rounded-2xl border-stone-300 pl-12 pr-4 py-3 text-stone-900 font-bold text-lg focus:border-rose-400 focus:ring-rose-300 transition-all bg-stone-50/50 focus:bg-white focus:outline-none"
                  />
                </div>
              </div>

              <div className={`p-4 rounded-2xl border-2 transition-all ${coffeeEnabled ? 'bg-amber-50 border-amber-200 shadow-sm' : 'bg-stone-50 border-stone-200'}`}>
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <span className="text-xl">☕</span>
                    <div>
                      <label className="text-sm font-bold text-stone-900 cursor-pointer block">Wedding Coffee Bar (Catering)</label>
                      <p className="text-xs text-stone-500 mt-0.5">Live brewing booth untuk tamu spesial.</p>
                      <span className="inline-block mt-2 text-[11px] font-semibold text-dustyRose-700 bg-dustyRose-100 px-2.5 py-0.5 rounded-full">
                        + {formatRupiah(selectedPackage.price)} / {selectedPackage.cups} cups
                      </span>
                    </div>
                  </div>
                  <input type="checkbox" checked={coffeeEnabled} onChange={(e) => setCoffeeEnabled(e.target.checked)} className="w-5 h-5 mt-1 rounded text-roseGold-500 border-stone-300 focus:ring-roseGold-400 cursor-pointer" />
                </div>

                {coffeeEnabled && (
                  <div className="mt-4 pt-3.5 border-t border-amber-200 space-y-2.5">
                    <label className="block text-xs font-bold uppercase tracking-wider text-amber-700">Pilih Paket Coffee Bar:</label>
                    <div className="space-y-2 text-xs">
                      {coffeePackages.map((pkg) => (
                        <label key={pkg.id} className={`flex items-start gap-2.5 p-2.5 rounded-xl cursor-pointer ${selectedPackage.id === pkg.id ? 'bg-amber-100 border-2 border-rose-400 shadow-sm' : 'bg-white/70 border border-stone-200 hover:bg-white hover:border-rose-300'}`}>
                          <input
                            type="radio" name="coffee-pkg" checked={selectedPackage.id === pkg.id} onChange={() => setSelectedPackage(pkg)}
                            className="mt-0.5 text-roseGold-500 focus:ring-roseGold-400 cursor-pointer"
                          />
                          <div className="flex-1">
                            <div className="font-bold text-stone-900 flex items-center justify-between">
                              <span>☕ {pkg.name} ({pkg.cups} Cups)</span>
                              <span className={selectedPackage.id === pkg.id ? "text-rose-600 font-extrabold" : "text-stone-700 font-bold"}>{formatRupiah(pkg.price)}</span>
                            </div>
                            <p className="text-stone-500 text-[10px] mt-0.5">Paket premium dengan layanan profesional.</p>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-6 rounded-3xl p-6 sm:p-8 bg-roseGold-50 text-stone-900 shadow-xl shadow-stone-200/50 relative overflow-visible">
                <div className="text-center pb-3 mb-3">
                  <span className="text-xs uppercase tracking-widest font-bold text-roseGold-900 block mb-1">ALOKASI PER UNIT</span>
                  <div className="font-serif-title text-2xl sm:text-3xl font-bold text-roseGold-900 mb-1">{formatRupiah(allocationPerUnit)}</div>
                  <p className="text-[10px] sm:text-xs text-stone-500">Batas biaya rekomendasi per 1 buah souvenir</p>
                </div>

                <div className="space-y-2 text-xs sm:text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold uppercase tracking-wider text-stone-500">Souvenir Cost</span>
                    <span className="font-bold text-stone-900">{formatRupiah(souvenirCost)}</span>
                  </div>
                  {coffeeEnabled && (
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold uppercase tracking-wider text-stone-500">Coffee Bar Cost</span>
                      <span className="font-bold text-stone-900">{formatRupiah(coffeeCost)}</span>
                    </div>
                  )}
                  <div className="pt-2 border-t-2 border-roseGold-200 flex justify-between items-center font-bold text-sm sm:text-base">
                    <span className="text-roseGold-900 uppercase tracking-wider">TOTAL ESTIMASI</span>
                    <span className="font-serif-title text-xl sm:text-2xl text-dustyRose-700">{formatRupiah(totalEstimated)}</span>
                  </div>
                </div>

                <div className="mt-4 relative">
                  {showToast && (
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 z-[9999] bg-roseGold-300/90 text-white border border-roseGold-400 px-4 py-2.5 rounded-xl shadow-lg flex items-center gap-2 text-xs font-bold backdrop-blur-md whitespace-nowrap">
                      <span>{toastMsg}</span>
                    </div>
                  )}
                  <div className="flex gap-3">
                    <button onClick={copyLink} className="flex-1 bg-stone-900 text-white hover:bg-stone-800 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 shadow-md">
                      📎 Salin Link
                    </button>
                    <button onClick={shareToWhatsApp} className="flex-1 bg-[#25D366] hover:bg-[#20ba59] text-white py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 shadow-md">
                      💬 Share WA
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </aside>

          <section className="lg:col-span-7 space-y-6">
            <div className="bg-white p-5 rounded-3xl border border-stone-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="font-serif-title text-xl font-bold text-stone-900">Rekomendasi Souvenir</h2>
                  {selectedProducts.length > 0 && (
                    <span className="bg-rose-500 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                      {selectedProducts.length} Terpilih
                    </span>
                  )}
                </div>
                <p className="text-[11px] text-stone-500 mt-0.5">Disesuaikan otomatis dengan target alokasi <span className="font-bold text-rose-600">{formatRupiah(allocationPerUnit)}</span> / pcs</p>
              </div>
              <div className="flex gap-1.5 overflow-x-auto pb-1 text-xs font-semibold">
                {['all', 'budget-fit', 'hemat', 'eksklusif'].map((f) => (
                  <button
                    key={f} onClick={() => setFilterActive(f as any)}
                    className={`px-3.5 py-2 rounded-xl text-[10px] font-bold uppercase transition-all whitespace-nowrap ${
                      filterActive === f ? 'bg-stone-900 text-white shadow-sm' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                    }`}
                  >
                    {f === 'all' ? 'Semua' : f}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filteredProducts.map((p) => {
                const badge = getBadge(p.price);
                const isSelected = selectedProducts.includes(Number(p.id));
                return (
                  <article
                    key={p.id} onClick={() => toggleProductSelection(Number(p.id))}
                    className={`bg-white rounded-3xl p-4 border shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group cursor-pointer ${
                      isSelected ? 'border-rose-500 ring-2 ring-rose-200' : 'border-stone-100'
                    }`}
                  >
                    <div>
                      <div className="aspect-[4/3] rounded-2xl bg-stone-100 mb-3.5 relative overflow-hidden flex items-center justify-center">
                        {p.image ? (
                          <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        ) : (
                          getCategoryIcon(p.category)
                        )}
                        <span className="absolute top-2.5 right-2.5 bg-white/90 backdrop-blur text-stone-900 text-xs font-extrabold px-2.5 py-1 rounded-full shadow-sm">{formatRupiah(p.price)}</span>
                        {isSelected && (
                          <div className="absolute top-2.5 left-2.5 w-5 h-5 rounded-md bg-rose-500 flex items-center justify-center">
                            <span className="text-white text-xs font-bold">✓</span>
                          </div>
                        )}
                      </div>
                      <h3 className="font-serif-title font-bold text-stone-900 text-base leading-snug mb-1">{p.name}</h3>
                      <p className="text-xs text-stone-500 line-clamp-2 mt-1">{p.description}</p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between">
                      <span className={`inline-flex items-center gap-1 text-[10px] font-bold px-2.5 py-1 rounded-lg border ${badge.bg}`}>{badge.icon} {badge.text}</span>
                      <button onClick={(e) => { e.stopPropagation(); setModalProduct({ title: p.name, price: p.price }); setShowMarketplaceModal(true); }} className="px-3 py-1.5 rounded-xl bg-stone-100 hover:bg-rose-500 hover:text-white text-stone-700 text-xs font-semibold transition-all">
                        Cek Vendor
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>

        </div>
      </main>

      <footer className="bg-stone-900 text-stone-500 py-6 border-t border-stone-800 mt-0">
        <div className="max-w-7xl mx-auto px-4 text-center text-xs">
          <p className="font-serif-title text-xl font-bold text-white mb-2">Souvenir Murah</p>
          <p className="text-stone-400">© 2026 Wedding Planner &amp; Calculator. Crafted with Love in Jakarta.</p>
        </div>
      </footer>
      <BottomNavV2 />
    </div>
  );
}
