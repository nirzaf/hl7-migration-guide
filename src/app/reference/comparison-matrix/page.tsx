'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeftIcon, MagnifyingGlassIcon, FunnelIcon } from '@heroicons/react/24/outline'

interface ComparisonItem {
  category: string
  feature: string
  v2_3: string
  v2_4: string
  v2_5: string
  v2_6: string
  v2_7: string
  v2_8: string
  impact: 'Low' | 'Medium' | 'High'
  description: string
}

const comparisonData: ComparisonItem[] = [
  {
    category: 'Message Structure',
    feature: 'MSH Segment',
    v2_3: 'Basic fields',
    v2_4: 'Enhanced security',
    v2_5: 'Network authentication',
    v2_6: 'Improved encoding',
    v2_7: 'Enhanced metadata',
    v2_8: 'Full Unicode support, enhanced security fields',
    impact: 'Medium',
    description: 'Message header enhancements for better security and internationalization'
  },
  {
    category: 'Message Structure',
    feature: 'PID Segment',
    v2_3: 'Basic patient info',
    v2_4: 'Extended demographics',
    v2_5: 'Multiple identifiers',
    v2_6: 'Enhanced privacy',
    v2_7: 'Improved address handling',
    v2_8: 'Enhanced name components, improved address structure',
    impact: 'High',
    description: 'Significant improvements in patient identification and demographic data handling'
  },
  {
    category: 'Message Structure',
    feature: 'OBX Segment',
    v2_3: 'Basic observations',
    v2_4: 'Enhanced data types',
    v2_5: 'Improved units',
    v2_6: 'Better references',
    v2_7: 'Enhanced metadata',
    v2_8: 'Structured data support, enhanced observation metadata',
    impact: 'High',
    description: 'Major enhancements for clinical observations and structured data'
  },
  {
    category: 'Data Types',
    feature: 'Extended Text (ET)',
    v2_3: 'Not available',
    v2_4: 'Not available',
    v2_5: 'Not available',
    v2_6: 'Not available',
    v2_7: 'Not available',
    v2_8: 'New data type for rich text content',
    impact: 'Medium',
    description: 'New data type supporting formatted text and multimedia references'
  },
  {
    category: 'Data Types',
    feature: 'Money and Currency (MU)',
    v2_3: 'Basic money type',
    v2_4: 'Enhanced precision',
    v2_5: 'Currency support',
    v2_6: 'Improved formatting',
    v2_7: 'Enhanced validation',
    v2_8: 'Full international currency support with precision control',
    impact: 'Medium',
    description: 'Comprehensive support for international financial transactions'
  },
  {
    category: 'Data Types',
    feature: 'Entity Name (EN)',
    v2_3: 'Simple name structure',
    v2_4: 'Enhanced components',
    v2_5: 'Multiple name types',
    v2_6: 'Improved validation',
    v2_7: 'Enhanced formatting',
    v2_8: 'Comprehensive name structure with cultural considerations',
    impact: 'High',
    description: 'Advanced name handling supporting international naming conventions'
  },
  {
    category: 'Data Types',
    feature: 'Street Address (SAD)',
    v2_3: 'Basic address',
    v2_4: 'Enhanced components',
    v2_5: 'Multiple address types',
    v2_6: 'Improved validation',
    v2_7: 'Enhanced formatting',
    v2_8: 'Structured address with international postal standards',
    impact: 'Medium',
    description: 'Comprehensive address structure supporting global addressing standards'
  },
  {
    category: 'Security',
    feature: 'Message Authentication',
    v2_3: 'Basic',
    v2_4: 'Enhanced',
    v2_5: 'Digital signatures',
    v2_6: 'PKI support',
    v2_7: 'Advanced encryption',
    v2_8: 'Full OAuth 2.0 and modern authentication protocols',
    impact: 'High',
    description: 'Modern security standards with comprehensive authentication options'
  },
  {
    category: 'Security',
    feature: 'Data Encryption',
    v2_3: 'None',
    v2_4: 'Basic',
    v2_5: 'Enhanced',
    v2_6: 'Strong encryption',
    v2_7: 'Advanced algorithms',
    v2_8: 'AES-256, TLS 1.3, end-to-end encryption support',
    impact: 'High',
    description: 'State-of-the-art encryption supporting latest security standards'
  },
  {
    category: 'Internationalization',
    feature: 'Character Encoding',
    v2_3: 'ASCII only',
    v2_4: 'Limited Unicode',
    v2_5: 'Basic Unicode',
    v2_6: 'Enhanced Unicode',
    v2_7: 'Full Unicode support',
    v2_8: 'Complete UTF-8/UTF-16 support with normalization',
    impact: 'High',
    description: 'Comprehensive Unicode support for global healthcare systems'
  },
  {
    category: 'Internationalization',
    feature: 'Locale Support',
    v2_3: 'English only',
    v2_4: 'Limited',
    v2_5: 'Basic localization',
    v2_6: 'Enhanced locales',
    v2_7: 'Multiple languages',
    v2_8: 'Full ICU locale support with cultural adaptations',
    impact: 'Medium',
    description: 'Complete internationalization supporting diverse cultural requirements'
  },
  {
    category: 'Performance',
    feature: 'Message Compression',
    v2_3: 'None',
    v2_4: 'None',
    v2_5: 'Basic',
    v2_6: 'Enhanced',
    v2_7: 'Improved algorithms',
    v2_8: 'Advanced compression with streaming support',
    impact: 'Medium',
    description: 'Optimized message size for improved network performance'
  },
  {
    category: 'Performance',
    feature: 'Batch Processing',
    v2_3: 'Basic batching',
    v2_4: 'Enhanced batching',
    v2_5: 'Improved efficiency',
    v2_6: 'Better error handling',
    v2_7: 'Advanced processing',
    v2_8: 'Parallel processing with enhanced error recovery',
    impact: 'High',
    description: 'Significant improvements in high-volume message processing'
  },
  {
    category: 'Validation',
    feature: 'Schema Validation',
    v2_3: 'Basic rules',
    v2_4: 'Enhanced validation',
    v2_5: 'Improved rules',
    v2_6: 'Better error reporting',
    v2_7: 'Advanced validation',
    v2_8: 'Comprehensive schema validation with detailed error reporting',
    impact: 'Medium',
    description: 'Robust validation ensuring message integrity and compliance'
  },
  {
    category: 'Validation',
    feature: 'Business Rules',
    v2_3: 'Limited',
    v2_4: 'Basic rules',
    v2_5: 'Enhanced logic',
    v2_6: 'Improved flexibility',
    v2_7: 'Advanced rules',
    v2_8: 'Configurable business rule engine with custom validation',
    impact: 'High',
    description: 'Flexible business rule validation supporting complex healthcare workflows'
  }
]

const categories = Array.from(new Set(comparisonData.map(item => item.category)))
const versions = ['v2_3', 'v2_4', 'v2_5', 'v2_6', 'v2_7', 'v2_8']
const versionLabels = {
  v2_3: 'v2.3',
  v2_4: 'v2.4',
  v2_5: 'v2.5',
  v2_6: 'v2.6',
  v2_7: 'v2.7',
  v2_8: 'v2.8'
}

export default function ComparisonMatrix() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedImpact, setSelectedImpact] = useState('All')
  const [selectedVersions, setSelectedVersions] = useState<string[]>(['v2_7', 'v2_8'])

  const filteredData = comparisonData.filter(item => {
    const matchesSearch = item.feature.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory
    const matchesImpact = selectedImpact === 'All' || item.impact === selectedImpact
    return matchesSearch && matchesCategory && matchesImpact
  })

  const toggleVersion = (version: string) => {
    setSelectedVersions(prev => 
      prev.includes(version) 
        ? prev.filter(v => v !== version)
        : [...prev, version]
    )
  }

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'High': return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300'
      case 'Medium': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300'
      case 'Low': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300'
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
              <ArrowLeftIcon className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
            <div className="h-6 w-px bg-gray-300 dark:bg-gray-600"></div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">HL7 Version Comparison Matrix</h1>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Introduction */}
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-2">Version Comparison Matrix</h2>
          <p className="text-blue-800 dark:text-blue-200">
            Compare features and capabilities across different HL7 v2.x versions to understand the evolution 
            and plan your migration strategy effectively.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700 mb-8">
          <div className="flex items-center mb-4">
            <FunnelIcon className="w-5 h-5 text-gray-500 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Filters & Search</h3>
          </div>
          
          {/* Search */}
          <div className="mb-4">
            <div className="relative">
              <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search features or descriptions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                <option value="All">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Impact Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Impact Level</label>
              <select
                value={selectedImpact}
                onChange={(e) => setSelectedImpact(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                <option value="All">All Impact Levels</option>
                <option value="High">High Impact</option>
                <option value="Medium">Medium Impact</option>
                <option value="Low">Low Impact</option>
              </select>
            </div>

            {/* Version Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Versions to Compare</label>
              <div className="flex flex-wrap gap-2">
                {versions.map(version => (
                  <button
                    key={version}
                    onClick={() => toggleVersion(version)}
                    className={`px-3 py-1 text-sm rounded-full transition-colors ${
                      selectedVersions.includes(version)
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-500'
                    }`}
                  >
                    {versionLabels[version as keyof typeof versionLabels]}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Results Summary */}
        <div className="mb-6">
          <p className="text-gray-600 dark:text-gray-400">
            Showing {filteredData.length} features across {selectedVersions.length} versions
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider sticky left-0 bg-gray-50 dark:bg-gray-700 z-10">
                    Feature
                  </th>
                  {selectedVersions.map(version => (
                    <th key={version} className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      {versionLabels[version as keyof typeof versionLabels]}
                    </th>
                  ))}
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Impact
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                {filteredData.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                    <td className="px-6 py-4 sticky left-0 bg-white dark:bg-gray-800 z-10">
                      <div>
                        <div className="text-sm font-medium text-gray-900 dark:text-white">{item.feature}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">{item.category}</div>
                        <div className="text-xs text-gray-600 dark:text-gray-300 mt-1">{item.description}</div>
                      </div>
                    </td>
                    {selectedVersions.map(version => (
                      <td key={version} className="px-6 py-4">
                        <div className="text-sm text-gray-900 dark:text-white">
                          {item[version as keyof ComparisonItem] as string}
                        </div>
                      </td>
                    ))}
                    <td className="px-6 py-4">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getImpactColor(item.impact)}`}>
                        {item.impact}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-8 bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Impact Level Legend</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center">
              <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300 mr-3">
                High
              </span>
              <span className="text-sm text-gray-600 dark:text-gray-400">Significant changes requiring careful planning and testing</span>
            </div>
            <div className="flex items-center">
              <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300 mr-3">
                Medium
              </span>
              <span className="text-sm text-gray-600 dark:text-gray-400">Moderate changes with some migration effort required</span>
            </div>
            <div className="flex items-center">
              <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300 mr-3">
                Low
              </span>
              <span className="text-sm text-gray-600 dark:text-gray-400">Minor changes with minimal migration impact</span>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <Link href="/tools/risk-assessment" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
            <ArrowLeftIcon className="w-5 h-5 mr-2" />
            Previous: Risk Assessment
          </Link>
          <Link href="/resources/vendor-guides" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
            Next: Vendor Guides
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}