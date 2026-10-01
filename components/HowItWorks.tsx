'use client';

import React, { useState, useEffect } from 'react';

const dictionary = {
  ar: {
    sectionEyebrow: "مراحل الشراكة",
    sectionTitle: "آلية العمل والتشغيل",
    steps: [
      {
        step: "1",
        title: "جلسة تعارف",
        desc: "نفهم طبيعة عملك، حجم المكالمات المتوقع، ومعايير الجودة المطلوبة لتحديد الاحتياجات بدقة."
      },
      {
        step: "2",
        title: "إعداد مخصص",
        desc: "بناء سيناريوهات الاتصال (Scripts)، ربط الأنظمة، وتجهيز الفريق المخصص لحسابك."
      },
      {
        step: "3",
        title: "تشغيل تجريبي",
        desc: "فترة قياس أداء محدودة، مع تقديم تقارير يومية وتعديل مباشر قبل التوسع الكامل."
      },
      {
        step: "4",
        title: "تشغيل وتوسّع",
        desc: "انتقال كامل للتشغيل المباشر، مع رفع التقارير الدورية وزيادة السعة حسب نمو عملك."
      },
    ]
  },
  en: {
    sectionEyebrow: "Partnership Phases",
    sectionTitle: "Work & Operation Mechanism",
    steps: [
      {
        step: "1",
        title: "Introductory Session",
        desc: "We understand your business nature, expected call volume, and quality standards to define requirements precisely."
      },
      {
        step: "2",
        title: "Custom Setup",
        desc: "Building call scripts, system integrations, and preparing the dedicated team for your account."
      },
      {
        step: "3",
        title: "Trial Operation",
        desc: "Limited performance measurement period, providing daily reports and direct adjustments before full expansion."
      },
      {
        step: "4",
        title: "Operation & Expansion",
        desc: "Full transition to live operation, with periodic reports and capacity scaling based on your business growth."
      },
    ]
  }
};

export default function HowItWorks() {
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

  const t = dictionary[lang];

  return (
    <section id="how-it-works" className={`py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300 ${lang === 'ar' ? 'dir-rtl' : 'dir-ltr'}`} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-2">
            {t.sectionEyebrow}
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            {t.sectionTitle}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.steps.map((item) => (
            <div
              key={item.step}
              className={`bg-white dark:bg-slate-950 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden transition-all duration-300 hover:shadow-md ${lang === 'ar' ? 'text-right' : 'text-left'}`}
            >
              <div className="w-10 h-10 rounded-2xl bg-linear-to-tr from-blue-600 to-emerald-500 text-white font-black flex items-center justify-center text-lg mb-4 shadow-sm">
                {item.step}
              </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                {item.title}
              </h4>
              <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}