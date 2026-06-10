import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ModulesService {
  constructor(private prisma: PrismaService) {}

  async findAll(userId: string) {
    const modules = await this.prisma.module.findMany({
      where: { isActive: true },
      orderBy: { order: 'asc' },
      include: { _count: { select: { exercises: true } } },
    });

    const progressRecords = await this.prisma.progress.findMany({
      where: { userId },
    });
    const progressMap = new Map(progressRecords.map((p) => [p.moduleId, p]));

    return modules.map((mod, index) => {
      const prog = progressMap.get(mod.id);
      const isUnlocked = index === 0 || !!progressMap.get(modules[index - 1].id)?.completed;
      return {
        ...mod,
        progress: prog || null,
        isUnlocked,
        isCompleted: prog?.completed || false,
      };
    });
  }

  async findOne(id: string) {
    const mod = await this.prisma.module.findUnique({
      where: { id },
      include: { exercises: true, evaluation: { include: { questions: true } } },
    });
    if (!mod) throw new NotFoundException('Module not found');
    return mod;
  }
}
