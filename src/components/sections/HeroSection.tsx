'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { MagnifyingGlassIcon, ArrowRightIcon, PlayIcon } from '@heroicons/react/24/outline'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'

interface HeroSectionProps {
  searchTerm: string
  setSearchTerm: (term: string) => void
  selectedCategory: string
  setSelectedCategory: (category: string) => void
  categories: string[]
}

export default function HeroSection({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  categories
}: HeroSectionProps) {
  const [currentFeature, setCurrentFeature] = useState(0)
  
  const features = [
    'Comprehensive Migration Guides',
    'Risk Assessment Tools',
    'Technical Documentation',
    'Best Practice Resources'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length)
    }, 3000)
    
    return () => clearInterval(interval)
  }, [features.length])

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center animate-fade-in-up">
          {/* Main Heading */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Master Your{' '}
              <span className="gradient-text">
                HL7 v2.8
              </span>
              <br />
              Migration
            </h1>
            
            {/* Rotating Features */}
            <div className="h-8 mb-6">
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 transition-all duration-500">
                Everything you need for{' '}
                <span className="text-blue-600 dark:text-blue-400 font-semibold">
                  {features[currentFeature]}
                </span>
              </p>
            </div>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
              From technical specifications and best practices to risk assessment tools and vendor guidance - 
              your complete resource for successful HL7 v2.8 migration.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up animate-delay-200">
            <Link href="/guide/comprehensive">
              <Button 
                size="lg" 
                className="group shadow-glow hover:shadow-glow-lg"
                icon={<ArrowRightIcon className="group-hover:translate-x-1 transition-transform" />}
                iconPosition="right"
              >
                Start Migration Guide
              </Button>
            </Link>
            
            <Link href="/tools/risk-assessment">
              <Button 
                variant="outline" 
                size="lg"
                icon={<PlayIcon />}
              >
                Quick Assessment
              </Button>
            </Link>
          </div>

          {/* Search Section */}
          <Card className="max-w-4xl mx-auto p-8 glass animate-fade-in-up animate-delay-300">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                Find What You Need
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Search through our comprehensive migration resources
              </p>
            </div>
            
            {/* Search Bar */}
            <div className="relative mb-6">
              <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
              <input
                type="text"
                placeholder="Search migration guides, tools, and resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-14 pr-6 py-4 text-lg border-2 border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white shadow-lg scale-105'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 hover:scale-105'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
