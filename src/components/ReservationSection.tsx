import React, { useState } from 'react';
import { Reservation } from '../types';
import { Calendar, Clock, Users, MapPin, CheckCircle, Ticket, X } from 'lucide-react';

export const ReservationSection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [time, setTime] = useState('18:30');
  const [guestsCount, setGuestsCount] = useState('4 kishi');
  const [seatingArea, setSeatingArea] = useState<'tapchan' | 'hall' | 'samovar' | 'vip'>('tapchan');
  const [specialRequests, setSpecialRequests] = useState('');
  const [activeReservation, setActiveReservation] = useState<Reservation | null>(null);
  const [savedReservations, setSavedReservations] = useState<Reservation[]>([]);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const newRes: Reservation = {
      id: 'REG-' + Math.floor(1000 + Math.random() * 9000),
      guestName: name.trim(),
      phoneNumber: phone.trim() || '+998 90 000-00-00',
      date,
      time,
      guestsCount,
      seatingArea,
      specialRequests: specialRequests.trim() || undefined,
      status: 'tasdiqlandi',
      createdAt: new Date().toLocaleDateString('uz-UZ'),
    };

    setActiveReservation(newRes);
    setSavedReservations((prev) => [newRes, ...prev]);

    // Reset inputs
    setName('');
    setPhone('');
    setSpecialRequests('');
  };

  const getSeatingLabel = (area: string) => {
    switch (area) {
      case 'tapchan':
        return "An'anaviy Tapchan (hovlida)";
      case 'hall':
        return "Sharqona ichki zal (gilamli)";
      case 'samovar':
        return "Samovarlar maydonidagi so'ri";
      case 'vip':
        return "VIP oilaviy xona";
      default:
        return area;
    }
  };

  const handleCancelReservation = (id: string) => {
    setSavedReservations((prev) => prev.filter((r) => r.id !== id));
    if (activeReservation?.id === id) {
      setActiveReservation(null);
    }
  };

  return (
    <section id="band" className="py-16 sm:py-24 border-b border-[#c8962e]/20 dark:border-[#e0b050]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Context & Atmosphere info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0f5c7a] dark:text-[#4fb3c9] uppercase">
              <span>Joy band qilish</span>
              <span aria-hidden="true">·</span>
              <span>Kafolatlangan stol</span>
            </div>

            <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-[#0f5c7a] dark:text-[#ece6d8]">
              Choyxonada Stol Band Qilish
            </h2>

            <p className="text-base text-[#1e292d]/80 dark:text-[#ece6d8]/80 leading-relaxed">
              Katta oilaviy tadbirlar, do'stlar diydori yoki sokin choyxo'rlik uchun o'zingizga qulay joyni oldindan buyurtma qiling.
              Samarqandcha mehmondo'stlik bilan dasturxon tayyorlab turamiz.
            </p>

            {/* Tapchan Features */}
            <div className="space-y-3.5 pt-2">
              <div className="p-4 bg-white/70 dark:bg-[#18262a]/70 rounded-xl border border-[#c8962e]/25 flex items-start gap-3">
                <Users className="w-5 h-5 text-[#c8962e] shrink-0 mt-0.5" />
                <div className="text-sm">
                  <strong className="text-[#0f5c7a] dark:text-[#4fb3c9]">Hovli tapchanlari: </strong>
                  Xontaxta atrofida yumshoq ko'rpachalar, suzaniy yostiqlar va ochiq osmon ostidagi salqin shabboda.
                </div>
              </div>

              <div className="p-4 bg-white/70 dark:bg-[#18262a]/70 rounded-xl border border-[#c8962e]/25 flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#c8962e] shrink-0 mt-0.5" />
                <div className="text-sm">
                  <strong className="text-[#0f5c7a] dark:text-[#4fb3c9]">Vaqt chegarasisiz rohat: </strong>
                  Stol band qilingach, belgilangan vaqtdan 30 daqiqa davomida siz uchun saqlanadi.
                </div>
              </div>
            </div>

            {/* Active reservations card list if any exist */}
            {savedReservations.length > 0 && (
              <div className="pt-4 space-y-3">
                <div className="text-xs font-bold text-[#0f5c7a] dark:text-[#4fb3c9] uppercase tracking-wider">
                  Sizning faol bandlovlaringiz ({savedReservations.length})
                </div>
                {savedReservations.map((r) => (
                  <div
                    key={r.id}
                    className="p-3.5 bg-white dark:bg-[#10191c] rounded-xl border border-emerald-600/30 dark:border-emerald-500/30 flex items-center justify-between text-xs"
                  >
                    <div>
                      <div className="font-bold text-sm text-[#0f5c7a] dark:text-[#ece6d8] flex items-center gap-1.5">
                        <Ticket className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                        <span>{r.id} — {r.guestName}</span>
                      </div>
                      <div className="text-[#1e292d]/70 dark:text-[#ece6d8]/70 mt-0.5">
                        {r.date} · {r.time} · {r.guestsCount} · {getSeatingLabel(r.seatingArea)}
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCancelReservation(r.id)}
                      className="p-1 text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-950/40 rounded transition-colors"
                      title="Bekor qilish"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Reservation Form & Instant Confirmation */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-[#18262a] p-6 sm:p-8 rounded-2xl border border-[#c8962e]/30 dark:border-[#e0b050]/20 shadow-sm relative">
              {activeReservation ? (
                /* Instant Confirmation Card */
                <div className="space-y-6 py-2">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                      <CheckCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs uppercase font-bold text-emerald-600 dark:text-emerald-400">
                        Bandlov tasdiqlandi
                      </span>
                      <h3 className="font-serif-display text-2xl font-bold text-[#0f5c7a] dark:text-[#ece6d8]">
                        Dasturxonimizga xush kelibsiz!
                      </h3>
                    </div>
                  </div>

                  <p id="msg" role="status" className="text-base text-[#1e292d]/85 dark:text-[#ece6d8]/85 leading-relaxed bg-[#f7f4ed] dark:bg-[#10191c] p-4 rounded-xl border border-[#c8962e]/25">
                    Rahmat, <strong className="text-[#0f5c7a] dark:text-[#4fb3c9]">{activeReservation.guestName}</strong>!{' '}
                    <span className="font-semibold">{activeReservation.date}</span> kuni soat{' '}
                    <span className="font-semibold">{activeReservation.time}</span> ga{' '}
                    <strong className="text-[#0f5c7a] dark:text-[#4fb3c9]">{activeReservation.guestsCount}</strong>ga{' '}
                    ({getSeatingLabel(activeReservation.seatingArea)}) stol muvaffaqiyatli band qilindi.
                  </p>

                  <div className="grid grid-cols-2 gap-3 text-xs bg-white dark:bg-[#142125] p-4 rounded-xl border border-dashed border-[#c8962e]/30">
                    <div>
                      <span className="text-[#1e292d]/60 dark:text-[#ece6d8]/60">Chipta raqami:</span>
                      <div className="font-mono font-bold text-sm text-[#0f5c7a] dark:text-[#4fb3c9]">
                        {activeReservation.id}
                      </div>
                    </div>
                    <div>
                      <span className="text-[#1e292d]/60 dark:text-[#ece6d8]/60">Telefon:</span>
                      <div className="font-bold text-sm text-[#1e292d] dark:text-[#ece6d8]">
                        {activeReservation.phoneNumber}
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setActiveReservation(null)}
                    className="w-full py-3 text-sm font-semibold text-white bg-[#0f5c7a] hover:bg-[#1b9aaa] dark:bg-[#4fb3c9] dark:text-[#10191c] rounded-lg transition-colors"
                  >
                    Yana boshqa stol band qilish
                  </button>
                </div>
              ) : (
                /* The Booking Form */
                <form id="f" onSubmit={handleBookingSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#0f5c7a] dark:text-[#4fb3c9] uppercase tracking-wider mb-1.5">
                        Ismingiz *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Masalan: Jamshid Aliyev"
                        className="w-full px-3.5 py-2.5 text-sm bg-[#f7f4ed] dark:bg-[#10191c] border border-[#c8962e]/30 dark:border-[#e0b050]/25 rounded-lg text-[#1e292d] dark:text-[#ece6d8] focus:ring-2 focus:ring-[#0f5c7a] dark:focus:ring-[#4fb3c9] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#0f5c7a] dark:text-[#4fb3c9] uppercase tracking-wider mb-1.5">
                        Telefon raqamingiz *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+998 90 123-45-67"
                        className="w-full px-3.5 py-2.5 text-sm bg-[#f7f4ed] dark:bg-[#10191c] border border-[#c8962e]/30 dark:border-[#e0b050]/25 rounded-lg text-[#1e292d] dark:text-[#ece6d8] focus:ring-2 focus:ring-[#0f5c7a] dark:focus:ring-[#4fb3c9] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#0f5c7a] dark:text-[#4fb3c9] uppercase tracking-wider mb-1.5">
                        Tashrif sanasi *
                      </label>
                      <input
                        id="date"
                        type="date"
                        required
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm bg-[#f7f4ed] dark:bg-[#10191c] border border-[#c8962e]/30 dark:border-[#e0b050]/25 rounded-lg text-[#1e292d] dark:text-[#ece6d8] focus:ring-2 focus:ring-[#0f5c7a] dark:focus:ring-[#4fb3c9] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#0f5c7a] dark:text-[#4fb3c9] uppercase tracking-wider mb-1.5">
                        Soat *
                      </label>
                      <select
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm bg-[#f7f4ed] dark:bg-[#10191c] border border-[#c8962e]/30 dark:border-[#e0b050]/25 rounded-lg text-[#1e292d] dark:text-[#ece6d8] focus:ring-2 focus:ring-[#0f5c7a] dark:focus:ring-[#4fb3c9] focus:outline-none"
                      >
                        <option value="11:30">11:30 (Tushlik)</option>
                        <option value="12:30">12:30 (Palov vaqti)</option>
                        <option value="13:30">13:30 (Tushlik)</option>
                        <option value="17:00">17:00 (Kechki choy)</option>
                        <option value="18:30">18:30 (Kechki ovqat)</option>
                        <option value="19:30">19:30 (Kechki ovqat)</option>
                        <option value="20:30">20:30 (Samimiy suhbat)</option>
                        <option value="21:30">21:30</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#0f5c7a] dark:text-[#4fb3c9] uppercase tracking-wider mb-1.5">
                        Mehmonlar soni *
                      </label>
                      <select
                        id="ppl"
                        value={guestsCount}
                        onChange={(e) => setGuestsCount(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm bg-[#f7f4ed] dark:bg-[#10191c] border border-[#c8962e]/30 dark:border-[#e0b050]/25 rounded-lg text-[#1e292d] dark:text-[#ece6d8] focus:ring-2 focus:ring-[#0f5c7a] dark:focus:ring-[#4fb3c9] focus:outline-none"
                      >
                        <option value="2 kishi">2 kishi</option>
                        <option value="4 kishi">4 kishi</option>
                        <option value="6 kishi">6 kishi</option>
                        <option value="8 kishi">8 kishi</option>
                        <option value="10 kishi">10 kishi</option>
                        <option value="12+ kishi (Katta davra)">12+ kishi (Katta davra)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0f5c7a] dark:text-[#4fb3c9] uppercase tracking-wider mb-1.5">
                      Joylashuv va hudud tanlash *
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {[
                        { id: 'tapchan', label: 'Tapchan (Hovli)' },
                        { id: 'hall', label: 'Sharqona zal' },
                        { id: 'samovar', label: 'Samovar yonida' },
                        { id: 'vip', label: 'VIP Xona' },
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setSeatingArea(item.id as any)}
                          className={`py-2 px-3 text-xs font-semibold rounded-lg text-center transition-all ${
                            seatingArea === item.id
                              ? 'bg-[#0f5c7a] text-white shadow-sm dark:bg-[#4fb3c9] dark:text-[#10191c]'
                              : 'bg-[#f7f4ed] dark:bg-[#10191c] text-[#1e292d]/80 dark:text-[#ece6d8]/80 border border-[#c8962e]/30'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0f5c7a] dark:text-[#4fb3c9] uppercase tracking-wider mb-1.5">
                      Qo'shimcha istaklar (ixtiyoriy)
                    </label>
                    <input
                      type="text"
                      value={specialRequests}
                      onChange={(e) => setSpecialRequests(e.target.value)}
                      placeholder="Masalan: Bolalar uchun xontaxta, deraza yonidagi so'ri..."
                      className="w-full px-3.5 py-2.5 text-sm bg-[#f7f4ed] dark:bg-[#10191c] border border-[#c8962e]/30 dark:border-[#e0b050]/25 rounded-lg text-[#1e292d] dark:text-[#ece6d8] focus:ring-2 focus:ring-[#0f5c7a] dark:focus:ring-[#4fb3c9] focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 text-base font-semibold text-white bg-[#0f5c7a] hover:bg-[#1b9aaa] dark:bg-[#4fb3c9] dark:hover:bg-[#2fb7c6] dark:text-[#10191c] rounded-lg shadow-sm transition-colors cursor-pointer"
                  >
                    Stol band qilish
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
