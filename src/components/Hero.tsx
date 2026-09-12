import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { ASSETS } from '../assets'
import { RESTAURANT_MAPS_URL } from '../constants/contact'
import { useParallax } from '../hooks/useParallax'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { Button } from './Button'
import { DecorativePattern } from './DecorativePattern'

const floatTransition = {
  duration: 6,
  repeat: Infinity,
  repeatType: 'mirror' as const,
  ease: 'easeInOut' as const,
}

export function Hero() {
  const reduced = useReducedMotion()
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    setIsDesktop(mq.matches)
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  const parallax = useParallax(isDesktop && !reduced, 0.35)

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduced ? 0 : 0.12, delayChildren: reduced ? 0 : 0.15 },
    },
  }

  const item = {
    hidden: { opacity: 0, y: reduced ? 0 : 28 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
    },
  }

  return (
    <section className="relative min-h-[92vh] overflow-hidden pb-16 md:min-h-screen md:pb-24">
      <div
        className="grain parchment-gradient absolute inset-0"
        style={{
          transform: reduced ? undefined : `translate(${parallax.x}px, ${parallax.y}px)`,
        }}
      />

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute bottom-0 -left-16 h-64 w-64 rounded-full bg-terracotta/10 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 pt-28 md:px-8 md:pt-32 lg:grid-cols-2 lg:gap-8 lg:pt-36">
        <motion.div
          className="z-10 flex flex-col gap-6 md:gap-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.span
            variants={item}
            className="text-xs font-semibold tracking-[0.32em] text-terracotta uppercase"
          >
            Authentic Rajasthani Cuisine
          </motion.span>

          <motion.div variants={item} className="space-y-2">
            <p className="font-display text-sm tracking-[0.35em] text-brown/50 uppercase md:text-base">
              Authentic · Rajasthani · Flavours
            </p>
            <h1 className="font-display text-[2.4rem] leading-[1.05] font-semibold text-brown md:text-6xl lg:text-7xl">
              Where Every Bite
              <br />
              <span className="text-maroon">Tells a Rajasthani Story</span>
            </h1>
          </motion.div>

          <motion.p
            variants={item}
            className="max-w-lg text-base leading-relaxed text-brown/70 md:text-lg"
          >
            Traditional Dal Baati, Churma &amp; Thali — served with the warmth of Rajasthan in
            Surat.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-3 pt-2">
            <Button to="/menu" variant="primary" showArrow>
              Explore Menu
            </Button>
            <Button href={RESTAURANT_MAPS_URL} external variant="outline" showArrow>
              Get Directions
            </Button>
          </motion.div>
        </motion.div>

        <div className="relative mx-auto flex w-full max-w-xl items-center justify-center lg:max-w-none">
          {!reduced && (
            <>
              <motion.div
                className="absolute top-8 right-8 text-gold/40"
                animate={{ y: [-4, 4], rotate: [-2, 2] }}
                transition={{ ...floatTransition, duration: 7 }}
                aria-hidden="true"
              >
                <DecorativePattern variant="corner" className="h-12 w-12" color="#C89B3C" />
              </motion.div>
              <motion.div
                className="absolute bottom-16 left-4 text-terracotta/30"
                animate={{ y: [3, -3], rotate: [1, -1] }}
                transition={{ ...floatTransition, duration: 8 }}
                aria-hidden="true"
              >
                <DecorativePattern variant="corner" className="h-10 w-10" color="#B94E2E" />
              </motion.div>
            </>
          )}

          <motion.div
            className="relative w-full"
            initial={
              reduced
                ? false
                : { opacity: 0, scale: 0.85, y: 40, rotate: -1.5 }
            }
            animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <motion.div
              animate={
                reduced
                  ? undefined
                  : {
                      y: [-6, 6],
                      rotate: [-0.8, 0.8],
                    }
              }
              transition={reduced ? undefined : floatTransition}
              whileHover={reduced ? undefined : { scale: 1.02, rotate: 0.5 }}
              className="relative"
            >
              <div
                className="absolute inset-[12%] rounded-full bg-brown/15 blur-3xl"
                aria-hidden="true"
              />
              <img
                src={ASSETS.dalBaatiThali}
                alt="Rajasthani Dal Baati Churma Thali"
                className="relative z-10 mx-auto w-full max-w-md object-contain drop-shadow-[0_30px_60px_rgba(43,23,16,0.25)] md:max-w-lg lg:max-w-xl"
                width={640}
                height={640}
                fetchPriority="high"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
