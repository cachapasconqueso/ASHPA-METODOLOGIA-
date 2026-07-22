import { useEffect } from 'react'
import { useToast } from '../store/toast'

export function Toaster() {
  const { msg, hide } = useToast()
  useEffect(() => {
    if (!msg) return
    const t = setTimeout(hide, 2600)
    return () => clearTimeout(t)
  }, [msg, hide])
  if (!msg) return null
  return <div className="toast">{msg}</div>
}
