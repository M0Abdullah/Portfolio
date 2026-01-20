"use client";
import { motion } from "framer-motion";
import { IconCode, IconRocket, IconUsers, IconTrophy } from "@tabler/icons-react";

export function AboutUs() {
  const achievements = [
    {
      icon: IconCode,
      title: "50+",
      subtitle: "Projects Completed",
      description: "Successfully delivered web and mobile applications"
    },
    {
      icon: IconRocket,
      title: "5+",
      subtitle: "Years Experience",
      description: "Professional development experience"
    },
    {
      icon: IconUsers,
      title: "20+",
      subtitle: "Happy Clients",
      description: "Satisfied clients across different industries"
    },
    {
      icon: IconTrophy,
      title: "100%",
      subtitle: "Success Rate",
      description: "All projects delivered on time and within budget"
    }
  ];

  const expertise = [
    "Full-Stack Development",
    "Mobile App Development",
    "API Design & Development",
    "Database Architecture",
    "Cloud Deployment",
    "Performance Optimization"
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />
      
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
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-8" />
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Passionate Full-Stack Developer crafting exceptional digital experiences 
            with modern technologies and innovative solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white mb-4">
                Hello! I&apos;m <span className="gradient-text">Muhammad Abdullah</span>
              </h3>
              
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  I&apos;m a passionate Full-Stack Developer with <strong className="text-blue-400">5+ years</strong> of 
                  professional experience in building scalable web applications and mobile solutions. 
                  My expertise spans across the entire development lifecycle, from concept to deployment.
                </p>
                
                <p>
                  I specialize in the <strong className="text-blue-400">MERN Stack</strong> (MongoDB, Express.js, React.js, Node.js) 
                  and have extensive experience with modern frameworks like <strong className="text-blue-400">Next.js</strong>, 
                  <strong className="text-blue-400"> React Native</strong>, and <strong className="text-blue-400">Nest.js</strong>. 
                  I&apos;m passionate about writing clean, efficient code and staying up-to-date with the latest industry trends.
                </p>
                
                <p>
                  My goal is to create digital solutions that not only meet technical requirements but also 
                  provide exceptional user experiences. I believe in continuous learning and always strive 
                  to improve my skills and embrace new technologies.
                </p>
              </div>
            </div>

            {/* Expertise List */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white">Areas of Expertise</h4>
              <div className="grid grid-cols-2 gap-3">
                {expertise.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 p-3 glass-effect rounded-lg hover:bg-blue-500/10 transition-all duration-300"
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span className="text-gray-300">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
            
              <button className="px-8 py-4 glass-effect text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105">
                Let&apos;s Connect
              </button>
            </div>
          </motion.div>

          {/* Achievements Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="glass-effect p-6 rounded-2xl text-center hover:scale-105 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-3xl font-bold gradient-text mb-2">
                  {achievement.title}
                </h3>
                
                <p className="text-lg font-semibold text-gray-300 mb-2">
                  {achievement.subtitle}
                </p>
                
                <p className="text-sm text-gray-400 leading-relaxed">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
