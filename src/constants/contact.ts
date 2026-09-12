/** Official Shree Chamunda Restaurant Google Maps listing — use for all directions CTAs. */
export const RESTAURANT_MAPS_URL = 'https://maps.app.goo.gl/pE28uFiLAJHmbfLF9' as const

export const OPENING_HOURS = {
  daily: '7:30 AM – 11:30 PM',
  daysLabel: 'Monday – Sunday',
  schedule: [
    { day: 'Monday', hours: '7:30 AM – 11:30 PM' },
    { day: 'Tuesday', hours: '7:30 AM – 11:30 PM' },
    { day: 'Wednesday', hours: '7:30 AM – 11:30 PM' },
    { day: 'Thursday', hours: '7:30 AM – 11:30 PM' },
    { day: 'Friday', hours: '7:30 AM – 11:30 PM' },
    { day: 'Saturday', hours: '7:30 AM – 11:30 PM' },
    { day: 'Sunday', hours: '7:30 AM – 11:30 PM' },
  ],
} as const

export const CONTACT = {
  phone: '9898520602',
  phoneHref: 'tel:+919898520602',
  address:
    'Raj laxmi campus, police chowki, Mansarovar road, opp. Devadh gam, Godadara, Surat, Gujarat 395010',
  whatsappUrl: 'https://wa.me/919898520602',
  instagram: '#',
  facebook: '#',
} as const

export const RESTAURANT = {
  name: 'CHAMUNDA RESTAURANT',
  shortName: 'CHAMUNDA',
  tagline: 'Authentic Rajasthani Cuisine in Surat',
  city: 'Surat, Gujarat',
  areaLocation:
    'Block 58, Janta Bazar, Parvat Patiya, Varachha, Surat, Gujarat',
  cuisines: [
    'Rajasthani',
    'North Indian',
    'Chinese',
    'South Indian',
    'Fast Food',
  ] as const,
  vegetarian: true,
} as const
