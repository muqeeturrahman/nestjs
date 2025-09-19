import { Module } from '@nestjs/common';
import { TodosService } from './todos.service';
import { TodosController } from './todos.controller';
import { InMemoryTodosRepository } from './todos.repository';

@Module({
  controllers: [TodosController],
  providers: [TodosService, { provide: 'TodosRepository', useClass: InMemoryTodosRepository }],
  exports: [TodosService],
})
export class TodosModule {}
