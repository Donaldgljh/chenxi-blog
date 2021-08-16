import LanguageDetector from 'i18next-browser-languagedetector';
import i18n from 'i18next';
import enUsTrans from '@/locales/en/app.json';
import zhCnTrans from '@/locales/zh/app.json';
import { initReactI18next } from 'react-i18next';

i18n
  .use(LanguageDetector) //嗅探当前浏览器语言
  .use(initReactI18next) //init i18next
  .init({
    //引入资源文件
    resources: {
      en: {
        translation: enUsTrans
      },
      zh: {
        translation: zhCnTrans
      }
    },
    //选择默认语言，选择内容为上述配置中的key，即en/zh
    fallbackLng: 'zh',
    lng: 'zh',
    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    }
  });

i18n.addResources('zh', 'app', zhCnTrans);
i18n.addResources('en', 'app', enUsTrans);

export default i18n;
