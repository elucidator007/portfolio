// components/Hero.jsx
"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download } from "lucide-react"

export default function Hero() {
  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-light-primary via-light-secondary to-light-accent dark:from-dark-primary dark:via-dark-secondary dark:to-dark-accent animate-gradient-xy"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-screen flex items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h1 
            className="text-8xl font-bold mb-6 bg-gradient-to-r from-light-dark to-light-accent dark:from-dark-light dark:to-dark-accent bg-clip-text text-transparent"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Ankush Sangwan
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-2xl mb-8 text-light-dark dark:text-dark-light">
              Full Stack Engineer crafting exceptional digital experiences
            </p>
            
            <div className="relative">
              <Button 
                onClick={() => window.open('/resume.pdf', '_blank')}
                className="group relative overflow-hidden bg-light-dark dark:bg-dark-light text-light-primary dark:text-dark-primary hover:scale-105 transform transition-all duration-300"
              >
                <span className="relative z-10 flex items-center">
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-light-accent to-light-dark dark:from-dark-accent dark:to-dark-light opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
            </div>
            
            <div className="flex justify-center gap-6 mt-8">
              {[
                { icon: Github, href: "https://github.com/elucidator007" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/ankush-sangwan-2901/" },
                { icon: Mail, href: "mailto:ankush2000sangwan@gmail.com" }
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 rounded-full bg-light-dark dark:bg-dark-light text-light-primary dark:text-dark-primary hover:shadow-lg transition-all duration-300"
                >
                  <item.icon className="h-6 w-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-light-dark dark:border-dark-light rounded-full flex justify-center">
          <div className="w-1 h-3 bg-light-dark dark:bg-dark-light rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  )
}