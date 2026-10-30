import { useState } from 'react';

export default function Undangan() {
  const [rsvp, setRsvp] = useState({ nama: '', pesan: '' });

  return (
    <div className="min-h-screen bg-stone-900 text-stone-100 font-serif p-6 flex flex-col items-center justify-center text-center">
      <div className="max-w-md w-full border border-stone-700 p-10 rounded-3xl bg-stone-800 shadow-2xl">
        <p className="text-xs uppercase tracking-[0.3em] text-rose-400 font-bold mb-4">The Wedding Of</p>
        <h1 className="text-5xl font-black mb-2 italic">Daus & Liah</h1>
        <p className="text-sm text-stone-400 mb-8 tracking-widest">24 OKTOBER 2026</p>
        
        <div className="h-[1px] w-20 bg-rose-600 mx-auto mb-8"></div>
        
        <p className="text-sm mb-10 leading-relaxed text-stone-300">
          Dengan penuh kasih, kami mengundang Anda untuk merayakan hari bahagia kami.
        </p>
        
        <div className="space-y-4">
          <input className="w-full bg-stone-900 p-4 rounded-xl border border-stone-700" placeholder="Nama Anda" onChange={(e) => setRsvp({...rsvp, nama: e.target.value})} />
          <textarea className="w-full bg-stone-900 p-4 rounded-xl border border-stone-700 h-24" placeholder="Pesan & Doa" onChange={(e) => setRsvp({...rsvp, pesan: e.target.value})}></textarea>
          <button className="w-full bg-rose-600 text-white p-4 rounded-xl font-bold hover:bg-rose-700 transition" onClick={() => window.open(`https://wa.me/628123456789?text=Hai! Saya ${rsvp.nama}, ${rsvp.pesan}`)}>
            KONFIRMASI RSVP (WA)
          </button>
        </div>
      </div>
    </div>
  );
}
