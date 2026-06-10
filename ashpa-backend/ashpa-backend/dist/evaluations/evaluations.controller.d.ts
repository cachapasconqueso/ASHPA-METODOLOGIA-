import { EvaluationsService } from './evaluations.service';
import { AttemptDto } from './dto/attempt.dto';
export declare class EvaluationsController {
    private evaluationsService;
    constructor(evaluationsService: EvaluationsService);
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
    submitAttempt(moduleId: string, dto: AttemptDto, req: any): Promise<{
        score: number;
        passed: boolean;
        correct: number;
        total: number;
        id: string;
        createdAt: Date;
        userId: string;
        evaluationId: string;
    }>;
}
