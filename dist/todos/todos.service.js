"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodosService = void 0;
const common_1 = require("@nestjs/common");
let TodosService = class TodosService {
    constructor(repo) {
        this.repo = repo;
    }
    create(createTodoDto) {
        const todo = this.repo.create({ ...createTodoDto });
        return todo;
    }
    findAll() {
        return this.repo.findAll();
    }
    findOne(id) {
        const found = this.repo.findOne(id);
        if (!found)
            throw new common_1.NotFoundException(`Todo with id ${id} not found`);
        return found;
    }
    update(id, updateTodoDto) {
        const updated = this.repo.update(id, updateTodoDto);
        if (!updated)
            throw new common_1.NotFoundException(`Todo with id ${id} not found`);
        return updated;
    }
    remove(id) {
        const ok = this.repo.remove(id);
        if (!ok)
            throw new common_1.NotFoundException(`Todo with id ${id} not found`);
    }
};
exports.TodosService = TodosService;
exports.TodosService = TodosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('TodosRepository')),
    __metadata("design:paramtypes", [Object])
], TodosService);
//# sourceMappingURL=todos.service.js.map