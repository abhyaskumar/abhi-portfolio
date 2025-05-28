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
        src="/images/Abhyas.jpg"
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
  Hi, I'm Abhyas Kumar
I’ve been learning and growing in the field of web development since 2022. What started as curiosity has turned into 
a passion for building clean,user-friendly websites and web applications. 

  </p>
  <p className="text-sm font-semibold md:text-base text-gray-300  dark:text-black text-center max-w-3xl px-4 leading-relaxed mb-5">
  I focus on blending creativity with code to create smooth digital experiences that not only look good but also work great.
  Over the years, I’ve explored various tools and techniques, taken on new challenges, and kept sharpening my skills to stay 
  up-to-date with the latest in web design and development.
  </p>
  <p className="text-sm font-semibold md:text-base text-gray-300  dark:text-black text-center max-w-3xl px-4 leading-relaxed mb-5">
  Always open to exciting freelance opportunities — let’s connect and create something amazing together!
  </p>

  <button className="relative inline-block px-8 py-4 font-bold text-white overflow-hidden group rounded-full border border-sky-400">
  <span className="absolute inset-0 w-0 bg-sky-400 transition-all duration-300 ease-out group-hover:w-full"></span>
  <span className="relative z-10 group-hover:text-black  dark:text-black">Read more</span>
</button>

</section>

  );
};

export default About;
