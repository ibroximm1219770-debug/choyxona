import React, { useState } from 'react';
import { MenuItem, OrderSubmission } from '../types';
import { FORMAT_SUM } from '../data/menuData';
import { X, Trash2, Plus, Minus, CheckCircle, Utensils, Bike, ShoppingBag } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: Record<string, { item: MenuItem; quantity: number }>;
  onAddToCart: (item: MenuItem) => void;
  onRemoveFromCart: (itemId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onAddToCart,
  onRemoveFromCart,
  onClearCart,
}) => {
  const [orderType, setOrderType] = useState<'dine_in' | 'takeaway'>('dine_in');
  const [customerName, setCustomerName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [tableNumber, setTableNumber] = useState('Tapchan №4');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [orderNotes, setOrderNotes] = useState('');
  const [confirmedOrder, setConfirmedOrder] = useState<OrderSubmission | null>(null);

  if (!isOpen) return null;

  const cartItems = Object.values(cart);
  const itemsSubtotal = cartItems.reduce(
    (sum, entry) => sum + entry.item.price * entry.quantity,
    0
  );
  // Traditional teahouse service fee 10%
  const serviceFee = Math.round(itemsSubtotal * 0.1);
  const totalAmount = itemsSubtotal + serviceFee;

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (cartItems.length === 0) return;

    const newOrder: OrderSubmission = {
      id: 'CR-' + Math.floor(100000 + Math.random() * 900000),
      orderType,
      customerName: customerName.trim() || 'Hurmatli Mehmon',
      phoneNumber: phoneNumber.trim() || '+998 90 123-45-67',
      tableNumber: orderType === 'dine_in' ? tableNumber : undefined,
      deliveryAddress: orderType === 'takeaway' ? deliveryAddress : undefined,
      items: cartItems,
      totalAmount,
      notes: orderNotes.trim() || undefined,
      createdAt: new Date().toLocaleTimeString('uz-UZ', { hour: '2-digit', minute: '2-digit' }),
    };

    setConfirmedOrder(newOrder);
  };

  const handleFinish = () => {
    setConfirmedOrder(null);
    onClearCart();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm flex justify-end transition-opacity">
      <div className="w-full max-w-lg bg-[#f7f4ed] dark:bg-[#18262a] h-full shadow-2xl flex flex-col justify-between border-l border-[#c8962e]/30 dark:border-[#e0b050]/20">
        {/* Drawer Header */}
        <div className="p-5 sm:p-6 border-b border-[#c8962e]/25 dark:border-[#e0b050]/20 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="w-5 h-5 text-[#0f5c7a] dark:text-[#4fb3c9]" />
            <h3 className="font-serif-display text-xl font-bold text-[#0f5c7a] dark:text-[#ece6d8]">
              Buyurtma Dasturxoni
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#1e292d]/60 dark:text-[#ece6d8]/60 hover:text-[#0f5c7a] dark:hover:text-[#4fb3c9] hover:bg-black/5 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content area */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6">
          {confirmedOrder ? (
            /* Order Confirmation Receipt Screen */
            <div className="space-y-6 py-4">
              <div className="text-center space-y-2">
                <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h4 className="font-serif-display text-2xl font-bold text-[#0f5c7a] dark:text-[#ece6d8]">
                  Buyurtmangiz Qabul Qilindi!
                </h4>
                <p className="text-sm text-[#1e292d]/70 dark:text-[#ece6d8]/70">
                  Rahmat, <span className="font-semibold text-[#0f5c7a] dark:text-[#4fb3c9]">{confirmedOrder.customerName}</span>! Oshpazimiz taomlarni tayyorlashga kirishdi.
                </p>
              </div>

              {/* Receipt Box */}
              <div className="p-4 bg-white dark:bg-[#10191c] rounded-xl border border-[#c8962e]/30 dark:border-[#e0b050]/20 space-y-3 text-sm">
                <div className="flex justify-between text-xs text-[#1e292d]/60 dark:text-[#ece6d8]/60 border-b border-dashed border-[#c8962e]/30 pb-2">
                  <span>Chek raqami: {confirmedOrder.id}</span>
                  <span>Vaqt: {confirmedOrder.createdAt}</span>
                </div>

                <div className="space-y-1.5">
                  {confirmedOrder.items.map((entry) => (
                    <div key={entry.item.id} className="flex justify-between">
                      <span className="text-[#1e292d] dark:text-[#ece6d8]">
                        {entry.item.name} × {entry.quantity}
                      </span>
                      <span className="font-mono tabular-nums text-[#c8962e] dark:text-[#e0b050]">
                        {FORMAT_SUM(entry.item.price * entry.quantity)}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 border-t border-[#c8962e]/20 space-y-1">
                  <div className="flex justify-between text-xs text-[#1e292d]/70 dark:text-[#ece6d8]/70">
                    <span>Xizmat haqi (10%):</span>
                    <span className="font-mono">{FORMAT_SUM(serviceFee)}</span>
                  </div>
                  <div className="flex justify-between font-bold text-base text-[#0f5c7a] dark:text-[#4fb3c9]">
                    <span>Jami to'lov:</span>
                    <span className="font-mono tabular-nums">{FORMAT_SUM(confirmedOrder.totalAmount)}</span>
                  </div>
                </div>

                <div className="text-xs text-[#1e292d]/60 dark:text-[#ece6d8]/60 bg-[#f7f4ed] dark:bg-[#18262a] p-2.5 rounded-lg">
                  Joylashuv: {confirmedOrder.orderType === 'dine_in' ? confirmedOrder.tableNumber : confirmedOrder.deliveryAddress}
                </div>
              </div>

              <button
                type="button"
                onClick={handleFinish}
                className="w-full py-3 text-sm font-semibold text-white bg-[#0f5c7a] hover:bg-[#1b9aaa] dark:bg-[#4fb3c9] dark:text-[#10191c] rounded-lg transition-colors"
              >
                Tushunarli, yangi buyurtma
              </button>
            </div>
          ) : cartItems.length === 0 ? (
            /* Empty Cart */
            <div className="py-20 text-center space-y-3">
              <ShoppingBag className="w-12 h-12 text-[#c8962e]/40 mx-auto" />
              <p className="text-base font-semibold text-[#1e292d]/70 dark:text-[#ece6d8]/70">
                Savatchangiz bo'sh
              </p>
              <p className="text-sm text-[#1e292d]/50 dark:text-[#ece6d8]/50 max-w-xs mx-auto">
                Menyudan o'zingiz yoqtirgan Samarqand taomlari va xushbo'y choylarni tanlang.
              </p>
            </div>
          ) : (
            /* Cart with Items & Order Form */
            <div className="space-y-6">
              {/* Items List */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-semibold uppercase text-[#1e292d]/60 dark:text-[#ece6d8]/60">
                  <span>Tanlangan taomlar ({cartItems.length})</span>
                  <button
                    type="button"
                    onClick={onClearCart}
                    className="flex items-center gap-1 text-red-600 dark:text-red-400 hover:underline lowercase"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>tozalash</span>
                  </button>
                </div>

                <div className="space-y-2.5">
                  {cartItems.map(({ item, quantity }) => (
                    <div
                      key={item.id}
                      className="p-3 bg-white dark:bg-[#10191c] rounded-xl border border-[#c8962e]/20 dark:border-[#e0b050]/15 flex items-center justify-between gap-3"
                    >
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-bold text-[#0f5c7a] dark:text-[#ece6d8] truncate">
                          {item.name}
                        </div>
                        <div className="text-xs text-[#c8962e] dark:text-[#e0b050] tabular-nums font-semibold">
                          {FORMAT_SUM(item.price)}
                        </div>
                      </div>

                      {/* Quantity Stepper */}
                      <div className="flex items-center gap-2 bg-[#f7f4ed] dark:bg-[#18262a] p-1 rounded-lg border border-[#c8962e]/25">
                        <button
                          type="button"
                          onClick={() => onRemoveFromCart(item.id)}
                          className="p-1 hover:bg-white dark:hover:bg-[#10191c] rounded text-[#0f5c7a] dark:text-[#4fb3c9]"
                          aria-label="Kamaytirish"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="text-xs font-bold w-5 text-center tabular-nums">
                          {quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => onAddToCart(item)}
                          className="p-1 hover:bg-white dark:hover:bg-[#10191c] rounded text-[#0f5c7a] dark:text-[#4fb3c9]"
                          aria-label="Ko'paytirish"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Order Mode Segmented Selector */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-[#0f5c7a] dark:text-[#4fb3c9] uppercase tracking-wider">
                  Xizmat turi
                </label>
                <div className="grid grid-cols-2 gap-2 p-1 bg-white dark:bg-[#10191c] rounded-xl border border-[#c8962e]/25">
                  <button
                    type="button"
                    onClick={() => setOrderType('dine_in')}
                    className={`flex items-center justify-center gap-2 py-2 text-xs font-bold rounded-lg transition-colors ${
                      orderType === 'dine_in'
                        ? 'bg-[#0f5c7a] text-white shadow-sm dark:bg-[#4fb3c9] dark:text-[#10191c]'
                        : 'text-[#1e292d]/70 dark:text-[#ece6d8]/70 hover:text-[#0f5c7a]'
                    }`}
                  >
                    <Utensils className="w-3.5 h-3.5" />
                    <span>Choyxonada (stolga)</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setOrderType('takeaway')}
                    className={`flex items-center justify-center gap-2 py-2 text-xs font-bold rounded-lg transition-colors ${
                      orderType === 'takeaway'
                        ? 'bg-[#0f5c7a] text-white shadow-sm dark:bg-[#4fb3c9] dark:text-[#10191c]'
                        : 'text-[#1e292d]/70 dark:text-[#ece6d8]/70 hover:text-[#0f5c7a]'
                    }`}
                  >
                    <Bike className="w-3.5 h-3.5" />
                    <span>Olib ketish / Yetkazish</span>
                  </button>
                </div>
              </div>

              {/* Order Details Form */}
              <form id="orderForm" onSubmit={handleSubmitOrder} className="space-y-3">
                <div>
                  <label className="text-xs font-semibold text-[#1e292d]/70 dark:text-[#ece6d8]/70">
                    Ismingiz:
                  </label>
                  <input
                    type="text"
                    required
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Masalan: Sardor"
                    className="w-full mt-1 px-3 py-2 text-sm bg-white dark:bg-[#10191c] border border-[#c8962e]/30 rounded-lg text-[#1e292d] dark:text-[#ece6d8] focus:ring-2 focus:ring-[#0f5c7a]"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#1e292d]/70 dark:text-[#ece6d8]/70">
                    Telefon raqam:
                  </label>
                  <input
                    type="tel"
                    required
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="+998 90 123-45-67"
                    className="w-full mt-1 px-3 py-2 text-sm bg-white dark:bg-[#10191c] border border-[#c8962e]/30 rounded-lg text-[#1e292d] dark:text-[#ece6d8] focus:ring-2 focus:ring-[#0f5c7a]"
                  />
                </div>

                {orderType === 'dine_in' ? (
                  <div>
                    <label className="text-xs font-semibold text-[#1e292d]/70 dark:text-[#ece6d8]/70">
                      Tapchan yoki Stol raqami:
                    </label>
                    <select
                      value={tableNumber}
                      onChange={(e) => setTableNumber(e.target.value)}
                      className="w-full mt-1 px-3 py-2 text-sm bg-white dark:bg-[#10191c] border border-[#c8962e]/30 rounded-lg text-[#1e292d] dark:text-[#ece6d8]"
                    >
                      <option value="Hovli — Tapchan №1">Hovli — Tapchan №1</option>
                      <option value="Hovli — Tapchan №4 (Xontaxta)">Hovli — Tapchan №4 (Xontaxta)</option>
                      <option value="Hovli — Tapchan №8">Hovli — Tapchan №8</option>
                      <option value="Ichki zal — Stol №12">Ichki zal — Stol №12</option>
                      <option value="Samovar yonidagi so'ri">Samovar yonidagi so'ri</option>
                      <option value="VIP Xona (Ikat)">VIP Xona (Ikat)</option>
                    </select>
                  </div>
                ) : (
                  <div>
                    <label className="text-xs font-semibold text-[#1e292d]/70 dark:text-[#ece6d8]/70">
                      Yetkazib berish manzili:
                    </label>
                    <input
                      type="text"
                      required
                      value={deliveryAddress}
                      onChange={(e) => setDeliveryAddress(e.target.value)}
                      placeholder="Shahar, ko'cha, uy raqami"
                      className="w-full mt-1 px-3 py-2 text-sm bg-white dark:bg-[#10191c] border border-[#c8962e]/30 rounded-lg text-[#1e292d] dark:text-[#ece6d8]"
                    />
                  </div>
                )}

                <div>
                  <label className="text-xs font-semibold text-[#1e292d]/70 dark:text-[#ece6d8]/70">
                    Oshpazga istaklar (ixtiyoriy):
                  </label>
                  <input
                    type="text"
                    value={orderNotes}
                    onChange={(e) => setOrderNotes(e.target.value)}
                    placeholder="Masalan: Nonni issig'idan bering, palovga kamroq yog'"
                    className="w-full mt-1 px-3 py-2 text-sm bg-white dark:bg-[#10191c] border border-[#c8962e]/30 rounded-lg text-[#1e292d] dark:text-[#ece6d8]"
                  />
                </div>
              </form>
            </div>
          )}
        </div>

        {/* Drawer Footer with Totals and Submit */}
        {!confirmedOrder && cartItems.length > 0 && (
          <div className="p-5 sm:p-6 bg-white dark:bg-[#10191c] border-t border-[#c8962e]/25 dark:border-[#e0b050]/20 space-y-3">
            <div className="space-y-1.5 text-sm">
              <div className="flex justify-between text-[#1e292d]/70 dark:text-[#ece6d8]/70">
                <span>Taomlar jami:</span>
                <span className="font-mono tabular-nums">{FORMAT_SUM(itemsSubtotal)}</span>
              </div>
              <div className="flex justify-between text-[#1e292d]/70 dark:text-[#ece6d8]/70 text-xs">
                <span>Choyxona xizmati (10%):</span>
                <span className="font-mono tabular-nums">{FORMAT_SUM(serviceFee)}</span>
              </div>
              <div className="flex justify-between font-bold text-base text-[#0f5c7a] dark:text-[#4fb3c9] pt-1 border-t border-[#c8962e]/20">
                <span>Jami to'lov:</span>
                <span className="font-mono tabular-nums">{FORMAT_SUM(totalAmount)}</span>
              </div>
            </div>

            <button
              type="submit"
              form="orderForm"
              className="w-full py-3.5 text-sm font-semibold text-white bg-[#0f5c7a] hover:bg-[#1b9aaa] dark:bg-[#4fb3c9] dark:hover:bg-[#2fb7c6] dark:text-[#10191c] rounded-lg shadow-sm transition-colors flex items-center justify-center gap-2"
            >
              <span>Buyurtmani tasdiqlash</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
