import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
  private tasks = [];
  getAllTasks() {
    return this.tasks;
  }

  createTask(task: CreateTaskDto) {
    this.tasks.push({
      ...task,
      id: this.tasks.length + 1,
    });
  }
  getByID(id: number) {
    const taskFound = this.tasks.find((task) => task.id === id);

    return taskFound
      ? taskFound
      : new NotFoundException(`Task with id ${id} not found`);
  }
}
