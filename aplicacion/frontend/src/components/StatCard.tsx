import type { ReactNode } from 'react'
import { Icon } from './IconSprite'

export function StatCard({ label, value, color, tint, icon }: { label: string; value: ReactNode; color: string; tint: string; icon: string }) {
  return (
    <div className="stat-card">
      <div className="top">
        <span className="icon" style={{ background: tint, color }}><Icon name={icon} size={17} /></span>
      </div>
      <b>{value}</b>
      <span>{label}</span>
    </div>
  )
}
