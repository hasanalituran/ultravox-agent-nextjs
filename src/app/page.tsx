'use client';

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import HowItWorks from '@/components/HowItWorks'
import Features from '@/components/Features'
import VoiceDemo from '@/components/VoiceDemo'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  const toggleTheme = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark')
  }

  // Handle scroll spy for navigation
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'how-it-works', 'features', 'voice-demo', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`min-h-screen bg-background text-foreground transition-colors ${darkMode ? 'dark' : ''}`}>
      <Header 
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        darkMode={darkMode}
        toggleTheme={toggleTheme}
      />
      
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <VoiceDemo />
        <Contact />
      </main>
      
      <Footer />
    </div>
  )
}
