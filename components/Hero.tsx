'use client';

import React, { useState, useEffect } from 'react';
import ar from '@/i18n/ar.json';
import en from '@/i18n/en.json';

const dictionaries = { ar, en };

export default function Hero() {
  const [lang, setLang] = useState<'ar' | 'en'>('ar');

  useEffect(() => {
    const savedLang = (localStorage.getItem('lang') as 'ar' | 'en') || 'ar';
    setLang(savedLang);

    const checkLangInterval = setInterval(() => {
      const currentLang = (localStorage.getItem('lang') as 'ar' | 'en') || 'ar';
      if (currentLang !== lang) {
        setLang(currentLang);
      }
    }, 100);

    return () => clearInterval(checkLangInterval);
  }, [lang]);

  const t = dictionaries[lang].home.hero;
  const cta = dictionaries[lang].common.cta;
  const quickFeatures = dictionaries[lang].home.quickFeatures;

  const points = [
    {
      title: quickFeatures.saudiHosting.title,
      desc: quickFeatures.saudiHosting.description,
      icon: quickFeatures.saudiHosting.icon,
    },
    {
      title: quickFeatures.registered.title,
      desc: quickFeatures.registered.description,
      icon: quickFeatures.registered.icon,
    },
    {
      title: quickFeatures.multichannel.title,
      desc: quickFeatures.multichannel.description,
      icon: quickFeatures.multichannel.icon,
    },
    {
      title: quickFeatures.flexibleCapacity.title,
      desc: quickFeatures.flexibleCapacity.description,
      icon: quickFeatures.flexibleCapacity.icon,
    },
  ];

  return (
    <section 
      id="hero" 
      className={`relative pt-6 pb-16 md:pt-16 md:pb-24 overflow-hidden bg-slate-950 ${lang === 'ar' ? 'dir-rtl' : 'dir-ltr'}`} 
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
    >
      <style>{`
        @keyframes textGlowPulse {
          0%, 100% {
            color: #34d399;
            text-shadow: 0 0 14px rgba(52, 211, 153, 0.8);
          }
          50% {
            color: #059669;
            text-shadow: 0 0 4px rgba(5, 150, 105, 0.3);
          }
        }
        .animate-text-pulse {
          animation: textGlowPulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className={`w-full lg:col-span-7 relative rounded-3xl overflow-hidden p-6 sm:p-10 border border-slate-800 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between ${lang === 'ar' ? 'text-center lg:text-right' : 'text-center lg:text-left'} space-y-6 shadow-2xl`}>
            
            {/* تم زيادة وضوح الصورة الخلفية وتخفيف طبقة التعتيم للحفاظ على نفس التصميم بوضوح أعلى */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
              <img
                src="/images/hero-bg.png"
                alt="خلفية مركز الاتصال"
                className="w-full h-full object-cover object-top opacity-90"
              />
              <div className="absolute inset-0 bg-linear-to-b from-slate-950/50 via-slate-950/30 to-slate-950/80"></div>
            </div>

            <div className="relative z-10 space-y-4">
              <div className="inline-flex items-center gap-2.5 px-4.5 py-2 rounded-full bg-slate-900/90 border border-emerald-500/60 backdrop-blur-md shadow-lg mx-auto lg:mx-0">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
                <span className="text-xs sm:text-sm font-extrabold animate-text-pulse tracking-wide text-emerald-300">
                  {t.eyebrow}
                </span>
              </div>

              <h1 className={`font-black leading-tight ${lang === 'ar' ? 'text-2xl sm:text-3xl lg:text-4xl' : 'text-xl sm:text-2xl lg:text-3xl'}`}>
                <span className="text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                  {t.title}
                </span>
                <br className="hidden sm:inline" />
                <span 
                  className="bg-linear-to-r from-amber-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent inline-block mt-1"
                  style={{
                    WebkitTextStroke: '1px rgba(0, 0, 0, 0.7)',
                    filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.9))'
                  }}
                >
                  {t.titleHighlight}
                </span>
              </h1>
            </div>

            <div className="relative z-10 space-y-6 pt-4 mt-6">
              <p className={`leading-relaxed max-w-2xl mx-auto lg:mx-0 font-bold bg-linear-to-r from-white via-slate-100 to-slate-100 bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] ${lang === 'ar' ? 'text-xs sm:text-sm' : 'text-[11px] sm:text-xs'}`}>
                {t.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <a
                  href="/contact"
                  className="bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold px-8 py-3.5 rounded-xl shadow-lg shadow-emerald-500/25 transition-all text-center active:scale-95 text-sm sm:text-base whitespace-nowrap"
                >
                  {cta.requestDemo}
                </a>
                <a
                  href="#services"
                  className="bg-slate-900/80 hover:bg-slate-900 text-white border border-slate-700 font-semibold px-8 py-3.5 rounded-xl backdrop-blur-md transition-all text-center active:scale-95 shadow-md text-sm sm:text-base whitespace-nowrap"
                >
                  {cta.viewServices}
                </a>
              </div>
            </div>

          </div>

          <div className="w-full lg:col-span-5 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-5 sm:p-7 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 space-y-3.5">
            <h3 className={`text-base sm:text-lg font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2.5 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
              {quickFeatures.title}
            </h3>
            
            <div className="space-y-3">
              {points.map((point, idx) => (
                <div
                  key={idx}
                  className={`flex items-start gap-3 p-3 rounded-2xl bg-emerald-50/90 dark:bg-slate-800/80 border border-emerald-200/80 dark:border-slate-700 text-emerald-950 dark:text-slate-100 transition-all duration-300 hover:bg-sky-500 hover:border-sky-400 hover:text-white hover:scale-[1.02] cursor-pointer group shadow-sm ${lang === 'ar' ? 'text-right' : 'text-left'}`}
                >
                  <span className="text-xl sm:text-2xl p-1.5 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-emerald-100 dark:border-slate-700 group-hover:bg-white/20 group-hover:border-white/30 transition-colors shrink-0">
                    {point.icon}
                  </span>
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-emerald-900 dark:text-white group-hover:text-white transition-colors">
                      {point.title}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-emerald-700/90 dark:text-slate-300 group-hover:text-sky-50 transition-colors mt-0.5 leading-relaxed">
                      {point.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}