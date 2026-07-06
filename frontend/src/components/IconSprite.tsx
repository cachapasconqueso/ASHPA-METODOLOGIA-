import type { CSSProperties } from 'react'

// Hoja de símbolos SVG (se monta una sola vez en el App).
export function IconSprite() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
      <defs>
        <symbol id="ic-check" viewBox="0 0 20 20"><path d="M4 10.5l4 4L16 6" stroke="currentColor" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" /></symbol>
        <symbol id="ic-lock" viewBox="0 0 20 20"><rect x="4" y="9" width="12" height="8" rx="2" stroke="currentColor" strokeWidth="1.8" fill="none" /><path d="M6.5 9V6.5a3.5 3.5 0 017 0V9" stroke="currentColor" strokeWidth="1.8" fill="none" /></symbol>
        <symbol id="ic-unlock" viewBox="0 0 20 20"><rect x="4" y="9" width="12" height="8" rx="2" stroke="currentColor" strokeWidth="1.8" fill="none" /><path d="M6.5 9V6.5a3.5 3.5 0 016.5-1.8" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" /></symbol>
        <symbol id="ic-arrow" viewBox="0 0 20 20"><path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" /></symbol>
        <symbol id="ic-home" viewBox="0 0 20 20"><path d="M3 9.5L10 4l7 5.5V16a1 1 0 01-1 1h-4v-5H8v5H4a1 1 0 01-1-1V9.5z" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinejoin="round" /></symbol>
        <symbol id="ic-book" viewBox="0 0 20 20"><path d="M4 4.5S6 3.5 10 3.5s6 1 6 1v11s-2-1-6-1-6 1-6 1v-11z" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinejoin="round" /><path d="M10 4.5v11" stroke="currentColor" strokeWidth="1.6" /></symbol>
        <symbol id="ic-users" viewBox="0 0 20 20"><circle cx="7" cy="6.5" r="2.5" stroke="currentColor" strokeWidth="1.6" fill="none" /><path d="M2.5 16c.5-3 2.2-4.5 4.5-4.5s4 1.5 4.5 4.5" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" /><circle cx="14" cy="7" r="2" stroke="currentColor" strokeWidth="1.6" fill="none" /><path d="M12.5 11.2c1.7.2 3 1.5 3.4 3.8" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" /></symbol>
        <symbol id="ic-chart" viewBox="0 0 20 20"><path d="M3 17V9M9 17V3M15 17v-6" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" /></symbol>
        <symbol id="ic-target" viewBox="0 0 20 20"><circle cx="10" cy="10" r="6.5" stroke="currentColor" strokeWidth="1.6" fill="none" /><circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="1.6" fill="none" /><circle cx="10" cy="10" r="0.8" fill="currentColor" /></symbol>
        <symbol id="ic-award" viewBox="0 0 20 20"><circle cx="10" cy="8" r="4.5" stroke="currentColor" strokeWidth="1.6" fill="none" /><path d="M7 12l-1.6 5.5 4.6-2.6 4.6 2.6L13 12" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinejoin="round" /></symbol>
        <symbol id="ic-plus" viewBox="0 0 20 20"><path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></symbol>
        <symbol id="ic-logout" viewBox="0 0 20 20"><path d="M8 17H5a1 1 0 01-1-1V4a1 1 0 011-1h3M13 14l4-4-4-4M17 10H7" stroke="currentColor" strokeWidth="1.7" fill="none" strokeLinecap="round" strokeLinejoin="round" /></symbol>
        <symbol id="ic-copy" viewBox="0 0 20 20"><rect x="7" y="7" width="9" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.6" fill="none" /><path d="M4 13V4.5A1.5 1.5 0 015.5 3H12" stroke="currentColor" strokeWidth="1.6" fill="none" /></symbol>
        <symbol id="chakana-full" viewBox="0 0 100 100"><path d="M40 0h20v20h20v20h20v20H80v20H60v20H40V80H20V60H0V40h20V20h20V0z" fill="currentColor" /><rect x="40" y="40" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="3" /></symbol>
      </defs>
    </svg>
  )
}

export function Icon({ name, size = 18, color, style }: { name: string; size?: number; color?: string; style?: CSSProperties }) {
  return (
    <svg width={size} height={size} style={{ color, ...style }} aria-hidden="true">
      <use href={`#${name}`} />
    </svg>
  )
}
