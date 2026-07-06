import { useAuthStore } from '../store/authStore'

export const useAuth = () => {
  const { usuario, token, login, logout } = useAuthStore()
  const roles = usuario?.roles ?? []
  return {
    usuario,
    token,
    login,
    logout,
    isAuthenticated: !!token,
    isProfesor: roles.includes('PROFESOR'),
    isEstudiante: roles.includes('ESTUDIANTE'),
  }
}
