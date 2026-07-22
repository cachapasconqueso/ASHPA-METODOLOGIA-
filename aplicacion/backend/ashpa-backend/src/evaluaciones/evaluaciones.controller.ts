import { Body, Controller, Get, Param, Post, Request, UseGuards } from '@nestjs/common';
import { EvaluacionesService } from './evaluaciones.service';
import { IntentoDto } from './dto/intento.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('evaluaciones')
export class EvaluacionesController {
  constructor(private evaluacionesService: EvaluacionesService) {}

  @Get(':moduloId')
  obtenerPorModulo(@Param('moduloId') moduloId: string) {
    return this.evaluacionesService.obtenerPorModulo(moduloId);
  }

  @Post(':moduloId/intento')
  registrarIntento(
    @Param('moduloId') moduloId: string,
    @Body() dto: IntentoDto,
    @Request() req,
  ) {
    return this.evaluacionesService.registrarIntento(moduloId, req.user.id, dto);
  }
}
