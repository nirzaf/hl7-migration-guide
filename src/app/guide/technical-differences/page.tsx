'use client'

import Link from 'next/link'
import { ArrowLeftIcon, ExclamationTriangleIcon, InformationCircleIcon, CheckCircleIcon } from '@heroicons/react/24/outline'

export default function TechnicalDifferences() {
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
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">HL7 v2.8 Technical Differences</h1>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Overview */}
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 mb-8">
          <div className="flex items-start">
            <InformationCircleIcon className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3 mt-1" />
            <div>
              <h2 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-2">Overview</h2>
              <p className="text-blue-800 dark:text-blue-200">
                This section provides a detailed comparison of technical differences between HL7 v2.x versions and v2.8, 
                including compatibility considerations, evolutionary changes, and specific examples of modifications.
              </p>
            </div>
          </div>
        </div>

        {/* Version Compatibility Matrix */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Version Compatibility Matrix</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Version</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Release Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Compatibility</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Migration Effort</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Key Changes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">v2.1</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">1990</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 rounded-full">Limited</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 rounded-full">High</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Significant structural changes</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">v2.2</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">1994</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 rounded-full">Moderate</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 rounded-full">Medium</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Enhanced message types</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">v2.3</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">1997</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 rounded-full">Moderate</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 rounded-full">Medium</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Improved data types</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">v2.4</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">2000</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-full">Good</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-full">Low</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Backward compatible</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">v2.5</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">2003</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-full">Good</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-full">Low</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">XML encoding support</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">v2.6</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">2007</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-full">Excellent</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-full">Low</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Enhanced conformance</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">v2.7</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">2011</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-full">Excellent</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-full">Low</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Security enhancements</td>
                </tr>
                <tr className="bg-blue-50 dark:bg-blue-900/20">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-blue-900 dark:text-blue-100">v2.8</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-700 dark:text-blue-300">2014</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full">Target</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full">Variable</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-blue-700 dark:text-blue-300">Modern standards alignment</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Message Structure Changes */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Message Structure Changes</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Enhanced Segments</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-green-400 pl-4">
                  <h4 className="font-medium text-gray-900 dark:text-white">PID Segment</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Enhanced patient identification with improved demographics support</p>
                  <ul className="text-xs text-gray-500 dark:text-gray-500 mt-2 space-y-1">
                    <li>• Extended name components</li>
                    <li>• Multiple identifier support</li>
                    <li>• Enhanced address formatting</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-blue-400 pl-4">
                  <h4 className="font-medium text-gray-900 dark:text-white">OBX Segment</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Improved observation reporting with enhanced data types</p>
                  <ul className="text-xs text-gray-500 dark:text-gray-500 mt-2 space-y-1">
                    <li>• Rich text support</li>
                    <li>• Multimedia attachments</li>
                    <li>• Enhanced units of measure</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-purple-400 pl-4">
                  <h4 className="font-medium text-gray-900 dark:text-white">MSH Segment</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Updated message header with security and routing enhancements</p>
                  <ul className="text-xs text-gray-500 dark:text-gray-500 mt-2 space-y-1">
                    <li>• Enhanced security fields</li>
                    <li>• Improved routing information</li>
                    <li>• Version compatibility indicators</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">New Data Types</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-orange-400 pl-4">
                  <h4 className="font-medium text-gray-900 dark:text-white">Enhanced Text (ET)</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Rich text formatting with markup support</p>
                </div>
                
                <div className="border-l-4 border-teal-400 pl-4">
                  <h4 className="font-medium text-gray-900 dark:text-white">Multimedia (MU)</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Support for embedded multimedia content</p>
                </div>
                
                <div className="border-l-4 border-red-400 pl-4">
                  <h4 className="font-medium text-gray-900 dark:text-white">Enhanced Numeric (EN)</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Improved precision and range handling</p>
                </div>
                
                <div className="border-l-4 border-indigo-400 pl-4">
                  <h4 className="font-medium text-gray-900 dark:text-white">Structured Address (SAD)</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">International address format support</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Compatibility Considerations */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Compatibility Considerations</h2>
          
          <div className="space-y-6">
            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-400 p-6">
              <div className="flex items-start">
                <CheckCircleIcon className="w-6 h-6 text-green-600 dark:text-green-400 mr-3 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-2">Backward Compatibility</h3>
                  <p className="text-green-700 dark:text-green-300 mb-3">
                    HL7 v2.8 maintains strong backward compatibility with previous versions, particularly v2.5 and later.
                  </p>
                  <ul className="text-green-700 dark:text-green-300 space-y-1">
                    <li>• Existing message structures remain valid</li>
                    <li>• Legacy data types are supported</li>
                    <li>• Gradual migration paths available</li>
                    <li>• Coexistence with older versions possible</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-6">
              <div className="flex items-start">
                <ExclamationTriangleIcon className="w-6 h-6 text-yellow-600 dark:text-yellow-400 mr-3 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Migration Challenges</h3>
                  <p className="text-yellow-700 dark:text-yellow-300 mb-3">
                    While generally compatible, some areas require careful attention during migration.
                  </p>
                  <ul className="text-yellow-700 dark:text-yellow-300 space-y-1">
                    <li>• Enhanced validation rules may reject previously accepted messages</li>
                    <li>• New optional fields may require interface updates</li>
                    <li>• Vocabulary changes may affect code mappings</li>
                    <li>• Performance implications of enhanced features</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specific Examples */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Specific Migration Examples</h2>
          
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Example 1: Patient Name Enhancement</h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">HL7 v2.5 Format</h4>
                  <div className="bg-gray-100 dark:bg-gray-700 rounded p-3 font-mono text-sm">
                    <code className="text-gray-800 dark:text-gray-200">
                      PID|1||12345^^^MRN||Doe^John^A||19800101|M
                    </code>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">HL7 v2.8 Enhanced Format</h4>
                  <div className="bg-gray-100 dark:bg-gray-700 rounded p-3 font-mono text-sm">
                    <code className="text-gray-800 dark:text-gray-200">
                      PID|1||12345^^^MRN||Doe^John^A^Jr^Dr^PhD||19800101|M
                    </code>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded">
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  <strong>Migration Impact:</strong> Existing parsers will continue to work, but enhanced name components 
                  (suffix, prefix, degree) are now available for more complete patient identification.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Example 2: Observation Value Enhancement</h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">HL7 v2.5 Format</h4>
                  <div className="bg-gray-100 dark:bg-gray-700 rounded p-3 font-mono text-sm">
                    <code className="text-gray-800 dark:text-gray-200">
                      OBX|1|TX|NOTE||Patient shows improvement
                    </code>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">HL7 v2.8 Enhanced Format</h4>
                  <div className="bg-gray-100 dark:bg-gray-700 rounded p-3 font-mono text-sm">
                    <code className="text-gray-800 dark:text-gray-200">
                      OBX|1|ET|NOTE||&lt;b&gt;Patient shows&lt;/b&gt; &lt;i&gt;significant&lt;/i&gt; improvement
                    </code>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded">
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  <strong>Migration Impact:</strong> Enhanced Text (ET) data type allows rich formatting, 
                  but systems must be updated to handle markup properly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <Link href="/guide/comprehensive" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
            <ArrowLeftIcon className="w-5 h-5 mr-2" />
            Previous: Comprehensive Guide
          </Link>
          <Link href="/guide/best-practices" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
            Next: Best Practices
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}