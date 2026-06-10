import { Body, Controller, Get, Param, Post, Request, UseGuards } from '@nestjs/common';
import { EvaluationsService } from './evaluations.service';
import { AttemptDto } from './dto/attempt.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('evaluations')
export class EvaluationsController {
  constructor(private evaluationsService: EvaluationsService) {}

  @Get(':moduleId')
  findByModule(@Param('moduleId') moduleId: string) {
    return this.evaluationsService.findByModule(moduleId);
  }

  @Post(':moduleId/attempt')
  submitAttempt(
    @Param('moduleId') moduleId: string,
    @Body() dto: AttemptDto,
    @Request() req,
  ) {
    return this.evaluationsService.submitAttempt(moduleId, req.user.id, dto);
  }
}
