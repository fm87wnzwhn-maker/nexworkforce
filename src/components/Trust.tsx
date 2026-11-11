import { motion } from 'framer-motion'
import { BadgeCheck, Building2, Lock } from 'lucide-react'

const BRANDS = ['UNITREE', 'GEEK+', 'UBTECH', 'DOBOT']

const BADGES = [
  { icon: Building2, label: 'Smart Nation Aligned' },
  { icon: Lock, label: 'PDPA Compliant Architecture' },
  { icon: BadgeCheck, label: 'PSG / EnterpriseSG Grant Ready' },
]

export function Trust() {
  return (
    <section className="bg-nw-slate py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-center text-sm font-semibold uppercase tracking-wider text-slate-500">
            Sourcing from the world&apos;s leading robotics innovators
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {BRANDS.map((brand) => (
              <div
                key={brand}
                className="rounded-xl border border-slate-200 bg-white px-5 py-3 font-display text-sm font-bold tracking-[0.18em] text-nw-ink shadow-sm sm:text-base"
              >
                {brand}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-center font-display text-lg font-bold text-nw-ink sm:text-xl">
            Proudly supporting Singapore’s Smart Nation & SME Digitalization initiatives.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {BADGES.map((b) => (
              <div
                key={b.label}
                className="flex items-center justify-center gap-2 rounded-xl border border-blue-100 bg-blue-50/70 px-4 py-3 text-sm font-semibold text-nw-ink"
              >
                <b.icon size={16} className="text-nw-blue" />
                {b.label}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
