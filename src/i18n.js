import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./locales/en/translationEN.json";
import translationTR from "./locales/tr/translationTR.json";

const resources = {
  EN: {
    translation: translationEN,
  },
  TR: {
    translation: translationTR,
  },
};
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "EN",
    keySeparator: false,
    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });

export default i18n;
