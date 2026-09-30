import React from 'react';

export default function Footer() {
  return (
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
  );
}