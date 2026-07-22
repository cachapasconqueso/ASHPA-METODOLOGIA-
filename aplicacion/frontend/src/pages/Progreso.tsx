import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppShell } from '../components/AppShell'
import { Icon } from '../components/IconSprite'
import { useAuth } from '../hooks/useAuth'
import { miProgreso } from '../api/progreso.api'
import type { Progreso as TProgreso } from '../types'

export function Progreso() {
  const navigate = useNavigate()
  const { usuario } = useAuth()
  const [items, setItems] = useState<TProgreso[]>([])
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    miProgreso()
      .then(({ data }) => setItems(data))
      .finally(() => setCargando(false))
  }, [])

  const nav = [
    { icon: 'ic-home', label: 'Mis módulos', onClick: () => navigate('/app') },
    { icon: 'ic-chart', label: 'Mi progreso', active: true, onClick: () => navigate('/app/progreso') },
    { icon: 'ic-award', label: 'Mis insignias', onClick: () => navigate('/app/insignias') },
  ]

  return (
    <AppShell nav={nav} user={{ nombre: usuario?.nombre ?? 'Estudiante', sub: 'Estudiante', color: 'var(--green)' }}>
      <div className="topbar"><div><h1>Mi progreso</h1><p className="sub">Módulos que has completado y tu puntaje.</p></div></div>
      <div className="panel">
        {cargando ? (
          <div className="spinner" />
        ) : items.length === 0 ? (
          <div className="empty-state">
            <Icon name="ic-chart" size={46} color="var(--line)" />
            <h4>Aún no completas módulos</h4>
            <p>Aprueba la evaluación de un módulo para verlo aquí.</p>
          </div>
        ) : (
          items.map((p) => (
            <div key={p.id} className="module-row">
              <div className="idx">{String(p.modulo.orden).padStart(2, '0')}</div>
              <div className="info"><h4>{p.modulo.nombre}</h4><span>Nivel {p.modulo.nivel}</span></div>
              <span className="status-pill status-ok">{p.completado ? 'Completado' : 'En curso'}</span>
              <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--green-dark)', minWidth: 44, textAlign: 'right' }}>{p.puntaje ?? 0}%</div>
            </div>
          ))
        )}
      </div>
    </AppShell>
  )
}
