import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'light'

type ButtonProps = {
  children: ReactNode
  variant?: ButtonVariant
  href?: string
  to?: string
  external?: boolean
  className?: string
  showArrow?: boolean
  onClick?: () => void
  type?: 'button' | 'submit'
  ariaLabel?: string
}

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-maroon text-cream hover:bg-maroon/90 shadow-md shadow-maroon/20 active:scale-[0.98]',
  secondary:
    'bg-gold text-brown hover:bg-gold/90 shadow-md shadow-gold/20 active:scale-[0.98]',
  outline:
    'border border-brown/20 bg-transparent text-brown hover:border-maroon hover:text-maroon active:scale-[0.98]',
  ghost: 'bg-transparent text-brown hover:text-maroon active:scale-[0.98]',
  light:
    'border border-cream/30 bg-cream/10 text-cream backdrop-blur-sm hover:bg-cream/20 active:scale-[0.98]',
}

export function Button({
  children,
  variant = 'primary',
  href,
  to,
  external,
  className = '',
  showArrow = false,
  onClick,
  type = 'button',
  ariaLabel,
}: ButtonProps) {
  const base =
    'group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold'

  const classes = `${base} ${variants[variant]} ${className}`

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <ArrowRight
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden="true"
        />
      )}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={classes} aria-label={ariaLabel}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        aria-label={ariaLabel}
        onClick={onClick}
      >
        {content}
      </a>
    )
  }

  return (
    <button type={type} className={classes} onClick={onClick} aria-label={ariaLabel}>
      {content}
    </button>
  )
}
