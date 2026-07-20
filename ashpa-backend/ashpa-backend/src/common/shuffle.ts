// Baraja (Fisher-Yates) un arreglo sin mutar el original.
// Se usa para que las opciones de práctica y evaluación no aparezcan siempre
// en el mismo orden (la respuesta correcta no debe quedar siempre de primera).
export function shuffle<T>(items: T[]): T[] {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
