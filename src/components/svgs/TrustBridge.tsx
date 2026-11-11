import { motion } from 'framer-motion'

export function TrustBridge() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-nw-slate p-4 sm:p-8">
      <div className="pointer-events-none absolute inset-0 grid-bg-light opacity-60" />
      <svg viewBox="0 0 900 220" className="relative z-10 h-auto w-full" role="img" aria-label="NexWorkforce trust bridge diagram">
        <defs>
          <linearGradient id="bridgeFlow" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="50%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#38BDF8" />
          </linearGradient>
          <filter id="hubGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="6" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Flow lines */}
        <path
          d="M160 110 H320"
          stroke="url(#bridgeFlow)"
          strokeWidth="3"
          strokeDasharray="8 8"
          className="animate-dash"
          fill="none"
        />
        <path
          d="M580 110 H740"
          stroke="url(#bridgeFlow)"
          strokeWidth="3"
          strokeDasharray="8 8"
          className="animate-dash"
          fill="none"
        />

        {/* Left node */}
        <g>
          <rect x="40" y="55" width="120" height="110" rx="16" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="2" />
          <circle cx="100" cy="90" r="16" fill="#0F172A" />
          <path d="M92 90h16M100 82v16" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
          <text x="100" y="125" textAnchor="middle" fill="#1E293B" fontSize="11" fontWeight="700" fontFamily="Space Grotesk, sans-serif">
            Global Tech
          </text>
          <text x="100" y="140" textAnchor="middle" fill="#64748B" fontSize="10" fontFamily="Plus Jakarta Sans, sans-serif">
            Manufacturers
          </text>
          <text x="100" y="154" textAnchor="middle" fill="#94A3B8" fontSize="9" fontFamily="Plus Jakarta Sans, sans-serif">
            Hardware R&amp;D
          </text>
        </g>

        {/* Center hub */}
        <g filter="url(#hubGlow)">
          <rect x="320" y="35" width="260" height="150" rx="20" fill="#0B1120" />
          <rect x="320" y="35" width="260" height="150" rx="20" fill="none" stroke="#2563EB" strokeWidth="2.5" />
          <circle cx="450" cy="78" r="18" fill="#2563EB" />
          <circle cx="442" cy="78" r="4" fill="#38BDF8" />
          <circle cx="458" cy="78" r="4" fill="#38BDF8" />
          <circle cx="450" cy="78" r="6" fill="#FFFFFF" opacity="0.9" />
          <text x="450" y="112" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontWeight="700" fontFamily="Space Grotesk, sans-serif">
            NexWorkforce Solutions
          </text>
          <text x="450" y="132" textAnchor="middle" fill="#38BDF8" fontSize="10" fontFamily="Plus Jakarta Sans, sans-serif">
            Local Integration • SG Spare Parts
          </text>
          <text x="450" y="148" textAnchor="middle" fill="#94A3B8" fontSize="10" fontFamily="Plus Jakarta Sans, sans-serif">
            24/7 SLA • AI Suite
          </text>
        </g>

        {/* Right node */}
        <g>
          <rect x="740" y="55" width="120" height="110" rx="16" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="2" />
          <circle cx="800" cy="90" r="16" fill="#2563EB" />
          <path d="M793 90h14M800 83v14" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
          <text x="800" y="125" textAnchor="middle" fill="#1E293B" fontSize="11" fontWeight="700" fontFamily="Space Grotesk, sans-serif">
            Singapore SMEs
          </text>
          <text x="800" y="142" textAnchor="middle" fill="#64748B" fontSize="9" fontFamily="Plus Jakarta Sans, sans-serif">
            Plug-and-Play
          </text>
          <text x="800" y="154" textAnchor="middle" fill="#94A3B8" fontSize="9" fontFamily="Plus Jakarta Sans, sans-serif">
            Productivity
          </text>
        </g>

        {/* Animated packets */}
        <motion.circle
          r="5"
          fill="#38BDF8"
          animate={{ cx: [160, 320], cy: [110, 110] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }}
        />
        <motion.circle
          r="5"
          fill="#2563EB"
          animate={{ cx: [580, 740], cy: [110, 110] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'linear', delay: 0.3 }}
        />
      </svg>
    </div>
  )
}
