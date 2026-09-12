import { motion } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { Button } from './Button'

const previews = [
  {
    eyebrow: 'Our Menu',
    title: 'Flavours Crafted With Tradition',
    subtitle:
      'A pure vegetarian selection — Rajasthani heritage, North Indian classics, and more.',
    to: '/menu',
    cta: 'Explore Menu',
  },
  {
    eyebrow: 'More Than a Meal',
    title: 'An Experience of Rajasthan',
    subtitle:
      'Traditional food, family-friendly dining, and the warmth of Rajasthan in Surat.',
    to: '/about',
    cta: 'Our Story',
  },
  {
    eyebrow: 'Banquet Hall',
    title: 'Celebrate With Us',
    subtitle: 'Your moments deserve a royal setting — parties, gatherings and celebrations.',
    to: '/banquet',
    cta: 'Plan Your Celebration',
  },
  {
    eyebrow: 'Visit Us',
    title: 'Come Experience the Taste of Rajasthan',
    subtitle: 'Address, hours, directions and contact — we look forward to welcoming you.',
    to: '/contact',
    cta: 'Get in Touch',
  },
]

export function HomePagePreviews() {
  const reduced = useReducedMotion()

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {previews.map((item, index) => (
            <motion.article
              key={item.to}
              className="flex flex-col gap-5 rounded-2xl border border-brown/8 bg-cream/80 p-8 shadow-sm"
              initial={reduced ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
            >
              <div className="space-y-2">
                <span className="text-xs font-semibold tracking-[0.28em] text-terracotta uppercase">
                  {item.eyebrow}
                </span>
                <h3 className="font-display text-2xl font-semibold text-maroon md:text-3xl">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-brown/65 md:text-base">
                  {item.subtitle}
                </p>
              </div>
              <Button to={item.to} variant="outline" showArrow className="mt-auto w-fit">
                {item.cta}
              </Button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
