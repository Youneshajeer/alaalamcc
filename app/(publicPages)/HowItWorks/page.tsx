import React from 'react';

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: "📋",
      badge: "تحليل الاحتياج",
      title: "1. جلسة التعارف ودراسة المتطلبات",
      desc: "نفهم طبيعة عملك، حجم المكالمات المتوقع، معايير الجودة المطلوبة، ونوع القنوات المستهدفة لتحديد السعة التشغيلية بدقة.",
      outputs: [
        "تحديد حجم الفريق والمقاعد المطلوبة",
        "تحديد نطاق العمل لاتفاقية مستوى الخدمة (SLA)",
        "اختيار القنوات الصوتية والمكتوبة المناسبة"
      ]
    },
    {
      number: "02",
      icon: "⚙️",
      badge: "التجهيز والربط",
      title: "2. الإعداد المخصص وتدريب الكوادر",
      desc: "بناء سيناريوهات الاتصال (Call Scripts)، ربط الأنظمة البرمجية بـ CRM الخاص بك، وتدريب الكوادر الوطنية المخصصة لحسابك.",
      outputs: [
        "تطوير أدلة وسيناريوهات الاتصال المخصصة",
        "الربط التقني السلس مع نظام إدارة العلاقات",
        "تدريب وتأهيل فريق العمل المخصص"
      ]
    },
    {
      number: "03",
      icon: "🧪",
      badge: "التحقق والجودة",
      title: "3. التشغيل التجريبي والقياس",
      desc: "انطلاق فترة قياس أداء محددة للتحقق من جودة الاستجابة وسرعة معالجة الطلبات، مع تقديم تقارير حية وتعديل مباشر قبل التوسع.",
      outputs: [
        "اختبار استقرار البنية السحابية والمكالمات",
        "تقديم تقارير أداء يومية ومباشرة",
        "ضبط سيناريوهات الرد بناءً على التغذية الراجعة"
      ]
    },
    {
      number: "04",
      icon: "🚀",
      badge: "الانطلاق الكامل",
      title: "4. التشغيل المباشر والتوسّع",
      desc: "انتقال كامل للتشغيل المباشر المعتمد مع توفير إشراف ميداني حثيث، ورفع تقارير الجودة الدورية، مع إمكانية زيادة المقاعد فوراً.",
      outputs: [
        "تشغيل واعتماد مركز الاتصال 24/7",
        "تقارير تحليليّة دورية للسياسات والجودة",
        "إمكانية زيادة السعة التشغيلية بمرونة تامة"
      ]
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white text-slate-900 relative overflow-hidden">
      
      {/* 1. خلفية زجاجية هندسية مع هالات ضوئية */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-size-[24px_24px] opacity-70 pointer-events-none"></div>
      <div className="absolute top-1/4 -left-20 w-112.5 h-112.5 bg-emerald-100/50 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 -right-20 w-112.5 h-112.5 bg-sky-100/50 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        
        {/* 2. رأس القسم والوسم المضيء */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs sm:text-sm font-bold shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            مراحل الشراكة والتشغيل المعتمدة
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 leading-tight tracking-tight">
            آلية العمل <br />
            <span className="bg-linear-to-r from-amber-500 via-amber-600 to-yellow-600 bg-clip-text text-transparent">
              خطوة بخطوة نحو النجاح
            </span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
            نعتمد منهجية تشغيلية محكمة وسريعة تُقلل المخاطر وتضمن انطلاق مركز اتصال مؤسستك أعلى مستويات الكفاءة والاحترافية.
          </p>
        </div>

        {/* 3. شبكة المراحل الأربع (Step Grid with Interactive Connectors) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="group relative bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm hover:shadow-2xl hover:border-emerald-400 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* الجزء العلوي: الرقم والأيقونة والوسم */}
                <div className="flex justify-between items-center">
                  <span className="text-3xl p-3 bg-slate-50 rounded-2xl border border-slate-100 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300 shadow-sm">
                    {step.icon}
                  </span>
                  <span className="text-3xl font-black text-slate-300 group-hover:text-emerald-500 transition-colors">
                    {step.number}
                  </span>
                </div>

                <div className="space-y-2">
                  <span className="inline-block text-xs font-bold px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800">
                    {step.badge}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-800 transition-colors leading-snug">
                    {step.title}
                  </h3>
                </div>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {step.desc}
                </p>

                <hr className="border-slate-100 my-3" />

                {/* قائمة المخرجات الرئيسية لهذه المرحلة */}
                <div className="space-y-2">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                    المخرجات الرئيسية:
                  </span>
                  <ul className="space-y-1.5">
                    {step.outputs.map((out, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <span className="text-emerald-500 font-bold mt-0.5">✓</span>
                        <span>{out}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* شريط السفلي المضيء */}
              <div className="pt-4">
                <div className="h-1 w-10 bg-slate-200 rounded-full group-hover:w-full group-hover:bg-linear-to-r group-hover:from-emerald-400 group-hover:to-amber-400 transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* 4. شريط الدعوة للإجراء وتسهيل البدء (Call to Action) */}
        <div className="bg-slate-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="space-y-3 text-center md:text-right relative z-10">
            <h3 className="text-2xl sm:text-3xl font-black">
              جاهز للبدء في الخطوة الأولى؟
            </h3>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl">
              تواصل معنا اليوم لحجز جلسة التعارف المجانية وتقييم حجم المتطلبات المخصصة لشركتك.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <a
              href="#contact"
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold px-8 py-4 rounded-xl shadow-lg shadow-emerald-500/25 transition-all text-center text-sm whitespace-nowrap active:scale-95"
            >
              ابتدئ الجلسة الأولى الآن
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}