import api from './axios'
import type { Modulo, ModuloDetalle } from '../types'

export const modulosPorAula = (aulaId: string) =>
  api.get<Modulo[]>(`/modulos/aula/${aulaId}`)

export const obtenerModulo = (id: string) => api.get<ModuloDetalle>(`/modulos/${id}`)

// Docente: habilitar/deshabilitar un módulo
export const cambiarActivoModulo = (id: string, activo: boolean) =>
  api.patch<{ id: string; nombre: string; activo: boolean }>(`/modulos/${id}/activo`, { activo })
