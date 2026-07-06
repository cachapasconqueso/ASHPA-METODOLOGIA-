import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ModulosService {
  constructor(private prisma: PrismaService) {}

  async listarPorAula(aulaId: string, usuarioId: string) {
    const modulos = await this.prisma.modulo.findMany({
      where: { aulaId },
      orderBy: { orden: 'asc' },
      include: { _count: { select: { ejercicios: true } } },
    });

    const progresoRegistros = await this.prisma.progresoUsuario.findMany({
      where: { usuarioId },
    });
    const progresoMap = new Map(progresoRegistros.map((p) => [p.moduloId, p]));

    return modulos.map((mod) => {
      const prog = progresoMap.get(mod.id);
      return {
        ...mod,
        habilitado: mod.activo, // el docente controla la disponibilidad con `activo`
        progreso: prog || null,
        completado: prog?.completado || false,
      };
    });
  }

  async obtener(id: string) {
    // No se expone `respuesta` de ejercicios ni de preguntas de evaluación
    const mod = await this.prisma.modulo.findUnique({
      where: { id },
      include: {
        ejercicios: {
          select: { id: true, moduloId: true, tipo: true, pregunta: true, opciones: true },
        },
        evaluacion: {
          select: {
            id: true,
            moduloId: true,
            puntajeMinimo: true,
            preguntas: {
              select: { id: true, evaluacionId: true, pregunta: true, opciones: true },
              orderBy: { id: 'asc' },
            },
          },
        },
      },
    });
    if (!mod) throw new NotFoundException('Módulo no encontrado');
    return mod;
  }

  // Solo el docente dueño del aula puede habilitar/deshabilitar un módulo
  async cambiarActivo(moduloId: string, profesorId: string, activo: boolean) {
    const modulo = await this.prisma.modulo.findUnique({
      where: { id: moduloId },
      include: { aula: { select: { profesorId: true } } },
    });
    if (!modulo) throw new NotFoundException('Módulo no encontrado');
    if (modulo.aula.profesorId !== profesorId) {
      throw new ForbiddenException('No puedes modificar módulos de un aula que no es tuya');
    }
    return this.prisma.modulo.update({
      where: { id: moduloId },
      data: { activo },
      select: { id: true, nombre: true, activo: true },
    });
  }
}
