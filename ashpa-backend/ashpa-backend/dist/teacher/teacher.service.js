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
exports.TeacherService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let TeacherService = class TeacherService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getStudents() {
        const students = await this.prisma.user.findMany({
            where: { role: 'STUDENT' },
            select: {
                id: true,
                name: true,
                email: true,
                createdAt: true,
                progress: {
                    include: { module: { select: { id: true, name: true, order: true } } },
                    orderBy: { module: { order: 'asc' } },
                },
            },
        });
        return students;
    }
    async createExam(teacherId, dto) {
        return this.prisma.teacherExam.create({
            data: { teacherId, title: dto.title, questions: dto.questions },
        });
    }
    async assignExam(examId, dto) {
        const exam = await this.prisma.teacherExam.findUnique({ where: { id: examId } });
        if (!exam)
            throw new common_1.NotFoundException('Exam not found');
        const assignments = dto.studentIds.map((studentId) => ({
            examId,
            studentId,
            dueDate: new Date(dto.dueDate),
        }));
        await this.prisma.examAssignment.createMany({ data: assignments });
        return { message: 'Exam assigned successfully', count: assignments.length };
    }
    async getMyExams(teacherId) {
        return this.prisma.teacherExam.findMany({
            where: { teacherId },
            orderBy: { createdAt: 'desc' },
            include: { _count: { select: { assignments: true } } },
        });
    }
    async getExamResults(examId, teacherId) {
        const exam = await this.prisma.teacherExam.findFirst({
            where: { id: examId, teacherId },
        });
        if (!exam)
            throw new common_1.NotFoundException('Exam not found');
        return this.prisma.examAssignment.findMany({
            where: { examId },
            include: {
                student: { select: { id: true, name: true, email: true } },
            },
        });
    }
};
exports.TeacherService = TeacherService;
exports.TeacherService = TeacherService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TeacherService);
//# sourceMappingURL=teacher.service.js.map