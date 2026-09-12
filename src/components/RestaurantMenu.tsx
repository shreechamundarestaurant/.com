import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { menuCategories } from '../data/menu'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { DecorativePattern } from './DecorativePattern'

type RestaurantMenuProps = {
  showCategoryNav?: boolean
  className?: string
}

function slugifyCategory(id: string) {
  return `menu-cat-${id}`
}

export function RestaurantMenu({ showCategoryNav = true, className = '' }: RestaurantMenuProps) {
  const reduced = useReducedMotion()
  const [activeId, setActiveId] = useState(menuCategories[0]?.id ?? '')
  const navRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!showCategoryNav) return

    const observers: IntersectionObserver[] = []

    menuCategories.forEach((category) => {
      const el = document.getElementById(slugifyCategory(category.id))
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(category.id)
        },
        { rootMargin: '-30% 0px -55% 0px', threshold: 0 },
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [showCategoryNav])

  const scrollToCategory = (id: string) => {
    const el = document.getElementById(slugifyCategory(id))
    if (!el) return
    const offset = 120
    const top = el.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top, behavior: reduced ? 'auto' : 'smooth' })
    setActiveId(id)

    navRef.current
      ?.querySelector(`[data-cat="${id}"]`)
      ?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
  }

  return (
    <div className={className}>
      {showCategoryNav && (
        <div
          ref={navRef}
          className="sticky top-[4.5rem] z-30 -mx-5 mb-10 border-b border-brown/8 bg-cream/95 px-5 py-3 backdrop-blur-xl md:top-20 md:mx-0 md:rounded-full md:border md:px-4 md:py-2"
        >
          <div className="hide-scrollbar flex gap-2 overflow-x-auto md:flex-wrap md:justify-center">
            {menuCategories.map((category) => (
              <button
                key={category.id}
                type="button"
                data-cat={category.id}
                onClick={() => scrollToCategory(category.id)}
                className={`shrink-0 rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition-all md:text-sm ${
                  activeId === category.id
                    ? 'bg-maroon text-cream shadow-md shadow-maroon/15'
                    : 'bg-sand/40 text-brown/75 hover:bg-sand/70'
                }`}
              >
                {category.shortLabel}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="space-y-16 md:space-y-20">
        {menuCategories.map((category, catIndex) => (
          <motion.section
            key={category.id}
            id={slugifyCategory(category.id)}
            className="scroll-mt-32"
            aria-labelledby={`heading-${category.id}`}
            initial={reduced ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, delay: catIndex * 0.04 }}
          >
            <div className="mb-8 flex flex-col gap-3 md:mb-10">
              <span className="text-xs font-semibold tracking-[0.35em] text-gold uppercase">
                Category {category.number}
              </span>
              <h3
                id={`heading-${category.id}`}
                className="font-display text-3xl font-semibold text-maroon md:text-4xl"
              >
                {category.title}
              </h3>
              <DecorativePattern
                variant="divider"
                className="h-3 w-full max-w-md text-terracotta/60"
                color="#C89B3C"
              />
            </div>

            <ul
              className={`grid gap-x-12 gap-y-0 ${
                category.items.length > 8
                  ? 'md:grid-cols-2'
                  : category.items.length > 4
                    ? 'md:grid-cols-2'
                    : 'md:grid-cols-1'
              }`}
            >
              {category.items.map((dish) => (
                <li key={dish} className="group border-b border-brown/8 last:border-b-0">
                  <motion.span
                    className="flex items-center py-3.5 text-base text-brown/85 transition-colors group-hover:text-maroon md:text-[1.05rem]"
                    whileHover={reduced ? undefined : { x: 3 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                  >
                    <span
                      className="mr-3 h-px w-0 bg-gold transition-all duration-300 group-hover:w-4"
                      aria-hidden="true"
                    />
                    {dish}
                  </motion.span>
                </li>
              ))}
            </ul>
          </motion.section>
        ))}
      </div>
    </div>
  )
}
