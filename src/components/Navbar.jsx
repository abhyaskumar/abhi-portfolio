import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaMoon, FaSun } from 'react-icons/fa';

const Navbar = ({ toggleDarkMode, isDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className='fixed top-0 left-0 z-50 flex justify-between py-6 px-6 w-full h-[65px] bg-gray-900 text-white dark:bg-white dark:text-black items-center shadow-md'>

        <div className='text-[25px] font-bold mx-2 md:mx-20 md:text-[32px]'>ABHYAS</div>

        <div className="flex items-center gap-x-4">
          {/* Desktop Menu */}
          <ul className='hidden md:flex justify-between gap-x-10 mr-2'>
            {["Home", "About", "Education", "Skills", "Projects", "Contact"].map((section) => (
              <li key={section} className="cursor-pointer text-[18px] hover:text-sky-400">
                <Link to={section} smooth={true} duration={500}>{section === "Contact" ? "Contact us" : section}</Link>
              </li>
            ))}
          </ul>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="border px-3 py-1 rounded hover:bg-gray-700 transition md:block hidden"
            title="Toggle Dark Mode"
          >
            {isDarkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-white" />}
          </button>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden cursor-pointer text-[25px]" onClick={toggleMenu}>
            {isOpen ? '✖' : '☰'}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
  <div className='fixed top-0 left-0 w-full min-h-screen z-50 bg-white/80 dark:bg-gray-900/90 backdrop-blur-md text-black dark:text-white'>
    <ul className='flex flex-col items-center justify-center gap-y-8 pt-32 pb-16 text-lg font-semibold'>
      <li className="cursor-pointer hover:text-gray-500 dark:hover:text-gray-300 transition">
        <Link to="Home" smooth={true} duration={500} onClick={toggleMenu}>Home</Link>
      </li>
      <li className="cursor-pointer hover:text-gray-500 dark:hover:text-gray-300 transition">
        <Link to="About" smooth={true} duration={500} onClick={toggleMenu}>About</Link>
      </li>
      <li className="cursor-pointer hover:text-gray-500 dark:hover:text-gray-300 transition">
        <Link to="Education" smooth={true} duration={500} onClick={toggleMenu}>Education</Link>
      </li>
      <li className="cursor-pointer hover:text-gray-500 dark:hover:text-gray-300 transition">
        <Link to="Skills" smooth={true} duration={500} onClick={toggleMenu}>Skills</Link>
      </li>
      <li className="cursor-pointer hover:text-gray-500 dark:hover:text-gray-300 transition">
        <Link to="Projects" smooth={true} duration={500} onClick={toggleMenu}>Projects</Link>
      </li>
      <li className="cursor-pointer hover:text-gray-500 dark:hover:text-gray-300 transition">
        <Link to="Contact" smooth={true} duration={500} onClick={toggleMenu}>Contact us</Link>
      </li>

      {/* Dark Mode Toggle in Mobile Menu */}
      <button
        onClick={toggleDarkMode}
        className="text-2xl mt-4 p-3 rounded-full border border-gray-400 dark:border-gray-600 hover:scale-110 transition duration-300 ease-in-out"
        title="Toggle Dark Mode"
      >
        {isDarkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-black dark:text-white" />}
      </button>
    </ul>
  </div>
)}

    </>
  );
};

export default Navbar;
