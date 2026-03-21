import React from 'react';

const About = () => {
  return (
<section
  id='About'
  className="scroll-mt-28 w-full min-h-screen  bg-gray-900 text-white dark:bg-white dark:text-black flex flex-col items-center justify-center px-4 py-16"
>
  {/* Heading */}
  <h2 className="text-4xl font-bold mb-4">
    About <span className="text-sky-400">Me</span>
  </h2>

  {/* Image */}
  <div className="my-6">
    <div className="w-52 h-52 md:w-64 md:h-64 rounded-full border-4 border-sky-400 flex items-center justify-center p-1">
      <img
        src="/images/tcs.jpg"
        alt="About me"
        className="w-full h-full object-cover rounded-full"
      />
    </div>
  </div>

  {/* Subheading */}
  <h3 className="text-lg md:text-xl font-bold text-center mb-4 px-4">
    Want to know more about me? Here you have it:
  </h3>

  {/* Description */}
  <p className="text-sm font-semibold md:text-base text-gray-300 dark:text-black text-center max-w-3xl px-4 leading-relaxed mb-4">
Hi, I’m Abhyas Kumar, a passionate Web Developer with a strong foundation in building clean, responsive, and user-friendly web applications. My journey in web development started in 2022,
 driven by curiosity, and has since grown into a professional career.

  </p>
  <p className="text-sm font-semibold md:text-base text-gray-300  dark:text-black text-center max-w-3xl px-4 leading-relaxed mb-5">
  I’m currently working at Tata Consultancy Services (TCS), where I continue to enhance my skills and gain real-world experience by working on scalable and impactful projects. I enjoy turning ideas into reality through 
  code and creating seamless digital experiences that are both visually appealing and highly functional
  </p>
  <p className="text-sm font-semibold md:text-base text-gray-300  dark:text-black text-center max-w-3xl px-4 leading-relaxed mb-5">
  Over time, I’ve worked with modern technologies like the MERN stack and continuously strive to stay updated with the latest trends in web development.
  </p>

  <button className="relative inline-block px-8 py-4 font-bold text-white overflow-hidden group rounded-full border border-sky-400">
  <span className="absolute inset-0 w-0 bg-sky-400 transition-all duration-300 ease-out group-hover:w-full"></span>
  <span className="relative z-10 group-hover:text-black  dark:text-black">Read more</span>
</button>

</section>

  );
};

export default About;
