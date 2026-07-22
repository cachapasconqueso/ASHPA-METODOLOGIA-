import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { ROLES } from './roles.constants';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async register(dto: RegisterDto) {
    const existente = await this.prisma.usuario.findUnique({ where: { email: dto.email } });
    if (existente) throw new BadRequestException('El email ya está en uso');

    // El código de aula es obligatorio: se valida antes de crear la cuenta
    const aula = await this.prisma.aula.findUnique({ where: { codigo: dto.codigo } });
    if (!aula) throw new BadRequestException('El código de aula no es válido');

    const hash = await bcrypt.hash(dto.contrasena, 10);

    // Todo usuario nuevo se registra como ESTUDIANTE (los profesores se crean por seed/admin)
    // y queda inscrito automáticamente en el aula del código, en una sola operación.
    const usuario = await this.prisma.usuario.create({
      data: {
        nombre: dto.nombre,
        email: dto.email,
        contrasena: hash,
        roles: {
          create: {
            rol: {
              connectOrCreate: {
                where: { nombre: ROLES.ESTUDIANTE },
                create: {
                  nombre: ROLES.ESTUDIANTE,
                  descripcion: 'Alumno que realiza los módulos y evaluaciones',
                },
              },
            },
          },
        },
        inscripciones: {
          create: { aulaId: aula.id },
        },
      },
      include: { roles: { include: { rol: true } } },
    });

    const respuesta = this.construirRespuesta(usuario);
    return { ...respuesta, aula: { id: aula.id, nombre: aula.nombre, codigo: aula.codigo } };
  }

  async login(dto: LoginDto) {
    const usuario = await this.prisma.usuario.findUnique({
      where: { email: dto.email },
      include: { roles: { include: { rol: true } } },
    });
    if (!usuario) throw new UnauthorizedException('Credenciales inválidas');

    const valido = await bcrypt.compare(dto.contrasena, usuario.contrasena);
    if (!valido) throw new UnauthorizedException('Credenciales inválidas');

    return this.construirRespuesta(usuario);
  }

  getMe(usuario: any) {
    return usuario;
  }

  private construirRespuesta(usuario: {
    id: string;
    email: string;
    contrasena: string;
    roles: { rol: { nombre: string } }[];
    [k: string]: any;
  }) {
    const roles = usuario.roles.map((ur) => ur.rol.nombre);
    const token = this.signToken(usuario.id, usuario.email, roles);
    const { contrasena: _omitir, roles: _omitirRoles, ...datos } = usuario;
    return { access_token: token, usuario: { ...datos, roles } };
  }

  private signToken(usuarioId: string, email: string, roles: string[]) {
    return this.jwtService.sign({ sub: usuarioId, email, roles });
  }
}
