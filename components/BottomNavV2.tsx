import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Calculator, Gift, Coffee, Store } from 'lucide-react';

export default function BottomNavV2() {
  const router = useRouter();
  const currentPath = router.pathname;

  const isActive = (path: string) => {
    if (path === '/v2' && currentPath === '/v2') return true;
    if (path !== '/v2' && currentPath.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-stone-200 py-2 px-4 shadow-lg">
      <div className="flex justify-around items-center max-w-md mx-auto">
        <Link
          href="/v2"
          className={`flex flex-col items-center gap-1 text-xs font-medium ${
            isActive('/v2') && currentPath === '/v2' ? 'text-rose-600 font-bold' : 'text-stone-500'
          }`}
        >
          <Calculator className="w-5 h-5" />
          <span>Kalkulator</span>
        </Link>
        <Link
          href="/v2/katalog"
          className={`flex flex-col items-center gap-1 text-xs font-medium ${
            isActive('/v2/katalog') ? 'text-rose-600 font-bold' : 'text-stone-500'
          }`}
        >
          <Gift className="w-5 h-5" />
          <span>Katalog</span>
        </Link>
        <Link
          href="/v2/coffeebar"
          className={`flex flex-col items-center gap-1 text-xs font-medium ${
            isActive('/v2/coffeebar') ? 'text-rose-600 font-bold' : 'text-stone-500'
          }`}
        >
          <Coffee className="w-5 h-5" />
          <span>Coffee Bar</span>
        </Link>
        <Link
          href="/v2/vendor"
          className={`flex flex-col items-center gap-1 text-xs font-medium ${
            isActive('/v2/vendor') ? 'text-rose-600 font-bold' : 'text-stone-500'
          }`}
        >
          <Store className="w-5 h-5" />
          <span>Vendor</span>
        </Link>
      </div>
    </nav>
  );
}
