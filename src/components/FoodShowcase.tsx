import { motion } from 'framer-motion'
import { Leaf, Sparkles } from 'lucide-react'
import { ASSETS } from '../assets'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { Button } from './Button'
import { DecorativePattern } from './DecorativePattern'
import { SectionHeading } from './SectionHeading'

const floatTransition = {
  duration: 7,
  repeat: Infinity,
  repeatType: 'mirror' as const,
  ease: 'easeInOut' as const,
}

export function FoodShowcase() {
  const reduced = useReducedMotion()

  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-cream via-sand/20 to-cream" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Signature Dish"
          title="The Soul of Rajasthani Cuisine"
          subtitle="Dal • Baati • Churma"
          className="mb-16 md:mb-20"
        />

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative mx-auto flex w-full max-w-lg items-center justify-center lg:max-w-none">
            <DecorativePattern
              variant="ring"
              className="absolute inset-0 m-auto h-[110%] w-[110%] text-gold/30"
              color="#C89B3C"
            />

            {!reduced && (
              <>
                <motion.div
                  className="absolute top-6 left-8 text-gold/50"
                  animate={{ y: [-5, 5], rotate: [-8, 8] }}
                  transition={{ ...floatTransition, duration: 6 }}
                  aria-hidden="true"
                >
                  <Sparkles className="h-5 w-5" />
                </motion.div>
                <motion.div
                  className="absolute right-10 bottom-10 text-terracotta/40"
                  animate={{ y: [4, -4], rotate: [6, -6] }}
                  transition={{ ...floatTransition, duration: 8 }}
                  aria-hidden="true"
                >
                  <Leaf className="h-6 w-6" />
                </motion.div>
              </>
            )}

            <motion.div
              className="relative z-10 w-full max-w-md lg:max-w-lg"
              initial={reduced ? false : { opacity: 0, scale: 0.9, y: 48 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.img
                src={ASSETS.dalBaatiThali}
                alt="Dal Baati Churma Thali"
                className="w-full object-contain drop-shadow-[0_40px_80px_rgba(43,23,16,0.2)]"
                width={560}
                height={560}
                loading="lazy"
                animate={
                  reduced
                    ? undefined
                    : {
                        y: [-5, 5],
                        rotate: [-0.5, 0.5],
                      }
                }
                transition={reduced ? undefined : floatTransition}
              />
            </motion.div>
          </div>

          <motion.div
            className="flex flex-col gap-6"
            initial={reduced ? false : { opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          >
            <h3 className="font-display text-3xl font-semibold text-maroon md:text-4xl">
              Dal Baati Thali
            </h3>
            <p className="text-base leading-relaxed text-brown/75 md:text-lg">
              A timeless Rajasthani combination — ghee-laden baati, aromatic dal, and sweet
              churma — brought together on one regal platter. Slow-crafted using traditional
              methods, each element celebrates the desert kingdom&apos;s culinary heritage.
            </p>
            <p className="text-base leading-relaxed text-brown/65">
              At Chamunda, this signature thali is more than a meal. It is an invitation to
              experience the warmth, richness and ritual of Rajasthani dining.
            </p>
            <div className="pt-2">
              <Button to="/menu" variant="secondary" showArrow>
                View Full Menu
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
