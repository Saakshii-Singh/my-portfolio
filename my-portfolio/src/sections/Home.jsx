import React, { useMemo, useEffect, useState } from "react";
import ParticlesBackground from "../components/ParticlesBackground";
import { motion } from "framer-motion";
import image from "../assets/image.png";

// Social Icons
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { SiLeetcode, SiCodechef } from "react-icons/si";

const socials = [
  {
    Icon: SiLeetcode,
    label: "LeetCode",
    href: "https://leetcode.com/u/Sakshi987/",
  },
  {
    Icon: SiCodechef,
    label: "CodeChef",
    href: "https://www.codechef.com/users/hey_sakshi",
  },
  {
    Icon: FaLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sakshi-singh-445a992ab/",
  },
  {
    Icon: FaGithub,
    label: "GitHub",
    href: "https://github.com/Saakshii-Singh",
  },
];

const glowVariants = {
  initial: { scale: 1, y: 0, filter: "drop-shadow(0 0 0 rgba(0,0,0,0))" },
  hover: {
    scale: 1.2,
    y: -3,
    filter:
      "drop-shadow(0 0 8px rgba(13,88,204,0.9)) drop-shadow(0 0 18px rgba(16,185,129,0.8))",
    transition: { type: "spring", stiffness: 300, damping: 15 },
  },
  tap: { scale: 0.95, y: 0, transition: { duration: 0.08 } },
};

export default function Home() {
  const roles = useMemo(
    () => ["Web Developer", "Problem Solver", "DSA Enthusiast"],
    []
  );

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index];

    const timeout = setTimeout(() => {
      if (!deleting && subIndex < current.length) {
        setSubIndex((v) => v + 1);
      } else if (!deleting && subIndex === current.length) {
        setTimeout(() => setDeleting(true), 1200);
      } else if (deleting && subIndex > 0) {
        setSubIndex((v) => v - 1);
      } else if (deleting && subIndex === 0) {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % roles.length);
      }
    }, deleting ? 40 : 60);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, roles]);

  return (
    <section
      id="home"
      className="max-w-full h-screen relative bg-black overflow-hidden"
    >
      <ParticlesBackground />

      {/* Glows */}
      <div className="absolute inset-0" />

      <div className="relative z-10 h-full w-full max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2">
        
        {/* LEFT COLUMN — CONTENT */}
        <div className="w-full lg:pl-6 mx-auto max-w-[48rem] flex flex-col justify-center">
          
          {/* Typing Role */}
          <motion.div
            className="mb-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white tracking-wide min-h-[1.6em]"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span>{roles[index].substring(0, subIndex)}</span>
            <span
              className="inline-block w-[2px] ml-1 bg-white animate-pulse align-middle"
              style={{ height: "1em" }}
            />
          </motion.div>

          {/* Heading */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1cd8d2] via-[#302b63] drop-shadow-lg"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            HELLO I'm <br />
            <span className="text-white font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl lg:whitespace-nowrap">
              Sakshi Singh
            </span>
          </motion.h1>

          {/* Bio */}
          <motion.p
            className="mt-6 text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            I build beautiful web experiences and solve problems with code.
            Frontend Developer by passion, problem solver by mindset.
          </motion.p>

          {/* Buttons */}
          <motion.div className="mt-10 flex flex-wrap items-center gap-6">
            <a
              href="#projects"
              className="px-6 py-3 rounded-full font-medium text-lg text-white 
              bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63]"
            >
              View My Work
            </a>

            <a
              href="/Resume (2).pdf"
              download
              className="px-6 py-3 rounded-full font-medium text-lg text-white 
              border border-white/30 hover:bg-white/10 transition"
            >
              My Resume
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div className="mt-8 flex gap-5">
            {socials.map(({ Icon, label, href }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                aria-label={label}
                rel="noopener noreferrer"
                variants={glowVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                className="text-gray-300 hover:text-white transition-colors duration-300 text-2xl"
              >
                <Icon />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* RIGHT COLUMN — IMAGE */}
        <div className="flex items-center justify-end pr-4 lg:pr-0">
          <motion.img
            src={image}
            alt="Alien"
            className="w-[260px] sm:w-[320px] md:w-[380px] lg:w-[420px] rounded-2xl shadow-2xl"
            initial={{ opacity: 0, scale: 0.8, x: 60 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
          />
        </div>
      </div>
    </section>
  );
}
