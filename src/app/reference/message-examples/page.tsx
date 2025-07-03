'use client'

import Link from 'next/link'
import { ArrowLeftIcon, InformationCircleIcon, DocumentTextIcon } from '@heroicons/react/24/outline'
import { messageExamples } from '@/data/hl7Content' // Corrected import path

export default function MessageExamplesPage() {
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
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">HL7 Message Examples</h1>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Overview */}
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 mb-8">
          <div className="flex items-start">
            <InformationCircleIcon className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3 mt-1" />
            <div>
              <h2 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-2">Message Examples Overview</h2>
              <p className="text-blue-800 dark:text-blue-200">
                This section provides concrete examples of HL7 message structures, comparing different versions and showcasing common use cases.
                Understanding these examples is crucial for developers and analysts working on HL7 integrations.
              </p>
            </div>
          </div>
        </div>

        {/* Message Examples List */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Example Messages</h2>
          <div className="space-y-8">
            {messageExamples.map((example, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700">
                <div className="flex items-center mb-4">
                  <DocumentTextIcon className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{example.messageType} - {example.version}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{example.description}</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Message Structure:</h4>
                  <div className="bg-gray-100 dark:bg-gray-700 rounded p-4 font-mono text-sm">
                    <ul className="space-y-1">
                      {example.structure.map((segment, segIndex) => (
                        <li key={segIndex} className="text-gray-800 dark:text-gray-200">
                          <span className="text-green-600 dark:text-green-400">{segment.split(' - ')[0]}</span> - {segment.split(' - ')[1]}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Navigation (Optional - can be added if there are relevant next/prev pages) */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <Link href="/reference/comparison-matrix" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
            <ArrowLeftIcon className="w-5 h-5 mr-2" />
            Previous: Version Comparison Matrix
          </Link>
          {/* Add next link if applicable */}
        </div>
      </div>
    </div>
  )
}
