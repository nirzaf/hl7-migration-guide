'use client'

import Link from 'next/link'
import { ArrowLeftIcon, DocumentTextIcon, ExclamationTriangleIcon, CheckCircleIcon } from '@heroicons/react/24/outline'

export default function ComprehensiveGuide() {
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
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Comprehensive HL7 v2.8 Migration Guide</h1>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Table of Contents */}
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-4 flex items-center">
            <DocumentTextIcon className="w-6 h-6 mr-2" />
            Table of Contents
          </h2>
          <nav className="space-y-2">
            <a href="#introduction" className="block text-blue-700 dark:text-blue-300 hover:text-blue-900 dark:hover:text-blue-100 transition-colors">1. Introduction to HL7 v2.8 Migration</a>
            <a href="#official-docs" className="block text-blue-700 dark:text-blue-300 hover:text-blue-900 dark:hover:text-blue-100 transition-colors">2. Official Documentation and Resources</a>
            <a href="#technical-differences" className="block text-blue-700 dark:text-blue-300 hover:text-blue-900 dark:hover:text-blue-100 transition-colors">3. Technical Differences and Compatibility</a>
            <a href="#implementation" className="block text-blue-700 dark:text-blue-300 hover:text-blue-900 dark:hover:text-blue-100 transition-colors">4. Implementation Guidelines</a>
            <a href="#best-practices" className="block text-blue-700 dark:text-blue-300 hover:text-blue-900 dark:hover:text-blue-100 transition-colors">5. Best Practices and Recommendations</a>
            <a href="#industry-resources" className="block text-blue-700 dark:text-blue-300 hover:text-blue-900 dark:hover:text-blue-100 transition-colors">6. Industry-Specific Resources</a>
            <a href="#vendor-guidance" className="block text-blue-700 dark:text-blue-300 hover:text-blue-900 dark:hover:text-blue-100 transition-colors">7. Vendor-Specific Guidance</a>
          </nav>
        </div>

        {/* Content Sections */}
        <div className="prose prose-lg max-w-none dark:prose-invert">
          <section id="introduction" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">1. Introduction to HL7 v2.8 Migration</h2>
            
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-6 mb-6">
              <div className="flex items-start">
                <ExclamationTriangleIcon className="w-6 h-6 text-yellow-600 dark:text-yellow-400 mr-3 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Important Notice</h3>
                  <p className="text-yellow-700 dark:text-yellow-300">
                    HL7 v2.8 represents a significant evolution in healthcare data exchange standards. This migration requires careful planning, thorough testing, and comprehensive understanding of the changes introduced.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              HL7 v2.8 introduces several enhancements and modifications to improve interoperability, data quality, and clinical workflow integration. This comprehensive guide provides healthcare organizations, IT professionals, and integration specialists with the knowledge and tools necessary for a successful migration.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Key Migration Objectives</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-6">
              <li>Ensure seamless data exchange between systems</li>
              <li>Maintain data integrity throughout the migration process</li>
              <li>Minimize downtime and operational disruption</li>
              <li>Achieve compliance with updated HL7 standards</li>
              <li>Improve overall system interoperability</li>
            </ul>
          </section>

          <section id="official-docs" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">2. Official Documentation and Resources</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">HL7 International</h3>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li>• Official HL7 v2.8 Standard Documentation</li>
                  <li>• Implementation Guides and Best Practices</li>
                  <li>• Conformance Profiles and Message Definitions</li>
                  <li>• Migration Tools and Utilities</li>
                </ul>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Regional Authorities</h3>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li>• Country-specific implementation guidelines</li>
                  <li>• Regulatory compliance requirements</li>
                  <li>• Certification and validation processes</li>
                  <li>• Local support and training resources</li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-400 p-6 mb-6">
              <div className="flex items-start">
                <CheckCircleIcon className="w-6 h-6 text-green-600 dark:text-green-400 mr-3 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-2">Recommended Resources</h3>
                  <ul className="text-green-700 dark:text-green-300 space-y-1">
                    <li>• HL7 v2.8 Standard Specification (Official)</li>
                    <li>• HL7 v2.8 Implementation Guide</li>
                    <li>• Migration Planning Toolkit</li>
                    <li>• Conformance Testing Suite</li>
                  </ul>
                </div>
              </div>
            </div>
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
  )
}