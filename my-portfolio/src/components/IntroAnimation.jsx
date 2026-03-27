import { motion } from "framer-motion";
import React, { useEffect, useMemo, useState } from "react";

export default function IntroAnimation({ onFinish }) {
  const greetings = useMemo(
    () => [
      "Hello",
      "नमस्ते",
      "Hola",
      "Bonjour",
      "Ciao",
      "Olá",
      "Здравствуйте",
      "Merhaba",
      "Γειά",
      "Hej",
      "Hallo",
      "Salam",
    ],
    []
  );

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => {
        if (i >= greetings.length - 1) {
          clearInterval(interval);

          // 🔥 FORCE FINISH after last greeting
          setTimeout(() => {
            console.log("FORCE FINISH INTRO");
            onFinish();
          }, 800);

          return i;
        }
        return i + 1;
      });
    }, 180);

    return () => clearInterval(interval);
  }, [greetings.length, onFinish]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black text-white"
      initial={{ y: 0 }}
      animate={{ y: 0 }}
      exit={{ y: "-100%" }}
    >
      <motion.h1
        key={index}
        className="text-5xl md:text-7xl lg:text-8xl font-bold"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
      >
        {greetings[index]}
      </motion.h1>
    </motion.div>
  );
}
