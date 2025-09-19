"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryTodosRepository = void 0;
const todo_entity_1 = require("./entities/todo.entity");
const uuid_1 = require("uuid");
const create_todo_dto_1 = require("./dto/create-todo.dto");
{ }
create(data, create_todo_dto_1.CreateTodoDto);
Promis;
findAll();
todo_entity_1.Todo[];
findOne(id, string);
todo_entity_1.Todo | undefined;
update(id, string, data, (Partial));
todo_entity_1.Todo | undefined;
remove(id, string);
boolean;
class InMemoryTodosRepository {
    constructor() {
        this.items = [];
    }
    create(data) {
        const now = new Date();
        const item = {
            id: (0, uuid_1.v4)(),
            title: data.title,
            description: data.description,
            completed: data.completed ?? false,
            createdAt: now,
            updatedAt: now,
        };
        this.items.push(item);
        return item;
    }
    findAll() {
        return [...this.items];
    }
    findOne(id) {
        return this.items.find((i) => i.id === id);
    }
    update(id, data) {
        const idx = this.items.findIndex((i) => i.id === id);
        if (idx === -1)
            return undefined;
        const existing = this.items[idx];
        const updated = {
            ...existing,
            ...data,
            updatedAt: new Date(),
        };
        this.items[idx] = updated;
        return updated;
    }
    remove(id) {
        const idx = this.items.findIndex((i) => i.id === id);
        if (idx === -1)
            return false;
        this.items.splice(idx, 1);
        return true;
    }
}
exports.InMemoryTodosRepository = InMemoryTodosRepository;
//# sourceMappingURL=todos.repository.js.map