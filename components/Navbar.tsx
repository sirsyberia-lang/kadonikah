import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter();
  const isActive = (path: string) => router.pathname === path;

  return (
    <>
      {/* Desktop Navbar */}
      <div className="hidden lg:flex fixed top-0 left-0 right-0 bg-white border-b border-stone-200 px-8 py-4 z-50 items-center justify-between">
        <div className="flex items-center gap-1">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-[#FFF5F5] border border-[#FBD0D4] flex items-center justify-center text-[#DC4456] shadow-sm">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
            </div>
            <div>
              <span className="font-serif text-lg font-bold tracking-tight text-[#201a1c] block leading-tight">Souvenir Murah</span>
              <span className="text-[10px] tracking-wider uppercase text-[#9B7143] font-semibold block">Wedding Planner</span>
            </div>
          </div>
        </div>
        <div className="flex gap-8">
          <Link href="/v2" className={`font-medium text-sm ${isActive('/v2') ? 'text-[#DC4456]' : 'text-stone-600'}`}>
            Kalkulator
          </Link>
          <Link href="/v2/katalog" className={`font-medium text-sm ${isActive('/v2/katalog') ? 'text-[#DC4456]' : 'text-stone-600'}`}>
            Katalog
          </Link>
          <Link href="/v2/coffeebar" className={`font-medium text-sm ${isActive('/v2/coffeebar') ? 'text-[#DC4456]' : 'text-stone-600'}`}>
            Coffee Bar
          </Link>
          <Link href="/v2/vendor" className={`font-medium text-sm ${isActive('/v2/vendor') ? 'text-[#DC4456]' : 'text-stone-600'}`}>
            Vendor
          </Link>
        </div>
        <button className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-lg">👤</button>
      </div>

      {/* Mobile Navbar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-[#E5E7EB] px-6 py-3 flex justify-between items-center z-50">
        <Link href="/v2" className={`flex flex-col items-center gap-1 ${isActive('/v2') ? 'text-[#E11D48]' : 'text-[#9CA3AF]'}`}>
          <span className="text-xl">🏠</span>
          <span className="text-[10px] font-bold uppercase tracking-tighter">HOME</span>
        </Link>
        <Link href="/v2/coffeebar" className={`flex flex-col items-center gap-1 ${isActive('/v2/coffeebar') ? 'text-[#E11D48]' : 'text-[#9CA3AF]'}`}>
          <span className="text-xl">☕</span>
          <span className="text-[10px] font-bold uppercase tracking-tighter">COFFEE BAR</span>
        </Link>
        <Link href="/v2/katalog" className={`flex flex-col items-center gap-1 ${isActive('/v2/katalog') ? 'text-[#E11D48]' : 'text-[#9CA3AF]'}`}>
          <span className="text-xl">🎁</span>
          <span className="text-[10px] font-bold uppercase tracking-tighter">KATALOG</span>
        </Link>
        <Link href="/v2/vendor" className={`flex flex-col items-center gap-1 ${isActive('/v2/vendor') ? 'text-[#E11D48]' : 'text-[#9CA3AF]'}`}>
          <span className="text-xl">🏪</span>
          <span className="text-[10px] font-bold uppercase tracking-tighter">VENDOR</span>
        </Link>
      </div>
    </>
  );
}
