import { motion } from "framer-motion";
import React from "react";
import photo from "../assets/photo.png";

export default function About() {

  const stats = [
    { label: "Speciality", value: "Full Stack Development" },
    { label: "Projects", value: "5+ Completed" },
    { label: "Focus", value: "DSA & Problem Solving" },
  ];

  const glows = [
    "-top-10 -left-10 w-[360px] h-[360px] opacity-20 blur-[120px]",
    "bottom-0 right-10 w-[420px] h-[420px] opacity-15 blur-[140px]",
    "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] opacity-10 blur-[100px]",
  ];

  return (
    <section
      id="about"
      className="min-h-screen w-full flex items-center justify-center relative bg-black text-white overflow-hidden"
    >

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        {glows.map((c, i) => (
          <div
            key={i}
            className={`absolute rounded-full bg-gradient-to-r from-blue-900 via-blue-400 to-blue-200 animate-pulse ${c}`}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl w-full mx-auto px-6 md:px-10 lg:px-12 py-20 flex flex-col gap-12">

        <motion.div
          className="flex flex-col md:flex-row items-center md:items-center gap-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          {/* Profile Image */}
          <motion.div
            className="relative w-[170px] h-[170px] md:w-[210px] md:h-[210px]"
            whileHover={{ scale: 1.06 }}
            transition={{ type: "spring", stiffness: 200 }}
          >

            {/* Glow Ring */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 blur-lg opacity-40"></div>

            {/* Image */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/20 shadow-2xl backdrop-blur-md">
              <img
                src={photo}
                alt="Sakshi Singh"
                className="w-full h-full object-cover object-center"
              />
            </div>

          </motion.div>

          {/* About Content */}
          <div className="flex-1 flex flex-col justify-center text-center md:text-left">

            <h2 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 text-transparent bg-clip-text">
              Sakshi Singh
            </h2>

            <p className="mt-2 text-lg sm:text-xl text-white/90 font-semibold">
              Full Stack Developer | Problem Solver | Tech Enthusiast
            </p>

            <p className="mt-4 text-gray-300 leading-relaxed text-base sm:text-lg max-w-2xl md:max-w-3xl">
              Hi, I'm Sakshi — a Full-Stack Developer passionate about building
              responsive and scalable web applications. I work with technologies
              like React.js, Node.js, JavaScript, and Tailwind CSS to create
              efficient and user-friendly solutions. I also actively practice
              Data Structures and Algorithms to strengthen my problem-solving
              skills and write optimized code.
            </p>

            {/* Stats */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-xl">

              {stats.map((item, i) => (
                <motion.div
                  key={i}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center backdrop-blur-sm"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="text-sm text-gray-400">{item.label}</div>
                  <div className="text-base font-semibold">{item.value}</div>
                </motion.div>
              ))}

            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-6 py-3  text-black bg-white rounded-lg font-semibold shadow-lg hover:bg-gray-200 transition ">View Projects</a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3  text-black bg-white rounded-lg font-semibold shadow-lg hover:bg-gray-200 transition ">Contact Me</a>
            </div>

          </div>
        </motion.div>
        

      </div>
    </section>
  );
}