import api from './axios'
import type { Evaluacion, ResultadoIntento } from '../types'

export const obtenerEvaluacion = (moduloId: string) =>
  api.get<Evaluacion>(`/evaluaciones/${moduloId}`)

export const enviarIntento = (moduloId: string, respuestas: string[]) =>
  api.post<ResultadoIntento>(`/evaluaciones/${moduloId}/intento`, { respuestas })
