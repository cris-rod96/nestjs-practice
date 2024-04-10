import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
  Req,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Request } from 'express';

// @Controller('tasks')
@Controller('/tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}
  @Get()
  getAllTasks(@Query() query: any) {
    console.log(query);
    return this.tasksService.getAllTasks();
  }

  @Get('/:id')
  getTaskByID(@Param() params) {
    return this.tasksService.getByID(Number(params.id));
  }

  @Post()
  createTask(@Body() CreateTaskDto: any, @Req() req: Request) {
    console.log(req.url);
    this.tasksService.createTask(task);
    return 'Task created';
  }

  @Put()
  updateTask() {
    return 'Actualizando Task';
  }

  @Delete()
  deleTask() {
    return 'Eliminando Task';
  }

  @Patch('/tasks')
  updateTaskStatus() {
    return 'Actualizado parcial';
  }
}
