import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { supabase } from '../../lib/supabase';

export default function CMSDashboard() {
  const [activeKey, setActiveKey] = useState<'v2_katalog' | 'v2_vendor'>('v2_katalog');
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const fetchData = async (key: string) => {
    setLoading(true);
    const { data, error } = await supabase
      .from('contents')
      .select('data')
      .eq('key', key)
      .single();
    
    if (error) {
      console.error(error);
      setContent('[]');
    } else {
      setContent(JSON.stringify(data.data, null, 2));
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData(activeKey);
  }, [activeKey]);

  const handleSave = async () => {
    setLoading(true);
    setMessage('');
    try {
      const parsedData = JSON.parse(content);
      const { error } = await supabase
        .from('contents')
        .upsert({ key: activeKey, data: parsedData, updated_at: new Date() });

      if (error) throw error;
      setMessage('✅ Berhasil di-update, Boss!');
    } catch (err: any) {
      setMessage('❌ Error: ' + err.message);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-800 p-6 md:p-12">
      <Head>
        <title>CMS KadoNikah.id | Dashboard Nyet</title>
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>

      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl border border-amber-100 p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-stone-900">CMS Dashboard 🛠️</h1>
            <p className="text-stone-500 text-sm mt-1">Manage content KadoNikah.id biar makin gacor!</p>
          </div>
          <div className="bg-rose-100 text-rose-600 px-4 py-2 rounded-2xl font-bold text-xs uppercase tracking-wider">
            Admin Access
          </div>
        </div>

        <div className="flex gap-4 mb-6">
          <button 
            onClick={() => setActiveKey('v2_katalog')}
            className={`px-6 py-3 rounded-2xl font-bold text-sm transition-all ${activeKey === 'v2_katalog' ? 'bg-stone-900 text-white shadow-lg' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'}`}
          >
            🎁 Katalog Souvenir
          </button>
          <button 
            onClick={() => setActiveKey('v2_vendor')}
            className={`px-6 py-3 rounded-2xl font-bold text-sm transition-all ${activeKey === 'v2_vendor' ? 'bg-stone-900 text-white shadow-lg' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'}`}
          >
            🏪 Vendor Rekanan
          </button>
        </div>

        <div className="relative">
          <label className="block text-xs font-bold uppercase tracking-widest text-stone-400 mb-3 ml-1">
            JSON Data ({activeKey})
          </label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full h-[400px] font-mono text-sm p-6 bg-stone-50 border border-stone-200 rounded-2xl focus:ring-2 focus:ring-rose-200 focus:border-rose-400 outline-none transition-all"
            spellCheck={false}
          />
          
          {loading && (
            <div className="absolute inset-0 bg-white/50 backdrop-blur-[1px] flex items-center justify-center rounded-2xl">
              <span className="text-stone-900 font-bold animate-pulse">Wait ya Boss... 🚀</span>
            </div>
          )}
        </div>

        <div className="mt-8 flex items-center justify-between">
          <p className={`text-sm font-bold ${message.includes('✅') ? 'text-emerald-600' : 'text-rose-600'}`}>
            {message}
          </p>
          <button
            onClick={handleSave}
            disabled={loading}
            className="bg-stone-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-stone-800 transition-all shadow-xl hover:shadow-2xl active:scale-95 disabled:opacity-50"
          >
            Simpan Perubahan 🔥
          </button>
        </div>
      </div>

      <footer className="mt-12 text-center text-stone-400 text-xs font-medium uppercase tracking-widest">
        Handcrafted by Nyet with ❤️ for Boss Daus
      </footer>
    </div>
  );
}
