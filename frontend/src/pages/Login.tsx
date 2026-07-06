import { useState } from 'react'
import type { FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { Icon } from '../components/IconSprite'
import { login as apiLogin } from '../api/auth.api'
import { useAuth } from '../hooks/useAuth'
import { mensajeError } from '../utils/helpers'

export function Login() {
  const navigate = useNavigate()
  const { login } = useAuth()
  const [email, setEmail] = useState('')
  const [contrasena, setContrasena] = useState('')
  const [error, setError] = useState('')
  const [cargando, setCargando] = useState(false)

  const submit = async (e: FormEvent) => {
    e.preventDefault()
    setError('')
    setCargando(true)
    try {
      const { data } = await apiLogin(email.trim().toLowerCase(), contrasena)
      login(data.usuario, data.access_token)
      navigate(data.usuario.roles.includes('PROFESOR') ? '/docente' : '/app')
    } catch (err) {
      setError(mensajeError(err, 'Correo o clave incorrectos.'))
    } finally {
      setCargando(false)
    }
  }

  return (
    <div className="auth-wrap">
      <div className="auth-side">
        <div className="brand"><Icon name="chakana-full" size={30} color="#fff" />Ashpa</div>
        <div className="auth-quote">
          "Shuk shimi, shuk kawsay — un idioma, una forma de ver el mundo."
          <span>Bienvenido de vuelta a tu aula.</span>
        </div>
        <div className="chakana-bg">
          <svg width="300" viewBox="0 0 100 100" style={{ bottom: -70, left: -50, color: '#fff' }}><use href="#chakana-full" /></svg>
        </div>
      </div>
      <div className="auth-form-side">
        <form className="auth-box" onSubmit={submit}>
          <a className="back-link" onClick={() => navigate('/')}><Icon name="ic-arrow" size={14} style={{ transform: 'rotate(180deg)' }} />Volver al inicio</a>
          <h2>Inicia sesión</h2>
          <p className="sub">Ingresa con el correo y la clave que creaste al registrarte.</p>
          {error && <div className="auth-error">{error}</div>}
          <div className="field">
            <label>Correo electrónico</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="tu@correo.com" required />
          </div>
          <div className="field">
            <label>Clave</label>
            <input type="password" value={contrasena} onChange={(e) => setContrasena(e.target.value)} placeholder="••••••••" required />
          </div>
          <button className="btn btn-primary btn-block" type="submit" disabled={cargando}>
            {cargando ? 'Ingresando…' : 'Ingresar'} <Icon name="ic-arrow" size={15} />
          </button>
          <div className="auth-switch">¿No tienes cuenta? <a onClick={() => navigate('/register')}>Regístrate</a></div>
          <div className="auth-switch" style={{ marginTop: 6, fontSize: 12.5 }}>
            Demo docente: <b>profesor@ashpa.edu</b> / <b>password123</b><br />
            Demo estudiante: <b>estudiante@ashpa.edu</b> / <b>password123</b>
          </div>
        </form>
      </div>
    </div>
  )
}
