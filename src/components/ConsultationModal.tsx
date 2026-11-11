import { CheckCircle2, X } from 'lucide-react'
import { useEffect, useState, type FormEvent, type ReactNode } from 'react'
import { useModal } from '../context/ModalContext'

const INDUSTRIES = [
  'Logistics & 3PL',
  'Manufacturing',
  'Central Kitchen / F&B',
  'Retail / Other',
] as const

const INTERESTS = [
  '30-Day PoC Pilot',
  'RaaS Monthly Pricing',
  'Free Site Assessment',
] as const

type FormState = {
  fullName: string
  company: string
  email: string
  phone: string
  industry: string
  interest: string
}

type FormErrors = Partial<Record<keyof FormState, string>>

const EMPTY: FormState = {
  fullName: '',
  company: '',
  email: '',
  phone: '',
  industry: '',
  interest: '',
}

function validate(form: FormState): FormErrors {
  const errors: FormErrors = {}
  if (!form.fullName.trim()) errors.fullName = 'Full name is required'
  if (!form.company.trim()) errors.company = 'Company name is required'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
    errors.email = 'Enter a valid work email'
  }
  const digits = form.phone.replace(/\D/g, '')
  if (digits.length < 8) errors.phone = 'Enter a valid Singapore contact number'
  if (!form.industry) errors.industry = 'Select an industry sector'
  if (!form.interest) errors.interest = 'Select your interest'
  return errors
}

export function ConsultationModal() {
  const { open, closeModal, prefill } = useModal()
  const [form, setForm] = useState<FormState>(EMPTY)
  const [errors, setErrors] = useState<FormErrors>({})
  const [success, setSuccess] = useState(false)
  const [roiNote, setRoiNote] = useState<string | null>(null)

  useEffect(() => {
    if (!open) return
    setSuccess(false)
    setErrors({})
    setForm({
      ...EMPTY,
      interest: prefill.interest ?? '',
    })
    if (prefill.staff != null && prefill.monthlyCost != null) {
      setRoiNote(
        `ROI estimate context: ${prefill.staff} staff @ SGD ${prefill.monthlyCost.toLocaleString()}/pax/mo${
          prefill.notes ? ` — ${prefill.notes}` : ''
        }`,
      )
    } else {
      setRoiNote(prefill.notes ?? null)
    }
  }, [open, prefill])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, closeModal])

  if (!open) return null

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const next = validate(form)
    setErrors(next)
    if (Object.keys(next).length === 0) setSuccess(true)
  }

  const field = (
    id: keyof FormState,
    label: string,
    input: ReactNode,
  ) => (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-nw-ink">
        {label}
      </label>
      {input}
      {errors[id] && <p className="mt-1 text-xs text-red-600">{errors[id]}</p>}
    </div>
  )

  return (
    <div className="fixed inset-0 z-[80] flex items-end justify-center sm:items-center sm:p-4" role="dialog" aria-modal="true" aria-labelledby="consult-title">
      <button type="button" className="absolute inset-0 bg-nw-navy/70 backdrop-blur-sm" aria-label="Close modal" onClick={closeModal} />
      <div className="relative z-10 max-h-[92vh] w-full overflow-y-auto rounded-t-2xl bg-white shadow-2xl sm:max-w-lg sm:rounded-2xl">
        <div className="sticky top-0 flex items-center justify-between border-b border-slate-100 bg-white px-5 py-4">
          <h2 id="consult-title" className="font-display text-lg font-bold text-nw-ink">
            {success ? 'Request Received' : 'Book a Consultation'}
          </h2>
          <button type="button" onClick={closeModal} className="rounded-lg p-2 text-slate-500 hover:bg-slate-100" aria-label="Close">
            <X size={18} />
          </button>
        </div>

        {success ? (
          <div className="px-5 py-10 text-center">
            <CheckCircle2 className="mx-auto mb-4 h-14 w-14 text-emerald-500" />
            <p className="font-display text-xl font-bold text-nw-ink">Thank you, {form.fullName.split(' ')[0]}!</p>
            <p className="mt-2 text-sm text-slate-600">
              Our Singapore specialist will contact {form.company} shortly to schedule your assessment.
            </p>
            {roiNote && <p className="mt-4 rounded-lg bg-slate-50 px-3 py-2 text-xs text-slate-500">{roiNote}</p>}
            <button
              type="button"
              onClick={closeModal}
              className="mt-8 rounded-lg bg-nw-blue px-5 py-2.5 text-sm font-semibold text-white hover:bg-nw-blue-hover"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="space-y-4 px-5 py-5" noValidate>
            {roiNote && (
              <p className="rounded-lg border border-blue-100 bg-blue-50 px-3 py-2 text-xs text-blue-800">{roiNote}</p>
            )}

            {field(
              'fullName',
              'Full Name',
              <input
                id="fullName"
                value={form.fullName}
                onChange={(e) => setForm((f) => ({ ...f, fullName: e.target.value }))}
                className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-nw-blue focus:ring-2 focus:ring-nw-blue/20"
                autoComplete="name"
              />,
            )}

            {field(
              'company',
              'Company Name',
              <input
                id="company"
                value={form.company}
                onChange={(e) => setForm((f) => ({ ...f, company: e.target.value }))}
                className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-nw-blue focus:ring-2 focus:ring-nw-blue/20"
                autoComplete="organization"
              />,
            )}

            {field(
              'email',
              'Work Email',
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-nw-blue focus:ring-2 focus:ring-nw-blue/20"
                autoComplete="email"
              />,
            )}

            {field(
              'phone',
              'Singapore Contact (+65)',
              <div className="flex overflow-hidden rounded-lg border border-slate-200 focus-within:border-nw-blue focus-within:ring-2 focus-within:ring-nw-blue/20">
                <span className="bg-slate-50 px-3 py-2.5 text-sm font-medium text-slate-500">+65</span>
                <input
                  id="phone"
                  inputMode="tel"
                  value={form.phone}
                  onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                  className="w-full px-3 py-2.5 text-sm outline-none"
                  placeholder="6812 3456"
                  autoComplete="tel-national"
                />
              </div>,
            )}

            {field(
              'industry',
              'Industry Sector',
              <select
                id="industry"
                value={form.industry}
                onChange={(e) => setForm((f) => ({ ...f, industry: e.target.value }))}
                className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-nw-blue focus:ring-2 focus:ring-nw-blue/20"
              >
                <option value="">Select sector</option>
                {INDUSTRIES.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>,
            )}

            {field(
              'interest',
              'Interest',
              <select
                id="interest"
                value={form.interest}
                onChange={(e) => setForm((f) => ({ ...f, interest: e.target.value }))}
                className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-nw-blue focus:ring-2 focus:ring-nw-blue/20"
              >
                <option value="">Select interest</option>
                {INTERESTS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>,
            )}

            <button
              type="submit"
              className="w-full rounded-lg bg-nw-blue py-3 text-sm font-semibold text-white transition hover:bg-nw-blue-hover"
            >
              Submit Request
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
