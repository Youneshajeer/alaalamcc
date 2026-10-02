'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import ar from '@/i18n/ar.json';
import en from '@/i18n/en.json';

const dictionaries = { ar, en };

function RequestServiceContent() {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get('service') || '';
  const langParam = searchParams.get('lang') as 'ar' | 'en';

  const [lang, setLang] = useState<'ar' | 'en'>(langParam || 'ar');
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // دالة مطابقة المعرف الرمزي مع ملفات الترجمة الحالية
  const getResolvedService = (param: string, currentLang: 'ar' | 'en') => {
    const servicesDict = dictionaries[currentLang].services;

    if (param === 'consultation') {
      return currentLang === 'ar' ? 'جلسة الاستشارة الأولى' : 'First Consultation Session';
    }
    if (param === 'infrastructure') {
      return servicesDict.infrastructure.title;
    }
    if (servicesDict[param as keyof typeof servicesDict]) {
      return (servicesDict[param as keyof typeof servicesDict] as any).title;
    }
    return param;
  };

  const [formData, setFormData] = useState({
    service: getResolvedService(serviceParam, lang),
    company: '',
    name: '',
    phone: '',
    message: ''
  });

  // مزامنة اللغة من التخزين المحلي أو الرابط
  // مراقبة تغيير اللغة من التخزين المحلي (LocalStorage) أو الهيدر بفاصل زمني قصير تماماً مثل صفحة الخدمات
  useEffect(() => {
    const checkLangInterval = setInterval(() => {
      const currentLang = (localStorage.getItem('lang') as 'ar' | 'en') || 'ar';
      if (currentLang !== lang) {
        setLang(currentLang);
      }
    }, 100);

    return () => clearInterval(checkLangInterval);
  }, [lang]);

  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      service: getResolvedService(serviceParam, lang)
    }));
  }, [lang, serviceParam]);

  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      service: getResolvedService(serviceParam, lang)
    }));
  }, [lang, serviceParam]);

  const t = dictionaries[lang].requestService;

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/[^0-9]/.test(value)) {
      setErrorMsg(
        lang === 'ar'
          ? 'يرجى التأكد من المدخلات: يرجى إدخال أرقام فقط في حقل رقم الجوال.'
          : 'Please check inputs: enter numbers only in the mobile number field.'
      );
    } else {
      setErrorMsg('');
    }
    const numericValue = value.replace(/\D/g, '');
    setFormData({ ...formData, phone: numericValue });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!/^\d{9,15}$/.test(formData.phone)) {
      setErrorMsg(
        lang === 'ar'
          ? 'يرجى التأكد من المدخلات: رقم الجوال غير صحيح أو قصير جداً.'
          : 'Please check inputs: invalid or too short mobile number.'
      );
      return;
    }

    setErrorMsg('');
    setSubmitted(true);
  };

  return (
    <div className={`min-h-screen flex flex-col justify-between bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300 ${lang === 'ar' ? 'dir-rtl' : 'dir-ltr'}`} dir={lang === 'ar' ? 'rtl' : 'ltr'}>

      <main className="grow py-16 px-4 sm:px-6 lg:px-8 max-w-2xl mx-auto w-full space-y-12">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-50 dark:bg-slate-900 border border-emerald-200/80 dark:border-emerald-500/30 text-emerald-800 dark:text-emerald-300 text-xs sm:text-sm font-bold shadow-sm mx-auto">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
            <span>{t.badge}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            {t.title}
          </h1>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            {t.subtitle}
          </p>
        </div>

        <div className="bg-slate-50/50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-sm">
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center text-3xl mx-auto shadow-lg">
                ✓
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                {t.successTitle}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
                {t.successDesc}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="space-y-2">
                <label className="block text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300">
                  {t.serviceLabel}
                </label>
                <input
                  type="text"
                  readOnly
                  value={formData.service}
                  placeholder={t.servicePlaceholder}
                  className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-emerald-700 dark:text-emerald-400 text-sm font-bold cursor-not-allowed select-none"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300">
                  {t.companyLabel}
                </label>
                <input
                  type="text"
                  required
                  placeholder={t.companyPlaceholder}
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300">
                  {t.nameLabel}
                </label>
                <input
                  type="text"
                  required
                  placeholder={t.namePlaceholder}
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300">
                  {t.phoneLabel}
                </label>
                <input
                  type="tel"
                  required
                  maxLength={15}
                  placeholder={t.phonePlaceholder}
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300">
                  {t.messageLabel}
                </label>
                <textarea
                  rows={4}
                  placeholder={t.messagePlaceholder}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all resize-none"
                ></textarea>
              </div>

              {errorMsg && (
                <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-800 text-rose-600 dark:text-rose-400 text-xs sm:text-sm font-bold text-center">
                  {errorMsg}
                </div>
              )}

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm sm:text-base shadow-lg shadow-emerald-600/20 transition-all duration-300"
              >
                {t.submitBtn}
              </button>
            </form>
          )}
        </div>
      </main>

    </div>
  );
}

export default function RequestServicePage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">Loading...</div>}>
      <RequestServiceContent />
    </Suspense>
  );
}