"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  IconBrandReact, 
  IconBrandNextjs, 
  IconBrandNodejs, 
  IconBrandTypescript,
  IconBrandMongodb,
  IconBrandDocker,
  IconBrandAws,
  IconBrandGit,
  IconBrandTailwind,
  IconBrandJavascript,
  IconDatabase,
  IconApi,
  IconBrandFirebase
} from "@tabler/icons-react";

function MySkills() {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const skillCategories = {
    frontend: {
      title: "Frontend Development",
      skills: [
        { name: "React.js", level: 95, icon: IconBrandReact, color: "#61DAFB", experience: "3+ years" },
        { name: "Next.js", level: 90, icon: IconBrandNextjs, color: "#000000", experience: "2+ years" },
        { name: "TypeScript", level: 85, icon: IconBrandTypescript, color: "#3178C6", experience: "2+ years" },
        { name: "JavaScript", level: 95, icon: IconBrandJavascript, color: "#F7DF1E", experience: "3+ years" },
        { name: "React Native", level: 88, icon: IconBrandReact, color: "#61DAFB", experience: "2+ years" },
        { name: "Tailwind CSS", level: 92, icon: IconBrandTailwind, color: "#06B6D4", experience: "2+ years" },
      ]
    },
    backend: {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 85, icon: IconBrandNodejs, color: "#339933", experience: "3+ years" },
        { name: "Nest.js", level: 80, icon: IconBrandNodejs, color: "#E0234E", experience: "2+ years" },
        { name: "MongoDB", level: 85, icon: IconBrandMongodb, color: "#47A248", experience: "2+ years" },
        { name: "MySQL", level: 75, icon: IconDatabase, color: "#336791", experience: "1+ years" },
        { name: "Firebase", level: 80, icon: IconBrandFirebase, color: "#336791", experience: "1+ years" },
      ]
    },
    tools: {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", level: 90, icon: IconBrandGit, color: "#F05032", experience: "3+ years" },
        { name: "Docker", level: 75, icon: IconBrandDocker, color: "#2496ED", experience: "1+ years" },
        { name: "AWS", level: 70, icon: IconBrandAws, color: "#FF9900", experience: "1+ years" },
        { name: "Jest", level: 80, icon: IconApi, color: "#C21325", experience: "2+ years" },
        { name: "Webpack", level: 75, icon: IconApi, color: "#8DD6F9", experience: "2+ years" },
      ]
    }
  };

  const categories = [
    { key: "frontend", label: "Frontend", icon: "🎨" },
    { key: "backend", label: "Backend", icon: "⚙️" },
    { key: "tools", label: "Tools", icon: "🛠️" },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-8" />
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Here are the technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8 sm:mb-12 px-4 overflow-x-auto"
        >
          <div className="glass-effect rounded-xl sm:rounded-2xl p-1 sm:p-2 flex gap-1 sm:gap-2 min-w-max">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setActiveCategory(category.key)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl text-sm sm:text-base font-semibold transition-all duration-300 flex items-center gap-1 sm:gap-2 whitespace-nowrap ${
                  activeCategory === category.key
                    ? "bg-blue-600 text-white shadow-lg scale-105"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <span className="text-lg sm:text-xl">{category.icon}</span>
                <span className="hidden xs:inline">{category.label}</span>
                <span className="xs:hidden">{category.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <h3 className="text-2xl font-bold text-center text-white mb-8">
            {skillCategories[activeCategory as keyof typeof skillCategories].title}
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="glass-effect p-4 sm:p-6 rounded-xl sm:rounded-2xl hover:scale-105 transition-all duration-300 group"
              >
                {/* Skill Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <skill.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{skill.name}</h4>
                      <p className="text-sm text-gray-400">{skill.experience}</p>
                    </div>
                  </div>
                  <span className="text-lg font-bold text-blue-400">{skill.level}%</span>
                </div>

                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      viewport={{ once: true }}
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                    />
                  </div>
                </div>

                {/* Skill Level Indicator */}
                <div className="mt-3 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        i < Math.floor(skill.level / 20)
                          ? "bg-blue-500 shadow-lg shadow-blue-500/50"
                          : "bg-gray-600"
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="glass-effect p-8 rounded-2xl max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Always Learning & Growing
            </h3>
            <p className="text-gray-300 leading-relaxed">
              I&apos;m constantly expanding my skill set and staying up-to-date with the latest technologies. 
              Currently exploring <span className="text-blue-400 font-semibold">Microservices Architecture</span>, 
              <span className="text-blue-400 font-semibold"> Kubernetes</span>, and 
              <span className="text-blue-400 font-semibold"> Serverless Computing</span> to enhance my development capabilities.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default MySkills;
