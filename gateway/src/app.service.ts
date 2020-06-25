import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from "@nestjs/microservices";
import { map } from "rxjs/operators";

@Injectable()
export class AppService {
  constructor(
    /**
    * Instanciando os serviços dispostos
    */
    @Inject("SERVICE_A") private readonly clientServiceA: ClientProxy
  ){}

  pingServiceA(){
    const startTs = Date.now();
    console.info("Ping para o serviço A");
    /**
    * - Chamando o serviço
    * - Importante que a pattern deve ser a mesma do microservice
     */
    return this.clientServiceA
      .send<string>("ping", {})
      .pipe(
        map((message: string) => ({ message, duration: `${Date.now() - startTs}ms`}))
      );
  }

  pingServiceB(){
    const startTs = Date.now();
    console.info("Ping para o serviço B");
    /**
    * - Chamando o serviço
    * - Importante que a pattern deve ser a mesma do microservice
     */
    return this.clientServiceA
      .send<string>("ping", {})
      .pipe(
        map((message: string) => ({ message, duration: `${Date.now() - startTs}ms`}))
      );
  }
}
