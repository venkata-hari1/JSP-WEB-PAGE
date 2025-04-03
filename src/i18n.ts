import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { English } from './utils/locales/english';
import { Hindi } from './utils/locales/hindi';
import { Telugu } from './utils/locales/Telugu';

const resources = {
  en:English,
  hi:Hindi,
  te:Telugu
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", 
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
