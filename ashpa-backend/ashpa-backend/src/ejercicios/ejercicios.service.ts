import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class EjerciciosService {
  constructor(private prisma: PrismaService) {}

  async listarPorModulo(moduloId: string) {
    const mod = await this.prisma.modulo.findUnique({ where: { id: moduloId } });
    if (!mod) throw new NotFoundException('Módulo no encontrado');
    // No se expone `respuesta` al cliente
    return this.prisma.ejercicio.findMany({
      where: { moduloId },
      select: { id: true, moduloId: true, tipo: true, pregunta: true, opciones: true },
    });
  }
}
