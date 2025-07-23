import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Karan kumar',
    role: 'programmer',
    feedback:
      'Working with Abhyas was a great experience. His skills and dedication to delivering high-quality work are truly impressive.',
    image: '/images/Abhyas.jpg',
  },
  {
    name: 'vivek kumar',
    role: 'freelancer',
    feedback:
      'Abhyas brings creative solutions and is always proactive. Highly recommended for any web development project!',
    image: '/images/vivek.jpg',
  },
  {
    name: 'Aalok kumar',
    role: 'Freelance Designer',
    feedback:
      'It was a pleasure collaborating with Abhyas. His technical expertise and communication made the project seamless.',
    image: '/images/testimonial3.jpg',
  },
  {
    name: 'Sourabh kumar',
    role: 'Software Engineer',
    feedback:
      'Abhyas is a very dedicated developer. His ability to solve complex problems is commendable!',
    image: '/images/saurav.jpg',
  },
  {
    name: 'Uttam kumar',
    role: 'graphics designer ',
    feedback:
      'His professionalism and timely delivery made the whole process easy and enjoyable. Highly recommended!',
    image: '/images/testimonial5.jpg',
  },
];

const Testimonials = () => {
  return (
    <div
      id="Testimonials"
      className="w-full bg-gray-950 text-white dark:bg-white dark:text-black px-6 md:px-20 py-16 overflow-hidden"
    >
      <h2 className="text-4xl font-bold mb-10 text-center">
        <span className="text-sky-400">Testimonials</span>
      </h2>

      {/* Marquee Wrapper */}
      <div className="relative w-full overflow-hidden">
        <div
          className="flex animate-marquee gap-8"
          style={{ width: `${testimonials.length * 350 * 2}px` }} // adjust width to fit doubled content
        >
          {/* Duplicate content for seamless loop */}
          {[...testimonials, ...testimonials].map((t, index) => (
            <div
              key={index}
              className="bg-gray-800 dark:bg-gray-100 text-white dark:text-black rounded-xl shadow-lg p-6 flex flex-col gap-4 w-[300px] shrink-0 hover:scale-105 transition-transform duration-300"
            >
              <FaQuoteLeft className="text-2xl text-sky-400" />
              <p className="text-xs italic line-clamp-5">"{t.feedback}"</p>
              <div className="flex items-center gap-4 mt-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover border"
                />
                <div>
                  <h4 className="text-sm font-semibold">{t.name}</h4>
                  <p className="text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
