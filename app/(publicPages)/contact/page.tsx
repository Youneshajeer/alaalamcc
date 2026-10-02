'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ar from '@/i18n/ar.json';
import en from '@/i18n/en.json';

const dictionaries = { ar, en };

export default function ContactPage() {
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

  const t = dictionaries[lang].contactUs;

  return (
    <div className={`min-h-screen flex flex-col justify-between bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300 ${lang === 'ar' ? 'dir-rtl' : 'dir-ltr'}`} dir={lang === 'ar' ? 'rtl' : 'ltr'}>

      <main className="grow py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full space-y-16">
        
        {/* رأس الصفحة */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-50 dark:bg-slate-900 border border-emerald-200/80 dark:border-emerald-500/30 text-emerald-800 dark:text-emerald-300 text-xs sm:text-sm font-bold shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
            <span>{t.eyebrow}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            {t.title}
          </h1>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            {t.description}
          </p>

          <div className="pt-2">
            <span className="inline-block text-xs sm:text-sm text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-4 py-2 rounded-xl border border-emerald-200/60 dark:border-emerald-800/50 font-medium">
              ⚡ {t.speedBadge}
            </span>
          </div>
        </div>

        {/* بطاقات معلومات الاتصال الاحترافية */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* بطاقة معلومات التواصل الأساسية */}
          <div className="bg-slate-50/50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 space-y-6 shadow-sm flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white pb-2 border-b border-slate-200 dark:border-slate-800">
                {t.info.title}
              </h3>

              <div className="space-y-5 text-sm sm:text-base text-slate-600 dark:text-slate-300">
                
                {/* العنوان */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-slate-800 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0 text-lg shadow-sm">
                    📍
                  </div>
                  <div>
                    <strong className="block text-slate-900 dark:text-white mb-0.5">{lang === 'ar' ? 'العنوان' : 'Address'}</strong>
                    <span className="leading-relaxed">{t.info.address}</span>
                  </div>
                </div>

                {/* الهواتف */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-slate-800 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0 text-lg shadow-sm">
                    📞
                  </div>
                  <div>
                    <strong className="block text-slate-900 dark:text-white mb-0.5">{lang === 'ar' ? 'الهاتف' : 'Phone'}</strong>
                    <div className="flex flex-col gap-1 font-medium dir-ltr text-right">
                      <a href={`tel:${t.info.phone1}`} className="hover:text-emerald-600 transition-colors">
                        {t.info.phone1}
                      </a>
                      <a href={`tel:${t.info.phone2}`} className="hover:text-emerald-600 transition-colors">
                        {t.info.phone2}
                      </a>
                    </div>
                  </div>
                </div>

                {/* البريد العام */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-slate-800 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0 text-lg shadow-sm">
                    ✉️️
                  </div>
                  <div>
                    <strong className="block text-slate-900 dark:text-white mb-0.5">{t.info.generalEmailTitle}</strong>
                    <a href={`mailto:${t.info.generalEmailVal}`} className="hover:text-emerald-600 transition-colors font-medium">
                      {t.info.generalEmailVal}
                    </a>
                  </div>
                </div>

                {/* المبيعات */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-slate-800 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0 text-lg shadow-sm">
                    💼
                  </div>
                  <div>
                    <strong className="block text-slate-900 dark:text-white mb-0.5">{t.info.salesEmailTitle}</strong>
                    <a href={`mailto:${t.info.salesEmailVal}`} className="hover:text-emerald-600 transition-colors font-medium">
                      {t.info.salesEmailVal}
                    </a>
                  </div>
                </div>

                {/* الدعم الفني */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-slate-800 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0 text-lg shadow-sm">
                    🛠️
                  </div>
                  <div>
                    <strong className="block text-slate-900 dark:text-white mb-0.5">{t.info.supportEmailTitle}</strong>
                    <a href={`mailto:${t.info.supportEmailVal}`} className="hover:text-emerald-600 transition-colors font-medium">
                      {t.info.supportEmailVal}
                    </a>
                  </div>
                </div>

              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-emerald-700 dark:text-emerald-400 font-semibold">
              🕒 {t.info.hours}
            </div>
          </div>

          {/* بطاقة الدعم والالتزام التشغيلي */}
          <div className="bg-emerald-900 text-white rounded-3xl p-8 space-y-6 shadow-md flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-emerald-800/40 rounded-full blur-2xl pointer-events-none"></div>

            <div className="space-y-6 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-emerald-800 flex items-center justify-center text-2xl shadow-inner">
                🛡️
              </div>
              <h3 className="text-xl font-bold tracking-tight">
                {lang === 'ar' ? 'التزام مؤسسي ودعم 24/7' : 'Institutional Commitment & 24/7 Support'}
              </h3>
              <p className="text-sm sm:text-base text-emerald-100 leading-relaxed font-normal">
                {t.info.supportNote}
              </p>
            </div>

            <div className="pt-6 border-t border-emerald-800/80 relative z-10 flex items-center justify-between text-xs sm:text-sm text-emerald-200">
              <span>{lang === 'ar' ? 'حلول العالم للاتصالات وتقنية المعلومات' : 'World Business Solutions'}</span>
              <span className="font-bold">alaalamcc.com</span>
            </div>
          </div>

        </div>

      </main>

      <Footer />
    </div>
  );
}