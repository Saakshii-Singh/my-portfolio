import React, { useState } from "react";

import Navbar from "./components/Navbar.jsx";
import CustomCursor from "./components/CustomCursor.jsx";

import Home from "./sections/Home.jsx";
import About from "./sections/About.jsx";
import Skills from "./sections/Skills.jsx";
import Projects from "./sections/Projects.jsx";
import Testimonial from "./sections/Testimonial.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";
import IntroAnimation from "./components/IntroAnimation.jsx";

function App() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <>
      {!introDone && (
        <IntroAnimation
          onFinish={() => {
            console.log("INTRO DONE IN APP");
            setIntroDone(true);
          }}
        />
      )}

      {introDone && (
        <div
          style={{
            background:
              "linear-gradient(-45deg,#302b63,#00bf9f,#1cd8d2)",
          }}
        >
          <CustomCursor />
          <Navbar />
          <Home />
          <About />
          <Skills />
          <Projects />
          <Testimonial />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
