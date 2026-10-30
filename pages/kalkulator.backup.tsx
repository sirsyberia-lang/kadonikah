import { useState, useMemo } from 'react';
import Navbar from '../components/Navbar';

export default function Kalkulator() {
  const [budget, setBudget] = useState(5000000);
  const [guests, setGuests] = useState(500);
  const [coffeeEnabled, setCoffeeEnabled] = useState(true);
  const [coffeePack, setCoffeePack] = useState('1500000');
  const [showCopyModal, setShowCopyModal] = useState(false);
  const [showMarketModal, setShowMarketModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<{ name: string; price: string }>({ name: '', price: '' });

  const formatIDR = (n: number) => new Intl.NumberFormat('id-ID').format(n);
  const formatCurrency = (n: number) => new Intl.NumberFormat('id-ID').format(n);

  // Memoized calculations to ensure proper re-render
  const unitPrice = useMemo(() => Math.round(budget / guests), [budget, guests]);
  const coffeeCost = useMemo(() => coffeeEnabled ? Number(coffeePack) : 0, [coffeeEnabled, coffeePack]);
  const grandTotal = useMemo(() => budget + coffeeCost, [budget, coffeeCost]);

  const copyToClipboard = () => {
    const url = `https://souvenirmurah.id/calc?b=${budget}&p=${guests}&cf=${coffeeCost}`;
    navigator.clipboard.writeText(url).then(() => {
      // Success feedback could be added here
    });
  };

  const openMarketplace = (name: string, price: string) => {
    setSelectedProduct({ name, price });
    setShowMarketModal(true);
  };

  return (
    <div className="min-h-screen bg-[#fff8f8] text-[#201a1c] font-sans">
      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-50 bg-[#fff8f8]/85 backdrop-blur-xl shadow-sm border-b border-[#f2e5e7] pt-safe">
        <div className="h-16 px-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-[#f2e5e7] flex items-center justify-center text-[#712342]">🧮</div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-[#712342]">Souvenir Murah</span>
              <span className="text-[9px] font-bold text-[#735c00] uppercase tracking-wider">Wedding Estimator</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="w-11 h-11 flex items-center justify-center rounded-full text-[#534247]">❓</button>
            <div className="w-8 h-8 rounded-full bg-[#712342] flex items-center justify-center text-white text-sm">👤</div>
          </div>
        </div>
      </header>

      <main className="pt-16 pb-24">
        {/* Intro */}
        <div className="px-4 pt-4 pb-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ffe088] text-[#241a00] text-[10px] font-semibold mb-2">
            ✨ Perencana Anggaran Pernikahan Praktis
          </div>
          <h1 className="text-xl font-bold text-[#712342] leading-tight mb-2">
            Hitung Budget Souvenir & Temukan Pilihan Paling Elegan
          </h1>
          <p className="text-xs text-[#534247] leading-relaxed">
            Simulasikan alokasi anggaran suvenir dan tambahan live coffee bar nusantara secara instan.
          </p>
        </div>

        {/* Calculator Section */}
        <div className="px-4">
          <div className="bg-white rounded-2xl p-4 border border-[#f2e5e7] shadow-sm space-y-4">
            {/* Budget Input */}
            <div className="flex flex-col gap-1.5">
              <label className="flex items-center justify-between text-xs font-bold text-[#201a1c]">
                <span className="flex items-center gap-1.5">
                  <span className="text-[#712342]">💰</span>
                  Budget Souvenir Utama
                </span>
                <span className="text-[10px] font-semibold text-[#735c00] bg-[#f2e5e7] px-2 py-0.5 rounded-full">Total Kas</span>
              </label>
              <div className="flex items-center bg-[#fef0f3] rounded-lg p-2.5 border border-[#f2e5e7]">
                <span className="text-[#534247] mr-2 font-bold">Rp</span>
                <input
                  type="number"
                  value={budget}
                  onChange={(e) => setBudget(Number(e.target.value))}
                  className="w-full bg-transparent text-sm font-bold text-[#712342] focus:outline-none"
                />
              </div>
            </div>

            {/* Guest Count with Slider */}
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between text-xs font-bold text-[#201a1c]">
                <span className="flex items-center gap-1.5">
                  <span className="text-[#712342]">👥</span>
                  Total Tamu Undangan
                </span>
                <span className="text-sm font-bold text-[#712342]">{guests} Pax</span>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="range"
                  min="100"
                  max="1500"
                  step="50"
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="flex-1 accent-[#712342] h-2 bg-[#f2e5e7] rounded-lg cursor-pointer"
                />
                <input
                  type="number"
                  min="100"
                  max="1500"
                  value={guests}
                  onChange={(e) => {
                    const val = Math.min(1500, Math.max(100, Number(e.target.value)));
                    setGuests(val);
                  }}
                  className="w-16 text-center rounded-lg border border-[#f2e5e7] text-sm font-bold text-[#712342] focus:outline-none"
                />
              </div>
            </div>

            {/* Coffee Bar Toggle */}
            <div className="bg-[#fef0f3] rounded-xl p-3.5 flex flex-col gap-3">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#ffe088] flex items-center justify-center text-sm shrink-0">☕</div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-sm font-bold text-[#201a1c]">Wedding Coffee Bar</span>
                      <span className="text-[9px] bg-[#735c00] text-white px-1.5 py-0.5 rounded-full font-bold">Trending</span>
                    </div>
                    <p className="text-[10px] text-[#534247] leading-tight mt-0.5">
                      Live artisan brewing booth untuk hidangan hangat tamu spesial.
                    </p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={coffeeEnabled}
                    onChange={(e) => setCoffeeEnabled(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-[#f2e5e7] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#712342]"></div>
                </label>
              </div>

              {/* Coffee Packages */}
              {coffeeEnabled && (
                <div className="flex flex-col gap-2 pt-1">
                  <span className="text-[10px] font-bold text-[#534247] uppercase tracking-wider">Pilih Paket Coffee Bar:</span>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: '1500000', label: 'Petite', desc: '200 Cups', price: '+1.5 Jt' },
                      { id: '2800000', label: 'Medium', desc: '400 Cups', price: '+2.8 Jt' },
                      { id: '4500000', label: 'Grande', desc: '700 Cups', price: '+4.5 Jt' }
                    ].map(pkg => (
                      <label key={pkg.id} className="cursor-pointer">
                        <input
                          type="radio"
                          name="coffeePack"
                          value={pkg.id}
                          checked={coffeePack === pkg.id}
                          onChange={(e) => setCoffeePack(e.target.value)}
                          className="sr-only peer"
                        />
                        <div className="p-2.5 rounded-lg bg-[#fff8f8] text-center peer-checked:bg-[#712342] peer-checked:text-white border border-[#f2e5e7] peer-checked:border-[#712342] transition-all">
                          <p className="text-xs font-bold">{pkg.label}</p>
                          <p className="text-[10px] mt-0.5">{pkg.desc}</p>
                          <p className="text-[11px] font-bold mt-1">{pkg.price}</p>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-2 pt-1">
              <button
                onClick={() => setShowCopyModal(true)}
                className="flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-[#f2e5e7] text-[#201a1c] font-bold text-xs hover:bg-[#eddfe2] transition-colors"
              >
                📋 Salin Link
              </button>
              <button
                onClick={() => setShowMarketModal(true)}
                className="flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-[#25D366] text-white font-bold text-xs shadow-sm"
              >
                💬 Share WA
              </button>
            </div>

            {/* Cost Summary */}
            <div className="rounded-xl bg-gradient-to-br from-[#712342] to-[#8e3a59] text-white p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#ffbace]">Alokasi Target Souvenir</span>
                  <span className="text-2xl font-bold mt-1">Rp {formatIDR(unitPrice)} <span className="text-xs font-normal text-[#ffbace]">/ pcs</span></span>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">💎</div>
              </div>
              <div className="bg-black/15 rounded-lg p-2.5 mt-3 text-[10px] flex flex-col gap-1">
                <div className="flex justify-between">
                  <span>Souvenir Murni ({guests} pcs):</span>
                  <span className="font-bold">Rp {formatIDR(budget)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Coffee Bar Booth Tambahan:</span>
                  <span className="font-bold">Rp {formatIDR(coffeeCost)}</span>
                </div>
                <div className="h-px bg-white/20 my-0.5"></div>
                <div className="flex justify-between text-xs font-bold text-white">
                  <span>Total Alokasi Keseluruhan:</span>
                  <span>Rp {formatIDR(grandTotal)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recommendations */}
        <div className="px-4 mt-8">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h2 className="text-sm font-bold text-[#712342]">Rekomendasi Souvenir</h2>
              <p className="text-[10px] text-[#534247]">Dipilih cermat sesuai target budget</p>
            </div>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2 mb-3">
            <button className="flex-shrink-0 px-3.5 py-1.5 rounded-full bg-[#712342] text-white text-[10px] font-semibold uppercase tracking-wider">Semua</button>
            <button className="flex-shrink-0 px-3.5 py-1.5 rounded-full bg-[#f2e5e7] text-[#534247] text-[10px] font-semibold">Sesuai Budget</button>
            <button className="flex-shrink-0 px-3.5 py-1.5 rounded-full bg-[#f2e5e7] text-[#534247] text-[10px] font-semibold">Hemat</button>
            <button className="flex-shrink-0 px-3.5 py-1.5 rounded-full bg-[#f2e5e7] text-[#534247] text-[10px] font-semibold">Eksklusif</button>
          </div>

          <div className="flex flex-col gap-3.5">
            <div className="bg-white rounded-2xl p-3 border border-[#f2e5e7] shadow-sm flex gap-3.5 items-center">
              <div className="w-24 h-24 rounded-xl bg-[#fef0f3] flex items-center justify-center text-3xl">🕯️</div>
              <div className="flex-1">
                <div className="flex items-center gap-1.5 mb-1 flex-wrap">
                  <span className="text-[9px] font-bold text-[#2E7D32] bg-[#E8F5E9] px-2 py-0.5 rounded-full">Hemat Rp 2.000</span>
                  <span className="text-[9px] font-bold text-[#534247] bg-[#f2e5e7] px-1.5 py-0.5 rounded">Free Box</span>
                </div>
                <h3 className="text-sm font-bold text-[#201a1c]">Scented Candle Botanical</h3>
                <div className="flex items-center justify-between mt-2 pt-1">
                  <div>
                    <span className="text-[9px] text-[#534247]">Satuan</span>
                    <span className="text-sm font-bold text-[#712342]">Rp 8.000</span>
                  </div>
                  <button onClick={() => openMarketplace('Scented Candle Botanical', 'Rp 8.000')} className="px-3 py-1.5 rounded-lg bg-[#f2e5e7] hover:bg-[#712342] hover:text-white text-[10px] font-bold text-[#201a1c] flex items-center gap-1 transition-all">
                    Cek Vendor
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-3 border border-[#f2e5e7] shadow-sm flex gap-3.5 items-center">
              <div className="w-24 h-24 rounded-xl bg-[#fef0f3] flex items-center justify-center text-3xl">🍵</div>
              <div className="flex-1">
                <div className="flex items-center gap-1.5 mb-1 flex-wrap">
                  <span className="text-[9px] font-bold text-[#2E7D32] bg-[#E8F5E9] px-2 py-0.5 rounded-full">Hemat Rp 2.500</span>
                  <span className="text-[9px] font-bold text-[#534247] bg-[#f2e5e7] px-1.5 py-0.5 rounded">Gold Plated</span>
                </div>
                <h3 className="text-sm font-bold text-[#201a1c]">Tea Strainer Emas Elegan</h3>
                <div className="flex items-center justify-between mt-2 pt-1">
                  <div>
                    <span className="text-[9px] text-[#534247]">Satuan</span>
                    <span className="text-sm font-bold text-[#712342]">Rp 7.500</span>
                  </div>
                  <button onClick={() => openMarketplace('Tea Strainer Emas Elegan', 'Rp 7.500')} className="px-3 py-1.5 rounded-lg bg-[#f2e5e7] hover:bg-[#712342] hover:text-white text-[10px] font-bold text-[#201a1c] flex items-center gap-1 transition-all">
                    Cek Vendor
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Modals */}
      {showCopyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl w-full max-w-sm p-5 shadow-2xl">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-sm font-bold text-[#201a1c]">Bagikan Perhitungan</h4>
              <button onClick={() => setShowCopyModal(false)} className="text-[#534247]">✕</button>
            </div>
            <p className="text-xs text-[#534247] mb-3">
              Tautan ini berisi konfigurasi budget Rp {formatIDR(budget)} untuk {guests} pax.
            </p>
            <div className="flex items-center bg-[#fef0f3] rounded-lg p-2 gap-2">
              <input readOnly value={`https://souvenirmurah.id/calc?b=${budget}&p=${guests}&cf=${coffeeCost}`} className="bg-transparent text-[10px] flex-1 outline-none" />
              <button onClick={copyToClipboard} className="bg-[#712342] text-white text-[10px] font-bold px-3 py-1.5 rounded-md">Salin</button>
            </div>
          </div>
        </div>
      )}

      {showMarketModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl w-full max-w-sm p-5 shadow-2xl">
            <div className="flex items-center justify-between mb-3">
              <div>
                <span className="text-[10px] font-bold text-[#735c00] uppercase tracking-wider">Rekomendasi Official Partner</span>
                <h4 className="text-sm font-bold text-[#201a1c]">{selectedProduct.name} ({selectedProduct.price})</h4>
              </div>
              <button onClick={() => setShowMarketModal(false)} className="text-[#534247]">✕</button>
            </div>
            <div className="flex flex-col gap-2">
              {['Shopee Mall', 'Tokopedia Official', 'TikTok Shop'].map(market => (
                <div key={market} className="flex items-center justify-between p-3 rounded-xl bg-[#fef0f3] hover:bg-[#f2e5e7] transition-colors">
                  <span className="text-sm font-bold text-[#201a1c]">{market}</span>
                  <span className="text-[#534247]">→</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <Navbar />
    </div>
  );
}
