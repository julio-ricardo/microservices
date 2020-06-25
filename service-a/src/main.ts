import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

(()=>{
  /**
  * - Criando o microservice
  * - É possível determinar o host e a porta
  */
  NestFactory.createMicroservice(AppModule, {
    transport: Transport.TCP,
    options:{
      host: "127.0.0.1",
      port: 5001
    }
  }).then((app)=>{

    /**
    * - Aqui é determinado um aviso padrão para dizer que o microservice está ativo
    */
    app.listen(()=> new Logger().log("Microservice A is listening"));
  });

}); 

