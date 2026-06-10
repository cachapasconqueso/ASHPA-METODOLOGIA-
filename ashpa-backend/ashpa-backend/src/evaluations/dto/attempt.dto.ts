import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class AttemptDto {
  @IsArray()
  @IsString({ each: true })
  answers: string[];
}
