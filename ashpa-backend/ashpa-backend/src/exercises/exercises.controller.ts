import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ExercisesService } from './exercises.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('exercises')
export class ExercisesController {
  constructor(private exercisesService: ExercisesService) {}

  @Get(':moduleId')
  findByModule(@Param('moduleId') moduleId: string) {
    return this.exercisesService.findByModule(moduleId);
  }
}
