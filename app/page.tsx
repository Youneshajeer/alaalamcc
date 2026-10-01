'use client';

import React, { useState, useEffect } from 'react';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WhyUs from '@/components/WhyUs';
import HowItWorks from '@/components/HowItWorks';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // البدء بإخفاء الشاشة تدريجياً بعد 2 ثانية
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2000);

    // إزالة شاشة التحميل بالكامل من الـ DOM بعد انتهاء حركة الاختفاء (2.5 ثانية)
    const removeTimer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans dir-rtl" dir="rtl">
      {/* شاشة التحميل التفاعلية (Preloader / Splash Screen) */}
      {loading && (
        <div
          className={`fixed inset-0 z-100 flex flex-col items-center justify-center bg-slate-100 transition-opacity duration-500 ${
            fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        >
          <div className="relative flex flex-col items-center gap-6">
            {/* الشعار مع تأثير وميض ونبض ناعم */}
            <div className="relative group">
              <div className="absolute -inset-4 rounded-full bg-emerald-500/20 blur-xl animate-pulse"></div>
              <img
                src="/images/logo.png"
                alt="حلول العالم Alaalam Solutions"
                className="h-20 sm:h-28 w-auto object-contain relative z-10 animate-bounce"
              />
            </div>

            {/* اسم الشركة والوسم */}
            <div className="text-center space-y-2">
              <h2 className="text-lg sm:text-xl font-bold text-gold tracking-wide">
                شركة حلول العالم للاتصالات وتقنية المعلومات
              </h2>
              <div className="flex items-center justify-center gap-2 text-xs text-emerald-400 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span>جاري تحميل ...</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* محتوى الصفحة الرئيسي */}
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <HowItWorks />
      </main>
    </div>
  );
}