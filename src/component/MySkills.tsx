"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import analysis from "@/Assest/analysis.svg";
import Image from "next/image";
import AnimatedContent from "@/components/AnimationContent";

function MySkills() {
  const progressData = [
    { title: "Html", progress: 90, color: "#ec7518" },
    { title: "Css", progress: 90, color: "#18b2ec" },
    { title: "JavaScript", progress: 90, color: "#f0dc55" },
    { title: "React JS", progress: 90, color: "#83e6ff" },
    { title: "Next JS", progress: 80, color: "#2974c9" },
  ];
/* eslint-disable */

  return (
      <AnimatedContent >
    <div className="flex flex-col items-center justify-center px-4 py-4 md:px-8">
      <h1 className="bg-gradient-to-br mb-0 from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-3xl md:text-5xl font-medium tracking-tight text-transparent">
      Skills
        </h1>
        <hr  className="w-[3%] mx-auto my-0  border-2 border-blue-500"/>
     
      <div className="flex flex-col md:flex-row items-center gap-11 md:gap-10 w-full max-w-4xl">
        <Image src={analysis} width={300} height={300} alt="analysis" />
        <div className="flex flex-col w-full">
          {progressData.map((item, index) => {
            const ref = useRef(null);
            const isInView = useInView(ref, { once: true });
            return (
              <div key={index} className="w-full mb-4" ref={ref}>
                <div className="bg-gradient-to-br from-slate-300 to-slate-500 py-2 bg-clip-text font-medium tracking-tight text-transparent md:text-lg">
                  {item.title}
                </div>
                <div className="bg-white rounded-full h-2.5 dark:bg-gray-700 w-full">
                  <motion.div
                    className="h-2.5 rounded-full"
                    style={{ backgroundColor: item.color }}
                    initial={{ width: "0%" }}
                    animate={{ width: isInView ? `${item.progress}%` : "0%" }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
    </AnimatedContent>

  );
  /* eslint-enable */

}

export default MySkills;