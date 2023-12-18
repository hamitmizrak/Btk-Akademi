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
                   'register':'Register',
                   'cleaner':'Cleaner',
                   'added':'Added',
                   'username':'Username',
                   'surname':'Surname',
                   'email':'Email Address',
                   'password':'Password',
                   'systemCreatedDate':'System Created Date',
                   'update':'Update',
                   'view':'View',
                   'delete':'Delete',
                   'register_list':"Register List",
                   'register_update':"Register Update",
                   'register_view':"Register View",
                   'register_create':"Register Create",
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
                   'cleaner':'Temizle',
                   'added':'Ekle',
                   'register':'Kayıt Ol',
                   'username':'Kullanıcı Adı',
                   'surname':'Kullanıcı Soyadı',
                   'email':'Email Addres',
                   'password':'Şifre',
                   'systemCreatedDate':'Tarih',
                   'update':'Güncelle',
                   'view':'Göster',
                   'delete':'Sil',
                   'register_list':"Kayıt Listesi",
                   'register_update':"Kayıt Güncelle",
                   'register_view':"Kayıtları Göster",
                   'register_create':"Kayıt Ekle",
                   
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