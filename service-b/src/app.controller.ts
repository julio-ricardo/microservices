import { Controller} from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {

  /**
   * - Função básica que retorna uma resposta padrão, apenas para testar a conexão
   * - Será executada sempre que houver uma requisição para o padrão "ping"
   * @param _ 
   * @returns Retorna uma string "pong" após um segundo
   */
  @MessagePattern("ping")
  ping(_:any){
    return "B";
  }
}
