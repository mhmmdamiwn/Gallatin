import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskEntity } from './model/task.entity';
import { Repository } from 'typeorm';
import { ResponseMessage } from './interfaces/ResponseMessage.interface';
import { ResponseTask } from './interfaces/TaskResponse.interface';
import { Tasks } from './interfaces/Tasks.interface';
import { Task } from './interfaces/Task.interface';
import { TaskInput } from './interfaces/TaskInput.interface';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(TaskEntity) private readonly repo: Repository<TaskEntity>,
  ) {}
  async getTaskById(id: string): Promise<ResponseTask> {
    try {
      const task = await this.repo.findOne({
        where: {
          id,
        },
      });
      if (!task) {
        return {
          error: true,
          errorMessage: 'task not found',
        };
      }
      return task;
    } catch (err) {
      return {
        error: true,
        errorMessage: err.message,
      };
    }
  }

  async paginateTasks(page: number, size: number): Promise<Tasks> {
    try {
      const tasks = await this.repo.find({
        take: size ? size : 10,
        skip: (page ? page : 0) * size,
      });
      if (!tasks) {
        return {
          error: true,
          errorMessage: 'tasks not found',
        };
      }
      return { tasks };
    } catch (err) {
      return {
        error: true,
        errorMessage: err.message,
      };
    }
  }

  async updateTask(data: Task): Promise<ResponseTask> {
    try {
      const task = await this.repo.findOne({
        where: {
          id: data.id,
        },
      });
      if (!task) {
        return {
          error: true,
          errorMessage: 'task not found',
        };
      }
      if (data.parentId) {
        const parentTask = await this.repo.findOne({
          where: {
            id: data.parentId,
          },
        });
        if (!parentTask) {
          return {
            error: true,
            errorMessage: 'parent task not found',
          };
        }
      }
      await this.repo.update(
        {
          id: data.id,
        },
        {
          ...data,
        },
      );

      return this.repo.findOne({
        where: {
          id: data.id,
        },
      });
    } catch (err) {
      return {
        error: true,
        errorMessage: err.message,
      };
    }
  }

  async deleteTask(id: string): Promise<ResponseMessage> {
    try {
      const task = await this.repo.findOne({
        where: {
          id,
        },
      });
      if (!task) {
        return {
          error: true,
          errorMessage: 'task not found',
        };
      }
      await this.repo.remove(task);
      return { message: 'task deleted successfuly' };
    } catch (err) {
      return {
        error: true,
        errorMessage: err.message,
      };
    }
  }

  async createTask(body: TaskInput): Promise<ResponseTask> {
    try {
      if (body.parentId) {
        const parentTask = await this.repo.findOne({
          where: {
            id: body.parentId,
          },
        });
        if (!parentTask) {
          return {
            error: true,
            errorMessage: 'parent task not found',
          };
        }
      }
      const task = this.repo.create(body);
      return this.repo.save(task);
    } catch (err) {
      return {
        error: true,
        errorMessage: err.message,
      };
    }
  }
}
