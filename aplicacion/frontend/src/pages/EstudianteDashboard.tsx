import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppShell } from '../components/AppShell'
import { StatCard } from '../components/StatCard'
import { Icon } from '../components/IconSprite'
import { useAuth } from '../hooks/useAuth'
import { aulasInscritas } from '../api/aulas.api'
import { modulosPorAula } from '../api/modulos.api'
import type { Aula, Modulo } from '../types'

export function EstudianteDashboard() {
  const navigate = useNavigate()
  const { usuario } = useAuth()
  const [aulas, setAulas] = useState<Aula[]>([])
  const [aulaSel, setAulaSel] = useState<string | null>(null)
  const [modulos, setModulos] = useState<Modulo[]>([])
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    aulasInscritas()
      .then(({ data }) => {
        setAulas(data)
        if (data.length) setAulaSel(data[0].id)
        else setCargando(false)
      })
      .catch(() => setCargando(false))
  }, [])

  useEffect(() => {
    if (!aulaSel) return
    setCargando(true)
    modulosPorAula(aulaSel)
      .then(({ data }) => setModulos(data))
      .finally(() => setCargando(false))
  }, [aulaSel])

  const aula = aulas.find((a) => a.id === aulaSel)
  const habilitados = modulos.filter((m) => m.habilitado).length
  const completados = modulos.filter((m) => m.completado).length
  const avg = modulos.length ? Math.round((completados / modulos.length) * 100) : 0
  const nombre = usuario?.nombre ?? 'Estudiante'

  const nav = [
    { icon: 'ic-home', label: 'Mis módulos', active: true, onClick: () => navigate('/app') },
    { icon: 'ic-chart', label: 'Mi progreso', onClick: () => navigate('/app/progreso') },
    { icon: 'ic-award', label: 'Mis insignias', onClick: () => navigate('/app/insignias') },
  ]

  return (
    <AppShell nav={nav} user={{ nombre, sub: aula?.nombre ?? 'Sin aula', color: 'var(--green)' }}>
      <div className="topbar">
        <div>
          <h1>Alli puncha, {nombre.split(' ')[0]}</h1>
          <p className="sub">Estos son los módulos que tu docente habilitó para ti.</p>
        </div>
      </div>

      {aulas.length === 0 && !cargando ? (
        <div className="panel">
          <div className="empty-state">
            <Icon name="ic-book" size={46} color="var(--line)" />
            <h4>Aún no estás en un aula</h4>
            <p>Regístrate con el código de un aula para ver sus módulos.</p>
          </div>
        </div>
      ) : (
        <>
          {aulas.length > 1 && (
            <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
              {aulas.map((a) => (
                <button key={a.id} className={`btn btn-sm ${a.id === aulaSel ? 'btn-primary' : 'btn-ghost'}`} onClick={() => setAulaSel(a.id)}>{a.nombre}</button>
              ))}
            </div>
          )}

          <div className="stat-row">
            <StatCard label="Módulos habilitados" value={`${habilitados} / ${modulos.length}`} color="var(--blue)" tint="var(--blue-tint)" icon="ic-unlock" />
            <StatCard label="Módulos completados" value={completados} color="var(--green)" tint="var(--green-tint)" icon="ic-check" />
            <StatCard label="Tu progreso general" value={`${avg}%`} color="var(--orange)" tint="var(--orange-tint)" icon="ic-chart" />
          </div>

          <div className="panel">
            <div className="panel-head"><div><h3>Módulos del aula</h3><p className="sub">Los bloqueados los habilita tu docente cuando estés listo.</p></div></div>
            {cargando ? (
              <div className="spinner" />
            ) : (
              <div className="smod-grid">
                {modulos.map((m) =>
                  m.habilitado ? (
                    <div key={m.id} className="smod-card unlocked" onClick={() => navigate(`/app/modulo/${m.id}`)}>
                      <div className="top-row">
                        <span className="emoji" style={{ background: 'var(--blue-tint)' }}><Icon name="ic-book" size={22} color="var(--blue)" /></span>
                        {m.completado && <Icon name="ic-check" size={18} color="var(--green)" />}
                      </div>
                      <h4>{m.nombre}</h4>
                      <p className="desc">{m.descripcion}</p>
                      <div className="progress-bar"><i style={{ width: m.completado ? '100%' : '0%' }} /></div>
                      <div className="pct"><span>{m.completado ? '100% completado' : 'Por comenzar'}</span><span>{m.completado ? 'Repasar' : 'Comenzar'}</span></div>
                    </div>
                  ) : (
                    <div key={m.id} className="smod-card locked">
                      <div className="top-row">
                        <span className="emoji" style={{ background: 'var(--bg-warm)' }}><Icon name="ic-book" size={22} color="var(--ink-soft)" /></span>
                        <Icon name="ic-lock" size={17} color="var(--ink-soft)" />
                      </div>
                      <h4>{m.nombre}</h4>
                      <p className="desc">{m.descripcion}</p>
                      <div className="lock-tag"><Icon name="ic-lock" size={13} />Tu docente aún no lo habilita</div>
                    </div>
                  )
                )}
              </div>
            )}
          </div>
        </>
      )}
    </AppShell>
  )
}
