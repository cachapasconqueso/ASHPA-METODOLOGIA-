export interface Usuario {
  id: string
  nombre: string
  email: string
  roles: string[]
  creadoEn?: string
}

export interface RespuestaAuth {
  access_token: string
  usuario: Usuario
  aula?: { id: string; nombre: string; codigo: string }
}

export interface Aula {
  id: string
  nombre: string
  codigo: string
  profesorId?: string
  creadoEn?: string
  profesor?: { id: string; nombre: string }
  _count?: { estudiantes?: number; modulos?: number }
}

export interface ProgresoModulo {
  id: string
  moduloId: string
  completado: boolean
  puntaje?: number | null
  desbloqueadoEn?: string | null
}

export interface Modulo {
  id: string
  aulaId: string
  nombre: string
  descripcion: string
  nivel: number
  orden: number
  activo: boolean
  habilitado: boolean
  completado: boolean
  progreso?: ProgresoModulo | null
  _count?: { ejercicios: number }
}

export interface Ejercicio {
  id: string
  moduloId: string
  tipo: string
  explicacion: string
  pregunta: string
  opciones: string[]
  respuesta: string
}

export interface PreguntaEval {
  id: string
  evaluacionId: string
  pregunta: string
  opciones: string[]
}

export interface Evaluacion {
  id: string
  moduloId: string
  puntajeMinimo: number
  preguntas: PreguntaEval[]
}

export interface ModuloDetalle {
  id: string
  aulaId: string
  nombre: string
  descripcion: string
  contenido: string
  nivel: number
  orden: number
  activo: boolean
  ejercicios: Ejercicio[]
  evaluacion?: Evaluacion | null
}

export interface ResultadoIntento {
  id: string
  evaluacionId: string
  usuarioId: string
  puntaje: number
  aprobado: boolean
  correctas: number
  total: number
  creadoEn: string
}

export interface Progreso {
  id: string
  moduloId: string
  completado: boolean
  puntaje?: number | null
  modulo: { id: string; nombre: string; orden: number; nivel: number; aulaId: string }
}

export interface Insignia {
  id: string
  usuarioId: string
  insigniaId: string
  ganadaEn: string
  insignia: { id: string; nombre: string; descripcion: string; icono: string }
}

export interface EstudianteAula {
  id: string
  nombre: string
  email: string
  inscritoEn: string
  modulosCompletados: number
  totalModulos: number
  promedio: number
  progreso: { moduloId: string; completado: boolean; puntaje?: number | null }[]
}
