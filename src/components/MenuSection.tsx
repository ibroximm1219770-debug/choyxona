import React, { useState, useMemo } from 'react';
import { MenuItem, CategoryType } from '../types';
import { CATEGORIES, MENU_ITEMS, FORMAT_SUM } from '../data/menuData';
import { Search, Plus, Minus, Check, Clock, Eye, Sparkles } from 'lucide-react';

interface MenuSectionProps {
  cart: Record<string, { item: MenuItem; quantity: number }>;
  onAddToCart: (item: MenuItem) => void;
  onRemoveFromCart: (itemId: string) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  cart,
  onAddToCart,
  onRemoveFromCart,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('bosh-taomlar');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItemDetail, setSelectedItemDetail] = useState<MenuItem | null>(null);

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory = item.category === selectedCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.ingredients?.some((ing) => ing.toLowerCase().includes(searchQuery.toLowerCase()));

      if (searchQuery.trim()) {
        return matchesSearch;
      }
      return matchesCategory;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="menu" className="py-16 sm:py-24 border-b border-[#c8962e]/20 dark:border-[#e0b050]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0f5c7a] dark:text-[#4fb3c9] uppercase">
              <span>Choyxona menyusi</span>
              <span aria-hidden="true">·</span>
              <span>Milliy lazzatlar</span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-[#0f5c7a] dark:text-[#ece6d8] mt-1">
              Dasturxon Taomlari
            </h2>
            <p className="text-base text-[#1e292d]/75 dark:text-[#ece6d8]/75 mt-2 max-w-xl">
              Har bir taom Samarqand oshpazlik an'analari, sara go'sht, yangi sabzavotlar va o'tin taftida tayyorlanadi.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#1e292d]/50 dark:text-[#ece6d8]/50 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Taom yoki mahsulot izlash..."
              className="w-full pl-10 pr-4 py-2.5 text-sm bg-white dark:bg-[#18262a] border border-[#c8962e]/30 dark:border-[#e0b050]/30 rounded-lg text-[#1e292d] dark:text-[#ece6d8] placeholder:text-[#1e292d]/40 dark:placeholder:text-[#ece6d8]/40 focus:outline-none focus:ring-2 focus:ring-[#0f5c7a] dark:focus:ring-[#4fb3c9] transition-all"
            />
          </div>
        </div>

        {/* Category Tabs (Interactive segmented buttons) */}
        {!searchQuery && (
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id as CategoryType)}
                  className={`px-4 py-2.5 text-sm font-semibold rounded-lg whitespace-nowrap shrink-0 transition-all ${
                    isActive
                      ? 'bg-[#0f5c7a] text-white shadow-sm dark:bg-[#4fb3c9] dark:text-[#10191c]'
                      : 'bg-white/80 dark:bg-[#18262a] text-[#1e292d]/80 dark:text-[#ece6d8]/80 hover:bg-white dark:hover:bg-[#1f3035] border border-[#c8962e]/25 dark:border-[#e0b050]/20'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        )}

        {/* Search Results notification */}
        {searchQuery && (
          <div className="mb-6 text-sm text-[#1e292d]/70 dark:text-[#ece6d8]/70 flex items-center justify-between">
            <span>
              "{searchQuery}" bo'yicha {filteredItems.length} ta taom topildi
            </span>
            <button
              onClick={() => setSearchQuery('')}
              className="text-xs text-[#0f5c7a] dark:text-[#4fb3c9] hover:underline"
            >
              Qidiruvni tozalash
            </button>
          </div>
        )}

        {/* Menu Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="py-16 text-center bg-white/40 dark:bg-[#18262a]/40 rounded-2xl border border-dashed border-[#c8962e]/30 p-8">
            <p className="text-base text-[#1e292d]/70 dark:text-[#ece6d8]/70">
              Hech qanday taom topilmadi. Qidiruv so'zini o'zgartirib ko'ring.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item) => {
              const cartEntry = cart[item.id];
              const quantity = cartEntry ? cartEntry.quantity : 0;

              return (
                <div
                  key={item.id}
                  className="group bg-white dark:bg-[#18262a] rounded-2xl border border-[#c8962e]/25 dark:border-[#e0b050]/20 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    {/* Image or Patterned Fallback Container */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-[#e8e2d4] dark:bg-[#1f3035]">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#f7f4ed] to-[#e8e2d4] dark:from-[#142125] dark:to-[#1c2e33]">
                          <span className="font-serif-display text-lg font-bold text-[#0f5c7a] dark:text-[#4fb3c9]">
                            {item.name}
                          </span>
                          <span className="text-xs text-[#1e292d]/60 dark:text-[#ece6d8]/60 mt-1">
                            {item.portion || "O'zbek choyxonasi taomi"}
                          </span>
                        </div>
                      )}

                      {/* Quick Details Eye Button */}
                      <button
                        type="button"
                        onClick={() => setSelectedItemDetail(item)}
                        className="absolute top-3 right-3 p-2 bg-black/60 hover:bg-black/80 text-white rounded-lg backdrop-blur-sm transition-colors"
                        title="Tafsilotlarni ko'rish"
                      >
                        <Eye className="w-4 h-4" />
                      </button>

                      {item.isPopular && (
                        <div className="absolute top-3 left-3 bg-[#c8962e] text-[#10191c] text-xs font-bold px-2.5 py-1 rounded-md shadow-sm flex items-center gap-1">
                          <Sparkles className="w-3 h-3" />
                          <span>Tavsiya</span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-5 sm:p-6">
                      <div className="flex items-baseline justify-between gap-2 mb-2">
                        <h3 className="font-serif-display text-lg sm:text-xl font-bold text-[#0f5c7a] dark:text-[#ece6d8]">
                          {item.name}
                        </h3>
                        <span className="text-base font-bold text-[#c8962e] dark:text-[#e0b050] tabular-nums whitespace-nowrap shrink-0">
                          {FORMAT_SUM(item.price)}
                        </span>
                      </div>

                      <p className="text-sm text-[#1e292d]/75 dark:text-[#ece6d8]/75 line-clamp-2 leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Quiet metadata */}
                      <div className="flex items-center gap-2 text-xs text-[#1e292d]/60 dark:text-[#ece6d8]/60 mb-4">
                        {item.portion && <span>{item.portion}</span>}
                        {item.portion && item.preparationTime && <span>·</span>}
                        {item.preparationTime && (
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3 text-[#c8962e]" />
                            {item.preparationTime}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Card Action Footer */}
                  <div className="p-5 pt-0 sm:p-6 sm:pt-0">
                    {quantity === 0 ? (
                      <button
                        type="button"
                        onClick={() => onAddToCart(item)}
                        className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-sm font-semibold text-white bg-[#0f5c7a] hover:bg-[#1b9aaa] dark:bg-[#4fb3c9] dark:hover:bg-[#2fb7c6] dark:text-[#10191c] rounded-lg transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                        <span>Buyurtmaga qo'shish</span>
                      </button>
                    ) : (
                      <div className="flex items-center justify-between gap-3 p-1 bg-[#f7f4ed] dark:bg-[#10191c] rounded-lg border border-[#c8962e]/30">
                        <button
                          type="button"
                          onClick={() => onRemoveFromCart(item.id)}
                          className="p-1.5 hover:bg-white dark:hover:bg-[#18262a] text-[#0f5c7a] dark:text-[#4fb3c9] rounded transition-colors"
                          aria-label="Kamaytirish"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="text-sm font-bold text-[#1e292d] dark:text-[#ece6d8] tabular-nums">
                          {quantity} ta
                        </span>
                        <button
                          type="button"
                          onClick={() => onAddToCart(item)}
                          className="p-1.5 hover:bg-white dark:hover:bg-[#18262a] text-[#0f5c7a] dark:text-[#4fb3c9] rounded transition-colors"
                          aria-label="Ko'paytirish"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Item Detail Modal */}
        {selectedItemDetail && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <div className="bg-[#f7f4ed] dark:bg-[#18262a] w-full max-w-lg rounded-2xl border border-[#c8962e]/30 p-6 sm:p-8 space-y-5 shadow-2xl relative">
              <button
                type="button"
                onClick={() => setSelectedItemDetail(null)}
                className="absolute top-4 right-4 text-[#1e292d]/60 dark:text-[#ece6d8]/60 hover:text-[#0f5c7a] dark:hover:text-[#4fb3c9] text-xl font-bold p-1"
              >
                ✕
              </button>

              {selectedItemDetail.image && (
                <div className="rounded-xl overflow-hidden aspect-[16/9] border border-[#c8962e]/20">
                  <img
                    src={selectedItemDetail.image}
                    alt={selectedItemDetail.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              )}

              <div>
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-serif-display text-2xl font-bold text-[#0f5c7a] dark:text-[#ece6d8]">
                    {selectedItemDetail.name}
                  </h3>
                  <span className="text-lg font-bold text-[#c8962e] dark:text-[#e0b050] tabular-nums">
                    {FORMAT_SUM(selectedItemDetail.price)}
                  </span>
                </div>
                <p className="text-sm text-[#1e292d]/80 dark:text-[#ece6d8]/80 mt-2 leading-relaxed">
                  {selectedItemDetail.description}
                </p>
              </div>

              {selectedItemDetail.ingredients && selectedItemDetail.ingredients.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold text-[#0f5c7a] dark:text-[#4fb3c9] uppercase tracking-wider mb-2">
                    Tarkibi va ziravorlar:
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedItemDetail.ingredients.map((ing, i) => (
                      <span
                        key={i}
                        className="text-xs bg-white dark:bg-[#10191c] border border-[#c8962e]/25 dark:border-[#e0b050]/20 px-2.5 py-1 rounded-md text-[#1e292d]/80 dark:text-[#ece6d8]/80"
                      >
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="pt-3 border-t border-[#c8962e]/20 flex items-center justify-between">
                <span className="text-xs text-[#1e292d]/60 dark:text-[#ece6d8]/60">
                  {selectedItemDetail.portion} · {selectedItemDetail.preparationTime}
                </span>

                <button
                  type="button"
                  onClick={() => {
                    onAddToCart(selectedItemDetail);
                    setSelectedItemDetail(null);
                  }}
                  className="px-5 py-2 text-sm font-semibold text-white bg-[#0f5c7a] hover:bg-[#1b9aaa] dark:bg-[#4fb3c9] dark:text-[#10191c] rounded-lg transition-colors"
                >
                  Buyurtmaga qo'shish
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
