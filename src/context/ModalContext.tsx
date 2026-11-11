import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

export type ModalPrefill = {
  interest?: string
  notes?: string
  staff?: number
  monthlyCost?: number
}

type ModalContextValue = {
  open: boolean
  prefill: ModalPrefill
  openModal: (prefill?: ModalPrefill) => void
  closeModal: () => void
}

const ModalContext = createContext<ModalContextValue | null>(null)

export function ModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const [prefill, setPrefill] = useState<ModalPrefill>({})

  const openModal = useCallback((next?: ModalPrefill) => {
    setPrefill(next ?? {})
    setOpen(true)
  }, [])

  const closeModal = useCallback(() => {
    setOpen(false)
  }, [])

  const value = useMemo(
    () => ({ open, prefill, openModal, closeModal }),
    [open, prefill, openModal, closeModal],
  )

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
}

export function useModal() {
  const ctx = useContext(ModalContext)
  if (!ctx) throw new Error('useModal must be used within ModalProvider')
  return ctx
}
