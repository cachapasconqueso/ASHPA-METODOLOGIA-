-- CreateTable
CREATE TABLE "Usuarios" (
    "id usuario" SERIAL NOT NULL,
    "nombre" VARCHAR(50) NOT NULL,
    "apellido" VARCHAR(50) NOT NULL,
    "correo" VARCHAR(100) NOT NULL,
    "contrasena" VARCHAR(255) NOT NULL,
    "rol" VARCHAR(20) NOT NULL,
    "ultimo acceso" TIMESTAMP(3),

    CONSTRAINT "Usuarios_pkey" PRIMARY KEY ("id usuario")
);

-- CreateTable
CREATE TABLE "Grupos_Cursos" (
    "id_grupo" SERIAL NOT NULL,
    "nombre_grupo" VARCHAR(50) NOT NULL,
    "id_profesor" INTEGER NOT NULL,
    "fecha_creacion" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Grupos_Cursos_pkey" PRIMARY KEY ("id_grupo")
);

-- CreateTable
CREATE TABLE "Inscripciones_Grupos" (
    "id_inscripcion" SERIAL NOT NULL,
    "id_grupo" INTEGER NOT NULL,
    "id estudiante" INTEGER NOT NULL,
    "fecha_inscripcion" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Inscripciones_Grupos_pkey" PRIMARY KEY ("id_inscripcion")
);

-- CreateTable
CREATE TABLE "Modulos_Aprendizaje" (
    "id modulo" SERIAL NOT NULL,
    "titulo" VARCHAR(100) NOT NULL,
    "descripcion" TEXT NOT NULL,
    "nivel" VARCHAR(20) NOT NULL,
    "orden" INTEGER NOT NULL,

    CONSTRAINT "Modulos_Aprendizaje_pkey" PRIMARY KEY ("id modulo")
);

-- CreateTable
CREATE TABLE "Lecciones" (
    "id leccion" SERIAL NOT NULL,
    "id modulo" INTEGER NOT NULL,
    "titulo" VARCHAR(100) NOT NULL,
    "contenido" TEXT NOT NULL,
    "orden" INTEGER NOT NULL,

    CONSTRAINT "Lecciones_pkey" PRIMARY KEY ("id leccion")
);

-- CreateTable
CREATE TABLE "Evaluaciones" (
    "id_evaluacion" SERIAL NOT NULL,
    "id_leccion" INTEGER NOT NULL,
    "titulo" VARCHAR(100) NOT NULL,
    "puntaje_maximo" INTEGER NOT NULL,

    CONSTRAINT "Evaluaciones_pkey" PRIMARY KEY ("id_evaluacion")
);

-- CreateTable
CREATE TABLE "Progreso_Estudiante" (
    "id_progreso" SERIAL NOT NULL,
    "id_estudiante" INTEGER NOT NULL,
    "id leccion" INTEGER NOT NULL,
    "completado" BOOLEAN NOT NULL,
    "fecha_completado" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Progreso_Estudiante_pkey" PRIMARY KEY ("id_progreso")
);

-- CreateTable
CREATE TABLE "Historial_Evaluaciones" (
    "id historial" SERIAL NOT NULL,
    "id_estudiante" INTEGER NOT NULL,
    "id_evaluacion" INTEGER NOT NULL,
    "puntaje_obtenido" INTEGER NOT NULL,
    "fecha intento" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Historial_Evaluaciones_pkey" PRIMARY KEY ("id historial")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuarios_correo_key" ON "Usuarios"("correo");

-- CreateIndex
CREATE UNIQUE INDEX "Evaluaciones_id_leccion_key" ON "Evaluaciones"("id_leccion");

-- AddForeignKey
ALTER TABLE "Grupos_Cursos" ADD CONSTRAINT "Grupos_Cursos_id_profesor_fkey" FOREIGN KEY ("id_profesor") REFERENCES "Usuarios"("id usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inscripciones_Grupos" ADD CONSTRAINT "Inscripciones_Grupos_id_grupo_fkey" FOREIGN KEY ("id_grupo") REFERENCES "Grupos_Cursos"("id_grupo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inscripciones_Grupos" ADD CONSTRAINT "Inscripciones_Grupos_id estudiante_fkey" FOREIGN KEY ("id estudiante") REFERENCES "Usuarios"("id usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lecciones" ADD CONSTRAINT "Lecciones_id modulo_fkey" FOREIGN KEY ("id modulo") REFERENCES "Modulos_Aprendizaje"("id modulo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Evaluaciones" ADD CONSTRAINT "Evaluaciones_id_leccion_fkey" FOREIGN KEY ("id_leccion") REFERENCES "Lecciones"("id leccion") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Progreso_Estudiante" ADD CONSTRAINT "Progreso_Estudiante_id_estudiante_fkey" FOREIGN KEY ("id_estudiante") REFERENCES "Usuarios"("id usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Progreso_Estudiante" ADD CONSTRAINT "Progreso_Estudiante_id leccion_fkey" FOREIGN KEY ("id leccion") REFERENCES "Lecciones"("id leccion") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Historial_Evaluaciones" ADD CONSTRAINT "Historial_Evaluaciones_id_estudiante_fkey" FOREIGN KEY ("id_estudiante") REFERENCES "Usuarios"("id usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Historial_Evaluaciones" ADD CONSTRAINT "Historial_Evaluaciones_id_evaluacion_fkey" FOREIGN KEY ("id_evaluacion") REFERENCES "Evaluaciones"("id_evaluacion") ON DELETE RESTRICT ON UPDATE CASCADE;
