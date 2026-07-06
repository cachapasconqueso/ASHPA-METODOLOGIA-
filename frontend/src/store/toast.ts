import { create } from 'zustand'

interface ToastState {
  msg: string | null
  show: (m: string) => void
  hide: () => void
}

export const useToast = create<ToastState>((set) => ({
  msg: null,
  show: (msg) => set({ msg }),
  hide: () => set({ msg: null }),
}))

// Helper para invocar desde cualquier parte
export const toast = (m: string) => useToast.getState().show(m)
