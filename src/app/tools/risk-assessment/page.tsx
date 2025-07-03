'use client'

import React, { useState, useMemo, useCallback, memo } from 'react'
import Link from 'next/link'
import { ArrowLeftIcon, ExclamationTriangleIcon, CheckCircleIcon, XCircleIcon, InformationCircleIcon } from '@heroicons/react/24/outline'
import MainLayout from '@/components/layout/MainLayout'
import Card, { CardContent, CardHeader } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { riskAssessment } from '@/data/hl7Content'

interface RiskFactor {
  id: string
  category: string
  question: string
  weight: number
  options: { value: number; label: string; description: string }[]
}

const riskFactors: RiskFactor[] = [
  {
    id: 'system_complexity',
    category: 'Technical',
    question: 'How complex is your current HL7 integration environment?',
    weight: 3,
    options: [
      { value: 1, label: 'Simple', description: 'Few interfaces, standard message types' },
      { value: 2, label: 'Moderate', description: 'Multiple interfaces, some customization' },
      { value: 3, label: 'Complex', description: 'Many interfaces, heavy customization' },
      { value: 4, label: 'Very Complex', description: 'Extensive custom interfaces and transformations' }
    ]
  },
  {
    id: 'message_volume',
    category: 'Technical',
    question: 'What is your daily HL7 message volume?',
    weight: 2,
    options: [
      { value: 1, label: 'Low (<1K)', description: 'Less than 1,000 messages per day' },
      { value: 2, label: 'Medium (1K-10K)', description: '1,000 to 10,000 messages per day' },
      { value: 3, label: 'High (10K-100K)', description: '10,000 to 100,000 messages per day' },
      { value: 4, label: 'Very High (>100K)', description: 'More than 100,000 messages per day' }
    ]
  },
  {
    id: 'vendor_support',
    category: 'Organizational',
    question: 'What level of vendor support do you have for the migration?',
    weight: 3,
    options: [
      { value: 1, label: 'Full Support', description: 'Vendor provides migration tools and support' },
      { value: 2, label: 'Partial Support', description: 'Some vendor assistance available' },
      { value: 3, label: 'Limited Support', description: 'Minimal vendor involvement' },
      { value: 4, label: 'No Support', description: 'Self-managed migration' }
    ]
  },
  {
    id: 'team_expertise',
    category: 'Organizational',
    question: 'What is your team\'s HL7 expertise level?',
    weight: 3,
    options: [
      { value: 1, label: 'Expert', description: 'Deep HL7 knowledge and experience' },
      { value: 2, label: 'Experienced', description: 'Good understanding of HL7 standards' },
      { value: 3, label: 'Basic', description: 'Limited HL7 experience' },
      { value: 4, label: 'Novice', description: 'Little to no HL7 experience' }
    ]
  },
  {
    id: 'testing_environment',
    category: 'Technical',
    question: 'Do you have adequate testing environments?',
    weight: 2,
    options: [
      { value: 1, label: 'Comprehensive', description: 'Full production-like test environment' },
      { value: 2, label: 'Adequate', description: 'Good testing capabilities' },
      { value: 3, label: 'Limited', description: 'Basic testing environment' },
      { value: 4, label: 'None', description: 'No dedicated testing environment' }
    ]
  },
  {
    id: 'downtime_tolerance',
    category: 'Business',
    question: 'What is your tolerance for system downtime?',
    weight: 4,
    options: [
      { value: 1, label: 'High', description: 'Can tolerate several hours of downtime' },
      { value: 2, label: 'Medium', description: 'Can tolerate 1-2 hours of downtime' },
      { value: 3, label: 'Low', description: 'Can tolerate less than 1 hour' },
      { value: 4, label: 'None', description: 'Cannot tolerate any downtime' }
    ]
  },
  {
    id: 'regulatory_requirements',
    category: 'Business',
    question: 'How strict are your regulatory compliance requirements?',
    weight: 3,
    options: [
      { value: 1, label: 'Standard', description: 'Basic healthcare compliance requirements' },
      { value: 2, label: 'Enhanced', description: 'Additional industry-specific requirements' },
      { value: 3, label: 'Strict', description: 'Stringent regulatory oversight' },
      { value: 4, label: 'Critical', description: 'Life-critical systems with strict validation' }
    ]
  },
  {
    id: 'timeline_pressure',
    category: 'Business',
    question: 'How much time pressure is there for the migration?',
    weight: 2,
    options: [
      { value: 1, label: 'Flexible', description: 'No specific deadline pressure' },
      { value: 2, label: 'Moderate', description: 'Reasonable timeline expectations' },
      { value: 3, label: 'Tight', description: 'Aggressive timeline requirements' },
      { value: 4, label: 'Critical', description: 'Must complete immediately' }
    ]
  }
]

export default function RiskAssessment() {
  const [responses, setResponses] = useState<Record<string, number>>({})
  const [showResults, setShowResults] = useState(false)

  const handleResponse = (factorId: string, value: number) => {
    setResponses(prev => ({ ...prev, [factorId]: value }))
  }

  const calculateRisk = () => {
    let totalScore = 0
    let maxScore = 0
    
    riskFactors.forEach(factor => {
      const response = responses[factor.id]
      if (response) {
        totalScore += response * factor.weight
      }
      maxScore += 4 * factor.weight
    })
    
    return (totalScore / maxScore) * 100
  }

  const getRiskLevel = (score: number) => {
    if (score <= 25) return { level: 'Low', color: 'green', description: 'Low risk migration with standard precautions' }
    if (score <= 50) return { level: 'Medium', color: 'yellow', description: 'Moderate risk requiring careful planning' }
    if (score <= 75) return { level: 'High', color: 'orange', description: 'High risk requiring extensive mitigation strategies' }
    return { level: 'Critical', color: 'red', description: 'Critical risk requiring comprehensive risk management' }
  }

  const getRecommendations = (score: number) => {
    const risk = getRiskLevel(score)
    
    const baseRecommendations = [
      'Conduct thorough testing in isolated environment',
      'Develop comprehensive rollback procedures',
      'Establish clear communication channels',
      'Monitor system performance closely'
    ]
    
    if (risk.level === 'Medium') {
      return [
        ...baseRecommendations,
        'Consider phased migration approach',
        'Engage additional technical expertise',
        'Extend testing timeline'
      ]
    }
    
    if (risk.level === 'High') {
      return [
        ...baseRecommendations,
        'Implement parallel processing during transition',
        'Engage vendor professional services',
        'Consider external consulting support',
        'Develop detailed contingency plans',
        'Conduct pilot implementation first'
      ]
    }
    
    if (risk.level === 'Critical') {
      return [
        ...baseRecommendations,
        'Mandatory parallel processing with full rollback capability',
        'Engage dedicated migration team',
        'Require vendor on-site support',
        'Implement 24/7 monitoring during transition',
        'Consider delaying migration until risks are mitigated',
        'Develop comprehensive disaster recovery plan'
      ]
    }
    
    return baseRecommendations
  }

  const isComplete = riskFactors.every(factor => responses[factor.id])
  const riskScore = calculateRisk()
  const riskAssessment = getRiskLevel(riskScore)

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
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">HL7 Migration Risk Assessment</h1>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Introduction */}
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 mb-8">
          <div className="flex items-start">
            <InformationCircleIcon className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3 mt-1" />
            <div>
              <h2 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-2">Risk Assessment Tool</h2>
              <p className="text-blue-800 dark:text-blue-200">
                This interactive tool helps you evaluate the risk level of your HL7 v2.8 migration project. 
                Answer all questions to receive a comprehensive risk assessment and tailored recommendations.
              </p>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Progress</span>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {Object.keys(responses).length} of {riskFactors.length} completed
            </span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(Object.keys(responses).length / riskFactors.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Risk Factors */}
        <div className="space-y-8 mb-8">
          {riskFactors.map((factor, index) => (
            <div key={factor.id} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700">
              <div className="flex items-start mb-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4 mt-1">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mr-3">{factor.question}</h3>
                    <span className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full">
                      {factor.category}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {factor.options.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => handleResponse(factor.id, option.value)}
                        className={`p-4 text-left border rounded-lg transition-all ${
                          responses[factor.id] === option.value
                            ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                            : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
                        }`}
                      >
                        <div className="flex items-center mb-2">
                          <div className={`w-4 h-4 rounded-full border-2 mr-3 ${
                            responses[factor.id] === option.value
                              ? 'border-blue-500 bg-blue-500'
                              : 'border-gray-300 dark:border-gray-600'
                          }`}>
                            {responses[factor.id] === option.value && (
                              <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5"></div>
                            )}
                          </div>
                          <span className="font-medium text-gray-900 dark:text-white">{option.label}</span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 ml-7">{option.description}</p>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Calculate Button */}
        <div className="text-center mb-8">
          <button
            onClick={() => setShowResults(true)}
            disabled={!isComplete}
            className={`px-8 py-3 rounded-lg font-semibold transition-all ${
              isComplete
                ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg'
                : 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed'
            }`}
          >
            {isComplete ? 'Calculate Risk Assessment' : `Complete ${riskFactors.length - Object.keys(responses).length} more questions`}
          </button>
        </div>

        {/* Results */}
        {showResults && isComplete && (
          <div className="space-y-8">
            {/* Risk Score */}
            <div className={`rounded-lg p-6 border-l-4 ${
              riskAssessment.color === 'green' ? 'bg-green-50 dark:bg-green-900/20 border-green-400' :
              riskAssessment.color === 'yellow' ? 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-400' :
              riskAssessment.color === 'orange' ? 'bg-orange-50 dark:bg-orange-900/20 border-orange-400' :
              'bg-red-50 dark:bg-red-900/20 border-red-400'
            }`}>
              <div className="flex items-center mb-4">
                {riskAssessment.color === 'green' && <CheckCircleIcon className="w-8 h-8 text-green-600 dark:text-green-400 mr-3" />}
                {riskAssessment.color === 'yellow' && <ExclamationTriangleIcon className="w-8 h-8 text-yellow-600 dark:text-yellow-400 mr-3" />}
                {riskAssessment.color === 'orange' && <ExclamationTriangleIcon className="w-8 h-8 text-orange-600 dark:text-orange-400 mr-3" />}
                {riskAssessment.color === 'red' && <XCircleIcon className="w-8 h-8 text-red-600 dark:text-red-400 mr-3" />}
                <div>
                  <h2 className={`text-2xl font-bold ${
                    riskAssessment.color === 'green' ? 'text-green-900 dark:text-green-100' :
                    riskAssessment.color === 'yellow' ? 'text-yellow-900 dark:text-yellow-100' :
                    riskAssessment.color === 'orange' ? 'text-orange-900 dark:text-orange-100' :
                    'text-red-900 dark:text-red-100'
                  }`}>
                    {riskAssessment.level} Risk Level
                  </h2>
                  <p className={`text-lg ${
                    riskAssessment.color === 'green' ? 'text-green-800 dark:text-green-200' :
                    riskAssessment.color === 'yellow' ? 'text-yellow-800 dark:text-yellow-200' :
                    riskAssessment.color === 'orange' ? 'text-orange-800 dark:text-orange-200' :
                    'text-red-800 dark:text-red-200'
                  }`}>
                    Risk Score: {Math.round(riskScore)}%
                  </p>
                </div>
              </div>
              <p className={`${
                riskAssessment.color === 'green' ? 'text-green-700 dark:text-green-300' :
                riskAssessment.color === 'yellow' ? 'text-yellow-700 dark:text-yellow-300' :
                riskAssessment.color === 'orange' ? 'text-orange-700 dark:text-orange-300' :
                'text-red-700 dark:text-red-300'
              }`}>
                {riskAssessment.description}
              </p>
            </div>

            {/* Recommendations */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Recommended Actions</h3>
              <ul className="space-y-3">
                {getRecommendations(riskScore).map((recommendation, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{recommendation}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Next Steps */}
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4">Next Steps</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="/guide/best-practices" className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-colors">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 dark:text-white">Review Best Practices</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Learn proven migration strategies</p>
                  </div>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                
                <Link href="/reference/comparison-matrix" className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-colors">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 dark:text-white">Version Comparison</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Compare HL7 versions in detail</p>
                  </div>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <Link href="/guide/best-practices" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
            <ArrowLeftIcon className="w-5 h-5 mr-2" />
            Previous: Best Practices
          </Link>
          <Link href="/reference/comparison-matrix" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
            Next: Comparison Matrix
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}