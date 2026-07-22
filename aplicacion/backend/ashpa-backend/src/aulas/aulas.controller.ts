import { Body, Controller, Delete, Get, Param, Post, Request, UseGuards } from '@nestjs/common';
import { AulasService } from './aulas.service';
import { CrearAulaDto } from './dto/crear-aula.dto';
import { UnirseAulaDto } from './dto/unirse-aula.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { ROLES } from '../auth/roles.constants';

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('aulas')
export class AulasController {
  constructor(private aulasService: AulasService) {}

  // ── Profesor ──────────────────────────────
  @Roles(ROLES.PROFESOR)
  @Post()
  crear(@Request() req, @Body() dto: CrearAulaDto) {
    return this.aulasService.crear(req.user.id, dto);
  }

  @Roles(ROLES.PROFESOR)
  @Get('mias')
  misAulas(@Request() req) {
    return this.aulasService.misAulas(req.user.id);
  }

  @Roles(ROLES.PROFESOR)
  @Get(':id/estudiantes')
  estudiantesDeAula(@Param('id') id: string, @Request() req) {
    return this.aulasService.estudiantesDeAula(id, req.user.id);
  }

  @Roles(ROLES.PROFESOR)
  @Delete(':id')
  eliminar(@Param('id') id: string, @Request() req) {
    return this.aulasService.eliminar(req.user.id, id);
  }

  // ── Estudiante ────────────────────────────
  @Post('unirse')
  unirse(@Request() req, @Body() dto: UnirseAulaDto) {
    return this.aulasService.unirse(req.user.id, dto);
  }

  @Get('inscritas')
  aulasInscritas(@Request() req) {
    return this.aulasService.aulasInscritas(req.user.id);
  }
}
