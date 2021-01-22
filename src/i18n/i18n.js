import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import translationsEN from "./locales/en/en.json";
import translationsAR from "./locales/ar/ar.json";

const resources = {
  en: {
    translation: translationsEN,
  },
  ar: {
    translation: translationsAR,
  },
};

i18next.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});
export default i18next;
