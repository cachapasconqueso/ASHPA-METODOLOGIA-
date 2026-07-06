import { useNavigate } from 'react-router-dom'
import { Icon } from '../components/IconSprite'

export function Landing() {
  const navigate = useNavigate()
  return (
    <section>
      <nav className="nav">
        <div className="brand">
          <Icon name="chakana-full" size={34} color="#2E6E8E" />
          Ashpa
        </div>
        <div className="nav-links">
          <button className="btn btn-ghost btn-sm" onClick={() => navigate('/login')}>Iniciar sesión</button>
          <button className="btn btn-primary btn-sm" onClick={() => navigate('/register')}>Crear cuenta</button>
        </div>
      </nav>

      <div className="hero">
        <div className="chakana-bg">
          <svg width="360" viewBox="0 0 100 100" style={{ top: -60, right: -40, color: '#D97B33' }}>
            <use href="#chakana-full" />
          </svg>
        </div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="eyebrow"><span className="eyebrow-dot"></span>Aula virtual · Quichua</div>
          <h1>Yachakuy quichuata<br /><span className="accent">de forma guiada</span>, no sola.</h1>
          <p className="hero-sub">Ashpa conecta a cada docente con su aula: el docente decide qué módulos se habilitan, los estudiantes se unen con un código de clase, y todos siguen su progreso módulo a módulo.</p>
          <div className="hero-cta">
            <button className="btn btn-orange" onClick={() => navigate('/register')}>Soy estudiante <Icon name="ic-arrow" size={16} /></button>
            <button className="btn btn-ghost" onClick={() => navigate('/login')}>Soy docente</button>
          </div>
          <div className="hero-stats">
            <div className="hero-stat"><b>6</b><span>módulos por aula</span></div>
            <div className="hero-stat"><b>1</b><span>código, un aula entera</span></div>
            <div className="hero-stat"><b>100%</b><span>progreso visible al docente</span></div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="word-card"><div><div className="word-q">Alli puncha</div><div className="word-s">Buenos días</div></div><span className="word-tag tag-green">Saludos</span></div>
          <div className="word-card"><div><div className="word-q">Mama</div><div className="word-s">Madre</div></div><span className="word-tag tag-orange">Familia</span></div>
          <div className="word-card"><div><div className="word-q">Allqu</div><div className="word-s">Perro</div></div><span className="word-tag tag-green">Animales</span></div>
        </div>
      </div>

      <div className="roles">
        <div className="section-head">
          <span className="kicker">Dos roles, un aula</span>
          <h2>Diseñado para cómo enseñas y aprendes de verdad.</h2>
        </div>
        <div className="role-grid">
          <div className="role-card teacher">
            <div className="role-icon"><Icon name="ic-users" size={24} color="var(--orange-dark)" /></div>
            <h3>Docente</h3>
            <p>Crea tus aulas, comparte el código de acceso y decide qué módulos se habilitan primero.</p>
            <ul className="role-list">
              <li><Icon name="ic-check" size={16} color="var(--green)" />Cada aula genera su código único</li>
              <li><Icon name="ic-check" size={16} color="var(--green)" />Habilita o bloquea módulos en el orden que prefieras</li>
              <li><Icon name="ic-check" size={16} color="var(--green)" />Revisa el progreso de cada estudiante</li>
            </ul>
            <button className="btn btn-orange btn-block" onClick={() => navigate('/login')}>Ingresar como docente</button>
          </div>
          <div className="role-card student">
            <div className="role-icon"><Icon name="ic-book" size={24} color="var(--green-dark)" /></div>
            <h3>Estudiante</h3>
            <p>Ingresa con el código que te dio tu docente y avanza por los módulos habilitados.</p>
            <ul className="role-list">
              <li><Icon name="ic-check" size={16} color="var(--green)" />Registro con el código de tu aula</li>
              <li><Icon name="ic-check" size={16} color="var(--green)" />Ves los módulos que tu docente habilitó</li>
              <li><Icon name="ic-check" size={16} color="var(--green)" />Sigue tu propio progreso e insignias</li>
            </ul>
            <button className="btn btn-primary btn-block" onClick={() => navigate('/register')}>Unirme con un código</button>
          </div>
        </div>
      </div>

      <div className="how">
        <div className="section-head">
          <span className="kicker">Cómo funciona</span>
          <h2>De cero a la primera lección en cuatro pasos.</h2>
        </div>
        <div className="how-grid">
          <div className="how-step"><span className="n">01</span><h4>El docente crea el aula</h4><p>Se genera automáticamente un código único con todos los módulos.</p></div>
          <div className="how-step"><span className="n">02</span><h4>Comparte el código</h4><p>Lo entrega a sus estudiantes de forma presencial o virtual.</p></div>
          <div className="how-step"><span className="n">03</span><h4>El estudiante se une</h4><p>Se registra una sola vez con ese código, correo y clave propios.</p></div>
          <div className="how-step"><span className="n">04</span><h4>Aprenden en orden</h4><p>Los módulos se habilitan según el ritmo que define el docente.</p></div>
        </div>
      </div>

      <div className="footer">
        <div className="brand" style={{ fontSize: 15 }}><Icon name="chakana-full" size={20} color="var(--blue)" />Ashpa</div>
        <span>Yachaykuna quichua para aulas reales · Cuenca, Ecuador</span>
      </div>
    </section>
  )
}
