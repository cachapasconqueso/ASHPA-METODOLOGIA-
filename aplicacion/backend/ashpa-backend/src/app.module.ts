import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { AulasModule } from './aulas/aulas.module';
import { ModulosModule } from './modulos/modulos.module';
import { EjerciciosModule } from './ejercicios/ejercicios.module';
import { EvaluacionesModule } from './evaluaciones/evaluaciones.module';
import { ProgresoModule } from './progreso/progreso.module';
import { InsigniasModule } from './insignias/insignias.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    AuthModule,
    UsuariosModule,
    AulasModule,
    ModulosModule,
    EjerciciosModule,
    EvaluacionesModule,
    ProgresoModule,
    InsigniasModule,
  ],
})
export class AppModule {}
