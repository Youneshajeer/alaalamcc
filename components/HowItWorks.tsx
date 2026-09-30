import React from 'react';

export default function HowItWorks() {
  const steps = [
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
  ];

  return (
    <section id="how-it-works" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-2">مراحل الشراكة</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            آلية العمل والتشغيل
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
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
  );
}