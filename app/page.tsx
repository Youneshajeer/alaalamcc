'use client';
import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans dir-rtl" dir="rtl">
      
      {/* ------------------ NAVBAR ------------------ */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
 {/* Logo Block - حجم أكبر للأيقونة */}
<div className="flex items-center gap-3">
  <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-2xl bg-white flex items-center justify-center shadow-md overflow-hidden border border-slate-100 p-1">
    <div className="flex items-center">
  <img 
    src="/icon.png" 
    alt="شعار شركة حلول العالم" 
    className="h-14 sm:h-16 w-auto object-contain" 
  />
</div>
  </div>
  <div>
    <span className="text-xl sm:text-2xl font-extrabold bg-linear-to-r from-blue-700 via-blue-900 to-emerald-600 bg-clip-text text-transparent block leading-none">
      حلول العالم
    </span>
    <span className="text-xs sm:text-sm text-slate-500 font-medium tracking-wider uppercase mt-1 block">
      Alaalam Solutions
    </span>
  </div>
</div>
          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-700">
            <a href="#hero" className="hover:text-blue-600 transition-colors">الرئيسية</a>
            <a href="#services" className="hover:text-blue-600 transition-colors">خدماتنا</a>
            <a href="#why-us" className="hover:text-blue-600 transition-colors">لماذا نحن</a>
            <a href="#how-it-works" className="hover:text-blue-600 transition-colors">آلية العمل</a>
          </nav>

          {/* CTA Button */}
          <a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2.5 rounded-xl shadow-sm hover:shadow-md transition-all active:scale-95 text-sm"
          >
            تواصل معنا
          </a>
        </div>
      </header>

      {/* ------------------ HERO SECTION ------------------ */}
      <section id="hero" className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden bg-linear-to-b from-slate-100 via-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Main Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-right">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                مركز اتصال ومقر لخدمات الأعمال (BPO Call Center)
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
                نُشغّل خط التواصل مع عملائك، <br className="hidden sm:inline" />
                <span className="bg-linear-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                  وأنت تركّز على نمو عملك
                </span>
              </h1>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                حلول العالم للاتصالات وتقنية المعلومات تبني وتُشغّل مراكز اتصال مخصصة للشركات في السعودية — استقبال، مبيعات هاتفية، دعم فني، وقنوات تواصل مكتوبة، على بنية تحتية مستضافة داخل المملكة.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
                <a
                  href="#contact"
                  className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-8 py-3.5 rounded-xl shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/35 transition-all text-center active:scale-95"
                >
                  اطلب عرض تجريبي
                </a>
                <a
                  href="#services"
                  className="bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-semibold px-8 py-3.5 rounded-xl transition-all text-center active:scale-95 shadow-sm"
                >
                  استعرض الخدمات
                </a>
              </div>
            </div>

            {/* Quick Points Grid (5 cols) */}
            <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl shadow-xl border border-slate-200/80 space-y-4">
              <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">
                مميزات التشغيل السريع:
              </h3>
              
              <div className="space-y-3.5">
                {[
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
                ].map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3.5 p-3 rounded-2xl bg-slate-50 hover:bg-blue-50/50 transition-colors">
                    <span className="text-2xl p-1 bg-white rounded-xl shadow-sm">{point.icon}</span>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">{point.title}</h4>
                      <p className="text-xs text-slate-500 mt-0.5">{point.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ------------------ SERVICES SECTION ------------------ */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-2">خدمات مراكز الاتصال</h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              حلول تشغيلية متكاملة لخدمة عملائك
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                num: "01",
                title: "الاستقبال والدعم",
                desc: "استقبال استفسارات العملاء، الرد على الشكاوى، وتوجيه الطلبات وفق سياسة كل عميل مع ضمان أفضل انطباع.",
                icon: "🎧"
              },
              {
                num: "02",
                title: "المبيعات الهاتفية",
                desc: "حملات تسويق وبيع صادرة، تأهيل العملاء المحتملين، وجدولة المواعيد لفِرَق المبيعات الميدانية لزيادة المبيعات.",
                icon: "📞"
              },
              {
                num: "03",
                title: "الدعم الفني",
                desc: "معالجة أعطال المستوى الأول، تتبع التذاكر، والتصعيد المنظم لفريق العميل التقني بسرعة واحترافية.",
                icon: "🛠️"
              },
              {
                num: "04",
                title: "القنوات المكتوبة",
                desc: "واتساب للأعمال، البريد الإلكتروني، والدردشة الحية — بنفس معايير الجودة الصوتية العالية.",
                icon: "📩"
              },
            ].map((service) => (
              <div
                key={service.num}
                className="group relative bg-slate-50 rounded-3xl p-8 border border-slate-200/80 hover:border-emerald-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black text-slate-300 group-hover:text-emerald-500 transition-colors">
                      {service.num}
                    </span>
                    <span className="text-3xl p-3 bg-white rounded-2xl shadow-sm border border-slate-100">
                      {service.icon}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------ WHY US SECTION ------------------ */}
      <section id="why-us" className="py-20 bg-slate-900 text-white relative overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-emerald-600/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-2">شريكك الموثوق</h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
              لماذا تختار "حلول العالم"؟
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "أمان بُني على خبرة تقنية",
                desc: "بنية تحتية محمية بأدوات أمن شبكات مؤسسية متطورة، مصممة خصيصاً للتعامل مع بيانات العملاء الحساسة وفق أعلى المعايير.",
                icon: "🛡️"
              },
              {
                title: "امتثال نظامي منذ اليوم الأول",
                desc: "تسجيل رسمي لخدمة مركز الاتصال، مع استضافة البيانات وتصريح موقعها بالكامل داخل المملكة العربية السعودية.",
                icon: "🏛️"
              },
              {
                title: "فريق سعودي متخصص",
                desc: "كوادر وطنية مدرّبة ومؤهلة وفق معايير عالمية لخدمة العملاء، مع وجود إشراف تشغيلي مباشر لضمان الجودة.",
                icon: "👥"
              },
              {
                title: "تدرّج بلا احتكاك",
                desc: "إمكانية البدء بفريق صغير وتوسعة السعة التشغيلية تدريجياً وبسلاسة تامة دون الحاجة لإعادة بناء الأنظمة.",
                icon: "⚡"
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-800/60 backdrop-blur-md p-8 rounded-3xl border border-slate-700/60 hover:border-emerald-400/50 transition-all flex gap-5"
              >
                <div className="text-3xl p-3.5 bg-slate-700/50 rounded-2xl h-fit border border-slate-600">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------ HOW IT WORKS SECTION ------------------ */}
      <section id="how-it-works" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-2">مراحل الشراكة</h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              آلية العمل والتشغيل
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
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
            ].map((step) => (
              <div
                key={step.step}
                className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden"
              >
                <div className="w-10 h-10 rounded-2xl bg-linear-to-tr from-blue-600 to-emerald-500 text-white font-black flex items-center justify-center text-lg mb-4">
                  {step.step}
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h4>
                <p className="text-slate-600 text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------ FOOTER ------------------ */}
      <footer id="contact" className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Col 1: About */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-white font-bold text-lg">
              <span>🌍</span> شركة حلول العالم للاتصالات وتقنية المعلومات
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              مركز اتصال ومقر لخدمات الأعمال (BPO) يوفر حلول اتصال متكاملة وبنية تحتية مستضافة داخل المملكة العربية السعودية.
            </p>
          </div>

          {/* Col 2: Official Records */}
          <div className="space-y-2 text-xs">
            <h5 className="text-white font-semibold mb-2">السجلات والاعتماد</h5>
            <p>السجل التجاري (الرقم الوطني الموحد): <span className="text-emerald-400 font-mono">7054811208</span></p>
            <p>الرقم الموحد للخدمات التجاري: <span className="text-emerald-400 font-mono">7049113736</span></p>
            <p>نوع الكيان: شركة ذات مسؤولية محدودة</p>
          </div>

          {/* Col 3: Contact Info */}
          <div className="space-y-2 text-xs">
            <h5 className="text-white font-semibold mb-2">معلومات التواصل</h5>
            <p>📞 الهاتف: <span className="font-mono text-slate-300" dir="ltr">+966 55 711 1069</span> / <span className="font-mono text-slate-300" dir="ltr">+966 54 793 8719</span></p>
            <p>📍 العنوان: 2457 شارع يحيى بن واقد الطائي - حي المنار - جدة - المملكة العربية السعودية</p>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-800/80 pt-6 text-center text-xs text-slate-500">
          جميع الحقوق محفوظة © {new Date().getFullYear()} - شركة حلول العالم للاتصالات وتقنية المعلومات.
        </div>
      </footer>

    </div>
  );
}