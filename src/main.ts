import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions } from '@nestjs/microservices';
import { Transport } from '@nestjs/microservices';
import { join } from 'path';
import { configService } from './config/config.service';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        package: 'task',
        protoPath: join(__dirname, 'task/proto/task.proto'),
        url: configService.getPort() || 'localhost:5000',
      },
    },
  );
  app.listen();
}

bootstrap();
