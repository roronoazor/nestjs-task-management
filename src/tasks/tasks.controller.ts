import { Body, Controller, Get, Post, Param, Delete } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
    constructor (private tasksService: TasksService) {}

    @Get()
    getAllTasks() {
        return this.tasksService.getAllTasks();
    }

    @Get("/:id")
    getTaskById(@Param("id") id: string) {
        return this.tasksService.getTaskById(id);
    }

    @Delete("/:id")
    deleteTaskById(@Param("id") id: string) {
        return this.tasksService.deleteTaskById(id);
    }

    @Post()
    createTask(@Body() createTaskDto: CreateTaskDto) {
        return this.tasksService.createTask(createTaskDto);
    }
}
 