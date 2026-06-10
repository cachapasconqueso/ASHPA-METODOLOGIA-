import { PrismaService } from '../prisma/prisma.service';
export declare class ExercisesService {
    private prisma;
    constructor(prisma: PrismaService);
    findByModule(moduleId: string): Promise<{
        options: string[];
        id: string;
        moduleId: string;
        question: string;
        answer: string;
        type: import(".prisma/client").$Enums.ExerciseType;
    }[]>;
}
