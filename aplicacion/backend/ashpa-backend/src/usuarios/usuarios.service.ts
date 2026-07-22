import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';
import { ActualizarUsuarioDto } from './dto/actualizar-usuario.dto';

const SELECT_PUBLICO = {
  id: true,
  nombre: true,
  email: true,
  creadoEn: true,
  roles: { select: { rol: { select: { nombre: true } } } },
};

@Injectable()
export class UsuariosService {
  constructor(private prisma: PrismaService) {}

  async listar() {
    const usuarios = await this.prisma.usuario.findMany({
      select: SELECT_PUBLICO,
      orderBy: { creadoEn: 'asc' },
    });
    return usuarios.map((u) => ({ ...u, roles: u.roles.map((r) => r.rol.nombre) }));
  }

  async obtener(id: string) {
    const usuario = await this.prisma.usuario.findUnique({
      where: { id },
      select: SELECT_PUBLICO,
    });
    if (!usuario) throw new NotFoundException('Usuario no encontrado');
    return { ...usuario, roles: usuario.roles.map((r) => r.rol.nombre) };
  }

  async actualizar(id: string, dto: ActualizarUsuarioDto, solicitanteId: string) {
    if (id !== solicitanteId) throw new ForbiddenException('No puedes editar a otro usuario');

    const data: { nombre?: string; contrasena?: string } = {};
    if (dto.nombre) data.nombre = dto.nombre;
    if (dto.contrasena) data.contrasena = await bcrypt.hash(dto.contrasena, 10);

    const usuario = await this.prisma.usuario.update({
      where: { id },
      data,
      select: SELECT_PUBLICO,
    });
    return { ...usuario, roles: usuario.roles.map((r) => r.rol.nombre) };
  }
}
