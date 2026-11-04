import React, { useState, useMemo, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { supabase } from '../../lib/supabase';
import { souvenirs as defaultSouvenirs, Souvenir } from '../../data/souvenirs';
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
  const [souvenirList, setSouvenirList] = useState<Souvenir[]>(defaultSouvenirs);
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [selectedSouvenirId, setSelectedSouvenirId] = useState<number | null>(null);
  const [showMarketplaceModal, setShowMarketplaceModal] = useState(false);
  const [selectedProductForMarketplace, setSelectedProductForMarketplace] = useState<Souvenir | null>(null);
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
    const item = souvenirList.find(s => s.id === id);
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

  // Fetch souvenirs from SQLite DB via API
  useEffect(() => {
    // Parse URL params on mount
    const params = new URLSearchParams(window.location.search);
    const b = params.get('b');
    const g = params.get('g');
    const p = params.get('p');
    if (b) setBudget(new Intl.NumberFormat('id-ID').format(parseRupiahInput(b)));
    if (g) setGuests(Number(g));
    if (p) setSelectedProducts(p.split(',').filter(Boolean));

    async function fetchSouvenirs() {
      try {
        const res = await fetch('/api/v2/products');
        if (res.ok) {
          const data = await res.json();
          if (data && data.length > 0) {
            setSouvenirList(data);
          }
        }
      } catch (e) {
        console.warn('Using local souvenirs fallback:', e);
      }
    }
    fetchSouvenirs();
  }, []);

  const trackShareEvent = async (eventType: 'copy_link' | 'share_wa') => {
    try {
      await fetch('/api/share_event', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          souvenir_id: selectedProducts.join(','),
          event_type: eventType,
          guest_count: guests,
          coffee_cost: coffeeCost,
          total: totalEstimated
        })
      });
    } catch (e) {
      console.warn('Track event skipped:', e);
    }
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
    trackShareEvent('share_wa');
    const selectedItems = selectedProducts.map(id => souvenirList.find(s => s.id === id)).filter(Boolean) as Souvenir[];
    const selectedNames = selectedItems.map(item => item.name).join(', ');
    const selectedLinks = selectedItems.map(item => {
      const link = item.marketplaceLinks?.shopee;
      if (link && link !== '#') return `- ${item.name}: ${link}`;
      return `- ${item.name}: https://shopee.co.id/search?keyword=${encodeURIComponent(item.name)}`;
    }).join('\n');

    const text = encodeURIComponent(
      `Halo! 🎉 Cek rancangan souvenir & coffee bar kita:\n\n` +
      `💰 Base Budget: ${formatRupiah(baseBudgetNum)}\n` +
      `👥 ${guests} Tamu\n` +
      (coffeeEnabled ? `☕ Coffee Bar ${selectedPackage.name}: ${formatRupiah(coffeeCost)}\n` : '') +
      `🎁 Souvenir Terpilih (${selectedProducts.length} item):\n${selectedNames}\n\n` +
      `🛒 Link Pembelian:\n${selectedLinks}\n\n` +
      `📊 Total Estimasi: ${formatRupiah(totalEstimated)}\n` +
      `💡 Base Budget: ${formatRupiah(baseBudgetNum)} | Selisih: ${formatRupiah(budgetStatus)}\n\nLihat detail di KadoNikah V2`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  const copyLink = async () => {
    if (selectedProducts.length === 0) {
      displayToast('⚠️ Pilih minimal 1 souvenir dulu sebelum copy link!');
      return;
    }
    trackShareEvent('copy_link');
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
    return (filterActive === 'all' ? souvenirList : souvenirList.filter(s => s.category === filterActive))
      .sort((a, b) => a.price - b.price);
  }, [filterActive, souvenirList]);

  const toggleProductSelection = (productId: string) => {
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

          <aside className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-stone-200/50 border border-amber-200/80 lg:sticky lg:top-28 max-h-[calc(100vh-8rem)] overflow-y-auto custom-scrollbar">
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

              <div className="mt-6 rounded-3xl p-6 sm:p-8 bg-roseGold-50 border border-roseGold-100 text-stone-900 shadow-sm relative overflow-visible">
                <div className="text-center pb-3 mb-3 border-b border-roseGold-200">
                  <span className="text-xs uppercase tracking-widest font-bold text-dustyRose-500 block mb-1">ALOKASI PER UNIT</span>
                  <div className="font-serif-title text-2xl sm:text-3xl font-bold mb-1 text-rose-600">{formatRupiah(allocationPerUnit)}</div>
                  <p className="text-[10px] sm:text-xs text-stone-500">Batas biaya rekomendasi per 1 buah souvenir</p>
                </div>
                <div className="space-y-2 text-xs sm:text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold uppercase tracking-wider text-dustyRose-500">Souvenir Cost</span>
                    <span className="font-bold text-stone-900">{formatRupiah(souvenirCost)}</span>
                  </div>
                  {coffeeEnabled && (
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold uppercase tracking-wider text-dustyRose-500">Coffee Bar Cost</span>
                      <span className="font-bold text-stone-900">+{formatRupiah(coffeeCost)}</span>
                    </div>
                  )}
                  <div className="pt-2 border-t-2 border-roseGold-200 flex justify-between items-center font-bold text-sm sm:text-base">
                    <span className="text-stone-900 uppercase tracking-wider">TOTAL ESTIMASI</span>
                    <span className="font-serif-title text-xl sm:text-2xl text-rose-600">{formatRupiah(totalEstimated)}</span>
                  </div>

                  {selectedProducts.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-roseGold-200">
                      <span className="text-[11px] font-bold text-dustyRose-600 uppercase tracking-wider block mb-2 text-left">
                        🎁 Souvenir Terpilih ({selectedProducts.length}):
                      </span>
                      <div className="space-y-2 max-h-48 overflow-y-auto pr-1 custom-scrollbar">
                        {selectedProducts.map(id => {
                          const item = souvenirList.find(s => s.id === id);
                          if (!item) return null;
                          const shopeeLink = item.marketplaceLinks?.shopee && item.marketplaceLinks.shopee !== '#' 
                            ? item.marketplaceLinks.shopee 
                            : `https://shopee.co.id/search?keyword=${encodeURIComponent(item.name)}`;
                          return (
                            <div key={item.id} className="bg-white/80 p-2.5 rounded-xl border border-roseGold-200 text-xs flex items-center justify-between gap-2 shadow-sm">
                              <div className="truncate flex-1 text-left">
                                <span className="font-bold text-stone-900 block truncate">{item.name}</span>
                                <span className="text-[10px] text-stone-500 font-medium">
                                  {formatRupiah(item.price)} × {guests} pax = <span className="text-stone-700 font-bold">{formatRupiah(item.price * guests)}</span>
                                </span>
                              </div>
                              <a 
                                href={shopeeLink} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="px-2.5 py-1.5 bg-[#EE4D2D] text-white font-bold text-[10px] rounded-lg shrink-0 hover:bg-[#D73211] transition-all flex items-center gap-1 shadow-sm active:scale-95"
                              >
                                🛒 Beli
                              </a>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                  </div>

                <div className="mt-4 relative">
                  {showToast && (
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 z-[9999] bg-roseGold-500 text-white border border-roseGold-600 px-4 py-2.5 rounded-xl shadow-lg flex items-center gap-2 text-xs font-bold whitespace-nowrap">
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
                const isSelected = selectedProducts.includes(p.id);
                return (
                  <article
                    key={p.id} onClick={() => toggleProductSelection(p.id)}
                    className={`bg-white rounded-3xl p-4 border shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group cursor-pointer ${
                      isSelected ? 'border-rose-500 ring-2 ring-rose-200' : 'border-stone-100'
                    }`}
                  >
                    <div>
                      <div className="aspect-[4/3] rounded-2xl bg-stone-100 mb-3.5 relative overflow-hidden flex items-center justify-center">
                        {p.image && !p.image.includes('placeholder') ? (
                          <img 
                            src={p.image} 
                            alt={p.name} 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                            onError={(e) => {
                              (e.target as HTMLImageElement).style.display = 'none';
                              const parent = (e.target as HTMLElement).parentElement;
                              if (parent) {
                                const placeholder = document.createElement('div');
                                placeholder.className = "flex items-center justify-center w-full h-full bg-stone-50";
                                placeholder.innerHTML = `<span class="text-4xl opacity-50">${p.category === 'eksklusif' ? '💎' : p.category === 'hemat' ? '🔥' : '📦'}</span>`;
                                parent.appendChild(placeholder);
                              }
                            }}
                          />
                        ) : (
                          <div className="flex items-center justify-center w-full h-full bg-stone-50">
                            <span className="text-4xl opacity-50">{getCategoryIcon(p.category)}</span>
                          </div>
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
                      <button onClick={(e) => { e.stopPropagation(); setSelectedProductForMarketplace(p); setShowMarketplaceModal(true); }} className="px-3 py-1.5 rounded-xl bg-stone-100 hover:bg-rose-500 hover:text-white text-stone-700 text-xs font-semibold transition-all">
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
      {showMarketplaceModal && selectedProductForMarketplace && (
        <div 
          className="fixed inset-0 z-[9998] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" 
          onClick={() => setShowMarketplaceModal(false)}
        >
          <div 
            className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-amber-200 relative animate-in fade-in zoom-in duration-300" 
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setShowMarketplaceModal(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-stone-100 text-stone-500 hover:bg-rose-500 hover:text-white transition-all duration-200 z-10"
            >
              ✕
            </button>
            
            <div className="text-center mb-6">
              <div className="text-2xl sm:text-3xl font-serif-title font-bold text-stone-900 leading-tight">
                {selectedProductForMarketplace.name}
              </div>
              <div className="text-lg font-bold text-dustyRose-600 mt-2">
                {formatRupiah(selectedProductForMarketplace.price)}
              </div>
            </div>
            
            <p className="text-xs text-stone-500 mb-6 text-center leading-relaxed italic">
              "{selectedProductForMarketplace.description}"
            </p>
            
            <div className="space-y-3.5">
              <button 
                className="w-full py-4 rounded-2xl bg-[#EE4D2D] hover:bg-[#D73211] text-white font-bold text-sm transition-all flex items-center justify-center gap-2.5 shadow-lg shadow-orange-500/20 active:scale-95" 
                onClick={() => {
                  const link = selectedProductForMarketplace.marketplaceLinks?.shopee;
                  if (link && link !== '#') {
                    window.open(link, '_blank');
                  } else {
                    window.open(`https://shopee.co.id/search?keyword=${encodeURIComponent(selectedProductForMarketplace.name)}`, '_blank');
                  }
                  setShowMarketplaceModal(false);
                }}
              >
                🛍️ Beli di Shopee
              </button>
              
              <button 
                className="w-full py-4 rounded-2xl bg-[#000000] hover:bg-[#222222] text-white font-bold text-sm transition-all flex items-center justify-center gap-2.5 shadow-lg shadow-stone-900/20 active:scale-95" 
                onClick={() => {
                  const link = selectedProductForMarketplace.marketplaceLinks?.tiktok;
                  if (link && link !== '#') {
                    window.open(link, '_blank');
                  } else {
                    // Fallback to TikTok Shop search
                    window.open(`https://www.tiktok.com/search?q=${encodeURIComponent(selectedProductForMarketplace.name)}`, '_blank');
                  }
                  setShowMarketplaceModal(false);
                }}
              >
                🎵 Beli di TikTok Shop
              </button>
            </div>
            
            <p className="mt-6 text-[10px] text-stone-400 text-center">
              *Klik di mana saja untuk menutup
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
