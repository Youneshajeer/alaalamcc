import React from 'react';

export default function Services() {
  const servicesList = [
    {
      num: "01",
      icon: "🎧",
      title: "الاستقبال وخدمة العملاء (Inbound)",
      desc: "إدارة متكاملة لخطوط الاستقبال والرد على استفسارات عملائك على مدار الساعة بنبرة احترافية تعكس هوية علامتك التجارية.",
      badge: "جاهزية 24/7",
      features: [
        "إدارة الشكاوى والمقترحات وتتبع التذاكر برقم مرجعي",
        "توجيه ذكي ومخصص للمكالمات (Smart IVR Routing)",
        "قياس مؤشرات رضا العملاء الفورية (CSAT)"
      ]
    },
    {
      num: "02",
      icon: "📞",
      title: "المبيعات الهاتفية والتسويق (Outbound)",
      desc: "حملات اتصال صادرة لتأهيل العملاء المحتملين، متابعة المبيعات، وجدولة المواعيد الميدانية لزيادة معدل التحويل.",
      badge: "رفع المبيعات",
      features: [
        "تأهيل العملاء المحتملين (Lead Qualification)",
        "تنشيط الحسابات الخاملة ومتابعة السلات المتروكة",
        "إعداد سيناريوهات بيع مخصصة (Custom Scripts)"
      ]
    },
    {
      num: "03",
      icon: "🛠",
      title: "الدعم الفني وتتبع التذاكر (Tech Support)",
      desc: "فريق متخصص لمعالجة أعطال المستوى الأول والثاني (L1 & L2) والتصعيد المنظم للمستويات الأعلى مع متابعة الحل.",
      badge: "كفاءة تقنية",
      features: [
        "إدارة منصات الدعم الفني وتذاكر الصيانة",
        "متابعة دقيقة لاتفاقيات مستوى الخدمة (SLA)",
        "توثيق المشاكل في قاعدة معرفية مخصصة (Knowledge Base)"
      ]
    },
    {
      num: "04",
      icon: "📩",
      title: "إدارة القنوات المكتوبة (Omnichannel)",
      desc: "إدارة متكاملة لمحادثات واتساب للأعمال، البريد الإلكتروني، والدردشة الحية من منصة موحدة بنفس المعايير الصوتية.",
      badge: "تواصل رقمي",
      features: [
        "ربط الواتساب المعتمد (WhatsApp Business API)",
        "الرد الآلي الذكي والتصعيد للموظف المختص",
        "سجل موحد لجميع المحادثات عبر مختلف القنوات"
      ]
    }
  ];

  const qualityMetrics = [
    { label: "نسبة استجابة المكالمات (SLA)", value: "95%+" },
    { label: "مؤشر رضا العملاء (CSAT)", value: "98%" },
    { label: "استضافة البيانات", value: "100% داخل السعودية" },
  ];

  return (
    <section id="services" className="py-20 bg-white text-slate-900 relative overflow-hidden">
      
      {/* 1. مؤثرات خلفية إبداعية (Glow Effects & Grid Pattern) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-70 pointer-events-none"></div>
      <div className="absolute -top-24 right-10 w-96 h-96 bg-emerald-100/60 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-sky-100/60 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* 2. رأس الصفحة مع التدرج الذهبي والوسم الأخضر */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs sm:text-sm font-bold shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            خدمات تشغيل مراكز الاتصال وإسناد الأعمال (BPO)
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 leading-tight">
            حلول تشغيلية متكاملة <br />
            <span className="bg-linear-to-r from-amber-500 via-amber-600 to-yellow-600 bg-clip-text text-transparent">
              لتنمية أعمالك في السعودية
            </span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
            نُشغّل ونُدير مراكز اتصال مخصصة للشركات عبر بنية سحابية موثوقة ومستضافة داخل المملكة لضمان أعلى مستويات الأمان والجودة بالاعتماد على كوادر وطنية مؤهلة.
          </p>
        </div>

        {/* 3. شبكة بطاقات الخدمات (4 بطاقات بتصميم تفاعلي راقٍ) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesList.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm hover:shadow-xl hover:border-emerald-400 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* الجزء العلوي للبطاقة */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3.5">
                    <span className="text-3xl p-3 bg-slate-50 rounded-2xl border border-slate-100 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                      {service.icon}
                    </span>
                    <span className="text-2xl font-black text-slate-300 group-hover:text-emerald-500 transition-colors">
                      {service.num}
                    </span>
                  </div>

                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700">
                    {service.badge}
                  </span>
                </div>

                {/* عنوان ووصف الخدمة */}
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                  {service.title}
                </h3>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {service.desc}
                </p>

                <hr className="border-slate-100 my-4" />

                {/* قائمة الفوائد والمميزات التفصيلية */}
                <ul className="space-y-2.5">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <span className="text-emerald-500 font-bold mt-0.5">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* زر الطلب المباشر */}
              <div className="pt-4">
                <a
                  href="#contact"
                  className="block text-center w-full bg-slate-900 hover:bg-emerald-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-200 text-sm shadow-md active:scale-95"
                >
                  اطلب هذه الخدمة
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* 4. شريط مؤشرات الأداء والجودة التشغيلية */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 shadow-xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center divide-y md:divide-y-0 md:divide-x md:divide-x-reverse divide-slate-800">
            {qualityMetrics.map((metric, idx) => (
              <div key={idx} className="pt-4 md:pt-0 space-y-1">
                <div className="text-2xl sm:text-3xl font-black text-amber-400">
                  {metric.value}
                </div>
                <div className="text-xs sm:text-sm text-slate-300 font-medium">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5. قسم الامتثال واستضافة البيانات والمحاذاة السريعة */}
        <div className="bg-emerald-50/80 border border-emerald-200/80 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1.5 text-center md:text-right">
            <h4 className="text-base sm:text-lg font-bold text-emerald-950 flex items-center justify-center md:justify-start gap-2">
              <span>🇸🇦</span> بنية تحتية مستضافة بالكامل داخل المملكة العربية السعودية
            </h4>
            <p className="text-xs sm:text-sm text-emerald-800">
              جميع الأنظمة متوافقة مع المتطلبات الوطنية ومعايير ربط الـ CRM المباشر مع أنظمتكم.
            </p>
          </div>

          <a
            href="#contact"
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold px-6 py-3.5 rounded-xl shadow-lg shadow-emerald-600/20 transition-all text-sm whitespace-nowrap active:scale-95"
          >
            طلب عرض سعر مخصص
          </a>
        </div>

      </div>
    </section>
  );
}