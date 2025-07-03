'use client'

import Link from 'next/link'
import { ArrowLeftIcon, CheckCircleIcon, ExclamationTriangleIcon, LightBulbIcon, ClockIcon } from '@heroicons/react/24/outline'

export default function BestPractices() {
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
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">HL7 v2.8 Migration Best Practices</h1>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Overview */}
        <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 mb-8">
          <div className="flex items-start">
            <LightBulbIcon className="w-6 h-6 text-green-600 dark:text-green-400 mr-3 mt-1" />
            <div>
              <h2 className="text-xl font-semibold text-green-900 dark:text-green-100 mb-2">Best Practices Overview</h2>
              <p className="text-green-800 dark:text-green-200">
                This section provides proven strategies, phased migration approaches, and industry best practices 
                for successful HL7 v2.8 implementation based on real-world experiences.
              </p>
            </div>
          </div>
        </div>

        {/* Phased Migration Strategy */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Phased Migration Strategy</h2>
          
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">1</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Assessment and Planning Phase</h3>
                <ClockIcon className="w-5 h-5 text-gray-400 ml-2" />
                <span className="text-sm text-gray-500 ml-1">2-4 weeks</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-3">Key Activities</h4>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Inventory all HL7 interfaces and systems
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Analyze message volumes and patterns
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Identify critical vs. non-critical interfaces
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Assess vendor support and timelines
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-3">Deliverables</h4>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>• Complete interface inventory</li>
                    <li>• Risk assessment matrix</li>
                    <li>• Migration timeline and roadmap</li>
                    <li>• Resource allocation plan</li>
                    <li>• Success criteria definition</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">2</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Development and Testing Phase</h3>
                <ClockIcon className="w-5 h-5 text-gray-400 ml-2" />
                <span className="text-sm text-gray-500 ml-1">6-12 weeks</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-3">Key Activities</h4>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Set up isolated testing environments
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Develop message transformation logic
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Create comprehensive test scenarios
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Implement monitoring and logging
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-3">Testing Strategy</h4>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>• Unit testing of individual components</li>
                    <li>• Integration testing with partner systems</li>
                    <li>• Performance and load testing</li>
                    <li>• End-to-end workflow validation</li>
                    <li>• Rollback procedure testing</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">3</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Pilot Implementation Phase</h3>
                <ClockIcon className="w-5 h-5 text-gray-400 ml-2" />
                <span className="text-sm text-gray-500 ml-1">2-4 weeks</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-3">Pilot Selection Criteria</h4>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>• Low-risk, non-critical interfaces</li>
                    <li>• Limited user base and message volume</li>
                    <li>• Cooperative and engaged stakeholders</li>
                    <li>• Representative of broader implementation</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-3">Success Metrics</h4>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>• Message processing accuracy (&gt;99.9%)</li>
                    <li>• System performance within SLA</li>
                    <li>• Zero data loss incidents</li>
                    <li>• Successful rollback capability</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">4</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Full Production Rollout</h3>
                <ClockIcon className="w-5 h-5 text-gray-400 ml-2" />
                <span className="text-sm text-gray-500 ml-1">4-8 weeks</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-3">Rollout Strategy</h4>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>• Gradual interface migration by priority</li>
                    <li>• Parallel running during transition</li>
                    <li>• 24/7 monitoring and support</li>
                    <li>• Regular stakeholder communication</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-3">Go-Live Checklist</h4>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>• All testing completed and signed off</li>
                    <li>• Rollback procedures validated</li>
                    <li>• Support team trained and available</li>
                    <li>• Monitoring systems operational</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Version Coexistence Patterns */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Version Coexistence Patterns</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Parallel Processing</h3>
              <div className="mb-4">
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded p-4">
                  <p className="text-sm text-blue-800 dark:text-blue-200 mb-2">
                    <strong>Pattern:</strong> Run both v2.x and v2.8 systems simultaneously during transition
                  </p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-green-700 dark:text-green-300">✓ Advantages</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <li>• Immediate rollback capability</li>
                    <li>• Real-time comparison and validation</li>
                    <li>• Reduced risk of data loss</li>
                    <li>• Gradual user transition</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-red-700 dark:text-red-300">⚠ Considerations</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <li>• Increased infrastructure costs</li>
                    <li>• Complex data synchronization</li>
                    <li>• Higher operational overhead</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Gateway Translation</h3>
              <div className="mb-4">
                <div className="bg-purple-50 dark:bg-purple-900/20 rounded p-4">
                  <p className="text-sm text-purple-800 dark:text-purple-200 mb-2">
                    <strong>Pattern:</strong> Use translation gateway to convert between versions
                  </p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-green-700 dark:text-green-300">✓ Advantages</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <li>• Centralized conversion logic</li>
                    <li>• Supports mixed-version environments</li>
                    <li>• Easier maintenance and updates</li>
                    <li>• Flexible migration timeline</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-red-700 dark:text-red-300">⚠ Considerations</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <li>• Single point of failure</li>
                    <li>• Performance bottleneck potential</li>
                    <li>• Complex mapping requirements</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Data Transformation Guidance */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Data Transformation Guidance</h2>
          
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Mapping Strategy</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">1</span>
                  </div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Field Mapping</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Create comprehensive field-to-field mapping documentation</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl font-bold text-green-600 dark:text-green-400">2</span>
                  </div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Value Translation</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Define code set mappings and value transformations</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">3</span>
                  </div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Validation Rules</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Implement enhanced validation and error handling</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-6">
              <div className="flex items-start">
                <ExclamationTriangleIcon className="w-6 h-6 text-yellow-600 dark:text-yellow-400 mr-3 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Critical Transformation Areas</h3>
                  <ul className="text-yellow-700 dark:text-yellow-300 space-y-2">
                    <li>• <strong>Patient Demographics:</strong> Enhanced name and address formats</li>
                    <li>• <strong>Clinical Observations:</strong> Rich text and multimedia support</li>
                    <li>• <strong>Vocabulary Codes:</strong> Updated code sets and value domains</li>
                    <li>• <strong>Message Headers:</strong> Security and routing enhancements</li>
                    <li>• <strong>Data Types:</strong> New and modified data type handling</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Rollback Procedures */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Rollback Procedures</h2>
          
          <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-400 p-6 mb-6">
            <div className="flex items-start">
              <ExclamationTriangleIcon className="w-6 h-6 text-red-600 dark:text-red-400 mr-3 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-red-800 dark:text-red-200 mb-2">Emergency Rollback Criteria</h3>
                <p className="text-red-700 dark:text-red-300 mb-3">
                  Establish clear criteria for when to initiate rollback procedures to minimize system downtime and data loss.
                </p>
                <ul className="text-red-700 dark:text-red-300 space-y-1">
                  <li>• Message processing failure rate &gt; 1%</li>
                  <li>• Critical system performance degradation</li>
                  <li>• Data integrity issues detected</li>
                  <li>• Inability to process urgent clinical messages</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Automated Rollback</h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  Automated monitoring triggers
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  Pre-configured rollback scripts
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  Database backup restoration
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  Configuration rollback
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  Stakeholder notification
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Manual Rollback</h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  Step-by-step rollback procedures
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  Decision tree for rollback scenarios
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  Data reconciliation procedures
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  Communication protocols
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  Post-rollback analysis
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Success Metrics and KPIs</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700 text-center">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl font-bold text-blue-600 dark:text-blue-400">99.9%</span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Message Accuracy</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Successful message processing rate</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700 text-center">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl font-bold text-green-600 dark:text-green-400">&lt;2s</span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Response Time</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Average message processing time</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700 text-center">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl font-bold text-purple-600 dark:text-purple-400">0</span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Data Loss</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Zero tolerance for data loss</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700 text-center">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl font-bold text-orange-600 dark:text-orange-400">99.5%</span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">System Uptime</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Minimum acceptable uptime</p>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <Link href="/guide/technical-differences" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
            <ArrowLeftIcon className="w-5 h-5 mr-2" />
            Previous: Technical Differences
          </Link>
          <Link href="/tools/risk-assessment" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
            Next: Risk Assessment
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}