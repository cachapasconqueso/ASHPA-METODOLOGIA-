import { TeacherService } from './teacher.service';
import { CreateExamDto } from './dto/create-exam.dto';
import { AssignExamDto } from './dto/assign-exam.dto';
export declare class TeacherController {
    private teacherService;
    constructor(teacherService: TeacherService);
    getStudents(): Promise<{
        progress: ({
            module: {
                name: string;
                id: string;
                order: number;
            };
        } & {
            id: string;
            userId: string;
            moduleId: string;
            completed: boolean;
            score: number | null;
            unlockedAt: Date | null;
        })[];
        name: string;
        email: string;
        id: string;
        createdAt: Date;
    }[]>;
    createExam(req: any, dto: CreateExamDto): Promise<{
        id: string;
        createdAt: Date;
        questions: import("@prisma/client/runtime/client").JsonValue;
        title: string;
        teacherId: string;
    }>;
    assignExam(id: string, dto: AssignExamDto): Promise<{
        message: string;
        count: number;
    }>;
    getMyExams(req: any): Promise<({
        _count: {
            assignments: number;
        };
    } & {
        id: string;
        createdAt: Date;
        questions: import("@prisma/client/runtime/client").JsonValue;
        title: string;
        teacherId: string;
    })[]>;
    getExamResults(id: string, req: any): Promise<({
        student: {
            name: string;
            email: string;
            id: string;
        };
    } & {
        id: string;
        completed: boolean;
        score: number | null;
        dueDate: Date;
        examId: string;
        studentId: string;
    })[]>;
}
