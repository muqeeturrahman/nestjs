import { Todo } from './entities/todo.entity';
import { v4 as uuidv4 } from 'uuid';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

import { Injectable } from '@nestjs/common';
import { ITodosRepository } from './todos.types';
import { PrismaService } from 'src/shared/prisma/prisma.service';

@Injectable()
export class TodosRepository implements ITodosRepository {
    constructor(private readonly prisma: PrismaService) { }
    async create(data: CreateTodoDto){
        return this.prisma.todo.create({ data })
    }
    async findAll() {
        return this.prisma.todo.findMany()
    }
    async findOne(id: number){
        return this.prisma.todo.findUnique({ where: { id } })
    }
    async update(id: number, data: UpdateTodoDto) {
        return this.prisma.todo.update({ where: { id }, data })
    }
    async remove(id: number) {
        return this.prisma.todo.delete({ where: { id } })
    }
}


