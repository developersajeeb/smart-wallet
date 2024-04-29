'use client'

import { FiSun, FiMoon } from "react-icons/fi"
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { ProgressSpinner } from 'primereact/progressspinner';

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() =>  setMounted(true), [])

  if (!mounted) return (
    <span></span>
  )

  if (resolvedTheme === 'dark') {
    return <FiSun className="cursor-pointer" size={20} onClick={() => setTheme('light')} />
  }

  if (resolvedTheme === 'light') {
    return <FiMoon className="cursor-pointer" size={20} onClick={() => setTheme('dark')} />
  }

}