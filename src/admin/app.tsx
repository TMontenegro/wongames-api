import Icon from "./extensions/icon.png";
import Logo from "./extensions/logo.svg";

export default {
  config: {
    auth: {
      logo: Logo,
    },
    head: {
      favicon: Icon,
    },
    locales: ['en', 'pt-BR'],
    translations: {
      'en': {
        "Auth.form.welcome.title": "Welcome to Won Games!",
        "Auth.form.welcome.subtitle": "Log in to your account",
        "app.components.LeftMenu.navbrand.title": "Won Games Dashboard",
      },
      'pt-BR': {
        "Auth.form.welcome.title": "Bem-vindo a Won Games!",
        "Auth.form.welcome.subtitle": "Acesse a sua conta",
        "app.components.LeftMenu.navbrand.title": "Won Games Dashboard",
      }
    },
    menu: {
      logo: Icon,
    },
    theme: {
      light: {},
      dark: {
        colors: {
          primary100: "#030415",
          primary600: "#f231a5",
          primary700: "#f231a5",
          neutral0: "#0d102f",
          neutral100: "#030415",
        },
      },
    },
    tutorials: false,
    notifications: {
      releases: false,
    }
  },
  bootstrap() { },
};
