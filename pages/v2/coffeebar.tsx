import React from 'react';
import DesktopHeader from '../../components/DesktopHeader';
import BottomNavV2 from '../../components/BottomNavV2';

export default function V2CoffeeBar() {
  return (
    <div className="min-h-screen bg-stone-50 pb-20">
      <DesktopHeader onOpenLogin={() => {}} />
      <main className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="font-serif-title text-3xl font-bold text-stone-900 mb-6">Wedding Coffee Bar</h1>
        <p className="text-stone-600">Informasi detail paket Coffee Bar sedang dalam pengembangan.</p>
      </main>
      <BottomNavV2 />
    </div>
  );
}
