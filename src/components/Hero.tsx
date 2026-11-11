import { motion } from 'framer-motion'
import { ArrowRight, Calculator } from 'lucide-react'
import { HeroIllustration } from './svgs/HeroIllustration'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-nw-navy pt-24 text-white">
      <div className="absolute inset-0 perspective-grid" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-10 lg:px-8 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-nw-cyan backdrop-blur">
            🇸🇬 Singapore’s Premier &ldquo;Manpower 2.0&rdquo; Provider
          </span>
          <h1 className="mt-5 font-display text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
            Global Robotics Innovation. 100% Local Reliability.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
            Future-proof your SME with cutting-edge humanoid and robotic solutions from the world’s
            top manufacturers, backed by guaranteed local after-sales support and an AI-driven
            workflow suite.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#solutions"
              className="inline-flex items-center gap-2 rounded-lg bg-nw-blue px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-900/40 transition hover:bg-nw-blue-hover"
            >
              See Our Solutions in Action
              <ArrowRight size={16} />
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              <Calculator size={16} />
              Calculate Your ROI
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="lg:pl-4"
        >
          <HeroIllustration />
        </motion.div>
      </div>
    </section>
  )
}
