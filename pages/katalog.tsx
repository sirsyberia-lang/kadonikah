import Navbar from '../components/Navbar';

export default function Katalog() {
  const products = [
    { name: "Reed Diffuser", price: 25000, min: 100, icon: "🌸", desc: "Aromaterapi mewah untuk tamu spesial." },
    { name: "Cutlery Set Kayu", price: 30000, min: 100, icon: "🍴", desc: "Set alat makan ramah lingkungan." },
    { name: "Hand Towel Bordir", price: 12000, min: 200, icon: "🧣", desc: "Handuk lembut dengan inisial nama." },
    { name: "Custom Tumbler", price: 45000, min: 50, icon: "🥤", desc: "Tumbler stainless steel custom grafir." }
  ];

  return (
    <div className="min-h-screen bg-[#fff8f8] text-[#201a1c] font-sans pb-24">
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#fff8f8]/90 backdrop-blur-xl border-b border-[#f2e5e7]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#712342] flex items-center justify-center text-white font-bold text-lg shadow-sm">🛍️</div>
            <div>
              <h1 className="text-lg font-bold text-[#712342] leading-tight">KadoNikah V1</h1>
              <span className="text-[10px] font-semibold text-[#735c00] tracking-wider uppercase">Katalog Pilihan Terkurasi</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-[#534247]">
            <a href="/" className="hover:text-[#712342]">Kalkulator</a>
            <a href="/katalog" className="text-[#712342]">Katalog</a>
            <a href="/coffeebar" className="hover:text-[#712342]">Coffee Bar</a>
            <a href="/vendor" className="hover:text-[#712342]">Vendor</a>
          </nav>
        </div>
      </header>

      <main className="pt-28 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-md border border-[#f2e5e7] hover:shadow-xl transition-shadow flex flex-col">
              <div className="h-48 bg-[#fef0f3] flex items-center justify-center text-6xl">{p.icon}</div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-[#201a1c]">{p.name}</h3>
                <p className="text-xs text-[#534247] mt-1 flex-1">{p.desc}</p>
                <div className="mt-4 pt-4 border-t border-[#f2e5e7] flex justify-between items-end">
                  <div>
                    <span className="text-[10px] text-[#534247] block">Mulai dari</span>
                    <span className="text-lg font-bold text-[#712342]">Rp {p.price.toLocaleString()}</span>
                  </div>
                  <span className="text-[10px] font-bold text-[#735c00] bg-[#ffe088]/40 px-2 py-1 rounded-lg">Min. {p.min} pcs</span>
                </div>
                <button className="w-full mt-6 bg-[#712342] text-white py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-[#8e3a59] transition-colors">
                  Beli Sekarang
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Navbar />
    </div>
  );
}
