import { useState } from 'react';
import { motion } from 'framer-motion';
import { SunIcon, MoonIcon } from '@heroicons/react/solid';
import { Link as ScrollLink } from 'react-scroll'; // react-scroll kutubxonasidan ScrollLink
import Link from 'next/link';

export function Header({ currentLanguage, setCurrentLanguage, darkMode, setDarkMode, translations }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const changeLanguage = (lang) => {
    setCurrentLanguage(lang);
    setIsDropdownOpen(false);
    setIsMenuOpen(false); // Close the menu when a language is selected
  };

  return (
    <div className={`w-full ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"} shadow-xl`}>
      <div className="md:max-w-[80%] mx-auto py-4 flex justify-between items-center">
        <Link href={"/"}>
          <div className="flex gap-1 justify-center items-center">
            <img className="w-[40px] h-[40px]" src="/favicon.png" alt="Logo" />
            <span className="text-[22px] font-bold leading-[24.48px]">ApexBrat</span>
          </div>
        </Link>

        <div className="flex items-center gap-6 md:gap-4">
          {/* Desktop Menu */}
          <motion.div
            className="flex gap-6 items-center hidden md:flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <ScrollLink to="hero" smooth={true} duration={500} offset={-70} className="hover:text-blue-500 cursor-pointer">
              {translations[currentLanguage].home}
            </ScrollLink>
            <ScrollLink to="about" smooth={true} duration={500} offset={-70} className="hover:text-blue-500 cursor-pointer">
              {translations[currentLanguage].about_us}
            </ScrollLink>
            <ScrollLink to="projects" smooth={true} duration={500} offset={-70} className="hover:text-blue-500 cursor-pointer">
              {translations[currentLanguage].projects}
            </ScrollLink>
            <ScrollLink to="contact" smooth={true} duration={500} offset={-70} className="hover:text-blue-500 cursor-pointer">
              {translations[currentLanguage].contact_us}
            </ScrollLink>
          </motion.div>

          {/* Language Switch */}
          <div className="relative hidden md:block">
            <motion.div
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="bg-transparent text-black dark:text-white border-none px-3 py-1 rounded-md cursor-pointer"
              whileTap={{ scale: 0.95 }}
            >
              <span className="mr-2">
                <img src={`/${currentLanguage}.png`} alt={currentLanguage} className="w-5 h-5 inline-block" />
              </span>
              {currentLanguage.toUpperCase()}
            </motion.div>

            {isDropdownOpen && (
              <motion.ul
                className="absolute left-0 right-0 bg-white dark:bg-gray-800 shadow-lg mt-2 rounded-md z-10"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                {["uz", "ru", "en"].map((lang) => (
                  <motion.li
                    key={lang}
                    onClick={() => changeLanguage(lang)}
                    className="flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700"
                    whileHover={{ scale: 1.05 }}
                  >
                    <img src={`/${lang}.png`} alt={lang} className="w-5 h-5 inline-block" />
                    {lang.toUpperCase()}
                  </motion.li>
                ))}
              </motion.ul>
            )}
          </div>

          {/* Dark Mode Toggle */}
          <motion.button
            onClick={() => setDarkMode(!darkMode)}
            className="text-black dark:text-white px-3 py-2 rounded-md flex items-center"
            whileTap={{ scale: 0.95 }}
          >
            {darkMode ? <MoonIcon className="w-5 h-5" /> : <SunIcon className="w-5 h-5" />}
          </motion.button>

          {/* Sign In & Sign Up buttons */}
          <div className="flex gap-4 hidden md:flex">
            <Link href="/signin">
              <motion.button
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                whileHover={{ scale: 1.05 }}
              >
                Sign In
              </motion.button>
            </Link>
            <Link href="/signup">
              <motion.button
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                whileHover={{ scale: 1.05 }}
              >
                Sign Up
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-black dark:text-white px-3 py-2 rounded-md"
              whileTap={{ scale: 0.95 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden bg-white dark:bg-gray-800 p-4 shadow-lg"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col gap-4">
            <ScrollLink to="hero" smooth={true} duration={500} offset={-70} className="hover:text-blue-500 cursor-pointer">
              {translations[currentLanguage].home}
            </ScrollLink>
            <ScrollLink to="about" smooth={true} duration={500} offset={-70} className="hover:text-blue-500 cursor-pointer">
              {translations[currentLanguage].about_us}
            </ScrollLink>
            <ScrollLink to="projects" smooth={true} duration={500} offset={-70} className="hover:text-blue-500 cursor-pointer">
              {translations[currentLanguage].projects}
            </ScrollLink>
            <ScrollLink to="contact" smooth={true} duration={500} offset={-70} className="hover:text-blue-500 cursor-pointer">
              {translations[currentLanguage].contact_us}
            </ScrollLink>

            {/* Mobile Language Switch */}
            <div className="relative">
              <motion.div
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="bg-transparent text-black dark:text-white border-none px-3 py-1 rounded-md cursor-pointer"
                whileTap={{ scale: 0.95 }}
              >
                <span className="mr-2">
                  <img src={`/${currentLanguage}.png`} alt={currentLanguage} className="w-5 h-5 inline-block" />
                </span>
                {currentLanguage.toUpperCase()}
              </motion.div>

              {isDropdownOpen && (
                <motion.ul
                  className="absolute left-0 right-0 bg-white dark:bg-gray-800 shadow-lg mt-2 rounded-md z-10"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {["uz", "ru", "en"].map((lang) => (
                    <motion.li
                      key={lang}
                      onClick={() => changeLanguage(lang)}
                      className="flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700"
                      whileHover={{ scale: 1.05 }}
                    >
                      <img src={`/${lang}.png`} alt={lang} className="w-5 h-5 inline-block" />
                      {lang.toUpperCase()}
                    </motion.li>
                  ))}
                </motion.ul>
              )}
            </div>

            <Link href="/signin">
              <motion.button
                className="bg-blue-500 text-white px-4 py-2 rounded-md w-full hover:bg-blue-600"
                whileHover={{ scale: 1.05 }}
              >
                Sign In
              </motion.button>
            </Link>
            <Link href="/signup">
              <motion.button
                className="bg-green-500 text-white px-4 py-2 rounded-md w-full hover:bg-green-600"
                whileHover={{ scale: 1.05 }}
              >
                Sign Up
              </motion.button>
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  );
}
