"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import setting from "@/Assest/settings.svg"
import Image from "next/image";


function MySkills() {
  const progressData = [
    { title: "Html", progress: 90, color: "#ec7518" },
    { title: "Css", progress: 90 , color:"#18b2ec"},
    { title: "JavaScript", progress: 90, color:"#f0dc55" },
    { title: "React JS", progress: 90 , color: '#83e6ff'},
    { title: "Next JS", progress: 80 , color : "#173e6a"},
  ];
  return (
    <div className="flex justify-center flex-col items-center">
 <h1
        className="bg-gradient-to-br mb-3 from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Skills
      </h1>
    <div className="flex gap-2 -mt-[2rem]">
      <Image src={setting} width={300} height={300} alt="setting"/>
    <div className="flex flex-col">
        {progressData.map((item, index) => {
          const ref = useRef(null);
          const isInView = useInView(ref, { triggerOnce: true });

          return (
            <div key={index} className="w-[70vh] mb-4" ref={ref}>
              <div className="bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text  font-medium tracking-tight text-transparent md:text-lg">
                {item.title}
              </div>
              <div className="bg-white rounded-full h-2.5 dark:bg-gray-700">
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

  )
}

export default MySkills