'use client'

import Link from 'next/link'
import { ArrowLeftIcon, InformationCircleIcon, CalendarDaysIcon, UserGroupIcon, ClockIcon } from '@heroicons/react/24/outline'
import { implementationPhases } from '@/data/hl7Content' // Corrected import path

export default function ResourcePlanningPage() {
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
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Resource Planning for Migration</h1>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Overview */}
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 mb-8">
          <div className="flex items-start">
            <InformationCircleIcon className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3 mt-1" />
            <div>
              <h2 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-2">Resource Planning Overview</h2>
              <p className="text-blue-800 dark:text-blue-200">
                Effective resource planning is critical for a successful HL7 migration. This section outlines key implementation phases,
                estimated durations, and typical tasks involved. Use this as a template to plan your project resources.
              </p>
            </div>
          </div>
        </div>

        {/* Implementation Phases */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Implementation Phases & Resource Allocation</h2>
          <div className="space-y-8">
            {implementationPhases.map((phase) => (
              <div key={phase.id} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700">
                <div className="mb-4">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-1">{phase.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 italic">{phase.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 text-sm">
                  <div className="flex items-center bg-gray-100 dark:bg-gray-700 p-3 rounded-md">
                    <ClockIcon className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
                    <span className="text-gray-700 dark:text-gray-300"><strong>Duration:</strong> {phase.duration}</span>
                  </div>
                  {phase.dependencies && phase.dependencies.length > 0 && (
                    <div className="flex items-center bg-gray-100 dark:bg-gray-700 p-3 rounded-md">
                      <CalendarDaysIcon className="w-5 h-5 text-purple-600 dark:text-purple-400 mr-2" />
                      <span className="text-gray-700 dark:text-gray-300"><strong>Dependencies:</strong> {phase.dependencies.join(', ')}</span>
                    </div>
                  )}
                   <div className="flex items-center bg-gray-100 dark:bg-gray-700 p-3 rounded-md">
                    <UserGroupIcon className="w-5 h-5 text-green-600 dark:text-green-400 mr-2" />
                    <span className="text-gray-700 dark:text-gray-300"><strong>Key Resources:</strong> Project Lead, Analysts, Developers, Testers</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Key Tasks & Activities:</h4>
                  <ul className="space-y-2">
                    {phase.tasks.map((task, taskIndex) => (
                      <li key={taskIndex} className="flex items-start">
                        <svg className="w-4 h-4 mr-2 mt-1 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700 dark:text-gray-300">{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <Link href="/tools/risk-assessment" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
            <ArrowLeftIcon className="w-5 h-5 mr-2" />
            Previous: Risk Assessment Tool
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
