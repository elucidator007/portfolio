// components/Header.jsx
"use client"

import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { useTheme } from './ThemeProvider'

export default function Header() {
  const { theme, toggleTheme } = useTheme()

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      const headerOffset = 80
      const sectionPosition = section.offsetTop - headerOffset
      window.scrollTo({
        top: sectionPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <header className="fixed top-0 w-full bg-[#F6F4EB]/80 dark:bg-[#1B262C]/80 backdrop-blur-sm z-50 shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[#4682A9] dark:text-[#BBE1FA]">AS</h1>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex gap-6 text-[#749BC2] dark:text-[#3282B8]">
            {["about", "experience", "projects", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="hover:text-[#4682A9] dark:hover:text-[#BBE1FA] capitalize"
              >
                {section}
              </button>
            ))}
          </div>
          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {theme === 'light' ? 
              <Moon className="h-5 w-5 text-[#4682A9]" /> : 
              <Sun className="h-5 w-5 text-[#BBE1FA]" />
            }
          </Button>
        </div>
      </nav>
    </header>
  )
}