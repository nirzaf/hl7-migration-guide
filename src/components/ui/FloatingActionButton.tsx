'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { 
  PlusIcon, 
  ArrowUpIcon, 
  ExclamationTriangleIcon, 
  ChartBarIcon,
  DocumentTextIcon,
  XMarkIcon
} from '@heroicons/react/24/outline'

const quickActions = [
  {
    label: 'Risk Assessment',
    href: '/tools/risk-assessment',
    icon: ExclamationTriangleIcon,
    color: 'bg-orange-500 hover:bg-orange-600'
  },
  {
    label: 'Version Comparison',
    href: '/reference/comparison-matrix',
    icon: ChartBarIcon,
    color: 'bg-green-500 hover:bg-green-600'
  },
  {
    label: 'Migration Guide',
    href: '/guide/comprehensive',
    icon: DocumentTextIcon,
    color: 'bg-blue-500 hover:bg-blue-600'
  }
]

export default function FloatingActionButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  // Show scroll to top button when user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Quick Actions Menu */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 space-y-3 animate-fade-in-up">
          {quickActions.map((action, index) => (
            <Link
              key={action.label}
              href={action.href}
              className={`flex items-center space-x-3 ${action.color} text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 group animate-fade-in-right`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setIsOpen(false)}
            >
              <action.icon className="w-5 h-5" />
              <span className="text-sm font-medium whitespace-nowrap">{action.label}</span>
            </Link>
          ))}
        </div>
      )}

      {/* Scroll to Top Button */}
      {showScrollTop && !isOpen && (
        <button
          onClick={scrollToTop}
          className="absolute bottom-16 right-0 bg-gray-600 hover:bg-gray-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 animate-fade-in-up"
        >
          <ArrowUpIcon className="w-5 h-5" />
        </button>
      )}

      {/* Main FAB */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 ${
          isOpen ? 'rotate-45' : 'rotate-0'
        }`}
      >
        {isOpen ? (
          <XMarkIcon className="w-6 h-6" />
        ) : (
          <PlusIcon className="w-6 h-6" />
        )}
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm -z-10"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  )
}
