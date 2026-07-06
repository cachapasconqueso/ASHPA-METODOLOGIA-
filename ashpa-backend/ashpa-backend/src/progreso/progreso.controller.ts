import { Controller, Get, Param, Request, UseGuards } from '@nestjs/common';
import { ProgresoService } from './progreso.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('progreso')
export class ProgresoController {
  constructor(private progresoService: ProgresoService) {}

  @Get('me')
  miProgreso(@Request() req) {
    return this.progresoService.miProgreso(req.user.id);
  }

  @Get('estudiante/:usuarioId')
  progresoEstudiante(@Param('usuarioId') usuarioId: string, @Request() req) {
    return this.progresoService.progresoEstudiante(usuarioId, req.user.roles);
  }
}
