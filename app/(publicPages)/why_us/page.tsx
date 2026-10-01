'use client';

import React, { useState, useEffect } from 'react';
import ar from '@/i18n/ar.json';
import en from '@/i18n/en.json';

const dictionaries = { ar, en };

export default function WhyUs() {
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

  const dict = dictionaries[lang];
  const t = dict.whyUs;
  const commonT = dict.common;

  const coreFeatures = [
    {
      id: "security",
      icon: t.advantages.security.icon,
      badge: t.advantages.security.title,
      title: t.advantages.security.heading,
      desc: t.advantages.security.description,
      highlight: t.advantages.security.link
    },
    {
      id: "compliance",
      icon: t.advantages.compliance.icon,
      badge: t.advantages.compliance.title,
      title: t.advantages.compliance.heading,
      desc: t.advantages.compliance.description,
      highlight: t.advantages.compliance.link
    },
    {
      id: "talent",
      icon: t.advantages.saudiTeam.icon,
      badge: t.advantages.saudiTeam.title,
      title: t.advantages.saudiTeam.heading,
      desc: t.advantages.saudiTeam.description,
      highlight: t.advantages.saudiTeam.link
    },
    {
      id: "scalability",
      icon: t.advantages.scalability.icon,
      badge: t.advantages.scalability.title,
      title: t.advantages.scalability.heading,
      desc: t.advantages.scalability.description,
      highlight: t.advantages.scalability.link
    }
  ];

  const enterpriseStats = [
    { number: t.stats.hosting.value, label: t.stats.hosting.label, icon: "🇸🇦" },
    { number: t.stats.availability.value, label: t.stats.availability.label, icon: "⚡" },
    { number: t.stats.commercialRegistration.value, label: t.stats.commercialRegistration.label, icon: "📜" },
    { number: t.stats.monitoring.value, label: t.stats.monitoring.label, icon: "🎧" }
  ];

  return (
    <section 
      id="why-us" 
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
      className={`py-24 bg-white dark:bg-slate-950 text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-300 ${lang === 'ar' ? 'text-right' : 'text-left'}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] bg-size-[24px_24px] opacity-60 pointer-events-none"></div>
      <div className="absolute top-1/4 -right-28 w-125 h-125 bg-emerald-100/40 dark:bg-emerald-900/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 -left-28 w-125 h-125 bg-sky-100/40 dark:bg-sky-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200/80 dark:border-emerald-800/80 text-emerald-800 dark:text-emerald-400 text-xs sm:text-sm font-bold shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            {t.hero.eyebrow}
          </div>

          <h2 className="text-3xl sm:text-5xl font-black leading-tight tracking-tight">
            {t.hero.title} <br />
            <span className="bg-linear-to-r from-amber-500 via-amber-600 to-yellow-600 dark:from-amber-400 dark:to-yellow-400 bg-clip-text text-transparent">
              {t.hero.titleHighlight}
            </span>
          </h2>

          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed font-normal">
            {t.hero.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {coreFeatures.map((feature) => (
            <div
              key={feature.id}
              className="group relative bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-3xl p-8 sm:p-10 transition-all duration-300 hover:shadow-2xl hover:shadow-slate-200/80 dark:hover:shadow-none hover:border-emerald-400/80 flex flex-col justify-between overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-slate-100 dark:bg-slate-800 group-hover:bg-linear-to-r group-hover:from-emerald-400 group-hover:to-amber-400 transition-all duration-500"></div>

              <div className="space-y-6">
                <div className={`flex items-center justify-between ${lang === 'ar' ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 flex items-center justify-center text-3xl shadow-sm group-hover:bg-emerald-500 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                    {feature.icon}
                  </div>
                  <span className="text-xs font-bold px-3.5 py-1.5 rounded-full bg-emerald-50/80 dark:bg-emerald-950/50 border border-emerald-200/60 dark:border-emerald-800/80 text-emerald-800 dark:text-emerald-400">
                    {feature.badge}
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl sm:text-2xl font-bold group-hover:text-emerald-800 dark:group-hover:text-emerald-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>

              <div className={`pt-6 mt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-slate-500 ${lang === 'ar' ? 'flex-row-reverse' : 'flex-row'}`}>
                <span className={`flex items-center gap-2 text-emerald-700 dark:text-emerald-400 ${lang === 'ar' ? 'flex-row-reverse' : 'flex-row'}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  {feature.highlight}
                </span>
                <span className="text-slate-400 group-hover:translate-x-1 transition-transform">
                  {lang === 'ar' ? '←' : '→'}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-slate-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-slate-800 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className={`relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y lg:divide-y-0 ${lang === 'ar' ? 'lg:divide-x lg:divide-x-reverse' : 'lg:divide-x'} divide-slate-800/80`}>
            {enterpriseStats.map((stat, idx) => (
              <div key={idx} className={`${idx !== 0 ? 'pt-6 lg:pt-0' : ''} space-y-2`}>
                <div className="text-2xl sm:text-3xl font-black text-amber-400 flex items-center justify-center gap-2">
                  <span>{stat.number}</span>
                </div>
                <div className="text-xs sm:text-sm text-slate-300 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-linear-to-r from-slate-900 via-slate-900 to-slate-950 border border-slate-800 text-white rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className={`space-y-3 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
            <h3 className="text-2xl sm:text-3xl font-black">
              {t.cta.title}
            </h3>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl">
              {t.cta.description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <a
              href="#contact"
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold px-8 py-4 rounded-xl shadow-lg shadow-emerald-500/25 transition-all text-center text-sm whitespace-nowrap active:scale-95"
            >
              {commonT.cta.startSession}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}