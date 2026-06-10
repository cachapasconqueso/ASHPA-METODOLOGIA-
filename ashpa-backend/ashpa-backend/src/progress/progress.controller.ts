import { Controller, Get, Param, Request, UseGuards } from '@nestjs/common';
import { ProgressService } from './progress.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('progress')
export class ProgressController {
  constructor(private progressService: ProgressService) {}

  @Get('me')
  getMyProgress(@Request() req) {
    return this.progressService.getMyProgress(req.user.id);
  }

  @Get('student/:userId')
  getStudentProgress(@Param('userId') userId: string, @Request() req) {
    return this.progressService.getStudentProgress(userId, req.user.id, req.user.role);
  }
}
