import { copyFileSync, existsSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const destDir = join(root, 'public', 'assets')

const files = [
  'PhotoshopExtension_Image (1).png',
  'ChatGPT Image Sep 11, 2026, 08_36_22 PM.png',
  'Animate_desert_scene_with_camel_20260911204655.mp4',
]

mkdirSync(destDir, { recursive: true })

const downloads = join(process.env.USERPROFILE || '', 'Downloads')

let copied = 0
for (const file of files) {
  const candidates = [join(root, file), join(downloads, file)]
  const src = candidates.find((p) => existsSync(p))
  const dest = join(destDir, file)
  if (src) {
    copyFileSync(src, dest)
    copied++
    console.log(`✓ Copied ${file}`)
  } else {
    console.warn(`⚠ Missing ${file} — place it in the project root or Downloads and re-run`)
  }
}

console.log(copied === files.length ? '\nAll assets ready.' : `\n${copied}/${files.length} assets copied.`)
