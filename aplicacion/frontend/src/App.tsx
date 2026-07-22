import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { IconSprite } from './components/IconSprite'
import { Toaster } from './components/Toaster'
import { PrivateRoute } from './components/layout/PrivateRoute'
import { RoleRoute } from './components/layout/RoleRoute'
import { Landing } from './pages/Landing'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { EstudianteDashboard } from './pages/EstudianteDashboard'
import { ModuloDetalle } from './pages/ModuloDetalle'
import { Evaluacion } from './pages/Evaluacion'
import { Progreso } from './pages/Progreso'
import { Insignias } from './pages/Insignias'
import { DocenteDashboard } from './pages/DocenteDashboard'

export default function App() {
  return (
    <BrowserRouter>
      <IconSprite />
      <Toaster />
      <Routes>
        {/* Públicas */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Privadas */}
        <Route element={<PrivateRoute />}>
          <Route path="/app" element={<EstudianteDashboard />} />
          <Route path="/app/modulo/:id" element={<ModuloDetalle />} />
          <Route path="/app/modulo/:id/evaluacion" element={<Evaluacion />} />
          <Route path="/app/progreso" element={<Progreso />} />
          <Route path="/app/insignias" element={<Insignias />} />

          {/* Solo docente */}
          <Route element={<RoleRoute rol="PROFESOR" />}>
            <Route path="/docente" element={<DocenteDashboard />} />
          </Route>
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
