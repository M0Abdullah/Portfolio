"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FloatingDock } from "@/components/ui/floating-dock";
import { 
  IconHome, 
  IconUser, 
  IconCode, 
  IconBriefcase, 
  IconMail,
   
} from "@tabler/icons-react";

export default function Navigation() {
  const [, setActiveSection] = useState("home");

  const links = [
    {
      title: "Home",
      icon: <IconHome className="h-full w-full text-neutral-300" />,
      href: "#home",
    },
    {
      title: "About",
      icon: <IconUser className="h-full w-full text-neutral-300" />,
      href: "#about",
    },
    {
      title: "Skills",
      icon: <IconCode className="h-full w-full text-neutral-300" />,
      href: "#skills",
    },
    {
      title: "Experience",
      icon: <IconBriefcase className="h-full w-full text-neutral-300" />,
      href: "#experience",
    },
    {
      title: "Contact",
      icon: <IconMail className="h-full w-full text-neutral-300" />,
      href: "#contact",
    },
   
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "experience", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Mobile Header */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 lg:hidden glass-effect border-b border-white/10"
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold gradient-text">Muhammad Abdullah</h1>
          <a 
            href="/saim-ramzan.pdf"
            download
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-medium transition-colors"
          >
            Resume
          </a>
        </div>
      </motion.header>

      {/* Floating Dock Navigation */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <FloatingDock
          items={links}
          desktopClassName="bg-black/50 backdrop-blur-md border border-white/10"
          mobileClassName="bg-black/50 backdrop-blur-md border border-white/10"
        />
      </div>
    </>
  );
}
