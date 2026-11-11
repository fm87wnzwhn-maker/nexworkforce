import { motion } from 'framer-motion'

export function FloorMap() {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <p className="font-display text-sm font-semibold text-nw-ink">Warehouse Floor Simulation</p>
          <p className="text-xs text-slate-500">Aisle 1–4 · Packing Station · Live AGV routing</p>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-md bg-amber-50 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-amber-700">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
          Congestion · Aisle 3
        </span>
      </div>

      <svg viewBox="0 0 480 340" className="h-auto w-full" role="img" aria-label="Animated warehouse floor map">
        <defs>
          <pattern id="floorTiles" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M20 0H0V20" fill="none" stroke="#E2E8F0" strokeWidth="0.8" />
          </pattern>
        </defs>

        <rect x="8" y="8" width="464" height="324" rx="12" fill="#F8FAFC" stroke="#E2E8F0" />
        <rect x="24" y="36" width="432" height="272" fill="url(#floorTiles)" />

        {/* Aisle racks */}
        {[0, 1, 2, 3].map((i) => (
          <g key={i}>
            <rect x={48 + i * 90} y="52" width="28" height="200" rx="4" fill="#0F172A" opacity="0.9" />
            <rect x={48 + i * 90 + 4} y="60" width="20" height="8" rx="1" fill="#2563EB" opacity="0.5" />
            <rect x={48 + i * 90 + 4} y="80" width="20" height="8" rx="1" fill="#38BDF8" opacity="0.4" />
            <rect x={48 + i * 90 + 4} y="100" width="20" height="8" rx="1" fill="#2563EB" opacity="0.5" />
            <text
              x={62 + i * 90}
              y="270"
              textAnchor="middle"
              fill="#64748B"
              fontSize="10"
              fontFamily="Plus Jakarta Sans, sans-serif"
            >
              Aisle {i + 1}
            </text>
          </g>
        ))}

        {/* Congestion zone highlight on Aisle 3 */}
        <rect x="218" y="52" width="48" height="200" rx="6" fill="#F59E0B" opacity="0.15" />
        <rect
          x="218"
          y="52"
          width="48"
          height="200"
          rx="6"
          fill="none"
          stroke="#F59E0B"
          strokeWidth="1.5"
          strokeDasharray="4 3"
        />

        {/* Packing station */}
        <rect x="360" y="120" width="80" height="70" rx="8" fill="#FFFFFF" stroke="#2563EB" strokeWidth="2" />
        <text x="400" y="150" textAnchor="middle" fill="#1E293B" fontSize="10" fontWeight="700" fontFamily="Space Grotesk, sans-serif">
          Packing
        </text>
        <text x="400" y="166" textAnchor="middle" fill="#64748B" fontSize="9" fontFamily="Plus Jakarta Sans, sans-serif">
          Station
        </text>

        {/* AGV path */}
        <path
          id="agvPath"
          d="M90 290 C140 290, 160 220, 200 200 S280 180, 320 160 S380 140, 400 155"
          fill="none"
          stroke="#38BDF8"
          strokeWidth="2"
          strokeDasharray="6 5"
          opacity="0.7"
          className="animate-dash"
        />

        {/* Alternate reroute around congestion */}
        <path
          d="M200 200 C220 240, 280 240, 320 200"
          fill="none"
          stroke="#2563EB"
          strokeWidth="2"
          strokeDasharray="4 4"
          opacity="0.85"
        />

        {/* Moving AGV dots */}
        <motion.circle
          r="7"
          fill="#2563EB"
          animate={{
            cx: [90, 160, 220, 300, 360, 400],
            cy: [290, 250, 210, 180, 160, 155],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
        />
        <motion.circle
          r="6"
          fill="#38BDF8"
          animate={{
            cx: [100, 180, 250, 310, 380],
            cy: [280, 240, 230, 210, 170],
          }}
          transition={{ duration: 7.5, repeat: Infinity, ease: 'linear', delay: 1 }}
        />

        {/* Humanoid markers */}
        <motion.g animate={{ y: [0, -4, 0] }} transition={{ duration: 2.5, repeat: Infinity }}>
          <rect x="140" y="175" width="12" height="20" rx="3" fill="#64748B" />
          <circle cx="146" cy="170" r="5" fill="#94A3B8" />
          <circle cx="146" cy="182" r="2" fill="#38BDF8" />
        </motion.g>
        <motion.g animate={{ y: [0, -3, 0] }} transition={{ duration: 3, repeat: Infinity, delay: 0.4 }}>
          <rect x="300" y="95" width="12" height="20" rx="3" fill="#64748B" />
          <circle cx="306" cy="90" r="5" fill="#94A3B8" />
          <circle cx="306" cy="102" r="2" fill="#38BDF8" />
        </motion.g>

        {/* Legend */}
        <g transform="translate(24, 300)">
          <circle cx="6" cy="6" r="5" fill="#2563EB" />
          <text x="16" y="9" fill="#64748B" fontSize="9" fontFamily="Plus Jakarta Sans, sans-serif">
            AGV
          </text>
          <rect x="50" y="1" width="8" height="12" rx="2" fill="#64748B" />
          <text x="64" y="9" fill="#64748B" fontSize="9" fontFamily="Plus Jakarta Sans, sans-serif">
            Humanoid
          </text>
          <rect x="120" y="2" width="12" height="8" rx="2" fill="#F59E0B" opacity="0.5" />
          <text x="138" y="9" fill="#64748B" fontSize="9" fontFamily="Plus Jakarta Sans, sans-serif">
            Congestion
          </text>
        </g>
      </svg>
    </div>
  )
}
