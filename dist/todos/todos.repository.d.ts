import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { ITodosRepository } from './todos.types';
import { PrismaService } from 'src/shared/prisma/prisma.service';
export declare class TodosRepository implements ITodosRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: CreateTodoDto): Promise<{
        title: string;
        description: string | null;
        completed: boolean;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        userId: number;
    }>;
    findAll(): Promise<{
        title: string;
        description: string | null;
        completed: boolean;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        userId: number;
    }[]>;
    findOne(id: number): Promise<{
        title: string;
        description: string | null;
        completed: boolean;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        userId: number;
    }>;
    update(id: number, data: UpdateTodoDto): Promise<{
        title: string;
        description: string | null;
        completed: boolean;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        userId: number;
    }>;
    remove(id: number): Promise<{
        title: string;
        description: string | null;
        completed: boolean;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        userId: number;
    }>;
}
