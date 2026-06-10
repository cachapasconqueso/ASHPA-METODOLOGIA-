import { PrismaService } from '../prisma/prisma.service';
import { AttemptDto } from './dto/attempt.dto';
export declare class EvaluationsService {
    private prisma;
    constructor(prisma: PrismaService);
    findByModule(moduleId: string): Promise<{
        questions: {
            options: string[];
            id: string;
            evaluationId: string;
            question: string;
            answer: string;
        }[];
    } & {
        id: string;
        moduleId: string;
        minScore: number;
    }>;
    submitAttempt(moduleId: string, userId: string, dto: AttemptDto): Promise<{
        score: number;
        passed: boolean;
        correct: number;
        total: number;
        id: string;
        createdAt: Date;
        userId: string;
        evaluationId: string;
    }>;
    private completeModule;
    private checkAndAwardBadges;
}
