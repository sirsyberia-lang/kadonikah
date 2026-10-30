import { useState, useMemo } from 'react';
import Navbar from '../components/Navbar';

export default function Kalkulator() {
  const [budget, setBudget] = useState(5000000);
  const [guests, setGuests] = useState(500);
  const [coffeeEnabled, setCoffeeEnabled] = useState(true);
  const [coffeePack, setCoffeePack] = useState('1500000');
  const [filter, setFilter] = useState('all');
  
  const [showCopyModal, setShowCopyModal] = useState(false);
  const [showMarketModal, setShowMarketModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({ name: '', price: '' });

  const formatIDR = (n: number) => new Intl.NumberFormat('id-ID').format(n);
  
  const unitPrice = useMemo(() => Math.floor(budget / (guests || 1)), [budget, guests]);
  const coffeeCost = useMemo(() => coffeeEnabled ? Number(coffeePack) : 0, [coffeeEnabled, coffeePack]);
  const grandTotal = useMemo(() => budget + coffeeCost, [budget, coffeeCost]);
  const totalPerGuest = useMemo(() => Math.floor(grandTotal / (guests || 1)), [grandTotal, guests]);

  const souvenirs = [
    { name: 'Reed Diffuser Aromaterapi', price: 25000, category: 'eksklusif', emoji: '🌿', desc: 'Botol kaca estetik 30ml lengkap dengan stick rotan.' },
    { name: 'Cutlery Set Kayu Aesthetic', price: 30000, category: 'eksklusif', emoji: '🍴', desc: 'Sendok, garpu, dan sumpit jati dengan pouch kanvas.' },
    { name: 'Scented Candle Botanical', price: 8000, category: 'hemat', emoji: '🕯️', desc: 'Lilin kedelai wangi lavender dalam kaleng aluminium.' },
    { name: 'Tea Strainer Emas Elegan', price: 7500, category: 'hemat', emoji: '🍵', desc: 'Saringan teh stainless steel warna emas anti karat.' },
    { name: 'Linen Pouch Serbaguna', price: 9500, category: 'budget-fit', emoji: '👝', desc: 'Pouch kain blacu katamun premium sablon monogram.' },
    { name: 'Artisan Soap Bar Alami', price: 10000, category: 'budget-fit', emoji: '🧼', desc: 'Sabun batang herbal minyak kelapa aroma melati.' },
  ];

  const filteredSouvenirs = souvenirs.filter(s => filter === 'all' || s.category === filter);

  const getDiffBadge = (price: number) => {
    const diff = price - unitPrice;
    if (diff > 0) return { label: `NAMBAH Rp ${formatIDR(diff)}`, class: 'bg-amber-50 text-amber-700 border-amber-200', icon: '⚠️' };
    if (diff < 0) return { label: `HEMAT Rp ${formatIDR(Math.abs(diff))}`, class: 'bg-emerald-50 text-emerald-700 border-emerald-200', icon: '✅' };
    return { label: 'PAS BUDGET', class: 'bg-blue-50 text-blue-700 border-blue-200', icon: '✨' };
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-800 font-sans selection:bg-[#FDE8E9] selection:text-[#C22B3D]">
      {/* Desktop Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#EBDDC9] h-20 hidden lg:flex items-center">
        <div className="max-w-7xl mx-auto px-8 w-full flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-[#FFF5F5] border border-[#FBD0D4] flex items-center justify-center text-[#DC4456]">✨</div>
            <div>
              <span className="font-serif block text-2xl font-bold text-stone-900 leading-tight">KadoNikah V1</span>
              <span className="text-[11px] tracking-wider uppercase text-[#9B7143] font-semibold">Wedding Planner & Calculator</span>
            </div>
          </div>
          <nav className="flex items-center gap-8 text-sm font-medium text-stone-600">
            <a href="#" className="text-[#DC4456] font-semibold flex items-center gap-1.5">🧮 Kalkulator Budget</a>
            <a href="/katalog" className="hover:text-[#DC4456] flex items-center gap-1.5">🎁 Katalog Rekomendasi</a>
            <a href="/coffeebar" className="hover:text-[#DC4456] flex items-center gap-1.5">☕ Wedding Coffee Bar</a>
            <a href="/vendor" className="hover:text-[#DC4456]">Inspirasi Vendor</a>
          </nav>
          <button className="px-5 py-2.5 rounded-full bg-stone-900 text-white text-sm font-semibold hover:bg-stone-800 flex items-center gap-2">👤 Masuk / Daftar</button>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-[#F5EFE6]/60 to-transparent py-10 lg:py-14 text-center px-4 border-b border-[#F5EFE6]/60">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-[#FBD0D4] text-[#DC4456] text-xs font-semibold mb-4 tracking-wide uppercase">🤝 Perencana Anggaran Pernikahan Praktis</div>
        <h1 className="font-serif text-3xl lg:text-5xl font-bold text-stone-900 max-w-3xl mx-auto leading-tight">Hitung Budget Souvenir & Temukan Pilihan Paling Elegan</h1>
        <p className="mt-4 text-stone-600 text-base max-w-2xl mx-auto">Sesuaikan jumlah tamu, simulasi penambahan wedding coffee bar, dan temukan suvenir pas dengan alokasi rupiah per undangan.</p>
      </section>

      <main className="max-w-7xl mx-auto px-4 lg:px-8 py-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Calculator */}
        <aside className="lg:col-span-5 bg-white rounded-3xl p-6 lg:p-8 shadow-xl shadow-stone-200/50 border border-[#EBDDC9]/80 lg:sticky lg:top-28">
          <div className="flex items-center gap-2.5 pb-5 border-b border-stone-100 mb-6">
            <div className="w-9 h-9 rounded-xl bg-[#F5EFE6] text-[#9B7143] flex items-center justify-center text-lg">🎛️</div>
            <h2 className="font-serif text-xl font-bold text-stone-900">Kalkulator Anggaran</h2>
          </div>

          <div className="space-y-5">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-2">Base Budget Souvenir (Rp)</label>
              <div className="relative rounded-2xl shadow-sm">
                <span className="absolute inset-y-0 left-4 flex items-center text-stone-400 font-semibold text-sm">Rp</span>
                <input 
                  type="text" 
                  value={new Intl.NumberFormat('id-ID').format(budget)}
                  onChange={(e) => setBudget(Number(e.target.value.replace(/\D/g, '')))}
                  className="block w-full rounded-2xl border-stone-300 pl-11 pr-4 py-3 text-stone-900 font-semibold text-lg focus:border-[#EE7381] focus:ring-[#F7A8B0] bg-stone-50/50" 
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-2">Total Tamu Undangan (Pax)</label>
              <div className="relative rounded-2xl shadow-sm">
                <span className="absolute inset-y-0 left-4 flex items-center text-stone-400 text-lg">👥</span>
                <input 
                  type="number" 
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="block w-full rounded-2xl border-stone-300 pl-12 pr-4 py-3 text-stone-900 font-semibold text-lg focus:border-[#EE7381] focus:ring-[#F7A8B0] bg-stone-50/50" 
                />
              </div>
            </div>

            <div className={`p-4 rounded-2xl border-2 transition-all ${coffeeEnabled ? 'bg-[#FAF7F2] border-[#CDAB81] shadow-sm' : 'bg-stone-50 border-stone-200 opacity-70'}`}>
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <span className="text-xl">☕</span>
                  <div>
                    <label className="text-sm font-bold text-stone-900 cursor-pointer block">Wedding Coffee Bar (Catering)</label>
                    <p className="text-xs text-stone-600 mt-0.5">Live brewing booth untuk tamu spesial.</p>
                  </div>
                </div>
                <input 
                  type="checkbox" 
                  checked={coffeeEnabled} 
                  onChange={(e) => setCoffeeEnabled(e.target.checked)}
                  className="w-5 h-5 mt-1 rounded text-[#DC4456] border-stone-300 focus:ring-[#EE7381] cursor-pointer" 
                />
              </div>

              {coffeeEnabled && (
                <div className="mt-4 pt-4 border-t border-[#EBDDC9] space-y-3">
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-500">Pilih Paket:</label>
                  <div className="space-y-2">
                    {[
                      { id: '1500000', name: 'Petite (200 Cups)', desc: '2 Barista, Espresso Based', price: 'Rp 1.500.000' },
                      { id: '2500000', name: 'Medium (350 Cups)', desc: '3 Barista, All Menu + Tea', price: 'Rp 2.500.000' },
                      { id: '3500000', name: 'Grande (500 Cups)', desc: 'Full Mobile Bar, Custom Sleeves', price: 'Rp 3.500.000' }
                    ].map(p => (
                      <label key={p.id} className={`flex items-start gap-2.5 p-3 rounded-xl border-2 cursor-pointer transition-all ${coffeePack === p.id ? 'bg-white border-[#CDAB81] shadow-sm' : 'bg-white/50 border-stone-200'}`}>
                        <input type="radio" name="coffeePack" checked={coffeePack === p.id} onChange={() => setCoffeePack(p.id)} className="mt-0.5 text-[#DC4456]" />
                        <div className="flex-1">
                          <div className="font-bold text-xs flex justify-between"><span>{p.name}</span><span className={coffeePack === p.id ? 'text-[#DC4456]' : 'text-stone-700'}>{p.price}</span></div>
                          <p className="text-[10px] text-stone-500 mt-0.5">{p.desc}</p>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button onClick={() => setShowCopyModal(true)} className="py-3 px-4 bg-stone-900 text-white rounded-2xl text-xs font-semibold flex items-center justify-center gap-2">📋 Salin Link</button>
              <button className="py-3 px-4 bg-[#25D366] text-white rounded-2xl text-xs font-semibold flex items-center justify-center gap-2">💬 Share WA</button>
            </div>

            <div className="mt-6 rounded-3xl p-6 bg-gradient-to-br from-[#FFF5F5] to-[#FDE8E9]/50 border border-[#FBD0D4] text-center">
              <span className="text-xs uppercase tracking-widest font-bold text-[#DC4456] block mb-1">Alokasi Per Unit</span>
              <div className="font-serif text-4xl font-extrabold text-[#DC4456]">Rp {formatIDR(unitPrice)}</div>
              <div className="mt-1 flex flex-col items-center gap-1">
                <span className="text-[10px] text-stone-500">Biaya rekomendasi per buah souvenir</span>
                <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[10px] font-bold border border-amber-200">Total + Coffee Bar: Rp {formatIDR(totalPerGuest)} / tamu</span>
              </div>
              <div className="mt-4 pt-4 border-t border-[#FBD0D4] space-y-2 text-xs text-stone-600">
                <div className="flex justify-between"><span>Souvenir Base</span><span className="font-bold text-stone-800">Rp {formatIDR(budget)}</span></div>
                <div className="flex justify-between"><span>Coffee Bar</span><span className="font-bold text-amber-800">Rp {formatIDR(coffeeCost)}</span></div>
                <div className="pt-2 border-t border-[#F2E5E7] flex justify-between text-lg font-extrabold text-[#DC4456]"><span>Total Estimasi</span><span>Rp {formatIDR(grandTotal)}</span></div>
              </div>
            </div>
          </div>
        </aside>

        {/* Right: Catalog */}
        <section className="lg:col-span-7 space-y-6">
          <div className="bg-white p-5 rounded-3xl border border-[#EBDDC9] shadow-sm flex flex-col sm:flex-row justify-between gap-4">
            <div>
              <h2 className="font-serif text-xl font-bold text-stone-900">Rekomendasi Souvenir</h2>
              <p className="text-xs text-stone-500">Disesuaikan otomatis dengan target <span className="font-medium text-[#DC4456]">Rp {formatIDR(unitPrice)}</span></p>
            </div>
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 text-xs font-semibold">
              {['all', 'budget-fit', 'hemat', 'eksklusif'].map(f => (
                <button key={f} onClick={() => setFilter(f)} className={`px-3.5 py-2 rounded-xl whitespace-nowrap ${filter === f ? 'bg-stone-900 text-white' : 'bg-[#F5EFE6] text-stone-700'}`}>
                  {f === 'all' ? 'Semua' : f === 'budget-fit' ? 'Sesuai Budget' : f.charAt(0).toUpperCase() + f.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filteredSouvenirs.map(s => {
              const badge = getDiffBadge(s.price);
              return (
                <article key={s.name} className="bg-white rounded-3xl p-4 border border-stone-200 shadow-sm hover:shadow-md group flex flex-col justify-between">
                  <div>
                    <div className="relative w-full h-44 rounded-2xl bg-stone-100 mb-3.5 flex items-center justify-center text-6xl">
                      {s.emoji}
                      <span className="absolute top-2.5 right-2.5 bg-[#FFF5F5] text-[#DC4456] border border-[#fbd0d4] text-xs font-bold px-2.5 py-1 rounded-full">Rp {formatIDR(s.price)}</span>
                    </div>
                    <h3 className="font-serif font-bold text-stone-900 text-base">{s.name}</h3>
                    <p className="text-xs text-stone-500 mt-1">{s.desc}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between gap-2">
                    <span className={`inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-lg border ${badge.class}`}>{badge.icon} {badge.label}</span>
                    <button onClick={() => { setSelectedProduct({ name: s.name, price: `Rp ${formatIDR(s.price)}` }); setShowMarketModal(true); }} className="px-3 py-1.5 rounded-xl bg-stone-100 hover:bg-[#DC4456] hover:text-white text-xs font-semibold">Cek Vendor</button>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </main>

      {/* Copy Modal */}
      {showCopyModal && (
        <div className="fixed inset-0 z-[60] bg-stone-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-7 shadow-2xl relative">
            <button onClick={() => setShowCopyModal(false)} className="absolute top-5 right-5 text-stone-400">✕</button>
            <h3 className="font-serif text-xl font-bold mb-4">Salin Link Estimasi</h3>
            <div className="bg-stone-50 p-2 rounded-2xl border flex">
              <input readOnly value={`https://souvenirmu.id/share/wedding-${guests}pax-b${budget}`} className="bg-transparent text-xs w-full p-1 focus:outline-none" />
              <button className="px-4 py-2 bg-[#DC4456] text-white rounded-xl text-xs font-semibold">Salin</button>
            </div>
          </div>
        </div>
      )}

      {/* Marketplace Modal */}
      {showMarketModal && (
        <div className="fixed inset-0 z-[60] bg-stone-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-7 shadow-2xl relative">
            <button onClick={() => setShowMarketModal(false)} className="absolute top-5 right-5 text-stone-400">✕</button>
            <h3 className="font-serif text-xl font-bold">{selectedProduct.name}</h3>
            <p className="text-[#DC4456] font-bold mb-4">{selectedProduct.price} / pcs</p>
            <div className="space-y-2">
              {[{ name: 'Shopee Official Mall', rating: 4.9 }, { name: 'Tokopedia Merchant Pro', rating: 4.9 }, { name: 'TikTok Shop Live', rating: 4.8 }].map(m => (
                <div key={m.name} className="p-3.5 rounded-2xl border border-stone-200 flex justify-between items-center hover:border-[#DC4456] cursor-pointer group">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#FFF5F5] text-[#DC4456] flex items-center justify-center font-bold text-xs">{m.name.split(' ')[0][0]}</div>
                    <div>
                      <div className="text-xs font-bold text-stone-900">{m.name}</div>
                      <div className="text-[11px] text-stone-500">⭐ {m.rating}</div>
                    </div>
                  </div>
                  <span className="text-xs text-stone-400">➜</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <Navbar />

      {/* Mobile Bottom Nav */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-stone-200 px-6 py-3 flex justify-between z-50 pb-safe">
        <a href="/" className="flex flex-col items-center text-[#DC4456]"><span className="text-xl">🧮</span><span className="text-[10px]">Kalkulator</span></a>
        <a href="/katalog" className="flex flex-col items-center text-stone-400"><span className="text-xl">🛍️</span><span className="text-[10px]">Katalog</span></a>
        <a href="/coffeebar" className="flex flex-col items-center text-stone-400"><span className="text-xl">☕</span><span className="text-[10px]">Coffee Bar</span></a>
        <a href="/vendor" className="flex flex-col items-center text-stone-400"><span className="text-xl">🤵</span><span className="text-[10px]">Vendor</span></a>
      </div>
    </div>
  );
}
