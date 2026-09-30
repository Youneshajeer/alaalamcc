import React from 'react';

export default function WhyUs() {
  const coreFeatures = [
    {
      id: "security",
      icon: "🛡️",
      badge: "تشفير وأمان مؤسسي",
      title: "أمان بُني على خبرة تقنية متقدمة",
      desc: "بنية تحتية محمية بأحدث بروتوكولات أمن الشبكات المؤسسية، مصممة خصيصاً للتعامل مع البيانات الحساسة وفق أعلى معايير السرية والتشفير المعتمدة.",
      highlight: "تشفير بيانات رفيع المستوى",
      accent: "from-emerald-500 via-teal-500 to-emerald-600"
    },
    {
      id: "compliance",
      icon: "🏛️",
      badge: "امتثال نظامي 100% 🇸🇦",
      title: "التزام كامل بالأنظمة والتشريعات المحلية",
      desc: "مرخصون نظامياً لتقديم خدمات مراكز الاتصال وإسناد الأعمال، مع ضمان استضافة وحفظ كافة البيانات داخل مراكز بيانات معتمدة محلياً في السعودية.",
      highlight: "استضافة البيانات داخل المملكة",
      accent: "from-amber-500 via-yellow-500 to-amber-600"
    },
    {
      id: "talent",
      icon: "👥",
      badge: "كوادر وطنية مؤهلة",
      title: "فريق عمل سعودي بإشراف تشغيلي مباشر",
      desc: "نخبة من الكفاءات الوطنية المُدرّبة على أعلى معايير خدمة العملاء والمبيعات الهاتفية، تحت قيادة وإشراف ميداني مستمر لضمان أعلى درجات الجودة.",
      highlight: "إشراف تشغيلي حثيث",
      accent: "from-sky-500 via-blue-500 to-sky-600"
    },
    {
      id: "scalability",
      icon: "⚡",
      badge: "توسع مرن بلا احتكاك",
      title: "سعة تشغيلية مرنة تتكيف مع نموك",
      desc: "إمكانية البدء بفريق عمل متخصص صغير وتوسعة المقاعد التشغيلية فوراً وبسلاسة تامة مع نمو نشاطك التجاري ودون الحاجة لإعادة التأسيس.",
      highlight: "تدرّج تشغيلي فوري",
      accent: "from-emerald-600 via-teal-600 to-green-600"
    }
  ];

  const enterpriseStats = [
    { number: "100%", label: "استضافة سحابية داخل السعودية", icon: "🇸🇦" },
    { number: "99.9%", label: "جاهزية واستقرار الخدمة (SLA)", icon: "⚡" },
    { number: "7054811208", label: "السجل التجاري المعتمد", icon: "📜" },
    { number: "24/7", label: "مراقبة وإشراف تشغيلي مستمر", icon: "🎧" }
  ];

  return (
    <section id="why-us" className="py-24 bg-white text-slate-900 relative overflow-hidden">
      
      {/* 1. مؤثرات الخلفية الهندسية الزجاجية */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-size-[24px_24px] opacity-60 pointer-events-none"></div>
      <div className="absolute top-1/4 -right-28 w-125 h-125 bg-emerald-100/40 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 -left-28 w-125 h-125 bg-sky-100/40 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        
        {/* 2. رأس القسم والوسم المضيء */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs sm:text-sm font-bold shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            شريكك التشغيلي المعتمد في السعودية
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 leading-tight tracking-tight">
            لماذا يثق بنا <br />
            <span className="bg-linear-to-r from-amber-500 via-amber-600 to-yellow-600 bg-clip-text text-transparent">
              قادة الأعمال والشركات؟
            </span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
            نحن لا نكتفي بتقديم خدمات مركز اتصال تقليدي، بل نبني لمؤسستك مركز عمليات مخصص يرفع من ثقة عملائك، ويحميك تنظيمياً، ويضمن أعلى كفاءة تشغيلية.
          </p>
        </div>

        {/* 3. شبكة المحاور الرئيسية بتصميم Bento Grid احترافي */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {coreFeatures.map((feature) => (
            <div
              key={feature.id}
              className="group relative bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-10 transition-all duration-300 hover:shadow-2xl hover:shadow-slate-200/80 hover:border-emerald-400/80 flex flex-col justify-between overflow-hidden"
            >
              {/* لمسة خلفية ضوئية داخل البطاقة عند الهوفر */}
              <div className="absolute top-0 left-0 w-full h-1 bg-slate-100 group-hover:bg-linear-to-r group-hover:from-emerald-400 group-hover:to-amber-400 transition-all duration-500"></div>

              <div className="space-y-6">
                {/* الجزء العلوي: الأيقونة والوسم */}
                <div className="flex justify-between items-center">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-3xl shadow-sm group-hover:bg-emerald-500 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                    {feature.icon}
                  </div>
                  <span className="text-xs font-bold px-3.5 py-1.5 rounded-full bg-emerald-50/80 border border-emerald-200/60 text-emerald-800">
                    {feature.badge}
                  </span>
                </div>

                {/* العنوان والوصف المؤسسي */}
                <div className="space-y-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-emerald-800 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>

              {/* الجزء السفلي: الميزة التنافسية الحاسم */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-500">
                <span className="flex items-center gap-2 text-emerald-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  {feature.highlight}
                </span>
                <span className="text-slate-400 group-hover:-translate-x-1 transition-transform">
                  ←
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* 4. لوحة أرقام الموثوقية (Trust & Infrastructure Banner) */}
        <div className="bg-slate-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-slate-800 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y lg:divide-y-0 lg:divide-x lg:divide-x-reverse divide-slate-800/80">
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

        {/* 5. دعوة مباشرة لاتخاذ قرار الاستشارة (Executive CTA) */}
        <div className="bg-linear-to-r from-slate-900 via-slate-900 to-slate-950 border border-slate-800 text-white rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="space-y-3 text-center md:text-right">
            <h3 className="text-2xl sm:text-3xl font-black">
              دعنا نُصمّم مركز الاتصال الخـاص بمؤسستك
            </h3>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl">
              تواصل مع مستشاري التشغيل لدينا للحصول على دراسة احتياج مخصصة وخطة تشغيل سريعة الانطلاق.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <a
              href="#contact"
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold px-8 py-4 rounded-xl shadow-lg shadow-emerald-500/25 transition-all text-center text-sm whitespace-nowrap active:scale-95"
            >
              احجز جلسة استشارية
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}