import React from 'react';

export default function WhyUs() {
  const reasons = [
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
  ];

  return (
    <section id="why-us" className="py-20 bg-slate-900 text-white relative overflow-hidden">
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
          {reasons.map((item, idx) => (
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
  );
}