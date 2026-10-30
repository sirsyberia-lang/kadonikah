import React from 'react';
import DesktopHeader from '../../components/DesktopHeader';
import BottomNavV2 from '../../components/BottomNavV2';

export default function V2Vendor() {
  return (
    <div className="min-h-screen bg-stone-50 pb-20">
      <DesktopHeader onOpenLogin={() => {}} />
      <main className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="font-serif-title text-3xl font-bold text-stone-900 mb-6">Inspirasi Vendor</h1>
        <p className="text-stone-600">Daftar vendor rekanan sedang dalam pengembangan.</p>
      </main>
      <BottomNavV2 />
    </div>
  );
}
