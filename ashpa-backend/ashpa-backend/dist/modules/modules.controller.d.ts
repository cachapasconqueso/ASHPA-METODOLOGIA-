import { ModulesService } from './modules.service';
export declare class ModulesController {
    private modulesService;
    constructor(modulesService: ModulesService);
    findAll(req: any): Promise<{
        progress: {
            id: string;
            userId: string;
            moduleId: string;
            completed: boolean;
            score: number | null;
            unlockedAt: Date | null;
        } | null;
        isUnlocked: boolean;
        isCompleted: boolean;
        _count: {
            exercises: number;
        };
        name: string;
        id: string;
        description: string;
        level: number;
        order: number;
        isActive: boolean;
    }[]>;
    findOne(id: string): Promise<{
        evaluation: ({
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
        }) | null;
        exercises: {
            options: string[];
            id: string;
            moduleId: string;
            question: string;
            answer: string;
            type: import(".prisma/client").$Enums.ExerciseType;
        }[];
    } & {
        name: string;
        id: string;
        description: string;
        level: number;
        order: number;
        isActive: boolean;
    }>;
}
