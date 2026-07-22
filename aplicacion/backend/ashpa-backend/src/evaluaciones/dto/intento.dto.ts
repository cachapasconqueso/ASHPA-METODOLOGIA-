import { IsArray, IsString } from 'class-validator';

export class IntentoDto {
  @IsArray()
  @IsString({ each: true })
  respuestas: string[];
}
