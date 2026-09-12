import { motion } from 'framer-motion'
import { DecorativePattern } from './DecorativePattern'
import { useReducedMotion } from '../hooks/useReducedMotion'

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  light?: boolean
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
  className = '',
}: SectionHeadingProps) {
  const reduced = useReducedMotion()
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start'

  return (
    <motion.div
      className={`flex flex-col gap-4 ${alignClass} ${className}`}
      initial={reduced ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {eyebrow && (
        <span
          className={`text-xs font-semibold tracking-[0.28em] uppercase ${
            light ? 'text-sand/80' : 'text-terracotta'
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display text-4xl leading-tight font-semibold tracking-tight md:text-5xl lg:text-6xl ${
          light ? 'text-cream' : 'text-brown'
        } text-balance`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`max-w-2xl text-base leading-relaxed md:text-lg ${
            light ? 'text-sand/85' : 'text-brown/70'
          } ${align === 'center' ? 'mx-auto' : ''}`}
        >
          {subtitle}
        </p>
      )}
      <DecorativePattern
        variant="divider"
        className={`h-3 w-48 ${align === 'center' ? 'mx-auto' : ''}`}
        color={light ? '#E8CFA0' : '#C89B3C'}
      />
    </motion.div>
  )
}
