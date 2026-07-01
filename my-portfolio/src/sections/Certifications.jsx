import React from "react";
import { motion } from "framer-motion";
import { FaCertificate, FaAward, FaGraduationCap, FaLink } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

export default function Certifications() {
  const certifications = [
    {
      title: "UI/UX Design Certification",
      issuer: "UX/UI Design Portfolio Verification",
      date: "2024",
      description: "Verifies mastery in user research, wireframing, high-fidelity interactive prototyping, and designing human-centric interfaces.",
      icon: <FaAward className="text-3xl text-pink-400" />,
      color: "from-pink-500/20 to-purple-500/20",
      link: "http://drive.google.com/file/d/19OM-WIFMolSXt7omGcpVZBGKIDgK-M-D/view",
    },
    {
      title: "Architecting Solutions on AWS",
      issuer: "Amazon Web Services (AWS) | Coursera",
      date: "2024",
      description: "Verifies ability to design distributed cloud systems on AWS, optimize resource costs, and implement security and reliability best practices.",
      icon: <FaGraduationCap className="text-3xl text-orange-400" />,
      color: "from-orange-500/20 to-yellow-500/20",
      link: "https://www.coursera.org/account/accomplishments/verify/SY5I1HH7PHLU",
    },
    {
      title: "AWS Cloud Technical Essentials",
      issuer: "Amazon Web Services (AWS) | Coursera",
      date: "2024",
      description: "Verifies foundational knowledge of AWS cloud concepts, core infrastructure services, security, architecture, and deployment models.",
      icon: <FaCertificate className="text-3xl text-purple-400" />,
      color: "from-purple-500/20 to-indigo-500/20",
      link: "https://www.coursera.org/account/accomplishments/verify/CHY8S16RN21T",
    },
    {
      title: "Foundations of User Experience (UX) Design",
      issuer: "Google | Coursera",
      date: "2024",
      description: "Verifies knowledge of UX design concepts, user research, wireframing, prototyping, and user-centered design methodologies.",
      icon: <FaGraduationCap className="text-3xl text-cyan-400" />,
      color: "from-cyan-500/20 to-blue-500/20",
      link: "https://www.coursera.org/account/accomplishments/verify/B9TW734Z2OLY",
    },
    {
      title: "LeetCode Milestone",
      issuer: "LeetCode",
      date: "2024",
      description: "Solved 500+ data structures and algorithms problems with a peak contest rating of 1,580.",
      icon: <SiLeetcode className="text-3xl text-yellow-500" />,
      color: "from-yellow-500/20 to-orange-500/20",
      link: "https://leetcode.com/u/Sakshi987/",
    },
    {
      title: "FFE Scholar",
      issuer: "Foundation for Excellence",
      date: "2023 - Present",
      description: "Selected as an FFE Scholar, a prestigious national scholarship program recognizing academic excellence and professional potential in engineering.",
      icon: <FaAward className="text-3xl text-emerald-400" />,
      color: "from-emerald-500/20 to-teal-500/20",
    },
  ];

  return (
    <section
      id="certifications"
      className="min-h-screen w-full flex items-center justify-center relative bg-black text-white overflow-hidden py-20"
    >
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] rounded-full bg-blue-500/10 blur-[130px] animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-[350px] h-[350px] rounded-full bg-purple-500/10 blur-[130px] animate-pulse delay-700" />
      </div>

      <div className="relative z-10 max-w-6xl w-full mx-auto px-6 md:px-12 flex flex-col gap-12">
        {/* Heading */}
        <div className="text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 tracking-tight"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Certifications & Achievements
          </motion.h2>
          <motion.p
            className="mt-3 text-gray-400 text-base sm:text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Showcasing milestones in competitive programming, software development, and community contributions.
          </motion.p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className={`group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md overflow-hidden transition-all duration-300 ${
                index === certifications.length - 1 && certifications.length % 2 !== 0
                  ? "md:col-span-2"
                  : ""
              }`}
            >
              {/* Card Gradient Background Hover Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />

              <div className="flex gap-4 items-start">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-white/20 transition-all duration-300">
                  {cert.icon}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                      {cert.title}
                    </h3>
                    <span className="text-sm font-semibold text-gray-500 bg-white/5 border border-white/10 px-2.5 py-0.5 rounded-full">
                      {cert.date}
                    </span>
                  </div>
                  <h4 className="text-sm font-medium text-gray-400 mt-1">
                    {cert.issuer}
                  </h4>
                  <p className="mt-3 text-sm text-gray-300 leading-relaxed">
                    {cert.description}
                  </p>

                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-4 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                    >
                      Verify Certificate <FaLink className="text-[10px]" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
