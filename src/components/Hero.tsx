import React from 'react';
import { ArrowRight, Clock, MapPin, Sparkles, Coffee } from 'lucide-react';

interface HeroProps {
  onExploreMenu: () => void;
  onBookTable: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMenu, onBookTable }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-[#c8962e]/20 dark:border-[#e0b050]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0f5c7a] dark:text-[#4fb3c9] uppercase">
              <span>Samarqand an'anasi</span>
              <span aria-hidden="true">·</span>
              <span>100% Halol</span>
              <span aria-hidden="true">·</span>
              <span>O'tin tandir</span>
            </div>

            <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0f5c7a] dark:text-[#ece6d8] leading-[1.15] text-balance">
              Issiq choy, yangi non, <br />
              <span className="italic font-normal text-[#c8962e] dark:text-[#e0b050]">samimiy suhbat.</span>
            </h1>

            <p className="text-lg text-[#1e292d]/80 dark:text-[#ece6d8]/80 max-w-2xl leading-relaxed">
              Samarqand Registon me'morchiligi va mehmondo'stligi ruhidagi choyxona.
              O'tin tandirda yopilgan qatlama somsa, sara qo'y go'shti bilan damlangan Samarqandcha to'y palovi va paxta gulli choynakda xushbo'y za'faronli choy.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={onExploreMenu}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-[#0f5c7a] hover:bg-[#1b9aaa] dark:bg-[#4fb3c9] dark:hover:bg-[#2fb7c6] dark:text-[#10191c] rounded-lg shadow-sm transition-all group whitespace-nowrap"
              >
                <span>Menyuni ko'rish</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                type="button"
                onClick={onBookTable}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-base font-semibold text-[#0f5c7a] dark:text-[#4fb3c9] bg-[#0f5c7a]/10 hover:bg-[#0f5c7a]/15 dark:bg-[#4fb3c9]/10 dark:hover:bg-[#4fb3c9]/20 border border-[#0f5c7a]/30 dark:border-[#4fb3c9]/30 rounded-lg transition-colors whitespace-nowrap"
              >
                <span>Stol band qilish</span>
              </button>
            </div>

            {/* Quiet metadata strip with typographic dividers */}
            <div className="pt-6 border-t border-[#c8962e]/20 dark:border-[#e0b050]/20 flex flex-wrap items-center gap-y-3 gap-x-6 text-sm text-[#1e292d]/70 dark:text-[#ece6d8]/70">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#c8962e] shrink-0" />
                <span>Har kuni 09:00 — 23:00</span>
              </div>
              <span className="hidden sm:inline text-[#c8962e]/50">·</span>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#c8962e] shrink-0" />
                <span>Toshkent & Samarqand</span>
              </div>
              <span className="hidden sm:inline text-[#c8962e]/50">·</span>
              <div className="flex items-center gap-2">
                <Coffee className="w-4 h-4 text-[#c8962e] shrink-0" />
                <span>An'anaviy hovli tapchanlari</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Fidelity Hero Image Asset with Decorative Framing */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto rounded-2xl overflow-hidden shadow-xl border border-[#c8962e]/30 dark:border-[#e0b050]/30 aspect-[16/10] sm:aspect-[4/3] lg:aspect-auto lg:h-[480px]">
              <img
                src="/src/assets/images/hero_choyxona_ambiance_1793963460702.jpg"
                alt="Choyxona Registon hovlisi va tapchanlari"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="flex items-center gap-2 text-xs font-medium text-[#e0b050] mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Samarqand uslubidagi hovli</span>
                </div>
                <p className="font-serif-display text-lg font-semibold leading-snug">
                  "O'ymakor ustunlar va qadimiy samovar nafasi"
                </p>
                <div className="flex items-center gap-3 text-xs text-white/80 mt-1">
                  <span>Hovlida 18 ta tapchan</span>
                  <span>·</span>
                  <span>Ochiq osmon ostida</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
