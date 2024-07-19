import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslations from '../Languages/EN/global.json';
import azTranslations from '../Languages/AZ/global.json';
import ruTranslations from '../Languages/RU/global.json';

const savedLanguage = localStorage.getItem('i18nextLng') || 'en';

i18n
    .use(initReactI18next)
    .init({
        lng: savedLanguage, 
        fallbackLng: 'en',
        debug: true,
        interpolation: {
            escapeValue: false
        },
        resources: {
            en: {
                translation: enTranslations
            },
            az: {
                translation: azTranslations
            },
            ru: {
                translation: ruTranslations
            }
        }
    });

i18n.on('languageChanged', (lng) => {
    localStorage.setItem('i18nextLng', lng);
});

export default i18n;