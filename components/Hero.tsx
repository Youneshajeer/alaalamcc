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
    <section id="hero" className="relative pt-6 pb-12 md:pt-16 md:pb-24 overflow-hidden bg-slate-950">
      
      {/* نمط الحركة للوميض المتكرر */}
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

      {/* 1. خلفية الصورة (واضحة تماماً وبدون أي طبقة معتمة لتظهر تفاصيل وجه الفتاة بوضوح تام) */}
      <div className="absolute top-0 inset-x-0 z-0 h-[48vh] sm:h-[62vh] lg:h-full overflow-hidden pointer-events-none">
        <img
          src="/images/hero-bg.png"
          alt="خلفية مركز الاتصال"
          className="w-full h-full object-cover object-top opacity-100"
        />
        {/* تدرج سفلي خفيف لدمج الصورة بسلاسة */}
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-slate-950/80"></div>
      </div>

      {/* 2. محتوى قسم الهيرو الأساسي */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:gap-12 items-start">
          
          {/* النصوص والعنوان والأزرار */}
          <div className="w-full lg:col-span-7 flex flex-col justify-between text-center lg:text-right py-2 space-y-4">
            
            <div className="space-y-3">
              {/* شارة واضحة وغير فاهية مع خلفية وإطار أقوى */}
              <div className="inline-flex items-center gap-2.5 px-4.5 py-2 rounded-full bg-slate-900/90 border border-emerald-500/60 backdrop-blur-md shadow-lg mx-auto lg:mx-0">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
                <span className="text-xs sm:text-sm font-extrabold animate-text-pulse tracking-wide text-emerald-300">
                  مركز اتصال ومقر لخدمات الأعمال (BPO Call Center)
                </span>
              </div>

              {/* العنوان الرئيسي: السطر الأول أبيض والثاني تدرج زمردي/سماوي متناسق */}
             <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight">
  <span className="text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
    نُشغّل خط التواصل مع عملائك،
  </span>
  <br className="hidden sm:inline" />
  {/* استخدام تدرج البرتقالي مع إضافة حدود سوداء دقيقة وظل عميق للوضوح المطلق */}
  <span 
    className="bg-linear-to-r from-amber-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent"
    style={{
      WebkitTextStroke: '1px rgba(0, 0, 0, 0.7)',
      filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.9))'
    }}
  >
    وأنت تركّز على نمو عملك
  </span>
</h1>
            </div>

            {/* فقرة الوصف بلون مختلف وواضح تماماً (أبيض ناصع مع تدرج فضي وظل عميق لتبرز فوق الخلفية الزرقاء) */}
            <div className="space-y-4 pt-1">
              <p className="text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0 font-bold bg-linear-to-r from-white via-slate-10 to-slate-100 bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] mt-8 sm:mt-10">
                حلول العالم للاتصالات وتقنية المعلومات تبني وتُشغّل مراكز اتصال مخصصة للشركات في السعودية — استقبال، مبيعات هاتفية، دعم فني، وقنوات تواصل مكتوبة، على بنية تحتية مستضافة داخل المملكة.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-1">
                <a
                  href="#contact"
                  className="bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold px-8 py-3 rounded-xl shadow-lg shadow-emerald-500/25 transition-all text-center active:scale-95 text-sm sm:text-base"
                >
                  اطلب عرض تجريبي
                </a>
                <a
                  href="#services"
                  className="bg-slate-900/80 hover:bg-slate-900 text-white border border-slate-700 font-semibold px-8 py-3 rounded-xl backdrop-blur-md transition-all text-center active:scale-95 shadow-md text-sm sm:text-base"
                >
                  استعرض الخدمات
                </a>
              </div>
            </div>

          </div>

          {/* قائمة مميزات التشغيل السريع */}
          <div className="w-full lg:col-span-5 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-5 sm:p-7 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 space-y-3.5 mt-8 sm:mt-12 lg:mt-0">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2.5">
              مميزات التشغيل السريع:
            </h3>
            
            <div className="space-y-3">
              {points.map((point, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 rounded-2xl bg-emerald-50/90 dark:bg-slate-800/80 border border-emerald-200/80 dark:border-slate-700 text-emerald-950 dark:text-slate-100 transition-all duration-300 hover:bg-sky-500 hover:border-sky-400 hover:text-white hover:scale-[1.02] cursor-pointer group shadow-sm"
                >
                  <span className="text-xl sm:text-2xl p-1.5 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-emerald-100 dark:border-slate-700 group-hover:bg-white/20 group-hover:border-white/30 transition-colors">
                    {point.icon}
                  </span>
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-emerald-900 dark:text-white group-hover:text-white transition-colors">
                      {point.title}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-emerald-700/90 dark:text-slate-300 group-hover:text-sky-50 transition-colors mt-0.5">
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