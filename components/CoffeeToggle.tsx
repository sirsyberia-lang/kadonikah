import { useState } from 'react';
import { coffeeVendors } from '../data/coffeeVendors';

interface Props {
  enabled: boolean;
  onChange: (val: boolean) => void;
  selectedVendorId: string;
  onVendorChange: (id: string) => void;
  cups: number;
  onCupsChange: (cups: number) => void;
}

export default function CoffeeToggle({ enabled, onChange, selectedVendorId, onVendorChange, cups, onCupsChange }: Props) {
  return (
    <div className="bg-stone-50 p-5 border border-stone-200 rounded-2xl mt-4 space-y-5 shadow-sm">
      <div className="flex justify-between items-center">
        <span className="font-bold text-sm text-stone-700 tracking-tight">☕ Wedding Coffee Bar (Catering)</span>
        <input 
          type="checkbox" 
          checked={enabled} 
          onChange={(e) => onChange(e.target.checked)} 
          className="w-6 h-6 accent-rose-600 cursor-pointer" 
        />
      </div>
      
      {enabled && (
        <div className="space-y-4 pt-3 border-t border-stone-200">
          <div className="w-full">
            <label className="block text-[10px] uppercase tracking-wider font-black text-stone-400 mb-1 ml-1">PILIH VENDOR KOPI</label>
            <select 
              value={selectedVendorId} 
              onChange={(e) => onVendorChange(e.target.value)}
              className="w-full p-4 border-2 border-stone-200 rounded-xl bg-white text-base font-medium focus:border-rose-500 outline-none transition-all appearance-none"
              style={{ backgroundImage: 'url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3e%3cpolyline points=\'6 9 12 15 18 9\'%3e%3c/polyline%3e%3c/svg%3e")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1em' }}
            >
              {coffeeVendors.map(v => <option key={v.id} value={v.id}>{v.name} (Rp {v.pricePerCup.toLocaleString()}/cup)</option>)}
            </select>
          </div>
          
          <div className="w-full">
            <label className="block text-[10px] uppercase tracking-wider font-black text-stone-400 mb-1 ml-1">JUMLAH PESANAN (CUP)</label>
            <input 
              type="number" 
              value={cups} 
              onChange={(e) => onCupsChange(Number(e.target.value))}
              className="w-full p-4 border-2 border-stone-200 rounded-xl bg-white text-base font-medium focus:border-rose-500 outline-none transition-all"
              placeholder="Min. 100"
            />
          </div>
        </div>
      )}
    </div>
  );
}
