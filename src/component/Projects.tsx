"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { 
  IconBrandGithub, 
  IconCode, 
  IconDeviceMobile,
  IconWorld,
  IconServer,
} from "@tabler/icons-react";

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      title: "OMS B2B Platform",
      category: "fullstack",
      description: "Comprehensive Order Management System for B2B operations with inventory tracking, supplier management, and automated workflows.",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "Node.js", "MongoDB", "Express.js", "Socket.io"],
      features: [
        "Real-time order tracking",
        "Supplier management dashboard",
        "Inventory automation",
        "Multi-tenant architecture"
      ],
      github: "https://github.com/yourusername/oms-b2b",
      live: "https://oms-b2b.vercel.app",
      status: "Completed",
      year: "2024"
    },
    {
      title: "Refocusai",
      category: "fullstack",
      description: "AI-powered productivity platform that helps users refocus and optimize their workflow using machine learning algorithms.",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "TypeScript", "Python", "TensorFlow", "PostgreSQL"],
      features: [
        "AI-powered focus tracking",
        "Productivity analytics",
        "Smart notifications",
        "Workflow optimization"
      ],
      github: "https://github.com/yourusername/refocusai",
      live: "https://refocusai.com",
      status: "Completed",
      year: "2023"
    },
    {
      title: "5Buckcharlie",
      category: "frontend",
      description: "Modern e-commerce platform with dynamic pricing, product catalog management, and seamless checkout experience.",
      image: "/api/placeholder/600/400",
      technologies: ["React.js", "Redux Toolkit", "Tailwind CSS", "Stripe", "Firebase"],
      features: [
        "Dynamic pricing engine",
        "Product catalog management",
        "Secure payment processing",
        "Real-time inventory updates"
      ],
      github: "https://github.com/yourusername/5buckcharlie",
      live: "https://5buckcharlie.com",
      status: "Completed",
      year: "2023"
    },
    {
      title: "Linkgraph",
      category: "fullstack",
      description: "Advanced SEO and link building platform with comprehensive analytics, competitor analysis, and automated reporting.",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "Node.js", "MongoDB", "Redis", "Chart.js"],
      features: [
        "SEO analytics dashboard",
        "Link building automation",
        "Competitor analysis",
        "Custom reporting tools"
      ],
      github: "https://github.com/yourusername/linkgraph",
      live: "https://linkgraph.io",
      status: "Completed",
      year: "2022"
    },
    {
      title: "Social Media Mobile App",
      category: "mobile",
      description: "Cross-platform mobile app for social networking with posts, messaging, and live streaming features.",
      image: "/api/placeholder/600/400",
      technologies: ["React Native", "Expo", "Node.js", "PostgreSQL", "WebRTC"],
      features: [
        "Cross-platform compatibility",
        "Real-time messaging",
        "Live streaming",
        "Push notifications"
      ],
      github: "https://github.com/yourusername/social-app",
      live: "https://play.google.com/store/apps/details?id=com.socialapp",
      status: "Completed",
      year: "2022"
    },
    {
      title: "REST API Gateway",
      category: "backend",
      description: "Scalable API gateway with authentication, rate limiting, and microservices orchestration.",
      image: "/api/placeholder/600/400",
      technologies: ["Nest.js", "PostgreSQL", "Redis", "Docker", "JWT"],
      features: [
        "Authentication & authorization",
        "Rate limiting",
        "Request/response caching",
        "API documentation"
      ],
      github: "https://github.com/yourusername/api-gateway",
      live: "https://api-docs.example.com",
      status: "Completed",
      year: "2022"
    }
  ];

  const categories = [
    { key: "all", label: "All Projects", icon: IconCode },
    { key: "fullstack", label: "Full Stack", icon: IconWorld },
    { key: "frontend", label: "Frontend", icon: IconDeviceMobile },
    { key: "mobile", label: "Mobile", icon: IconDeviceMobile },
    { key: "backend", label: "Backend", icon: IconServer },
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
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
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-8" />
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A showcase of my best work spanning web applications, mobile apps, and backend systems
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12 overflow-x-auto"
        >
          <div className="glass-effect rounded-2xl p-2 flex gap-2 min-w-max">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setFilter(category.key)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${
                  filter === category.key
                    ? "bg-blue-600 text-white shadow-lg scale-105"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <category.icon className="w-5 h-5" />
                {category.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="glass-effect rounded-2xl overflow-hidden group hover:shadow-2xl transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl opacity-20">
                    {project.category === "mobile" && "📱"}
                    {project.category === "frontend" && "🎨"}
                    {project.category === "backend" && "⚙️"}
                    {project.category === "fullstack" && "🌐"}
                  </div>
                </div>
                
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    project.status === "Completed" 
                      ? "bg-green-500/20 text-green-400 border border-green-500/30" 
                      : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                  }`}>
                    {project.status}
                  </span>
                </div>

                {/* Year Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-black/50 text-white rounded-full text-xs font-semibold">
                    {project.year}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                {/* Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Key Features */}
                <div>
                  <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-gray-400">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                                 {/* Technologies */}
                 <div>
                   <h4 className="text-sm font-semibold text-white mb-2">Technologies:</h4>
                   <div className="flex flex-wrap gap-1">
                     {project.technologies.slice(0, 4).map((tech, i) => (
                       <span
                         key={i}
                         className="px-2 py-1 text-xs bg-blue-500/10 text-blue-400 rounded border border-blue-500/20"
                       >
                         {tech}
                       </span>
                     ))}
                     {project.technologies.length > 4 && (
                       <span className="px-2 py-1 text-xs text-gray-400">
                         +{project.technologies.length - 4} more
                       </span>
                     )}
                   </div>
                 </div>

               </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass-effect p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Interested in Working Together?
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I&apos;m always open to discussing new opportunities and exciting projects. 
              Let&apos;s create something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-300 glow-effect hover:scale-105">
                Get In Touch
              </button>
              <a
                href="https://github.com/M0Abdullah"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 glass-effect text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <IconBrandGithub className="w-5 h-5" />
                View All Projects
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
