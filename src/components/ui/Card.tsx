'use client'

import { ReactNode, forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  glow?: boolean
  glass?: boolean
  onClick?: () => void
  style?: React.CSSProperties
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, className, hover = false, glow = false, glass = false, onClick, style }, ref) => {
    return (
      <div
        ref={ref}
        onClick={onClick}
        style={style}
        className={cn(
          'rounded-xl border transition-all duration-300',
          {
            'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700': !glass,
            'glass dark:glass-dark': glass,
            'hover:shadow-xl hover:scale-[1.02] cursor-pointer': hover,
            'shadow-glow': glow,
            'shadow-lg': !glow,
          },
          className
        )}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'

interface CardHeaderProps {
  children: ReactNode
  className?: string
}

export function CardHeader({ children, className }: CardHeaderProps) {
  return (
    <div className={cn('p-6 pb-4', className)}>
      {children}
    </div>
  )
}

interface CardContentProps {
  children: ReactNode
  className?: string
}

export function CardContent({ children, className }: CardContentProps) {
  return (
    <div className={cn('p-6 pt-0', className)}>
      {children}
    </div>
  )
}

interface CardFooterProps {
  children: ReactNode
  className?: string
}

export function CardFooter({ children, className }: CardFooterProps) {
  return (
    <div className={cn('p-6 pt-4 border-t border-gray-200 dark:border-gray-700', className)}>
      {children}
    </div>
  )
}

export default Card
