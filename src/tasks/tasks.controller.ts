import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor (private tasksService: TasksService) {}

    @Get()
    getAllTasks() {
        return this.tasksService.getAllTasks();
    }

    @Post()
    createTask(@Body() body) {
        const { title, description } = body;
        return this.tasksService.createTask(title, description);
    }
}
 