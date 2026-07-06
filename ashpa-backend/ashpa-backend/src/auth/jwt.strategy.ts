import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../prisma/prisma.service';
import { obtenerJwtSecret } from './jwt.config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private prisma: PrismaService,
    config: ConfigService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: obtenerJwtSecret(config),
    });
  }

  async validate(payload: { sub: string; email: string; roles: string[] }) {
    const usuario = await this.prisma.usuario.findUnique({
      where: { id: payload.sub },
      include: { roles: { include: { rol: true } } },
    });
    if (!usuario) throw new UnauthorizedException();

    return {
      id: usuario.id,
      email: usuario.email,
      nombre: usuario.nombre,
      roles: usuario.roles.map((ur) => ur.rol.nombre),
    };
  }
}
