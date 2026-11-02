import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#201A1C] text-stone-300 py-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="font-serif text-2xl font-bold text-white mb-2">KadoNikah Coffee Bar</h3>
            <p className="text-stone-400 text-sm max-w-md leading-relaxed mb-4">
              Multi-Brand Partnership Platform — Menghadirkan kenikmatan kafe favorit di hari istimewa Anda lewat kemitraan brand kopi lokal terbaik.
            </p>
            <div className="flex gap-3 text-xs text-amber-500 font-bold uppercase tracking-wider">
              <span>#ASOYTokenSystem</span>
              <span>•</span>
              <span>Official Coffee Partner</span>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Navigasi</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/v2" className="hover:text-amber-400 transition-colors">Kalkulator Budget</Link></li>
              <li><Link href="/v2/katalog" className="hover:text-amber-400 transition-colors">Katalog Rekomendasi</Link></li>
              <li><Link href="/v2/coffeebar" className="hover:text-amber-400 transition-colors">Wedding Coffee Bar</Link></li>
              <li><Link href="/v2/vendor" className="hover:text-amber-400 transition-colors">Inspirasi Vendor</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Partner Brand</h4>
            <ul className="space-y-2 text-sm text-stone-400">
              <li>🐮 Calf Coffee</li>
              <li>☕ Janji Jiwa</li>
              <li>🍃 Kopi Kenangan</li>
              <li>✨ Fore Coffee</li>
              <li>🌿 Tanamera Coffee</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-stone-800 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© 2026 KadoNikah.id — Multi-Brand Coffee Bar Platform. All rights reserved.</p>
          <p className="text-stone-400">Designed with ASOY Token System</p>
        </div>
      </div>
    </footer>
  );
}
