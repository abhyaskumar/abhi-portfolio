import React from "react";
import { motion } from "framer-motion";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { GiDatabase } from "react-icons/gi";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";


const Skills = () => {
    return (
        <div id="Skills" name="Skills" className="min-h-screen bg-[#0f1115] text-white py-16 px-4 flex flex-col items-center justify-center">
            {/* Heading */}
            <h2 className="text-4xl font-bold text-center mb-12">
                My <span className="text-cyan-400">Skills</span>
            </h2>

            {/* Flex Container */}
            <div className="flex flex-wrap justify-center max-w-4xl">
                {/* Skill Items (Always 3 per row using w-1/3) */}
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.4 }}
                    className="w-1/3 p-4 flex justify-center"
                >
                    <div className="flex flex-col items-center space-y-2">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="Html" className="w-14 h-14" />
                        <p className="text-sm">Html</p>
                    </div>
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="w-1/3 p-4 flex justify-center"
                >
                    <div className="flex flex-col items-center space-y-2">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="Css" className="w-14 h-14" />
                        <p className="text-sm">Css</p>
                    </div>
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="w-1/3 p-4 flex justify-center"
                >
                    <div className="flex flex-col items-center space-y-2">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-14 h-14" />
                        <p className="text-sm">JavaScript</p>
                    </div>
                </motion.div>



                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    className="w-1/3 p-4 flex justify-center"
                >
                    <div className="flex flex-col items-center space-y-2">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" alt="C" className="w-14 h-14" />
                        <p className="text-sm">C</p>
                    </div>
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                    className="w-1/3 p-4 flex justify-center"
                >
                    <div className="flex flex-col items-center space-y-2">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="C++" className="w-14 h-14" />
                        <p className="text-sm">C++</p>
                    </div>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                    className="w-1/3 p-4 flex justify-center"
                >
                    <div className="flex flex-col items-center space-y-2">
                        <FaJava className="w-14 h-14 text-cyan-400" />
                        <p className="text-sm">java</p>
                    </div>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className="w-1/3 p-4 flex justify-center"
                >
                    <div className="flex flex-col items-center space-y-2">
                        <RiTailwindCssFill className="w-14 h-14 text-cyan-400" />
                        <p className="text-sm">Tailwind</p>
                    </div>
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className="w-1/3 p-4 flex justify-center"
                >
                    <div className="flex flex-col items-center space-y-2">
                        <FaPython className="w-14 h-14 text-cyan-400" />
                        <p className="text-sm">Python</p>
                    </div>
                </motion.div>


                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className="w-1/3 p-4 flex justify-center"
                >
                    <div className="flex flex-col items-center space-y-2">
                        <FaPhp className="w-14 h-14 text-cyan-400" />
                        <p className="text-sm">PHP</p>
                    </div>
                </motion.div>


                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className="w-1/3 p-4 flex justify-center"
                >
                    <div className="flex flex-col items-center space-y-2">
                        <SiMysql className="w-14 h-14 text-cyan-400" />
                        <p className="text-sm">Sql</p>
                    </div>
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className="w-1/3 p-4 flex justify-center"
                >
                    <div className="flex flex-col items-center space-y-2">
                        <GiDatabase className="w-14 h-14 text-cyan-400" />
                        <p className="text-sm">Database</p>
                    </div>
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className="w-1/3 p-4 flex justify-center"
                >
                    <div className="flex flex-col items-center space-y-2">
                        <FaReact className="w-14 h-14 text-cyan-400" />
                        <p className="text-sm">React Js</p>
                    </div>
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className="w-1/3 p-4 flex justify-center"
                >
                    <div className="flex flex-col items-center space-y-2">
                        < FaNodeJs className="w-14 h-14 text-cyan-400" />
                        <p className="text-sm">Node Js</p>
                    </div>
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className="w-1/3 p-4 flex justify-center"
                >
                    <div className="flex flex-col items-center space-y-2">
                        <SiExpress className="w-14 h-14 text-cyan-400" />
                        <p className="text-sm">Express Js</p>
                    </div>
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className="w-1/3 p-4 flex justify-center"
                >
                    <div className="flex flex-col items-center space-y-2">
                        <DiMongodb className="w-14 h-14 text-cyan-400" />
                        <p className="text-sm">Mongo Db</p>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default Skills;
