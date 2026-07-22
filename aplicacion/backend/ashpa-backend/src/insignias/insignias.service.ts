import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class InsigniasService {
  constructor(private prisma: PrismaService) {}

  async misInsignias(usuarioId: string) {
    return this.prisma.insigniaUsuario.findMany({
      where: { usuarioId },
      include: { insignia: true },
      orderBy: { ganadaEn: 'desc' },
    });
  }
}
