import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ModulesModule } from './modules/modules.module';
import { ExercisesModule } from './exercises/exercises.module';
import { EvaluationsModule } from './evaluations/evaluations.module';
import { ProgressModule } from './progress/progress.module';
import { TeacherModule } from './teacher/teacher.module';
import { BadgesModule } from './badges/badges.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    AuthModule,
    UsersModule,
    ModulesModule,
    ExercisesModule,
    EvaluationsModule,
    ProgressModule,
    TeacherModule,
    BadgesModule,
  ],
})
export class AppModule {}
