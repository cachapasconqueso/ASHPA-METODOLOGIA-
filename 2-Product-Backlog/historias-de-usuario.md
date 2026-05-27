# 📋 Product Backlog — Historias de Usuario
## Proyecto ASHPA — Sistema de Módulos para el Aprendizaje del Quichua

> **Formato:** Como `[rol]`, quiero `[acción]`, para `[beneficio]`.
>
> **Prioridad:** 🔴 Alta | 🟡 Media | 🟢 Baja
>
> **Story Points:** Estimación de esfuerzo relativo (Fibonacci: 1, 2, 3, 5, 8, 13)

---

## 🗂️ ÉPICAS DEL PROYECTO

| ID Épica | Nombre | Descripción |
|----------|--------|-------------|
| **EP-01** | Autenticación y Registro | Gestión de acceso a la plataforma para estudiantes y docentes |
| **EP-02** | Landing Page | Página de presentación pública de ASHPA |
| **EP-03** | Módulos de Aprendizaje | Sistema de módulos gamificados con contenido en quichua |
| **EP-04** | Evaluaciones y Progreso | Sistema de evaluaciones y seguimiento del avance del estudiante |
| **EP-05** | Panel Docente | Funcionalidades exclusivas para el rol de docente |
| **EP-06** | Administración | Gestión del sistema por parte del administrador |

---

## 📝 HISTORIAS DE USUARIO

---

### EP-01: Autenticación y Registro

---

#### HU-01 — Registro de estudiante
| Campo | Detalle |
|-------|---------|
| **Historia** | Como **estudiante**, quiero **registrarme en la plataforma con mi nombre, correo y contraseña**, para **crear mi cuenta y acceder a los módulos de aprendizaje del quichua**. |
| **Prioridad** | 🔴 Alta |
| **Story Points** | 3 |
| **Sprint** | Sprint 1 |

**Criterios de aceptación:**
- [ ] El formulario de registro solicita: nombre completo, correo electrónico y contraseña
- [ ] Se valida que el correo no esté ya registrado
- [ ] La contraseña tiene mínimo 8 caracteres
- [ ] Al registrarse exitosamente, el estudiante es redirigido a su dashboard
- [ ] Se muestra un mensaje de error claro si algún campo es inválido

---

#### HU-02 — Inicio de sesión de estudiante
| Campo | Detalle |
|-------|---------|
| **Historia** | Como **estudiante**, quiero **iniciar sesión con mi correo y contraseña**, para **acceder a mis módulos y ver mi progreso guardado**. |
| **Prioridad** | 🔴 Alta |
| **Story Points** | 2 |
| **Sprint** | Sprint 1 |

**Criterios de aceptación:**
- [ ] El sistema autentica con correo y contraseña
- [ ] Se genera un token JWT para la sesión
- [ ] Si las credenciales son incorrectas, se muestra mensaje de error
- [ ] El estudiante permanece autenticado por al menos 24 horas
- [ ] Existe opción de "Cerrar sesión"

---

#### HU-03 — Inicio de sesión de docente
| Campo | Detalle |
|-------|---------|
| **Historia** | Como **docente**, quiero **iniciar sesión con mis credenciales institucionales**, para **acceder al panel docente y gestionar a mis estudiantes**. |
| **Prioridad** | 🔴 Alta |
| **Story Points** | 2 |
| **Sprint** | Sprint 1 |

**Criterios de aceptación:**
- [ ] Los docentes tienen rol diferenciado del estudiante
- [ ] Al autenticarse, el docente es redirigido al panel docente (distinto al del estudiante)
- [ ] El sistema valida el rol antes de mostrar las funcionalidades docentes

---

### EP-02: Landing Page

---

#### HU-04 — Visualizar landing page
| Campo | Detalle |
|-------|---------|
| **Historia** | Como **visitante**, quiero **ver una página principal atractiva que explique qué es ASHPA**, para **entender el propósito de la plataforma antes de registrarme**. |
| **Prioridad** | 🔴 Alta |
| **Story Points** | 5 |
| **Sprint** | Sprint 1 |

**Criterios de aceptación:**
- [ ] La página muestra el nombre y logo de ASHPA
- [ ] Existe una sección que explica qué es la plataforma y su propósito de revitalizar el quichua
- [ ] Hay botones visibles de "Registrarse" e "Iniciar sesión"
- [ ] La página es responsive (adaptable a móvil y escritorio)
- [ ] El diseño refleja la identidad cultural quichua (colores, elementos visuales andinos)

---

### EP-03: Módulos de Aprendizaje

---

#### HU-05 — Ver lista de módulos disponibles
| Campo | Detalle |
|-------|---------|
| **Historia** | Como **estudiante**, quiero **ver todos los módulos de quichua disponibles organizados por nivel de dificultad**, para **saber qué puedo aprender y en qué orden**. |
| **Prioridad** | 🔴 Alta |
| **Story Points** | 3 |
| **Sprint** | Sprint 2 |

**Criterios de aceptación:**
- [ ] Los módulos aparecen ordenados de básico a avanzado
- [ ] Cada módulo muestra su nombre, ícono representativo y estado (disponible / bloqueado / completado)
- [ ] Los módulos bloqueados se muestran con candado hasta que el anterior sea aprobado
- [ ] El módulo 1 (Saludos) siempre está disponible para todos los estudiantes

---

#### HU-06 — Completar módulo de vocabulario básico (Saludos)
| Campo | Detalle |
|-------|---------|
| **Historia** | Como **estudiante**, quiero **aprender vocabulario básico de saludos en quichua mediante ejercicios interactivos**, para **construir mi primera base en el idioma**. |
| **Prioridad** | 🔴 Alta |
| **Story Points** | 8 |
| **Sprint** | Sprint 2 |

**Criterios de aceptación:**
- [ ] El módulo contiene al menos 10 palabras/frases de saludo con audio y traducción
- [ ] Incluye ejercicios de emparejamiento (quichua ↔ español)
- [ ] Incluye ejercicios de completar la frase
- [ ] El estudiante puede repetir el módulo tantas veces como quiera
- [ ] Al finalizar todos los ejercicios, se habilita la evaluación del módulo

---

#### HU-07 — Completar módulo de Familia
| Campo | Detalle |
|-------|---------|
| **Historia** | Como **estudiante**, quiero **aprender el vocabulario de familia en quichua**, para **ampliar mi vocabulario con términos de uso cotidiano**. |
| **Prioridad** | 🟡 Media |
| **Story Points** | 8 |
| **Sprint** | Sprint 3 |

**Criterios de aceptación:**
- [ ] El módulo está bloqueado hasta que el módulo de Saludos sea aprobado
- [ ] Contiene al menos 12 términos relacionados a la familia con imágenes y audio
- [ ] Incluye ejercicios interactivos equivalentes a los del módulo anterior

---

#### HU-08 — Completar módulo de Comida y Animales
| Campo | Detalle |
|-------|---------|
| **Historia** | Como **estudiante**, quiero **aprender vocabulario de comida y animales en quichua**, para **enriquecer mi conocimiento del idioma con temas culturalmente relevantes**. |
| **Prioridad** | 🟡 Media |
| **Story Points** | 8 |
| **Sprint** | Sprint 3 |

**Criterios de aceptación:**
- [ ] Módulo desbloqueado al completar Familia
- [ ] Al menos 10 términos de comida y 10 de animales con imágenes representativas
- [ ] Incluye ejercicios de selección múltiple y escritura

---

#### HU-09 — Completar módulo de Tiempos del Día
| Campo | Detalle |
|-------|---------|
| **Historia** | Como **estudiante**, quiero **aprender a expresar los tiempos del día en quichua**, para **usar el idioma en situaciones cotidianas reales**. |
| **Prioridad** | 🟡 Media |
| **Story Points** | 5 |
| **Sprint** | Sprint 4 |

**Criterios de aceptación:**
- [ ] Módulo desbloqueado al completar Comida y Animales
- [ ] Cubre: mañana, mediodía, tarde, noche y sus expresiones en quichua
- [ ] Incluye ejemplos de frases completas en contexto

---

#### HU-10 — Completar módulo avanzado: Conjugaciones de Verbos
| Campo | Detalle |
|-------|---------|
| **Historia** | Como **estudiante**, quiero **aprender a conjugar verbos en quichua**, para **formar oraciones completas y comunicarme de manera más fluida**. |
| **Prioridad** | 🟡 Media |
| **Story Points** | 13 |
| **Sprint** | Sprint 5 |

**Criterios de aceptación:**
- [ ] Módulo desbloqueado al completar todos los módulos de vocabulario básico
- [ ] Cubre al menos 8 verbos comunes con sus conjugaciones en presente, pasado y futuro
- [ ] Incluye ejercicios de construcción de oraciones

---

#### HU-11 — Completar módulo avanzado: Pronombres y Adjetivos
| Campo | Detalle |
|-------|---------|
| **Historia** | Como **estudiante**, quiero **aprender los pronombres y adjetivos del quichua**, para **construir oraciones más complejas y descriptivas**. |
| **Prioridad** | 🟢 Baja |
| **Story Points** | 8 |
| **Sprint** | Sprint 6 |

**Criterios de aceptación:**
- [ ] Módulo desbloqueado al completar Conjugaciones de Verbos
- [ ] Cubre pronombres personales y al menos 15 adjetivos comunes en quichua

---

### EP-04: Evaluaciones y Progreso

---

#### HU-12 — Realizar evaluación al finalizar un módulo
| Campo | Detalle |
|-------|---------|
| **Historia** | Como **estudiante**, quiero **realizar una evaluación al terminar cada módulo**, para **demostrar que domino el contenido y desbloquear el siguiente nivel**. |
| **Prioridad** | 🔴 Alta |
| **Story Points** | 8 |
| **Sprint** | Sprint 2 |

**Criterios de aceptación:**
- [ ] La evaluación contiene al menos 10 preguntas de selección múltiple y completar
- [ ] Se requiere un mínimo del 70% de respuestas correctas para aprobar
- [ ] Si el estudiante no aprueba, puede reintentar la evaluación
- [ ] Al aprobar, el siguiente módulo se desbloquea automáticamente
- [ ] Se guarda el puntaje obtenido y la fecha de aprobación

---

#### HU-13 — Ver panel de progreso personal
| Campo | Detalle |
|-------|---------|
| **Historia** | Como **estudiante**, quiero **ver un panel con mi progreso en todos los módulos**, para **saber cuánto he avanzado y qué me falta por completar**. |
| **Prioridad** | 🔴 Alta |
| **Story Points** | 5 |
| **Sprint** | Sprint 3 |

**Criterios de aceptación:**
- [ ] El panel muestra el porcentaje de completitud de cada módulo
- [ ] Se visualizan los módulos completados, en progreso y bloqueados
- [ ] Se muestra el puntaje obtenido en cada evaluación aprobada
- [ ] Existe un indicador general de progreso en la plataforma (ej: 3 de 8 módulos completados)

---

#### HU-14 — Recibir insignias por logros
| Campo | Detalle |
|-------|---------|
| **Historia** | Como **estudiante**, quiero **recibir insignias cuando logre hitos importantes**, para **sentirme motivado a continuar aprendiendo quichua**. |
| **Prioridad** | 🟡 Media |
| **Story Points** | 5 |
| **Sprint** | Sprint 4 |

**Criterios de aceptación:**
- [ ] Se otorgan insignias al: completar el primer módulo, completar 3 módulos, completar todos los módulos básicos, aprobar con 100% en cualquier evaluación
- [ ] Las insignias se muestran en el perfil del estudiante
- [ ] Aparece una animación/notificación al desbloquear una insignia

---

### EP-05: Panel Docente

---

#### HU-15 — Ver progreso de todos los estudiantes
| Campo | Detalle |
|-------|---------|
| **Historia** | Como **docente**, quiero **ver el progreso de cada uno de mis estudiantes en tiempo real**, para **identificar quiénes necesitan apoyo adicional en el aprendizaje del quichua**. |
| **Prioridad** | 🔴 Alta |
| **Story Points** | 8 |
| **Sprint** | Sprint 4 |

**Criterios de aceptación:**
- [ ] El panel muestra una tabla con todos los estudiantes y su progreso por módulo
- [ ] Se puede filtrar por módulo o por nombre de estudiante
- [ ] Se muestra el último acceso de cada estudiante a la plataforma
- [ ] Los datos se actualizan sin necesidad de recargar la página (tiempo real)

---

#### HU-16 — Asignar examen personalizado a estudiantes
| Campo | Detalle |
|-------|---------|
| **Historia** | Como **docente**, quiero **crear y asignar exámenes adicionales a mis estudiantes**, para **evaluar el aprendizaje del quichua según mis propios criterios pedagógicos**. |
| **Prioridad** | 🟡 Media |
| **Story Points** | 13 |
| **Sprint** | Sprint 5 |

**Criterios de aceptación:**
- [ ] El docente puede crear exámenes con preguntas de selección múltiple y completar
- [ ] Puede asignar el examen a uno o varios estudiantes con fecha límite
- [ ] Los estudiantes ven el examen pendiente en su dashboard
- [ ] El docente puede ver los resultados una vez completado

---

#### HU-17 — Ver resultados de exámenes asignados
| Campo | Detalle |
|-------|---------|
| **Historia** | Como **docente**, quiero **ver los resultados de los exámenes que asigné**, para **evaluar el nivel de comprensión del quichua de cada estudiante**. |
| **Prioridad** | 🟡 Media |
| **Story Points** | 5 |
| **Sprint** | Sprint 5 |

**Criterios de aceptación:**
- [ ] El docente ve una lista de los exámenes asignados con su estado (pendiente / completado)
- [ ] Para cada examen completado, se muestra el puntaje de cada estudiante
- [ ] Se puede exportar el reporte de resultados

---

### EP-06: Administración

---

#### HU-18 — Gestionar usuarios desde panel de administración
| Campo | Detalle |
|-------|---------|
| **Historia** | Como **administrador**, quiero **gestionar las cuentas de usuarios desde un panel de administración**, para **mantener la plataforma organizada y segura**. |
| **Prioridad** | 🟢 Baja |
| **Story Points** | 8 |
| **Sprint** | Sprint 6 |

**Criterios de aceptación:**
- [ ] El administrador puede ver, activar, desactivar y eliminar cuentas de usuario
- [ ] Puede asignar o cambiar roles (estudiante / docente / administrador)
- [ ] El panel requiere autenticación con rol de administrador

---

#### HU-19 — Gestionar módulos y contenido desde administración
| Campo | Detalle |
|-------|---------|
| **Historia** | Como **administrador**, quiero **agregar, editar o desactivar módulos de quichua desde el panel de administración**, para **mantener el contenido de la plataforma actualizado y correcto**. |
| **Prioridad** | 🟢 Baja |
| **Story Points** | 8 |
| **Sprint** | Sprint 7 |

**Criterios de aceptación:**
- [ ] Se puede crear un nuevo módulo con nombre, descripción, nivel y ejercicios
- [ ] Se puede editar el contenido de ejercicios ya existentes
- [ ] Se puede activar o desactivar un módulo sin eliminarlo permanentemente

---

## 📊 Resumen del Product Backlog

| Épica | Historias | Story Points Totales | Sprint |
|-------|-----------|---------------------|--------|
| EP-01: Autenticación | HU-01, HU-02, HU-03 | 7 | Sprint 1 |
| EP-02: Landing Page | HU-04 | 5 | Sprint 1 |
| EP-03: Módulos | HU-05 a HU-11 | 51 | Sprints 2–6 |
| EP-04: Evaluaciones | HU-12, HU-13, HU-14 | 18 | Sprints 2–4 |
| EP-05: Panel Docente | HU-15, HU-16, HU-17 | 26 | Sprints 4–5 |
| EP-06: Administración | HU-18, HU-19 | 16 | Sprints 6–7 |
| **TOTAL** | **19 historias** | **123 Story Points** | **7 Sprints** |

---

## 🗓️ Distribución por Sprint

| Sprint | Semanas | Historias incluidas | Story Points | Objetivo |
|--------|---------|---------------------|-------------|----------|
| **Sprint 1** | 1–2 | HU-01, HU-02, HU-03, HU-04 | 12 | Autenticación y Landing Page funcional |
| **Sprint 2** | 3–4 | HU-05, HU-06, HU-12 | 19 | Primer módulo jugable con evaluación |
| **Sprint 3** | 5–6 | HU-07, HU-08, HU-13 | 21 | Módulos Familia + Comida/Animales + Panel de progreso |
| **Sprint 4** | 7–8 | HU-09, HU-14, HU-15 | 18 | Módulo Tiempos del Día + Insignias + Panel Docente |
| **Sprint 5** | 9–10 | HU-10, HU-16, HU-17 | 31 | Módulo Verbos + Sistema de exámenes docente |
| **Sprint 6** | 11–12 | HU-11, HU-18 | 16 | Módulo avanzado + Administración de usuarios |
| **Sprint 7** | 13–14 | HU-19 + Pruebas finales | 8 | Gestión de módulos + QA y despliegue final |
