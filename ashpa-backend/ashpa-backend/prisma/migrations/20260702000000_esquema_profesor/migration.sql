-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "public";

-- CreateTable
CREATE TABLE "usuarios" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "contrasena" TEXT NOT NULL,
    "creado_en" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "roles" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,

    CONSTRAINT "roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "permisos" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,

    CONSTRAINT "permisos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "usuarios_roles" (
    "usuario_id" TEXT NOT NULL,
    "rol_id" TEXT NOT NULL,

    CONSTRAINT "usuarios_roles_pkey" PRIMARY KEY ("usuario_id","rol_id")
);

-- CreateTable
CREATE TABLE "roles_permisos" (
    "rol_id" TEXT NOT NULL,
    "permiso_id" TEXT NOT NULL,

    CONSTRAINT "roles_permisos_pkey" PRIMARY KEY ("rol_id","permiso_id")
);

-- CreateTable
CREATE TABLE "aulas" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "codigo" TEXT NOT NULL,
    "profesor_id" TEXT NOT NULL,
    "creado_en" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "aulas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "aula_estudiantes" (
    "aula_id" TEXT NOT NULL,
    "estudiante_id" TEXT NOT NULL,
    "inscrito_en" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "aula_estudiantes_pkey" PRIMARY KEY ("aula_id","estudiante_id")
);

-- CreateTable
CREATE TABLE "modulos" (
    "id" TEXT NOT NULL,
    "aula_id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "nivel" INTEGER NOT NULL DEFAULT 1,
    "orden" INTEGER NOT NULL,
    "activo" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "modulos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ejercicios" (
    "id" TEXT NOT NULL,
    "modulo_id" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "pregunta" TEXT NOT NULL,
    "opciones" TEXT[],
    "respuesta" TEXT NOT NULL,

    CONSTRAINT "ejercicios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "evaluaciones" (
    "id" TEXT NOT NULL,
    "modulo_id" TEXT NOT NULL,
    "puntaje_minimo" INTEGER NOT NULL DEFAULT 70,

    CONSTRAINT "evaluaciones_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "evaluacion_preguntas" (
    "id" TEXT NOT NULL,
    "evaluacion_id" TEXT NOT NULL,
    "pregunta" TEXT NOT NULL,
    "opciones" TEXT[],
    "respuesta" TEXT NOT NULL,

    CONSTRAINT "evaluacion_preguntas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "evaluacion_intentos" (
    "id" TEXT NOT NULL,
    "evaluacion_id" TEXT NOT NULL,
    "usuario_id" TEXT NOT NULL,
    "puntaje" INTEGER NOT NULL,
    "aprobado" BOOLEAN NOT NULL,
    "creado_en" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "evaluacion_intentos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "progreso_usuario" (
    "id" TEXT NOT NULL,
    "usuario_id" TEXT NOT NULL,
    "modulo_id" TEXT NOT NULL,
    "completado" BOOLEAN NOT NULL DEFAULT false,
    "puntaje" INTEGER,
    "desbloqueado_en" TIMESTAMP(3),
    "creado_en" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "progreso_usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "insignias" (
    "id" TEXT NOT NULL,
    "modulo_id" TEXT,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "icono" TEXT NOT NULL,

    CONSTRAINT "insignias_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "insignias_usuario" (
    "id" TEXT NOT NULL,
    "usuario_id" TEXT NOT NULL,
    "insignia_id" TEXT NOT NULL,
    "ganada_en" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "insignias_usuario_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_email_key" ON "usuarios"("email");

-- CreateIndex
CREATE UNIQUE INDEX "roles_nombre_key" ON "roles"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "permisos_nombre_key" ON "permisos"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "aulas_codigo_key" ON "aulas"("codigo");

-- CreateIndex
CREATE UNIQUE INDEX "modulos_aula_id_orden_key" ON "modulos"("aula_id", "orden");

-- CreateIndex
CREATE UNIQUE INDEX "evaluaciones_modulo_id_key" ON "evaluaciones"("modulo_id");

-- CreateIndex
CREATE UNIQUE INDEX "progreso_usuario_usuario_id_modulo_id_key" ON "progreso_usuario"("usuario_id", "modulo_id");

-- AddForeignKey
ALTER TABLE "usuarios_roles" ADD CONSTRAINT "usuarios_roles_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuarios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "usuarios_roles" ADD CONSTRAINT "usuarios_roles_rol_id_fkey" FOREIGN KEY ("rol_id") REFERENCES "roles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "roles_permisos" ADD CONSTRAINT "roles_permisos_rol_id_fkey" FOREIGN KEY ("rol_id") REFERENCES "roles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "roles_permisos" ADD CONSTRAINT "roles_permisos_permiso_id_fkey" FOREIGN KEY ("permiso_id") REFERENCES "permisos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "aulas" ADD CONSTRAINT "aulas_profesor_id_fkey" FOREIGN KEY ("profesor_id") REFERENCES "usuarios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "aula_estudiantes" ADD CONSTRAINT "aula_estudiantes_aula_id_fkey" FOREIGN KEY ("aula_id") REFERENCES "aulas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "aula_estudiantes" ADD CONSTRAINT "aula_estudiantes_estudiante_id_fkey" FOREIGN KEY ("estudiante_id") REFERENCES "usuarios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "modulos" ADD CONSTRAINT "modulos_aula_id_fkey" FOREIGN KEY ("aula_id") REFERENCES "aulas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ejercicios" ADD CONSTRAINT "ejercicios_modulo_id_fkey" FOREIGN KEY ("modulo_id") REFERENCES "modulos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "evaluaciones" ADD CONSTRAINT "evaluaciones_modulo_id_fkey" FOREIGN KEY ("modulo_id") REFERENCES "modulos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "evaluacion_preguntas" ADD CONSTRAINT "evaluacion_preguntas_evaluacion_id_fkey" FOREIGN KEY ("evaluacion_id") REFERENCES "evaluaciones"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "evaluacion_intentos" ADD CONSTRAINT "evaluacion_intentos_evaluacion_id_fkey" FOREIGN KEY ("evaluacion_id") REFERENCES "evaluaciones"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "evaluacion_intentos" ADD CONSTRAINT "evaluacion_intentos_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuarios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "progreso_usuario" ADD CONSTRAINT "progreso_usuario_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuarios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "progreso_usuario" ADD CONSTRAINT "progreso_usuario_modulo_id_fkey" FOREIGN KEY ("modulo_id") REFERENCES "modulos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "insignias" ADD CONSTRAINT "insignias_modulo_id_fkey" FOREIGN KEY ("modulo_id") REFERENCES "modulos"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "insignias_usuario" ADD CONSTRAINT "insignias_usuario_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuarios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "insignias_usuario" ADD CONSTRAINT "insignias_usuario_insignia_id_fkey" FOREIGN KEY ("insignia_id") REFERENCES "insignias"("id") ON DELETE CASCADE ON UPDATE CASCADE;
