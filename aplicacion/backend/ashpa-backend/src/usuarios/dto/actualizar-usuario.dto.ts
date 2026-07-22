import { IsOptional, IsString, MinLength } from 'class-validator';

export class ActualizarUsuarioDto {
  @IsOptional()
  @IsString()
  nombre?: string;

  @IsOptional()
  @IsString()
  @MinLength(6)
  contrasena?: string;
}
