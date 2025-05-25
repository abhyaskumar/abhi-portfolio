import React from 'react';
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoFacebook } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { ReactTyped } from "react-typed";
import { FaWhatsapp, FaGithub, FaLinkedinIn, FaReact, FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";

const Hero = () => {
  return (
    <div id="Home" name="Home" className="w-full bg-gray-950 text-white pt-[65px]">
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row min-h-screen">

        {/* Image Section */}
        <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center items-center p-6 md:p-12">
          <div className="relative group">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-sky-400 to-sky-400 blur-sm opacity-90 group-hover:opacity-100 transition duration-500 group-hover:scale-105"></div>
            <img
              className="relative w-64 sm:w-72 md:w-96 rounded-full object-cover transition-transform duration-500 group-hover:scale-105"
              src="/images/Ratioabhi.webp"
              alt="Abhyas"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/2 order-2 md:order-1 flex flex-col justify-between p-6 md:pt-20">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Hi! My name is <span className="text-sky-400">ABHYAS</span>
            </h1>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">I am a Passionate</h1>
            <ReactTyped
              className="text-sky-400 text-2xl sm:text-3xl md:text-4xl font-bold"
              strings={["Full stack web developer", "Programmer", "Coder", "Freelancer"]}
              typeSpeed={40}
              backSpeed={50}
              loop
            />
            <p className="mt-4 font-sans font-semibold text-base md:text-lg">
              I am a passionate full stack Web Developer with one year of experience in creating stunning
              web applications.
            </p>

            {/* Social Sections */}
            <div className="mt-6 space-y-6 md:space-y-0 md:flex md:justify-between md:flex-wrap">
              <div className="text-center md:text-left">
                <p>Available on</p>
                <ul className="mt-2 flex justify-center md:justify-start space-x-3">
                  <li className="text-2xl p-2 border border-white rounded-full hover:scale-110 duration-200 cursor-pointer">
                    <a
                      href="https://api.whatsapp.com/send?phone=919693040766&text=Hi%20Abhyas!%20I%20visited%20your%20portfolio."
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaWhatsapp />
                    </a>
                  </li>
                  <li className="text-2xl p-2 border border-white rounded-full hover:scale-110 duration-200 cursor-pointer">
                    <a href="https://instagram.com/abhyas_kr" target="_blank" rel="noopener noreferrer">
                      <IoLogoInstagram />
                    </a>
                  </li>
                  <li className="text-2xl p-2 border border-white rounded-full hover:scale-110 duration-200 cursor-pointer">
                    <a href="https://www.linkedin.com/in/Abhyas kumar" target="_blank" rel="noopener noreferrer">
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li className="text-2xl p-2 border border-white rounded-full hover:scale-110 duration-200 cursor-pointer">
                    <a href="https://github.com/abhyaskumar" target="_blank" rel="noopener noreferrer">
                      <FaGithub />
                    </a>
                  </li>
                </ul>
              </div>

              <div className="text-center md:text-left mt-6 md:mt-0">
                <p>Currently working on</p>
                <ul className="mt-2 flex justify-center md:justify-start space-x-3">
                  <li className="text-2xl p-2 border border-white rounded-full hover:scale-110 duration-200 cursor-pointer">
                    <FaReact />
                  </li>
                  <li className="text-2xl p-2 border border-white rounded-full hover:scale-110 duration-200 cursor-pointer">
                    <FaNodeJs />
                  </li>
                  <li className="text-2xl p-2 border border-white rounded-full hover:scale-110 duration-200 cursor-pointer">
                    <SiExpress />
                  </li>
                  <li className="text-2xl p-2 border border-white rounded-full hover:scale-110 duration-200 cursor-pointer">
                    <DiMongodb />
                  </li>
                </ul>
              </div>
            </div>

            {/* Location & Availability */}
            <div className="mt-6 space-y-2">
              <div className="flex items-center space-x-2">
                <IoLocationOutline />
                <span>Ranchi, India</span>
              </div>
              <div className="flex items-center space-x-2">
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
              <span className="relative z-10 group-hover:text-white text-black transition duration-300">
                Hire me
              </span>
            </a>

            <a
              href="/Resume.pdf"
              download
              className="relative inline-block px-4 py-3 font-bold text-white overflow-hidden group rounded-xl border border-sky-600 flex-1 text-center"
            >
              <span className="absolute inset-0 w-0 bg-sky-600 transition-all duration-300 ease-out group-hover:w-full"></span>
              <span className="relative z-10 group-hover:text-black">Download CV</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
