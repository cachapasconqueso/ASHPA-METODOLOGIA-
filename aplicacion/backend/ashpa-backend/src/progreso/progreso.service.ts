import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ROLES } from '../auth/roles.constants';

const INCLUDE_MODULO = {
  modulo: { select: { id: true, nombre: true, orden: true, nivel: true, aulaId: true } },
};

@Injectable()
export class ProgresoService {
  constructor(private prisma: PrismaService) {}

  async miProgreso(usuarioId: string) {
    return this.prisma.progresoUsuario.findMany({
      where: { usuarioId },
      include: INCLUDE_MODULO,
      orderBy: { modulo: { orden: 'asc' } },
    });
  }

  async progresoEstudiante(estudianteId: string, rolesSolicitante: string[]) {
    if (!rolesSolicitante.includes(ROLES.PROFESOR)) {
      throw new ForbiddenException('Solo los profesores pueden ver el progreso de otros estudiantes');
    }
    return this.prisma.progresoUsuario.findMany({
      where: { usuarioId: estudianteId },
      include: INCLUDE_MODULO,
      orderBy: { modulo: { orden: 'asc' } },
    });
  }
}
