"use client";
import { motion } from "framer-motion";
import { IconBriefcase, IconCalendar, IconMapPin, IconExternalLink } from "@tabler/icons-react";

export default function Experience() {
  const experiences = [
    {
      title: " Full Stack Developer",
      company: "Enigmatix",
      location: "Bwp, Pakistan",
      period: "2022 - Present",
      duration: "2+ years",
      type: "Full-time",
      description: "Led development of multiple enterprise-level applications using React.js, Next.js, and Node.js. Mentored junior developers and implemented best practices for code quality and performance optimization.",
      achievements: [
        "Built and deployed 10+ production applications",
        "Improved application performance by 40%",
        "Led a team of 5 developers",
        "Implemented CI/CD pipelines reducing deployment time by 60%"
      ],
      technologies: ["React.js", "Next.js", "Node.js", "TypeScript", "MongoDB", "AWS"],
      website: "https://enigmatix.io/"
    },
    {
      title: "Full Stack Developer",
      company: "Enigmatix",
      location: "Bwp, Pakistan",
      period: "2022 - present",
      duration: "2+ years",
      type: "Full-time",
      description: "Developed responsive web applications and mobile apps using MERN stack. Collaborated with cross-functional teams to deliver user-centered solutions.",
      achievements: [
        "Delivered 15+ client projects on time",
        "Increased client satisfaction rate to 95%",
        "Optimized database queries improving load times by 50%",
        "Built REST APIs serving 10,000+ daily requests"
      ],
      technologies: ["React.js", "React Native", "Express.js", "MongoDB", "MySQL"],
      website: "https://enigmatix.io/"
    },
    {
      title: "Junior Frontend Developer",
      company: "Enigmatix",
      location: "Bwp, Pakistan",
      period: "2022 - present",
      duration: "2+ years",
      type: "Full-time",
      description: "Started my professional journey building interactive user interfaces and learning modern development practices. Focused on React.js and modern JavaScript.",
      achievements: [
        "Converted 20+ designs to pixel-perfect UI",
        "Reduced bundle size by 30% through optimization",
        "Implemented responsive design across all platforms",
        "Achieved 98% mobile responsiveness score"
      ],
      technologies: ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
      website: "https://enigmatix.io/"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/5 to-transparent" />
      
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
            Professional Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-8" />
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            3+ years of professional experience building scalable applications and leading development teams
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 rounded-full" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-col md:gap-16`}
              >
                {/* Timeline Node */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-black shadow-lg z-10" />

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? "" : "md:text-right"}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="glass-effect p-8 rounded-2xl hover:shadow-2xl transition-all duration-300"
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className={`flex-1 ${index % 2 === 0 ? "" : "md:text-right"}`}>
                        <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                        <div className="flex items-center gap-2 text-blue-400 font-semibold mb-2">
                          <IconBriefcase className="w-5 h-5" />
                          <span>{exp.company}</span>
                          <a
                            href={exp.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-2 hover:scale-110 transition-transform"
                          >
                            <IconExternalLink className="w-4 h-4" />
                          </a>
                        </div>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                          <div className="flex items-center gap-1">
                            <IconCalendar className="w-4 h-4" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <IconMapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full">
                            {exp.duration}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {exp.description}
                    </p>

                    {/* Key Achievements */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-300">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 glass-effect text-sm text-gray-300 rounded-lg border border-blue-500/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block w-5/12" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 grid md:grid-cols-4 gap-6"
        >
          {[
            { label: "Years of Experience", value: "3+", icon: "🚀" },
            { label: "Projects Completed", value: "50+", icon: "💼" },
            { label: "Technologies Mastered", value: "15+", icon: "⚡" },
            { label: "Happy Clients", value: "25+", icon: "😊" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="glass-effect p-6 rounded-2xl text-center"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
