import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './product/product.module';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [  ClientsModule.register([
    {
      name: 'MATH_SERVICE',
      transport: Transport.RMQ,
      options: {
        urls: ['amqps://iuhpkzji:WXThgXLF5H3SfM4RhQYOfNPBplz9xeKI@shrimp.rmq.cloudamqp.com/iuhpkzji'],
        queue: 'main_queue',
        queueOptions: {
          durable: false
        },
      },
    },
  ]), 
    MongooseModule.forRoot("mongodb://localhost:27017/rabbitmain", {autoCreate:true }),
    ProductModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
