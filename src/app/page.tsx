'use client'

import { useState } from 'react'
import Link from 'next/link'
import MainLayout from '@/components/layout/MainLayout'
import HeroSection from '@/components/sections/HeroSection'
import QuickAccessSection from '@/components/sections/QuickAccessSection'
import Card, { CardContent, CardHeader } from '@/components/ui/Card'

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
    <MainLayout>
      {/* Hero Section */}
      <HeroSection
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        categories={categories}
      />

      {/* Quick Access Section */}
      <QuickAccessSection />

      {/* Search Results */}
      {(searchTerm || selectedCategory !== 'All') && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 animate-fade-in-up">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Search Results
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                {filteredContent.length} result{filteredContent.length !== 1 ? 's' : ''} found
                {searchTerm && ` for "${searchTerm}"`}
                {selectedCategory !== 'All' && ` in ${selectedCategory}`}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredContent.map((item, index) => (
                <Link key={index} href={item.url} className="block">
                  <Card
                    hover
                    className="h-full animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {item.title}
                        </h4>
                        <span className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                          {item.category}
                        </span>
                      </div>
                    </CardHeader>

                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {item.description}
                      </p>

                      <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium">
                        <span>Read more</span>
                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <h4 className="text-2xl font-bold mb-4 gradient-text">HL7 Migration Guide</h4>
              <p className="text-gray-400 mb-4 max-w-md">
                Comprehensive resources for successful HL7 v2.8 migration. From technical specifications
                to best practices, we've got you covered.
              </p>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/guide/comprehensive" className="hover:text-white transition-colors">Migration Guide</Link></li>
                <li><Link href="/tools/risk-assessment" className="hover:text-white transition-colors">Risk Assessment</Link></li>
                <li><Link href="/reference/comparison-matrix" className="hover:text-white transition-colors">Version Comparison</Link></li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Resources</h5>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/guide/best-practices" className="hover:text-white transition-colors">Best Practices</Link></li>
                <li><Link href="/guide/technical-differences" className="hover:text-white transition-colors">Technical Docs</Link></li>
                <li><Link href="/tools/resource-planning" className="hover:text-white transition-colors">Planning Tools</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              Built with Next.js, TypeScript, and Tailwind CSS • © 2025 HL7 Migration Guide
            </p>
          </div>
        </div>
      </footer>
    </MainLayout>
  )
}