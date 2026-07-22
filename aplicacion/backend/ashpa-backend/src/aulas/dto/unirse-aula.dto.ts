import { IsNotEmpty, IsString } from 'class-validator';

export class UnirseAulaDto {
  @IsNotEmpty()
  @IsString()
  codigo: string;
}
