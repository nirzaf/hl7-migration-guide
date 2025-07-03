'use client'

import Link from 'next/link'
import { ArrowLeftIcon, DocumentTextIcon, ExclamationTriangleIcon, CheckCircleIcon, ClockIcon, UserGroupIcon } from '@heroicons/react/24/outline'
import MainLayout from '@/components/layout/MainLayout'
import Card, { CardContent, CardHeader } from '@/components/ui/Card'
import Button from '@/components/ui/Button'

export default function ComprehensiveGuide() {
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
              Comprehensive HL7 v2.8 Migration Guide
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl">
              A complete step-by-step guide for healthcare organizations planning to migrate their HL7 v2.x interfaces to HL7 v2.8
            </p>
          </div>

          {/* Quick Stats */}
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
                  <nav className="space-y-3">
                    {[
                      { id: 'introduction', title: '1. Introduction to HL7 v2.8 Migration' },
                      { id: 'official-docs', title: '2. Official Documentation and Resources' },
                      { id: 'technical-differences', title: '3. Technical Differences and Compatibility' },
                      { id: 'implementation', title: '4. Implementation Guidelines' },
                      { id: 'best-practices', title: '5. Best Practices and Recommendations' },
                      { id: 'industry-resources', title: '6. Industry-Specific Resources' },
                      { id: 'vendor-guidance', title: '7. Vendor-Specific Guidance' }
                    ].map((item, index) => (
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

                    <p className="text-gray-700 dark:text-gray-300 mb-6">
                      HL7 v2.8 introduces several enhancements and modifications to improve interoperability, data quality, and clinical workflow integration. This comprehensive guide provides healthcare organizations, IT professionals, and integration specialists with the knowledge and tools necessary for a successful migration.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Key Migration Objectives</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      {[
                        'Ensure seamless data exchange between systems',
                        'Maintain data integrity throughout the migration process',
                        'Minimize downtime and operational disruption',
                        'Achieve compliance with updated HL7 standards',
                        'Improve overall system interoperability',
                        'Enhanced clinical workflow integration'
                      ].map((objective, index) => (
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <Card className="border-2 border-blue-200 dark:border-blue-800 hover:border-blue-300 dark:hover:border-blue-700 transition-colors">
                        <CardHeader>
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                            <DocumentTextIcon className="w-5 h-5 mr-2 text-blue-600" />
                            HL7 International
                          </h3>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                            <li className="flex items-start">
                              <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                              Official HL7 v2.8 Standard Documentation
                            </li>
                            <li className="flex items-start">
                              <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                              Implementation Guides and Best Practices
                            </li>
                            <li className="flex items-start">
                              <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                              Conformance Profiles and Message Definitions
                            </li>
                            <li className="flex items-start">
                              <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                              Migration Tools and Utilities
                            </li>
                          </ul>
                        </CardContent>
                      </Card>

                      <Card className="border-2 border-purple-200 dark:border-purple-800 hover:border-purple-300 dark:hover:border-purple-700 transition-colors">
                        <CardHeader>
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                            <UserGroupIcon className="w-5 h-5 mr-2 text-purple-600" />
                            Regional Authorities
                          </h3>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                            <li className="flex items-start">
                              <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                              Country-specific implementation guidelines
                            </li>
                            <li className="flex items-start">
                              <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                              Regulatory compliance requirements
                            </li>
                            <li className="flex items-start">
                              <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                              Certification and validation processes
                            </li>
                            <li className="flex items-start">
                              <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                              Local support and training resources
                            </li>
                          </ul>
                        </CardContent>
                      </Card>
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

          <section id="technical-differences" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">3. Technical Differences and Compatibility</h2>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Understanding the technical differences between HL7 v2.x and v2.8 is crucial for successful migration. This section outlines the key changes and their implications.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Major Changes in v2.8</h3>
            
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Component</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Change Type</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Impact</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">Message Structure</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">Enhanced</td>
                    <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Improved data organization and validation</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">Data Types</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">Modified</td>
                    <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Updated validation rules and formats</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">Segments</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">Added/Modified</td>
                    <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">New segments for enhanced functionality</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">Vocabulary</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">Expanded</td>
                    <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Additional code sets and value domains</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="implementation" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">4. Implementation Guidelines</h2>
            
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Phase 1: Assessment and Planning</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Conduct comprehensive system inventory</li>
                  <li>• Identify all HL7 interfaces and dependencies</li>
                  <li>• Assess current message volumes and patterns</li>
                  <li>• Evaluate vendor support and upgrade paths</li>
                  <li>• Develop detailed migration timeline</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Phase 2: Development and Testing</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Set up development and testing environments</li>
                  <li>• Implement message transformation logic</li>
                  <li>• Develop comprehensive test scenarios</li>
                  <li>• Conduct unit and integration testing</li>
                  <li>• Validate data integrity and accuracy</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Phase 3: Deployment and Monitoring</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Execute phased rollout strategy</li>
                  <li>• Monitor system performance and stability</li>
                  <li>• Implement comprehensive logging and alerting</li>
                  <li>• Provide user training and support</li>
                  <li>• Establish ongoing maintenance procedures</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="best-practices" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">5. Best Practices and Recommendations</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Technical Best Practices</h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Implement comprehensive message validation
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Use standardized error handling procedures
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Maintain detailed audit trails and logging
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Implement robust backup and recovery procedures
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Project Management</h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Establish clear communication channels
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Define success criteria and metrics
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Plan for adequate testing time
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Prepare comprehensive rollback procedures
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section id="industry-resources" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">6. Industry-Specific Resources</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Hospitals & Health Systems</h3>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li>• EMR integration guidelines</li>
                  <li>• Clinical workflow considerations</li>
                  <li>• Patient safety protocols</li>
                  <li>• Regulatory compliance</li>
                </ul>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Laboratories</h3>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li>• LIS integration patterns</li>
                  <li>• Result reporting standards</li>
                  <li>• Quality control measures</li>
                  <li>• Specimen tracking</li>
                </ul>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Imaging Centers</h3>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li>• PACS integration</li>
                  <li>• Modality worklist management</li>
                  <li>• Report distribution</li>
                  <li>• Image metadata handling</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="vendor-guidance" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">7. Vendor-Specific Guidance</h2>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Different vendors may have specific requirements, tools, and procedures for HL7 v2.8 migration. This section provides guidance for working with major healthcare IT vendors.
            </p>

            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Integration Engine Vendors</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">Rhapsody Integration Engine</h4>
                    <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                      <li>• Migration toolkit and utilities</li>
                      <li>• Version compatibility matrix</li>
                      <li>• Best practice documentation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">Other Integration Platforms</h4>
                    <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                      <li>• Vendor-specific migration guides</li>
                      <li>• Support resources and contacts</li>
                      <li>• Training and certification programs</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">EHR Vendors</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Major EHR vendors provide specific guidance and tools for HL7 v2.8 migration. Consult with your vendor for:
                </p>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Upgrade schedules and compatibility timelines</li>
                  <li>• Migration tools and automated conversion utilities</li>
                  <li>• Testing environments and validation procedures</li>
                  <li>• Support during migration and post-implementation</li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <Link href="/" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
            <ArrowLeftIcon className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          <Link href="/guide/technical-differences" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
            Next: Technical Differences
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}