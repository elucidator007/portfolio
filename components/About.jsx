// components/About.jsx
"use client"

import { motion } from "framer-motion"
import { Code2, Laptop, Server, Database } from "lucide-react"

export default function About() {
  const skills = [
    { icon: Code2, title: "Frontend", desc: "Building beautiful, responsive interfaces" },
    { icon: Server, title: "Backend", desc: "Crafting robust server architectures" },
    { icon: Database, title: "Database", desc: "Designing efficient data structures" },
    { icon: Laptop, title: "Full Stack", desc: "Connecting all the pieces together" }
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-light-dark to-light-accent dark:from-dark-light dark:to-dark-accent bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="mb-16 text-center">
            <p className="text-xl leading-relaxed text-light-dark dark:text-dark-light">
              Im a Full Stack Engineer passionate about creating innovative digital solutions. 
              With expertise in modern web technologies, I transform complex problems into elegant, 
              user-friendly applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="group relative p-6 rounded-xl bg-gradient-to-br from-light-secondary to-light-accent dark:from-dark-secondary dark:to-dark-accent overflow-hidden"
              >
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-light-dark to-light-accent dark:from-dark-light dark:to-dark-accent opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                
                <div className="relative z-10 flex items-center">
                  <div className="p-3 rounded-lg bg-light-primary dark:bg-dark-primary">
                    <skill.icon className="h-8 w-8 text-light-dark dark:text-dark-light" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-light-primary dark:text-dark-primary mb-1">
                      {skill.title}
                    </h3>
                    <p className="text-light-primary/80 dark:text-dark-primary/80">
                      {skill.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}