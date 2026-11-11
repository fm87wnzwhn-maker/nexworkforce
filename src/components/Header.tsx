import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useModal } from '../context/ModalContext'
import { BrandLogo } from './svgs/BrandLogo'

const NAV_LINKS = [
  { href: '#solutions', label: 'Solutions' },
  { href: '#trust', label: 'Local Trust Guarantee' },
  { href: '#ai-suite', label: 'AI Productivity Suite' },
  { href: '#logistics', label: 'Logistics' },
  { href: '#pricing', label: 'RaaS Pricing' },
]

export function Header() {
  const { openModal } = useModal()
  const [scrolled, setScrolled] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [drawerOpen])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-slate-200/80 bg-white/90 shadow-sm backdrop-blur-lg'
          : 'border-b border-transparent bg-nw-navy/80 backdrop-blur-md'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <BrandLogo light={!scrolled} />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                scrolled
                  ? 'text-slate-600 hover:bg-slate-100 hover:text-nw-ink'
                  : 'text-slate-300 hover:bg-white/5 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => openModal({ interest: 'Free Site Assessment' })}
            className="hidden rounded-lg bg-nw-blue px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-nw-blue-hover sm:inline-flex"
          >
            Book a Free ROI Consultation
          </button>
          <button
            type="button"
            className={`inline-flex rounded-lg p-2 lg:hidden ${scrolled ? 'text-nw-ink' : 'text-white'}`}
            aria-label={drawerOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setDrawerOpen((v) => !v)}
          >
            {drawerOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 top-16 z-40 bg-black/40 transition-opacity lg:hidden ${
          drawerOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setDrawerOpen(false)}
        aria-hidden={!drawerOpen}
      />
      <aside
        className={`fixed right-0 top-16 z-50 h-[calc(100vh-4rem)] w-[min(100%,320px)] border-l border-slate-200 bg-white p-6 shadow-xl transition-transform duration-300 lg:hidden ${
          drawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!drawerOpen}
      >
        <nav className="flex flex-col gap-1" aria-label="Mobile">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setDrawerOpen(false)}
              className="rounded-lg px-3 py-3 text-sm font-semibold text-nw-ink hover:bg-slate-50"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          onClick={() => {
            setDrawerOpen(false)
            openModal({ interest: 'Free Site Assessment' })
          }}
          className="mt-6 w-full rounded-lg bg-nw-blue px-4 py-3 text-sm font-semibold text-white hover:bg-nw-blue-hover"
        >
          Book a Free ROI Consultation
        </button>
      </aside>
    </header>
  )
}
