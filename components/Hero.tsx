'use client';

import React from 'react';

export default function Hero() {
  const points = [
    {
      title: "استضافة داخل السعودية",
      desc: "بنية سحابية موثوقة بمنطقة الرياض",
      icon: "🇸🇦",
    },
    {
      title: "تسجيل نظامي",
      desc: "مسجّلون لدى الجهة المختصة بخدمات مراكز الاتصال",
      icon: "📜",
    },
    {
      title: "قنوات متعددة",
      desc: "هاتف، واتساب، بريد إلكتروني، ودردشة حية",
      icon: "💬",
    },
    {
      title: "سعة مرنة",
      desc: "من فريق عمل صغير إلى فِرَق موسّعة حسب الحاجة",
      icon: "📈",
    },
  ];

  return (
    <section id="hero" className="relative pt-8 pb-16 md:pt-16 md:pb-28 overflow-hidden bg-slate-950">
      
      {/* نمط الحركة للوميض المتكرر */}
      <style>{`
        @keyframes textGlowPulse {
          0%, 100% {
            color: #4ade80;
            text-shadow: 0 0 12px rgba(74, 222, 128, 0.6);
          }
          50% {
            color: #15803d;
            text-shadow: 0 0 2px rgba(21, 128, 61, 0.2);
          }
        }
        .animate-text-pulse {
          animation: textGlowPulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>

      {/* 1. خلفية الصورة مع تحكم كامل بالشفافية والتدرجات لتجنب أي حجب مزعج */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/images/hero-bg.png"
          alt="خلفية مركز الاتصال"
          className="w-full h-full object-cover object-center opacity-65"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/30"></div>
      </div>

      {/* 2. عناصر التوهج الخفيفة */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 -left-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* 3. محتوى الهيرو الأساسي */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* استخدام flex-col لضمان تسلسل العناصر عمودياً على الموبايل (النصوص أولاً ثم الميزات تحتها بمسافة آمنة) */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* العمود الأيمن للنصوص */}
          <div className="lg:col-span-7 flex flex-col justify-between text-center lg:text-right py-2 space-y-6">
            
            {/* الجزء العلوي: الوسم والعنوان الرئيسي */}
            <div className="space-y-4">
              
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-950/50 border border-emerald-500/30 backdrop-blur-md shadow-sm mx-auto lg:mx-0">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
                <span className="text-xs sm:text-sm font-extrabold animate-text-pulse tracking-wide">
                  مركز اتصال ومقر لخدمات الأعمال (BPO Call Center)
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight drop-shadow-md">
                نُشغّل خط التواصل مع عملائك، <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent drop-shadow-lg">
                  وأنت تركّز على نمو عملك
                </span>
              </h1>
            </div>

            {/* الجزء السفلي: الفقرة التوضيحية والأزرار */}
            <div className="space-y-5">
              <p className="text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium text-slate-100 drop-shadow-md">
                حلول العالم للاتصالات وتقنية المعلومات تبني وتُشغّل مراكز اتصال مخصصة للشركات في السعودية — استقبال، مبيعات هاتفية، دعم فني، وقنوات تواصل مكتوبة، على بنية تحتية مستضافة داخل المملكة.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#contact"
                  className="bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold px-8 py-3.5 rounded-xl shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/35 transition-all text-center active:scale-95"
                >
                  اطلب عرض تجريبي
                </a>
                <a
                  href="#services"
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/30 font-semibold px-8 py-3.5 rounded-xl backdrop-blur-md transition-all text-center active:scale-95 shadow-md"
                >
                  استعرض الخدمات
                </a>
              </div>
            </div>

          </div>

          {/* قائمة الميزات (ستظهر منفصلة وتحت المحتوى بمسافة مريحة للموبايل، وبجانب النصوص في الشاشات الكبيرة) */}
          <div className="lg:col-span-5 bg-slate-900/80 dark:bg-slate-950/80 backdrop-blur-md p-6 sm:p-8 rounded-3xl shadow-2xl border border-slate-800 space-y-4 self-center w-full">
            <h3 className="text-lg font-bold text-white border-b border-slate-800 pb-3">
              مميزات التشغيل السريع:
            </h3>
            
            <div className="space-y-3.5">
              {points.map((point, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800/80 text-slate-200 transition-all duration-300 hover:bg-emerald-600 hover:border-emerald-500 hover:text-white hover:scale-[1.02] cursor-pointer group shadow-sm"
                >
                  <span className="text-2xl p-2 bg-slate-900 rounded-xl shadow-sm border border-slate-800 group-hover:bg-white/20 group-hover:border-white/30 transition-colors">
                    {point.icon}
                  </span>
                  <div>
                    <h4 className="font-bold text-sm text-white group-hover:text-white transition-colors">
                      {point.title}
                    </h4>
                    <p className="text-xs text-slate-400 group-hover:text-emerald-50 transition-colors mt-0.5">
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
