import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Sparkles, Calculator, Gift, Coffee, Store, User, Menu, X } from 'lucide-react';

interface DesktopHeaderProps {
  onOpenLogin?: () => void;
}

export default function DesktopHeader({ onOpenLogin }: DesktopHeaderProps) {
  const router = useRouter();
  const currentPath = router.pathname;
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const isActive = (path: string) => {
    if (path === '/v2' && currentPath === '/v2') return true;
    if (path !== '/v2' && currentPath.startsWith(path)) return true;
    return false;
  };

  const navLinks = [
    { name: 'Kalkulator Budget', href: '/v2', icon: Calculator },
    { name: 'Katalog Rekomendasi', href: '/v2/katalog', icon: Gift },
    { name: 'Wedding Coffee Bar', href: '/v2/coffeebar', icon: Coffee },
    { name: 'Inspirasi Vendor', href: '/v2/vendor', icon: Store },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-amber-200/60 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo Branding */}
        <Link href="/v2" className="flex items-center gap-2 sm:gap-3 group shrink-0">
          <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-500 group-hover:bg-rose-500 group-hover:text-white transition-all duration-300 shadow-sm">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div>
            <span className="font-serif text-lg sm:text-2xl font-bold tracking-tight text-stone-900 block leading-tight">KadoNikah V2</span>
            <span className="hidden sm:block text-[10px] sm:text-[11px] tracking-wider uppercase text-amber-700 font-semibold">Wedding Planner & Calculator</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors flex items-center gap-1.5 whitespace-nowrap ${
                isActive(link.href)
                  ? 'text-rose-600 font-bold'
                  : 'text-stone-600 hover:text-rose-600'
              }`}
            >
              <link.icon className="w-4 h-4" /> {link.name}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onOpenLogin}
            className="hidden sm:flex px-5 py-2.5 rounded-full bg-stone-900 text-white text-sm font-semibold hover:bg-stone-800 transition-all duration-200 shadow-md items-center gap-2 hover:shadow-lg"
            type="button"
          >
            <User className="w-4 h-4" />
            <span>Masuk</span>
          </button>
          
          {/* Mobile Menu Toggle (Alternative to Bottom Nav if needed, but keeping simple) */}
          <button 
            className="md:hidden p-2 rounded-xl bg-stone-100 text-stone-600 hover:bg-stone-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu (If needed) */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-stone-200 px-4 py-4 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-semibold transition-all ${
                isActive(link.href)
                  ? 'bg-rose-50 text-rose-600'
                  : 'text-stone-600 hover:bg-stone-50'
              }`}
            >
              <link.icon className="w-5 h-5" />
              {link.name}
            </Link>
          ))}
          <button
            onClick={() => { setIsMenuOpen(false); onOpenLogin?.(); }}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl bg-stone-900 text-white text-sm font-semibold"
          >
            <User className="w-5 h-5" />
            <span>Masuk / Daftar</span>
          </button>
        </div>
      )}
    </header>
  );
}
