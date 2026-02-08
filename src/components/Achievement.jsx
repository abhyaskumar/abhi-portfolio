import React from "react";
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
  return (
    <div
      id="Achievements"
      className="w-full min-h-screen bg-[#0f1115] text-white dark:bg-white dark:text-black px-6 md:px-20 py-16"
    >
      {/* Heading */}
      <h2 className="text-4xl font-bold text-center mb-14">
        My <span className="text-sky-400">Achievements</span>
      </h2>

      {/* Timeline container */}
      <div className="relative border-l-4 border-sky-500 ml-4 md:ml-10">

        {achievements.map((item, index) => (
          <div key={index} className="mb-12 ml-6 md:ml-12 relative">

            {/* Timeline Icon */}
            <span className="absolute -left-6 md:-left-8 flex items-center justify-center w-10 h-10 bg-sky-600 rounded-full ring-8 ring-[#0f1115] dark:ring-white">
              <FaTrophy />
            </span>

            {/* Card */}
            <div className="bg-gray-800 dark:bg-gray-100 text-white dark:text-black p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">

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
              {item.link !== "#" && (
                <div>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded-lg text-sm"
                  >
                    <FaExternalLinkAlt /> Learn More
                  </a>
                </div>
              )}

            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Achievements;
