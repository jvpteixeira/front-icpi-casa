import { AxiosResponse } from 'axios';
import Campaign from '../../domain/model/Campaign';
import * as campaignService from '../../infrastructure/api/services/campaignService';


import IUseCase from '../IUseCase';


export default class GetDescricaoUseCase implements IUseCase<string, Promise<AxiosResponse<Campaign[]>>>
{
  execute(id: string) {
    return campaignService.getCampaignById(id);
  }
}
