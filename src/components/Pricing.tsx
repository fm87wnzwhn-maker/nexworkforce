import { motion } from 'framer-motion'
import { CreditCard, Layers, TrendingUp } from 'lucide-react'
import { useMemo, useState } from 'react'
import { useModal } from '../context/ModalContext'

const RAAS_POINTS = [
  {
    icon: CreditCard,
    title: 'Zero Heavy CapEx',
    body: 'Predictable monthly subscription.',
  },
  {
    icon: Layers,
    title: 'All-Inclusive',
    body: 'Hardware, local maintenance, software updates, and AI dashboard access included.',
  },
  {
    icon: TrendingUp,
    title: 'Scale Up or Down',
    body: 'Add more robots to your fleet as your business grows.',
  },
]

function formatSgd(n: number) {
  return new Intl.NumberFormat('en-SG', {
    style: 'currency',
    currency: 'SGD',
    maximumFractionDigits: 0,
  }).format(n)
}

export function Pricing() {
  const { openModal } = useModal()
  const [staff, setStaff] = useState(15)
  const [monthlyCost, setMonthlyCost] = useState(3200)

  const savings = useMemo(() => {
    // ~18% annual efficiency savings at +32% throughput (conservative SME model)
    return Math.round(staff * monthlyCost * 12 * 0.18)
  }, [staff, monthlyCost])

  return (
    <section id="pricing" className="scroll-mt-20 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl font-bold tracking-tight text-nw-ink sm:text-4xl">
            Enterprise Tech. SME-Friendly Pricing.
          </h2>
          <p className="mt-4 text-base text-slate-600 sm:text-lg">
            Don’t let high upfront capital costs hold you back. We offer flexible Robotics-as-a-Service
            (RaaS) models.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <motion.article
            className="rounded-2xl border border-slate-200 bg-nw-slate p-6 sm:p-8"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-nw-blue">RaaS Subscription</p>
            <h3 className="mt-2 font-display text-2xl font-bold text-nw-ink">Robotics-as-a-Service</h3>
            <ul className="mt-6 space-y-5">
              {RAAS_POINTS.map((p) => (
                <li key={p.title} className="flex gap-4">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-nw-blue shadow-sm">
                    <p.icon size={18} />
                  </span>
                  <div>
                    <p className="font-display font-bold text-nw-ink">{p.title}</p>
                    <p className="mt-1 text-sm text-slate-600">{p.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.article>

          <motion.article
            className="rounded-2xl border border-nw-blue/20 bg-white p-6 shadow-lg shadow-blue-900/5 sm:p-8"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-nw-blue">Interactive Estimator</p>
            <h3 className="mt-2 font-display text-2xl font-bold text-nw-ink">SME ROI Calculator</h3>

            <div className="mt-6 space-y-6">
              <div>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <label htmlFor="staff" className="font-medium text-nw-ink">
                    Current Operations Staff
                  </label>
                  <span className="font-display font-bold text-nw-blue">{staff} pax</span>
                </div>
                <input
                  id="staff"
                  type="range"
                  min={5}
                  max={50}
                  value={staff}
                  onChange={(e) => setStaff(Number(e.target.value))}
                  className="w-full accent-nw-blue"
                />
                <div className="mt-1 flex justify-between text-[10px] text-slate-400">
                  <span>5</span>
                  <span>50</span>
                </div>
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <label htmlFor="cost" className="font-medium text-nw-ink">
                    Avg. Monthly Manpower Cost per Pax (SGD)
                  </label>
                  <span className="font-display font-bold text-nw-blue">
                    ${monthlyCost.toLocaleString()}
                  </span>
                </div>
                <input
                  id="cost"
                  type="range"
                  min={2500}
                  max={4500}
                  step={50}
                  value={monthlyCost}
                  onChange={(e) => setMonthlyCost(Number(e.target.value))}
                  className="w-full accent-nw-blue"
                />
                <div className="mt-1 flex justify-between text-[10px] text-slate-400">
                  <span>$2,500</span>
                  <span>$4,500</span>
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl bg-nw-slate px-4 py-3">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                  Estimated Throughput Increase
                </p>
                <p className="mt-1 font-display text-2xl font-bold text-nw-ink">+32%</p>
              </div>
              <div className="rounded-xl bg-blue-50 px-4 py-3">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-blue-700/70">
                  Projected Annual Efficiency Savings
                </p>
                <p className="mt-1 font-display text-2xl font-bold text-nw-blue">{formatSgd(savings)}</p>
              </div>
            </div>

            <button
              type="button"
              onClick={() =>
                openModal({
                  interest: 'RaaS Monthly Pricing',
                  staff,
                  monthlyCost,
                  notes: `Projected annual savings ${formatSgd(savings)} at +32% throughput`,
                })
              }
              className="mt-6 w-full rounded-lg bg-nw-blue py-3 text-sm font-semibold text-white transition hover:bg-nw-blue-hover"
            >
              Get Custom RaaS Quote
            </button>
          </motion.article>
        </div>
      </div>
    </section>
  )
}
