import type { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import { Icon } from './IconSprite'
import { useAuth } from '../hooks/useAuth'
import { iniciales } from '../utils/helpers'

export interface NavItem {
  icon: string
  label: string
  active?: boolean
  onClick?: () => void
}

interface AppShellProps {
  nav: NavItem[]
  user: { nombre: string; sub: string; color: string }
  children: ReactNode
}

export function AppShell({ nav, user, children }: AppShellProps) {
  const { logout } = useAuth()
  const navigate = useNavigate()
  const salir = () => {
    logout()
    navigate('/')
  }

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <Icon name="chakana-full" size={26} color="#2E6E8E" />
          Ashpa
        </div>
        <ul className="side-nav">
          {nav.map((n, i) => (
            <li key={i}>
              <a className={n.active ? 'active' : ''} onClick={n.onClick}>
                <Icon name={n.icon} size={17} />
                {n.label}
              </a>
            </li>
          ))}
          <li className="divider"></li>
          <li>
            <a onClick={salir}>
              <Icon name="ic-logout" size={17} />
              Cerrar sesión
            </a>
          </li>
        </ul>
        <div className="side-foot">
          <div className="avatar" style={{ background: user.color }}>
            {iniciales(user.nombre)}
          </div>
          <div className="who">
            <b>{user.nombre}</b>
            <span>{user.sub}</span>
          </div>
        </div>
      </aside>
      <main className="main">{children}</main>
    </div>
  )
}
