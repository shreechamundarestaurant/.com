import { Home, MapPin, Phone, UtensilsCrossed } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { CONTACT, RESTAURANT_MAPS_URL } from '../constants/contact'

const actionItems = [
  { label: 'Call', href: CONTACT.phoneHref, icon: Phone, external: true },
  { label: 'Directions', href: RESTAURANT_MAPS_URL, icon: MapPin, external: false },
] as const

export function MobileBottomNav() {
  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-40 border-t border-brown/10 bg-cream/95 backdrop-blur-xl md:hidden"
      aria-label="Mobile bottom navigation"
    >
      <div className="safe-bottom grid grid-cols-4 gap-1 px-2 pt-2 pb-2">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `flex min-h-[52px] flex-col items-center justify-center gap-1 rounded-xl px-2 py-2.5 text-[10px] font-medium transition-colors active:bg-sand/40 ${
              isActive ? 'text-maroon' : 'text-brown/65'
            }`
          }
        >
          <Home className="h-5 w-5" aria-hidden="true" />
          Home
        </NavLink>

        <NavLink
          to="/menu"
          className={({ isActive }) =>
            `flex min-h-[52px] flex-col items-center justify-center gap-1 rounded-xl px-2 py-2.5 text-[10px] font-medium transition-colors active:bg-sand/40 ${
              isActive ? 'text-maroon' : 'text-brown/65'
            }`
          }
        >
          <UtensilsCrossed className="h-5 w-5" aria-hidden="true" />
          Menu
        </NavLink>

        {actionItems.map((item) => {
          const Icon = item.icon
          return (
            <a
              key={item.label}
              href={item.href}
              target={item.label === 'Directions' ? undefined : item.external ? '_blank' : undefined}
              rel={
                item.label === 'Directions'
                  ? undefined
                  : item.external
                    ? 'noopener noreferrer'
                    : undefined
              }
              className="flex min-h-[52px] flex-col items-center justify-center gap-1 rounded-xl px-2 py-2.5 text-[10px] font-medium text-brown/65 transition-colors active:bg-sand/40"
            >
              <Icon className="h-5 w-5" aria-hidden="true" />
              {item.label}
            </a>
          )
        })}
      </div>
    </nav>
  )
}
