import { motion } from 'framer-motion'
import { RestaurantMenu } from '../components/RestaurantMenu'
import { SectionHeading } from '../components/SectionHeading'
import { RESTAURANT } from '../constants/contact'
import { useReducedMotion } from '../hooks/useReducedMotion'

export function Menu() {
  const reduced = useReducedMotion()

  return (
    <div className="pt-28 pb-16 md:pt-32 md:pb-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <SectionHeading
            eyebrow="Pure Vegetarian"
            title="The Chamunda Menu"
            subtitle={`${RESTAURANT.cuisines.join(' · ')} — prepared with care in Surat.`}
            className="mb-10 md:mb-12"
          />
        </motion.div>

        <RestaurantMenu showCategoryNav />
      </div>
    </div>
  )
}
