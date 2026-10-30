import Navbar from '../components/Navbar';
import { useState } from 'react';

export default function Home() {
  const [budget, setBudget] = useState(5000000);
  const [guests, setGuests] = useState(500);

  const getTier = (val: number) => {
    if (val <= 200) return "Petite";
    if (val <= 400) return "Medium";
    return "Grande";
  };

  return (
    <div className="min-h-screen bg-[#fff8f8] text-[#201a1c] font-sans pb-24">
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#fff8f8]/90 backdrop-blur-xl border-b border-[#f2e5e7]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#712342] flex items-center justify-center text-white font-bold text-lg shadow-sm">🎁</div>
            <div>
              <h1 className="text-lg font-bold text-[#712342] leading-tight">KadoNikah V1</h1>
              <span className="text-[10px] font-semibold text-[#735c00] tracking-wider uppercase">Wedding Souvenir Estimator</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-[#534247]">
            <a href="/" className="text-[#712342]">Kalkulator</a>
            <a href="/katalog" className="hover:text-[#712342]">Katalog</a>
            <a href="/coffeebar" className="hover:text-[#712342]">Coffee Bar</a>
            <a href="/vendor" className="hover:text-[#712342]">Vendor</a>
          </nav>
        </div>
      </header>

      <main className="pt-24 px-6 max-w-4xl mx-auto">
        {/* Budget & Guest Control Card */}
        <section className="bg-white rounded-3xl p-8 shadow-xl border border-[#f2e5e7] flex flex-col gap-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex-1 w-full">
              <label className="text-xs font-bold uppercase text-[#534247] mb-2 block">Anggaran Souvenir</label>
              <div className="text-3xl font-black text-[#712342] mb-4">Rp {budget.toLocaleString()}</div>
              <input 
                type="range" min="1000000" max="50000000" step="500000" 
                value={budget} onChange={(e) => setBudget(Number(e.target.value))}
                className="w-full h-2 bg-[#f8ebed] rounded-lg appearance-none cursor-pointer accent-[#712342]"
              />
            </div>
            <div className="flex-1 w-full bg-[#fef0f3] p-6 rounded-2xl border border-[#f2e5e7] text-center">
              <span className="text-xs font-bold text-[#534247] block mb-1">Total Undangan</span>
              <div className="text-4xl font-black text-[#712342]">{guests}</div>
              <span className="text-[10px] font-bold text-[#735c00] uppercase tracking-widest">{getTier(guests)} Tier</span>
              <input 
                type="range" min="100" max="2000" step="50" 
                value={guests} onChange={(e) => setGuests(Number(e.target.value))}
                className="w-full mt-4 h-1.5 bg-[#eddfe2] rounded-lg appearance-none cursor-pointer accent-[#712342]"
              />
            </div>
          </div>

          <div className="pt-6 border-t border-[#f2e5e7] flex justify-between items-center">
            <div>
              <span className="text-xs text-[#534247]">Estimasi Biaya Total:</span>
              <div className="text-xl font-bold text-[#735c00]">Rp {(budget * 1.3).toLocaleString()}</div>
            </div>
            <button className="bg-[#712342] text-white px-8 py-3 rounded-xl font-bold text-sm shadow-lg hover:scale-105 transition-transform">
              Simpan Simulasi
            </button>
          </div>
        </section>

        {/* Recommendations Grid */}
        <section className="mt-12">
          <h2 className="text-xl font-bold text-[#201a1c] mb-6 flex items-center gap-2">
            ✨ Rekomendasi Souvenir <span className="text-xs font-normal text-[#534247]">(Sesuai Budget)</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Scented Candle Botanical", price: 8000, icon: "🕯️" },
              { name: "Tea Strainer Emas Elegan", price: 7500, icon: "🍵" },
              { name: "Linen Pouch Serbaguna", price: 9500, icon: "👝" },
              { name: "Reed Diffuser Aromaterapi", price: 25000, icon: "🌸" }
            ].map((item, i) => (
              <div key={i} className="bg-white p-4 rounded-2xl border border-[#f2e5e7] shadow-sm hover:border-[#712342] transition-colors cursor-pointer group">
                <div className="w-12 h-12 bg-[#fef0f3] rounded-xl flex items-center justify-center text-2xl mb-3 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="text-[11px] font-bold text-[#201a1c] leading-tight mb-1">{item.name}</h3>
                <span className="text-xs font-bold text-[#712342]">Rp {item.price.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Navbar />
    </div>
  );
}
