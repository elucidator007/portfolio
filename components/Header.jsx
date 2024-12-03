// components/Header.jsx
"use client"

import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { Moon, Sun } from "lucide-react"
import { useTheme } from './ThemeProvider'

export default function Header() {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="fixed top-0 w-full bg-[#F6F4EB]/80 dark:bg-[#1B262C]/80 backdrop-blur-sm z-50 shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[#4682A9] dark:text-[#BBE1FA]">AS</h1>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex gap-6 text-[#749BC2] dark:text-[#3282B8]">
            <Link href="#about" className="hover:text-[#4682A9] dark:hover:text-[#BBE1FA]">About</Link>
            <Link href="#experience" className="hover:text-[#4682A9] dark:hover:text-[#BBE1FA]">Experience</Link>
            <Link href="#projects" className="hover:text-[#4682A9] dark:hover:text-[#BBE1FA]">Projects</Link>
            <Link href="#contact" className="hover:text-[#4682A9] dark:hover:text-[#BBE1FA]">Contact</Link>
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