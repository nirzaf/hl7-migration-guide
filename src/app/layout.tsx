import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'HL7 Migration Guide - Comprehensive v2.8 Migration Resources',
  description: 'Complete guide for HL7 v2.8 migration with technical specifications, best practices, risk assessment tools, and vendor guidance.',
  keywords: 'HL7, migration, v2.8, healthcare, interoperability, technical guide, risk assessment',
  authors: [{ name: 'HL7 Migration Team' }],
  openGraph: {
    title: 'HL7 Migration Guide',
    description: 'Comprehensive resources for successful HL7 v2.8 migration',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}