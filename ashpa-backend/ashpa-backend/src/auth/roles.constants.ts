// Nombres de los roles del sistema (coinciden con la columna `nombre` de la tabla `roles`).
export const ROLES = {
  ESTUDIANTE: 'ESTUDIANTE',
  PROFESOR: 'PROFESOR',
} as const;

export type NombreRol = (typeof ROLES)[keyof typeof ROLES];
