import { Todo } from './entities/todo.entity';
import { v4 as uuidv4 } from 'uuid';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TodosRepository {
constructor(private readonly prisma:PrismaService){}

}


