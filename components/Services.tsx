import React from 'react';

export default function Services() {
  const servicesList = [
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
      icon: "🛠️️"
    },
    {
      num: "04",
      title: "القنوات المكتوبة",
      desc: "واتساب للأعمال، البريد الإلكتروني، والدردشة الحية — بنفس معايير الجودة الصوتية العالية.",
      icon: "📩"
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-2">خدمات مراكز الاتصال</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            حلول تشغيلية متكاملة لخدمة عملائك
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesList.map((service) => (
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
  );
}