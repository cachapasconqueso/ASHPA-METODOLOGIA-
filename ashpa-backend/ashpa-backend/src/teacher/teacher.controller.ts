import { Body, Controller, Get, Param, Post, Request, UseGuards } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { CreateExamDto } from './dto/create-exam.dto';
import { AssignExamDto } from './dto/assign-exam.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { Role } from '@prisma/client';

@UseGuards(JwtAuthGuard, RolesGuard)
@Roles(Role.TEACHER)
@Controller('teacher')
export class TeacherController {
  constructor(private teacherService: TeacherService) {}

  @Get('students')
  getStudents() {
    return this.teacherService.getStudents();
  }

  @Post('exams')
  createExam(@Request() req, @Body() dto: CreateExamDto) {
    return this.teacherService.createExam(req.user.id, dto);
  }

  @Post('exams/:id/assign')
  assignExam(@Param('id') id: string, @Body() dto: AssignExamDto) {
    return this.teacherService.assignExam(id, dto);
  }

  @Get('exams')
  getMyExams(@Request() req) {
    return this.teacherService.getMyExams(req.user.id);
  }

  @Get('exams/:id/results')
  getExamResults(@Param('id') id: string, @Request() req) {
    return this.teacherService.getExamResults(id, req.user.id);
  }
}
