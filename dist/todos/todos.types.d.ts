import { Todo } from './entities/todo.entity';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
export interface ITodosRepository {
    create(data: Partial<CreateTodoDto>): Promise<Todo>;
    findAll(): Promise<Todo[]>;
    findOne(id: number): Promise<Todo | null>;
    update(id: number, data: Partial<UpdateTodoDto>): Promise<Todo>;
    remove(id: number): Promise<Todo>;
}
