'use client';

import React, { useState, useEffect } from 'react';

const dictionary = {
  ar: {
    sectionEyebrow: "خدمات مراكز الاتصال",
    sectionTitle: "حلول تشغيلية متكاملة لخدمة عملائك",
    servicesList: [
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
        icon: "🛠"
      },
      {
        num: "04",
        title: "القنوات المكتوبة",
        desc: "واتساب للأعمال، البريد الإلكتروني، والدردشة الحية — بنفس معايير الجودة الصوتية العالية.",
        icon: "📩"
      },
    ]
  },
  en: {
    sectionEyebrow: "Call Center Services",
    sectionTitle: "Integrated Operational Solutions to Serve Your Customers",
    servicesList: [
      {
        num: "01",
        title: "Inbound & Support",
        desc: "Receiving customer inquiries, handling complaints, and routing requests according to each client's policy to ensure the best impression.",
        icon: "🎧"
      },
      {
        num: "02",
        title: "Telemarketing & Sales",
        desc: "Outbound marketing and sales campaigns, qualifying leads, and scheduling appointments for field sales teams to boost sales.",
        icon: "📞"
      },
      {
        num: "03",
        title: "Technical Support",
        desc: "First-level troubleshooting, ticket tracking, and organized escalation to the client's technical team swiftly and professionally.",
        icon: "🛠"
      },
      {
        num: "04",
        title: "Written Channels",
        desc: "WhatsApp Business, email, and live chat — with the same high standards of voice quality.",
        icon: "📩"
      },
    ]
  }
};

export default function Services() {
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
    <section id="services" className={`py-20 bg-white dark:bg-slate-955 transition-colors duration-300 ${lang === 'ar' ? 'dir-rtl' : 'dir-ltr'}`} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-2">
            {t.sectionEyebrow}
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white transition-colors duration-300">
            {t.sectionTitle}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.servicesList.map((service) => (
            <div
              key={service.num}
              className={`group relative bg-slate-50 dark:bg-slate-900 rounded-3xl p-8 border border-slate-200/80 dark:border-slate-800 hover:border-emerald-500 dark:hover:border-emerald-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between ${lang === 'ar' ? 'text-right' : 'text-left'}`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-black text-slate-300 dark:text-slate-500 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
                    {service.num}
                  </span>
                  <span className="text-3xl p-3 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 transition-colors duration-300">
                    {service.icon}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h4>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed transition-colors">
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