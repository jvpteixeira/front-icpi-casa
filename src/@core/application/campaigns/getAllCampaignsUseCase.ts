import { AxiosResponse } from 'axios';
import Campaign from '../../domain/model/Campaign';
import * as campaignService from '../../infrastructure/api/services/campaignService';


import IUseCase from '../IUseCase';

export default class GetAllCampaignsUseCase implements IUseCase<void, Promise<AxiosResponse<Campaign[]>>>
{
  execute() {
    return campaignService.getCampaigns();
  }
}
