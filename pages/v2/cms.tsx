import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { supabase } from '../../lib/supabase';
import { souvenirs as defaultSouvenirs, Souvenir } from '../../data/souvenirs';

interface ShareEvent {
  id: string;
  souvenir_id: string;
  event_type: 'copy_link' | 'share_wa';
  guest_count: number;
  coffee_cost: number;
  total: number;
  timestamp: string;
}

export default function CMSDashboard() {
  const [activeTab, setActiveTab] = useState<'souvenirs' | 'analytics' | 'json'>('souvenirs');

  // Souvenir Management State
  const [souvenirList, setSouvenirList] = useState<Souvenir[]>([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  // Form State (Add/Edit Souvenir)
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formName, setFormName] = useState('');
  const [formPrice, setFormPrice] = useState(10000);
  const [formCategory, setFormCategory] = useState<'budget-fit' | 'hemat' | 'eksklusif'>('budget-fit');
  const [formImage, setFormImage] = useState('');
  const [formLink, setFormLink] = useState('#');
  const [formDescription, setFormDescription] = useState('');

  // Analytics State
  const [shareEvents, setShareEvents] = useState<ShareEvent[]>([]);

  // Raw JSON State
  const [jsonText, setJsonText] = useState('');

  // Bulk Import State
  const [importing, setImporting] = useState(false);
  const [importMessage, setImportMessage] = useState('');

  const handleBulkImport = async (e: React.FormEvent) => {
    e.preventDefault();
    setImporting(true);
    setImportMessage('');

    try {
      const parsed = JSON.parse(jsonText);
      if (!Array.isArray(parsed)) throw new Error('Format JSON harus array!');

      // Validation
      const invalid = parsed.filter((p: any) => !p.name || !p.price || !p.category);
      if (invalid.length > 0) {
        throw new Error(`${invalid.length} item invalid: kurang name/price/category`);
      }

      // Client-side Supabase upsert (works because browser has IPv4)
      const res = await supabase.from('souvenirs').upsert(parsed);
      if (res.error) throw res.error;

      setImportMessage(`✅ Berhasil import ${parsed.length} item!`);
    } catch (err: any) {
      setImportMessage('❌ Error: ' + err.message);
    }
    setImporting(false);
  };

  // Load Souvenirs from Supabase / Fallback
  const loadSouvenirs = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase.from('souvenirs').select('*').order('price', { ascending: true });
      if (!error && data && data.length > 0) {
        setSouvenirList(data);
        setJsonText(JSON.stringify(data, null, 2));
      } else {
        setSouvenirList(defaultSouvenirs);
        setJsonText(JSON.stringify(defaultSouvenirs, null, 2));
      }
    } catch (err) {
      console.warn('Fallback static souvenirs:', err);
      setSouvenirList(defaultSouvenirs);
      setJsonText(JSON.stringify(defaultSouvenirs, null, 2));
    }
    setLoading(false);
  };

  // Load Share Events (Analytics)
  const loadShareEvents = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase.from('share_events').select('*').order('timestamp', { ascending: false }).limit(50);
      if (!error && data) {
        setShareEvents(data);
      }
    } catch (err) {
      console.warn('Error load share_events:', err);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (activeTab === 'souvenirs' || activeTab === 'json') {
      loadSouvenirs();
    } else if (activeTab === 'analytics') {
      loadShareEvents();
    }
  }, [activeTab]);

  const handleEdit = (item: Souvenir) => {
    setEditingId(item.id);
    setFormName(item.name);
    setFormPrice(item.price);
    setFormCategory(item.category);
    setFormImage(item.image);
    setFormLink(item.link || '#');
    setFormDescription(item.description || '');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetForm = () => {
    setEditingId(null);
    setFormName('');
    setFormPrice(10000);
    setFormCategory('budget-fit');
    setFormImage('');
    setFormLink('#');
    setFormDescription('');
  };

  const handleSaveSouvenir = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    const newItem: Souvenir = {
      id: editingId || String(Date.now()),
      name: formName,
      price: Number(formPrice),
      category: formCategory,
      image: formImage || 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=500',
      link: formLink,
      description: formDescription
    };

    try {
      const { error } = await supabase.from('souvenirs').upsert(newItem);
      if (error) throw error;
      setMessage(`✅ ${editingId ? 'Diupdate' : 'Ditambahkan'} berhasil!`);
      resetForm();
      await loadSouvenirs();
    } catch (err: any) {
      setMessage('⚠️ Update local state (Supabase sync retry): ' + err.message);
      setSouvenirList(prev => {
        const idx = prev.findIndex(s => s.id === newItem.id);
        if (idx >= 0) {
          const updated = [...prev]; updated[idx] = newItem; return updated;
        }
        return [newItem, ...prev];
      });
      resetForm();
    }
    setLoading(false);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Yakin mau hapus souvenir ini, Boss?')) return;
    setLoading(true);
    try {
      await supabase.from('souvenirs').delete().eq('id', id);
      setSouvenirList(prev => prev.filter(item => item.id !== id));
      setMessage('✅ Berhasil dihapus!');
    } catch (err: any) {
      setSouvenirList(prev => prev.filter(item => item.id !== id));
      setMessage('✅ Hapus dari list!');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-stone-800 p-4 sm:p-8 font-sans">
      <Head>
        <title>CMS Dashboard V2 | KadoNikah.id</title>
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>

      <div className="max-w-6xl mx-auto">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-stone-200/60">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-2xl">🛠️</span>
              <h1 className="text-2xl sm:text-3xl font-bold font-serif-title text-stone-900">CMS Dashboard V2</h1>
            </div>
            <p className="text-xs sm:text-sm text-stone-500">Kelola Katalog Souvenir & Pantau Activity User (Share WA / Copy Link)</p>
          </div>
          <span className="px-3 py-1.5 bg-roseGold-100 text-roseGold-700 font-bold text-xs rounded-full border border-roseGold-200">
            High-End Luxury Nusantara
          </span>
        </header>

        <div className="flex flex-wrap gap-2 mb-6">
          <button
            onClick={() => setActiveTab('souvenirs')}
            className={`px-5 py-3 rounded-2xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2 ${activeTab === 'souvenirs' ? 'bg-stone-900 text-white shadow-md' : 'bg-white text-stone-600 hover:bg-stone-100'}`}
          >
            🎁 Kelola Souvenir ({souvenirList.length})
          </button>
          <button
            onClick={() => setActiveTab('analytics')}
            className={`px-5 py-3 rounded-2xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2 ${activeTab === 'analytics' ? 'bg-stone-900 text-white shadow-md' : 'bg-white text-stone-600 hover:bg-stone-100'}`}
          >
            📈 Log Share WA & Salin Link ({shareEvents.length})
          </button>
          <button
            onClick={() => setActiveTab('json')}
            className={`px-5 py-3 rounded-2xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2 ${activeTab === 'json' ? 'bg-stone-900 text-white shadow-md' : 'bg-white text-stone-600 hover:bg-stone-100'}`}
          >
            💻 Direct JSON Mode
          </button>
        </div>

        {message && (
          <div className="mb-6 p-4 rounded-2xl bg-emerald-50 text-emerald-800 border border-emerald-200 font-bold text-xs sm:text-sm flex items-center justify-between">
            <span>{message}</span>
            <button onClick={() => setMessage('')} className="text-xs opacity-60 hover:opacity-100">✕</button>
          </div>
        )}

        {/* TAB 1: SOUVENIR MANAGEMENT */}
        {activeTab === 'souvenirs' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 bg-white p-6 rounded-3xl shadow-sm border border-stone-200/60 h-fit sticky top-6">
              <h2 className="text-lg font-bold text-stone-900 mb-4 flex items-center justify-between">
                <span>{editingId ? '✏️ Edit Souvenir' : '➕ Tambah Souvenir Baru'}</span>
                {editingId && (
                  <button onClick={resetForm} className="text-xs font-normal text-rose-600 underline">Batal</button>
                )}
              </h2>
              <form onSubmit={handleSaveSouvenir} className="space-y-4 text-xs sm:text-sm">
                <div>
                  <label className="block text-stone-500 font-bold mb-1 uppercase tracking-wider text-[10px]">Nama Produk</label>
                  <input type="text" required value={formName} onChange={e => setFormName(e.target.value)} placeholder="misal: Reed Diffuser Minimalis" className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl outline-none focus:border-stone-900" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-stone-500 font-bold mb-1 uppercase tracking-wider text-[10px]">Harga (Rp)</label>
                    <input type="number" required value={formPrice} onChange={e => setFormPrice(Number(e.target.value))} className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl outline-none focus:border-stone-900" />
                  </div>
                  <div>
                    <label className="block text-stone-500 font-bold mb-1 uppercase tracking-wider text-[10px]">Kategori</label>
                    <select value={formCategory} onChange={e => setFormCategory(e.target.value as any)} className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl outline-none focus:border-stone-900 font-bold">
                      <option value="budget-fit">BUDGET-FIT</option>
                      <option value="hemat">HEMAT</option>
                      <option value="eksklusif">EKSKLUSIF</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-stone-500 font-bold mb-1 uppercase tracking-wider text-[10px]">URL Gambar</label>
                  <input type="url" value={formImage} onChange={e => setFormImage(e.target.value)} placeholder="https://..." className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl outline-none focus:border-stone-900 text-xs font-mono" />
                </div>
                <div>
                  <label className="block text-stone-500 font-bold mb-1 uppercase tracking-wider text-[10px]">Deskripsi Produk</label>
                  <textarea rows={3} value={formDescription} onChange={e => setFormDescription(e.target.value)} placeholder="Penjelasan singkat souvenir..." className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl outline-none focus:border-stone-900 text-xs" />
                </div>
                <button type="submit" disabled={loading} className="w-full py-3 bg-stone-900 text-white font-bold rounded-xl hover:bg-stone-800 transition-all shadow-md active:scale-98 disabled:opacity-50 mt-2">
                  {loading ? 'Menyimpan...' : editingId ? '💾 Simpan Perubahan' : '➕ Tambah Souvenir'}
                </button>
              </form>
            </div>

            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-lg font-bold text-stone-900">List Souvenir Saat Ini</h2>
                <button onClick={loadSouvenirs} className="text-xs text-stone-500 hover:text-stone-900 font-bold flex items-center gap-1">🔄 Refresh</button>
              </div>
              {souvenirList.map(item => (
                <div key={item.id} className="bg-white p-4 sm:p-5 rounded-2xl shadow-sm border border-stone-200/60 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between hover:border-stone-400 transition-all">
                  <div className="flex gap-4 items-center">
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-xl border border-stone-200 shrink-0 bg-stone-100" />
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-bold text-stone-900 text-sm sm:text-base">{item.name}</span>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                          item.category === 'eksklusif' ? 'bg-amber-100 text-amber-800' :
                          item.category === 'hemat' ? 'bg-emerald-100 text-emerald-800' :
                          'bg-stone-100 text-stone-700'
                        }`}>{item.category}</span>
                      </div>
                      <p className="text-xs text-stone-500 font-bold">Rp {new Intl.NumberFormat('id-ID').format(item.price)} / pcs</p>
                      <p className="text-xs text-stone-400 line-clamp-1 mt-0.5">{item.description}</p>
                    </div>
                  </div>
                  <div className="flex gap-2 w-full sm:w-auto justify-end border-t sm:border-t-0 pt-3 sm:pt-0 border-stone-100">
                    <button onClick={() => handleEdit(item)} className="px-3 py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-bold rounded-lg transition-all">✏️ Edit</button>
                    <button onClick={() => handleDelete(item.id)} className="px-3 py-1.5 bg-rose-50 hover:bg-rose-100 text-rose-700 text-xs font-bold rounded-lg transition-all">🗑️ Hapus</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: ANALYTICS / SHARE EVENTS */}
        {activeTab === 'analytics' && (
          <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-stone-200/60">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-bold font-serif-title text-stone-900">Activity & Share Events Log</h2>
                <p className="text-xs text-stone-500">Mencatat aktivitas user saat menekan Share WA atau Salin Link di kalkulator</p>
              </div>
              <button onClick={loadShareEvents} className="px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold text-xs rounded-xl transition-all">🔄 Refresh Log</button>
            </div>

            {shareEvents.length === 0 ? (
              <div className="text-center py-12 text-stone-400 text-sm">
                Belum ada data share event terdeteksi. Silakan coba klik Share WA / Salin Link di halaman `/v2`.
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-stone-200 text-stone-400 uppercase text-[10px] tracking-wider">
                      <th className="py-3 px-4">Tipe Action</th>
                      <th className="py-3 px-4">Souvenir Selected</th>
                      <th className="py-3 px-4">Jumlah Tamu</th>
                      <th className="py-3 px-4">Coffee Cost</th>
                      <th className="py-3 px-4">Total Estimasi</th>
                      <th className="py-3 px-4">Waktu</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100">
                    {shareEvents.map((evt, idx) => (
                      <tr key={evt.id || idx} className="hover:bg-stone-50 transition-colors">
                        <td className="py-3.5 px-4 font-bold">
                          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] ${evt.event_type === 'share_wa' ? 'bg-emerald-100 text-emerald-800' : 'bg-stone-100 text-stone-800'}`}>
                            {evt.event_type === 'share_wa' ? '💬 Share WA' : '📎 Salin Link'}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 font-mono text-stone-600">{evt.souvenir_id ? `ID: ${evt.souvenir_id}` : '-'}</td>
                        <td className="py-3.5 px-4 font-bold text-stone-800">{evt.guest_count} pax</td>
                        <td className="py-3.5 px-4 text-stone-600">Rp {new Intl.NumberFormat('id-ID').format(evt.coffee_cost)}</td>
                        <td className="py-3.5 px-4 font-bold text-rose-700">Rp {new Intl.NumberFormat('id-ID').format(evt.total)}</td>
                        <td className="py-3.5 px-4 text-stone-400 text-xs">{evt.timestamp ? new Date(evt.timestamp).toLocaleString('id-ID') : '-'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* TAB 3: DIRECT JSON EDIT */}
        {activeTab === 'json' && (
          <div className="space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-stone-200/60">
              <h2 className="text-xl font-bold font-serif-title text-stone-900 mb-2">📋 Bulk Import (Crawler / External Data)</h2>
              <p className="text-xs text-stone-500 mb-4">Tempelkan JSON array hasil crawl / ekspor → import langsung ke table <code className="bg-stone-100 px-1.5 py-0.5 rounded">souvenirs</code>.</p>

              <textarea
                value={jsonText}
                onChange={e => setJsonText(e.target.value)}
                rows={16}
                className="w-full font-mono text-xs p-4 bg-stone-50 border border-stone-200 rounded-2xl outline-none focus:border-stone-900"
                placeholder='[{"id":"123","name":"Nama Produk","price":15000,"category":"hemat","image":"https://...","link":"https://...","description":"..."}]'
              />

              {importMessage && (
                <div className={`mt-3 p-3 rounded-xl border text-xs font-bold ${
                  importMessage.includes('✅') ? 'bg-emerald-50 border-emerald-200 text-emerald-800' : 'bg-rose-50 border-rose-200 text-rose-800'
                }`}>
                  {importMessage}
                </div>
              )}

              <div className="mt-4 flex items-center justify-between">
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(jsonText);
                    alert('📋 JSON berhasil disalin ke clipboard!');
                  }}
                  className="px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold text-xs rounded-xl transition-all"
                >
                  📋 Copy JSON
                </button>
                <button
                  onClick={handleBulkImport}
                  disabled={importing || !jsonText.trim()}
                  className="px-8 py-3 bg-stone-900 text-white font-bold rounded-2xl hover:bg-stone-800 transition-all shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {importing ? 'Importing...' : '🚀 Bulk Import ke DB'}
                </button>
              </div>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-sm border border-stone-200/60">
              <h3 className="font-bold text-stone-800 mb-3 text-sm">📂 Sample Payload (Crawled)</h3>
              <button
                onClick={() => {
                  // Load sample crawled payload
                  const sample = {
                    action: 'load_sample',
                    payload: [
                      { id: '100', name: 'Handuk Terry Palmer Luxury - Royale', price: 319900, category: 'eksklusif', image: 'https://images.tokopedia.net/lib/img/2021/tro/10_oct/tro_placeholder.png', link: 'https://www.tokopedia.com/terrypalmer/royale', description: 'Handuk mandi 70x140cm Gift Box Couple - Rating 5.0' },
                      { id: '101', name: 'Leolle Bali Patung Janger Bali 10cm', price: 90000, category: 'budget-fit', image: 'https://images.tokopedia.net/lib/img/2021/tro/10_oct/tro_placeholder.png', link: 'https://www.tokopedia.com/leollebali/patung-janger', description: 'Patung penari Bali gift box - Rating 5.0' },
                      { id: '102', name: 'Note book custom (A6)', price: 2500, category: 'hemat', image: 'https://images.tokopedia.net/lib/img/2021/tro/10_oct/tro_placeholder.png', link: 'https://www.tokopedia.com/snadaprinting/note-book', description: 'Souvenir note book murah - Rating 5.0' },
                      { id: '103', name: 'BINSA - Piring Sambal Stainless', price: 5875, category: 'hemat', image: 'https://images.tokopedia.net/lib/img/2021/tro/10_oct/tro_placeholder.png', link: 'https://www.tokopedia.com/binsakitchenware/piring-sambal', description: 'Piring sambal stainless souvenir - Rating 5.0' },
                      { id: '104', name: 'Capricorn Homeliving Hampers Mug', price: 97800, category: 'budget-fit', image: 'https://images.tokopedia.net/lib/img/2021/tro/10_oct/tro_placeholder.png', link: 'https://www.tokopedia.com/capricorndesign/mug', description: 'Mug souvenir pernikahan - Rating 5.0' },
                      { id: '105', name: '(Caira) dompet souvenir card holder aesthetic', price: 1956, category: 'hemat', image: 'https://images.tokopedia.net/lib/img/2021/tro/10_oct/tro_placeholder.png', link: 'https://www.tokopedia.com/caira/dompet-souvenir', description: 'Dompet souvenir card holder - Rating 5.0' }
                    ]
                  };
                  setJsonText(JSON.stringify(sample.payload, null, 2));
                }}
                className="px-4 py-2 text-xs font-bold bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200 rounded-xl transition-all"
              >
                📥 Load Sample Crawled Payload (6 items)
              </button>
            </div>
          </div>
        )}
        {/* TAB 3: DIRECT JSON EDIT (legacy) - removed, replaced by Bulk Import above */}
      </div>
    </div>
  );
}
