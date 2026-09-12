import { Button } from './Button'
import { RestaurantMenu } from './RestaurantMenu'
import { SectionHeading } from './SectionHeading'

export function MenuPreview() {
  return (
    <section id="menu" className="scroll-mt-28 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Our Menu"
          title="Flavours Crafted With Tradition"
          subtitle="A pure vegetarian selection — Rajasthani heritage, North Indian classics, and more."
          className="mb-10 md:mb-12"
        />

        <RestaurantMenu showCategoryNav />

        <div className="mt-14 hidden justify-center md:flex">
          <Button to="/menu" variant="outline" showArrow>
            Open Menu Page
          </Button>
        </div>
      </div>
    </section>
  )
}
