import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';
import { TodosRepository } from './todos.types';

@Injectable()
export class TodosService {
  constructor(@Inject('TodosRepository') private readonly repo: TodosRepository) {}

  create(createTodoDto: CreateTodoDto): Todo {
    const todo = this.repo.create({ ...createTodoDto });
    return todo;
  }

  findAll(): Todo[] {
    return this.repo.findAll();
  }

  findOne(id: string): Todo {
    const found = this.repo.findOne(id);
    if (!found) throw new NotFoundException(`Todo with id ${id} not found`);
    return found;
  }

  update(id: string, updateTodoDto: UpdateTodoDto): Todo {
    const updated = this.repo.update(id, updateTodoDto);
    if (!updated) throw new NotFoundException(`Todo with id ${id} not found`);
    return updated;
  }

  remove(id: string): void {
    const ok = this.repo.remove(id);
    if (!ok) throw new NotFoundException(`Todo with id ${id} not found`);
  }
}
