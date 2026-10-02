'use client';

import React, { useState, useEffect } from 'react';
import ar from '@/i18n/ar.json';
import en from '@/i18n/en.json';

const dictionaries = { ar, en };

export default function CareersPage() {
  const [lang, setLang] = useState<'ar' | 'en'>('ar');
  const [submitted, setSubmitted] = useState(false);
  const [selectedDeptId, setSelectedDeptId] = useState('');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '', // حقل سنوات الخبرة الجديد
    department: '',
    position: '',
    cvFile: null as File | null
  });

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

  const t = dictionaries[lang].careers;
  const selectedDept = t.departments?.find((d) => d.id === selectedDeptId);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  // خيارات سنوات الخبرة المتاحة
  const experienceOptions = lang === 'ar' ? [
    "حديث التخرج (بدون خبرة)",
    "من سنة إلى سنتين",
    "من 3 إلى 5 سنوات",
    "أكثر من 5 سنوات"
  ] : [
    "Fresh Graduate (No Experience)",
    "1 - 2 Years",
    "3 - 5 Years",
    "More than 5 Years"
  ];

  return (
    <div className={`min-h-screen flex flex-col justify-between bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300 ${lang === 'ar' ? 'dir-rtl' : 'dir-ltr'}`} dir={lang === 'ar' ? 'rtl' : 'ltr'}>

      <main className="grow py-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto w-full space-y-12">
        
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-50 dark:bg-slate-900 border border-emerald-200/80 dark:border-emerald-500/30 text-emerald-800 dark:text-emerald-300 text-xs sm:text-sm font-bold shadow-sm mx-auto">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
            <span>{t.eyebrow}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            {t.title}
          </h1>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            {t.description}
          </p>
        </div>

        <div className="bg-slate-50/50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-sm">
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center text-3xl mx-auto shadow-lg">
                ✓
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                {lang === 'ar' ? 'تم إرسال طلبك بنجاح' : 'Application Submitted Successfully'}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
                {t.form.success}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* الاسم الكامل */}
              <div className="space-y-2">
                <label className="block text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300">
                  {t.form.name}
                </label>
                <input
                  type="text"
                  required
                  placeholder={t.form.namePlaceholder}
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                />
              </div>

              {/* البريد ورقم الجوال */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300">
                    {t.form.email}
                  </label>
                  <input
                    type="email"
                    required
                    placeholder={t.form.emailPlaceholder}
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300">
                    {t.form.phone}
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder={t.form.phonePlaceholder}
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                  />
                </div>
              </div>

              {/* حقل عدد سنوات الخبرة الجديد */}
              <div className="space-y-2">
                <label className="block text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300">
                  {t.form.experience}
                </label>
                <select
                  required
                  value={formData.experience}
                  onChange={(e) => setFormData({...formData, experience: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all cursor-pointer"
                >
                  <option value="">{t.form.experiencePlaceholder}</option>
                  {experienceOptions.map((opt, idx) => (
                    <option key={idx} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* اختيار القسم الرئيسي */}
              <div className="space-y-2">
                <label className="block text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300">
                  {t.form.selectDepartment}
                </label>
                <select
                  required
                  value={selectedDeptId}
                  onChange={(e) => {
                    setSelectedDeptId(e.target.value);
                    setFormData({...formData, department: e.target.value, position: ''});
                  }}
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                >
                  <option value="">{t.form.selectDepartment}...</option>
                  {t.departments?.map((dept) => (
                    <option key={dept.id} value={dept.id}>
                      {dept.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* اختيار المسمى الوظيفي المستهدف */}
              <div className="space-y-2">
                <label className="block text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300">
                  {t.form.selectPosition}
                </label>
                <select
                  required
                  disabled={!selectedDeptId}
                  value={formData.position}
                  onChange={(e) => setFormData({...formData, position: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all disabled:opacity-50 cursor-pointer"
                >
                  <option value="">{t.form.positionPlaceholder}</option>
                  {selectedDept?.positions.map((pos, idx) => (
                    <option key={idx} value={pos}>
                      {pos}
                    </option>
                  ))}
                </select>
              </div>

              {/* رفع ملف الـ PDF */}
              <div className="space-y-2">
                <label className="block text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300">
                  {t.form.cvFile}
                </label>
                <input
                  type="file"
                  accept=".pdf"
                  required
                  onChange={(e) => setFormData({...formData, cvFile: e.target.files?.[0] || null})}
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white text-sm file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-emerald-50 file:text-emerald-700 dark:file:bg-slate-800 dark:file:text-emerald-300 hover:file:bg-emerald-100 transition-all cursor-pointer"
                />
              </div>

              {/* زر الإرسال */}
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm sm:text-base shadow-lg shadow-emerald-600/20 transition-all duration-300"
              >
                {t.form.submit}
              </button>
            </form>
          )}
        </div>

      </main>

    </div>
  );
}