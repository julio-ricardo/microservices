import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ClientsModule, Transport } from "@nestjs/microservices"
import { AppService } from './app.service';

@Module({
  imports: [
    /**
    * - Registrando os serviços
     */
    ClientsModule.register([
      {
        name: "SERVICE_A",
        transport: Transport.TCP,
        options:{
          host: "127.0.0.1",
          port: 5001
        }
      }
    ]),
    ClientsModule.register([
      {
        name: "SERVICE_B",
        transport: Transport.TCP,
        options:{
          host: "127.0.0.1",
          port: 5002
        }
      }
    ])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
