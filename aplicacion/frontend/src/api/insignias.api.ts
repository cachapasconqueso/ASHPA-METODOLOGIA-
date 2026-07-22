import api from './axios'
import type { Insignia } from '../types'

export const misInsignias = () => api.get<Insignia[]>('/insignias/me')
