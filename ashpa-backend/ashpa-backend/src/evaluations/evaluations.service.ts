import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AttemptDto } from './dto/attempt.dto';

@Injectable()
export class EvaluationsService {
  constructor(private prisma: PrismaService) {}

  async findByModule(moduleId: string) {
    const evaluation = await this.prisma.evaluation.findUnique({
      where: { moduleId },
      include: { questions: true },
    });
    if (!evaluation) throw new NotFoundException('Evaluation not found for this module');
    return evaluation;
  }

  async submitAttempt(moduleId: string, userId: string, dto: AttemptDto) {
    const evaluation = await this.prisma.evaluation.findUnique({
      where: { moduleId },
      include: { questions: true },
    });
    if (!evaluation) throw new NotFoundException('Evaluation not found');

    const { questions } = evaluation;
    if (dto.answers.length !== questions.length) {
      throw new BadRequestException(`Expected ${questions.length} answers`);
    }

    const correct = questions.filter((q, i) => q.answer === dto.answers[i]).length;
    const score = Math.round((correct / questions.length) * 100);
    const passed = score >= evaluation.minScore;

    const attempt = await this.prisma.evalAttempt.create({
      data: { evaluationId: evaluation.id, userId, score, passed },
    });

    if (passed) {
      await this.completeModule(userId, moduleId, score);
    }

    return { ...attempt, score, passed, correct, total: questions.length };
  }

  private async completeModule(userId: string, moduleId: string, score: number) {
    await this.prisma.progress.upsert({
      where: { userId_moduleId: { userId, moduleId } },
      update: { completed: true, score },
      create: { userId, moduleId, completed: true, score, unlockedAt: new Date() },
    });

    const currentModule = await this.prisma.module.findUnique({ where: { id: moduleId } });
    if (!currentModule) return;

    const nextModule = await this.prisma.module.findFirst({
      where: { order: currentModule.order + 1, isActive: true },
    });

    if (nextModule) {
      await this.prisma.progress.upsert({
        where: { userId_moduleId: { userId, moduleId: nextModule.id } },
        update: { unlockedAt: new Date() },
        create: { userId, moduleId: nextModule.id, unlockedAt: new Date() },
      });
    }

    await this.checkAndAwardBadges(userId, score);
  }

  private async checkAndAwardBadges(userId: string, score: number) {
    const completedCount = await this.prisma.progress.count({
      where: { userId, completed: true },
    });

    const badges = await this.prisma.badge.findMany();
    const userBadges = await this.prisma.userBadge.findMany({ where: { userId } });
    const earned = new Set(userBadges.map((ub) => ub.badgeId));

    const totalModules = await this.prisma.module.count({ where: { isActive: true } });

    for (const badge of badges) {
      if (earned.has(badge.id)) continue;

      let shouldEarn = false;
      if (badge.name === 'Primer módulo completado' && completedCount >= 1) shouldEarn = true;
      if (badge.name === '3 módulos completados' && completedCount >= 3) shouldEarn = true;
      if (badge.name === 'Todos los módulos básicos completados' && completedCount >= totalModules) shouldEarn = true;
      if (badge.name === 'Puntaje perfecto en evaluación' && score === 100) shouldEarn = true;

      if (shouldEarn) {
        await this.prisma.userBadge.create({ data: { userId, badgeId: badge.id } });
      }
    }
  }
}
