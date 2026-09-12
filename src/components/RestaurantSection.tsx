import { motion } from 'framer-motion'
import { ASSETS } from '../assets'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { DecorativePattern } from './DecorativePattern'

export function RestaurantSection() {
  const reduced = useReducedMotion()

  return (
    <section className="overflow-hidden py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-8 lg:grid-cols-2 lg:gap-16">
        <motion.div
          className="relative"
          initial={reduced ? false : { opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <DecorativePattern
            variant="corner"
            className="absolute -top-3 -left-3 h-10 w-10 text-gold/40"
            color="#C89B3C"
          />
          <div className="overflow-hidden rounded-2xl border border-brown/10 shadow-xl shadow-brown/10">
            <img
              src={ASSETS.restaurantExterior}
              alt="Chamunda Restaurant exterior in Surat"
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
          </div>
          <DecorativePattern
            variant="corner"
            className="absolute -right-3 -bottom-3 h-10 w-10 rotate-180 text-gold/40"
            color="#C89B3C"
          />
        </motion.div>

        <motion.div
          className="flex flex-col gap-6"
          initial={reduced ? false : { opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
          <span className="text-xs font-semibold tracking-[0.28em] text-terracotta uppercase">
            More Than a Meal
          </span>
          <h2 className="font-display text-4xl font-semibold text-brown md:text-5xl">
            An Experience of Rajasthan
          </h2>
          <DecorativePattern variant="divider" className="h-3 w-40 text-gold" color="#C89B3C" />
          <p className="text-base leading-relaxed text-brown/75 md:text-lg">
            Step into a space where the aromas of ghee, spices and slow-cooked dal transport you
            to the royal kitchens of Rajasthan. Chamunda celebrates tradition while welcoming
            families, friends and celebrations with open arms.
          </p>
          <p className="text-base leading-relaxed text-brown/65">
            From intimate dinners to grand gatherings, every visit is crafted to feel warm,
            generous and unmistakably authentic — right here in Surat.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
