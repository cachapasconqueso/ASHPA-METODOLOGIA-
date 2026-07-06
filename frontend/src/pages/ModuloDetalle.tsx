import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Icon } from '../components/IconSprite'
import { obtenerModulo } from '../api/modulos.api'
import type { ModuloDetalle as TModulo } from '../types'

export function ModuloDetalle() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [modulo, setModulo] = useState<TModulo | null>(null)
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    if (!id) return
    obtenerModulo(id)
      .then(({ data }) => setModulo(data))
      .finally(() => setCargando(false))
  }, [id])

  if (cargando) return <div className="spinner" />
  if (!modulo)
    return (
      <div style={{ padding: 40, textAlign: 'center' }}>
        Módulo no encontrado. <a className="link-btn" onClick={() => navigate('/app')}>Volver</a>
      </div>
    )

  return (
    <div style={{ maxWidth: 760, margin: '0 auto', padding: '34px 22px' }}>
      <a className="back-link" onClick={() => navigate('/app')}><Icon name="ic-arrow" size={14} style={{ transform: 'rotate(180deg)' }} />Volver a mis módulos</a>

      <div className="panel">
        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          <span style={{ background: 'var(--blue-tint)', width: 52, height: 52, borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name="ic-book" size={26} color="var(--blue)" /></span>
          <div>
            <h2 style={{ fontSize: 22 }}>{modulo.nombre}</h2>
            <p style={{ color: 'var(--ink-soft)', fontSize: 13 }}>Nivel {modulo.nivel} · {modulo.ejercicios.length} ejercicios de práctica</p>
          </div>
        </div>
        <p style={{ color: 'var(--ink-soft)', marginTop: 14 }}>{modulo.descripcion}</p>
      </div>

      <div className="panel">
        <div className="panel-head"><div><h3>Practica (repaso)</h3><p className="sub">Revisa el vocabulario antes de tu evaluación.</p></div></div>
        {modulo.ejercicios.map((ej, i) => (
          <div key={ej.id} className="quiz-q">
            <div className="q-num">Práctica {i + 1} · {ej.tipo}</div>
            <h4>{ej.pregunta}</h4>
            {ej.opciones.map((op, j) => (
              <div key={j} className="opt" style={{ cursor: 'default' }}><span className="dot" />{op}</div>
            ))}
          </div>
        ))}
      </div>

      {modulo.evaluacion ? (
        <button className="btn btn-orange btn-block" onClick={() => navigate(`/app/modulo/${modulo.id}/evaluacion`)}>
          Ir a la evaluación ({modulo.evaluacion.preguntas.length} preguntas) <Icon name="ic-arrow" size={15} />
        </button>
      ) : (
        <p style={{ textAlign: 'center', color: 'var(--ink-soft)' }}>Este módulo no tiene evaluación.</p>
      )}
    </div>
  )
}
