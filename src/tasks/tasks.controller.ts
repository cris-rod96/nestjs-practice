import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
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

  @Post('/tasks')
  createTask() {
    return 'Creando Task';
  }

  @Put('/tasks')
  updateTask() {
    return 'Actualizando Task';
  }

  @Delete('/tasks')
  deleTask() {
    return 'Eliminando Task';
  }

  @Patch('/tasks')
  updateTaskStatus() {
    return 'Actualizado parcial';
  }
}
