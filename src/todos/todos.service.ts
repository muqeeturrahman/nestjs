import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';
import { ITodosRepository } from './todos.types';


@Injectable()
export class TodosService {
  constructor(@Inject('TodosRepository') private readonly repo: ITodosRepository) {}

  async create(createTodoDto: CreateTodoDto) {
    const todo = await this.repo.create({ ...createTodoDto });
    return todo;
  }

  async findAll() {
    return this.repo.findAll();
  }

  async findOne(id: string) {
    const found = await this.repo.findOne(Number(id));
    if (!found) throw new NotFoundException(`Todo with id ${id} not found`);
    return found;
  }

  async update(id: string, updateTodoDto: UpdateTodoDto) {
    const updated = await this.repo.update(Number(id), updateTodoDto);
    if (!updated) throw new NotFoundException(`Todo with id ${id} not found`);
    return updated;
  }

  async remove(id: string) {
    const ok = await this.repo.remove(Number(id));
    if (!ok) throw new NotFoundException(`Todo with id ${id} not found`);
  }
}
