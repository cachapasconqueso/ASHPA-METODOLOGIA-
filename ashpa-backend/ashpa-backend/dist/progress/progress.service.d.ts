import { Role } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
export declare class ProgressService {
    private prisma;
    constructor(prisma: PrismaService);
    getMyProgress(userId: string): Promise<({
        module: {
            name: string;
            id: string;
            level: number;
            order: number;
        };
    } & {
        id: string;
        userId: string;
        moduleId: string;
        completed: boolean;
        score: number | null;
        unlockedAt: Date | null;
    })[]>;
    getStudentProgress(studentId: string, requesterId: string, requesterRole: Role): Promise<({
        module: {
            name: string;
            id: string;
            level: number;
            order: number;
        };
    } & {
        id: string;
        userId: string;
        moduleId: string;
        completed: boolean;
        score: number | null;
        unlockedAt: Date | null;
    })[]>;
}
