'use client';
import React from 'react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logo Block */}
        <div className="flex items-center gap-3">
          <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-2xl bg-white flex items-center justify-center shadow-md overflow-hidden border border-slate-100 p-1">
            <div className="flex items-center">
              <img 
                src="../images/logo.png" 
                alt="شعار شركة حلول العالم" 
                className="h-14 sm:h-16 w-auto object-contain" 
              />
            </div>
          </div>
          <div>
            <span className="text-xl sm:text-2xl font-extrabold bg-linear-to-r from-blue-700 via-blue-900 to-emerald-600 bg-clip-text text-transparent block leading-none">
              حلول العالم
            </span>
            <span className="text-xs sm:text-sm text-slate-500 font-medium tracking-wider uppercase mt-1 block">
              Alaalam Solutions
            </span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-700">
          <a href="/" className="hover:text-blue-600 transition-colors">الرئيسية</a>
          <a href="services" className="hover:text-blue-600 transition-colors">خدماتنا</a>
          <a href="WhyUs" className="hover:text-blue-600 transition-colors">لماذا نحن</a>
          <a href="HowItWorks" className="hover:text-blue-600 transition-colors">آلية العمل</a>
        </nav>

        {/* CTA Button */}
        <a
          href="#contact"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2.5 rounded-xl shadow-sm hover:shadow-md transition-all active:scale-95 text-sm"
        >
          تواصل معنا
        </a>
      </div>
    </header>
  );
}