'use client'

import React, { useState, useMemo, useCallback } from 'react'
import Link from 'next/link'
import MainLayout from '@/components/layout/MainLayout'
import HeroSection from '@/components/sections/HeroSection'
import QuickAccessSection from '@/components/sections/QuickAccessSection'
import Card, { CardContent, CardHeader } from '@/components/ui/Card'
import FloatingActionButton from '@/components/ui/FloatingActionButton'
import { searchableContent } from '@/data/hl7Content'

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  // Memoize categories to prevent unnecessary re-renders
  const categories = useMemo(() => {
    const uniqueCategories = ['All', ...new Set(searchableContent.map(item => item.category))]
    return uniqueCategories
  }, [])

  // Memoize filtered content with optimized search
  const filteredContent = useMemo(() => {
    return searchableContent.filter(item => {
      const searchLower = searchTerm.toLowerCase()
      const matchesSearch = !searchTerm ||
        item.title.toLowerCase().includes(searchLower) ||
        item.description.toLowerCase().includes(searchLower) ||
        item.keywords.some(keyword => keyword.toLowerCase().includes(searchLower))

      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [searchTerm, selectedCategory])

  // Memoized search handlers
  const handleSearchChange = useCallback((term: string) => {
    setSearchTerm(term)
  }, [])

  const handleCategoryChange = useCallback((category: string) => {
    setSelectedCategory(category)
  }, [])

  return (
    <MainLayout>
      {/* Hero Section */}
      <HeroSection
        searchTerm={searchTerm}
        setSearchTerm={handleSearchChange}
        selectedCategory={selectedCategory}
        setSelectedCategory={handleCategoryChange}
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

      {/* Floating Action Button */}
      <FloatingActionButton />
    </MainLayout>
  )
}