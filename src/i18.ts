import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import homepage_en from './assets/lang/en/homepage.json';
import homepage_ce from './assets/lang/ce/homepage.json';
import common_en from './assets/lang/en/common.json';
import common_ce from './assets/lang/ce/common.json';

i18n
  .use(Backend)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        common: common_en,
        homepage: homepage_en,

      },
      ce: {
        common: common_ce,
        homepage: homepage_ce
      },
  },
    fallbackLng: 'en',
    debug: true,
    react: { 
      useSuspense: false
    },
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    returnObjects: true
  });

export default i18n;