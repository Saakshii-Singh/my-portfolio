const { useState, useEffect,useRef, useMemo } = require("react")




const useIsMobile = (query="(max-width: 639px)") => {
  const [isMobile,setIsMobile]=useState(
    typeof window !== "undefined" ? window.matchMedia(query).matches
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
      image:"/images/shopsmart.png",
      link:"https://shopsmart.com"
    },
    {
      title:"healthher",
      description:"A health and wellness app that offers personalized workout plans, nutrition advice, and mental health resources.",
      image:"/images/healthher.png",
      link:"https://healthher.com"
    },
    {
      title:"SnakeGame",
      description:"A classic snake game built with JavaScript, where players control a snake to eat food and grow longer while avoiding collisions.",
      image:"/images/snakegame.png",
      link:"https://snakegame.com"
    }
  ], [])

  return (
    <section id="projects" className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className={`grid ${isMobile ? "grid-cols-1" : "grid-cols-2"} gap-8`}>
          {projects.map((project, index) => (