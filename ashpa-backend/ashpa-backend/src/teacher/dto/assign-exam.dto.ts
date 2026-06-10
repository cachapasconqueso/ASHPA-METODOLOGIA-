import { IsArray, IsDateString, IsString } from 'class-validator';

export class AssignExamDto {
  @IsArray()
  @IsString({ each: true })
  studentIds: string[];

  @IsDateString()
  dueDate: string;
}
