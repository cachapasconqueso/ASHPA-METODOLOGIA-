# 📋 Product Backlog — Historias de Usuario
## Proyecto ASHPA — Sistema de Módulos para el Aprendizaje del Quichua

> **Formato:** Como [rol], quiero [acción], para [beneficio].
>
> Cada historia incluye Valor de negocio, Esfuerzo estimado y Riesgo, además de Criterios de Aceptación (Dado que / Cuando / Entonces), Reglas de Negocio y Requerimientos No Funcionales.

---

## H.U.01 — Registrarme en la plataforma con mi nombre, correo electrónico, contraseña y rol

| Campo | Detalle |
|-------|--------|
| **Valor** | ALTO/90 |
| **Esfuerzo** | 30 |
| **Riesgo** | ALTO |

**Como:** Estudiante / Docente  
**Puedo:** Registrarme en la plataforma con mi nombre, correo electrónico, contraseña y rol  
**Para:** Crear mi cuenta y acceder a todas las funcionalidades de ASHPA según mi perfil

**Criterios de Aceptación**

- **Dado que:** Necesito tener una cuenta activa para ingresar a los módulos de aprendizaje del quichua
- **Cuando:** Ingreso mis datos personales y selecciono mi rol (STUDENT o TEACHER) en el formulario de registro
- **Entonces:** El sistema valida mis datos, crea mi cuenta con contraseña encriptada, genera un JWT y me redirige al dashboard según mi rol

**Detalles**

*Reglas del Negocio:*
- El correo electrónico debe ser único en el sistema (no puede existir dos cuentas con el mismo correo)
- La contraseña debe tener mínimo 8 caracteres
- El rol debe ser únicamente STUDENT o TEACHER
- No se puede registrar una cuenta sin completar todos los campos obligatorios

*Requerimientos no funcionales:*
- La contraseña debe almacenarse encriptada con bcrypt (nunca en texto plano)
- El sistema debe generar un JWT válido inmediatamente al registrarse exitosamente
- El tiempo de respuesta del registro no debe superar los 2 segundos
- El formulario debe mostrar mensajes de error descriptivos por campo inválido

---

## H.U.02 — Iniciar sesión en la plataforma con mi correo electrónico y contraseña

| Campo | Detalle |
|-------|--------|
| **Valor** | ALTO/90 |
| **Esfuerzo** | 20 |
| **Riesgo** | ALTO |

**Como:** Estudiante  
**Puedo:** Iniciar sesión en la plataforma con mi correo electrónico y contraseña  
**Para:** Acceder a mis módulos de quichua y ver mi progreso guardado en la plataforma

**Criterios de Aceptación**

- **Dado que:** Ya tengo una cuenta registrada en ASHPA con rol STUDENT
- **Cuando:** Ingreso mi correo y contraseña en el formulario de inicio de sesión
- **Entonces:** El sistema verifica mis credenciales, genera un JWT de sesión y me redirige al dashboard del estudiante

**Detalles**

*Reglas del Negocio:*
- No se permite el acceso con credenciales incorrectas; se debe mostrar un mensaje de error claro
- La sesión tiene una duración de 24 horas antes de requerir nuevo inicio de sesión
- Debe existir la opción de cerrar sesión en todo momento

*Requerimientos no funcionales:*
- El JWT debe almacenarse de forma segura en localStorage mediante Zustand authStore
- El sistema no debe revelar si el error es de correo o de contraseña (seguridad)
- El tiempo de respuesta del login no debe superar 1.5 segundos

---

## H.U.03 — Iniciar sesión con mis credenciales institucionales y acceder al panel docente

| Campo | Detalle |
|-------|--------|
| **Valor** | ALTO/90 |
| **Esfuerzo** | 20 |
| **Riesgo** | ALTO |

**Como:** Docente  
**Puedo:** Iniciar sesión con mis credenciales institucionales y acceder al panel docente  
**Para:** Gestionar el progreso de mis estudiantes y crear exámenes personalizados de quichua

**Criterios de Aceptación**

- **Dado que:** Tengo una cuenta registrada en ASHPA con rol TEACHER
- **Cuando:** Ingreso mis credenciales en el formulario de login
- **Entonces:** El sistema valida mis credenciales, verifica el rol TEACHER y me redirige al panel docente con sus funcionalidades exclusivas

**Detalles**

*Reglas del Negocio:*
- Solo los usuarios con rol TEACHER pueden acceder al panel docente
- Un estudiante (rol STUDENT) no puede acceder a las funciones exclusivas del docente
- Las rutas del panel docente deben estar protegidas en el backend con RolesGuard

*Requerimientos no funcionales:*
- El RolesGuard de NestJS debe validar el rol antes de procesar cualquier solicitud de rutas docentes
- La vista del dashboard debe ser completamente distinta a la del estudiante
- El acceso no autorizado debe retornar un error HTTP 403 Forbidden

---

## H.U.04 — Ver una página principal atractiva que explique qué es ASHPA y su propósito

| Campo | Detalle |
|-------|--------|
| **Valor** | ALTO/90 |
| **Esfuerzo** | 50 |
| **Riesgo** | MEDIO |

**Como:** Visitante  
**Puedo:** Ver una página principal atractiva que explique qué es ASHPA y su propósito  
**Para:** Conocer la plataforma antes de registrarme y decidir si quiero aprender quichua con ella

**Criterios de Aceptación**

- **Dado que:** Quiero conocer qué es ASHPA antes de crear una cuenta
- **Cuando:** Accedo a la URL principal de la plataforma sin estar autenticado
- **Entonces:** Se muestra la landing page con el nombre y logo de ASHPA, descripción del proyecto, su misión de revitalizar el quichua y botones de acceso

**Detalles**

*Reglas del Negocio:*
- La landing page debe ser completamente accesible sin autenticación
- Los botones de Registrarse e Iniciar sesión deben redirigir correctamente
- El diseño debe reflejar la identidad cultural quichua (colores andinos, elementos visuales)

*Requerimientos no funcionales:*
- La página debe ser responsive y adaptable a dispositivos móviles y escritorio
- El tiempo de carga de la landing page no debe superar los 3 segundos
- El diseño debe estar implementado con Tailwind CSS y componentes React

---

## H.U.05 — Ver todos los módulos de quichua disponibles organizados por nivel con su estado actual

| Campo | Detalle |
|-------|--------|
| **Valor** | ALTO/90 |
| **Esfuerzo** | 30 |
| **Riesgo** | MEDIO |

**Como:** Estudiante  
**Puedo:** Ver todos los módulos de quichua disponibles organizados por nivel con su estado actual  
**Para:** Saber qué puedo aprender, qué he completado y en qué orden debo avanzar en la plataforma

**Criterios de Aceptación**

- **Dado que:** Estoy autenticado como estudiante en la plataforma ASHPA
- **Cuando:** Accedo a la sección de módulos desde el menú principal
- **Entonces:** El sistema consulta mi progreso y muestra los 6 módulos con su estado: disponible (verde), bloqueado (gris con candado) o completado (check verde con puntaje)

**Detalles**

*Reglas del Negocio:*
- El Módulo 1 (Saludos) siempre está disponible para todos los estudiantes
- Los módulos del 2 al 6 se desbloquean solo al aprobar el módulo anterior con puntaje ≥ 70%
- Un módulo bloqueado no puede ser seleccionado ni abierto por el estudiante

*Requerimientos no funcionales:*
- Los módulos bloqueados deben mostrarse con ícono de candado (🔒) claramente visible
- Los módulos completados deben mostrar el puntaje obtenido en la evaluación
- El estado de los módulos debe cargarse desde el endpoint GET /modules del backend

---

## H.U.06 — Acceder al módulo de Saludos y completar sus ejercicios interactivos de quichua

| Campo | Detalle |
|-------|--------|
| **Valor** | ALTO/90 |
| **Esfuerzo** | 80 |
| **Riesgo** | ALTO |

**Como:** Estudiante  
**Puedo:** Acceder al módulo de Saludos y completar sus ejercicios interactivos de quichua  
**Para:** Construir mi primera base en el idioma quichua aprendiendo vocabulario de saludo cotidiano

**Criterios de Aceptación**

- **Dado que:** El Módulo 1 (Saludos) siempre está disponible y soy un estudiante autenticado
- **Cuando:** Selecciono el módulo de Saludos y realizo sus ejercicios interactivos
- **Entonces:** El sistema muestra retroalimentación inmediata por cada respuesta y al completar todos los ejercicios habilita el botón para ir a la evaluación del módulo

**Detalles**

*Reglas del Negocio:*
- El módulo debe contener al menos 10 palabras o frases de saludo con traducción al español
- El estudiante puede repetir los ejercicios cuantas veces desee antes de ir a la evaluación
- No se puede acceder a la evaluación sin haber completado todos los ejercicios del módulo

*Requerimientos no funcionales:*
- Los ejercicios deben incluir los tres tipos: MULTIPLE_CHOICE, FILL_IN_THE_BLANK y MATCHING
- El contenido debe reflejar la identidad cultural quichua ecuatoriana
- Los ejercicios deben incluir audio de pronunciación de las palabras en quichua

---

## H.U.07 — Acceder al módulo de Familia y aprender el vocabulario de relaciones familiares en quichua

| Campo | Detalle |
|-------|--------|
| **Valor** | MEDIO/60 |
| **Esfuerzo** | 80 |
| **Riesgo** | MEDIO |

**Como:** Estudiante  
**Puedo:** Acceder al módulo de Familia y aprender el vocabulario de relaciones familiares en quichua  
**Para:** Ampliar mi vocabulario con términos de uso cotidiano relacionados al entorno familiar

**Criterios de Aceptación**

- **Dado que:** He aprobado el módulo de Saludos con al menos 70% en su evaluación
- **Cuando:** Selecciono el módulo de Familia (previamente desbloqueado) y completo sus ejercicios
- **Entonces:** El sistema muestra los ejercicios con al menos 12 términos familiares en quichua con imágenes y retroalimentación inmediata

**Detalles**

*Reglas del Negocio:*
- El módulo está bloqueado hasta que el estudiante apruebe el módulo de Saludos con ≥70%
- Debe contener al menos 12 términos de vocabulario familiar con imágenes representativas

*Requerimientos no funcionales:*
- Las imágenes deben ser culturalmente pertinentes para las comunidades quichuas del Ecuador
- Los ejercicios deben seguir el mismo flujo interactivo que el Módulo 1

---

## H.U.08 — Acceder al módulo de Comida y Animales y aprender su vocabulario en quichua

| Campo | Detalle |
|-------|--------|
| **Valor** | MEDIO/60 |
| **Esfuerzo** | 80 |
| **Riesgo** | MEDIO |

**Como:** Estudiante  
**Puedo:** Acceder al módulo de Comida y Animales y aprender su vocabulario en quichua  
**Para:** Enriquecer mi conocimiento del quichua con temas culturalmente relevantes de la vida andina

**Criterios de Aceptación**

- **Dado que:** He aprobado el módulo de Familia con al menos 70% en su evaluación
- **Cuando:** Selecciono el módulo de Comida y Animales y completo sus ejercicios
- **Entonces:** El sistema muestra al menos 10 términos de comida y 10 de animales andinos con ejercicios de selección múltiple y escritura

**Detalles**

*Reglas del Negocio:*
- El módulo está bloqueado hasta aprobar el módulo de Familia con ≥70%
- Los ejercicios deben incluir selección múltiple y escritura (FILL_IN_THE_BLANK)

*Requerimientos no funcionales:*
- El contenido debe incluir términos propios de la gastronomía y fauna andina ecuatoriana
- Las imágenes de animales y alimentos deben ser reconocibles para comunidades indígenas del Ecuador

---

## H.U.09 — Acceder al módulo de Tiempos del Día y aprender a expresar momentos del día en quichua

| Campo | Detalle |
|-------|--------|
| **Valor** | MEDIO/60 |
| **Esfuerzo** | 50 |
| **Riesgo** | BAJO |

**Como:** Estudiante  
**Puedo:** Acceder al módulo de Tiempos del Día y aprender a expresar momentos del día en quichua  
**Para:** Usar el idioma quichua en conversaciones cotidianas relacionadas al tiempo y la rutina diaria

**Criterios de Aceptación**

- **Dado que:** He aprobado el módulo de Comida y Animales con al menos 70%
- **Cuando:** Selecciono el módulo de Tiempos del Día y realizo sus ejercicios
- **Entonces:** El sistema muestra el vocabulario de mañana, mediodía, tarde y noche en quichua con frases completas de uso contextual

**Detalles**

*Reglas del Negocio:*
- El módulo está bloqueado hasta aprobar el módulo de Comida y Animales con ≥70%
- Debe incluir ejemplos de frases completas usando los términos aprendidos en contexto

*Requerimientos no funcionales:*
- El módulo debe incluir al menos 5 expresiones de tiempo con sus equivalentes en español
- Los ejercicios deben contextualizarse en situaciones de la vida cotidiana quichua

---

## H.U.10 — Acceder al módulo de Conjugaciones de Verbos y aprender a conjugar verbos en quichua

| Campo | Detalle |
|-------|--------|
| **Valor** | MEDIO/60 |
| **Esfuerzo** | 130 |
| **Riesgo** | ALTO |

**Como:** Estudiante  
**Puedo:** Acceder al módulo de Conjugaciones de Verbos y aprender a conjugar verbos en quichua  
**Para:** Formar oraciones completas y comunicarme de manera más fluida en el idioma quichua

**Criterios de Aceptación**

- **Dado que:** He completado y aprobado todos los módulos básicos de vocabulario (Saludos, Familia, Comida/Animales y Tiempos del Día)
- **Cuando:** Selecciono el módulo de Conjugaciones de Verbos y realizo sus ejercicios
- **Entonces:** El sistema muestra al menos 8 verbos comunes en quichua con su conjugación en tiempo presente, pasado y futuro, y ejercicios de construcción de oraciones

**Detalles**

*Reglas del Negocio:*
- El módulo está bloqueado hasta completar y aprobar todos los módulos básicos anteriores
- Debe incluir al menos 8 verbos conjugados en tres tiempos (presente, pasado y futuro)
- Los ejercicios deben incluir construcción de oraciones completas con los verbos aprendidos

*Requerimientos no funcionales:*
- Los ejercicios de este módulo deben ser de mayor complejidad que los módulos básicos
- Se deben incluir explicaciones gramaticales breves sobre la estructura verbal del quichua

---

## H.U.11 — Acceder al módulo de Pronombres y Adjetivos del quichua y aprender su uso

| Campo | Detalle |
|-------|--------|
| **Valor** | BAJO/30 |
| **Esfuerzo** | 80 |
| **Riesgo** | BAJO |

**Como:** Estudiante  
**Puedo:** Acceder al módulo de Pronombres y Adjetivos del quichua y aprender su uso  
**Para:** Construir oraciones más complejas y descriptivas que me permitan una comunicación avanzada en quichua

**Criterios de Aceptación**

- **Dado que:** He aprobado el módulo de Conjugaciones de Verbos con al menos 70%
- **Cuando:** Selecciono el módulo de Pronombres y Adjetivos y completo sus ejercicios
- **Entonces:** El sistema muestra los pronombres personales del quichua y al menos 15 adjetivos comunes con ejercicios de construcción de oraciones complejas

**Detalles**

*Reglas del Negocio:*
- Es el módulo de mayor dificultad del sistema y solo se desbloquea al aprobar el módulo de Verbos
- Debe incluir pronombres personales completos y al menos 15 adjetivos comunes

*Requerimientos no funcionales:*
- Los ejercicios deben combinar pronombres, adjetivos y verbos previamente aprendidos
- El módulo debe incluir ejemplos de oraciones completas en quichua con traducción al español

---

## H.U.12 — Realizar una evaluación al terminar cada módulo de aprendizaje

| Campo | Detalle |
|-------|--------|
| **Valor** | ALTO/90 |
| **Esfuerzo** | 80 |
| **Riesgo** | ALTO |

**Como:** Estudiante  
**Puedo:** Realizar una evaluación al terminar cada módulo de aprendizaje  
**Para:** Demostrar el dominio del contenido aprendido y desbloquear automáticamente el siguiente nivel

**Criterios de Aceptación**

- **Dado que:** He completado todos los ejercicios del módulo actual
- **Cuando:** Accedo a la evaluación del módulo, respondo todas las preguntas y envío mis respuestas
- **Entonces:** El sistema calcula mi puntaje; si es ≥70% el módulo queda aprobado, el siguiente módulo se desbloquea automáticamente y el intento queda registrado con mi puntaje y fecha

**Detalles**

*Reglas del Negocio:*
- El puntaje mínimo de aprobación es el 70% de respuestas correctas
- El estudiante puede reintentar la evaluación sin límite de intentos
- No se puede acceder a la evaluación sin haber completado previamente todos los ejercicios del módulo
- Si el puntaje es menor al 70%, el siguiente módulo permanece bloqueado

*Requerimientos no funcionales:*
- El desbloqueo del siguiente módulo debe ocurrir automáticamente sin necesidad de recargar la página
- Cada intento de evaluación debe quedar registrado en la base de datos (tabla EvalAttempt)
- La evaluación debe contener al menos 10 preguntas por módulo

---

## H.U.13 — Ver un panel con mi progreso personal en todos los módulos de la plataforma

| Campo | Detalle |
|-------|--------|
| **Valor** | ALTO/90 |
| **Esfuerzo** | 50 |
| **Riesgo** | MEDIO |

**Como:** Estudiante  
**Puedo:** Ver un panel con mi progreso personal en todos los módulos de la plataforma  
**Para:** Conocer cuánto he avanzado en el aprendizaje del quichua y qué módulos me faltan por completar

**Criterios de Aceptación**

- **Dado que:** Estoy autenticado como estudiante y he interactuado con al menos un módulo de la plataforma
- **Cuando:** Accedo a la sección 'Mi Progreso' desde el menú principal
- **Entonces:** El sistema muestra el porcentaje de completitud de cada módulo, los puntajes obtenidos en las evaluaciones aprobadas y una barra de progreso general animada con el avance total

**Detalles**

*Reglas del Negocio:*
- El progreso debe reflejar el estado real y actualizado del estudiante en tiempo real
- Los módulos no iniciados deben mostrarse con 0% de completitud
- El porcentaje general debe calcularse como la proporción de módulos completados respecto al total

*Requerimientos no funcionales:*
- La barra de progreso general debe actualizarse automáticamente al completar módulos o evaluaciones
- La sección de progreso debe cargar datos desde el endpoint GET /progress/me del backend
- Las animaciones de la barra deben implementarse con Framer Motion

---

## H.U.14 — Recibir insignias automáticamente cuando logro hitos importantes en mi aprendizaje

| Campo | Detalle |
|-------|--------|
| **Valor** | MEDIO/60 |
| **Esfuerzo** | 50 |
| **Riesgo** | MEDIO |

**Como:** Estudiante  
**Puedo:** Recibir insignias automáticamente cuando logro hitos importantes en mi aprendizaje  
**Para:** Sentirme motivado y reconocido por mi avance en el aprendizaje del idioma quichua

**Criterios de Aceptación**

- **Dado que:** Estoy autenticado y he cumplido las condiciones para ganar una insignia por mis logros
- **Cuando:** El sistema detecta que alcancé un hito: completé el primer módulo, 3 módulos, todos los básicos o saqué 100% en una evaluación
- **Entonces:** El sistema asigna la insignia correspondiente, aparece una notificación animada tipo toast en la pantalla y la insignia queda visible en mi sección de logros

**Detalles**

*Reglas del Negocio:*
- Las 4 insignias definidas son: 'Primer Paso' (1 módulo completado), 'En Camino' (3 módulos), 'Base Sólida' (todos los módulos básicos), 'Perfección' (100% en cualquier evaluación)
- Cada insignia se puede ganar una sola vez
- Las insignias se otorgan automáticamente sin que el estudiante tenga que solicitarlas

*Requerimientos no funcionales:*
- La notificación de insignia debe mostrarse con animación de Framer Motion (toast) sin interrumpir el flujo
- Las insignias deben quedar registradas en la base de datos (tabla UserBadge) con fecha de obtención
- La sección 'Mis Insignias' debe cargarse desde el endpoint GET /badges/me

---

## H.U.15 — Ver el progreso de todos mis estudiantes en tiempo real desde el panel docente

| Campo | Detalle |
|-------|--------|
| **Valor** | ALTO/90 |
| **Esfuerzo** | 80 |
| **Riesgo** | ALTO |

**Como:** Docente  
**Puedo:** Ver el progreso de todos mis estudiantes en tiempo real desde el panel docente  
**Para:** Identificar a los estudiantes que necesitan apoyo adicional en el aprendizaje del quichua

**Criterios de Aceptación**

- **Dado que:** Estoy autenticado con rol TEACHER y existen estudiantes registrados en la plataforma
- **Cuando:** Accedo al panel 'Mis Estudiantes' desde el dashboard docente
- **Entonces:** El sistema muestra una tabla con todos los estudiantes (rol STUDENT), su progreso por módulo, puntajes de evaluaciones y fecha de su último acceso a la plataforma

**Detalles**

*Reglas del Negocio:*
- Solo los usuarios con rol TEACHER pueden acceder a la información de progreso de estudiantes
- Los datos deben reflejar el progreso actualizado de cada estudiante
- El docente debe poder filtrar la tabla por nombre de estudiante o por módulo

*Requerimientos no funcionales:*
- Los datos deben cargarse desde el endpoint GET /teacher/students del backend
- La tabla debe ordenarse por defecto por progreso ascendente (menor progreso primero) para priorizar atención
- El acceso a esta ruta sin rol TEACHER debe retornar HTTP 403 Forbidden

---

## H.U.16 — Crear exámenes personalizados con mis propias preguntas y asignarlos a mis estudiantes con una fecha límite

| Campo | Detalle |
|-------|--------|
| **Valor** | MEDIO/60 |
| **Esfuerzo** | 130 |
| **Riesgo** | ALTO |

**Como:** Docente  
**Puedo:** Crear exámenes personalizados con mis propias preguntas y asignarlos a mis estudiantes con una fecha límite  
**Para:** Evaluar el aprendizaje del quichua de mis estudiantes según mis propios criterios pedagógicos

**Criterios de Aceptación**

- **Dado que:** Estoy autenticado como docente y existen estudiantes registrados en la plataforma ASHPA
- **Cuando:** Creo un examen con preguntas de selección múltiple o completar la frase, selecciono los estudiantes y establezco una fecha límite
- **Entonces:** El sistema guarda el examen, registra las asignaciones y los estudiantes asignados ven el examen como 'pendiente' en su dashboard

**Detalles**

*Reglas del Negocio:*
- Un examen debe tener al menos 1 pregunta para poder ser guardado
- La fecha límite de entrega debe ser posterior a la fecha actual
- El docente puede asignar el mismo examen a múltiples estudiantes en una sola acción

*Requerimientos no funcionales:*
- Los exámenes deben crearse mediante POST /teacher/exams y las asignaciones mediante POST /teacher/exams/:id/assign
- Los datos del examen deben almacenarse en la tabla TeacherExam y las asignaciones en ExamAssignment
- Los estudiantes asignados deben ver el examen en su dashboard sin necesidad de recargar la página

---

## H.U.17 — Consultar los resultados de los exámenes que asigné a mis estudiantes

| Campo | Detalle |
|-------|--------|
| **Valor** | MEDIO/60 |
| **Esfuerzo** | 50 |
| **Riesgo** | MEDIO |

**Como:** Docente  
**Puedo:** Consultar los resultados de los exámenes que asigné a mis estudiantes  
**Para:** Evaluar cuantitativamente el desempeño de mis estudiantes en el aprendizaje del quichua

**Criterios de Aceptación**

- **Dado que:** Estoy autenticado como docente y al menos un examen fue completado por uno o más estudiantes
- **Cuando:** Accedo a la sección 'Mis Exámenes' y selecciono un examen específico de la lista
- **Entonces:** El sistema muestra el puntaje de cada estudiante asignado, la fecha de realización y el estado del examen (completado en verde / pendiente en naranja)

**Detalles**

*Reglas del Negocio:*
- Solo el docente que creó el examen puede ver sus resultados
- Los exámenes pendientes y completados deben estar claramente diferenciados visualmente
- Un examen sin ningún estudiante que lo haya completado debe mostrarse con estado 'Pendiente' para todos

*Requerimientos no funcionales:*
- Los resultados deben cargarse desde GET /teacher/exams/:id/results del backend
- Los resultados deben poder exportarse para uso pedagógico del docente
- El tiempo de carga de los resultados no debe superar los 2 segundos

---

## 📊 Priorización del Backlog

### Backlog Ordenado por VALOR (Descendente)

| H.U | VALOR | ESFUERZO |
|-----|-------|----------|
| H.U 16 | MEDIO | 130 |
| H.U 10 | MEDIO | 130 |
| H.U 11 | BAJO | 80 |
| H.U 12 | ALTO | 80 |
| H.U 15 | ALTO | 80 |
| H.U 08 | MEDIO | 80 |
| H.U 07 | MEDIO | 80 |
| H.U 06 | ALTO | 80 |
| H.U 04 | ALTO | 50 |
| H.U 09 | MEDIO | 50 |
| H.U 13 | ALTO | 50 |
| H.U 14 | MEDIO | 50 |
| H.U 17 | MEDIO | 50 |
| H.U 05 | ALTO | 30 |
| H.U 01 | ALTO | 30 |
| H.U 02 | ALTO | 20 |
| H.U 03 | ALTO | 20 |

### Backlog Ordenado por CRITERIO TÉCNICO

| H.U | VALOR | ESFUERZO |
|-----|-------|----------|
| H.U 01 | ALTO | 30 |
| H.U 02 | ALTO | 20 |
| H.U 03 | ALTO | 20 |
| H.U 04 | ALTO | 50 |
| H.U 05 | ALTO | 30 |
| H.U 06 | ALTO | 80 |
| H.U 12 | ALTO | 80 |
| H.U 07 | MEDIO | 80 |
| H.U 08 | MEDIO | 80 |
| H.U 09 | MEDIO | 50 |
| H.U 13 | ALTO | 50 |
| H.U 14 | MEDIO | 50 |
| H.U 15 | ALTO | 80 |
| H.U 10 | MEDIO | 130 |
| H.U 16 | MEDIO | 130 |
| H.U 17 | MEDIO | 50 |
| H.U 11 | BAJO | 80 |
