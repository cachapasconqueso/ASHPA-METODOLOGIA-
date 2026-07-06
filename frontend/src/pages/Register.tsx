import { useState } from 'react'
import type { FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { Icon } from '../components/IconSprite'
import { register as apiRegister } from '../api/auth.api'
import { useAuth } from '../hooks/useAuth'
import { toast } from '../store/toast'
import { mensajeError } from '../utils/helpers'

export function Register() {
  const navigate = useNavigate()
  const { login } = useAuth()
  const [codigo, setCodigo] = useState('')
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [contrasena, setContrasena] = useState('')
  const [error, setError] = useState('')
  const [cargando, setCargando] = useState(false)

  const submit = async (e: FormEvent) => {
    e.preventDefault()
    setError('')
    if (contrasena.length < 6) {
      setError('La clave debe tener al menos 6 caracteres.')
      return
    }
    setCargando(true)
    try {
      const { data } = await apiRegister(nombre.trim(), email.trim().toLowerCase(), contrasena, codigo.trim().toUpperCase())
      login(data.usuario, data.access_token)
      toast(`¡Cuenta creada! Bienvenido/a a ${data.aula?.nombre ?? 'tu aula'}`)
      navigate('/app')
    } catch (err) {
      setError(mensajeError(err, 'No se pudo crear la cuenta.'))
    } finally {
      setCargando(false)
    }
  }

  return (
    <div className="auth-wrap">
      <div className="auth-side">
        <div className="brand"><Icon name="chakana-full" size={30} color="#fff" />Ashpa</div>
        <div className="auth-quote">
          "Kunanmi kallarina — hoy es cuando empezamos."
          <span>Únete al aula de tu docente con un código.</span>
        </div>
        <div className="chakana-bg">
          <svg width="300" viewBox="0 0 100 100" style={{ bottom: -70, left: -50, color: '#fff' }}><use href="#chakana-full" /></svg>
        </div>
      </div>
      <div className="auth-form-side">
        <form className="auth-box" onSubmit={submit}>
          <a className="back-link" onClick={() => navigate('/')}><Icon name="ic-arrow" size={14} style={{ transform: 'rotate(180deg)' }} />Volver al inicio</a>
          <h2>Crea tu cuenta</h2>
          <p className="sub">Regístrate como estudiante con el código de tu aula.</p>
          {error && <div className="auth-error">{error}</div>}
          <div className="field">
            <label>Código del aula</label>
            <input type="text" value={codigo} onChange={(e) => setCodigo(e.target.value)} placeholder="Ej. QUICHUA1" style={{ textTransform: 'uppercase' }} required />
            <p className="field-hint">Pídeselo a tu docente. Solo él lo genera.</p>
          </div>
          <div className="field">
            <label>Nombre completo</label>
            <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Tu nombre" required />
          </div>
          <div className="field">
            <label>Correo electrónico</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="tu@correo.com" required />
          </div>
          <div className="field">
            <label>Crea una clave</label>
            <input type="password" value={contrasena} onChange={(e) => setContrasena(e.target.value)} placeholder="Mínimo 6 caracteres" required />
          </div>
          <button className="btn btn-primary btn-block" type="submit" disabled={cargando}>
            {cargando ? 'Creando…' : 'Crear cuenta'} <Icon name="ic-arrow" size={15} />
          </button>
          <div className="auth-switch">¿Ya tienes cuenta? <a onClick={() => navigate('/login')}>Inicia sesión</a></div>
          <div className="auth-switch" style={{ marginTop: 6, fontSize: 12.5 }}>¿Eres docente? Tu cuenta la crea el administrador; <a onClick={() => navigate('/login')}>inicia sesión</a>.</div>
        </form>
      </div>
    </div>
  )
}
