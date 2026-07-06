import { IsNotEmpty, IsString } from 'class-validator';

export class CrearAulaDto {
  @IsNotEmpty()
  @IsString()
  nombre: string;
}
