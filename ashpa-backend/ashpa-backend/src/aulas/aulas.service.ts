import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CrearAulaDto } from './dto/crear-aula.dto';
import { UnirseAulaDto } from './dto/unirse-aula.dto';
import { CATALOGO_MODULOS } from '../catalogo/modulos-quichua';

@Injectable()
export class AulasService {
  constructor(private prisma: PrismaService) {}

  async crear(profesorId: string, dto: CrearAulaDto) {
    // Reintenta si el código generado ya existe (colisión poco probable)
    for (let intento = 0; intento < 5; intento++) {
      const codigo = this.generarCodigo();
      try {
        return await this.prisma.aula.create({
          data: {
            nombre: dto.nombre,
            codigo,
            profesorId,
            // Cada aula recibe su propia copia del catálogo; solo el 1er módulo queda habilitado
            modulos: {
              create: CATALOGO_MODULOS.map((m) => ({
                nombre: m.nombre,
                descripcion: m.descripcion,
                nivel: m.nivel,
                orden: m.orden,
                activo: m.orden === 1,
                ejercicios: { create: m.ejercicios },
                evaluacion: {
                  create: { puntajeMinimo: 70, preguntas: { create: m.evalPreguntas } },
                },
              })),
            },
          },
          include: { _count: { select: { estudiantes: true, modulos: true } } },
        });
      } catch (e: any) {
        if (e?.code === 'P2002') continue;
        throw e;
      }
    }
    throw new InternalServerErrorException('No se pudo generar un código de aula único, intenta de nuevo');
  }

  async misAulas(profesorId: string) {
    return this.prisma.aula.findMany({
      where: { profesorId },
      orderBy: { creadoEn: 'desc' },
      include: { _count: { select: { estudiantes: true, modulos: true } } },
    });
  }

  async aulasInscritas(estudianteId: string) {
    return this.prisma.aula.findMany({
      where: { estudiantes: { some: { estudianteId } } },
      orderBy: { creadoEn: 'desc' },
      include: {
        profesor: { select: { id: true, nombre: true } },
        _count: { select: { modulos: true } },
      },
    });
  }

  async unirse(estudianteId: string, dto: UnirseAulaDto) {
    const aula = await this.prisma.aula.findUnique({ where: { codigo: dto.codigo } });
    if (!aula) throw new NotFoundException('No existe un aula con ese código');

    try {
      await this.prisma.aulaEstudiante.create({
        data: { aulaId: aula.id, estudianteId },
      });
    } catch (e: any) {
      if (e?.code === 'P2002') {
        throw new ConflictException('Ya estás inscrito en esta aula');
      }
      throw e;
    }

    return { mensaje: 'Inscripción exitosa', aula: { id: aula.id, nombre: aula.nombre } };
  }

  async eliminar(profesorId: string, aulaId: string) {
    const aula = await this.prisma.aula.findFirst({ where: { id: aulaId, profesorId } });
    if (!aula) throw new NotFoundException('Aula no encontrada');
    // El schema tiene onDelete: Cascade en aula_estudiantes/modulos/ejercicios/evaluaciones/progreso,
    // así que borrar el aula limpia todo lo asociado.
    await this.prisma.aula.delete({ where: { id: aulaId } });
    return { mensaje: 'Aula eliminada' };
  }

  async estudiantesDeAula(aulaId: string, profesorId: string) {
    const aula = await this.prisma.aula.findFirst({ where: { id: aulaId, profesorId } });
    if (!aula) throw new NotFoundException('Aula no encontrada');

    const modulos = await this.prisma.modulo.findMany({ where: { aulaId }, select: { id: true } });
    const moduloIds = modulos.map((m) => m.id);

    const inscripciones = await this.prisma.aulaEstudiante.findMany({
      where: { aulaId },
      include: { estudiante: { select: { id: true, nombre: true, email: true } } },
      orderBy: { inscritoEn: 'asc' },
    });
    const estudianteIds = inscripciones.map((i) => i.estudianteId);

    const progreso =
      moduloIds.length && estudianteIds.length
        ? await this.prisma.progresoUsuario.findMany({
            where: { moduloId: { in: moduloIds }, usuarioId: { in: estudianteIds } },
          })
        : [];

    return inscripciones.map((i) => {
      const suyo = progreso.filter((p) => p.usuarioId === i.estudianteId);
      const modulosCompletados = suyo.filter((p) => p.completado).length;
      const promedio = suyo.length
        ? Math.round(suyo.reduce((a, p) => a + (p.puntaje ?? 0), 0) / suyo.length)
        : 0;
      return {
        ...i.estudiante,
        inscritoEn: i.inscritoEn,
        modulosCompletados,
        totalModulos: moduloIds.length,
        promedio,
        progreso: suyo.map((p) => ({ moduloId: p.moduloId, completado: p.completado, puntaje: p.puntaje })),
      };
    });
  }

  private generarCodigo() {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let codigo = '';
    for (let i = 0; i < 6; i++) {
      codigo += chars[Math.floor(Math.random() * chars.length)];
    }
    return codigo;
  }
}
