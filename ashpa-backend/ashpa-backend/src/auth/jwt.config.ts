import { ConfigService } from '@nestjs/config';

// Lee JWT_SECRET y falla en el arranque si no está configurado (sin fallback inseguro).
export function obtenerJwtSecret(config: ConfigService): string {
  const secret = config.get<string>('JWT_SECRET');
  if (!secret) {
    throw new Error('Falta la variable de entorno JWT_SECRET. Configúrala en tu archivo .env');
  }
  return secret;
}
