import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class CreateExamDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsArray()
  questions: any[];
}
