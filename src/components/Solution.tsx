import { motion } from 'framer-motion'
import { Bot, LineChart, ShieldCheck } from 'lucide-react'
import { TrustBridge } from './svgs/TrustBridge'

const PILLARS = [
  {
    id: 'solutions',
    icon: Bot,
    title: 'Next-Gen Robotics & Humanoids',
    subtitle: 'Hardware',
    body: 'Deploy state-of-the-art AGVs, robotic arms, and bipedal humanoids tailored for your operations. We handle sourcing, importation, and deployment.',
  },
  {
    id: 'trust',
    icon: ShieldCheck,
    title: 'The “Local Trust” Guarantee',
    subtitle: 'Support',
    body: 'Singapore-based, SLA-backed after-sales support. Local technicians, dedicated spare parts inventory in Singapore, and 24/7 remote monitoring. If it breaks, we fix it. Locally. Fast.',
  },
  {
    id: 'ai-pillar',
    icon: LineChart,
    title: 'AI Workflow & Productivity Suite',
    subtitle: 'Software',
    body: 'Proprietary AI dashboard measuring Output vs. Time. Identify workflow bottlenecks, track asset utilization, and maximize team efficiency without micromanagement.',
  },
]

export function Solution() {
  return (
    <section id="solutions" className="scroll-mt-20 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
        >
          <h2 className="font-display text-3xl font-bold tracking-tight text-nw-ink sm:text-4xl">
            We Are Your Trust Bridge to the Future of Work.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            We source the most advanced, cost-effective robotics and humanoids from leading Asian
            manufacturers and bring them to Southeast Asia. But we don’t just drop off the hardware.
            We provide the critical layer of local integration, maintenance, and AI intelligence that
            global manufacturers can’t.
          </p>
        </motion.div>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
        >
          <TrustBridge />
        </motion.div>

        <div id="trust" className="mt-12 grid scroll-mt-24 gap-6 md:grid-cols-3">
          {PILLARS.map((pillar, i) => (
            <motion.article
              key={pillar.title}
              id={pillar.id === 'solutions' || pillar.id === 'trust' ? undefined : pillar.id}
              className="rounded-2xl border border-slate-200 bg-nw-slate/60 p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <div className="mb-4 inline-flex rounded-xl bg-white p-3 text-nw-blue shadow-sm">
                <pillar.icon size={22} />
              </div>
              <p className="text-xs font-semibold uppercase tracking-wider text-nw-blue">{pillar.subtitle}</p>
              <h3 className="mt-1 font-display text-lg font-bold text-nw-ink">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{pillar.body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
