import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { twMerge } from '@/utils/cn'

type ButtonProps = {
  children: ReactNode
  to?: string
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit'
  variant?: 'primary' | 'secondary' | 'ghost' | 'light'
  className?: string
  target?: string
  rel?: string
  ariaLabel?: string
  disabled?: boolean
}

const variants = {
  primary: 'bg-brand text-paper hover:bg-brand-deep border border-brand',
  secondary: 'bg-brand-deep text-paper hover:bg-brand border border-brand-deep',
  ghost:
    'bg-transparent text-night border border-line hover:border-brand hover:text-brand',
  light: 'bg-paper text-night hover:bg-white border border-paper',
}

export function Button({
  children,
  to,
  href,
  onClick,
  type = 'button',
  variant = 'primary',
  className,
  target,
  rel,
  ariaLabel,
  disabled,
}: ButtonProps) {
  const classes = twMerge(
    'inline-flex items-center justify-center gap-2 px-8 py-3.5 text-[11px] font-semibold uppercase tracking-[0.22em] transition-all duration-300',
    variants[variant],
    disabled && 'cursor-not-allowed opacity-60',
    className,
  )

  if (to) {
    return (
      <Link to={to} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} target={target} rel={rel} aria-label={ariaLabel}>
        {children}
      </a>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      aria-label={ariaLabel}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
