import React from 'react';
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoFacebook } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { ReactTyped } from "react-typed";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";

const Hero = () => {
  return (
    <div id='Home' name="Home" className='w-full min-h-screen bg-gray-950 text-white dark:bg-white dark:text-black flex flex-col md:flex-row pt-[65px] transition-colors duration-300 shadow-md'>

      {/* Image Section */}
      <div className='w-full p-8 md:p-12 md:w-1/2 order-1 md:order-2 flex justify-center items-center'>
        <img
          className='w-[350px] md:w-[450px] rounded-full object-cover'
          src="/images/Ratioabhi.webp"
          alt="Abhyas"
        />
      </div>

      {/* Content Section */}
      <div className='w-full px-6 pb-10 md:px-20 md:w-1/2 order-2 md:order-1 flex flex-col justify-between md:pt-20'>
        <div>
          <h1 className='text-4xl md:text-4xl font-bold'>
            Hi! My name is <span className='text-sky-400 text-[35px] md:text-[35px]'>ABHYAS</span>
          </h1>
          <h1 className='text-4xl md:text-4xl font-bold'>I am a Passionate</h1>
          <ReactTyped
            className='text-sky-400 text-4xl md:text-4xl font-bold'
            strings={["Full stack web developer", "Programmer", "Coder", "Freelancer"]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
          <p className='mt-4 font-sans font-semibold'>
            I am a passionate full stack Web Developer with one years of experience in creating stunning
            web applications.
          </p>

          {/* Social Section */}
          <div className='mt-5 space-y-6 md:space-y-0 md:flex md:justify-between'>
            <div className='text-center md:text-left'>
              <p>Available on</p>
              <ul className='mt-2 flex justify-center md:justify-start space-x-3'>
                <li className='text-2xl p-2 border border-white rounded-full hover:scale-110 duration-200 cursor-pointer'>
                  <a
                    href="https://api.whatsapp.com/send?phone=919693040766&text=Hi%20Abhyas!%20I%20visited%20your%20portfolio."
                    target="_blank"
                    rel="noopener noreferrer"
                    
                  >
                    <FaWhatsapp />
                  </a>
                </li>
                <li className='text-2xl p-2 border border-white rounded-full hover:scale-110 duration-200 cursor-pointer'>
                  <a href="https://instagram.com/abhyas_kr" target="_blank" rel="noopener noreferrer">
                    <IoLogoInstagram />
                  </a>
                </li>
                <li className='text-2xl p-2 border border-white rounded-full hover:scale-110 duration-200 cursor-pointer'>
                  <a href="https://www.linkedin.com/in/Abhyas kumar" target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className='text-2xl p-2 border border-white rounded-full hover:scale-110 duration-200 cursor-pointer'>
                  <a href="https://github.com/abhyaskumar" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                  </a>
                </li>
              </ul>
            </div>

            <div className='text-center md:text-left'>
              <p>Currently working on</p>
              <ul className='mt-2 flex justify-center md:justify-start space-x-3'>
                <li className='text-2xl p-2 border border-white rounded-full hover:scale-110 duration-200 cursor-pointer'>
                  <FaReact />
                </li>
                <li className='text-2xl p-2 border border-white rounded-full hover:scale-110 duration-200 cursor-pointer'>
                  <FaNodeJs />
                </li>
                <li className='text-2xl p-2 border border-white rounded-full hover:scale-110 duration-200 cursor-pointer'>
                  <SiExpress />
                </li>
                <li className='text-2xl p-2 border border-white rounded-full hover:scale-110 duration-200 cursor-pointer'>
                  <DiMongodb />
                </li>
              </ul>
            </div>
          </div>

          {/* Location & Availability */}
          <div className='mt-5 space-y-2'>
            <div className='flex items-center space-x-2'>
              <IoLocationOutline />
              <span>Ranchi, India</span>
            </div>
            <div className='flex items-center space-x-2'>
              <GoDotFill />
              <span>Available for new projects</span>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-7 flex flex-wrap gap-4 justify-between">
          <a
            href="#Contact"
            className="relative inline-block px-4 py-3 font-bold text-sky-600 border border-sky-600 rounded-xl overflow-hidden group flex-1 text-center"
          >
            <span className="absolute inset-0 bg-sky-600 transition-transform duration-500 ease-in-out transform group-hover:translate-x-full"></span>
            <span className="relative z-10 group-hover:text-white dark:group-hover:text-black text-black  transition duration-300">
              Hire me
            </span>
          </a>

          <a
            href="/Resume.pdf"
            download
            className="relative inline-block px-4 py-3 font-bold text-white overflow-hidden group rounded-xl border border-sky-600 flex-1 text-center"
          >
            <span className="absolute inset-0 w-0 bg-sky-600 transition-all duration-300 ease-out group-hover:w-full"></span>
            <span className="relative z-10 group-hover:text-black text-white dark:text-black">Download CV</span>
          </a>
          
        </div>
      </div>
      
    </div>
    
  );
};

export default Hero;