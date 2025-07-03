'use client'

import { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'
import PageTransition from './PageTransition'

interface MainLayoutProps {
  children: ReactNode
  showHeader?: boolean
  showFooter?: boolean
  className?: string
}

export default function MainLayout({
  children,
  showHeader = true,
  showFooter = true,
  className = ''
}: MainLayoutProps) {
  return (
    <div className={`min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 ${className}`}>
      {showHeader && <Header />}

      <PageTransition>
        <main className={showHeader ? 'pt-20' : ''}>
          {children}
        </main>
      </PageTransition>

      {showFooter && <Footer />}
    </div>
  )
}
