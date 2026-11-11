import { motion } from 'framer-motion'

export function HeroIllustration() {
  return (
    <div className="relative">
      <motion.div
        className="relative overflow-hidden rounded-2xl border border-white/10 bg-nw-navy-2/80 p-4 shadow-2xl shadow-blue-900/40 backdrop-blur-md sm:p-6"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="mb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
            <span className="font-display text-xs font-semibold tracking-wider text-slate-200">
              ZONE-A // TUAS HUB
            </span>
          </div>
          <span className="rounded-md bg-blue-600/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-nw-cyan">
            Live Ops
          </span>
        </div>

        <svg viewBox="0 0 520 360" className="h-auto w-full" role="img" aria-label="Humanoid robot, AGV, and supervisor in warehouse">
          <defs>
            <linearGradient id="floorGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
            <linearGradient id="robotBody" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#94a3b8" />
              <stop offset="100%" stopColor="#475569" />
            </linearGradient>
            <linearGradient id="agvBody" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#2563eb" />
            </linearGradient>
            <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Floor / aisle perspective */}
          <rect x="20" y="40" width="480" height="300" rx="16" fill="url(#floorGrad)" />
          <path d="M40 300 L180 120 H340 L480 300 Z" fill="#0b1120" opacity="0.55" />
          <path d="M180 120 H340" stroke="#334155" strokeWidth="2" />
          <path d="M40 300 L180 120" stroke="#334155" strokeWidth="1.5" opacity="0.7" />
          <path d="M480 300 L340 120" stroke="#334155" strokeWidth="1.5" opacity="0.7" />
          {[0, 1, 2, 3].map((i) => (
            <path
              key={i}
              d={`M${100 + i * 70} 280 L${200 + i * 28} 150`}
              stroke="#1e293b"
              strokeWidth="8"
              opacity="0.5"
            />
          ))}

          {/* Rack silhouettes */}
          <g opacity="0.85">
            <rect x="56" y="148" width="54" height="110" rx="4" fill="#1e293b" stroke="#334155" />
            <rect x="64" y="158" width="38" height="12" rx="2" fill="#2563eb" opacity="0.35" />
            <rect x="64" y="178" width="38" height="12" rx="2" fill="#38bdf8" opacity="0.25" />
            <rect x="64" y="198" width="38" height="12" rx="2" fill="#2563eb" opacity="0.35" />
            <rect x="410" y="148" width="54" height="110" rx="4" fill="#1e293b" stroke="#334155" />
            <rect x="418" y="158" width="38" height="12" rx="2" fill="#38bdf8" opacity="0.25" />
            <rect x="418" y="178" width="38" height="12" rx="2" fill="#2563eb" opacity="0.35" />
            <rect x="418" y="198" width="38" height="12" rx="2" fill="#38bdf8" opacity="0.25" />
          </g>

          {/* AGV */}
          <g filter="url(#softGlow)">
            <rect x="210" y="248" width="72" height="28" rx="6" fill="url(#agvBody)" />
            <rect x="218" y="240" width="56" height="14" rx="3" fill="#0ea5e9" opacity="0.9" />
            <rect x="226" y="232" width="40" height="10" rx="2" fill="#e2e8f0" opacity="0.85" />
            <circle cx="222" cy="278" r="6" fill="#0f172a" />
            <circle cx="270" cy="278" r="6" fill="#0f172a" />
            <circle cx="246" cy="254" r="3" fill="#f8fafc" className="animate-pulse-soft" style={{ transformOrigin: '246px 254px' }} />
          </g>
          <path
            d="M190 290 C220 275, 300 275, 340 255"
            fill="none"
            stroke="#38bdf8"
            strokeWidth="2"
            strokeDasharray="6 6"
            className="animate-dash"
            opacity="0.7"
          />

          {/* Humanoid robot */}
          <g transform="translate(300,145)">
            <ellipse cx="36" cy="118" rx="28" ry="6" fill="#020617" opacity="0.45" />
            <rect x="24" y="28" width="24" height="42" rx="6" fill="url(#robotBody)" />
            <rect x="28" y="8" width="16" height="18" rx="5" fill="#cbd5e1" />
            <circle cx="33" cy="15" r="2" fill="#38bdf8" />
            <circle cx="39" cy="15" r="2" fill="#38bdf8" />
            <rect x="10" y="32" width="12" height="28" rx="4" fill="#64748b" />
            <rect x="50" y="32" width="12" height="28" rx="4" fill="#64748b" />
            <rect x="26" y="70" width="10" height="36" rx="4" fill="#64748b" />
            <rect x="38" y="70" width="10" height="36" rx="4" fill="#64748b" />
            <rect x="24" y="48" width="24" height="6" rx="2" fill="#2563eb" opacity="0.9" />
            <circle cx="36" cy="40" r="3" fill="#38bdf8" className="animate-pulse-soft" style={{ transformOrigin: '36px 40px' }} />
          </g>

          {/* Human supervisor with tablet */}
          <g transform="translate(120,160)">
            <ellipse cx="28" cy="118" rx="24" ry="5" fill="#020617" opacity="0.4" />
            <circle cx="28" cy="22" r="12" fill="#fbbf24" />
            <path d="M16 38h24l4 42H12z" fill="#1e40af" />
            <rect x="18" y="48" width="20" height="14" rx="2" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
            <rect x="21" y="51" width="14" height="2" rx="1" fill="#38bdf8" opacity="0.8" />
            <rect x="21" y="55" width="10" height="2" rx="1" fill="#64748b" />
            <path d="M16 80l-8 38h12l8-38" fill="#1e293b" />
            <path d="M40 80l8 38H36l-4-38" fill="#1e293b" />
            <path d="M12 48l-10 18" stroke="#334155" strokeWidth="6" strokeLinecap="round" />
            <path d="M44 48l8 10" stroke="#334155" strokeWidth="6" strokeLinecap="round" />
          </g>

          {/* Ambient sensor nodes */}
          <circle cx="160" cy="130" r="3" fill="#38bdf8" opacity="0.9" />
          <circle cx="360" cy="136" r="3" fill="#2563eb" opacity="0.9" />
          <circle cx="260" cy="110" r="2.5" fill="#94a3b8" />
        </svg>
      </motion.div>

      {/* HUD badges */}
      <motion.div
        className="absolute -left-2 top-8 z-10 max-w-[200px] rounded-xl border border-white/10 bg-nw-navy/90 px-3 py-2 shadow-lg backdrop-blur-md sm:-left-6"
        initial={{ opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
      >
        <p className="text-[10px] font-semibold uppercase tracking-wider text-nw-cyan">SLA Uptime</p>
        <p className="text-sm font-bold text-white">99.8%</p>
        <p className="text-[10px] text-slate-400">SG Local Support</p>
      </motion.div>

      <motion.div
        className="absolute -right-2 top-24 z-10 max-w-[210px] rounded-xl border border-white/10 bg-nw-navy/90 px-3 py-2 shadow-lg backdrop-blur-md sm:-right-4"
        initial={{ opacity: 0, x: 12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
      >
        <p className="text-[10px] font-semibold uppercase tracking-wider text-nw-cyan">Output Efficiency</p>
        <p className="text-sm font-bold text-white">+34% vs. Baseline</p>
      </motion.div>

      <motion.div
        className="absolute bottom-4 left-4 right-4 z-10 rounded-xl border border-white/10 bg-nw-navy/90 px-3 py-2 shadow-lg backdrop-blur-md sm:left-8 sm:right-auto"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <p className="text-[10px] font-semibold uppercase tracking-wider text-nw-cyan">Fleet Status</p>
        <p className="text-sm font-bold text-white">4 Humanoids + 6 AGVs Active</p>
      </motion.div>
    </div>
  )
}
