// components/Projects.jsx
"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Github, ExternalLink } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "SportsNet",
      description: "High-performance sports-centric social platform with real-time updates and analytics",
      image: "/api/placeholder/600/400",
      tech: ["React.js", "Next.js", "Tailwind", "MongoDB"],
      github: "https://github.com",
      live: "https://project-url.com",
      features: ["User Profiles", "Performance Analytics", "Real-time Updates"]
    }
    // Add more projects
  ]

  return (
    <section className="py-20 bg-light-primary dark:bg-dark-primary overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-light-dark to-light-accent dark:from-dark-light dark:to-dark-accent bg-clip-text text-transparent"
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-light-secondary/20 to-light-accent/20 dark:from-dark-secondary/20 dark:to-dark-accent/20 border-none">
                <div className="grid md:grid-cols-2 gap-8 p-8">
                  {/* Project Image */}
                  <div className="relative overflow-hidden rounded-xl">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-[300px] object-cover transform group-hover:scale-105 transition-transform duration-500"
                      whileHover={{ scale: 1.05 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Project Info */}
                  <div className="space-y-4">
                    <h3 className="text-3xl font-bold text-light-dark dark:text-dark-light">
                      {project.title}
                    </h3>
                    <p className="text-light-dark/80 dark:text-dark-light/80">
                      {project.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2">
                      {project.features.map((feature, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-center space-x-2"
                        >
                          <span className="w-2 h-2 rounded-full bg-light-accent dark:bg-dark-accent" />
                          <span className="text-light-dark dark:text-dark-light">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-sm rounded-full bg-light-accent/20 dark:bg-dark-accent/20 text-light-dark dark:text-dark-light"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex space-x-4 pt-4">
                      <motion.a
                        href={project.github}
                        whileHover={{ scale: 1.1 }}
                        className="p-2 rounded-full bg-light-dark dark:bg-dark-light text-light-primary dark:text-dark-primary"
                      >
                        <Github className="h-5 w-5" />
                      </motion.a>
                      <motion.a
                        href={project.live}
                        whileHover={{ scale: 1.1 }}
                        className="p-2 rounded-full bg-light-dark dark:bg-dark-light text-light-primary dark:text-dark-primary"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}