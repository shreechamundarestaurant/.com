import { MapPin, Navigation, Phone } from 'lucide-react'
import { ASSETS } from '../assets'
import { CONTACT, OPENING_HOURS, RESTAURANT_MAPS_URL } from '../constants/contact'
import { BrandWordmark } from './BrandWordmark'
import { Button } from './Button'
import { DecorativePattern } from './DecorativePattern'
import { OpeningHours } from './OpeningHours'

export function LocationSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6">
            <div>
              <p className="mb-2 text-xs font-semibold tracking-[0.28em] text-terracotta uppercase">
                Visit Us
              </p>
              <h2 className="font-display text-4xl font-semibold text-brown md:text-5xl">
                <BrandWordmark variant="full" />
              </h2>
              <DecorativePattern
                variant="divider"
                className="mt-4 h-3 w-48 text-gold"
                color="#C89B3C"
              />
            </div>

            <div className="flex gap-4">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-maroon" aria-hidden="true" />
              <p className="text-base leading-relaxed text-brown/75 md:text-lg">
                {CONTACT.address}
              </p>
            </div>

            <div>
              <h3 className="mb-3 font-display text-xl font-semibold text-brown">
                Opening Hours
              </h3>
              <OpeningHours variant="compact" />
            </div>

            <div className="flex gap-4">
              <Phone className="mt-1 h-5 w-5 shrink-0 text-maroon" aria-hidden="true" />
              <div>
                <h3 className="mb-1 font-display text-xl font-semibold text-brown">Phone</h3>
                <a
                  href={CONTACT.phoneHref}
                  className="text-brown/75 transition-colors hover:text-maroon"
                >
                  {CONTACT.phone}
                </a>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <Button href={RESTAURANT_MAPS_URL} external showArrow ariaLabel="Get directions on Google Maps">
                Get Directions
              </Button>
              <Button href={CONTACT.phoneHref} variant="outline">
                Call Now
              </Button>
              <Button href={CONTACT.whatsappUrl} external variant="outline">
                WhatsApp
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <a
              href={RESTAURANT_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl border border-brown/10 shadow-xl shadow-brown/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              aria-label="Open Chamunda Restaurant on Google Maps"
            >
              <img
                src={ASSETS.restaurantExterior}
                alt="Chamunda Restaurant exterior"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brown/70 via-brown/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 p-5 text-cream">
                <div>
                  <p className="text-xs tracking-[0.22em] uppercase opacity-80">Google Maps</p>
                  <p className="font-display text-lg font-semibold">Find us on the map</p>
                </div>
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-cream/15 backdrop-blur-sm transition-colors group-hover:bg-gold/30">
                  <Navigation className="h-5 w-5" aria-hidden="true" />
                </span>
              </div>
            </a>

            <div className="rounded-2xl border border-brown/8 bg-gradient-to-br from-sand/30 to-cream p-6">
              <p className="text-sm leading-relaxed text-brown/65">
                Tap the map card or use Get Directions to open the official{' '}
                <span className="font-medium text-brown">Shree Chamunda Restaurant</span> listing on
                Google Maps — {OPENING_HOURS.daily}, {OPENING_HOURS.daysLabel.toLowerCase()}.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
