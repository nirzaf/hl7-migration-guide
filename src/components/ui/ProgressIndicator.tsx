'use client'

import { useEffect, useState } from 'react'

interface ProgressIndicatorProps {
  sections: Array<{
    id: string
    title: string
  }>
}

export default function ProgressIndicator({ sections }: ProgressIndicatorProps) {
  const [activeSection, setActiveSection] = useState<string>('')
  const [readingProgress, setReadingProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      // Calculate reading progress
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrollTop / docHeight) * 100
      setReadingProgress(Math.min(100, Math.max(0, progress)))

      // Find active section
      const sectionElements = sections.map(section => 
        document.getElementById(section.id)
      ).filter(Boolean)

      let currentSection = ''
      for (const element of sectionElements) {
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            currentSection = element.id
          }
        }
      }
      setActiveSection(currentSection)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial call

    return () => window.removeEventListener('scroll', handleScroll)
  }, [sections])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
      {/* Reading Progress Bar */}
      <div className="mb-4">
        <div className="w-1 h-32 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div 
            className="w-full bg-gradient-to-t from-blue-600 to-indigo-600 transition-all duration-300 ease-out rounded-full"
            style={{ height: `${readingProgress}%` }}
          />
        </div>
        <div className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
          {Math.round(readingProgress)}%
        </div>
      </div>

      {/* Section Navigation */}
      <div className="space-y-2">
        {sections.map((section, index) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className={`group relative block w-3 h-3 rounded-full transition-all duration-200 ${
              activeSection === section.id
                ? 'bg-blue-600 scale-125 shadow-lg'
                : 'bg-gray-300 dark:bg-gray-600 hover:bg-blue-400 dark:hover:bg-blue-500'
            }`}
            title={section.title}
          >
            {/* Tooltip */}
            <div className="absolute right-6 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
              <div className="bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs px-3 py-2 rounded-lg whitespace-nowrap shadow-lg">
                {section.title}
                <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-900 dark:border-l-gray-100"></div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
