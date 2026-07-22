import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import * as bcrypt from 'bcrypt';
import { CATALOGO_MODULOS, INSIGNIAS_BASE } from '../src/catalogo/modulos-quichua';

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter } as any);

// ─── Permisos y roles (RBAC) ──────────────────────────────
const permisos = [
  { nombre: 'gestionar_aulas', descripcion: 'Crear y administrar aulas' },
  { nombre: 'gestionar_modulos', descripcion: 'Crear y administrar módulos y ejercicios' },
  { nombre: 'ver_estudiantes', descripcion: 'Ver estudiantes inscritos y su progreso' },
  { nombre: 'realizar_evaluaciones', descripcion: 'Responder evaluaciones de módulos' },
  { nombre: 'ver_progreso_propio', descripcion: 'Consultar el progreso propio' },
];

const rolesDef = [
  {
    nombre: 'PROFESOR',
    descripcion: 'Docente que crea aulas, módulos y evaluaciones',
    permisos: ['gestionar_aulas', 'gestionar_modulos', 'ver_estudiantes', 'ver_progreso_propio'],
  },
  {
    nombre: 'ESTUDIANTE',
    descripcion: 'Alumno que realiza los módulos y evaluaciones',
    permisos: ['realizar_evaluaciones', 'ver_progreso_propio'],
  },
];

async function main() {
  console.log('🌱 Iniciando seed...');

  // Limpiar en orden seguro respecto a las llaves foráneas
  await prisma.insigniaUsuario.deleteMany();
  await prisma.insignia.deleteMany();
  await prisma.evaluacionIntento.deleteMany();
  await prisma.evaluacionPregunta.deleteMany();
  await prisma.evaluacion.deleteMany();
  await prisma.ejercicio.deleteMany();
  await prisma.progresoUsuario.deleteMany();
  await prisma.modulo.deleteMany();
  await prisma.aulaEstudiante.deleteMany();
  await prisma.aula.deleteMany();
  await prisma.rolPermiso.deleteMany();
  await prisma.usuarioRol.deleteMany();
  await prisma.rol.deleteMany();
  await prisma.permiso.deleteMany();
  await prisma.usuario.deleteMany();
  console.log('🗑️  Datos anteriores eliminados');

  // Permisos
  await prisma.permiso.createMany({ data: permisos });
  const permisoRows = await prisma.permiso.findMany();
  const permisoId = new Map(permisoRows.map((p) => [p.nombre, p.id]));

  // Roles + roles_permisos
  for (const rolDef of rolesDef) {
    const rol = await prisma.rol.create({
      data: { nombre: rolDef.nombre, descripcion: rolDef.descripcion },
    });
    await prisma.rolPermiso.createMany({
      data: rolDef.permisos.map((nombre) => ({ rolId: rol.id, permisoId: permisoId.get(nombre)! })),
    });
  }
  const rolProfesor = await prisma.rol.findUniqueOrThrow({ where: { nombre: 'PROFESOR' } });
  const rolEstudiante = await prisma.rol.findUniqueOrThrow({ where: { nombre: 'ESTUDIANTE' } });
  console.log(`🔐 ${permisos.length} permisos y ${rolesDef.length} roles creados`);

  // Usuarios de demostración
  const contrasena = await bcrypt.hash('password123', 10);
  const profesor = await prisma.usuario.create({
    data: {
      nombre: 'Profe Quichua',
      email: 'profesor@ashpa.edu',
      contrasena,
      roles: { create: { rolId: rolProfesor.id } },
    },
  });
  const estudiante = await prisma.usuario.create({
    data: {
      nombre: 'Estudiante Demo',
      email: 'estudiante@ashpa.edu',
      contrasena,
      roles: { create: { rolId: rolEstudiante.id } },
    },
  });
  console.log('👤 Profesor y estudiante demo creados (contraseña: password123)');

  // Aula demo con todos los módulos activos y el estudiante inscrito
  const aula = await prisma.aula.create({
    data: {
      nombre: 'Quichua Básico A',
      codigo: 'QUICHUA1',
      profesorId: profesor.id,
      estudiantes: { create: { estudianteId: estudiante.id } },
      modulos: {
        create: CATALOGO_MODULOS.map((m) => ({
          nombre: m.nombre,
          descripcion: m.descripcion,
          contenido: m.contenido,
          nivel: m.nivel,
          orden: m.orden,
          activo: true,
          ejercicios: { create: m.ejercicios },
          evaluacion: {
            create: { puntajeMinimo: 70, preguntas: { create: m.evalPreguntas } },
          },
        })),
      },
    },
  });
  console.log(`🏫 Aula "${aula.nombre}" creada (código: ${aula.codigo}) con ${CATALOGO_MODULOS.length} módulos`);

  // Insignias globales (sin módulo asociado)
  await prisma.insignia.createMany({
    data: INSIGNIAS_BASE.map((i) => ({ ...i, moduloId: null })),
  });
  console.log(`🎖️  ${INSIGNIAS_BASE.length} insignias creadas`);

  console.log('✨ Seed completado con éxito!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
