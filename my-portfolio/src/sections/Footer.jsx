import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative bg-black text-white py-20 px-4 overflow-hidden">

      {/* 🔥 Glow Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[400px] h-[400px] bg-blue-500/20 blur-3xl rounded-full top-10 left-1/2 -translate-x-1/2" />
        <div className="absolute w-[300px] h-[300px] bg-green-500/20 blur-3xl rounded-full bottom-0 left-1/3" />
      </div>

      <div className="max-w-5xl mx-auto text-center">

        {/* 🔥 Name */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold tracking-wide"
        >
          Sakshi Singh
        </motion.h1>

        {/* Line */}
        <div className="w-24 h-[2px] bg-gradient-to-r from-blue-400 to-green-400 mx-auto my-4" />

        {/* 🔥 Social Icons */}
        <div className="flex justify-center gap-6 mt-4">

          <a
            href="https://github.com/YOUR_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-blue-400 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/sakshi-singh-445a992ab/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="#"
            className="text-xl hover:text-blue-400 transition"
          >
            <FaXTwitter />
          </a>

        </div>

        {/* 🔥 Tagline */}
        <p className="text-gray-400 mt-6 italic">
          “Success is when preparation meets opportunity.”
        </p>

        {/* 🔥 Bottom */}
        <p className="text-gray-500 text-sm mt-6">
          © {new Date().getFullYear()} Sakshi Singh. All rights reserved.
        </p>

      </div>
    </footer>
  );
}