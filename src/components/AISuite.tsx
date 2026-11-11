import { motion } from 'framer-motion'
import { Activity, Gauge, Shield } from 'lucide-react'
import { useState } from 'react'

const FEATURES = [
  {
    icon: Activity,
    title: 'Workflow Optimization',
    body: 'Identify bottlenecks (e.g., “Aisle 4 picking takes 20% longer due to layout”).',
  },
  {
    icon: Gauge,
    title: 'Asset Utilization',
    body: 'Track robot active working hours vs. idle time.',
  },
  {
    icon: Shield,
    title: 'PDPA Compliant & Employee Friendly',
    body: 'Measures process efficiency, not policing individuals.',
  },
]

const TABS = ['Overview', 'Bottleneck Alerts', 'Fleet Utilization'] as const

const CHART = [
  { label: 'Shift A', manual: 62, teaming: 88 },
  { label: 'Shift B', manual: 58, teaming: 84 },
  { label: 'Shift C', manual: 55, teaming: 91 },
  { label: 'Shift D', manual: 60, teaming: 86 },
]

export function AISuite() {
  const [tab, setTab] = useState<(typeof TABS)[number]>('Overview')

  return (
    <section id="ai-suite" className="scroll-mt-20 bg-nw-navy-2 py-20 text-white sm:py-24">
      <div className="absolute inset-x-0">
        {/* spacer for relative stacking */}
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />

        <div className="relative grid items-start gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Work Smarter. Maximize Output. Minimize Friction.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-300">
              Stop guessing where you are losing money. Our AI Management Tool captures the vital
              ratio of output versus time in the facility, giving you unprecedented visibility.
            </p>
            <ul className="mt-8 space-y-5">
              {FEATURES.map((f) => (
                <li key={f.title} className="flex gap-4">
                  <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 text-nw-cyan ring-1 ring-white/10">
                    <f.icon size={18} />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-bold">{f.title}</h3>
                    <p className="mt-1 text-sm text-slate-400">{f.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="rounded-2xl border border-white/10 bg-nw-navy/80 p-4 shadow-2xl backdrop-blur-md sm:p-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-wrap gap-1 rounded-xl bg-white/5 p-1">
              {TABS.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTab(t)}
                  className={`rounded-lg px-3 py-2 text-xs font-semibold transition sm:text-sm ${
                    tab === t
                      ? 'bg-nw-blue text-white shadow'
                      : 'text-slate-400 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>

            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {[
                { label: 'Output vs. Time', value: '+28.4%' },
                { label: 'Robot Uptime', value: '99.6%' },
                { label: 'Avg. Pick Cycle', value: '14.2s (−22%)' },
              ].map((kpi) => (
                <div key={kpi.label} className="rounded-xl border border-white/10 bg-white/5 px-3 py-3">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                    {kpi.label}
                  </p>
                  <p className="mt-1 font-display text-lg font-bold text-nw-cyan">{kpi.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-xl border border-white/10 bg-nw-navy-2/80 p-4">
              {tab === 'Overview' && (
                <>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Manual Baseline vs. Human + Robot Teaming
                  </p>
                  <svg viewBox="0 0 360 160" className="h-auto w-full" role="img" aria-label="Throughput comparison chart">
                    {CHART.map((row, i) => {
                      const x = 40 + i * 80
                      return (
                        <g key={row.label}>
                          <rect x={x} y={140 - row.manual} width="22" height={row.manual} rx="4" fill="#475569" />
                          <rect
                            x={x + 28}
                            y={140 - row.teaming}
                            width="22"
                            height={row.teaming}
                            rx="4"
                            fill="#2563EB"
                          />
                          <text x={x + 24} y="156" textAnchor="middle" fill="#94A3B8" fontSize="10">
                            {row.label}
                          </text>
                        </g>
                      )
                    })}
                    <g>
                      <rect x="220" y="8" width="10" height="10" rx="2" fill="#475569" />
                      <text x="234" y="17" fill="#94A3B8" fontSize="9">
                        Manual
                      </text>
                      <rect x="280" y="8" width="10" height="10" rx="2" fill="#2563EB" />
                      <text x="294" y="17" fill="#94A3B8" fontSize="9">
                        Teaming
                      </text>
                    </g>
                  </svg>
                </>
              )}

              {tab === 'Bottleneck Alerts' && (
                <div className="space-y-3 py-2">
                  {[
                    { zone: 'Aisle 4', detail: 'Picking +20% vs avg — layout friction', level: 'High' },
                    { zone: 'Dock B', detail: 'Staging dwell 8 min above target', level: 'Med' },
                    { zone: 'Pack Line 2', detail: 'Cycle time recovered after re-route', level: 'Low' },
                  ].map((alert) => (
                    <div
                      key={alert.zone}
                      className="flex items-start justify-between gap-3 rounded-lg border border-white/10 bg-white/5 px-3 py-2.5"
                    >
                      <div>
                        <p className="text-sm font-semibold text-white">{alert.zone}</p>
                        <p className="text-xs text-slate-400">{alert.detail}</p>
                      </div>
                      <span
                        className={`shrink-0 rounded-md px-2 py-0.5 text-[10px] font-bold uppercase ${
                          alert.level === 'High'
                            ? 'bg-amber-500/20 text-amber-300'
                            : alert.level === 'Med'
                              ? 'bg-sky-500/20 text-sky-300'
                              : 'bg-emerald-500/20 text-emerald-300'
                        }`}
                      >
                        {alert.level}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {tab === 'Fleet Utilization' && (
                <div className="space-y-4 py-2">
                  {[
                    { name: 'Humanoids', active: 78, idle: 22 },
                    { name: 'AGVs', active: 91, idle: 9 },
                    { name: 'Arms / Cells', active: 64, idle: 36 },
                  ].map((fleet) => (
                    <div key={fleet.name}>
                      <div className="mb-1 flex justify-between text-xs">
                        <span className="font-semibold text-white">{fleet.name}</span>
                        <span className="text-nw-cyan">{fleet.active}% active</span>
                      </div>
                      <div className="flex h-2.5 overflow-hidden rounded-full bg-white/10">
                        <div className="bg-nw-blue" style={{ width: `${fleet.active}%` }} />
                        <div className="bg-slate-600" style={{ width: `${fleet.idle}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="mt-4 rounded-xl border border-nw-cyan/30 bg-nw-cyan/10 px-3 py-3 text-sm text-sky-100">
              <span className="font-semibold text-nw-cyan">Optimization Insight: </span>
              Aisle 4 picking takes 20% longer due to layout. Recommended dynamic task re-routing
              active.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
