import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const EducationTimeline = () => {
  return (
    <div id="Education" name="Education"  className="min-h-screen bg-gray-950 text-white flex items-center justify-center px-4 py-16">
      <div className="max-w-3xl w-full">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-cyan-400 mb-12">
          Education
        </h1>

        {/* Timeline */}
        <div className="relative border-l-4 border-cyan-500  pl-[2px] space-y-12">

          {/* Item 1 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -left-3  w-4 h-4 bg-cyan-500 rounded-full"></div>
            <div className="bg-[#12161d] border-4 border-cyan-500  rounded-2xl p-5 ml-4">
              <div className="flex items-center gap-2 text-cyan-400 text-sm mb-1 ">
                <FaCalendarAlt />
                <span>2020</span>
              </div>
              <h3 className="text-xl font-semibold">Matric – S.S plus 2 High School Bero, Ranchi Jharkhand</h3>
              <p className="text-sm mt-1">From JAC Board - Percentage: 86.80%</p>
            </div>
          </motion.div>

          {/* Item 2 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -left-3 top-1 w-4 h-4 bg-cyan-500 rounded-full"></div>
            <div className="bg-[#12161d] border-4 border-cyan-500 rounded-2xl p-5 ml-4">
              <div className="flex items-center gap-2 text-cyan-400 text-sm mb-1">
                <FaCalendarAlt />
                <span>2020–2022</span>
              </div>
              <h3 className="text-xl font-semibold">Intermediate – S.S plus 2 High School Bero, Ranchi Jharkhand</h3>
              <p className="text-sm mt-1">From JAC Board - Percentage: 88.60%</p>
            </div>
          </motion.div>

          {/* Item 3 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="absolute -left-3 top-1 w-4 h-4 bg-cyan-500 rounded-full"></div>
            <div className="bg-[#12161d] border-4 border-cyan-500 rounded-2xl p-5 ml-4">
              <div className="flex items-center gap-2 text-cyan-400 text-sm mb-1">
                <FaCalendarAlt />
                <span>2022–2025</span>
              </div>
              <h3 className="text-xl font-semibold">Bachelors Degree – Dr Shyama Prasad Mukherjee University Ranchi</h3>
              <p className="text-sm mt-1">
                B.Sc in Computer Application<br />
                GPA: 8.62 / 10
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default EducationTimeline;
