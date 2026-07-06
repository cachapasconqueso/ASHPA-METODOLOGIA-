export const iniciales = (nombre: string) =>
  nombre
    .trim()
    .split(/\s+/)
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()

const EMOJIS = ['👋', '👨‍👩‍👧', '🌽', '⏰', '🏃', '💬', '🔢', '🎨', '🦙', '🏔️', '🏫', '👕', '📘']

export const emojiModulo = (orden: number) => EMOJIS[(orden - 1) % EMOJIS.length] || '📘'

export const formatDate = (dateStr?: string | null): string => {
  if (!dateStr) return ''
  return new Date(dateStr).toLocaleDateString('es-EC', { year: 'numeric', month: 'long', day: 'numeric' })
}

// Extrae el mensaje de error de una respuesta de axios/Nest
export const mensajeError = (e: any, fallback = 'Ocurrió un error') => {
  const m = e?.response?.data?.message
  if (Array.isArray(m)) return m[0]
  return m || fallback
}
