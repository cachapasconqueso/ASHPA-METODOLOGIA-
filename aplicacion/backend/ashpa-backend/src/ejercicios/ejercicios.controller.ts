import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { EjerciciosService } from './ejercicios.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('ejercicios')
export class EjerciciosController {
  constructor(private ejerciciosService: EjerciciosService) {}

  @Get(':moduloId')
  listarPorModulo(@Param('moduloId') moduloId: string) {
    return this.ejerciciosService.listarPorModulo(moduloId);
  }
}
