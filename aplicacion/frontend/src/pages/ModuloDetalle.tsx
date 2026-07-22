import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Icon } from '../components/IconSprite'
import { obtenerModulo } from '../api/modulos.api'
import type { ModuloDetalle as TModulo } from '../types'
import { ContenidoLeccion } from '../utils/contenidoLeccion'

export function ModuloDetalle() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [modulo, setModulo] = useState<TModulo | null>(null)
  const [cargando, setCargando] = useState(true)
  const [respuestas, setRespuestas] = useState<Record<string, string>>({})

  useEffect(() => {
    if (!id) return
    obtenerModulo(id)
      .then(({ data }) => setModulo(data))
      .finally(() => setCargando(false))
  }, [id])

  const seleccionar = (ejercicioId: string, opcion: string) =>
    setRespuestas((r) => ({ ...r, [ejercicioId]: opcion }))

  if (cargando) return <div className="spinner" />
  if (!modulo)
    return (
      <div style={{ padding: 40, textAlign: 'center' }}>
        Módulo no encontrado. <a className="link-btn" onClick={() => navigate('/app')}>Volver</a>
      </div>
    )

  const totalPracticadas = Object.keys(respuestas).filter((k) => modulo.ejercicios.some((e) => e.id === k)).length

  return (
    <div style={{ maxWidth: 760, margin: '0 auto', padding: '34px 22px' }}>
      <a className="back-link" onClick={() => navigate('/app')}><Icon name="ic-arrow" size={14} style={{ transform: 'rotate(180deg)' }} />Volver a mis módulos</a>

      <div className="panel">
        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          <span style={{ background: 'var(--blue-tint)', width: 52, height: 52, borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name="ic-book" size={26} color="var(--blue)" /></span>
          <div>
            <h2 style={{ fontSize: 22 }}>{modulo.nombre}</h2>
            <p style={{ color: 'var(--ink-soft)', fontSize: 13 }}>Nivel {modulo.nivel} · {modulo.ejercicios.length} lecciones</p>
          </div>
        </div>
        <p style={{ color: 'var(--ink-soft)', marginTop: 14 }}>{modulo.descripcion}</p>
      </div>

      {modulo.contenido && (
        <div className="panel">
          <div className="panel-head">
            <div>
              <h3>Contenido</h3>
              <p className="sub">Lee esta lección antes de practicar: aquí está el vocabulario, la gramática y los ejemplos del tema.</p>
            </div>
          </div>
          <ContenidoLeccion contenido={modulo.contenido} />
        </div>
      )}

      <div className="panel">
        <div className="panel-head">
          <div>
            <h3>Practica lo aprendido</h3>
            <p className="sub">Un quiz corto de autocorrección: elegí una opción y vas a ver al instante si acertaste — no se califica, es solo para reforzar lo que acabas de leer.</p>
          </div>
        </div>

        {modulo.ejercicios.map((ej, i) => {
          const seleccionado = respuestas[ej.id]
          const respondido = !!seleccionado

          return (
            <div key={ej.id} className="leccion-bloque">
              <div className="quiz-q">
                <div className="q-num">Pregunta {i + 1} de {modulo.ejercicios.length}</div>
                <h4>{ej.pregunta}</h4>
                {ej.opciones.map((op, j) => {
                  const esLaCorrecta = op === ej.respuesta
                  const esLaSeleccionada = seleccionado === op
                  let claseExtra = ''
                  if (respondido) {
                    if (esLaCorrecta) claseExtra = 'correct'
                    else if (esLaSeleccionada) claseExtra = 'incorrect'
                  }
                  return (
                    <div
                      key={j}
                      className={`opt ${esLaSeleccionada ? 'sel' : ''} ${claseExtra}`}
                      onClick={() => seleccionar(ej.id, op)}
                    >
                      <span className="dot" />
                      {op}
                      {respondido && esLaCorrecta && <Icon name="ic-check" size={15} color="var(--green)" style={{ marginLeft: 'auto' }} />}
                    </div>
                  )
                })}
                {respondido && (
                  <>
                    <p className={`leccion-feedback ${seleccionado === ej.respuesta ? 'ok' : 'ko'}`}>
                      {seleccionado === ej.respuesta ? '¡Correcto!' : `No es esa. La respuesta correcta es "${ej.respuesta}".`}
                    </p>
                    <div className="leccion-explica">
                      <Icon name="ic-book" size={16} color="var(--blue)" />
                      <p>{ej.explicacion}</p>
                    </div>
                  </>
                )}
              </div>
            </div>
          )
        })}

        <p style={{ textAlign: 'center', fontSize: 12.5, color: 'var(--ink-soft)', marginTop: 4 }}>
          Practicaste {totalPracticadas} de {modulo.ejercicios.length} puntos.
        </p>
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
