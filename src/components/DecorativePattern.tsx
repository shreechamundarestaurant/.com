type DecorativePatternProps = {
  className?: string
  variant?: 'corner' | 'divider' | 'border' | 'ring'
  color?: string
}

export function DecorativePattern({
  className = '',
  variant = 'corner',
  color = 'currentColor',
}: DecorativePatternProps) {
  if (variant === 'divider') {
    return (
      <svg
        className={className}
        viewBox="0 0 240 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M0 6h88M152 6h88M120 6l-8-6 8 6-8 6 8-6 8 6-8-6 8-6-8-6z"
          stroke={color}
          strokeWidth="0.75"
          strokeLinecap="round"
        />
      </svg>
    )
  }

  if (variant === 'ring') {
    return (
      <svg
        className={className}
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle cx="200" cy="200" r="190" stroke={color} strokeWidth="0.5" opacity="0.4" />
        <circle cx="200" cy="200" r="170" stroke={color} strokeWidth="0.5" opacity="0.25" />
        <path
          d="M200 10v20M200 370v20M10 200h20M370 200h20M56 56l14 14M330 330l14 14M56 344l14-14M330 70l14-14"
          stroke={color}
          strokeWidth="0.75"
          opacity="0.35"
        />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
          <rect
            key={deg}
            x="196"
            y="24"
            width="8"
            height="8"
            fill={color}
            opacity="0.2"
            transform={`rotate(${deg} 200 200)`}
          />
        ))}
      </svg>
    )
  }

  if (variant === 'border') {
    return (
      <svg
        className={className}
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M0 0h20v2H2v18H0M100 0H80v2h18v18h2M0 100h20v-2H2V80H0M100 100H80v-2h18V80h2"
          stroke={color}
          strokeWidth="0.5"
          opacity="0.5"
        />
      </svg>
    )
  }

  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M2 2h12v2H4v10H2M46 2H34v2h10v10h2M2 46h12v-2H4V34H2M46 46H34v-2h10V34h2"
        stroke={color}
        strokeWidth="0.75"
        opacity="0.45"
      />
      <circle cx="24" cy="24" r="3" fill={color} opacity="0.25" />
    </svg>
  )
}
