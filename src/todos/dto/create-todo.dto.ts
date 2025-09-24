import { IsString, IsOptional, IsBoolean, Length, IsInt } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
export class CreateTodoDto {
  @ApiProperty({ example: "title", description: "title of todos" })
  @IsString()
  @Length(1, 200)
  title: string;

  @ApiPropertyOptional({ example: "start with basics", description: "details about todos" })
  @IsOptional()
  @IsString()
  @Length(0, 1000)
  description?: string;

  @ApiPropertyOptional({ example: false, description: 'Whether the todo is completed' })
  @IsOptional()
  @IsBoolean()
  completed?: boolean = false;

  @ApiProperty({ example: 1, description: "ID of the user who owns this todo" })
  @IsInt()
  userId: number;
}
