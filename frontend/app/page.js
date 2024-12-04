"use client";
import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Header } from "./Components/Header";
import Footer from "./Components/Footer";

const translations = {
  uz: {
    home: "Bosh sahifa",
    about_us: "Biz haqimizda",
    projects: "Loyihalar",
    contact_us: "Bog'lanish",
    hero_title: "ApexBrat - Bizning loyihalarimiz bilan tanishing",
    hero_subtitle:
      "Innovatsion echimlar, yuqori sifat va muvaffaqiyatga intilish",
    hero_button: "Loyihalar bilan tanishish",
    about_description:
      "Bizning maqsadimiz - yuqori sifatli xizmatlar va innovatsion echimlar orqali mijozlarimizni qoniqtirish.",
    contact_message: "Bog'lanish uchun quyidagi formani to'ldiring.",
  },
  ru: {
    home: "Главная",
    about_us: "О нас",
    projects: "Проекты",
    contact_us: "Свяжитесь с нами",
    hero_title: "ApexBrat - Знакомьтесь с нашими проектами",
    hero_subtitle:
      "Инновационные решения, высокое качество и стремление к успеху",
    hero_button: "Посмотреть проекты",
    about_description:
      "Наша цель - удовлетворить наших клиентов с помощью качественных услуг и инновационных решений.",
    contact_message: "Заполните форму ниже, чтобы связаться с нами.",
  },
  en: {
    home: "Home",
    about_us: "About Us",
    projects: "Projects",
    contact_us: "Contact Us",
    hero_title: "ApexBrat - Explore Our Projects",
    hero_subtitle:
      "Innovative solutions, high quality, and a drive for success",
    hero_button: "Explore Projects",
    about_description:
      "Our mission is to satisfy our clients through high-quality services and innovative solutions.",
    contact_message: "Fill out the form below to get in touch with us.",
  },
};

function Landing() {
  const [darkMode, setDarkMode] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("en");

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    const savedLanguage = localStorage.getItem("language");
    if (savedMode) setDarkMode(JSON.parse(savedMode));
    if (savedLanguage) setCurrentLanguage(savedLanguage);
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    localStorage.setItem("language", currentLanguage);
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode, currentLanguage]);

  return (
    <div
      className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      } min-h-screen`}
    >
      <div className="fixed top-0 left-0 w-full z-50 bg-opacity-90 bg-white dark:bg-gray-900 shadow">
        <Header
          currentLanguage={currentLanguage}
          setCurrentLanguage={setCurrentLanguage}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          translations={translations}
        />
      </div>

      {/* Hero Section */}
      <div
        id="hero"
        className="hero min-h-screen bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      >
        <div className="hero-overlay bg-black bg-opacity-50"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-6xl font-extrabold text-white leading-snug mb-5">
              ApexBrat Solutions
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Innovatsiyalarni tadbiq etish orqali biznesingizni yangi bosqichga
              olib chiqing. Biz texnologik yechimlarimiz orqali muvaffaqiyatni
              ta'minlaymiz.
            </p>
            <div className="flex justify-center gap-4">
              <ScrollLink
                to="about"
                smooth={true}
                duration={500}
                offset={-70}
                className="btn text-white btn-primary px-6 py-3 text-lg font-semibold"
              >
                Biz haqimizda
              </ScrollLink>
              <ScrollLink
                to="projects"
                smooth={true}
                duration={500}
                offset={-70}
                className="btn btn-outline  btn-secondary px-6 py-3 text-lg text-white font-semibold"
              >
                Loyihalarimiz
              </ScrollLink>
            </div>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <section id="about" className="py-16 px-4 bg-gray-50">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">
            {translations[currentLanguage].about_us}
          </h2>
          <p className="text-lg mb-6 max-w-[70%] text-center mx-auto">
            Bizning kompaniyamiz mijozlarimizga texnologik yechimlar va
            xizmatlar bo‘yicha eng yaxshi tajribani taqdim etishga intiladi. Biz
            innovatsiyalar, yuqori sifat va hamkorlik asosida ishlashni maqsad
            qilganmiz.
          </p>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <img
              src="/about.jpg"
              alt="About Us"
              className="rounded-lg shadow-lg mx-auto"
            />
            <div>
              <p className="text-lg">
                Bizning jamoamiz malakali mutaxassislar va strateglar bo‘lib,
                ular mijozlarimizga innovatsion loyihalar va muammolar
                yechimlarini taklif qiladi. Har bir loyiha - bu biz uchun yangi
                yutuq va imkoniyat.
              </p>
              <ul className="list-disc list-inside mt-4 text-left">
                <li>Innovatsion xizmatlar</li>
                <li>Yuqori sifatli texnologiyalar</li>
                <li>Mijozlarning ishonchi va mamnunligi</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 bg-gray-100">
        <h2 className="text-center text-3xl font-bold mb-6">
          {translations[currentLanguage].projects}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Example Project */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-2">Loyihaning nomi</h3>
            <p className="text-sm">
              Loyihaning qisqacha ta'rifi. O'z ichiga olgan asosiy ma'lumotlar.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="py-16 px-4 bg-gray-100">
        <h2 className="text-center text-3xl font-bold mb-6">
          {translations[currentLanguage].contact_us}
        </h2>
        <p className="text-center text-lg mb-6">
          Muloqot o‘rnatish uchun quyidagi formani to‘ldiring yoki bizga
          to‘g‘ridan-to‘g‘ri elektron pochta orqali murojaat qiling.
        </p>
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="first-name"
                >
                  Ism
                </label>
                <input
                  type="text"
                  id="first-name"
                  placeholder="Ismingiz"
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="last-name"
                >
                  Familiya
                </label>
                <input
                  type="text"
                  id="last-name"
                  placeholder="Familiyangiz"
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            <div className="mt-6">
              <label className="block text-sm font-medium mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Emailingiz"
                className="input input-bordered w-full"
              />
            </div>
            <div className="mt-6">
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="message"
              >
                Xabar
              </label>
              <textarea
                id="message"
                placeholder="Xabaringizni bu yerda yozing..."
                rows={5}
                className="textarea textarea-bordered w-full"
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn text-white btn-primary w-full mt-6 py-3 text-lg"
            >
              Xabarni yuborish
            </button>
          </form>
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              Biz sizning xabaringizga 24 soat ichida javob beramiz.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Landing;
