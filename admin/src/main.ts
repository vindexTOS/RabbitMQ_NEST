import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const httpApp = await NestFactory.create(AppModule);
  httpApp.setGlobalPrefix('api');
  httpApp.enableCors({
    origin: 'http://localhost:4200',
  });

 
  await httpApp.listen(8000);
  console.log('HTTP server listening on port 8000');

  const microserviceApp =  await NestFactory.createMicroservice(AppModule, { 
     transport:Transport.RMQ,
     options:{
       urls:["amqps://iuhpkzji:WXThgXLF5H3SfM4RhQYOfNPBplz9xeKI@shrimp.rmq.cloudamqp.com/iuhpkzji"],
       queue:"_queue",
       queueOptions:{
        durable:false ,
       }

     }
 })
 microserviceApp.listen( )
 console.log('Main');
}






bootstrap();
