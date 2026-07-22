import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

export const RoleRoute = ({ rol }: { rol: string }) => {
  const { usuario } = useAuth()
  if (!usuario?.roles?.includes(rol)) return <Navigate to="/app" replace />
  return <Outlet />
}
