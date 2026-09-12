import { motion } from 'framer-motion'
import { ChefHat, Globe2, PartyPopper, Users } from 'lucide-react'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { SectionHeading } from './SectionHeading'

const features = [
  {
    icon: ChefHat,
    title: 'Authentic Flavours',
    description: 'Traditional Rajasthani taste crafted with time-honoured recipes.',
  },
  {
    icon: Users,
    title: 'Family Dining',
    description: 'A welcoming atmosphere designed for families and shared meals.',
  },
  {
    icon: PartyPopper,
    title: 'Banquet & Celebrations',
    description: 'Ideal for parties, gatherings and special occasions.',
  },
  {
    icon: Globe2,
    title: 'Multi-Cuisine',
    description: 'More choices beyond Rajasthani favourites for every palate.',
  },
]

export function WhyChamunda() {
  const reduced = useReducedMotion()

  return (
    <section className="bg-sand/25 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Why Chamunda"
          title="Crafted for Every Occasion"
          subtitle="Heritage flavours, modern hospitality, and a setting that feels like home."
          className="mb-14 md:mb-16"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="rounded-2xl border border-brown/8 bg-cream/80 p-6 shadow-sm backdrop-blur-sm"
              initial={reduced ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              whileHover={{ y: -4 }}
            >
              <feature.icon
                className="mb-4 h-7 w-7 stroke-[1.25] text-maroon"
                aria-hidden="true"
              />
              <h3 className="mb-2 font-display text-xl font-semibold text-brown">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-brown/65">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
