import { AxiosResponse } from 'axios';
import Campaign from '../../domain/model/Campaign';
import * as campaignService from '../../infrastructure/api/services/campaignService';
import Colaborator from '../../domain/model/Colaborator';


import IUseCase from '../IUseCase';



export default class GetNameColaboratorUseCase implements IUseCase<string, Promise<AxiosResponse<Colaborator[]>>>
{
  execute(id: string) {
    return campaignService.getColaboratorByIdCampaign(id);
  }
}
