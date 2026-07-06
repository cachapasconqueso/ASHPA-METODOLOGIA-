import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppShell } from '../components/AppShell'
import { Icon } from '../components/IconSprite'
import { useAuth } from '../hooks/useAuth'
import { misInsignias } from '../api/insignias.api'
import type { Insignia } from '../types'

export function Insignias() {
  const navigate = useNavigate()
  const { usuario } = useAuth()
  const [items, setItems] = useState<Insignia[]>([])
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    misInsignias()
      .then(({ data }) => setItems(data))
      .finally(() => setCargando(false))
  }, [])

  const nav = [
    { icon: 'ic-home', label: 'Mis módulos', onClick: () => navigate('/app') },
    { icon: 'ic-chart', label: 'Mi progreso', onClick: () => navigate('/app/progreso') },
    { icon: 'ic-award', label: 'Mis insignias', active: true, onClick: () => navigate('/app/insignias') },
  ]

  return (
    <AppShell nav={nav} user={{ nombre: usuario?.nombre ?? 'Estudiante', sub: 'Estudiante', color: 'var(--green)' }}>
      <div className="topbar"><div><h1>Mis insignias</h1><p className="sub">Logros que has desbloqueado en tu camino por el quichua.</p></div></div>
      <div className="panel">
        {cargando ? (
          <div className="spinner" />
        ) : items.length === 0 ? (
          <div className="empty-state">
            <Icon name="ic-award" size={46} color="var(--line)" />
            <h4>Todavía no tienes insignias</h4>
            <p>Completa módulos y saca buenas notas para ganarlas.</p>
          </div>
        ) : (
          <div className="badge-grid">
            {items.map((b) => (
              <div key={b.id} className="badge-item">
                <div className="ico"><Icon name="ic-award" size={40} color="var(--orange)" /></div>
                <h4>{b.insignia.nombre}</h4>
                <p>{b.insignia.descripcion}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </AppShell>
  )
}
