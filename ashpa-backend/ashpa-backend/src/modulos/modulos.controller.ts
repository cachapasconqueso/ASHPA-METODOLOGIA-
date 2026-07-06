import { Body, Controller, Get, Param, Patch, Request, UseGuards } from '@nestjs/common';
import { ModulosService } from './modulos.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { ROLES } from '../auth/roles.constants';
import { CambiarActivoDto } from './dto/cambiar-activo.dto';

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('modulos')
export class ModulosController {
  constructor(private modulosService: ModulosService) {}

  @Get('aula/:aulaId')
  listarPorAula(@Param('aulaId') aulaId: string, @Request() req) {
    return this.modulosService.listarPorAula(aulaId, req.user.id);
  }

  @Get(':id')
  obtener(@Param('id') id: string) {
    return this.modulosService.obtener(id);
  }

  @Roles(ROLES.PROFESOR)
  @Patch(':id/activo')
  cambiarActivo(@Param('id') id: string, @Body() dto: CambiarActivoDto, @Request() req) {
    return this.modulosService.cambiarActivo(id, req.user.id, dto.activo);
  }
}
