import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  getAllTasks() {
    return 'Obteniendo toas las tareas';
  }
}
