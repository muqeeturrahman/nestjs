import { Module } from '@nestjs/common';
import { TodosModule } from './todos/todos.module';
import { PrismaModule } from './shared/prisma/prisma.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    PrismaModule, // shared
    TodosModule, UsersModule,  // feature
  ],
})
export class AppModule {}
