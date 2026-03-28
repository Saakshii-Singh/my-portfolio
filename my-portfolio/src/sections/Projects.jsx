import  { useEffect, useMemo, useRef, useState } from "react";
import studyTogether from "../assets/study-together.png";
import studyTogether2 from "../assets/study-togther2.png";




const useIsMobile = (query="(max-width: 639px)") => {
  const [isMobile,setIsMobile]=useState(
    typeof window !== "undefined" && window.matchMedia(query).matches
  )
useEffect(() => {
  if(typeof window === "undefined") return;
  const mql=window.matchMedia(query);
  const handler=(e)=>setIsMobile(e.matches);
  setIsMobile(mql.matches);
  mql.addEventListener("change",handler);
  return () => mql.removeEventListener("change",handler);
}, [query])
return isMobile;
}

export default function Projects(){
  const isMobile=useIsMobile();
  const sceneRef=useRef(null);

  const projects=useMemo(() => [
    {
      title:"StudyTogether",
      description:"A web application that allows students to create and join study groups, share resources, and collaborate on projects.",
      image:isMobile?study-together.png:study-together2.png,
      link:"https://studytogether.com"
    },
    {
      title:"TaskMaster",
      description:"A task management app that helps users organize their to-do lists, set reminders, and track their productivity.",
      image:"isMobile?study-together.png",
      link:"https://taskmaster.com"
    },
    {
      title:"ShopSmart",
      description:"An e-commerce platform that provides personalized shopping recommendations based on user preferences and browsing history.",
      link:"https://shopsmart.com"
    },
    {
      title:"healthher",
      description:"A health and wellness app that offers personalized workout plans, nutrition advice, and mental health resources.",
      link:"https://healthher.com"
    },
    {
      title:"SnakeGame",
      description:"A classic snake game built with JavaScript, where players control a snake to eat food and grow longer while avoiding collisions.",
      link:"https://snakegame.com"
    }
  ], [isMobile]);
  const {scrollYProgress}=useScroll({
    target:sceneRef,
    offset:["start start", "end end"]
  })
  const thresholds=projects.map((_, i) => (i + 1) / projects.length);
  const [activeIndex, setActiveIndex]=useState(0); 
  
  userMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx=thresholds.findIndex((t) => v < t);
    setActiveIndex(idx === -1 ? thresholds.length - 1 : idx)
  });
  const activeProject=projects[activeIndex];

return (
  <section
    id="projects"
    ref={sceneRef}
    className="relative text-white"
    style={{
      height: `${100 * projects.length}vh`,
      backgroundColor: activeProject.bgColor,
      transition: "background-color 400ms ease",
    }}
  >
    <div className="sticky top-0 flex items-center justify-center h-screen">
      <h2
        className={`text-3xl font-semibold z-10 text-center ${
          isMobile ? "mt-4" : "mt-8"
        }`}
      >
        My Work
      </h2>
      <div></div>
    </div>
  </section>
);