import { useEffect, useState } from 'react'
import { AppShell } from '../components/AppShell'
import { StatCard } from '../components/StatCard'
import { Icon } from '../components/IconSprite'
import { useAuth } from '../hooks/useAuth'
import { misAulas, estudiantesDeAula, crearAula } from '../api/aulas.api'
import { modulosPorAula, cambiarActivoModulo } from '../api/modulos.api'
import { toast } from '../store/toast'
import { iniciales, mensajeError } from '../utils/helpers'
import type { Aula, EstudianteAula, Modulo } from '../types'

type Vista = 'overview' | 'estudiantes' | 'modulos' | 'progreso'

const estadoDe = (promedio: number) =>
  promedio === 0
    ? { cls: 'status-warn', label: 'Sin empezar' }
    : promedio < 50
      ? { cls: 'status-stuck', label: 'Atascado/a' }
      : { cls: 'status-ok', label: 'Al día' }

export function DocenteDashboard() {
  const { usuario } = useAuth()
  const [aulas, setAulas] = useState<Aula[]>([])
  const [aulaSel, setAulaSel] = useState<string | null>(null)
  const [vista, setVista] = useState<Vista>('overview')
  const [estudiantes, setEstudiantes] = useState<EstudianteAula[]>([])
  const [modulos, setModulos] = useState<Modulo[]>([])
  const [modal, setModal] = useState(false)
  const [nombreNueva, setNombreNueva] = useState('')

  const cargarAulas = () => misAulas().then(({ data }) => { setAulas(data); if (!aulaSel && data.length) setAulaSel(data[0].id) })

  useEffect(() => { cargarAulas() }, [])

  useEffect(() => {
    if (!aulaSel) return
    estudiantesDeAula(aulaSel).then(({ data }) => setEstudiantes(data)).catch(() => setEstudiantes([]))
    modulosPorAula(aulaSel).then(({ data }) => setModulos(data)).catch(() => setModulos([]))
  }, [aulaSel])

  const aula = aulas.find((a) => a.id === aulaSel)
  const totalEstudiantes = aulas.reduce((s, a) => s + (a._count?.estudiantes ?? 0), 0)
  const promedioAula = estudiantes.length ? Math.round(estudiantes.reduce((s, e) => s + e.promedio, 0) / estudiantes.length) : 0

  const crear = async () => {
    try {
      const { data } = await crearAula(nombreNueva.trim() || 'Nueva aula')
      toast(`Aula creada. Código: ${data.codigo}`)
      setModal(false)
      setNombreNueva('')
      await cargarAulas()
      setAulaSel(data.id)
      setVista('modulos')
    } catch (e) {
      toast(mensajeError(e, 'No se pudo crear el aula'))
    }
  }

  const toggleModulo = async (m: Modulo) => {
    try {
      await cambiarActivoModulo(m.id, !m.activo)
      setModulos((ms) => ms.map((x) => (x.id === m.id ? { ...x, activo: !x.activo, habilitado: !x.activo } : x)))
      toast(!m.activo ? 'Módulo habilitado para tus estudiantes' : 'Módulo bloqueado')
    } catch (e) {
      toast(mensajeError(e))
    }
  }

  const copiarCodigo = () => {
    if (aula) {
      navigator.clipboard?.writeText(aula.codigo)
      toast(`Código copiado: ${aula.codigo}`)
    }
  }

  const nav = [
    { icon: 'ic-home', label: 'Mis aulas', active: vista === 'overview', onClick: () => setVista('overview') },
    { icon: 'ic-users', label: 'Estudiantes', active: vista === 'estudiantes', onClick: () => setVista('estudiantes') },
    { icon: 'ic-book', label: 'Módulos', active: vista === 'modulos', onClick: () => setVista('modulos') },
    { icon: 'ic-chart', label: 'Progreso', active: vista === 'progreso', onClick: () => setVista('progreso') },
  ]

  const titulos: Record<Vista, [string, string]> = {
    overview: ['Mis aulas', 'Gestiona tus aulas, códigos y el avance de tus estudiantes.'],
    estudiantes: ['Estudiantes', `${aula?.nombre ?? 'Selecciona un aula'} · ${estudiantes.length} inscritos`],
    modulos: ['Módulos', `Controla qué módulos ve el aula ${aula?.nombre ?? ''}`],
    progreso: ['Progreso del aula', `Dominio promedio por módulo — ${aula?.nombre ?? ''}`],
  }

  return (
    <AppShell nav={nav} user={{ nombre: usuario?.nombre ?? 'Docente', sub: 'Docente', color: 'var(--orange)' }}>
      {vista !== 'overview' && (
        <a className="back-link" onClick={() => setVista('overview')}>
          <Icon name="ic-arrow" size={14} style={{ transform: 'rotate(180deg)' }} />Volver a mis aulas
        </a>
      )}
      <div className="topbar">
        <div><h1>{titulos[vista][0]}</h1><p className="sub">{titulos[vista][1]}</p></div>
        <button className="btn btn-orange" onClick={() => setModal(true)}><Icon name="ic-plus" size={16} />Nueva aula</button>
      </div>

      <div className="stat-row">
        <StatCard label="Aulas activas" value={aulas.length} color="var(--blue)" tint="var(--blue-tint)" icon="ic-home" />
        <StatCard label="Estudiantes totales" value={totalEstudiantes} color="var(--green)" tint="var(--green-tint)" icon="ic-users" />
        <StatCard label="Módulos por aula" value={aula?._count?.modulos ?? modulos.length} color="var(--orange)" tint="var(--orange-tint)" icon="ic-book" />
        <StatCard label="Promedio del aula" value={`${promedioAula}%`} color="#A83A3A" tint="#FBE4E4" icon="ic-chart" />
      </div>

      {/* OVERVIEW */}
      {vista === 'overview' && (
        <div className="panel">
          <div className="panel-head"><div><h3>Tus aulas</h3><p className="sub">Selecciona una para ver módulos y estudiantes.</p></div></div>
          {aulas.length === 0 ? (
            <div className="empty-state"><Icon name="ic-home" size={46} color="var(--line)" /><h4>No tienes aulas todavía</h4><p>Crea tu primera aula para generar un código y recibir estudiantes.</p></div>
          ) : (
            <div className="class-grid">
              {aulas.map((a) => (
                <div key={a.id} className={`class-card ${a.id === aulaSel ? 'selected' : ''}`} onClick={() => { setAulaSel(a.id); setVista('modulos') }}>
                  <span className="code-pill">{a.codigo}</span>
                  <h4>{a.nombre}</h4>
                  <div className="meta">{a._count?.estudiantes ?? 0} estudiante(s) · {a._count?.modulos ?? 0} módulos</div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ESTUDIANTES */}
      {vista === 'estudiantes' && (
        <div className="panel">
          <div className="panel-head"><div><h3>Estudiantes de {aula?.nombre ?? '—'}</h3><p className="sub">Progreso promedio de cada estudiante.</p></div></div>
          {estudiantes.length === 0 ? (
            <div className="empty-state"><Icon name="ic-users" size={46} color="var(--line)" /><h4>Aún no hay estudiantes</h4><p>Comparte el código {aula?.codigo} para que se registren.</p></div>
          ) : (
            <table>
              <thead><tr><th>Estudiante</th><th>Progreso</th><th>Módulos</th><th>Estado</th></tr></thead>
              <tbody>
                {estudiantes.map((e) => {
                  const est = estadoDe(e.promedio)
                  return (
                    <tr key={e.id}>
                      <td><div className="student-cell"><div className="avatar" style={{ width: 30, height: 30, fontSize: 11, background: 'var(--blue)' }}>{iniciales(e.nombre)}</div>{e.nombre}</div></td>
                      <td><span className="mini-bar"><i style={{ width: `${e.promedio}%` }} /></span>{e.promedio}%</td>
                      <td>{e.modulosCompletados} / {e.totalModulos}</td>
                      <td><span className={`status-pill ${est.cls}`}>{est.label}</span></td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          )}
        </div>
      )}

      {/* MODULOS */}
      {vista === 'modulos' && (
        <div className="panel">
          <div className="panel-head">
            <div><h3>Módulos de {aula?.nombre ?? '—'}</h3><p className="sub">Habilita o bloquea módulos en el orden que prefieras.</p></div>
            {aula && <div className="badge-code" onClick={copiarCodigo}><Icon name="ic-copy" size={15} />{aula.codigo}</div>}
          </div>
          {modulos.map((m) => (
            <div key={m.id} className="module-row">
              <div className="idx">{String(m.orden).padStart(2, '0')}</div>
              <div className="info"><h4>{m.nombre}</h4><span>{m.descripcion}</span></div>
              <div className="lock-tag" style={{ color: m.activo ? 'var(--green-dark)' : 'var(--ink-soft)' }}>
                <Icon name={m.activo ? 'ic-unlock' : 'ic-lock'} size={15} />{m.activo ? 'Habilitado' : 'Bloqueado'}
              </div>
              <div className={`lock-switch ${m.activo ? 'on' : ''}`} onClick={() => toggleModulo(m)}><i /></div>
            </div>
          ))}
        </div>
      )}

      {/* PROGRESO */}
      {vista === 'progreso' && (
        <div className="panel">
          <div className="panel-head"><div><h3>Avance por módulo — {aula?.nombre ?? '—'}</h3><p className="sub">Puntaje promedio del grupo en cada módulo.</p></div></div>
          {modulos.map((m) => {
            const vals = estudiantes
              .map((e) => e.progreso.find((p) => p.moduloId === m.id))
              .filter((p): p is NonNullable<typeof p> => !!p && p.completado)
              .map((p) => p.puntaje ?? 100)
            const avg = vals.length ? Math.round(vals.reduce((a, b) => a + b, 0) / vals.length) : 0
            return (
              <div key={m.id} style={{ marginBottom: 16 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13.5, marginBottom: 6 }}>
                  <span style={{ fontWeight: 600 }}>{m.nombre}</span>
                  <span style={{ color: 'var(--ink-soft)', fontFamily: 'var(--font-mono)' }}>{avg}%</span>
                </div>
                <div className="progress-bar"><i style={{ width: `${avg}%`, background: m.activo ? 'var(--blue)' : 'var(--line)' }} /></div>
              </div>
            )
          })}
        </div>
      )}

      {/* MODAL NUEVA AULA */}
      {modal && (
        <div className="modal-overlay" onClick={(e) => { if (e.target === e.currentTarget) setModal(false) }}>
          <div className="modal">
            <div className="modal-head"><h3>Crear nueva aula</h3><button className="btn-icon" onClick={() => setModal(false)}>✕</button></div>
            <div className="field"><label>Nombre del aula</label><input type="text" value={nombreNueva} onChange={(e) => setNombreNueva(e.target.value)} placeholder="Ej. Quichua Intermedio B" /></div>
            <p className="field-hint" style={{ marginBottom: 18 }}>Se generará un código único y los 6 módulos (solo el primero habilitado).</p>
            <button className="btn btn-primary btn-block" onClick={crear}>Generar aula y código</button>
          </div>
        </div>
      )}
    </AppShell>
  )
}
