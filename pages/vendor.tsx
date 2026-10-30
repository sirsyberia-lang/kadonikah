import Navbar from '../components/Navbar';

export default function Vendor() {
  const vendors = [
    { name: "Rustic Craft Indo", cat: "Souvenir Kayu", price: 5000, rating: 4.9 },
    { name: "Elegant Tea House", cat: "Tea Strainer", price: 7500, rating: 4.8 },
    { name: "Linen Mood Co", cat: "Pouch & Fabric", price: 9500, rating: 4.7 },
    { name: "Aroma Scented Lab", cat: "Candle & Diffuser", price: 15000, rating: 5.0 },
    { name: "Eco Living Studio", cat: "Cutlery Set", price: 12000, rating: 4.6 }
  ];

  return (
    <div className="min-h-screen bg-[#fff8f8] text-[#201a1c] font-sans pb-24">
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#fff8f8]/90 backdrop-blur-xl border-b border-[#f2e5e7]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#712342] flex items-center justify-center text-white font-bold text-lg shadow-sm">🤵</div>
            <div>
              <h1 className="text-lg font-bold text-[#712342] leading-tight">KadoNikah V1</h1>
              <span className="text-[10px] font-semibold text-[#735c00] tracking-wider uppercase">Direktori Vendor Terkurasi</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-[#534247]">
            <a href="/" className="hover:text-[#712342]">Kalkulator</a>
            <a href="/katalog" className="hover:text-[#712342]">Katalog</a>
            <a href="/coffeebar" className="hover:text-[#712342]">Coffee Bar</a>
            <a href="/vendor" className="text-[#712342]">Vendor</a>
          </nav>
        </div>
      </header>

      <main className="pt-28 px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-[#201a1c] mb-8 font-serif">Rekan Vendor Souvenir</h2>
        
        <div className="flex flex-col gap-4">
          {vendors.map((v, i) => (
            <div key={i} className="bg-white p-6 rounded-3xl border border-[#f2e5e7] shadow-sm flex items-center justify-between hover:border-[#712342] transition-colors">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-[#fef0f3] flex items-center justify-center font-black text-[#712342] text-xl">
                    {v.name[0]}
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#201a1c]">{v.name}</h3>
                  <p className="text-xs text-[#534247]">{v.cat} • <span className="font-bold text-[#735c00]">★ {v.rating}</span></p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <span className="text-sm font-bold text-[#712342]">Rp {v.price.toLocaleString()}</span>
                <button className="text-[10px] font-bold uppercase tracking-widest text-[#712342] bg-[#f8ebed] px-4 py-2 rounded-xl hover:bg-[#712342] hover:text-white transition-colors">
                  Lihat Portfolio
                </button>
              </div>
            </div>
          ))}
        </div>

        <button className="w-full mt-12 bg-[#712342] text-white py-4 rounded-3xl font-bold text-sm uppercase tracking-widest hover:bg-[#8e3a59] transition-colors shadow-lg">
          Daftar Jadi Vendor
        </button>
      </main>
      <Navbar />
    </div>
  );
}
