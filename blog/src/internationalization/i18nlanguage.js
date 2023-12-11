import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {useState} from "react";

i18n.use(initReactI18next).init({
    resources: {
        en:
            {
                translations: {
                   'home_page':'Home Page',
                   'blog':'Blog',
                   'about':'About',
                   'contact':'Contact',
                   'search':'Search',
                   'languages':'Languages',
                   'services':'Services',
                }
            },
        tr:
            {
                translations: {
                   'home_page':'Anasayfa',
                   'blog':'Blog',
                   'about':'Hakkımızda',
                   'contact':'İletişim',
                   'search':'Arama',
                   'languages':'Diller',
                   'services':'Servisler',
                }
            }
    },
    fallbackLng: 'tr',    //fallbackLng: 'en', fall back function    
    ns: ['translations'], //kelimeleri nerede alsın
    defaultNS: 'translations',
    keySeparator: false,
    interpolation: {escapeValue: false, formatSeparator: ','},
    react: {
        wait: true
    }
});
export default i18n;