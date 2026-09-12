import { FoodShowcase } from '../components/FoodShowcase'
import { HeritageSection } from '../components/HeritageSection'
import { Hero } from '../components/Hero'
import { HomePagePreviews } from '../components/HomePagePreviews'

export function Home() {
  return (
    <>
      <Hero />
      <HeritageSection />
      <FoodShowcase />
      <HomePagePreviews />
    </>
  )
}
