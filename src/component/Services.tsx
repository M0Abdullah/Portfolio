"use client";
import React from "react";
import { PinContainer } from "@/components/ui/3d-pin";

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
/* eslint-disable */
  return (
    <div className="items-center">
      <h1
        style={{ marginBottom: "-8rem" }}
        className="bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Services
      </h1>
      <div className="w-full h-[60rem] md:h-[40rem] gap-10 flex flex-col md:flex-row items-center justify-center ">
        {data.map((item, id) => (
          console.log(id),
          <PinContainer key={id} title={item.title}>
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
      <div className="flex justify-center items-center">


        <div className="bg-black text-white p-6 m-2  rounded-lg w-full max-w-lg font-mono">
          <div className="flex justify-between items-center">
            <div className="flex space-x-2 text-red-500">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <p className="text-sm">Bash</p>
          </div>
          <div className="mt-4">
            <p className="text-green-400">{`const developer = {`}</p>
            <p className="text-white">
            
              FirstName: <span className="text-green-400">"Saim",</span>{" "}
            </p>
            <p className="text-white">
              LastName: <span className="text-green-400">"Ramzan",</span>{" "}
            </p>
            <p className="text-white">
              age: <span className="text-green-400">19,</span>{" "}
            </p>
            <p className="text-white">{`Hobby:repeat = () => `} </p>
            <p className="text-gray-400 -mt-5 ml-3">
              <br /> {`//Eat()`},<br /> {`//Sleep()`},<br /> {`//code()`},{" "}
              <br /> {`}`},
            </p>
            <p className="text-white">
              <span className="text-green-400">{`}`},</span>{" "}
            </p>
          </div>
        </div>
      </div>

    </div>
  );
  /* eslint-enable */

}
