import { motion } from 'framer-motion'
import { Package, Route, Users } from 'lucide-react'
import { FloorMap } from './svgs/FloorMap'

const FEATURES = [
  {
    icon: Users,
    title: 'Human-Robot Teaming',
    body: 'Deploy humanoids for repetitive picking and packing alongside your human staff.',
  },
  {
    icon: Package,
    title: 'Automated Sorting',
    body: 'Utilize advanced AGVs to move pallets and sort packages seamlessly.',
  },
  {
    icon: Route,
    title: 'AI Dispatch Optimization',
    body: 'Analyze zone completion times and dynamically route tasks to humans or robots based on real-time floor congestion.',
  },
]

export function Logistics() {
  return (
    <section id="logistics" className="scroll-mt-20 bg-nw-slate py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
        >
          <h2 className="font-display text-3xl font-bold tracking-tight text-nw-ink sm:text-4xl">
            Engineered for Logistics, Warehousing & Fulfillment.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            In the high-stakes world of 3PL and e-commerce fulfillment, every second counts. Our
            solutions are specifically calibrated for the logistics sector:
          </p>
          <ul className="mt-8 space-y-5">
            {FEATURES.map((f) => (
              <li key={f.title} className="flex gap-4">
                <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-nw-blue shadow-sm">
                  <f.icon size={18} />
                </span>
                <div>
                  <h3 className="font-display text-base font-bold text-nw-ink">{f.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{f.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
        >
          <FloorMap />
        </motion.div>
      </div>
    </section>
  )
}
