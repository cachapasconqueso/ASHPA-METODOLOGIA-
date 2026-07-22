import api from './axios'
import type { RespuestaAuth, Usuario } from '../types'

export const login = (email: string, contrasena: string) =>
  api.post<RespuestaAuth>('/auth/login', { email, contrasena })

export const register = (nombre: string, email: string, contrasena: string, codigo: string) =>
  api.post<RespuestaAuth>('/auth/register', { nombre, email, contrasena, codigo })

export const getMe = () => api.get<Usuario>('/auth/me')
