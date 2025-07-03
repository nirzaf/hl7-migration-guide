'use client'

import React, { memo, useMemo } from 'react'
import Link from 'next/link'
import { ArrowLeftIcon, DocumentTextIcon, ExclamationTriangleIcon, CheckCircleIcon, ClockIcon, UserGroupIcon } from '@heroicons/react/24/outline'
import MainLayout from '@/components/layout/MainLayout'
import Card, { CardContent, CardHeader } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import ProgressIndicator from '@/components/ui/ProgressIndicator'
import FloatingActionButton from '@/components/ui/FloatingActionButton'
import {
  comprehensiveGuide,
  technicalDifferences,
  implementationPhases,
  bestPractices,
  industryResources,
  vendorGuidance
} from '@/data/hl7Content'

// Memoized section navigation component
const SectionNavigation = memo(({ sections }: { sections: Array<{ id: string; title: string }> }) => (
  <nav className="space-y-3">
    {sections.map((item, index) => (
      <a
        key={item.id}
        href={`#${item.id}`}
        className="block text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2 px-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 animate-fade-in-left"
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        {item.title}
      </a>
    ))}
  </nav>
))

SectionNavigation.displayName = 'SectionNavigation'

// Memoized stats component
const QuickStats = memo(() => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 animate-fade-in-up animate-delay-200">
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
      <div className="flex items-center">
        <DocumentTextIcon className="w-8 h-8 mr-3" />
        <div>
          <div className="text-2xl font-bold">50+</div>
          <div className="text-blue-100">Pages of Content</div>
        </div>
      </div>
    </div>
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
      <div className="flex items-center">
        <ClockIcon className="w-8 h-8 mr-3" />
        <div>
          <div className="text-2xl font-bold">2-6</div>
          <div className="text-blue-100">Months Timeline</div>
        </div>
      </div>
    </div>
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
      <div className="flex items-center">
        <UserGroupIcon className="w-8 h-8 mr-3" />
        <div>
          <div className="text-2xl font-bold">All</div>
          <div className="text-blue-100">Team Roles</div>
        </div>
      </div>
    </div>
  </div>
))

QuickStats.displayName = 'QuickStats'

export default function ComprehensiveGuide() {
  // Memoize sections for performance
  const sections = useMemo(() => [
    { id: 'introduction', title: '1. Introduction to HL7 v2.8 Migration' },
    { id: 'official-docs', title: '2. Official Documentation and Resources' },
    { id: 'technical-differences', title: '3. Technical Differences and Compatibility' },
    { id: 'implementation', title: '4. Implementation Guidelines' },
    { id: 'best-practices', title: '5. Best Practices and Recommendations' },
    { id: 'industry-resources', title: '6. Industry-Specific Resources' },
    { id: 'vendor-guidance', title: '7. Vendor-Specific Guidance' }
  ], [])

  // Memoize key migration objectives
  const migrationObjectives = useMemo(() => [
    'Ensure seamless data exchange between systems',
    'Maintain data integrity throughout the migration process',
    'Minimize downtime and operational disruption',
    'Achieve compliance with updated HL7 standards',
    'Improve overall system interoperability',
    'Enhanced clinical workflow integration'
  ], [])

  return (
    <MainLayout>
      {/* Page Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 mb-6 animate-fade-in-left">
            <Link href="/" className="flex items-center text-blue-100 hover:text-white transition-colors group">
              <ArrowLeftIcon className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
          </div>

          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {comprehensiveGuide.title}
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl">
              {comprehensiveGuide.description}
            </p>
            <div className="mt-4 text-sm text-blue-200">
              By {comprehensiveGuide.author} • {comprehensiveGuide.date}
            </div>
          </div>

          {/* Quick Stats */}
          <QuickStats />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Table of Contents */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Card className="glass animate-fade-in-left">
                <CardHeader>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center">
                    <DocumentTextIcon className="w-6 h-6 mr-2 text-blue-600" />
                    Table of Contents
                  </h2>
                </CardHeader>
                <CardContent>
                  <SectionNavigation sections={sections} />

                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Quick Actions</h3>
                    <div className="space-y-2">
                      <Link href="/tools/risk-assessment">
                        <Button variant="outline" size="sm" className="w-full justify-start">
                          Risk Assessment
                        </Button>
                      </Link>
                      <Link href="/reference/comparison-matrix">
                        <Button variant="outline" size="sm" className="w-full justify-start">
                          Version Comparison
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">

            {/* Content Sections */}
            <div className="space-y-12">
              <section id="introduction" className="animate-fade-in-up">
                <Card className="overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                      1. Introduction to HL7 v2.8 Migration
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">
                      Understanding the fundamentals of HL7 v2.8 migration and its importance for healthcare organizations
                    </p>
                  </CardHeader>

                  <CardContent className="prose prose-lg max-w-none dark:prose-invert">
                    <Card className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 mb-6">
                      <CardContent className="p-6">
                        <div className="flex items-start">
                          <ExclamationTriangleIcon className="w-6 h-6 text-yellow-600 dark:text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                          <div>
                            <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Important Notice</h3>
                            <p className="text-yellow-700 dark:text-yellow-300">
                              HL7 v2.8 represents a significant evolution in healthcare data exchange standards. This migration requires careful planning, thorough testing, and comprehensive understanding of the changes introduced.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <div className="text-gray-700 dark:text-gray-300 mb-6 space-y-4">
                      {comprehensiveGuide.sections[0].content.split('\n\n').map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Key Migration Objectives</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      {migrationObjectives.map((objective, index) => (
                        <div key={index} className="flex items-start space-x-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                          <CheckCircleIcon className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300">{objective}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </section>

              <section id="official-docs" className="animate-fade-in-up animate-delay-200">
                <Card className="overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                      2. Official Documentation and Resources
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">
                      Essential documentation and authoritative resources for HL7 v2.8 migration
                    </p>
                  </CardHeader>

                  <CardContent>
                    <div className="text-gray-700 dark:text-gray-300 mb-6 space-y-4">
                      {comprehensiveGuide.sections[1].content.split('\n\n').map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      {comprehensiveGuide.sections[1].subsections?.map((subsection, index) => (
                        <Card key={subsection.id} className={`border-2 ${index === 0 ? 'border-blue-200 dark:border-blue-800 hover:border-blue-300 dark:hover:border-blue-700' : 'border-purple-200 dark:border-purple-800 hover:border-purple-300 dark:hover:border-purple-700'} transition-colors`}>
                          <CardHeader>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                              {index === 0 ? (
                                <DocumentTextIcon className="w-5 h-5 mr-2 text-blue-600" />
                              ) : (
                                <UserGroupIcon className="w-5 h-5 mr-2 text-purple-600" />
                              )}
                              {subsection.title}
                            </h3>
                          </CardHeader>
                          <CardContent>
                            <div className="text-sm text-gray-600 dark:text-gray-400 space-y-3">
                              {subsection.content.split('\n\n').map((paragraph, pIndex) => (
                                <p key={pIndex}>{paragraph}</p>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>

                    <Card className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-400">
                      <CardContent className="p-6">
                        <div className="flex items-start">
                          <CheckCircleIcon className="w-6 h-6 text-green-600 dark:text-green-400 mr-3 mt-1 flex-shrink-0" />
                          <div>
                            <h3 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-3">Recommended Resources</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {[
                                'HL7 v2.8 Standard Specification (Official)',
                                'HL7 v2.8 Implementation Guide',
                                'Migration Planning Toolkit',
                                'Conformance Testing Suite'
                              ].map((resource, index) => (
                                <div key={index} className="flex items-center space-x-2">
                                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                  <span className="text-green-700 dark:text-green-300">{resource}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CardContent>
                </Card>
              </section>

              <section id="technical-differences" className="animate-fade-in-up animate-delay-300">
                <Card className="overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                      3. Technical Differences and Compatibility
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">
                      Understanding the technical differences between HL7 v2.x and v2.8 is crucial for successful migration
                    </p>
                  </CardHeader>

                  <CardContent>
                    <div className="text-gray-700 dark:text-gray-300 mb-6 space-y-4">
                      {comprehensiveGuide.sections[2].content.split('\n\n').map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Major Changes in v2.8</h3>

                    <div className="overflow-x-auto mb-6">
                      <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                        <thead className="bg-gray-50 dark:bg-gray-700">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Component</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Change Type</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Impact</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Description</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                          {technicalDifferences.map((diff, index) => (
                            <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">{diff.component}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                  diff.changeType === 'Enhanced' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' :
                                  diff.changeType === 'Modified' ? 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300' :
                                  diff.changeType === 'Added/Modified' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' :
                                  'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300'
                                }`}>
                                  {diff.changeType}
                                </span>
                              </td>
                              <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">{diff.impact}</td>
                              <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">{diff.description}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </section>

              <section id="implementation" className="animate-fade-in-up animate-delay-400">
                <Card className="overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                      4. Implementation Guidelines
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">
                      Step-by-step implementation phases for successful HL7 v2.8 migration
                    </p>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-6">
                      {implementationPhases.map((phase, index) => {
                        const borderColors = ['border-blue-500', 'border-green-500', 'border-purple-500']
                        return (
                          <Card key={phase.id} className={`border-l-4 ${borderColors[index]}`}>
                            <CardContent className="p-6">
                              <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                  {phase.title}
                                </h3>
                                <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
                                  {phase.duration}
                                </span>
                              </div>
                              <p className="text-gray-600 dark:text-gray-400 mb-4">{phase.description}</p>
                              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                                {phase.tasks.map((task, taskIndex) => (
                                  <li key={taskIndex} className="flex items-start">
                                    <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                    {task}
                                  </li>
                                ))}
                              </ul>
                              {phase.dependencies && (
                                <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                                  <strong>Dependencies:</strong> {phase.dependencies.join(', ')}
                                </div>
                              )}
                            </CardContent>
                          </Card>
                        )
                      })}
                    </div>
                  </CardContent>
                </Card>
              </section>

              <section id="best-practices" className="animate-fade-in-up animate-delay-500">
                <Card className="overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                      5. Best Practices and Recommendations
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">
                      Industry-proven strategies and recommendations for successful migration
                    </p>
                  </CardHeader>

                  <CardContent>
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                      {bestPractices.map((practice, index) => (
                        <Card key={practice.category} className="border-2 border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-colors">
                          <CardHeader>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{practice.title}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{practice.description}</p>
                          </CardHeader>
                          <CardContent>
                            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                              {practice.items.map((item, itemIndex) => (
                                <li key={itemIndex} className="flex items-start">
                                  <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                  <span className="text-sm">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </section>

              <section id="industry-resources" className="animate-fade-in-up animate-delay-600">
                <Card className="overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                      6. Industry-Specific Resources
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">
                      Tailored guidance for different healthcare industry sectors
                    </p>
                  </CardHeader>

                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {industryResources.map((resource, index) => {
                        const borderColors = [
                          'border-blue-200 dark:border-blue-800',
                          'border-green-200 dark:border-green-800',
                          'border-purple-200 dark:border-purple-800',
                          'border-orange-200 dark:border-orange-800'
                        ]
                        return (
                          <Card key={resource.industry} className={`border-2 ${borderColors[index]} hover:shadow-lg transition-all duration-200`}>
                            <CardHeader>
                              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{resource.industry}</h3>
                              <p className="text-sm text-gray-600 dark:text-gray-400">{resource.description}</p>
                            </CardHeader>
                            <CardContent>
                              <div className="mb-4">
                                <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Resources:</h4>
                                <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                                  {resource.resources.map((item, itemIndex) => (
                                    <li key={itemIndex} className="flex items-start">
                                      <CheckCircleIcon className="w-3 h-3 text-green-500 mr-2 mt-1 flex-shrink-0" />
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Key Considerations:</h4>
                                <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                                  {resource.considerations.map((consideration, consIndex) => (
                                    <li key={consIndex} className="flex items-start">
                                      <ExclamationTriangleIcon className="w-3 h-3 text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                                      {consideration}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </CardContent>
                          </Card>
                        )
                      })}
                    </div>
                  </CardContent>
                </Card>
              </section>

              <section id="vendor-guidance" className="animate-fade-in-up animate-delay-700">
                <Card className="overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-gray-50 to-slate-50 dark:from-gray-900/20 dark:to-slate-900/20">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                      7. Vendor-Specific Guidance
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">
                      Vendor-specific resources and support for HL7 v2.8 migration
                    </p>
                  </CardHeader>

                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {vendorGuidance.map((vendor, index) => (
                        <Card key={vendor.vendor} className="border-2 border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-colors">
                          <CardHeader>
                            <div className="flex items-center justify-between">
                              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{vendor.vendor}</h3>
                              <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-2 py-1 rounded-full">
                                {vendor.category}
                              </span>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{vendor.description}</p>
                          </CardHeader>
                          <CardContent>
                            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                              {vendor.resources.map((resource, resourceIndex) => (
                                <li key={resourceIndex} className="flex items-start">
                                  <CheckCircleIcon className="w-3 h-3 text-green-500 mr-2 mt-1 flex-shrink-0" />
                                  {resource}
                                </li>
                              ))}
                            </ul>
                            {vendor.contactInfo && (
                              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                  <strong>Contact:</strong> {vendor.contactInfo}
                                </p>
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </section>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Indicator */}
      <ProgressIndicator sections={sections} />

      {/* Floating Action Button */}
      <FloatingActionButton />
    </MainLayout>
  )
}