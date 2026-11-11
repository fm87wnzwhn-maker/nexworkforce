type BrandLogoProps = {
  className?: string
  markOnly?: boolean
  light?: boolean
}

export function BrandLogo({ className = '', markOnly = false, light = false }: BrandLogoProps) {
  const textColor = light ? 'text-white' : 'text-nw-ink'

  return (
    <a href="#top" className={`inline-flex items-center gap-2.5 ${className}`} aria-label="NexWorkforce Solutions">
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <rect width="36" height="36" rx="9" fill={light ? '#0F172A' : '#0B1120'} />
        <circle cx="9" cy="18" r="3.2" fill="#38BDF8" />
        <circle cx="27" cy="18" r="3.2" fill="#38BDF8" />
        <circle cx="18" cy="18" r="4.4" fill="#2563EB" />
        <path
          d="M12.2 18h3.2M20.6 18h3.2"
          stroke="#38BDF8"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M18 13.6v-2.2M18 24.6v-2.2"
          stroke="#93C5FD"
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.8"
        />
      </svg>
      {!markOnly && (
        <span className={`font-display text-[15px] font-semibold leading-tight tracking-tight ${textColor}`}>
          NexWorkforce
          <span className={`block text-[11px] font-medium tracking-wide ${light ? 'text-slate-300' : 'text-slate-500'}`}>
            Solutions
          </span>
        </span>
      )}
    </a>
  )
}
