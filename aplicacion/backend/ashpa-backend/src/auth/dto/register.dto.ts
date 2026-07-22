import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class RegisterDto {
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  contrasena: string;

  // Código del aula proporcionado por el profesor: obligatorio para registrarse
  @IsNotEmpty()
  @IsString()
  codigo: string;
}
