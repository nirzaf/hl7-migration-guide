'use client'

import Link from 'next/link'
import { 
  BookOpenIcon, 
  ExclamationTriangleIcon, 
  ChartBarIcon,
  WrenchScrewdriverIcon,
  DocumentDuplicateIcon,
  ClockIcon,
  UserGroupIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline'
import Card, { CardContent, CardHeader } from '@/components/ui/Card'

const quickAccessItems = [
  {
    title: 'Migration Guide',
    description: 'Complete step-by-step guide for HL7 v2.8 migration',
    href: '/guide/comprehensive',
    icon: BookOpenIcon,
    color: 'blue',
    gradient: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-100 dark:bg-blue-900',
    hoverColor: 'group-hover:bg-blue-200 dark:group-hover:bg-blue-800',
    borderColor: 'group-hover:border-blue-300 dark:group-hover:border-blue-600',
    stats: '50+ pages'
  },
  {
    title: 'Risk Assessment',
    description: 'Identify and mitigate migration risks with our comprehensive tool',
    href: '/tools/risk-assessment',
    icon: ExclamationTriangleIcon,
    color: 'orange',
    gradient: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-100 dark:bg-orange-900',
    hoverColor: 'group-hover:bg-orange-200 dark:group-hover:bg-orange-800',
    borderColor: 'group-hover:border-orange-300 dark:group-hover:border-orange-600',
    stats: '25 risk factors'
  },
  {
    title: 'Version Comparison',
    description: 'Compare HL7 versions side-by-side with detailed analysis',
    href: '/reference/comparison-matrix',
    icon: ChartBarIcon,
    color: 'green',
    gradient: 'from-green-500 to-green-600',
    bgColor: 'bg-green-100 dark:bg-green-900',
    hoverColor: 'group-hover:bg-green-200 dark:group-hover:bg-green-800',
    borderColor: 'group-hover:border-green-300 dark:group-hover:border-green-600',
    stats: 'All versions'
  },
  {
    title: 'Planning Tools',
    description: 'Resource planning templates and project management tools',
    href: '/tools/resource-planning',
    icon: WrenchScrewdriverIcon,
    color: 'purple',
    gradient: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-100 dark:bg-purple-900',
    hoverColor: 'group-hover:bg-purple-200 dark:group-hover:bg-purple-800',
    borderColor: 'group-hover:border-purple-300 dark:group-hover:border-purple-600',
    stats: '10+ templates'
  },
  {
    title: 'Best Practices',
    description: 'Industry-proven strategies for successful migration',
    href: '/guide/best-practices',
    icon: ShieldCheckIcon,
    color: 'indigo',
    gradient: 'from-indigo-500 to-indigo-600',
    bgColor: 'bg-indigo-100 dark:bg-indigo-900',
    hoverColor: 'group-hover:bg-indigo-200 dark:group-hover:bg-indigo-800',
    borderColor: 'group-hover:border-indigo-300 dark:group-hover:border-indigo-600',
    stats: 'Expert insights'
  },
  {
    title: 'Technical Docs',
    description: 'Detailed technical specifications and implementation guides',
    href: '/guide/technical-differences',
    icon: DocumentDuplicateIcon,
    color: 'teal',
    gradient: 'from-teal-500 to-teal-600',
    bgColor: 'bg-teal-100 dark:bg-teal-900',
    hoverColor: 'group-hover:bg-teal-200 dark:group-hover:bg-teal-800',
    borderColor: 'group-hover:border-teal-300 dark:group-hover:border-teal-600',
    stats: 'Technical specs'
  }
]

export default function QuickAccessSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Quick Access
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Jump straight to the resources you need for your HL7 v2.8 migration project
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {quickAccessItems.map((item, index) => (
            <Link key={item.title} href={item.href} className="group">
              <Card 
                hover 
                className={`h-full border-gray-200 dark:border-gray-700 ${item.borderColor} animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className={`w-14 h-14 ${item.bgColor} ${item.hoverColor} rounded-xl flex items-center justify-center mb-4 transition-all duration-300`}>
                    <item.icon className={`w-7 h-7 text-${item.color}-600 dark:text-${item.color}-400`} />
                  </div>
                  
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {item.title}
                    </h3>
                    <span className={`px-2 py-1 text-xs font-medium bg-${item.color}-100 dark:bg-${item.color}-900/30 text-${item.color}-700 dark:text-${item.color}-300 rounded-full`}>
                      {item.stats}
                    </span>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                    <span>Learn more</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in-up animate-delay-400">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">50+</div>
            <div className="text-gray-600 dark:text-gray-300">Documentation Pages</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">25</div>
            <div className="text-gray-600 dark:text-gray-300">Risk Factors Covered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">10+</div>
            <div className="text-gray-600 dark:text-gray-300">Planning Templates</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">100%</div>
            <div className="text-gray-600 dark:text-gray-300">Comprehensive Coverage</div>
          </div>
        </div>
      </div>
    </section>
  )
}
