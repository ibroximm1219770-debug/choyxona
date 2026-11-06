import React from 'react';
import { REVIEWS } from '../data/menuData';
import { Heart, Star, Sparkles, MessageSquareQuote } from 'lucide-react';

export const AmbianceSection: React.FC = () => {
  return (
    <section id="muhit" className="py-16 sm:py-24 border-b border-[#c8962e]/20 dark:border-[#e0b050]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0f5c7a] dark:text-[#4fb3c9] uppercase">
            <span>Choyxona muhiti</span>
            <span aria-hidden="true">·</span>
            <span>Qadimiy mehmondo'stlik</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-[#0f5c7a] dark:text-[#ece6d8] mt-2">
            O'zbek Choyxonasining Haqiqiy Ruhiyati
          </h2>
          <p className="text-base text-[#1e292d]/80 dark:text-[#ece6d8]/80 mt-3 leading-relaxed">
            Choyxona — shunchaki tamaddixona emas, u asrlar davomida xalqimizning samimiy suhbat, do'stlik, donishmandlik va hordiq maskani bo'lib kelgan.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="p-6 bg-white dark:bg-[#18262a] rounded-2xl border border-[#c8962e]/25 dark:border-[#e0b050]/20 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#0f5c7a]/10 dark:bg-[#4fb3c9]/15 text-[#0f5c7a] dark:text-[#4fb3c9] flex items-center justify-center font-bold">
              01
            </div>
            <h3 className="font-serif-display text-xl font-bold text-[#0f5c7a] dark:text-[#ece6d8]">
              Gurillagan Mis Samovar
            </h3>
            <p className="text-sm text-[#1e292d]/75 dark:text-[#ece6d8]/75 leading-relaxed">
              O'tin va ko'mir taftida qaynagan samovar suvi choyning shirasini butunlay boshqacha qiladi. Choyxonamiz markazida 60 litrlik qadimiy mis samovar doim qaynab turadi.
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-[#18262a] rounded-2xl border border-[#c8962e]/25 dark:border-[#e0b050]/20 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#0f5c7a]/10 dark:bg-[#4fb3c9]/15 text-[#0f5c7a] dark:text-[#4fb3c9] flex items-center justify-center font-bold">
              02
            </div>
            <h3 className="font-serif-display text-xl font-bold text-[#0f5c7a] dark:text-[#ece6d8]">
              Xontaxta & Do'stlar Davrasi
            </h3>
            <p className="text-sm text-[#1e292d]/75 dark:text-[#ece6d8]/75 leading-relaxed">
              Yumshoq paxtali ko'rpachalar, qo'lda tikilgan suzani yostiqlar va xontaxta ustida shaxmat-shashka musobaqalari. Vaqt bu yerda sokin va maroqli o'tadi.
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-[#18262a] rounded-2xl border border-[#c8962e]/25 dark:border-[#e0b050]/20 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#0f5c7a]/10 dark:bg-[#4fb3c9]/15 text-[#0f5c7a] dark:text-[#4fb3c9] flex items-center justify-center font-bold">
              03
            </div>
            <h3 className="font-serif-display text-xl font-bold text-[#0f5c7a] dark:text-[#ece6d8]">
              Olovli Tandir & Devzira Palov
            </h3>
            <p className="text-sm text-[#1e292d]/75 dark:text-[#ece6d8]/75 leading-relaxed">
              Har kuni soat 12:30 va 18:30 da yangi damlangan Samarqandcha palov katta laganlarda suziladi. Tandirdan esa issiq somsa va Samarqand nonlari uzilmaydi.
            </p>
          </div>
        </div>

        {/* Testimonials / Mehmonlarimiz fikrlari */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-serif-display text-2xl font-bold text-[#0f5c7a] dark:text-[#ece6d8] flex items-center gap-2">
              <MessageSquareQuote className="w-6 h-6 text-[#c8962e]" />
              <span>Mehmonlarimiz Fikrlari</span>
            </h3>
            <div className="flex items-center gap-1 text-sm font-semibold text-[#0f5c7a] dark:text-[#4fb3c9]">
              <Star className="w-4 h-4 fill-[#c8962e] text-[#c8962e]" />
              <span>4.9 / 5.0 (500+ baho)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.map((rev, idx) => (
              <div
                key={idx}
                className="p-6 bg-white dark:bg-[#18262a] rounded-2xl border border-[#c8962e]/20 dark:border-[#e0b050]/15 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-[#c8962e]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-[#1e292d]/80 dark:text-[#ece6d8]/80 leading-relaxed italic">
                    "{rev.text}"
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#c8962e]/20 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-[#0f5c7a] dark:text-[#ece6d8] block">
                      {rev.author}
                    </span>
                    <span className="text-[#1e292d]/60 dark:text-[#ece6d8]/60">
                      {rev.role} · {rev.city}
                    </span>
                  </div>
                  <span className="text-[#1e292d]/50 dark:text-[#ece6d8]/50">
                    {rev.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
