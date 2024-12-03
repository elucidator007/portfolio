// components/Education.jsx
"use client"

import { motion } from "framer-motion"
import { GraduationCap, Calendar, MapPin } from "lucide-react"

export default function Education() {
  return (
    <section className="py-20 bg-light-primary dark:bg-dark-primary">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-light-dark to-light-accent dark:from-dark-light dark:to-dark-accent bg-clip-text text-transparent"
        >
          Education
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative p-8 rounded-xl bg-gradient-to-br from-light-secondary/20 to-light-accent/20 dark:from-dark-secondary/20 dark:to-dark-accent/20 hover:shadow-xl transition-all duration-300">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <div className="p-4 rounded-full bg-light-dark dark:bg-dark-light">
                <GraduationCap className="h-8 w-8 text-light-primary dark:text-dark-primary" />
              </div>
            </div>

            <div className="mt-8 text-center space-y-4">
              <h3 className="text-2xl font-bold text-light-dark dark:text-dark-light">
                Bachelor of Engineering
              </h3>
              <p className="text-xl text-light-accent dark:text-dark-accent">
                Computer Science and Engineering
              </p>
              <div className="flex justify-center gap-6 text-light-dark/80 dark:text-dark-light/80">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <span>June 2018 - May 2022</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  <span>Chandigarh University</span>
                </div>
              </div>

              <motion.div 
                className="pt-6 space-y-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div className="h-1 w-32 mx-auto bg-gradient-to-r from-light-accent to-light-dark dark:from-dark-accent dark:to-dark-light rounded-full" />
                <p className="text-light-dark/70 dark:text-dark-light/70">
                  Focused on modern software development practices and cutting-edge technologies
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}