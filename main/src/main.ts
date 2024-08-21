import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  // Create the HTTP server
  const httpApp = await NestFactory.create(AppModule);
  httpApp.setGlobalPrefix('api');
  httpApp.enableCors({
    origin: 'http://localhost:4200',
  });

  // Start the HTTP server on port 8001
  await httpApp.listen(8001);
  console.log('HTTP server listening on port 8001');

  // Create the RabbitMQ microservice
  const microserviceApp = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: ['amqps://iuhpkzji:WXThgXLF5H3SfM4RhQYOfNPBplz9xeKI@shrimp.rmq.cloudamqp.com/iuhpkzji'],
      queue: 'admin_queue',
      queueOptions: {
        durable: false,
      },
    },
  });

  // Start the microservice
  microserviceApp.listen( )
  console.log('RabbitMQ microservice is listening...');
}

bootstrap();