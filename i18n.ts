import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// ملفات أو نصوص الترجمة الأولية
const resources = {
  ar: {
    translation: {
      hero_badge: "مركز اتصال ومقر لخدمات الأعمال (BPO Call Center)",
      hero_title_1: "نُشغّل خط التواصل مع عملائك،",
      hero_title_2: "وأنت تركّز على نمو عملك",
      hero_desc: "حلول العالم للاتصالات وتقنية المعلومات تبني وتُشغّل مراكز اتصال مخصصة للشركات في السعودية — استقبال، مبيعات هاتفية، دعم فني، وقنوات تواصل مكتوبة، على بنية تحتية مستضافة داخل المملكة.",
      demo_btn: "اطلب عرض تجريبي",
      services_btn: "استعرض الخدمات",
      features_title: "مميزات التشغيل السريع:"
    }
  },
  en: {
    translation: {
      hero_badge: "BPO Call Center & Business Services Hub",
      hero_title_1: "We run your customer communication line,",
      hero_title_2: "While you focus on growing your business",
      hero_desc: "Al-Alam Solutions for Telecommunications and IT builds and operates dedicated call centers for companies in Saudi Arabia — inbound, telemarketing, technical support, and written communication channels, on infrastructure hosted within the Kingdom.",
      demo_btn: "Request a Demo",
      services_btn: "Explore Services",
      features_title: "Quick Operation Features:"
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'ar', // اللغة الافتراضية
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;