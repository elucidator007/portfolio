// components/Experience.jsx
"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

export default function Experience() {
  const experiences = [
    {
      role: "FullStack Engineer",
      company: "GiveGrants",
      period: "Oct 2022 - Present",
      achievements: [
        "Migrated UI from Angular 1.8 to ReactJS, 50% performance boost",
        "Enhanced data download service, 35% server load reduction",
        "Implemented chunked data downloading"
      ]
    },
    {
      role: "SDE 1",
      company: "Goodera",
      period: "Oct 2021 - Oct 2022",
      achievements: [
        "Led module enhancements, 60% efficiency improvement",
        "Revolutionized data visualization, 40% faster queries",
        "Engineered custom email templates, 30% engagement boost"
      ]
    }
  ]

  return (
    <section id="experience" className="py-20 bg-light-primary dark:bg-dark-primary">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="container mx-auto px-4"
      >
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-light-dark to-light-accent dark:from-dark-light dark:to-dark-accent bg-clip-text text-transparent">
          Experience
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-light-accent to-light-dark dark:from-dark-accent dark:to-dark-light" />

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} relative`}
              >
                <Card className="w-[90%] md:w-[45%] group hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-light-secondary/20 to-light-accent/20 dark:from-dark-secondary/20 dark:to-dark-accent/20 border-none">
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-light-dark dark:text-dark-light mb-2">
                      {exp.role}
                    </h3>
                    <div className="text-lg font-semibold text-light-accent dark:text-dark-accent mb-2">
                      {exp.company}
                    </div>
                    <div className="text-sm text-light-dark/60 dark:text-dark-light/60 mb-4">
                      {exp.period}
                    </div>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.2 }}
                          className="flex items-center text-light-dark dark:text-dark-light"
                        >
                          <span className="w-2 h-2 rounded-full bg-light-accent dark:bg-dark-accent mr-3" />
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}