import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Icon } from '../components/IconSprite'
import { obtenerEvaluacion, enviarIntento } from '../api/evaluaciones.api'
import { toast } from '../store/toast'
import { mensajeError } from '../utils/helpers'
import type { Evaluacion as TEval, ResultadoIntento } from '../types'

export function Evaluacion() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [evaluacion, setEvaluacion] = useState<TEval | null>(null)
  const [respuestas, setRespuestas] = useState<Record<string, string>>({})
  const [resultado, setResultado] = useState<ResultadoIntento | null>(null)
  const [cargando, setCargando] = useState(true)
  const [enviando, setEnviando] = useState(false)

  useEffect(() => {
    if (!id) return
    obtenerEvaluacion(id)
      .then(({ data }) => setEvaluacion(data))
      .catch(() => {})
      .finally(() => setCargando(false))
  }, [id])

  const seleccionar = (preguntaId: string, opcion: string) => setRespuestas((r) => ({ ...r, [preguntaId]: opcion }))

  const enviar = async () => {
    if (!evaluacion || !id) return
    const arr = evaluacion.preguntas.map((p) => respuestas[p.id] ?? '')
    setEnviando(true)
    try {
      const { data } = await enviarIntento(id, arr)
      setResultado(data)
      if (data.aprobado) toast('¡Módulo aprobado! 🎉')
    } catch (e) {
      toast(mensajeError(e, 'No se pudo enviar la evaluación'))
    } finally {
      setEnviando(false)
    }
  }

  if (cargando) return <div className="spinner" />
  if (!evaluacion)
    return (
      <div style={{ padding: 40, textAlign: 'center' }}>
        No hay evaluación para este módulo. <a className="link-btn" onClick={() => navigate('/app')}>Volver</a>
      </div>
    )

  if (resultado) {
    return (
      <div style={{ maxWidth: 560, margin: '0 auto', padding: '60px 22px', textAlign: 'center' }}>
        <div style={{ width: 72, height: 72, borderRadius: '50%', margin: '0 auto 14px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: resultado.aprobado ? 'var(--green-tint)' : 'var(--orange-tint)' }}>
          <Icon name={resultado.aprobado ? 'ic-check' : 'ic-target'} size={36} color={resultado.aprobado ? 'var(--green)' : 'var(--orange)'} />
        </div>
        <h2 style={{ fontSize: 26 }}>{resultado.aprobado ? '¡Aprobaste!' : 'Casi lo logras'}</h2>
        <p style={{ color: 'var(--ink-soft)', margin: '10px 0 6px' }}>Obtuviste</p>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 46, fontWeight: 700, color: resultado.aprobado ? 'var(--green)' : 'var(--orange)' }}>{resultado.puntaje}%</div>
        <p style={{ color: 'var(--ink-soft)', marginBottom: 26 }}>{resultado.correctas} de {resultado.total} correctas</p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <button className="btn btn-primary" onClick={() => navigate('/app')}>Volver a mis módulos</button>
          {!resultado.aprobado && <button className="btn btn-ghost" onClick={() => { setResultado(null); setRespuestas({}) }}>Reintentar</button>}
        </div>
      </div>
    )
  }

  const todasRespondidas = evaluacion.preguntas.every((p) => respuestas[p.id])

  return (
    <div style={{ maxWidth: 700, margin: '0 auto', padding: '34px 22px' }}>
      <a className="back-link" onClick={() => navigate(`/app/modulo/${id}`)}><Icon name="ic-arrow" size={14} style={{ transform: 'rotate(180deg)' }} />Volver al módulo</a>
      <h2 style={{ fontSize: 24, marginBottom: 6 }}>Evaluación</h2>
      <p style={{ color: 'var(--ink-soft)', marginBottom: 24 }}>Responde las {evaluacion.preguntas.length} preguntas. Necesitas {evaluacion.puntajeMinimo}% para aprobar.</p>
      {evaluacion.preguntas.map((p, i) => (
        <div key={p.id} className="quiz-q">
          <div className="q-num">Pregunta {i + 1} de {evaluacion.preguntas.length}</div>
          <h4>{p.pregunta}</h4>
          {p.opciones.map((op, j) => (
            <div key={j} className={`opt ${respuestas[p.id] === op ? 'sel' : ''}`} onClick={() => seleccionar(p.id, op)}>
              <span className="dot" />{op}
            </div>
          ))}
        </div>
      ))}
      <button className="btn btn-orange btn-block" disabled={!todasRespondidas || enviando} onClick={enviar}>
        {enviando ? 'Enviando…' : 'Enviar evaluación'}
      </button>
      {!todasRespondidas && <p style={{ textAlign: 'center', fontSize: 12.5, color: 'var(--ink-soft)', marginTop: 10 }}>Responde todas las preguntas para enviar.</p>}
    </div>
  )
}
