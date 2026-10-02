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
  const [formError, setFormError] = useState('');

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
    email: '', // حقل البريد الإلكتروني المضاف حديثاً
    phone: '',
    message: ''
  });

  // حالات الأخطاء الخاصة بكل حقل
  const [errors, setErrors] = useState({
    company: '',
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // مزامنة اللغة من التخزين المحلي أو الرابط
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

  const t = dictionaries[lang].requestService;

  // دالة التحقق من صحة المدخلات قبل الإرسال
  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      company: '',
      name: '',
      email: '',
      phone: '',
      message: ''
    };

    // 1. التحقق من اسم الشركة
    if (!formData.company.trim()) {
      newErrors.company = lang === 'ar' ? 'الرجاء إدخال اسم الشركة أو الجهة.' : 'Please enter your company name.';
      isValid = false;
    }

    // 2. التحقق من الاسم
    if (!formData.name.trim()) {
      newErrors.name = lang === 'ar' ? 'الرجاء إدخال الاسم الكامل.' : 'Please enter your full name.';
      isValid = false;
    }

    // 3. التحقق من البريد الإلكتروني وصيغته
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = lang === 'ar' ? 'الرجاء إدخال البريد الإلكتروني.' : 'Please enter your email address.';
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = lang === 'ar' ? 'صيغة البريد الإلكتروني غير صحيحة.' : 'Invalid email format.';
      isValid = false;
    }

    // 4. التحقق من رقم الهاتف/الجوال
    const phoneRegex = /^[\+]?[\d\s-]{8,15}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = lang === 'ar' ? 'الرجاء إدخال رقم الجوال.' : 'Please enter your phone number.';
      isValid = false;
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = lang === 'ar' ? 'رقم الجوال غير صحيح أو قصير جداً.' : 'Invalid or too short mobile number.';
      isValid = false;
    }

    // 5. التحقق من تفاصيل الطلب / الرسالة (اختياري أو إلزامي حسب رغبتك، هنا سنجعله إلزامياً كمثال أو يمكنك إزالته إذا كان اختيارياً)
    if (!formData.message.trim()) {
      newErrors.message = lang === 'ar' ? 'الرجاء إدخال تفاصيل الطلب أو الاستفسار.' : 'Please enter your message or request details.';
      isValid = false;
    }

    setErrors(newErrors);

    if (!isValid) {
      setFormError(
        lang === 'ar' 
          ? 'يرجى تعبئة جميع الحقول المطلوبة بشكل صحيح وتصحيح الأخطاء أعلاه قبل الإرسال.' 
          : 'Please fill in all required fields correctly and fix the errors above before submitting.'
      );
    } else {
      setFormError('');
    }

    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setFormError('');
      setSubmitted(true);
    }
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
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              
              {/* الخدمة المختارة */}
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

              {/* اسم الشركة */}
              <div className="space-y-2">
                <label className="block text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300">
                  {t.companyLabel}
                </label>
                <input
                  type="text"
                  placeholder={t.companyPlaceholder}
                  value={formData.company}
                  onChange={(e) => {
                    setFormData({...formData, company: e.target.value});
                    if (errors.company) setErrors({...errors, company: ''});
                    if (formError) setFormError('');
                  }}
                  className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-950 border text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 transition-all ${
                    errors.company ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 dark:border-slate-800 focus:ring-emerald-500'
                  }`}
                />
                {errors.company && <p className="text-xs text-red-500 font-semibold">{errors.company}</p>}
              </div>

              {/* الاسم الكامل */}
              <div className="space-y-2">
                <label className="block text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300">
                  {t.nameLabel}
                </label>
                <input
                  type="text"
                  placeholder={t.namePlaceholder}
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({...formData, name: e.target.value});
                    if (errors.name) setErrors({...errors, name: ''});
                    if (formError) setFormError('');
                  }}
                  className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-950 border text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 transition-all ${
                    errors.name ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 dark:border-slate-800 focus:ring-emerald-500'
                  }`}
                />
                {errors.name && <p className="text-xs text-red-500 font-semibold">{errors.name}</p>}
              </div>

              {/* البريد الإلكتروني (المضاف حديثاً) */}
              <div className="space-y-2">
                <label className="block text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300">
                  {lang === 'ar' ? 'البريد الإلكتروني' : 'Email Address'}
                </label>
                <input
                  type="email"
                  placeholder={lang === 'ar' ? 'example@domain.com' : 'example@domain.com'}
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({...formData, email: e.target.value});
                    if (errors.email) setErrors({...errors, email: ''});
                    if (formError) setFormError('');
                  }}
                  className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-950 border text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 transition-all ${
                    errors.email ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 dark:border-slate-800 focus:ring-emerald-500'
                  }`}
                />
                {errors.email && <p className="text-xs text-red-500 font-semibold">{errors.email}</p>}
              </div>

              {/* رقم الجوال */}
              <div className="space-y-2">
                <label className="block text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300">
                  {t.phoneLabel}
                </label>
                <input
                  type="tel"
                  maxLength={15}
                  placeholder={t.phonePlaceholder}
                  value={formData.phone}
                  onChange={(e) => {
                    setFormData({...formData, phone: e.target.value});
                    if (errors.phone) setErrors({...errors, phone: ''});
                    if (formError) setFormError('');
                  }}
                  className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-950 border text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 transition-all ${
                    errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 dark:border-slate-800 focus:ring-emerald-500'
                  }`}
                />
                {errors.phone && <p className="text-xs text-red-500 font-semibold">{errors.phone}</p>}
              </div>

              {/* تفاصيل الطلب */}
              <div className="space-y-2">
                <label className="block text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300">
                  {t.messageLabel}
                </label>
                <textarea
                  rows={4}
                  placeholder={t.messagePlaceholder}
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({...formData, message: e.target.value});
                    if (errors.message) setErrors({...errors, message: ''});
                    if (formError) setFormError('');
                  }}
                  className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-950 border text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 transition-all resize-none ${
                    errors.message ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 dark:border-slate-800 focus:ring-emerald-500'
                  }`}
                ></textarea>
                {errors.message && <p className="text-xs text-red-500 font-semibold">{errors.message}</p>}
              </div>

              {/* رسالة الخطأ العامة فوق زر الإرسال مباشرة */}
              {formError && (
                <div className="p-4 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900 text-red-600 dark:text-red-400 text-xs sm:text-sm font-semibold flex items-center gap-2 animate-fade-in">
                  <span className="text-base">⚠️</span>
                  <span>{formError}</span>
                </div>
              )}

              {/* زر الإرسال */}
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm sm:text-base shadow-lg shadow-emerald-600/20 transition-all duration-300 cursor-pointer"
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