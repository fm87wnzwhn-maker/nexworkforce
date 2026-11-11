import { motion } from 'framer-motion'
import { EyeOff, UserX, Wrench } from 'lucide-react'

const CARDS = [
  {
    icon: UserX,
    title: 'The Labor Crunch',
    body: 'Rising local manpower costs, strict foreign worker quotas, and chronic hiring shortages are squeezing SME margins.',
  },
  {
    icon: Wrench,
    title: 'The Automation Hesitation',
    body: 'You know robotics and humanoids are the future, but you’re hesitant. What if the machine breaks? Who fixes it? Will foreign tech leave me stranded without support?',
  },
  {
    icon: EyeOff,
    title: 'The Visibility Gap',
    body: 'You have staff on the floor, but you lack real-time, data-driven insights into actual workflow bottlenecks and output efficiency.',
  },
]

export function Problem() {
  return (
    <section className="bg-nw-slate py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="mx-auto max-w-3xl text-center font-display text-3xl font-bold tracking-tight text-nw-ink sm:text-4xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
        >
          You’re Facing the New Workforce Reality. We Have the Answer.
        </motion.h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {CARDS.map((card, i) => (
            <motion.article
              key={card.title}
              className="rounded-2xl border border-slate-200 border-t-4 border-t-nw-blue bg-white p-6 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="mb-4 inline-flex rounded-xl bg-blue-50 p-3 text-nw-blue">
                <card.icon size={22} />
              </div>
              <h3 className="font-display text-lg font-bold text-nw-ink">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{card.body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
