import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className='fixed top-0 left-0 z-50 flex justify-between py-6 px-6 w-full h-[65px] bg-gray-900 text-white items-center shadow-md'>

        <div className='text-[25px] font-bold mx-2 md:mx-20 md:text-[32px] '>ABHYAS</div>
        <div>
          {/* Desktop Menu */}
          <ul className='hidden md:flex justify-between gap-x-10 mr-20'>
            <li className="cursor-pointer text-white text-[18px] hover:text-sky-400 ">
              <Link
                to="Home"
                smooth={true}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li className="cursor-pointer text-white text-[18px] hover:text-sky-400 ">
              <Link
                to="About"
                smooth={true}
                duration={500}
              >
                About
              </Link>
            </li>
            <li className="cursor-pointer text-white text-[18px] hover:text-sky-400 ">
              <Link
                to="Education"
                smooth={true}
                duration={500}
              >
                Education
              </Link>
            </li>
            <li className="cursor-pointer text-white text-[18px] hover:text-sky-400 ">
              <Link
                to="Skills"
                smooth={true}
                duration={500}
              >
                Skills
              </Link>
            </li>
            <li className="cursor-pointer text-white text-[18px] hover:text-sky-400 ">
              <Link
                to="Projects"
                smooth={true}
                duration={500}
              >
                Projects
              </Link>
            </li>
            <li className="cursor-pointer text-white text-[18px] hover:text-sky-400 ">
              <Link
                to="Contact"
                smooth={true}
                duration={500}
              >
                Contact us
              </Link>
            </li>

          </ul>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden cursor-pointer mr-3 text-[25px] " onClick={toggleMenu}>
            {isOpen ? '✖' : '☰'}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div >
          <ul className=' flex flex-col items-center justify-center gap-y-6  h-screen md:hidden text-black'>
            <li className="cursor-pointer text-[18px] hover:text-gray-400 font-semibold">              
              <Link
                to="Home"
                smooth={true}
                duration={500}
              >
                Home
              </Link></li>
            <li className="cursor-pointer text-[18px] hover:text-gray-400 font-semibold">
            <Link
                to="About"
                smooth={true}
                duration={500}
              >
                About
              </Link>
            </li>
            <li className="cursor-pointer text-[18px] hover:text-gray-400 font-semibold">
            <Link
                to="Education"
                smooth={true}
                duration={500}
              >
                Education
              </Link>
            </li>
            <li className="cursor-pointer text-[18px] hover:text-gray-400 font-semibold">
            <Link
                to="Skills"
                smooth={true}
                duration={500}
              >
                Skills
              </Link>
            </li>
            <li className="cursor-pointer text-[18px] hover:text-gray-400 font-semibold">
            <Link
                to="Projects"
                smooth={true}
                duration={500}
              >
                Projects
              </Link>
            </li>
            <li className="cursor-pointer text-[18px] hover:text-gray-400 font-semibold">
            <Link
                to="Contact"
                smooth={true}
                duration={500}
              >
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
