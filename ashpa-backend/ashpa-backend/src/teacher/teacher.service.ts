import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateExamDto } from './dto/create-exam.dto';
import { AssignExamDto } from './dto/assign-exam.dto';

@Injectable()
export class TeacherService {
  constructor(private prisma: PrismaService) {}

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

  async createExam(teacherId: string, dto: CreateExamDto) {
    return this.prisma.teacherExam.create({
      data: { teacherId, title: dto.title, questions: dto.questions },
    });
  }

  async assignExam(examId: string, dto: AssignExamDto) {
    const exam = await this.prisma.teacherExam.findUnique({ where: { id: examId } });
    if (!exam) throw new NotFoundException('Exam not found');

    const assignments = dto.studentIds.map((studentId) => ({
      examId,
      studentId,
      dueDate: new Date(dto.dueDate),
    }));

    await this.prisma.examAssignment.createMany({ data: assignments });
    return { message: 'Exam assigned successfully', count: assignments.length };
  }

  async getMyExams(teacherId: string) {
    return this.prisma.teacherExam.findMany({
      where: { teacherId },
      orderBy: { createdAt: 'desc' },
      include: { _count: { select: { assignments: true } } },
    });
  }

  async getExamResults(examId: string, teacherId: string) {
    const exam = await this.prisma.teacherExam.findFirst({
      where: { id: examId, teacherId },
    });
    if (!exam) throw new NotFoundException('Exam not found');

    return this.prisma.examAssignment.findMany({
      where: { examId },
      include: {
        student: { select: { id: true, name: true, email: true } },
      },
    });
  }
}
