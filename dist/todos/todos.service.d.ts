import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';
import { ITodosRepository } from './todos.types';
export declare class TodosService {
    private readonly repo;
    constructor(repo: ITodosRepository);
    create(createTodoDto: CreateTodoDto): Promise<Todo>;
    findAll(): Promise<Todo[]>;
    findOne(id: string): Promise<Todo>;
    update(id: string, updateTodoDto: UpdateTodoDto): Promise<Todo>;
    remove(id: string): Promise<void>;
}
