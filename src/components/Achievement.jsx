import React, { useState } from "react";
import { FaTrophy, FaExternalLinkAlt } from "react-icons/fa";

const achievements = [
  {
    title: "Selected in Tata Consultancy Services (TCS)",
    description:
      "Successfully cleared the recruitment process and got selected in Tata Consultancy Services, one of India's leading IT companies.",
    year: "2025",
    link: "https://www.tcs.com/",
    tag: "Off-Campus Placement",
  },
  {
    title: "Invited as Guest Lecturer",
    description:
      "Invited by my school to deliver a session on Web Development and Career Guidance for students and shared my journey in tech.",
    year: "2025",
    link: "#",
    tag: "Public Speaking",
  },
];

const Achievements = () => {
  const [showGallery, setShowGallery] = useState(false);

  return (
    <div
      id="Achievements"
      className="w-full min-h-screen bg-[#0f1115] text-white dark:bg-white dark:text-black px-6 md:px-20 py-16"
    >
      {/* Heading */}
      <h2 className="text-4xl font-bold text-center mb-14">
        My <span className="text-sky-400">Achievements</span>
      </h2>

      {/* Timeline */}
      <div className="relative border-l-4 border-sky-500 ml-4 md:ml-10">
        {achievements.map((item, index) => (
          <div key={index} className="mb-12 ml-6 md:ml-12 relative">
            
            {/* Icon */}
            <span className="absolute -left-6 md:-left-8 flex items-center justify-center w-10 h-10 bg-sky-600 rounded-full ring-8 ring-[#0f1115] dark:ring-white">
              <FaTrophy />
            </span>

            {/* Card */}
            <div className="bg-gray-800 dark:bg-gray-100 text-white dark:text-black p-6 rounded-xl shadow-lg  transition-transform duration-300">

              {/* Title + Year */}
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <span className="text-sm bg-sky-600 text-white px-3 py-1 rounded-full">
                  {item.year}
                </span>
              </div>

              {/* Description */}
              <p className="text-sm mb-4">{item.description}</p>

              {/* Tag */}
              <span className="inline-block text-xs bg-purple-600 text-white px-3 py-1 rounded-full mb-4">
                {item.tag}
              </span>

              {/* Button */}
              <div>
                {item.link !== "#" ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded-lg text-sm"
                  >
                    <FaExternalLinkAlt /> Learn More
                  </a>
                ) : (
                  <button
                    onClick={() => setShowGallery(true)}
                    className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded-lg text-sm"
                  >
                    <FaExternalLinkAlt /> Learn More
                  </button>
                )}
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* 🔥 Modal Gallery */}
      {showGallery && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          
          {/* Close Button */}
          <button
            onClick={() => setShowGallery(false)}
            className="absolute top-5 right-5 text-white text-3xl"
          >
            ✖
          </button>

{/* Images */}
<div className="bg-white p-6 rounded-lg grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl">

  <img src="/images/g12.jpeg" className="w-full h-48 object-cover rounded-lg" />
  <img src="/images/g1.jpeg" className="w-full h-48 object-cover rounded-lg" />
  <img src="/images/g5.jpeg" className="w-full h-48 object-cover rounded-lg" />

  <img src="/images/g5.jpeg" className="w-full h-48 object-cover rounded-lg" />
  <img src="/images/g13.jpeg" className="w-full h-48 object-cover rounded-lg" />
  <img src="/images/g3.jpeg" className="w-full h-48 object-cover rounded-lg" />

</div>

        </div>
      )}
    </div>
  );
};

export default Achievements;