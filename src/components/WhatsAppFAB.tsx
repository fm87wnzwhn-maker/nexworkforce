import { MessageCircle } from 'lucide-react'

const WA_URL =
  'https://wa.me/6568123456?text=Hi%20NexWorkforce%2C%20I%27d%20like%20to%20learn%20more%20about%20your%20RaaS%20solutions.'

export function WhatsAppFAB() {
  return (
    <a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-900/20 transition hover:scale-[1.03] hover:bg-[#1ebe57] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
      aria-label="Chat with SG Specialist on WhatsApp"
    >
      <MessageCircle size={18} fill="currentColor" />
      <span className="hidden sm:inline">Chat with SG Specialist</span>
    </a>
  )
}
