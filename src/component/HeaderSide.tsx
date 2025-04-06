"use client";
import { motion } from "framer-motion";
import abdullahImage from "../Assest/abdullah.jpg";
import Image from "next/image";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { useState, useEffect } from "react";
import AnimatedContent from "@/components/AnimationContent";

function HeaderSide() {
  const links = [
    { id: 1, title: "Html" },
    { id: 2, title: "Css" },
    { id: 3, title: "JavaScript" },
    { id: 4, title: "React-JS" },
    { id: 5, title: "Next-JS" },
    { id: 6, title: "Tailwind Css" },
    { id: 7, title: "Firebase" },
    { id: 8, title: "MobX" },
    { id: 9, title: "Redux" },
    { id: 10, title: "Redux Toolkit" },
    { id: 11, title: "React-Native" },
    { id: 12, title: "Node-JS" },
    { id: 13, title: "Nest-JS" },
  ];

  const expertiseList = [
    "JavaScript",
    "TypeScript",
    "React JS",
    "Next JS",
    "React Native",
    "Node JS",
    "Nest JS",
  ];
  const [currentExpertise, setCurrentExpertise] = useState("");
  const [index, setIndex] = useState(0);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setTyping(false);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % expertiseList.length);
        setTyping(true);
      }, 500);
    }, 2000);
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (typing) {
      let charIndex = 0;
      const typingEffect = setInterval(() => {
        setCurrentExpertise(expertiseList[index].slice(0, charIndex + 1));
        charIndex++;
        if (charIndex === expertiseList[index].length)
          clearInterval(typingEffect);
      }, 100);
      return () => clearInterval(typingEffect);
    }
    // eslint-disable-next-line
  }, [index, typing]);

  return (
    <AnimatedContent direction="vertical">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between p-4 md:p-8 lg:p-12">
        <div className="flex flex-col w-[95%] md:w-[70%] space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl md:text-4xl break-words flex flex-wrap text-center md:text-left"
          >
            {"Hello, I'm,"}
            <span className="text-blue-500 dark:text-blue-500">
              {" "}
              Muhammad-Abdullah&nbsp;
            </span>
            a MERN Stack Developer Expert in
            <span className="text-blue-500 dark:text-blue-500 font-bold">
              {" "}
              &nbsp;{currentExpertise}
            </span>
          </motion.div>

          {/* Ensure unique keys */}
          <InfiniteMovingCards items={links} direction="right" speed="slow" />
        </div>

        <div className="pt-4 md:pt-0 w-full md:w-[40%] text-center ">
          <Image
            src={abdullahImage}
            width={300}
            height={300}
            objectFit="contain"
            alt="Abdullah - Picture of the author"
            priority
            className="rounded-lg shadow-lg mx-auto"
          />
        </div>
      </div>
    </AnimatedContent>
  );
}

export default HeaderSide;
