import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // CORS explícito: acepta peticiones del frontend en desarrollo y producción
  app.enableCors({
    origin: [
      'http://localhost:5173', // Vite dev server (puerto por defecto)
      'http://localhost:4173', // Vite preview
      'http://localhost:3001', // puerto alternativo si lo usas
      'https://ashpa-frontend-cachapasconquesos-projects.vercel.app', // Vercel producción
      /^https:\/\/ashpa-frontend-.*-cachapasconquesos-projects\.vercel\.app$/, // Vercel preview deploys
      'https://frontend-delta-eight-12.vercel.app', // alias viejo (previo al rename), ya compartido con gente
    ],
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  });

  await app.listen(process.env.PORT ?? 3000);
  console.log(`ASHPA Backend running on http://localhost:${process.env.PORT ?? 3000}`);
}
bootstrap();
