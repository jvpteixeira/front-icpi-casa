import { AxiosResponse } from 'axios';
import Colaborator from '../../domain/model/Colaborator';
import * as colaboratorService from '../../infrastructure/api/services/colaboratorService'


import IUseCase from '../IUseCase';


// export default class PostColaborator implements IUseCase<string[], Promise<AxiosResponse<Colaborator>>>
// {
//   execute(campaignId: string, name: string, age: string, mail: string, telephone: string) {
//     const colaborador = colaboratorService.postColaborators(campaignId, name, age, mail, telephone);
//     return colaborador
//   }
// }

export default class PostColaborator implements IUseCase<string[], Promise<AxiosResponse<Colaborator>>> {
  execute(details: string[]): Promise<AxiosResponse<Colaborator>> {
    const [campaignId, name, age, mail, telephone] = details;
    const colaborador = colaboratorService.postColaborators(campaignId, name, age, mail, telephone);
    return colaborador;
  }
}