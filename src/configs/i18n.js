import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../locales/en';
import fr from '../locales/fr';
export const LANGUAGES = ['en', 'fr'];

i18n.use(initReactI18next).init({
    ns: ['common', 'vod', 'epg'],
    defaultNS: 'common',
    interpolation: { escapeValue: false },
    fallbackLng: 'en',
    supportedLngs: LANGUAGES,

    resources: {
        en,
        fr,
    },
    lng: 'en',
});

export default i18n;
