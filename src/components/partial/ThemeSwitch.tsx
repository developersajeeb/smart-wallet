'use client'

import { FiSun, FiMoon } from "react-icons/fi"
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { ProgressSpinner } from 'primereact/progressspinner';
import { RiLoaderLine } from "react-icons/ri";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() =>  setMounted(true), [])

  if (!mounted) return (
    <span><RiLoaderLine size={24} className="animate-spin" /></span>
  )

  if (resolvedTheme === 'dark') {
    return <FiSun className="cursor-pointer" size={24} onClick={() => setTheme('light')} />
  }

  if (resolvedTheme === 'light') {
    return <FiMoon className="cursor-pointer" size={24} onClick={() => setTheme('dark')} />
  }

}