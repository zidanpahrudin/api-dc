import logoDC from './extensions/logo-dc.png'
import FavIcon from './extensions/favicon.ico'
export default {
  config: {
    locales: [
      // 'ar',
      // 'fr',
      // 'cs',
      // 'de',
      // 'dk',
      // 'es',
      // 'he',
      // 'id',
      // 'it',
      // 'ja',
      // 'ko',
      // 'ms',
      // 'nl',
      // 'no',
      // 'pl',
      // 'pt-BR',
      // 'pt',
      // 'ru',
      // 'sk',
      // 'sv',
      // 'th',
      // 'tr',
      // 'uk',
      // 'vi',
      // 'zh-Hans',
      // 'zh',
    ],
    head: {
      favicon: FavIcon
    },
    auth: {
      logo: logoDC
    },
    menu: {
      logo: logoDC
    },
    tutorials: false,
    notifications: {release: false},
  },
  bootstrap(app) {
    console.log(app);
  },
};
