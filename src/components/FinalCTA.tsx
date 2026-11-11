import { motion } from 'framer-motion'
import { useModal } from '../context/ModalContext'

export function FinalCTA() {
  const { openModal } = useModal()

  return (
    <section id="final-cta" className="relative scroll-mt-20 overflow-hidden bg-nw-navy py-20 sm:py-24">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 40%, rgba(37,99,235,0.35), transparent 70%)',
        }}
      />
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />

      <motion.div
        className="relative mx-auto max-w-3xl px-4 text-center sm:px-6"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Ready to Transform Your Manpower Strategy?
        </h2>
        <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
          Don’t let labor shortages dictate your growth. Partner with NexWorkforce Solutions and
          experience the perfect blend of global innovation and local reliability. Let’s run a 30-day
          Proof of Concept (PoC) in your facility.
        </p>
        <button
          type="button"
          onClick={() => openModal({ interest: '30-Day PoC Pilot' })}
          className="mt-8 inline-flex rounded-lg bg-nw-blue px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-900/40 transition hover:bg-nw-blue-hover"
        >
          Book Your Free Site Assessment
        </button>
        <p className="mt-4 text-sm italic text-slate-400">
          *Limited PoC slots available for Q1 2027. Contact us today to secure your pilot.
        </p>
      </motion.div>
    </section>
  )
}
