import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { IntentoDto } from './dto/intento.dto';
import { shuffle } from '../common/shuffle';

@Injectable()
export class EvaluacionesService {
  constructor(private prisma: PrismaService) {}

  async obtenerPorModulo(moduloId: string) {
    // No se expone `respuesta` al cliente; el orden es determinista
    const evaluacion = await this.prisma.evaluacion.findUnique({
      where: { moduloId },
      select: {
        id: true,
        moduloId: true,
        puntajeMinimo: true,
        preguntas: {
          select: { id: true, evaluacionId: true, pregunta: true, opciones: true },
          orderBy: { id: 'asc' },
        },
      },
    });
    if (!evaluacion) throw new NotFoundException('No hay evaluación para este módulo');
    // Se baraja el orden de las opciones para que la respuesta correcta no
    // quede siempre en la misma posición. El orden de las preguntas se
    // mantiene fijo (orderBy: id asc) para que coincida con registrarIntento.
    return {
      ...evaluacion,
      preguntas: evaluacion.preguntas.map((p) => ({ ...p, opciones: shuffle(p.opciones) })),
    };
  }

  async registrarIntento(moduloId: string, usuarioId: string, dto: IntentoDto) {
    // orderBy fijo para que el emparejamiento por índice coincida con obtenerPorModulo
    const evaluacion = await this.prisma.evaluacion.findUnique({
      where: { moduloId },
      include: { preguntas: { orderBy: { id: 'asc' } } },
    });
    if (!evaluacion) throw new NotFoundException('Evaluación no encontrada');

    const { preguntas } = evaluacion;
    if (dto.respuestas.length !== preguntas.length) {
      throw new BadRequestException(`Se esperaban ${preguntas.length} respuestas`);
    }

    const correctas = preguntas.filter((p, i) => p.respuesta === dto.respuestas[i]).length;
    const puntaje = Math.round((correctas / preguntas.length) * 100);
    const aprobado = puntaje >= evaluacion.puntajeMinimo;

    const intento = await this.prisma.evaluacionIntento.create({
      data: { evaluacionId: evaluacion.id, usuarioId, puntaje, aprobado },
    });

    if (aprobado) {
      await this.completarModulo(usuarioId, moduloId, puntaje);
    }

    return { ...intento, puntaje, aprobado, correctas, total: preguntas.length };
  }

  private async completarModulo(usuarioId: string, moduloId: string, puntaje: number) {
    // La disponibilidad de módulos la controla el docente (campo `activo`),
    // así que aquí solo registramos el progreso y otorgamos insignias.
    await this.prisma.progresoUsuario.upsert({
      where: { usuarioId_moduloId: { usuarioId, moduloId } },
      update: { completado: true, puntaje },
      create: { usuarioId, moduloId, completado: true, puntaje, desbloqueadoEn: new Date() },
    });

    await this.verificarInsignias(usuarioId, puntaje);
  }

  private async verificarInsignias(usuarioId: string, puntaje: number) {
    const completados = await this.prisma.progresoUsuario.count({
      where: { usuarioId, completado: true },
    });

    const insignias = await this.prisma.insignia.findMany();
    const insigniasUsuario = await this.prisma.insigniaUsuario.findMany({ where: { usuarioId } });
    const ganadas = new Set(insigniasUsuario.map((iu) => iu.insigniaId));

    const totalModulos = await this.prisma.modulo.count({ where: { activo: true } });

    for (const insignia of insignias) {
      if (ganadas.has(insignia.id)) continue;

      let debeGanar = false;
      if (insignia.nombre === 'Primer módulo completado' && completados >= 1) debeGanar = true;
      if (insignia.nombre === '3 módulos completados' && completados >= 3) debeGanar = true;
      if (insignia.nombre === 'Todos los módulos básicos completados' && completados >= totalModulos) debeGanar = true;
      if (insignia.nombre === 'Puntaje perfecto en evaluación' && puntaje === 100) debeGanar = true;

      if (debeGanar) {
        await this.prisma.insigniaUsuario.create({ data: { usuarioId, insigniaId: insignia.id } });
      }
    }
  }
}
