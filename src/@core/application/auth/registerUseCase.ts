import Register from '../../domain/model/Register';
import IUseCase from '../IUseCase';
import * as registerService from '../../infrastructure/api/services/registerService';

export default class RegisterUseCase
  implements IUseCase<Register, Promise<any>>
{
  execute(register: Register) {
    return registerService.doRegister(register);
  }
}
