import { ExercisesService } from './exercises.service';
export declare class ExercisesController {
    private exercisesService;
    constructor(exercisesService: ExercisesService);
    findByModule(moduleId: string): Promise<{
        options: string[];
        id: string;
        moduleId: string;
        question: string;
        answer: string;
        type: import(".prisma/client").$Enums.ExerciseType;
    }[]>;
}
