import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    eng: {
        sign_in: require('../../../public/locales/en/sign_in.json'),
        common: require('../../../public/locales/en/common.json'),
        booking: require('../../../public/locales/en/booking.json'),
        checkout: require('../../../public/locales/en/checkout.json'),
        custommer: require('../../../public/locales/en/custommer.json'),
        form: require('../../../public/locales/en/form.json'),
        table: require('../../../public/locales/en/table.json'),
    },
    vie: {
        sign_in: require('../../../public/locales/vi/sign_in.json'),
        common: require('../../../public/locales/vi/common.json'),
        booking: require('../../../public/locales/vi/booking.json'),
        checkout: require('../../../public/locales/vi/checkout.json'),
        custommer: require('../../../public/locales/vi/custommer.json'),
        form: require('../../../public/locales/vi/form.json'),
        table: require('../../../public/locales/vi/table.json'),
    },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'eng',
        keySeparator: false,
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;