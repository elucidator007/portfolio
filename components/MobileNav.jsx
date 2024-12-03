// components/MobileNav.jsx
'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const menuItems = ["about", "experience", "projects", "contact"]

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      const headerOffset = 80
      const sectionPosition = section.offsetTop - headerOffset
      window.scrollTo({
        top: sectionPosition,
        behavior: 'smooth'
      })
      setIsOpen(false)
    }
  }

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-light-dark dark:text-dark-light"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="fixed top-[72px] right-0 w-full h-screen bg-light-primary dark:bg-dark-primary border-l border-light-accent/20 dark:border-dark-accent/20">
          <div className="flex flex-col p-6 space-y-6">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-xl text-light-dark dark:text-dark-light capitalize py-2 hover:text-light-accent dark:hover:text-dark-accent transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}