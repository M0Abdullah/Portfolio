"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";

export function LampDemo() {
  return (
    <>

    <LampContainer>
    <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
        }}
        className=" bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
        About Me
      </motion.h1>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
        }}
        className="mt-8 w-[90%]"
        >
       I am  Saim Ramzan
       I am a passionate and dedicated Frontend Developer with over 2 years of experience in building dynamic, user-centric applications using React.js, Next.js, and React Native.Throughout my career, I have developed a deep understanding of frontend technologies and modern web development practices, creating seamless and interactive user experiences across various platforms. I specialize in leveraging React.js to build fast and scalable web applications, while Next.js enables me to deliver server-side rendered apps with great SEO performance and speed. I am skilled in working with modern JavaScript, state management tools like Redux, React-query and integrating APIs to create robust and responsive applications. With a strong focus on clean code. I am always eager to learn new technologies, collaborate with cross-functional teams, and stay up-to-date with the latest trends in the frontend development world. My goal is to continue growing as a developer and contributing to innovative, user-first projects.
      </motion.h1>
    </LampContainer>
          </>
  );
}
