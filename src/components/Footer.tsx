import React from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#ede8dc] dark:bg-[#0c1315] border-t-2 border-double border-[#c8962e]/40 dark:border-[#e0b050]/30 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand info */}
          <div className="md:col-span-2 space-y-4">
            <span className="font-serif-display text-2xl font-bold text-[#0f5c7a] dark:text-[#4fb3c9] block">
              Choyxona Registon
            </span>
            <p className="text-sm text-[#1e292d]/75 dark:text-[#ece6d8]/75 max-w-md leading-relaxed">
              Samarqand Registon madaniyati va mehmondo'stligini ifoda etuvchi an'anaviy choyxona.
              Xushbo'y choy, o'tin tandir somsalari va asl o'zbek palovi bilan mehmonlarga xizmat ko'rsatishdan mamnunmiz.
            </p>
            <div className="text-xs text-[#1e292d]/60 dark:text-[#ece6d8]/60">
              100% Halol go'sht mahsulotlari · Devzira guruch · Tabiiy tog' giyohlari
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0f5c7a] dark:text-[#4fb3c9]">
              Bo'limlar
            </h4>
            <ul className="space-y-2 text-sm text-[#1e292d]/80 dark:text-[#ece6d8]/80">
              <li>
                <a href="#menu" className="hover:text-[#0f5c7a] dark:hover:text-[#4fb3c9] transition-colors">
                  Dasturxon menyusi
                </a>
              </li>
              <li>
                <a href="#choy-marosimi" className="hover:text-[#0f5c7a] dark:hover:text-[#4fb3c9] transition-colors">
                  Choy quyish marosimi
                </a>
              </li>
              <li>
                <a href="#muhit" className="hover:text-[#0f5c7a] dark:hover:text-[#4fb3c9] transition-colors">
                  Hovli va tapchanlar
                </a>
              </li>
              <li>
                <a href="#band" className="hover:text-[#0f5c7a] dark:hover:text-[#4fb3c9] transition-colors">
                  Stol band qilish
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0f5c7a] dark:text-[#4fb3c9]">
              Aloqa & Manzil
            </h4>
            <div className="space-y-2.5 text-sm text-[#1e292d]/80 dark:text-[#ece6d8]/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#c8962e] shrink-0 mt-0.5" />
                <span>Toshkent shahri, Shayxontohur tumani, Registon ko'chasi 14-uy</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#c8962e] shrink-0" />
                <a href="tel:+998712001414" className="hover:underline font-mono">
                  +998 (71) 200-14-14
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#c8962e] shrink-0" />
                <span>Har kuni: 09:00 — 23:00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-12 pt-6 border-t border-[#c8962e]/20 dark:border-[#e0b050]/20 flex flex-col sm:flex-row items-center justify-between text-xs text-[#1e292d]/60 dark:text-[#ece6d8]/60 gap-4">
          <p>© 2026 Choyxona Registon · Toshkent & Samarqand. Barcha huquqlar himoyalangan.</p>
          <p className="italic">«Choy ichgan kishi dard bilmas, dasturxonli uy fayzdan ketmas»</p>
        </div>
      </div>
    </footer>
  );
};
