import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';
import { TodosRepository } from './todos.types';
export declare class TodosService {
    private readonly repo;
    constructor(repo: TodosRepository);
    create(createTodoDto: CreateTodoDto): Todo;
    findAll(): Todo[];
    findOne(id: string): Todo;
    update(id: string, updateTodoDto: UpdateTodoDto): Todo;
    remove(id: string): void;
}
