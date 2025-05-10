import React from 'react';

const About = () => {
  return (
<section
  id='About'
  className="scroll-mt-28 w-full min-h-screen bg-[#0d1117] text-white flex flex-col items-center justify-center px-4 py-16"
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
  <p className="text-sm font-semibold md:text-base text-gray-300 text-center max-w-3xl px-4 leading-relaxed mb-4">
    I'm a passionate web designer and developer. I bring digital products to life by merging technical
    skills with visual creativity, focusing on user experience, pixel-perfect designs, and clear,
    efficient code. I started my journey as a web developer in 2023 and have since embraced new
    challenges and technologies.
  </p>
  <p className="text-sm font-semibold md:text-base text-gray-300 text-center max-w-3xl px-4 leading-relaxed mb-5">
    Now, in my early thirties, I build cutting-edge web applications using AI, Figma, and more. As you
    know that my guest blogging and content writing work, so over the past six months, I have honed my
    abilities in guest blogging and link building, successfully contributing to various platforms and
    enhancing their online presence.
  </p>
  <p className="text-sm font-semibold md:text-base text-gray-300 text-center max-w-3xl px-4 leading-relaxed mb-5">
    One last thing — available for freelance work! Feel free to reach out and say hello ✌️
  </p>

  <button className="relative inline-block px-8 py-4 font-bold text-white overflow-hidden group rounded-full border border-sky-400">
  <span className="absolute inset-0 w-0 bg-sky-400 transition-all duration-300 ease-out group-hover:w-full"></span>
  <span className="relative z-10 group-hover:text-black">Read more</span>
</button>

</section>

  );
};

export default About;
