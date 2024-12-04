import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Tarjima resurslarini kiriting
const resources = {
  en: {
    common: {
      home: "Home",
      about_us: "About Us",
      projects: "Projects",
      contact_us: "Contact Us",
      sign_in: "Sign In",
      sign_up: "Sign Up",
    },
  },
  ru: {
    common: {
      home: "Главная",
      about_us: "О нас",
      projects: "Проекты",
      contact_us: "Свяжитесь с нами",
      sign_in: "Войти",
      sign_up: "Регистрация",
    },
  },
  uz: {
    common: {
      home: "Bosh sahifa",
      about_us: "Biz haqimizda",
      projects: "Loyihalar",
      contact_us: "Bog'lanish",
      sign_in: "Kirish",
      sign_up: "Ro'yxatdan o'tish",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // Standart til
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
