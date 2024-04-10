import { Injectable } from '@nestjs/common';

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
    this.tasks.push(task);
  }
}
