"use client";
import { motion } from "framer-motion";
import abdullahImage from "../Assest/abdullah.png";
import Image from "next/image";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { Spotlight } from "@/components/ui/Spotlight";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";

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
    { text: "5+" },
    { text: "Years", className: "text-blue-500" },
    { text: "Experience", className: "text-blue-500" },
  ];

  const socialLinks = [
    { icon: IconBrandGithub, href: "https://github.com/M0Abdullah", label: "GitHub" },
    { icon: IconBrandLinkedin, href: "https://www.linkedin.com/in/muhammad-abdullah-5b8aa7288/", label: "LinkedIn" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20 md:pt-0 pb-8">
      {/* Spotlight Effects */}
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
      <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="blue" />
      <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="purple" />

      {/* Background Grid */}
      <div className="absolute inset-0 bg-black bg-grid-white/[0.02] bg-grid-small-white/[0.02]" />
      <div className="absolute inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 pt-4 sm:pt-8 md:pt-12 lg:pt-20 pb-4 sm:pb-6 md:pb-8 lg:pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 items-center">
          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8 text-center lg:text-left order-2 lg:order-1"
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-xs sm:text-sm md:text-base text-blue-400 font-medium tracking-wide uppercase"
            >
              👋 Hello, I&apos;m
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold gradient-text leading-tight"
            >
              Muhammad
              <br />
              <span className="text-white">Abdullah</span>
            </motion.h1>

            {/* Typewriter Effect */}
            <div className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300">
              <TypewriterEffect words={words} />
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto lg:mx-0 px-4 sm:px-6 lg:px-0 break-words hyphens-auto"
            >
              Passionate MERN Stack Developer specializing in building exceptional digital experiences. 
              I create scalable web applications and mobile solutions using modern technologies.
            </motion.p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex gap-2 sm:gap-3 md:gap-4 justify-center lg:justify-start"
            >
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 sm:p-2.5 md:p-3 glass-effect rounded-lg hover:bg-blue-600/20 transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 text-gray-300" />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative flex justify-center order-1 lg:order-2 mb-4 sm:mb-6 lg:mb-0"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-3xl scale-110" />
              
              {/* Profile Image */}
              <div className="relative glass-effect p-1.5 sm:p-2 rounded-xl sm:rounded-2xl md:rounded-3xl animate-float">
                <Image
                  src={abdullahImage}
                  width={300}
                  height={300}
                  alt="Muhammad Abdullah - Full Stack Developer"
                  priority
                  className="rounded-lg sm:rounded-xl md:rounded-2xl object-cover w-full h-full max-w-[180px] sm:max-w-[220px] md:max-w-[280px] lg:max-w-[320px] mx-auto"
                />
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 md:-top-4 md:-right-4 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 glass-effect rounded-full flex items-center justify-center"
              >
                <span className="text-sm sm:text-base md:text-lg lg:text-2xl">⚡</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 md:-bottom-4 md:-left-4 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 glass-effect rounded-full flex items-center justify-center"
              >
                <span className="text-sm sm:text-base md:text-lg lg:text-2xl">🚀</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Tech Stack Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-6 sm:mt-8 md:mt-10 lg:mt-16"
        >
          <p className="text-center text-gray-400 mb-3 sm:mb-4 md:mb-6 lg:mb-8 text-xs sm:text-sm md:text-base lg:text-lg px-4">Technologies I work with</p>
          <InfiniteMovingCards items={techStack} direction="right" speed="slow" />
        </motion.div>
      </div>
    </section>
  );
}

export default HeaderSide;
