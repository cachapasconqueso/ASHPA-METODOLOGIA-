import api from './axios'
import type { Aula, EstudianteAula } from '../types'

// Docente
export const crearAula = (nombre: string) => api.post<Aula>('/aulas', { nombre })

export const misAulas = () => api.get<Aula[]>('/aulas/mias')

export const estudiantesDeAula = (aulaId: string) =>
  api.get<EstudianteAula[]>(`/aulas/${aulaId}/estudiantes`)

// Estudiante
export const aulasInscritas = () => api.get<Aula[]>('/aulas/inscritas')

export const unirseAula = (codigo: string) =>
  api.post<{ mensaje: string; aula: { id: string; nombre: string } }>('/aulas/unirse', { codigo })
