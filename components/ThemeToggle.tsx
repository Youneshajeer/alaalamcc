'use client';

import React, { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);
  }, []);

  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    
    const htmlElement = document.documentElement;
    
    if (htmlElement.classList.contains('dark')) {
      htmlElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
      console.log('Switched to LIGHT mode');
    } else {
      htmlElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
      console.log('Switched to DARK mode');
    }
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      className="p-3 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-amber-400 font-bold cursor-pointer transition-all active:scale-95 z-50 relative"
    >
      {isDark ? '☀️ فاتح' : '🌙 داكن'}
    </button>
  );
}