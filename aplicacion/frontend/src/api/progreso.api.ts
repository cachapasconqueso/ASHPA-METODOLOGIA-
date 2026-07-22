import api from './axios'
import type { Progreso } from '../types'

export const miProgreso = () => api.get<Progreso[]>('/progreso/me')

export const progresoEstudiante = (usuarioId: string) =>
  api.get<Progreso[]>(`/progreso/estudiante/${usuarioId}`)
