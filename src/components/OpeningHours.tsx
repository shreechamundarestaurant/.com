import { ChevronDown } from 'lucide-react'
import { OPENING_HOURS } from '../constants/contact'
import { DecorativePattern } from './DecorativePattern'

type OpeningHoursProps = {
  variant?: 'compact' | 'full'
  className?: string
}

export function OpeningHours({ variant = 'full', className = '' }: OpeningHoursProps) {
  if (variant === 'compact') {
    return (
      <div className={className}>
        <p className="font-display text-2xl font-semibold text-maroon md:text-3xl">
          {OPENING_HOURS.daily}
        </p>
        <p className="mt-1 text-sm tracking-wide text-brown/65 uppercase">
          {OPENING_HOURS.daysLabel}
        </p>

        <details className="group mt-4 md:hidden">
          <summary className="flex cursor-pointer list-none items-center justify-between rounded-xl border border-brown/10 bg-cream/80 px-4 py-3 text-sm font-medium text-brown">
            View daily schedule
            <ChevronDown
              className="h-4 w-4 transition-transform group-open:rotate-180"
              aria-hidden="true"
            />
          </summary>
          <ul className="mt-2 space-y-2 rounded-xl border border-brown/8 bg-sand/15 px-4 py-3">
            {OPENING_HOURS.schedule.map((row) => (
              <li
                key={row.day}
                className="flex justify-between gap-4 text-sm text-brown/75"
              >
                <span>{row.day}</span>
                <span className="text-brown/60">{row.hours}</span>
              </li>
            ))}
          </ul>
        </details>

        <ul className="mt-4 hidden space-y-2 md:block">
          {OPENING_HOURS.schedule.map((row) => (
            <li
              key={row.day}
              className="flex justify-between gap-6 border-b border-brown/8 py-2 text-sm last:border-0"
            >
              <span className="text-brown/80">{row.day}</span>
              <span className="text-brown/60">{row.hours}</span>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  return (
    <div className={`rounded-2xl border border-brown/8 bg-cream/60 p-6 ${className}`}>
      <DecorativePattern variant="divider" className="mb-4 h-3 w-32 text-gold" color="#C89B3C" />
      <p className="font-display text-3xl font-semibold text-maroon">{OPENING_HOURS.daily}</p>
      <p className="mt-1 text-sm tracking-[0.2em] text-terracotta uppercase">
        {OPENING_HOURS.daysLabel}
      </p>
      <ul className="mt-6 space-y-2">
        {OPENING_HOURS.schedule.map((row) => (
          <li
            key={row.day}
            className="flex justify-between gap-4 border-b border-brown/6 py-2.5 text-sm last:border-0"
          >
            <span className="font-medium text-brown/85">{row.day}</span>
            <span className="text-brown/60">{row.hours}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
