import { AxiosResponse } from 'axios';
import Campaign from '../../domain/model/Campaign';
import * as campaignService from '../../infrastructure/api/services/campaignService';


import IUseCase from '../IUseCase';


export interface CampaignsFilter {
  name?: string
}


export default class GetAllCampaignsUseCase implements IUseCase<CampaignsFilter, Promise<AxiosResponse<Campaign[]>>>
{
  execute(filters: CampaignsFilter) {
    return campaignService.getCampaigns(filters);
  }
}
