import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
    {
    title: 'School Website',
    description: 'A school website which is created by using React js and tailwind css. It is Frontend school website which is hosted in hostinger',
    github: 'https://github.com/abhyaskumar',
    demo: 'https://vspsbero.in/', 
    tech: ['React', 'TailwindCSS', 'Responsive'],
  },
  {
    title: 'Portfolio Website',
    description: 'My personal portfolio website built with React, TailwindCSS, and React Icons, showcasing my skills and projects.',
    github: 'https://github.com/abhyaskumar',
    demo: 'https://abhi-portfolio-uptt.onrender.com/', // you can replace with live URL if hosted
    tech: ['React', 'TailwindCSS', 'Dark Mode', 'Responsive'],
  },
  {
    title: 'coaching website',
    description: 'A full stack coaching website user can register and login and download study material and  do live class,and also provide admin dashboard features',
    github: 'https://github.com/abhyaskumar/ecommerce-app',
    demo: 'https://restartcareeracademy.free.nf/?i&i=1',
    tech: ['HTML', 'CSS', 'JS' , 'PHP', 'SQL' ],
  },
  {
    title: 'Travel Website',
    description: 'A group project where i work on frontend and develop a layout of the project using html,css,js',
    github: 'https://github.com/abhyaskumar/blog-platform',
    demo: 'https://tripmaster.netlify.app/',
    tech: ['HTML', 'CSS', 'Bootstrap', 'JS', 'Firebase'],
  },
];

const Projects = () => {
  return (
    <div
      id="Projects"
      name="Projects"
      className="w-full min-h-screen  bg-[#0f1115] text-white dark:bg-white dark:text-black px-6 md:px-20 py-16"
    >
      <h2 className="text-4xl font-bold mb-10 text-center">
        My <span className="text-sky-400">Projects</span>
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 dark:bg-gray-100 text-white dark:text-black rounded-xl shadow-lg p-6 hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
            <p className="text-sm mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-1 text-xs bg-sky-600 text-white rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-start gap-4 mt-2">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:text-sky-400"
                title="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:text-sky-400"
                title="Live Demo"
              >
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
