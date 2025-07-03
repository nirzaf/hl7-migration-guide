'use client'

import Link from 'next/link'
import { 
  DocumentTextIcon,
  HeartIcon,
  ArrowTopRightOnSquareIcon
} from '@heroicons/react/24/outline'

const footerLinks = {
  guides: [
    { name: 'Comprehensive Guide', href: '/guide/comprehensive' },
    { name: 'Best Practices', href: '/guide/best-practices' },
    { name: 'Technical Differences', href: '/guide/technical-differences' },
  ],
  tools: [
    { name: 'Risk Assessment', href: '/tools/risk-assessment' },
    { name: 'Resource Planning', href: '/tools/resource-planning' },
  ],
  reference: [
    { name: 'Version Comparison', href: '/reference/comparison-matrix' },
    { name: 'Message Examples', href: '/reference/message-examples' },
  ],
  resources: [
    { name: 'HL7 International', href: 'https://www.hl7.org/', external: true },
    { name: 'Caristix HL7 Definition', href: 'https://hl7-definition.caristix.com/', external: true },
    { name: 'IHE Guidance', href: '/resources/ihe-guidance' },
  ]
}

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <DocumentTextIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-bold gradient-text">HL7 Migration Guide</h4>
                <p className="text-sm text-gray-400">v2.8 Migration Resources</p>
              </div>
            </div>
            
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Comprehensive resources for successful HL7 v2.8 migration. From technical specifications 
              to best practices, risk assessment tools, and vendor guidance - everything you need for 
              a smooth transition.
            </p>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-sm text-gray-400">
                <span>Made with</span>
                <HeartIcon className="w-4 h-4 mx-1 text-red-500" />
                <span>for healthcare interoperability</span>
              </div>
            </div>
          </div>

          {/* Guides */}
          <div>
            <h5 className="font-semibold mb-4 text-blue-400">Guides</h5>
            <ul className="space-y-3">
              {footerLinks.guides.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools & Reference */}
          <div>
            <h5 className="font-semibold mb-4 text-green-400">Tools</h5>
            <ul className="space-y-3 mb-6">
              {footerLinks.tools.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h5 className="font-semibold mb-4 text-purple-400">Reference</h5>
            <ul className="space-y-3">
              {footerLinks.reference.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* External Resources */}
          <div>
            <h5 className="font-semibold mb-4 text-orange-400">Resources</h5>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  {link.external ? (
                    <a 
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm flex items-center"
                    >
                      {link.name}
                      <ArrowTopRightOnSquareIcon className="w-3 h-3 ml-1" />
                    </a>
                  ) : (
                    <Link 
                      href={link.href} 
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2025 HL7 Migration Guide. Built with Next.js, TypeScript, and Tailwind CSS.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Last updated: July 2025</span>
              <span>•</span>
              <span>Version 2.8 Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
