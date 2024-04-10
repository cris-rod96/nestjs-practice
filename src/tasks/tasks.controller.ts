import { Controller, Get } from '@nestjs/common';

// @Controller('tasks')
@Controller()
export class TasksController {
  @Get('/tasks')
  getAllTasks() {
    return 'Obteniendo toas las tareas';
  }
}
