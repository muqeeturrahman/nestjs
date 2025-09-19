import { Todo } from './entities/todo.entity';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export interface TodosRepository {
    constructor(private readonly prisma: PrismaService): any;
}
export declare class InMemoryTodosRepository implements TodosRepository {
    private items;
    create(data: Partial<CreateTodoDto>): Todo;
    findAll(): Todo[];
    findOne(id: string): Todo | undefined;
    update(id: string, data: Partial<UpdateTodoDto>): Todo | undefined;
    remove(id: string): boolean;
}
