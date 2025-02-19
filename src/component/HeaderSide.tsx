"use client";
import { motion } from "framer-motion";
import saimImage from "../Assest/saim.png";
import Image from "next/image";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { useState, useEffect } from "react";

function HeaderSide() {
  const links = [
    { id: 1, title: "Html", },
    { id: 2, title: "Css", },
    { id: 3, title: "JavaScript",  },
    { id: 4, title: "React-JS",  },
    { id: 5, title: "Next-JS",  },
    { id: 6, title: "Tailwind Css",  },
    { id: 7, title: "Sass",},
    { id: 8, title: "Firebase",  },
    { id: 9, title: "Storybook", },
    { id: 10, title: "TanStack Query",  },
    { id: 11, title: "MobX",  },
    { id: 12, title: "Redux", },
    { id: 13, title: "Redux Toolkit",  },
    { id: 14, title: "Redux Saga",  },
  ];

  const expertiseList = ["JavaScript", "React JS", "Next JS", "React Native"];
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
  }, []);

  useEffect(() => {
    if (typing) {
      let charIndex = 0;
      const typingEffect = setInterval(() => {
        setCurrentExpertise(expertiseList[index].slice(0, charIndex + 1));
        charIndex++;
        if (charIndex === expertiseList[index].length) clearInterval(typingEffect);
      }, 100);
      return () => clearInterval(typingEffect);
    }
  }, [index, typing]);

  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between p-4 md:p-8 lg:p-12">
      <div className="flex flex-col w-[95%] md:w-[60%] space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl md:text-4xl break-words flex flex-wrap text-center md:text-left"
        >
          {"Hello, I'm,"}
          <span className="text-blue-500 dark:text-blue-500"> Saim Ramzan&nbsp;</span>
          a Frontend Developer Expert in
          <span className="text-blue-500 dark:text-blue-500 font-bold"> &nbsp;{currentExpertise}</span>
        </motion.div>
        
        {/* Ensure unique keys */}
        <InfiniteMovingCards items={links.map((link) => ({ ...link, id: `${link.id}-${link.title}` }))} direction="right" speed="slow" />
      </div>

      <div className="pt-4 md:pt-0 w-full md:w-[40%] text-center">
        <Image
          src={saimImage}
          width={300}
          height={300}
          objectFit="contain"
          alt="Saim - Picture of the author"
          priority
          className="rounded-lg shadow-lg mx-auto"
        />
      </div>
    </div>
  );
}

export default HeaderSide;
