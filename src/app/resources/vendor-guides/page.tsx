'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeftIcon, MagnifyingGlassIcon, ExternalLinkIcon, DocumentTextIcon, VideoCameraIcon, CodeBracketIcon } from '@heroicons/react/24/outline'

interface VendorGuide {
  id: string
  vendor: string
  category: 'EHR' | 'Integration Engine' | 'Middleware' | 'Cloud Platform'
  logo?: string
  description: string
  resources: {
    type: 'documentation' | 'video' | 'tool' | 'sample'
    title: string
    description: string
    url: string
    isExternal: boolean
  }[]
  migrationSupport: {
    level: 'Full' | 'Partial' | 'Limited' | 'None'
    description: string
    tools: string[]
  }
  contactInfo?: {
    support: string
    documentation: string
    community?: string
  }
}

const vendorGuides: VendorGuide[] = [
  {
    id: 'epic',
    vendor: 'Epic Systems',
    category: 'EHR',
    description: 'Epic provides comprehensive HL7 v2.8 migration support through their Chronicles platform with automated migration tools and extensive documentation.',
    resources: [
      {
        type: 'documentation',
        title: 'Epic HL7 v2.8 Migration Guide',
        description: 'Complete migration documentation for Epic Chronicles',
        url: 'https://galaxy.epic.com/Redirect.aspx?DocumentID=100013',
        isExternal: true
      },
      {
        type: 'tool',
        title: 'Epic Interface Migration Utility',
        description: 'Automated tool for migrating HL7 interfaces',
        url: 'https://galaxy.epic.com/Tools/InterfaceMigration',
        isExternal: true
      },
      {
        type: 'video',
        title: 'HL7 v2.8 Migration Webinar Series',
        description: 'Step-by-step video guides for migration process',
        url: 'https://galaxy.epic.com/Webinars/HL7Migration',
        isExternal: true
      }
    ],
    migrationSupport: {
      level: 'Full',
      description: 'Epic provides comprehensive migration support with automated tools, professional services, and extensive documentation.',
      tools: ['Interface Migration Utility', 'Message Validation Tools', 'Testing Framework', 'Rollback Utilities']
    },
    contactInfo: {
      support: 'https://galaxy.epic.com/Support',
      documentation: 'https://galaxy.epic.com/Documentation',
      community: 'https://galaxy.epic.com/Community'
    }
  },
  {
    id: 'cerner',
    vendor: 'Oracle Cerner',
    category: 'EHR',
    description: 'Oracle Cerner offers HL7 v2.8 migration support through their PowerChart platform with migration utilities and professional services.',
    resources: [
      {
        type: 'documentation',
        title: 'Cerner HL7 v2.8 Implementation Guide',
        description: 'Comprehensive guide for HL7 v2.8 implementation',
        url: 'https://docs.oracle.com/en/industries/health-sciences/cerner/',
        isExternal: true
      },
      {
        type: 'tool',
        title: 'Cerner Interface Engine',
        description: 'Built-in migration and transformation tools',
        url: 'https://www.oracle.com/industries/health-sciences/cerner/',
        isExternal: true
      }
    ],
    migrationSupport: {
      level: 'Full',
      description: 'Oracle Cerner provides full migration support with professional services and automated migration tools.',
      tools: ['Interface Engine', 'Message Transformation Tools', 'Validation Framework']
    },
    contactInfo: {
      support: 'https://www.oracle.com/industries/health-sciences/cerner/support/',
      documentation: 'https://docs.oracle.com/en/industries/health-sciences/cerner/'
    }
  },
  {
    id: 'rhapsody',
    vendor: 'Rhapsody Integration Engine',
    category: 'Integration Engine',
    description: 'Rhapsody provides powerful HL7 v2.8 migration capabilities with visual mapping tools and comprehensive testing frameworks.',
    resources: [
      {
        type: 'documentation',
        title: 'Rhapsody HL7 v2.8 Migration Documentation',
        description: 'Complete migration guide with best practices',
        url: 'https://docs.rhapsody.health/display/RHD/HL7+v2.8+Migration',
        isExternal: true
      },
      {
        type: 'tool',
        title: 'Rhapsody Message Designer',
        description: 'Visual tool for message transformation and mapping',
        url: 'https://www.rhapsody.health/products/message-designer',
        isExternal: true
      },
      {
        type: 'sample',
        title: 'HL7 v2.8 Sample Configurations',
        description: 'Pre-built configurations for common migration scenarios',
        url: '/samples/rhapsody-configs',
        isExternal: false
      }
    ],
    migrationSupport: {
      level: 'Full',
      description: 'Rhapsody offers comprehensive migration support with visual tools, automated testing, and professional services.',
      tools: ['Message Designer', 'Testing Framework', 'Migration Wizard', 'Validation Tools']
    },
    contactInfo: {
      support: 'https://www.rhapsody.health/support',
      documentation: 'https://docs.rhapsody.health/',
      community: 'https://community.rhapsody.health/'
    }
  },
  {
    id: 'mirth',
    vendor: 'Mirth Connect',
    category: 'Integration Engine',
    description: 'Open-source integration engine with HL7 v2.8 support through community-driven extensions and commercial support options.',
    resources: [
      {
        type: 'documentation',
        title: 'Mirth Connect HL7 v2.8 Guide',
        description: 'Community-maintained migration documentation',
        url: 'https://github.com/nextgenhealthcare/connect/wiki/HL7-v2.8',
        isExternal: true
      },
      {
        type: 'tool',
        title: 'Mirth Connect Administrator',
        description: 'Channel configuration and management tool',
        url: 'https://www.nextgen.com/products-and-services/integration-engine',
        isExternal: true
      },
      {
        type: 'sample',
        title: 'HL7 v2.8 Channel Templates',
        description: 'Pre-configured channels for v2.8 migration',
        url: '/samples/mirth-channels',
        isExternal: false
      }
    ],
    migrationSupport: {
      level: 'Partial',
      description: 'Community support with commercial options available. Requires more manual configuration compared to enterprise solutions.',
      tools: ['Channel Templates', 'JavaScript Transformers', 'Message Validation']
    },
    contactInfo: {
      support: 'https://www.nextgen.com/support',
      documentation: 'https://github.com/nextgenhealthcare/connect/wiki',
      community: 'https://forums.mirthcorp.com/'
    }
  },
  {
    id: 'intersystems',
    vendor: 'InterSystems HealthShare',
    category: 'Integration Engine',
    description: 'Enterprise-grade integration platform with comprehensive HL7 v2.8 migration tools and professional services.',
    resources: [
      {
        type: 'documentation',
        title: 'HealthShare HL7 v2.8 Migration Guide',
        description: 'Enterprise migration documentation and best practices',
        url: 'https://docs.intersystems.com/healthshare/hl7/',
        isExternal: true
      },
      {
        type: 'tool',
        title: 'HealthShare Integration Studio',
        description: 'Visual development environment for HL7 transformations',
        url: 'https://www.intersystems.com/products/healthshare/',
        isExternal: true
      }
    ],
    migrationSupport: {
      level: 'Full',
      description: 'Enterprise-level support with professional services, automated tools, and comprehensive training programs.',
      tools: ['Integration Studio', 'Message Transformation Engine', 'Testing Framework', 'Performance Monitoring']
    },
    contactInfo: {
      support: 'https://www.intersystems.com/support/',
      documentation: 'https://docs.intersystems.com/'
    }
  },
  {
    id: 'microsoft',
    vendor: 'Microsoft Azure Health Data Services',
    category: 'Cloud Platform',
    description: 'Cloud-based HL7 processing with FHIR conversion capabilities and managed migration services.',
    resources: [
      {
        type: 'documentation',
        title: 'Azure Health Data Services HL7 Guide',
        description: 'Cloud-based HL7 processing and migration documentation',
        url: 'https://docs.microsoft.com/en-us/azure/healthcare-apis/',
        isExternal: true
      },
      {
        type: 'tool',
        title: 'FHIR Converter',
        description: 'Tool for converting HL7 v2.x to FHIR format',
        url: 'https://github.com/microsoft/FHIR-Converter',
        isExternal: true
      }
    ],
    migrationSupport: {
      level: 'Partial',
      description: 'Cloud-based migration support with focus on FHIR conversion. Limited direct v2.8 migration tools.',
      tools: ['FHIR Converter', 'Azure Logic Apps', 'API Management']
    },
    contactInfo: {
      support: 'https://azure.microsoft.com/en-us/support/',
      documentation: 'https://docs.microsoft.com/en-us/azure/healthcare-apis/'
    }
  },
  {
    id: 'aws',
    vendor: 'Amazon Web Services HealthLake',
    category: 'Cloud Platform',
    description: 'AWS managed service for healthcare data with HL7 ingestion and transformation capabilities.',
    resources: [
      {
        type: 'documentation',
        title: 'AWS HealthLake HL7 Integration Guide',
        description: 'Guide for integrating HL7 data with AWS HealthLake',
        url: 'https://docs.aws.amazon.com/healthlake/',
        isExternal: true
      },
      {
        type: 'tool',
        title: 'AWS HealthLake Data Import',
        description: 'Managed service for HL7 data ingestion and transformation',
        url: 'https://aws.amazon.com/healthlake/',
        isExternal: true
      }
    ],
    migrationSupport: {
      level: 'Limited',
      description: 'Cloud-native approach with focus on FHIR. Limited traditional HL7 v2.8 migration support.',
      tools: ['Data Import Service', 'Lambda Functions', 'API Gateway']
    },
    contactInfo: {
      support: 'https://aws.amazon.com/support/',
      documentation: 'https://docs.aws.amazon.com/healthlake/'
    }
  }
]

const categories = Array.from(new Set(vendorGuides.map(guide => guide.category)))
const supportLevels = Array.from(new Set(vendorGuides.map(guide => guide.migrationSupport.level)))

export default function VendorGuides() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedSupport, setSelectedSupport] = useState('All')

  const filteredGuides = vendorGuides.filter(guide => {
    const matchesSearch = guide.vendor.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         guide.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || guide.category === selectedCategory
    const matchesSupport = selectedSupport === 'All' || guide.migrationSupport.level === selectedSupport
    return matchesSearch && matchesCategory && matchesSupport
  })

  const getSupportLevelColor = (level: string) => {
    switch (level) {
      case 'Full': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300'
      case 'Partial': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300'
      case 'Limited': return 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-300'
      case 'None': return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300'
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
    }
  }

  const getResourceIcon = (type: string) => {
    switch (type) {
      case 'documentation': return <DocumentTextIcon className="w-5 h-5" />
      case 'video': return <VideoCameraIcon className="w-5 h-5" />
      case 'tool': return <CodeBracketIcon className="w-5 h-5" />
      case 'sample': return <DocumentTextIcon className="w-5 h-5" />
      default: return <DocumentTextIcon className="w-5 h-5" />
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
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Vendor-Specific Migration Guides</h1>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Introduction */}
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-2">Vendor-Specific Resources</h2>
          <p className="text-blue-800 dark:text-blue-200">
            Find migration guides, tools, and support resources specific to your healthcare technology vendors. 
            Each vendor provides different levels of HL7 v2.8 migration support and tooling.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Search Vendors</label>
              <div className="relative">
                <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search vendors..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
            </div>

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

            {/* Support Level Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Migration Support</label>
              <select
                value={selectedSupport}
                onChange={(e) => setSelectedSupport(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                <option value="All">All Support Levels</option>
                {supportLevels.map(level => (
                  <option key={level} value={level}>{level} Support</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredGuides.map(guide => (
            <div key={guide.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden">
              {/* Vendor Header */}
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{guide.vendor}</h3>
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full mt-1">
                      {guide.category}
                    </span>
                  </div>
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getSupportLevelColor(guide.migrationSupport.level)}`}>
                    {guide.migrationSupport.level} Support
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{guide.description}</p>
              </div>

              {/* Migration Support */}
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Migration Support</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{guide.migrationSupport.description}</p>
                <div className="flex flex-wrap gap-2">
                  {guide.migrationSupport.tools.map((tool, index) => (
                    <span key={index} className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300 rounded">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Resources */}
              <div className="p-6">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Resources</h4>
                <div className="space-y-3">
                  {guide.resources.map((resource, index) => (
                    <div key={index} className="flex items-start p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div className="text-blue-600 dark:text-blue-400 mr-3 mt-0.5">
                        {getResourceIcon(resource.type)}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center">
                          <h5 className="font-medium text-gray-900 dark:text-white text-sm">{resource.title}</h5>
                          {resource.isExternal && (
                            <ExternalLinkIcon className="w-4 h-4 text-gray-400 ml-2" />
                          )}
                        </div>
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{resource.description}</p>
                        <a
                          href={resource.url}
                          target={resource.isExternal ? '_blank' : '_self'}
                          rel={resource.isExternal ? 'noopener noreferrer' : undefined}
                          className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-xs font-medium mt-1 inline-block"
                        >
                          {resource.isExternal ? 'Visit Resource' : 'View Resource'}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Contact Information */}
                {guide.contactInfo && (
                  <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-600">
                    <h5 className="font-medium text-gray-900 dark:text-white text-sm mb-3">Contact & Support</h5>
                    <div className="space-y-2">
                      <a href={guide.contactInfo.support} target="_blank" rel="noopener noreferrer" className="block text-xs text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                        Support Portal
                      </a>
                      <a href={guide.contactInfo.documentation} target="_blank" rel="noopener noreferrer" className="block text-xs text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                        Documentation
                      </a>
                      {guide.contactInfo.community && (
                        <a href={guide.contactInfo.community} target="_blank" rel="noopener noreferrer" className="block text-xs text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                          Community Forum
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredGuides.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">No vendor guides found matching your criteria.</p>
          </div>
        )}

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <Link href="/reference/comparison-matrix" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
            <ArrowLeftIcon className="w-5 h-5 mr-2" />
            Previous: Comparison Matrix
          </Link>
          <Link href="/" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
            Back to Home
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}