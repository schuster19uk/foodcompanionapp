// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector) // Detect user language
  .use(Backend) // Load translations from server
  .use(initReactI18next)
  .init({
    backend: {
      // Configuration for i18next-http-backend
      loadPath: '/api/translations/{{lng}}',
      // Optionally add other backend options here
    },
    lng: 'en', // Default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: false // Avoid using suspense (optional)
    }
  });

export default i18n;