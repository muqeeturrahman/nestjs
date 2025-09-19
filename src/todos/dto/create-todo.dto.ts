import { IsString, IsOptional, IsBoolean, Length } from 'class-validator';

export class CreateTodoDto {
  @IsString()
  @Length(1, 200)
  title: string;

  @IsOptional()
  @IsString()
  @Length(0, 1000)
  description?: string;

  @IsOptional()
  @IsBoolean()
  completed?: boolean = false;
}
