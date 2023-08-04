import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { TaskId } from './interfaces/TaskId.interface';
import { Task } from './interfaces/Task.interface';
import { TaskService } from './task.service';
import { ResponseMessage } from './interfaces/ResponseMessage.interface';
import { ResponseTask } from './interfaces/TaskResponse.interface';
import { PaginationOptions } from './interfaces/PaginationOptions.interface';
import { Tasks } from './interfaces/Tasks.interface';
import { TaskInput } from './interfaces/TaskInput.interface';

@Controller()
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @GrpcMethod('TasksServiceProto', 'GetTaskById')
  async getTaskById(data: TaskId): Promise<ResponseTask> {
    return this.taskService.getTaskById(data.id);
  }

  @GrpcMethod('TasksServiceProto', 'DeleteTask')
  async deleteTask(data: TaskId): Promise<ResponseMessage> {
    return this.taskService.deleteTask(data.id);
  }

  @GrpcMethod('TasksServiceProto', 'UpdateTask')
  async updateTask(data: Task): Promise<ResponseTask> {
    return this.taskService.updateTask(data);
  }

  @GrpcMethod('TasksServiceProto', 'PaginateTasks')
  async paginateTasks(data: PaginationOptions): Promise<Tasks> {
    return this.taskService.paginateTasks(data.page, data.size);
  }

  @GrpcMethod('TasksServiceProto', 'CreateTask')
  async createTask(data: TaskInput): Promise<ResponseMessage> {
    return this.taskService.createTask(data);
  }
}
