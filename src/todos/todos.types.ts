import { Todo } from './entities/todo.entity';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

export interface TodosRepository {
  create(data: Partial<CreateTodoDto>): Todo;
  findAll(): Todo[];
  findOne(id: string): Todo | undefined;
  update(id: string, data: Partial<UpdateTodoDto>): Todo | undefined;
  remove(id: string): boolean;
}
