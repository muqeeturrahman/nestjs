import { Module } from '@nestjs/common';
import { TodosService } from './todos.service';
import { TodosController } from './todos.controller';
import { TodosRepository } from './todos.repository';
import { PrismaService } from 'src/shared/prisma/prisma.service';

@Module({
  controllers: [TodosController],
  providers: [TodosService, { provide: 'TodosRepository', useClass: TodosRepository },PrismaService],
  exports: [TodosService],
})
export class TodosModule {}
