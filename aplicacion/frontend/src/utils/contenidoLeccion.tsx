// Parser y renderer del mini-formato usado en el campo `contenido` de cada módulo
// (ver src/catalogo/modulos-quichua.ts en el backend):
//   ## Título              -> encabezado de sección
//   palabra :: significado -> par de vocabulario (se agrupa en una grilla de 2 columnas)
//   > kichwa = español     -> línea de ejemplo/oración (se agrupa en un bloque)
//   línea normal           -> párrafo de explicación

type Bloque =
  | { tipo: 'titulo'; texto: string }
  | { tipo: 'vocab'; item: string; significado: string }
  | { tipo: 'ejemplo'; texto: string }
  | { tipo: 'parrafo'; texto: string }

function parsearContenido(contenido: string): Bloque[] {
  return contenido
    .split('\n')
    .map((linea) => linea.trim())
    .filter((linea) => linea.length > 0)
    .map((linea): Bloque => {
      if (linea.startsWith('## ')) return { tipo: 'titulo', texto: linea.slice(3).trim() }
      if (linea.startsWith('> ')) return { tipo: 'ejemplo', texto: linea.slice(2).trim() }
      if (linea.includes('::')) {
        const [item, significado] = linea.split('::')
        return { tipo: 'vocab', item: item.trim(), significado: (significado ?? '').trim() }
      }
      return { tipo: 'parrafo', texto: linea }
    })
}

export function ContenidoLeccion({ contenido }: { contenido: string }) {
  if (!contenido) return null
  const bloques = parsearContenido(contenido)

  const grupos: { tipo: Bloque['tipo']; items: Bloque[] }[] = []
  for (const b of bloques) {
    const ultimo = grupos[grupos.length - 1]
    if (ultimo && ultimo.tipo === b.tipo && (b.tipo === 'vocab' || b.tipo === 'ejemplo')) {
      ultimo.items.push(b)
    } else {
      grupos.push({ tipo: b.tipo, items: [b] })
    }
  }

  return (
    <div className="contenido-leccion">
      {grupos.map((g, i) => {
        if (g.tipo === 'titulo') {
          const t = g.items[0] as Extract<Bloque, { tipo: 'titulo' }>
          return <h4 key={i} className="contenido-titulo">{t.texto}</h4>
        }
        if (g.tipo === 'vocab') {
          return (
            <div key={i} className="vocab-grid">
              {g.items.map((it, j) => {
                const v = it as Extract<Bloque, { tipo: 'vocab' }>
                return (
                  <div key={j} className="vocab-item">
                    <span className="vocab-word">{v.item}</span>
                    <span className="vocab-mean">{v.significado}</span>
                  </div>
                )
              })}
            </div>
          )
        }
        if (g.tipo === 'ejemplo') {
          return (
            <div key={i} className="ejemplo-bloque">
              {g.items.map((it, j) => {
                const e = it as Extract<Bloque, { tipo: 'ejemplo' }>
                return <p key={j} className="ejemplo-linea">{e.texto}</p>
              })}
            </div>
          )
        }
        const p = g.items[0] as Extract<Bloque, { tipo: 'parrafo' }>
        return <p key={i} className="contenido-parrafo">{p.texto}</p>
      })}
    </div>
  )
}
