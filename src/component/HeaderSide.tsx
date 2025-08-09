"use client";
import { motion } from "framer-motion";
import abdullahImage from "../Assest/abdullah.jpg";
import Image from "next/image";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { Spotlight } from "@/components/ui/Spotlight";
import { IconBrandGithub, IconBrandLinkedin, IconMail } from "@tabler/icons-react";

function HeaderSide() {
  const techStack = [
    { id: 1, title: "React.js" },
    { id: 2, title: "Next.js" },
    { id: 3, title: "TypeScript" },
    { id: 4, title: "Node.js" },
    { id: 5, title: "Nest.js" },
    { id: 6, title: "React Native" },
    { id: 7, title: "MongoDB" },
    { id: 8, title: "MySQL" },
    { id: 9, title: "Docker" },
    { id: 10, title: "AWS" },
    { id: 11, title: "Firebase" },
    { id: 12, title: "Express.js" },
    { id: 13, title: "Tailwind CSS" },
    { id: 14, title: "HTML5" },
    { id: 15, title: "CSS3" },
    { id: 16, title: "JavaScript" },
  ];

  const words = [
    { text: "Full" },
    { text: "Stack" },
    { text: "Developer" },
    { text: "with" },
    { text: "3+" },
    { text: "Years", className: "text-blue-500" },
    { text: "Experience", className: "text-blue-500" },
  ];

  const socialLinks = [
    { icon: IconBrandGithub, href: "https://github.com/M0Abdullah", label: "GitHub" },
    { icon: IconBrandLinkedin, href: "https://www.linkedin.com/in/muhammad-abdullah-5b8aa7288/", label: "LinkedIn" },
    { icon: IconMail, href: "muhammadabdullah484401@gmail.com", label: "Email" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Spotlight Effects */}
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
      <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="blue" />
      <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="purple" />

      {/* Background Grid */}
      <div className="absolute inset-0 bg-black bg-grid-white/[0.02] bg-grid-small-white/[0.02]" />
      <div className="absolute inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-sm md:text-base text-blue-400 font-medium tracking-wide uppercase"
            >
              👋 Hello, I&apos;m
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold gradient-text leading-tight"
            >
              Muhammad
              <br />
              <span className="text-white">Abdullah</span>
            </motion.h1>

            {/* Typewriter Effect */}
            <div className="text-xl md:text-2xl text-gray-300">
              <TypewriterEffect words={words} />
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-lg text-gray-400 leading-relaxed max-w-2xl"
            >
              Passionate MERN Stack Developer specializing in building exceptional digital experiences. 
              I create scalable web applications and mobile solutions using modern technologies.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-300 glow-effect hover:scale-105">
                View My Work
              </button>
            
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex gap-4"
            >
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 glass-effect rounded-lg hover:bg-blue-600/20 transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-gray-300" />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-3xl scale-110" />
              
              {/* Profile Image */}
              <div className="relative glass-effect p-2 rounded-3xl animate-float">
                <Image
                  src={abdullahImage}
                  width={400}
                  height={400}
                  alt="Muhammad Abdullah - Full Stack Developer"
                  priority
                  className="rounded-2xl object-cover w-full h-full"
                />
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-16 h-16 glass-effect rounded-full flex items-center justify-center"
              >
                <span className="text-2xl">⚡</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 w-16 h-16 glass-effect rounded-full flex items-center justify-center"
              >
                <span className="text-2xl">🚀</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Tech Stack Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-16"
        >
          <p className="text-center text-gray-400 mb-8 text-lg">Technologies I work with</p>
          <InfiniteMovingCards items={techStack} direction="right" speed="slow" />
        </motion.div>
      </div>
    </section>
  );
}

export default HeaderSide;
