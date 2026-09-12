/** Strip trailing slash for React Router `basename` (e.g. `/.com/` → `/.com`). */
export function getRouterBasename() {
  const base = import.meta.env.BASE_URL
  if (base === '/') return undefined
  return base.replace(/\/$/, '')
}
