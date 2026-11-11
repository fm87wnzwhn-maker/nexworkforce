import { BrandLogo } from './svgs/BrandLogo'

function LinkedInIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zM8.5 8.5h3.8v2h.05c.53-1 1.82-2.05 3.75-2.05 4 0 4.75 2.63 4.75 6.05V23h-4v-6.6c0-1.57-.03-3.6-2.2-3.6-2.2 0-2.54 1.72-2.54 3.48V23h-4V8.5z" />
    </svg>
  )
}

function YouTubeIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.5 6.2a3.05 3.05 0 0 0-2.15-2.16C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.35.54A3.05 3.05 0 0 0 .5 6.2 31.9 31.9 0 0 0 0 12a31.9 31.9 0 0 0 .5 5.8 3.05 3.05 0 0 0 2.15 2.16C4.5 20.5 12 20.5 12 20.5s7.5 0 9.35-.54a3.05 3.05 0 0 0 2.15-2.16A31.9 31.9 0 0 0 24 12a31.9 31.9 0 0 0-.5-5.8zM9.75 15.5v-7l6.5 3.5-6.5 3.5z" />
    </svg>
  )
}

const LINKS = [
  { label: 'About Us', href: '#top' },
  { label: 'Privacy Policy (PDPA Compliant)', href: '#trust' },
  { label: 'Terms of Service', href: '#pricing' },
  { label: 'Careers', href: '#final-cta' },
]

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-nw-navy text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <BrandLogo light />
          <p className="mt-4 text-sm italic text-slate-400">Global Innovation. Local Reliability.</p>
        </div>

        <div>
          <p className="font-display text-sm font-semibold text-white">Singapore</p>
          <p className="mt-2 text-sm leading-relaxed">
            Jurong Innovation District / Tuas Tech Hub, Singapore
          </p>
          <p className="mt-3 text-sm">
            <a href="tel:+6568123456" className="hover:text-nw-cyan">
              +65 6812 3456
            </a>
          </p>
          <p className="mt-1 text-sm">
            <a href="mailto:hello@nexworkforce.sg" className="hover:text-nw-cyan">
              hello@nexworkforce.sg
            </a>
          </p>
        </div>

        <div>
          <p className="font-display text-sm font-semibold text-white">Links</p>
          <ul className="mt-3 space-y-2">
            {LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-sm hover:text-nw-cyan">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex gap-3">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-slate-700 p-2 hover:border-nw-cyan hover:text-nw-cyan"
              aria-label="LinkedIn"
            >
              <LinkedInIcon size={16} />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-slate-700 p-2 hover:border-nw-cyan hover:text-nw-cyan"
              aria-label="YouTube"
            >
              <YouTubeIcon size={16} />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} NexWorkforce Solutions. All rights reserved.
      </div>
    </footer>
  )
}
