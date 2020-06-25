import { Controller} from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {

  /**
   * - Função básica que retorna uma resposta padrão, apenas para testar a conexão
   * @param _ 
   * @returns Retorna uma string "pong" após um segundo
   */
  @MessagePattern("ping")
  ping(_:any){
    return "A";
  }
}
