'use client';

import React, { useState, useEffect } from 'react';
import ar from '@/i18n/ar.json';
import en from '@/i18n/en.json';

const dictionaries = { ar, en };

export default function CareersPage() {
  const [lang, setLang] = useState<'ar' | 'en'>('ar');
  const [submitted, setSubmitted] = useState(false);
  const [selectedDeptId, setSelectedDeptId] = useState('');
  
  // حالة جديدة لتخزين رسالة الخطأ العامة التي ستظهر فوق زر الإرسال
  const [formError, setFormError] = useState('');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    department: '',
    position: '',
    cvFile: null as File | null
  });

  // حالات الأخطاء للتحقق من المدخلات لكل حقل
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    department: '',
    position: '',
    cvFile: ''
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

  // دالة التحقق من صحة المدخلات قبل الإرسال
  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      name: '',
      email: '',
      phone: '',
      experience: '',
      department: '',
      position: '',
      cvFile: ''
    };

    // 1. التحقق من الاسم
    if (!formData.name.trim()) {
      newErrors.name = lang === 'ar' ? 'الرجاء إدخال الاسم الكامل.' : 'Please enter your full name.';
      isValid = false;
    }

    // 2. التحقق من البريد الإلكتروني وصيغته
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = lang === 'ar' ? 'الرجاء إدخال البريد الإلكتروني.' : 'Please enter your email address.';
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = lang === 'ar' ? 'صيغة البريد الإلكتروني غير صحيحة.' : 'Invalid email format.';
      isValid = false;
    }

    // 3. التحقق من رقم الهاتف/الجوال
    const phoneRegex = /^[\+]?[\d\s-]{8,15}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = lang === 'ar' ? 'الرجاء إدخال رقم الجوال.' : 'Please enter your phone number.';
      isValid = false;
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = lang === 'ar' ? 'رقم الجوال غير صالح.' : 'Invalid phone number format.';
      isValid = false;
    }

    // 4. التحقق من سنوات الخبرة
    if (!formData.experience) {
      newErrors.experience = lang === 'ar' ? 'الرجاء اختيار سنوات الخبرة.' : 'Please select your experience level.';
      isValid = false;
    }

    // 5. التحقق من القسم
    if (!formData.department) {
      newErrors.department = lang === 'ar' ? 'الرجاء اختيار القسم الرئيسي.' : 'Please select a department.';
      isValid = false;
    }

    // 6. التحقق من المسمى الوظيفي
    if (!formData.position) {
      newErrors.position = lang === 'ar' ? 'الرجاء اختيار المسمى الوظيفي المستهدف.' : 'Please select a target position.';
      isValid = false;
    }

    // 7. التحقق من رفع ملف السيرة الذاتية (PDF)
    if (!formData.cvFile) {
      newErrors.cvFile = lang === 'ar' ? 'الرجاء إرفاق السيرة الذاتية بصيغة PDF.' : 'Please upload your CV in PDF format.';
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
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              
              {/* الاسم الكامل */}
              <div className="space-y-2">
                <label className="block text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300">
                  {t.form.name}
                </label>
                <input
                  type="text"
                  placeholder={t.form.namePlaceholder}
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

              {/* البريد ورقم الجوال */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300">
                    {t.form.email}
                  </label>
                  <input
                    type="email"
                    placeholder={t.form.emailPlaceholder}
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

                <div className="space-y-2">
                  <label className="block text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300">
                    {t.form.phone}
                  </label>
                  <input
                    type="tel"
                    placeholder={t.form.phonePlaceholder}
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
              </div>

              {/* حقل عدد سنوات الخبرة */}
              <div className="space-y-2">
                <label className="block text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300">
                  {t.form.experience}
                </label>
                <select
                  value={formData.experience}
                  onChange={(e) => {
                    setFormData({...formData, experience: e.target.value});
                    if (errors.experience) setErrors({...errors, experience: ''});
                    if (formError) setFormError('');
                  }}
                  className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-950 border text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 transition-all cursor-pointer ${
                    errors.experience ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 dark:border-slate-800 focus:ring-emerald-500'
                  }`}
                >
                  <option value="">{t.form.experiencePlaceholder}</option>
                  {experienceOptions.map((opt, idx) => (
                    <option key={idx} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                {errors.experience && <p className="text-xs text-red-500 font-semibold">{errors.experience}</p>}
              </div>

              {/* اختيار القسم الرئيسي */}
              <div className="space-y-2">
                <label className="block text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300">
                  {t.form.selectDepartment}
                </label>
                <select
                  value={selectedDeptId}
                  onChange={(e) => {
                    const val = e.target.value;
                    setSelectedDeptId(val);
                    setFormData({...formData, department: val, position: ''});
                    if (errors.department) setErrors({...errors, department: ''});
                    if (formError) setFormError('');
                  }}
                  className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-950 border text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 transition-all ${
                    errors.department ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 dark:border-slate-800 focus:ring-emerald-500'
                  }`}
                >
                  <option value="">{t.form.selectDepartment}...</option>
                  {t.departments?.map((dept) => (
                    <option key={dept.id} value={dept.id}>
                      {dept.name}
                    </option>
                  ))}
                </select>
                {errors.department && <p className="text-xs text-red-500 font-semibold">{errors.department}</p>}
              </div>

              {/* اختيار المسمى الوظيفي المستهدف */}
              <div className="space-y-2">
                <label className="block text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300">
                  {t.form.selectPosition}
                </label>
                <select
                  disabled={!selectedDeptId}
                  value={formData.position}
                  onChange={(e) => {
                    setFormData({...formData, position: e.target.value});
                    if (errors.position) setErrors({...errors, position: ''});
                    if (formError) setFormError('');
                  }}
                  className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-950 border text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 transition-all disabled:opacity-50 cursor-pointer ${
                    errors.position ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 dark:border-slate-800 focus:ring-emerald-500'
                  }`}
                >
                  <option value="">{t.form.positionPlaceholder}</option>
                  {selectedDept?.positions.map((pos, idx) => (
                    <option key={idx} value={pos}>
                      {pos}
                    </option>
                  ))}
                </select>
                {errors.position && <p className="text-xs text-red-500 font-semibold">{errors.position}</p>}
              </div>

              {/* رفع ملف الـ PDF */}
              <div className="space-y-2">
                <label className="block text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300">
                  {t.form.cvFile}
                </label>
                <input
                  type="file"
                  accept=".pdf"
                  onChange={(e) => {
                    setFormData({...formData, cvFile: e.target.files?.[0] || null});
                    if (errors.cvFile) setErrors({...errors, cvFile: ''});
                    if (formError) setFormError('');
                  }}
                  className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-950 border text-slate-900 dark:text-white text-sm file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-emerald-50 file:text-emerald-700 dark:file:bg-slate-800 dark:file:text-emerald-300 hover:file:bg-emerald-100 transition-all cursor-pointer ${
                    errors.cvFile ? 'border-red-500' : 'border-slate-300 dark:border-slate-800'
                  }`}
                />
                {errors.cvFile && <p className="text-xs text-red-500 font-semibold">{errors.cvFile}</p>}
              </div>

              {/* رسالة الخطأ العامة التي تظهر فوق زر الإرسال عند وجود أخطاء */}
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
                {t.form.submit}
              </button>
            </form>
          )}
        </div>

      </main>

    </div>
  );
}