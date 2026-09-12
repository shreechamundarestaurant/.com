import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { CONTACT, RESTAURANT_MAPS_URL } from '../constants/contact'
import { useScrollPosition } from '../hooks/useScrollPosition'
import { BrandWordmark } from './BrandWordmark'
import { Button } from './Button'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Menu', to: '/menu' },
  { label: 'About', to: '/about' },
  { label: 'Banquet', to: '/banquet' },
  { label: 'Contact', to: '/contact' },
]

function isNavActive(path: string, linkTo: string) {
  return path === linkTo
}

const navLinkClass = (active: boolean) =>
  `relative text-sm font-medium tracking-wide transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all hover:text-maroon hover:after:w-full ${
    active ? 'text-maroon after:w-full' : 'text-brown/75'
  }`

const mobileNavLinkClass = (active: boolean) =>
  `block rounded-xl px-4 py-3 text-lg font-medium transition-colors ${
    active ? 'bg-maroon/8 text-maroon' : 'text-brown/80 hover:bg-sand/30'
  }`

export function Navbar() {
  const scrolled = useScrollPosition(48)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const isHome = location.pathname === '/'
  const transparent = isHome && !scrolled

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          transparent
            ? 'bg-transparent'
            : 'border-b border-brown/5 bg-cream/85 shadow-sm shadow-brown/5 backdrop-blur-xl'
        }`}
      >
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8"
          aria-label="Main navigation"
        >
          <Link
            to="/"
            className={`font-display text-xl font-bold tracking-[0.12em] transition-colors md:text-2xl ${
              transparent ? 'text-brown' : 'text-maroon'
            }`}
          >
            <BrandWordmark />
          </Link>

          <ul className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <li key={link.label}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={navLinkClass(
                    isNavActive(location.pathname, link.to),
                  )}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Button
              href={RESTAURANT_MAPS_URL}
              external
              variant={transparent ? 'outline' : 'primary'}
              showArrow
            >
              Get Directions
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brown/10 bg-cream/60 text-brown lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-brown/40 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              className="fixed inset-y-0 right-0 z-50 flex w-[min(88vw,360px)] flex-col bg-cream px-6 py-8 shadow-2xl lg:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 260 }}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
            >
              <div className="mb-10 flex items-center justify-between">
                <span className="font-display text-2xl font-bold text-maroon">
                  <BrandWordmark />
                </span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brown/10"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <ul className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i }}
                  >
                    <NavLink
                      to={link.to}
                      end={link.to === '/'}
                      className={mobileNavLinkClass(
                        isNavActive(location.pathname, link.to),
                      )}
                    >
                      {link.label}
                    </NavLink>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-auto flex flex-col gap-3 pt-8">
                <Button href={RESTAURANT_MAPS_URL} external showArrow>
                  Get Directions
                </Button>
                <Button href={CONTACT.phoneHref} variant="outline">
                  Call Now
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
