import React from 'react';
import { FaWhatsapp, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { IoLogoFacebook } from 'react-icons/io5';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white py-10 px-4 text-center space-y-6">
      
      {/* Logo / Name */}
      <h2 className="text-3xl font-bold text-white">Abhyas.</h2>

      {/* Navigation Links */}
      <nav className="flex flex-wrap justify-center gap-6 text-sm font-medium text-gray-300">
        <a href="#Home" className="hover:text-sky-400 transition">Home</a>
        <a href="#About" className="hover:text-sky-400 transition">About</a>
        <a href="#Education" className="hover:text-sky-400 transition">Education</a>
        <a href="#Skills" className="hover:text-sky-400 transition">Skills</a>
        <a href="#Projects" className="hover:text-sky-400 transition">Projects</a>
        <a href="#Services" className="hover:text-sky-400 transition">Services</a>
        <a href="#Contact" className="hover:text-sky-400 transition">Contact</a>
      </nav>

      {/* Social Links */}
      <div>
        <h3 className="text-base font-semibold text-white mb-3">Social Links</h3>
        <div className="flex justify-center gap-4 text-xl">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border-2 border-sky-400 rounded-full text-white hover:bg-sky-400 hover:text-black transition duration-300"
          >
            <IoLogoFacebook />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=919693040766&text=Hi%20Abhyas!"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border-2 border-sky-400 rounded-full text-white hover:bg-sky-400 hover:text-black transition duration-300"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://linkedin.com/in/abhyaskumar"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border-2 border-sky-400 rounded-full text-white hover:bg-sky-400 hover:text-black transition duration-300"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/abhyaskumar"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border-2 border-sky-400 rounded-full text-white hover:bg-sky-400 hover:text-black transition duration-300"
          >
            <FaGithub />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <p className="text-sm text-gray-400 pt-4">
        © {new Date().getFullYear()} Abhyas's Portfolio | All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
