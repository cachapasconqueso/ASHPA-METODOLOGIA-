import { ForbiddenException, Injectable } from '@nestjs/common';
import { Role } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProgressService {
  constructor(private prisma: PrismaService) {}

  async getMyProgress(userId: string) {
    return this.prisma.progress.findMany({
      where: { userId },
      include: { module: { select: { id: true, name: true, order: true, level: true } } },
      orderBy: { module: { order: 'asc' } },
    });
  }

  async getStudentProgress(studentId: string, requesterId: string, requesterRole: Role) {
    if (requesterRole !== Role.TEACHER) {
      throw new ForbiddenException('Only teachers can view other students progress');
    }
    return this.prisma.progress.findMany({
      where: { userId: studentId },
      include: { module: { select: { id: true, name: true, order: true, level: true } } },
      orderBy: { module: { order: 'asc' } },
    });
  }
}
