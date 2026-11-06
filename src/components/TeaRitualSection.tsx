import React, { useState } from 'react';
import { TEA_CEREMONY_STEPS } from '../data/menuData';
import { RotateCw, CheckCircle2, Sparkles, Info } from 'lucide-react';

export const TeaRitualSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [isPouring, setIsPouring] = useState<boolean>(false);

  const handlePour = (targetStep: number) => {
    setIsPouring(true);
    setTimeout(() => {
      setActiveStep(targetStep);
      setIsPouring(false);
    }, 450);
  };

  const currentStepData = TEA_CEREMONY_STEPS.find((s) => s.step === activeStep) || TEA_CEREMONY_STEPS[0];

  return (
    <section id="choy-marosimi" className="py-16 sm:py-20 bg-white/60 dark:bg-[#142125]/60 border-b border-[#c8962e]/20 dark:border-[#e0b050]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0f5c7a] dark:text-[#4fb3c9] uppercase">
            <span>Milliy an'ana</span>
            <span aria-hidden="true">·</span>
            <span>Choyxona madaniyati</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-[#0f5c7a] dark:text-[#ece6d8] mt-2">
            Choy Quyish Marosimi: «Loy, Moy, Choy»
          </h2>
          <p className="text-base text-[#1e292d]/80 dark:text-[#ece6d8]/80 mt-3 leading-relaxed">
            O'zbek xalqida choy damlangach, mehmonga uzatishdan avval uch bor piyolaga quyilib, yana choynakka qaytariladi.
            Bu shunchaki odat emas — choyning barcha ta'mi va shifobaxsh iforini ochib beruvchi qadimiy sirdir.
          </p>
        </div>

        {/* Interactive Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Visual Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="bg-[#f7f4ed] dark:bg-[#18262a] p-6 sm:p-8 rounded-2xl border border-[#c8962e]/30 dark:border-[#e0b050]/20 shadow-md">
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] mb-6">
                <img
                  src="/src/assets/images/dish_uzbek_tea_set_1793963462039.jpg"
                  alt="Choy damlash marosimi va paxta gulli piyolalar"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 text-white text-xs flex justify-between items-center">
                  <span className="font-medium">Paxta gulli choynak & piyola</span>
                  <span className="text-[#e0b050]">Samarqand uslubi</span>
                </div>
              </div>

              {/* Status Indicator */}
              <div className="flex items-center justify-between p-3.5 bg-white dark:bg-[#10191c] rounded-xl border border-[#c8962e]/20 dark:border-[#e0b050]/20">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                    activeStep === 3 
                      ? 'bg-emerald-600 text-white' 
                      : 'bg-[#c8962e] text-[#10191c]'
                  }`}>
                    {activeStep}
                  </div>
                  <div>
                    <div className="text-xs text-[#1e292d]/60 dark:text-[#ece6d8]/60">Hozirgi holat:</div>
                    <div className="text-sm font-bold text-[#0f5c7a] dark:text-[#4fb3c9]">
                      {activeStep === 1 && "1-bosqich: «Loy» (Uyg'onish)"}
                      {activeStep === 2 && "2-bosqich: «Moy» (Ifor taralishi)"}
                      {activeStep === 3 && "3-bosqich: «Choy!» (Yetilgan va tayyor)"}
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  disabled={isPouring}
                  onClick={() => handlePour(activeStep === 3 ? 1 : activeStep + 1)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-[#0f5c7a] hover:bg-[#1b9aaa] dark:bg-[#4fb3c9] dark:text-[#10191c] rounded-lg transition-transform active:scale-95 disabled:opacity-50"
                >
                  <RotateCw className={`w-3.5 h-3.5 ${isPouring ? 'animate-spin' : ''}`} />
                  <span>{activeStep === 3 ? "Boshidan boshlash" : "Qaytarish"}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Explanation & Steps Tabs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Step Selection Buttons */}
            <div className="grid grid-cols-3 gap-2 p-1.5 bg-[#f7f4ed] dark:bg-[#18262a] rounded-xl border border-[#c8962e]/20 dark:border-[#e0b050]/20">
              {TEA_CEREMONY_STEPS.map((s) => {
                const isActive = activeStep === s.step;
                return (
                  <button
                    key={s.step}
                    type="button"
                    onClick={() => handlePour(s.step)}
                    className={`py-3 px-3 text-center rounded-lg transition-all ${
                      isActive
                        ? 'bg-[#0f5c7a] text-white shadow-sm font-semibold'
                        : 'text-[#1e292d]/70 dark:text-[#ece6d8]/70 hover:text-[#0f5c7a] dark:hover:text-[#4fb3c9]'
                    }`}
                  >
                    <div className="text-xs uppercase tracking-wider opacity-80">
                      {s.step}-qaytarish
                    </div>
                    <div className="text-sm sm:text-base font-bold font-serif-display mt-0.5">
                      {s.name}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Step Detail Card */}
            <div className="bg-[#f7f4ed]/70 dark:bg-[#18262a]/70 p-6 sm:p-7 rounded-2xl border border-[#c8962e]/25 dark:border-[#e0b050]/20 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-serif-display text-xl sm:text-2xl font-bold text-[#0f5c7a] dark:text-[#4fb3c9]">
                  «{currentStepData.name}» — {currentStepData.summary}
                </span>
                {activeStep === 3 && (
                  <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/60 px-2.5 py-1 rounded-full">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Tayyor</span>
                  </span>
                )}
              </div>

              <p className="text-base text-[#1e292d]/80 dark:text-[#ece6d8]/80 leading-relaxed">
                {currentStepData.desc}
              </p>

              <div className="p-4 bg-white/80 dark:bg-[#10191c]/80 rounded-xl border border-[#c8962e]/20 dark:border-[#e0b050]/20 flex items-start gap-3 text-sm text-[#1e292d]/85 dark:text-[#ece6d8]/85">
                <Sparkles className="w-4 h-4 text-[#c8962e] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#0f5c7a] dark:text-[#4fb3c9]">Choyxona siri: </span>
                  {currentStepData.tip}
                </div>
              </div>
            </div>

            {/* Cultural Wisdom callout */}
            <div className="p-4 rounded-xl border border-[#1b9aaa]/30 bg-[#1b9aaa]/5 dark:bg-[#1b9aaa]/10 flex items-start gap-3">
              <Info className="w-5 h-5 text-[#1b9aaa] shrink-0 mt-0.5" />
              <div className="text-sm text-[#1e292d]/85 dark:text-[#ece6d8]/85 leading-relaxed">
                <strong className="text-[#0f5c7a] dark:text-[#4fb3c9]">Nega piyola to'ldirilmaydi?</strong> O'zbek dasturxonida mehmonga choy doim piyolaning yarmigacha quyiladi. Bu unga cheksiz ehtirom belgisi bo'lib, choy sovib qolmasligini va mezbon mehmonga doimo yangi issiq choy quyib, suhbatni uzmasligini bildiradi.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
