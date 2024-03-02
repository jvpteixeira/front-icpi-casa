import { AxiosResponse } from 'axios';
import Colaborator from '../../domain/model/Colaborator';
import * as colaboratorService from '../../infrastructure/api/services/colaboratorService'


import IUseCase from '../IUseCase';


export default class GetNameColaboratorUseCase implements IUseCase<string, Promise<AxiosResponse<Colaborator[]>>>
{
  execute(id: string) {
    const colaborador = colaboratorService.getColaboratorByIdCampaign(id);
    return colaborador
  }
}
