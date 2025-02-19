import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import translations from "./languages/en/translation.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    resources: {
      en: {
        translations,
      },
    },
    ns: ["translations"],
    defaultNS: "translations",
  });

i18n.languages = ["en"];

export default i18n;
