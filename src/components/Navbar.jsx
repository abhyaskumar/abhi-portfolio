import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaMoon, FaSun } from 'react-icons/fa';

const Navbar = ({ toggleDarkMode, isDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className='fixed top-0 left-0 z-50 flex justify-between py-6 px-6 w-full h-[65px]  bg-gray-900 text-white dark:bg-white dark:text-black items-center shadow-md'>

        <div className='text-[25px] font-bold mx-2 md:mx-20 md:text-[32px]'>ABHYAS</div>

        <div className="flex items-center gap-x-4">
          {/* Desktop Menu */}
          <ul className='hidden md:flex justify-between gap-x-10 mr-2'>
            <li className="cursor-pointer text-[18px] hover:text-sky-400">
              <Link to="Home" smooth={true} duration={500}>Home</Link>
            </li>
            <li className="cursor-pointer text-[18px] hover:text-sky-400">
              <Link to="About" smooth={true} duration={500}>About</Link>
            </li>
            <li className="cursor-pointer text-[18px] hover:text-sky-400">
              <Link to="Education" smooth={true} duration={500}>Education</Link>
            </li>
            <li className="cursor-pointer text-[18px] hover:text-sky-400">
              <Link to="Skills" smooth={true} duration={500}>Skills</Link>
            </li>
            <li className="cursor-pointer text-[18px] hover:text-sky-400">
              <Link to="Projects" smooth={true} duration={500}>Projects</Link>
            </li>
            <li className="cursor-pointer text-[18px] hover:text-sky-400">
              <Link to="Contact" smooth={true} duration={500}>Contact us</Link>
            </li>
          </ul>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="border px-3 py-1 rounded hover:bg-gray-700 transition"
            title="Toggle Dark Mode"
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden cursor-pointer text-[25px]" onClick={toggleMenu}>
            {isOpen ? '✖' : '☰'}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='md:hidden bg-white dark:bg-gray-900 text-black dark:text-white'>
          <ul className='flex flex-col items-center justify-center gap-y-6 pt-20 pb-10'>
            <li className="cursor-pointer text-[18px] hover:text-gray-400 font-semibold">
              <Link to="Home" smooth={true} duration={500} onClick={toggleMenu}>Home</Link>
            </li>
            <li className="cursor-pointer text-[18px] hover:text-gray-400 font-semibold">
              <Link to="About" smooth={true} duration={500} onClick={toggleMenu}>About</Link>
            </li>
            <li className="cursor-pointer text-[18px] hover:text-gray-400 font-semibold">
              <Link to="Education" smooth={true} duration={500} onClick={toggleMenu}>Education</Link>
            </li>
            <li className="cursor-pointer text-[18px] hover:text-gray-400 font-semibold">
              <Link to="Skills" smooth={true} duration={500} onClick={toggleMenu}>Skills</Link>
            </li>
            <li className="cursor-pointer text-[18px] hover:text-gray-400 font-semibold">
              <Link to="Projects" smooth={true} duration={500} onClick={toggleMenu}>Projects</Link>
            </li>
            <li className="cursor-pointer text-[18px] hover:text-gray-400 font-semibold">
              <Link to="Contact" smooth={true} duration={500} onClick={toggleMenu}>Contact us</Link>
            </li>

            {/* Dark Mode Toggle in Mobile Menu */}
            <button
              onClick={toggleTheme}
              className="text-xl p-2 rounded-full border border-gray-600 dark:border-gray-300 hover:scale-110 transition"
              title="Toggle Dark Mode"
            >
              {theme === 'dark' ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-black" />}
            </button>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
