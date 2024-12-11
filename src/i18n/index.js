import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      dashboard: {
        title: 'Dashboard',
        signals: 'Trading Signals',
        analytics: 'Analytics',
        settings: 'Settings'
      },
      auth: {
        login: 'Login',
        register: 'Register',
        verify: 'Verify Code'
      }
    }
  },
  es: {
    translation: {
      dashboard: {
        title: 'Panel de Control',
        signals: 'Señales de Trading',
        analytics: 'Análisis',
        settings: 'Configuración'
      },
      auth: {
        login: 'Iniciar Sesión',
        register: 'Registrarse',
        verify: 'Verificar Código'
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
