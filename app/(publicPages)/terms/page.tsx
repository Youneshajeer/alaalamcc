'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ar from '@/i18n/ar.json';
import en from '@/i18n/en.json';

const dictionaries = { ar, en };

export default function TermsPage() {
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

  const t = dictionaries[lang].terms;

  return (
    <div className={`min-h-screen flex flex-col justify-between bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300 ${lang === 'ar' ? 'dir-rtl' : 'dir-ltr'}`} dir={lang === 'ar' ? 'rtl' : 'ltr'}>

      <main className="grow py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full space-y-12">
        
        <div className={`space-y-4 text-center sm:${lang === 'ar' ? 'text-right' : 'text-left'}`}>
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-50 dark:bg-slate-900 border border-emerald-200/80 dark:border-emerald-500/30 text-emerald-800 dark:text-emerald-300 text-xs sm:text-sm font-bold shadow-sm mx-auto sm:mx-0">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
            <span>{t.eyebrow}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            {t.title}
          </h1>

          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
            {t.lastUpdated}
          </p>
        </div>

        <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 shadow-sm">
          <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
            {t.intro}
          </p>
        </div>

        <div className="space-y-8">
          {t.sections.map((section, idx) => (
            <div key={idx} className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                {section.title}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}
        </div>

      </main>

    </div>
  );
}