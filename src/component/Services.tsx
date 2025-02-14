"use client";
import React, { useRef } from "react";
import { PinContainer } from "@/components/ui/3d-pin";
import { motion, useInView } from "framer-motion";


export function AnimatedPinDemo() {
  const data = [
    {
      title: "Web Development",
      description:
        "Building responsive, dynamic, and high-performance websites tailored to your needs. Using modern technologies like React, Node.js, and more, I ensure your site is optimized for speed, scalability, and accessibility, delivering a robust online presence.",
    },
    {
      title: "Mobile App Development",
      description:
        "React Native is an ideal choice for developers looking to create high-quality, cross-platform mobile apps with a native look and feel. Its powerful combination of JavaScript, React, and native modules makes it a go-to framework for businesses aiming to build efficient, scalable, and cost-effective mobile applications.",
    },
  ];
  const progressData = [
    { title: "Html", progress: 90, color: "#ec7518" },
    { title: "Css", progress: 90 , color:"#18b2ec"},
    { title: "JavaScript", progress: 90, color:"#f0dc55" },
    { title: "React JS", progress: 90 , color: '#83e6ff'},
    { title: "Next JS", progress: 80 , color : "#173e6a"},
  ];
  return (
    <div className="flex flex-col items-center justify-center mt-8">
      <h1
        style={{ marginBottom: "-8rem" }}
        className="bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Services
      </h1>
      <div className="h-[40rem] w-full flex items-center justify-center ">
        {data.map((item) => (
          <PinContainer title={item.title}>
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                {item.title}
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500 ">{item.description}</span>
              </div>
              <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
            </div>
          </PinContainer>
        ))}
      </div>
      
      <div className="flex flex-col items-center justify-center -mt-[2rem]">
      {progressData.map((item, index) => {
        const ref = useRef(null);
        const isInView = useInView(ref, { triggerOnce: true });

        return (
          <div key={index} className="w-[70vh] mb-4" ref={ref}>
            <div className="mb-1 text-base font-medium dark:text-white">
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
  );
}
