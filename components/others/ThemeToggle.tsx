'use client'

import { useEffect, useState } from 'react'
import { FiMoon , FiSun  } from "react-icons/fi";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const shouldUseDark = stored === 'dark' || (!stored && prefersDark)
    
    setIsDark(shouldUseDark)
    document.documentElement.classList.toggle('dark', shouldUseDark)
  }, [])

  const toggleTheme = () => {
    const newDark = !isDark
    setIsDark(newDark)
    document.documentElement.classList.toggle('dark', newDark)
    localStorage.setItem('theme', newDark ? 'dark' : 'light')
  }

  return (
    <button
      onClick={toggleTheme}
      className="w-10 h-10 flex items-center justify-center rounded-full bg-yellow-300 dark:bg-gray-700"
    >
      {isDark ? <FiMoon className="w-5 h-5 text-white" /> : <FiSun className="w-5 h-5 text-black" />}
    </button>
  )
}