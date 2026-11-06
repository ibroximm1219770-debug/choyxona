import React from 'react';
import { ShoppingBag, Moon, Sun, UtensilsCrossed } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  isDark: boolean;
  onToggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  onOpenCart,
  isDark,
  onToggleTheme,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#f7f4ed]/90 dark:bg-[#10191c]/90 backdrop-blur-md border-b border-[#c8962e]/25 dark:border-[#e0b050]/20 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single text element in display face) */}
        <a 
          href="#" 
          className="font-serif-display text-2xl sm:text-3xl font-bold tracking-tight text-[#0f5c7a] dark:text-[#4fb3c9] whitespace-nowrap shrink-0 flex items-center gap-2 group hover:opacity-90 transition-opacity"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#c8962e] inline-block"></span>
          <span>Choyxona Registon</span>
        </a>

        {/* Zone 2: Clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#1e292d]/80 dark:text-[#ece6d8]/80">
          <a 
            href="#menu" 
            className="hover:text-[#0f5c7a] dark:hover:text-[#4fb3c9] transition-colors whitespace-nowrap shrink-0"
          >
            Menyu
          </a>
          <a 
            href="#choy-marosimi" 
            className="hover:text-[#0f5c7a] dark:hover:text-[#4fb3c9] transition-colors whitespace-nowrap shrink-0"
          >
            Choy marosimi
          </a>
          <a 
            href="#muhit" 
            className="hover:text-[#0f5c7a] dark:hover:text-[#4fb3c9] transition-colors whitespace-nowrap shrink-0"
          >
            Hovli & Tapchan
          </a>
          <a 
            href="#band" 
            className="hover:text-[#0f5c7a] dark:hover:text-[#4fb3c9] transition-colors whitespace-nowrap shrink-0"
          >
            Stol band qilish
          </a>
        </nav>

        {/* Zone 3: Primary Action & Controls */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Theme Switcher */}
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={isDark ? "Kunduzgi rejimga o'tish" : "Tungi rejimga o'tish"}
            className="p-2 text-[#1e292d]/70 hover:text-[#0f5c7a] dark:text-[#ece6d8]/70 dark:hover:text-[#4fb3c9] rounded-lg transition-colors"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          {/* Cart Trigger */}
          <button
            type="button"
            onClick={onOpenCart}
            className="relative flex items-center gap-2 px-3.5 py-2 text-sm font-medium text-[#1e292d] dark:text-[#ece6d8] bg-white/80 dark:bg-[#18262a] border border-[#c8962e]/30 dark:border-[#e0b050]/30 rounded-lg hover:border-[#1b9aaa] transition-colors"
          >
            <ShoppingBag className="w-4 h-4 text-[#0f5c7a] dark:text-[#4fb3c9]" />
            <span className="hidden sm:inline">Savatcha</span>
            {cartCount > 0 && (
              <span className="flex items-center justify-center min-w-[20px] h-5 px-1.5 text-xs font-bold text-white bg-[#0f5c7a] dark:bg-[#1b9aaa] rounded-full">
                {cartCount}
              </span>
            )}
          </button>

          {/* Primary Action Button */}
          <a
            href="#band"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-[#0f5c7a] hover:bg-[#1b9aaa] dark:bg-[#4fb3c9] dark:hover:bg-[#2fb7c6] dark:text-[#10191c] rounded-lg shadow-sm transition-colors whitespace-nowrap shrink-0"
          >
            <UtensilsCrossed className="w-4 h-4" />
            <span>Stol band qilish</span>
          </a>
        </div>
      </div>
    </header>
  );
};
