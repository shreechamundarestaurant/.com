/**
 * Public assets in public/assets/ — paths respect Vite BASE_URL for GitHub Pages.
 */
const base = import.meta.env.BASE_URL

export const ASSETS = {
  restaurantExterior: `${base}assets/PhotoshopExtension_Image%20(1).png`,
  dalBaatiThali: `${base}assets/ChatGPT%20Image%20Sep%2011,%202026,%2008_36_22%20PM.png`,
  desertVideo: `${base}assets/Animate_desert_scene_with_camel_20260911204655.mp4`,
} as const
