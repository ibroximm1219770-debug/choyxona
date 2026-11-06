/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { MenuItem } from './types';
import { FORMAT_SUM } from './data/menuData';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MenuSection } from './components/MenuSection';
import { TeaRitualSection } from './components/TeaRitualSection';
import { ReservationSection } from './components/ReservationSection';
import { AmbianceSection } from './components/AmbianceSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { ShoppingBag } from 'lucide-react';

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return (
        localStorage.getItem('choyxona_theme') === 'dark' ||
        window.matchMedia('(prefers-color-scheme: dark)').matches
      );
    }
    return false;
  });

  const [cart, setCart] = useState<Record<string, { item: MenuItem; quantity: number }>>({});
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  // Sync theme with document.documentElement
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('choyxona_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('choyxona_theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const handleAddToCart = (item: MenuItem) => {
    setCart((prev) => {
      const current = prev[item.id];
      const newQty = current ? current.quantity + 1 : 1;
      return {
        ...prev,
        [item.id]: { item, quantity: newQty },
      };
    });
  };

  const handleRemoveFromCart = (itemId: string) => {
    setCart((prev) => {
      const current = prev[itemId];
      if (!current) return prev;
      if (current.quantity <= 1) {
        const copy = { ...prev };
        delete copy[itemId];
        return copy;
      }
      return {
        ...prev,
        [itemId]: { ...current, quantity: current.quantity - 1 },
      };
    });
  };

  const handleClearCart = () => {
    setCart({});
  };

  const totalCartCount = Object.values(cart).reduce((sum, item) => sum + item.quantity, 0);
  const totalCartAmount = Object.values(cart).reduce(
    (sum, item) => sum + item.item.price * item.quantity,
    0
  );

  const scrollToMenu = () => {
    const el = document.getElementById('menu');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToBooking = () => {
    const el = document.getElementById('band');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#f7f4ed] dark:bg-[#10191c] text-[#1e292d] dark:text-[#ece6d8] transition-colors bg-registan-pattern selection:bg-[#1b9aaa]/20 selection:text-[#0f5c7a]">
      {/* Top Bar Header adhering to Top Bar Contract */}
      <Header
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        isDark={isDark}
        onToggleTheme={toggleTheme}
      />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero onExploreMenu={scrollToMenu} onBookTable={scrollToBooking} />

        {/* Menu Section with Search, Tabs, Dish Cards & Add to Cart */}
        <MenuSection
          cart={cart}
          onAddToCart={handleAddToCart}
          onRemoveFromCart={handleRemoveFromCart}
        />

        {/* Traditional Interactive "Loy, Moy, Choy" Tea Ritual simulator */}
        <TeaRitualSection />

        {/* Table Reservation Section */}
        <ReservationSection />

        {/* Atmosphere, Samovar Heritage & Reviews */}
        <AmbianceSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Slide-over Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onAddToCart={handleAddToCart}
        onRemoveFromCart={handleRemoveFromCart}
        onClearCart={handleClearCart}
      />

      {/* Mobile Sticky Quick-Order Strip (Active when cart has items) */}
      {totalCartCount > 0 && !isCartOpen && (
        <div className="fixed bottom-4 left-4 right-4 sm:hidden z-30">
          <button
            type="button"
            onClick={() => setIsCartOpen(true)}
            className="w-full flex items-center justify-between p-3.5 bg-[#0f5c7a] dark:bg-[#4fb3c9] text-white dark:text-[#10191c] rounded-xl shadow-lg border border-[#c8962e]/30 font-semibold text-sm active:scale-95 transition-transform"
          >
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5" />
              <span>{totalCartCount} ta taom</span>
            </div>
            <span className="font-mono tabular-nums">{FORMAT_SUM(totalCartAmount)}</span>
          </button>
        </div>
      )}
    </div>
  );
}
