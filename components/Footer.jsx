// components/ContactFooter.jsx
"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function ContactFooter() {
  const contactInfo = [
    { icon: Mail, text: "ankush2000sangwan@gmail.com", href: "mailto:ankush2000sangwan@gmail.com" },
    { icon: Phone, text: "+91 - 6239966469", href: "tel:+916239966469" },
    { icon: MapPin, text: "Panchkula, Haryana, 134112", href: "#" }
  ]

  return (
    <section id="contact" className="bg-gradient-to-b from-light-primary to-light-secondary dark:from-dark-primary dark:to-dark-secondary py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-light-dark to-light-accent dark:from-dark-light dark:to-dark-accent bg-clip-text text-transparent">
            Let&apos;s Connect
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {contactInfo.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group flex flex-col items-center p-6 rounded-xl bg-gradient-to-br from-light-secondary/20 to-light-accent/20 dark:from-dark-secondary/20 dark:to-dark-accent/20 hover:shadow-xl transition-all duration-300"
              >
                <div className="p-4 rounded-full bg-light-dark dark:bg-dark-light mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="h-6 w-6 text-light-primary dark:text-dark-primary" />
                </div>
                <span className="text-light-dark dark:text-dark-light">{item.text}</span>
              </motion.a>
            ))}
          </div>

          <div className="flex justify-center gap-6">
            {[
              { icon: Github, href: "https://github.com" },
              { icon: Linkedin, href: "https://linkedin.com" },
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

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 text-light-dark/60 dark:text-dark-light/60"
          >
            <p>&copy; {new Date().getFullYear()} Ankush Sangwan. All rights reserved.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}