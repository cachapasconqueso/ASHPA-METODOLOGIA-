import { Body, Controller, Get, Param, Patch, Request, UseGuards } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { ActualizarUsuarioDto } from './dto/actualizar-usuario.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { ROLES } from '../auth/roles.constants';

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('usuarios')
export class UsuariosController {
  constructor(private usuariosService: UsuariosService) {}

  @Roles(ROLES.PROFESOR)
  @Get()
  listar() {
    return this.usuariosService.listar();
  }

  @Get(':id')
  obtener(@Param('id') id: string) {
    return this.usuariosService.obtener(id);
  }

  @Patch(':id')
  actualizar(@Param('id') id: string, @Body() dto: ActualizarUsuarioDto, @Request() req) {
    return this.usuariosService.actualizar(id, dto, req.user.id);
  }
}
