import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { shuffle } from '../common/shuffle';

@Injectable()
export class EjerciciosService {
  constructor(private prisma: PrismaService) {}

  async listarPorModulo(moduloId: string) {
    const mod = await this.prisma.modulo.findUnique({ where: { id: moduloId } });
    if (!mod) throw new NotFoundException('Módulo no encontrado');
    // Los ejercicios de práctica son de autocorrección (no se califican), por eso
    // sí exponen `respuesta` para dar feedback inmediato.
    const ejercicios = await this.prisma.ejercicio.findMany({
      where: { moduloId },
      select: { id: true, moduloId: true, tipo: true, explicacion: true, pregunta: true, opciones: true, respuesta: true },
    });
    // Se baraja el orden de las opciones para que la respuesta correcta no
    // quede siempre en la misma posición.
    return ejercicios.map((ej) => ({ ...ej, opciones: shuffle(ej.opciones) }));
  }
}
