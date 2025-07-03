'use client'

import { useState } from 'react'
import Link from 'next/link'
import { MagnifyingGlassIcon, DocumentTextIcon, ChartBarIcon, ExclamationTriangleIcon, CogIcon, BookOpenIcon } from '@heroicons/react/24/outline'

const searchableContent = [
  { title: 'Comprehensive Migration Guide', category: 'Documentation', url: '/guide/comprehensive', description: 'Complete guide to HL7 v2.8 migration with detailed technical specifications' },
  { title: 'Technical Differences', category: 'Technical', url: '/guide/technical-differences', description: 'Detailed comparison between HL7 versions and compatibility issues' },
  { title: 'Best Practices', category: 'Implementation', url: '/guide/best-practices', description: 'Industry best practices for successful HL7 migration' },
  { title: 'Risk Assessment', category: 'Planning', url: '/tools/risk-assessment', description: 'Risk assessment template and mitigation strategies' },
  { title: 'Version Comparison Matrix', category: 'Reference', url: '/reference/comparison-matrix', description: 'Side-by-side comparison of HL7 v2.x versions' },
  { title: 'EHR Vendor Guidance', category: 'Vendor', url: '/guide/ehr-vendors', description: 'Vendor-specific migration guidance and resources' },
  { title: 'Message Examples', category: 'Technical', url: '/reference/message-examples', description: 'HL7 v2.8 message structure examples and samples' },
  { title: 'Resource Planning', category: 'Planning', url: '/tools/resource-planning', description: 'Resource planning template for migration projects' }
]

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'Documentation', 'Technical', 'Implementation', 'Planning', 'Reference', 'Vendor']

  const filteredContent = searchableContent.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
      {/* Header */}
      <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <DocumentTextIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">HL7 Migration Guide</h1>
                <p className="text-sm text-gray-600 dark:text-gray-300">Comprehensive v2.8 Migration Resources</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Link href="/guide" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Documentation
              </Link>
              <Link href="/tools" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Tools
              </Link>
              <Link href="/reference" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Reference
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Master Your HL7 v2.8 Migration
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
            Everything you need for a successful HL7 v2.8 migration - from technical specifications and best practices to risk assessment tools and vendor guidance.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search migration guides, tools, and resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-lg"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Access Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Quick Access</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/guide/comprehensive" className="group">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 group-hover:border-blue-300 dark:group-hover:border-blue-600">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors">
                  <BookOpenIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Migration Guide</h4>
                <p className="text-gray-600 dark:text-gray-300">Complete step-by-step guide for HL7 v2.8 migration</p>
              </div>
            </Link>

            <Link href="/tools/risk-assessment" className="group">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 group-hover:border-orange-300 dark:group-hover:border-orange-600">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-200 dark:group-hover:bg-orange-800 transition-colors">
                  <ExclamationTriangleIcon className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Risk Assessment</h4>
                <p className="text-gray-600 dark:text-gray-300">Identify and mitigate migration risks</p>
              </div>
            </Link>

            <Link href="/reference/comparison-matrix" className="group">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 group-hover:border-green-300 dark:group-hover:border-green-600">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 dark:group-hover:bg-green-800 transition-colors">
                  <ChartBarIcon className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Version Comparison</h4>
                <p className="text-gray-600 dark:text-gray-300">Compare HL7 versions side-by-side</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Search Results */}
      {(searchTerm || selectedCategory !== 'All') && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              {filteredContent.length} result{filteredContent.length !== 1 ? 's' : ''} found
            </h3>
            <div className="space-y-4">
              {filteredContent.map((item, index) => (
                <Link key={index} href={item.url} className="block">
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h4>
                          <span className="px-2 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                            {item.category}
                          </span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                      </div>
                      <div className="ml-4">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4">HL7 Migration Guide</h4>
            <p className="text-gray-400 mb-4">Comprehensive resources for successful HL7 v2.8 migration</p>
            <p className="text-sm text-gray-500">Built with Next.js and Tailwind CSS</p>
          </div>
        </div>
      </footer>
    </div>
  )
}