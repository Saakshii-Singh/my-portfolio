import { FaPython, FaHtml5, FaReact, FaGit, FaGithub, FaNode } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { SiMysql, SiTailwindcss, SiMongodb, SiExpress, SiFirebase, SiRedux, SiFramer } from "react-icons/si";
import { PiFileSqlFill } from "react-icons/pi";
import { TbBrandCpp } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";
import { VscVscodeInsiders } from "react-icons/vsc";
import { motion, useMotionValue } from "framer-motion";
import { useState, useRef, useEffect } from "react";

export default function Skills() {

  const skills = [
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3 />, name: "CSS3" },
    { icon: <FaReact />, name: "React" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <IoLogoJavascript />, name: "JavaScript" },
    { icon: <FaNode />, name: "Node.js" },
    { icon: <SiExpress />, name: "Express.js" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <PiFileSqlFill />, name: "SQL" },
    { icon: <SiFirebase />, name: "Firebase" },
    { icon: <SiRedux />, name: "Redux" },
    { icon: <SiFramer />, name: "Framer Motion" },
    { icon: <FaGit />, name: "Git" },
    { icon: <FaGithub />, name: "GitHub" },
    { icon: <TbBrandCpp />, name: "C++" },
    { icon: <FaPython />, name: "Python" },
    { icon: <VscVscodeInsiders />, name: "VS Code" },
  ];

  const repeated = [...skills, ...skills];

  const [dir, setDir] = useState(-1);
  const [active, setActive] = useState(false);

  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const touchY = useRef(null);

  const x = useMotionValue(0);

  // Detect section visibility
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const io = new IntersectionObserver(([entry]) => {
      setActive(entry.isIntersecting);
    }, { threshold: 0.1 });

    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Detect scroll direction
  useEffect(() => {
    if (!active) return;

    const onWheel = (e) => setDir(e.deltaY > 0 ? -1 : 1);

    const onTouchStart = (e) => {
      touchY.current = e.touches[0].clientY;
    };

    const onTouchMove = (e) => {
      if (touchY.current == null) return;
      const delta = e.touches[0].clientY - touchY.current;
      setDir(delta > 0 ? 1 : -1);
      touchY.current = e.touches[0].clientY;
    };

    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
    };
  }, [active]);

  // Animation loop
  useEffect(() => {
    if (!active) return;

    let id;
    let last = performance.now();
    const speed = 80;

    const tick = (now) => {
      const dt = (now - last) / 1000;
      last = now;

      let next = x.get() + speed * dir * dt;
      const loop = trackRef.current?.scrollWidth / 2 || 0;

      if (loop) {
        if (next <= -loop) next += loop;
        else if (next >= 0) next -= loop;
      }

      x.set(next);
      id = requestAnimationFrame(tick);
    };

    id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);

  }, [dir, active, x]);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="h-[60vh] w-full pb-8 flex flex-col items-center justify-center relative bg-black text-white overflow-hidden"
    >

      {/* Glow Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-20 blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-0 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[#6065f3] via-[#69c3e1] to-[#00bf8f] opacity-20 blur-[120px] animate-pulse delay-500" />
      </div>

      {/* Heading */}
      <motion.h2
        className="text-4xl mt-5 sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#69c3e1] via-[#00bf8f] to-[#6065f3] z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Skills
      </motion.h2>

      <motion.p
        className="mt-2 mb-8 text-white/80 text-base sm:text-lg z-10"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Modern Applications | Modern Technologies | Modern Tools
      </motion.p>

      {/* Skills Slider */}
      <div className="w-full overflow-hidden">
        <motion.div
          ref={trackRef}
          className="flex gap-10 text-6xl text-[#1cd8d2]"
          style={{ x, whiteSpace: "nowrap", willChange: "transform" }}
        >
          {repeated.map((s, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-2 min-w-[120px]"
              title={s.name}
            >
              <span className="hover:scale-125 transition-transform duration-300">
                {s.icon}
              </span>
              <p className="text-sm">{s.name}</p>
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}