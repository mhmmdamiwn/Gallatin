import { Module } from '@nestjs/common';
import { configService } from './config/config.service';
import { TaskModule } from './task/task.module';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    TaskModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
