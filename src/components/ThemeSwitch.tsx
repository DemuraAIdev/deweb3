'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { RiSunFill, RiMoonFill } from 'react-icons/ri'

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  const handleThemeToggle = () => {
    const newTheme = theme === 'dark' || resolvedTheme === 'dark' ? 'light' : 'dark'

    if (newTheme === 'light' && !window.confirm('FLASHBANG WARNING? 💡💥')) {
      return
    }

    setTheme(newTheme)
  }

  if (!mounted) {
    return null
  }

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="h-5 w-5 text-lg"
      onClick={handleThemeToggle}
    >
      {mounted && (theme === 'dark' || resolvedTheme === 'dark') ? <RiSunFill /> : <RiMoonFill />}
    </button>
  )
}

export default ThemeSwitch
