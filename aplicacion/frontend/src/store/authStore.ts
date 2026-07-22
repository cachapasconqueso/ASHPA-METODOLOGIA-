import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Usuario } from '../types'

interface AuthState {
  usuario: Usuario | null
  token: string | null
  login: (usuario: Usuario, token: string) => void
  logout: () => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      usuario: null,
      token: null,
      login: (usuario, token) => set({ usuario, token }),
      logout: () => set({ usuario: null, token: null }),
    }),
    {
      name: 'ashpa-auth',
    }
  )
)
