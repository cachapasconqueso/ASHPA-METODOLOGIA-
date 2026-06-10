import { PrismaService } from '../prisma/prisma.service';
import { CreateExamDto } from './dto/create-exam.dto';
import { AssignExamDto } from './dto/assign-exam.dto';
export declare class TeacherService {
    private prisma;
    constructor(prisma: PrismaService);
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
    createExam(teacherId: string, dto: CreateExamDto): Promise<{
        id: string;
        createdAt: Date;
        questions: import("@prisma/client/runtime/client").JsonValue;
        title: string;
        teacherId: string;
    }>;
    assignExam(examId: string, dto: AssignExamDto): Promise<{
        message: string;
        count: number;
    }>;
    getMyExams(teacherId: string): Promise<({
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
    getExamResults(examId: string, teacherId: string): Promise<({
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
