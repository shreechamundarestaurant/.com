import { motion } from 'framer-motion'
import { ASSETS } from '../assets'
import { RESTAURANT } from '../constants/contact'
import { DecorativePattern } from '../components/DecorativePattern'
import { RestaurantSection } from '../components/RestaurantSection'
import { SectionHeading } from '../components/SectionHeading'
import { WhyChamunda } from '../components/WhyChamunda'
import { useReducedMotion } from '../hooks/useReducedMotion'

export function About() {
  const reduced = useReducedMotion()

  return (
    <>
      <section className="grain parchment-gradient pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            eyebrow="Our Story"
            title="A Taste of Rajasthan in Surat"
            subtitle={`Pure vegetarian dining — ${RESTAURANT.cuisines.join(', ')} — in ${RESTAURANT.city}.`}
            className="mb-14"
          />

          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              className="relative"
              initial={reduced ? false : { opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="overflow-hidden rounded-2xl border border-brown/10 shadow-xl">
                <img
                  src={ASSETS.restaurantExterior}
                  alt="Chamunda Restaurant"
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                />
              </div>
              <DecorativePattern
                variant="corner"
                className="absolute -bottom-3 -left-3 h-10 w-10 text-gold/50"
                color="#C89B3C"
              />
            </motion.div>

            <motion.div
              className="space-y-5 text-base leading-relaxed text-brown/75 md:text-lg"
              initial={reduced ? false : { opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <p>
                Born from a love for authentic Rajasthani cuisine, Chamunda celebrates the
                timeless trio of Dal Baati and Churma — alongside generous thalis, multi-cuisine
                favourites and a welcoming space for families.
              </p>
              <p>
                Every dish reflects the warmth of desert kitchens: slow cooking, bold spices,
                and the generous spirit of Rajasthani hospitality. Whether you&apos;re here for a
                quiet family dinner or a grand celebration, our team ensures every visit feels
                special.
              </p>
              <p>
                {RESTAURANT.areaLocation}. We invite you to experience tradition reimagined for
                modern dining — without losing the soul of where it all began.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <RestaurantSection />
      <WhyChamunda />
    </>
  )
}
