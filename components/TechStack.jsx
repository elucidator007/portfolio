// components/Skills.jsx
"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Skills() {
  const skills = {
    "Frontend Development": [
      "React.js",
      "Redux",
      "Next.js", 
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Bootstrap",
      "Material-UI"
    ],
    "Backend Development": [
      "Node.js",
      "Express",
      "Python",
      "RESTful API",
      "TanStack Query",
      "NestJs",
      "Jenkins"
    ],
    "Database & Tools": [
      "MySQL",
      "MongoDB",
      "SQL",
      "Git",
      "Bitbucket",
      "Postman",
      "Kibana",
      "Elasticsearch",
      "SonarQube",
      "Sentry"
    ]
  }

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section className="py-20 bg-light-primary dark:bg-dark-primary" ref={ref}>
      <motion.h2 
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-light-dark to-light-accent dark:from-dark-light dark:to-dark-accent bg-clip-text text-transparent"
      >
        Tech Stack
      </motion.h2>

      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
        {Object.entries(skills).map(([category, items], index) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.2 }}
            className="bg-gradient-to-br from-light-secondary/20 to-light-accent/20 dark:from-dark-secondary/20 dark:to-dark-accent/20 rounded-xl p-6"
          >
            <h3 className="text-2xl font-bold mb-6 text-light-dark dark:text-dark-light">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-light-dark/10 dark:bg-dark-light/10 rounded-full text-light-dark dark:text-dark-light text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}