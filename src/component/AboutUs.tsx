"use client";
import AnimatedContent from "@/components/AnimationContent";
import React from "react";

export function AboutUs() {
  return (
    <AnimatedContent direction="horizontal">

      <div className="flex flex-col items-center justify-center p-4">
        <h1 className="bg-gradient-to-br mb-0 from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-3xl md:text-5xl font-medium tracking-tight text-transparent">
          About Us
        </h1>
        <hr  className="w-[10%] mx-auto my-0  border-2 border-blue-500"/>
        <div className="">

          <h1 className="text-blue-500 text-2xl font-bold">I am Saim Ramzan</h1>
          <p className="">
            I am a passionate and dedicated Frontend Developer with over 2 years
            of experience in building dynamic, user-centric applications using
            React.js, Next.js, and React Native.Throughout my career, I have
            developed a deep understanding of frontend technologies and modern
            web development practices, creating seamless and interactive user
            experiences across various platforms. I specialize in leveraging
            React.js to build fast and scalable web applications, while Next.js
            enables me to deliver server-side rendered apps with great SEO
            performance and speed. I am skilled in working with modern
            JavaScript, state management tools like Redux, React-query and
            integrating APIs to create robust and responsive applications. With
            a strong focus on clean code. I am always eager to learn new
            technologies, collaborate with cross-functional teams, and stay
            up-to-date with the latest trends in the frontend development world.
            My goal is to continue growing as a developer and contributing to
            innovative, user-first projects.
          </p>
        </div>
        <div className="flex gap-4">
          <a
            href="/saim-ramzan.pdf"
            download="saim-ramzan.pdf"
            className="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 mt-4 rounded"
          >
            Download CV
          </a>
          <a
            href="/saim-ramzan.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 mt-4 rounded"
          >
            Open
          </a>
        </div>
      </div>
    </AnimatedContent>
  );
}
