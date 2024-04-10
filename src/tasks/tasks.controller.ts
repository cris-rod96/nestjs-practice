import { Controller, Get } from '@nestjs/common';
import { TasksService } from './tasks.service';

// @Controller('tasks')
@Controller()
export class TasksController {
  tasksService: TasksService;
  constructor(tasksService: TasksService) {
    this.tasksService = tasksService;
  }

  @Get('/tasks')
  getAllTasks() {
    return this.tasksService.getAllTasks();
  }
}
