type BrandWordmarkProps = {
  variant?: 'compact' | 'full'
}

export function BrandWordmark({ variant = 'compact' }: BrandWordmarkProps) {
  return (
    <span className="inline-flex items-baseline gap-1.5">
      <span className="text-[0.52em] font-semibold leading-none tracking-[0.18em]">
        SHREE
      </span>
      <span className="leading-none">
        {variant === 'full' ? 'CHAMUNDA RESTAURANT' : 'CHAMUNDA'}
      </span>
    </span>
  )
}
