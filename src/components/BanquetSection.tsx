import { motion } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { Button } from './Button'
import { DecorativePattern } from './DecorativePattern'
import { SectionHeading } from './SectionHeading'

export function BanquetSection() {
  const reduced = useReducedMotion()

  return (
    <section id="banquet" className="relative overflow-hidden pb-20 pt-32 md:pb-28 md:pt-36">
      <div className="absolute inset-0 bg-maroon" />
      <DecorativePattern
        variant="border"
        className="pointer-events-none absolute inset-4 opacity-30 md:inset-8"
        color="#C89B3C"
      />
      <DecorativePattern
        variant="border"
        className="pointer-events-none absolute inset-8 rotate-180 opacity-20 md:inset-16"
        color="#E8CFA0"
      />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8 }}
        >
          <SectionHeading
            eyebrow="Banquet Hall"
            title="Celebrate With Us"
            subtitle="Your moments deserve a royal setting."
            light
            className="mb-8"
          />
          <p className="mx-auto mb-10 max-w-2xl text-center text-base leading-relaxed text-sand/85 md:text-lg">
            Host birthdays, anniversaries, corporate gatherings and festive celebrations in our
            spacious banquet hall. Custom menus, attentive service and an ambiance inspired by
            Rajasthani grandeur — all under one roof.
          </p>
          <div className="flex justify-center">
            <Button to="/contact" variant="secondary" showArrow>
              Plan Your Celebration
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
