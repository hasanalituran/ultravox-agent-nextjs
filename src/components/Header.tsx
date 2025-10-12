'use client';

import { Button } from '@/components/ui/button'

interface HeaderProps {
  activeSection: string
  setActiveSection: (section: string) => void
  darkMode: boolean
  toggleTheme: () => void
}

export default function Header({ activeSection, setActiveSection, darkMode, toggleTheme }: HeaderProps) {
  const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'features', label: 'Features' },
    { id: 'voice-demo', label: 'Try Demo' },
    { id: 'contact', label: 'Contact' }
  ]

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div
          className="flex items-center cursor-pointer"
          onClick={() => scrollToSection('hero')}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="Fydback logo" className="w-10 h-10 mr-3" />
          <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Fydback
          </span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center justify-center flex-1 mx-8">
          <div className="flex items-center space-x-8">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === section.id 
                    ? 'text-primary' 
                    : 'text-muted-foreground'
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
        </nav>

        {/* Theme Toggle & CTA */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" onClick={toggleTheme}>
            {darkMode ? '☀️' : '🌙'}
          </Button>
          <Button 
            size="sm" 
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
            onClick={() => scrollToSection('voice-demo')}
          >
            Try Demo
          </Button>
        </div>
      </div>
    </header>
  )
}
