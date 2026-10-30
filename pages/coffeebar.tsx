import Navbar from '../components/Navbar';
import { useState } from 'react';

export default function CoffeeBar() {
  const [guests, setGuests] = useState(500);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const calculateCups = (val: number) => Math.round(val * 0.7);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#fff8f8] text-[#201a1c] font-sans pb-24">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#fff8f8]/90 backdrop-blur-xl border-b border-[#f2e5e7]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#712342] flex items-center justify-center text-white font-bold text-lg shadow-sm">
              ☕
            </div>
            <div>
              <h1 className="text-lg font-bold text-[#712342] leading-tight">KadoNikah V1</h1>
              <span className="text-[10px] font-semibold text-[#735c00] tracking-wider uppercase">Wedding Coffee Bar & Live Experience</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-[#534247]">
            <a href="/" className="hover:text-[#712342]">Kalkulator</a>
            <a href="/katalog" className="hover:text-[#712342]">Katalog Souvenir</a>
            <a href="/coffeebar" className="text-[#712342]">Coffee Bar</a>
            <a href="/vendor" className="hover:text-[#712342]">Vendor Rekanan</a>
          </nav>
        </div>
      </header>

      <main className="pt-20">
        {/* Top Hero Showcase */}
        <section className="relative px-6 lg:px-12 py-16 bg-gradient-to-br from-[#fef0f3] via-[#fff8f8] to-[#f8ebed]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f2e5e7] w-fit shadow-sm">
                <span className="text-sm">☕</span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#735c00]">Live Brewing Experience Nusantara</span>
              </div>
              <h1 className="text-3xl lg:text-5xl font-bold text-[#201a1c] leading-tight font-serif">
                Hadirkan Kehangatan Kafe Spesial di Resepsi Pernikahan Anda.
              </h1>
              <p className="text-sm lg:text-base text-[#534247] leading-relaxed">
                Barista profesional bersertifikasi, racikan espresso istimewa dari biji arabika nusantara grade specialty, custom cup sleeves berukir monogram pengantin, serta visual booth tematik yang fotogenik.
              </p>

              {/* Trust Mini Badges */}
              <div className="grid grid-cols-3 gap-4 bg-white/80 p-4 rounded-2xl border border-[#f2e5e7] shadow-sm">
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-[#712342]">150+</span>
                  <span className="text-xs text-[#534247]">Resepsi Terlayani</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-[#735c00]">30 Detik</span>
                  <span className="text-xs text-[#534247]">Speed / Cup</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-[#51393c]">100%</span>
                  <span className="text-xs text-[#534247]">Specialty Arabika</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl bg-[#eddfe2] relative">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCyRiXfxllxayyTQIjWYYFfuN0spnJvwcf0J_Lp6__s37-cAyoL4Fr6D80QmHGjnRth3LX-rcybXtDMEfNIfDP6thWrHaHzdl32wDbellxf-2dRO3J7ptElc0j8gW0RHODar8cdFH5qwRQFWVCPhLDCaKBgnLl1-ixpxfQxTOBTr80I4-nH2kj3BFDQDbxEaxZki1Rrd-E6sSp1IdXJ_oz84Lorh9ulZK4LwUienYaVumEP3JSajQOU')" }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-xs font-bold text-[#ffe088] uppercase">Live Showcase Resepsi</span>
                  <p className="text-lg font-bold">The Dharmawangsa Ballroom</p>
                  <p className="text-xs text-white/80">350 Cups All-Espresso & Signatures Bar</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cup Calculator Quick Estimator */}
        <section className="max-w-7xl mx-auto px-6 -mt-8 relative z-20">
          <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-xl border border-[#f2e5e7] flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#fef0f3] text-[#712342] flex items-center justify-center font-bold text-xl">
                📊
              </div>
              <div>
                <h2 className="text-lg font-bold text-[#201a1c]">Rekomendasi Porsi Cepat</h2>
                <p className="text-xs text-[#534247]">Berapa total undangan resepsi Anda? Kami hitungkan rasio ideal penikmat kopi.</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-4 w-full lg:w-auto">
              <div className="flex items-center bg-[#f8ebed] rounded-xl px-4 py-3 flex-1 lg:flex-initial">
                <span className="text-xs text-[#534247] mr-2">Undangan:</span>
                <input 
                  type="number" 
                  value={guests} 
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="w-24 bg-transparent font-bold text-base text-[#712342] focus:outline-none"
                />
                <span className="text-xs text-[#534247]">Orang</span>
              </div>
              <div className="flex items-center bg-[#ffe088]/30 rounded-xl px-4 py-3 flex-1 lg:flex-initial">
                <span className="text-xs text-[#735c00] font-bold mr-2">Saran Cup (70%):</span>
                <span className="font-bold text-base text-[#735c00]">{calculateCups(guests)} Cups</span>
              </div>
            </div>
          </div>
        </section>

        {/* Packages Grid */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-3">
            <span className="text-xs uppercase tracking-wider font-bold text-[#735c00]">Transparan & Lengkap</span>
            <h2 className="text-3xl font-bold text-[#201a1c] font-serif">Pilihan Paket Wedding Coffee Bar</h2>
            <p className="text-sm text-[#534247]">Semua paket sudah termasuk setup booth tematik, barista berseragam rapi, sirup premium, compostable cup, dan durasi stand-by hingga acara tuntas.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Petite */}
            <div className="bg-white rounded-2xl p-6 shadow-md border border-[#f2e5e7] flex flex-col justify-between hover:-translate-y-1 transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] uppercase font-bold px-3 py-1 rounded-full bg-[#f8ebed] text-[#712342]">Intimate Wedding</span>
                  <span>☕</span>
                </div>
                <h3 className="text-xl font-bold text-[#201a1c]">Paket Petite</h3>
                <p className="text-xs text-[#534247] mt-1">Pilihan tepat untuk akad nikah, lamaran intim, atau private gathering.</p>
                <div className="mt-6 mb-4">
                  <span className="text-2xl font-bold text-[#712342]">Rp 1.500.000</span>
                  <span className="block text-[11px] text-[#534247] mt-0.5">Kapasitas 200 Cups (Rp 7.500/cup)</span>
                </div>
                <ul className="space-y-2 text-xs text-[#534247] pt-2 border-t border-[#f2e5e7]">
                  <li>✓ 2 Certified Baristas</li>
                  <li>✓ Espresso Based & 1 Mocktail</li>
                  <li>✓ Custom Monogram Stamp Cup</li>
                  <li>✓ Standby 4 Jam Service</li>
                </ul>
              </div>
              <button className="w-full mt-8 py-3 rounded-xl bg-[#f2e5e7] text-[#712342] font-bold text-xs uppercase tracking-wider hover:bg-[#712342] hover:text-white transition-colors">
                Pilih Paket Petite
              </button>
            </div>

            {/* Medium (Most Popular) */}
            <div className="bg-white rounded-2xl p-6 shadow-xl border-2 border-[#735c00] flex flex-col justify-between hover:-translate-y-1 transition-all relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#735c00] text-white text-[10px] font-bold uppercase tracking-wider shadow">
                ⭐ Paling Populer
              </span>
              <div>
                <div className="flex items-center justify-between mb-4 mt-2">
                  <span className="text-[10px] uppercase font-bold px-3 py-1 rounded-full bg-[#ffe088]/40 text-[#574500]">Resepsi 400-600 Pax</span>
                  <span>🔥</span>
                </div>
                <h3 className="text-xl font-bold text-[#201a1c]">Paket Medium</h3>
                <p className="text-xs text-[#534247] mt-1">Kombinasi terlengkap dengan mini pastry dan custom neon sign nama.</p>
                <div className="mt-6 mb-4">
                  <span className="text-2xl font-bold text-[#735c00]">Rp 2.500.000</span>
                  <span className="block text-[11px] text-[#534247] mt-0.5">Kapasitas 350 Cups (Rp 7.140/cup)</span>
                </div>
                <ul className="space-y-2 text-xs text-[#534247] pt-2 border-t border-[#ffe088]">
                  <li className="font-semibold text-[#201a1c]">✓ 3 Certified Senior Baristas</li>
                  <li>✓ All Espresso & 2 Mocktails</li>
                  <li>✓ Artisan Flower Tea & 50 Pastry</li>
                  <li>✓ Custom Neon Sign & Embossed Sleeve</li>
                  <li>✓ Standby 5 Jam Service</li>
                </ul>
              </div>
              <button className="w-full mt-8 py-3 rounded-xl bg-[#735c00] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#574500] transition-colors shadow">
                Pilih Paket Medium
              </button>
            </div>

            {/* Grande */}
            <div className="bg-white rounded-2xl p-6 shadow-md border border-[#f2e5e7] flex flex-col justify-between hover:-translate-y-1 transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] uppercase font-bold px-3 py-1 rounded-full bg-[#f8ebed] text-[#712342]">Ballroom & Mega Hall</span>
                  <span>🏛️</span>
                </div>
                <h3 className="text-xl font-bold text-[#201a1c]">Paket Grande</h3>
                <p className="text-xs text-[#534247] mt-1">Pesta kemewahan penuh dengan live affogato station & dekor kayu premium.</p>
                <div className="mt-6 mb-4">
                  <span className="text-2xl font-bold text-[#712342]">Rp 3.500.000</span>
                  <span className="block text-[11px] text-[#534247] mt-0.5">Kapasitas 500 Cups (Rp 7.000/cup)</span>
                </div>
                <ul className="space-y-2 text-xs text-[#534247] pt-2 border-t border-[#f2e5e7]">
                  <li>✓ 4 Baristas + 1 Runner</li>
                  <li>✓ Dual Station: Full Coffee & Tea</li>
                  <li>✓ Gelato Affogato Corner (100 Porsi)</li>
                  <li>✓ Custom Luxury Wooden/Marble Booth</li>
                  <li>✓ Standby 6 Jam Service</li>
                </ul>
              </div>
              <button className="w-full mt-8 py-3 rounded-xl bg-[#f2e5e7] text-[#712342] font-bold text-xs uppercase tracking-wider hover:bg-[#712342] hover:text-white transition-colors">
                Pilih Paket Grande
              </button>
            </div>

            {/* Custom Open Bar */}
            <div className="bg-[#fef0f3] rounded-2xl p-6 shadow-md border border-[#f2e5e7] flex flex-col justify-between hover:-translate-y-1 transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] uppercase font-bold px-3 py-1 rounded-full bg-white text-[#51393c]">Fleksibel & Khusus</span>
                  <span>✨</span>
                </div>
                <h3 className="text-xl font-bold text-[#201a1c]">Custom Open Bar</h3>
                <p className="text-xs text-[#534247] mt-1">Bebas sesuaikan kuota cups di atas 700 pcs, jenis roastery, dan multiple spots.</p>
                <div className="mt-6 mb-4">
                  <span className="text-xl font-bold text-[#51393c]">Bespoke Quote</span>
                  <span className="block text-[11px] text-[#534247] mt-0.5">Mulai dari Rp 6.500/cup untuk volume besar</span>
                </div>
                <ul className="space-y-2 text-xs text-[#534247] pt-2 border-t border-[#f2e5e7]">
                  <li>✓ Unlimited / Multi-Location Booths</li>
                  <li>✓ Custom Signature Syrup Formulation</li>
                  <li>✓ Dedicated Coffee Master</li>
                  <li>✓ VIP Drip Bag Souvenirs</li>
                </ul>
              </div>
              <button className="w-full mt-8 py-3 rounded-xl bg-[#51393c] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#201a1c] transition-colors">
                Konsultasi Khusus
              </button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-4xl mx-auto px-6 py-12">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-[#201a1c] font-serif">FAQ Wedding Coffee Bar</h2>
            <p className="text-xs text-[#534247] mt-1">Segala hal teknis kelistrikan, durasi, hingga ketentuan booking.</p>
          </div>
          <div className="space-y-3">
            {[
              { q: "Berapa watt kebutuhan daya listrik gedung yang diperlukan?", a: "Untuk paket 200-350 cups dibutuhkan daya minimal 2.200 - 3.500 Watt (1 phase). Kami juga membawa genset silent khusus jika venue outdoor." },
              { q: "Berapa lama durasi barista stand-by melayani tamu?", a: "Tim kami hadir 2 jam sebelum acara untuk setup dan kalibrasi. Durasi aktif adalah 4 hingga 6 jam sesuai paket atau sampai kuota habis." },
              { q: "Kapan waktu paling ideal untuk melakukan pemesanan (booking)?", a: "Disarankan H-30 hingga H-60 sebelum pernikahan untuk proses desain mockup cup sleeve dan custom neon sign." },
              { q: "Apakah kami bisa meminta tester rasa sebelum pelunasan?", a: "Tentu! Kami menyediakan Coffee Tasting Kit yang dikirim langsung ke rumah atau dicicipi saat konsultasi." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-5 border border-[#f2e5e7] shadow-sm cursor-pointer" onClick={() => toggleFaq(idx)}>
                <div className="flex justify-between items-center font-bold text-sm text-[#201a1c]">
                  <span>{item.q}</span>
                  <span>{activeFaq === idx ? '−' : '+'}</span>
                </div>
                {activeFaq === idx && (
                  <p className="text-xs text-[#534247] mt-3 pt-3 border-t border-[#f2e5e7] leading-relaxed">
                    {item.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>

      <Navbar />
    </div>
  );
}
