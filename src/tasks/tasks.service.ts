import { Injectable, NotFoundException } from '@nestjs/common';

export interface Task {
  id: number;
  name: string;
}

@Injectable()
export class TasksService {
  private tasks: Task[] = [];
  getAllTasks() {
    return this.tasks;
  }

  createTask(task: Task) {
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
