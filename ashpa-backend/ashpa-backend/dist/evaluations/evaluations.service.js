"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvaluationsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let EvaluationsService = class EvaluationsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findByModule(moduleId) {
        const evaluation = await this.prisma.evaluation.findUnique({
            where: { moduleId },
            include: { questions: true },
        });
        if (!evaluation)
            throw new common_1.NotFoundException('Evaluation not found for this module');
        return evaluation;
    }
    async submitAttempt(moduleId, userId, dto) {
        const evaluation = await this.prisma.evaluation.findUnique({
            where: { moduleId },
            include: { questions: true },
        });
        if (!evaluation)
            throw new common_1.NotFoundException('Evaluation not found');
        const { questions } = evaluation;
        if (dto.answers.length !== questions.length) {
            throw new common_1.BadRequestException(`Expected ${questions.length} answers`);
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
    async completeModule(userId, moduleId, score) {
        await this.prisma.progress.upsert({
            where: { userId_moduleId: { userId, moduleId } },
            update: { completed: true, score },
            create: { userId, moduleId, completed: true, score, unlockedAt: new Date() },
        });
        const currentModule = await this.prisma.module.findUnique({ where: { id: moduleId } });
        if (!currentModule)
            return;
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
    async checkAndAwardBadges(userId, score) {
        const completedCount = await this.prisma.progress.count({
            where: { userId, completed: true },
        });
        const badges = await this.prisma.badge.findMany();
        const userBadges = await this.prisma.userBadge.findMany({ where: { userId } });
        const earned = new Set(userBadges.map((ub) => ub.badgeId));
        const totalModules = await this.prisma.module.count({ where: { isActive: true } });
        for (const badge of badges) {
            if (earned.has(badge.id))
                continue;
            let shouldEarn = false;
            if (badge.name === 'Primer módulo completado' && completedCount >= 1)
                shouldEarn = true;
            if (badge.name === '3 módulos completados' && completedCount >= 3)
                shouldEarn = true;
            if (badge.name === 'Todos los módulos básicos completados' && completedCount >= totalModules)
                shouldEarn = true;
            if (badge.name === 'Puntaje perfecto en evaluación' && score === 100)
                shouldEarn = true;
            if (shouldEarn) {
                await this.prisma.userBadge.create({ data: { userId, badgeId: badge.id } });
            }
        }
    }
};
exports.EvaluationsService = EvaluationsService;
exports.EvaluationsService = EvaluationsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], EvaluationsService);
//# sourceMappingURL=evaluations.service.js.map