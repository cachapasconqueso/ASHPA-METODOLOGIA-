import { ProgressService } from './progress.service';
export declare class ProgressController {
    private progressService;
    constructor(progressService: ProgressService);
    getMyProgress(req: any): Promise<({
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
    getStudentProgress(userId: string, req: any): Promise<({
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
