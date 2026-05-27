# 👥 Roles SCRUM — Proyecto ASHPA

## ¿Qué es SCRUM?

**SCRUM** es un marco de trabajo ágil para el desarrollo iterativo e incremental de productos. Se basa en ciclos de trabajo llamados **sprints** (1–4 semanas), con roles claramente definidos, ceremonias periódicas y artefactos que garantizan la transparencia y la entrega de valor continuo.

---

## 📌 Roles Definidos

---

### 1. 🎯 Product Owner (PO)
**Responsable:** Docente Santiago Durazno / Comunidad de docentes EIB-CECIB

| Atributo | Detalle |
|----------|---------|
| **Responsabilidad principal** | Representar los intereses de los usuarios finales (docentes y estudiantes EIB) y maximizar el valor del producto |
| **Gestión del backlog** | Define, prioriza y actualiza el Product Backlog según las necesidades reales de las instituciones CECIB |
| **Criterios de aceptación** | Define las condiciones que debe cumplir cada historia de usuario para ser considerada "terminada" |
| **Toma de decisiones** | Aprueba o rechaza los incrementos entregados al final de cada sprint |
| **Comunicación** | Conecta al equipo de desarrollo con los stakeholders (docentes, directivos CECIB, ITSS) |

**Responsabilidades específicas en ASHPA:**
- Definir qué módulos de quichua deben desarrollarse primero (vocabulario básico antes que gramática avanzada)
- Validar que el contenido cultural de los módulos sea auténtico y pertinente
- Priorizar funcionalidades según el impacto en la revitalización del quichua

---

### 2. 🔄 Scrum Master (SM)
**Responsable:** Adrián Muñoz

| Atributo | Detalle |
|----------|---------|
| **Responsabilidad principal** | Facilitar el proceso SCRUM, eliminar impedimentos y asegurar que el equipo siga el marco de trabajo correctamente |
| **Facilitación** | Organiza y modera las ceremonias SCRUM (Sprint Planning, Daily Scrum, Sprint Review, Sprint Retrospective) |
| **Eliminación de bloqueos** | Identifica y resuelve obstáculos técnicos, organizativos o de comunicación que frenen al equipo |
| **Protección del equipo** | Evita interrupciones externas durante el sprint y protege el foco del equipo |
| **Mejora continua** | Guía las retrospectivas para identificar mejoras en el proceso |

**Responsabilidades específicas en ASHPA:**
- Coordinar la comunicación semanal con el docente supervisor
- Asegurar que los sprints se mantengan dentro del alcance acordado
- Gestionar el repositorio GitHub y el tablero de tareas
- Facilitar la resolución de conflictos técnicos entre los desarrolladores

---

### 3. 💻 Development Team (Equipo de Desarrollo)
**Responsables:** Adrián Muñoz + Marcelo Cedeño

| Atributo | Detalle |
|----------|---------|
| **Responsabilidad principal** | Diseñar, desarrollar, probar y entregar incrementos funcionales del producto al final de cada sprint |
| **Auto-organización** | El equipo decide internamente cómo distribuir y ejecutar el trabajo técnico |
| **Multifuncional** | Cubre frontend, backend, base de datos, pruebas y despliegue |
| **Compromiso** | Se compromete con el Sprint Goal al inicio de cada sprint |
| **Calidad** | Asegura que cada incremento cumple la Definición de Terminado (DoD) |

#### Distribución de responsabilidades técnicas

| Integrante | Área principal | Tecnologías |
|------------|---------------|-------------|
| **Adrián Muñoz** | Backend + Base de datos | Node.js, Express, PostgreSQL, JWT |
| **Marcelo Cedeño** | Frontend + UX | React.js, CSS, diseño de módulos |
| **Ambos** | Integración, pruebas, despliegue | Git, GitHub, Postman |

---

## 📅 Ceremonias SCRUM del Proyecto

| Ceremonia | Frecuencia | Duración | Objetivo |
|-----------|-----------|----------|----------|
| **Sprint Planning** | Inicio de cada sprint (cada 2 semanas) | 1 hora | Seleccionar y planificar las historias del sprint |
| **Daily Scrum** | Diario (lunes a viernes) | 15 minutos | Sincronizar avances, planes y bloqueos |
| **Sprint Review** | Final de cada sprint | 45 minutos | Demostrar el incremento al Product Owner |
| **Sprint Retrospective** | Final de cada sprint | 30 minutos | Identificar mejoras al proceso del equipo |

---

## 📦 Artefactos SCRUM

| Artefacto | Descripción |
|-----------|-------------|
| **Product Backlog** | Lista priorizada de todas las historias de usuario del proyecto (ver `2-Product-Backlog/`) |
| **Sprint Backlog** | Subconjunto del Product Backlog seleccionado para el sprint actual |
| **Incremento** | Versión funcional del producto entregada al final de cada sprint |

---

## ✅ Definición de Terminado (Definition of Done — DoD)

Una historia de usuario se considera **terminada** cuando:

- [ ] El código está desarrollado y funciona correctamente
- [ ] El código fue revisado por el otro integrante del equipo (code review)
- [ ] Las pruebas funcionales fueron ejecutadas y aprobadas
- [ ] La funcionalidad fue integrada en la rama principal del repositorio (`main`)
- [ ] El Product Owner aceptó la funcionalidad según los criterios de aceptación definidos
- [ ] La documentación relevante fue actualizada en el repositorio

---

## 🗓️ Duración del Proyecto

| Parámetro | Valor |
|-----------|-------|
| Duración total | 14 semanas |
| Duración de cada sprint | 2 semanas |
| Número de sprints | 7 sprints |
| Inicio estimado | Semana 1 del semestre |
