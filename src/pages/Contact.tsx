import { motion } from 'framer-motion'
import { Mail, MessageCircle } from 'lucide-react'
import { CONTACT, OPENING_HOURS, RESTAURANT } from '../constants/contact'
import { LocationSection } from '../components/LocationSection'
import { SectionHeading } from '../components/SectionHeading'
import { Button } from '../components/Button'
import { useReducedMotion } from '../hooks/useReducedMotion'

export function Contact() {
  const reduced = useReducedMotion()

  return (
    <>
      <section className="pt-28 pb-12 md:pt-32 md:pb-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            eyebrow="Get in Touch"
            title="We'd Love to Hear From You"
            subtitle="Reach out for reservations, banquet inquiries, or any questions about dining at Chamunda."
            className="mb-12"
          />

          <motion.div
            className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3"
            initial={reduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="rounded-2xl border border-brown/8 bg-sand/20 p-6 text-center">
              <MessageCircle className="mx-auto mb-3 h-7 w-7 text-maroon" />
              <h3 className="mb-2 font-display text-xl font-semibold">WhatsApp</h3>
              <p className="mb-4 text-sm text-brown/65">Quick messages and inquiries</p>
              <Button href={CONTACT.whatsappUrl} external variant="outline" className="w-full">
                WhatsApp Us
              </Button>
            </div>

            <div className="rounded-2xl border border-brown/8 bg-sand/20 p-6 text-center">
              <Mail className="mx-auto mb-3 h-7 w-7 text-maroon" />
              <h3 className="mb-2 font-display text-xl font-semibold">Banquet Inquiries</h3>
              <p className="mb-4 text-sm text-brown/65">
                Plan celebrations at {RESTAURANT.shortName}
              </p>
              <Button to="/banquet" variant="outline" className="w-full">
                Plan Your Celebration
              </Button>
            </div>

            <div className="rounded-2xl border border-brown/8 bg-sand/20 p-6 text-center">
              <h3 className="mb-2 font-display text-xl font-semibold">Call Us</h3>
              <p className="mb-1 text-sm text-brown/65">{CONTACT.phone}</p>
              <p className="mb-4 text-xs text-brown/50">
                {OPENING_HOURS.daily} · {OPENING_HOURS.daysLabel}
              </p>
              <Button href={CONTACT.phoneHref} variant="primary" className="w-full">
                Call Now
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <LocationSection />
    </>
  )
}
