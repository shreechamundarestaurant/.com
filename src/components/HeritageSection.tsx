import { motion } from 'framer-motion'
import { ASSETS } from '../assets'
import { useReducedMotion } from '../hooks/useReducedMotion'

export function HeritageSection() {
  const reduced = useReducedMotion()

  return (
    <section className="relative w-full overflow-hidden bg-brown">
      <div className="relative aspect-[16/10] w-full max-w-[100vw] md:aspect-[16/8] lg:aspect-[21/9]">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster={ASSETS.restaurantExterior}
          aria-label="Animated Rajasthani desert scene with camel"
        >
          <source src={ASSETS.desertVideo} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-t from-brown/75 via-brown/20 to-brown/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-brown/40 via-transparent to-brown/30" />

        <div className="absolute inset-0 flex items-end md:items-center">
          <div className="mx-auto w-full max-w-7xl px-5 py-12 md:px-8 md:py-16">
            <motion.div
              className="max-w-xl md:max-w-2xl"
              initial={reduced ? false : { opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="mb-3 text-xs font-semibold tracking-[0.32em] text-gold uppercase">
                From the Heart of Rajasthan
              </p>
              <h2 className="font-display text-3xl leading-tight font-semibold text-cream md:text-5xl lg:text-6xl">
                Tradition Served on Every Plate
              </h2>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-sand/90 md:text-lg">
                Rooted in the rich flavours and hospitality of Rajasthan, Chamunda brings an
                authentic dining experience to Surat.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
