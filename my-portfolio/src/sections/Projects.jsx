import { useEffect, useMemo, useRef, useState } from "react";
import studyTogether from "../assets/study-together.png";
import studyTogether2 from "../assets/study-togther2.png"; // ✔ correct name
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";

// ✅ Mobile Hook
const useIsMobile = (query = "(max-width: 639px)") => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.matchMedia(query).matches
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mql = window.matchMedia(query);
    const handler = (e) => setIsMobile(e.matches);

    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, [query]);

  return isMobile;
};

export default function Projects() {
  const isMobile = useIsMobile();
  const sceneRef = useRef(null);

  // ✅ Projects Data
  const projects = useMemo(
    () => [
      {
        title: "StudyTogether",
        description: "Collaborative learning platform for students.",
        image: isMobile ? studyTogether : studyTogether2,
        link: "#",
        bgColor: "#0f172a",
      },
      {
        title: "TaskMaster",
        description: "Smart task manager with reminders.",
        image: studyTogether,
        link: "#",
        bgColor: "#020617",
      },
      {
        title: "ShopSmart",
        description: "AI-powered shopping recommendations.",
        image: studyTogether2,
        link: "#",
        bgColor: "#111827",
      },
      {
        title: "HealthHer",
        description: "Personalized wellness platform.",
        image: studyTogether,
        link: "#",
        bgColor: "#1f2937",
      },
      {
        title: "SnakeGame",
        description: "Classic JS snake game.",
        image: studyTogether2,
        link: "#",
        bgColor: "#030712",
      },
    ],
    [isMobile]
  );

  // ✅ Scroll tracking
  const { scrollYProgress } = useScroll({
    target: sceneRef,
    offset: ["start start", "end end"],
  });

  const thresholds = projects.map((_, i) => (i + 1) / projects.length);
  const [activeIndex, setActiveIndex] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = thresholds.findIndex((t) => v < t);
    setActiveIndex(idx === -1 ? thresholds.length - 1 : idx);
  });

  const activeProject = projects[activeIndex];

  return (
    <section
      ref={sceneRef}
      className="relative text-white"
      style={{
        height: `${100 * projects.length}vh`,
        background: `linear-gradient(135deg, ${activeProject.bgColor}, #000)`,
        transition: "all 0.6s ease",
      }}
    >
      <div className="sticky top-0 flex flex-col items-center justify-center h-screen px-4">
        
        {/* 🔥 Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-6 text-center"
        >
          My Work
        </motion.h2>

        {/* 🔥 Cards */}
        <div className="relative w-full flex items-center justify-center">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: activeIndex === idx ? 1 : 0,
                scale: activeIndex === idx ? 1 : 0.9,
              }}
              transition={{ duration: 0.6 }}
              className="absolute w-[90%] max-w-5xl"
            >
              {/* Glass Card */}
              <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl overflow-hidden">

                {/* Image */}
                <div className="relative overflow-hidden group h-[55vh]">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {project.description}
                  </p>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-2 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 🔥 Progress Indicator */}
        <div className="absolute bottom-6 flex gap-2">
          {projects.map((_, i) => (
            <div
              key={i}
              className={`h-2 w-2 rounded-full transition-all ${
                activeIndex === i ? "bg-white scale-125" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}