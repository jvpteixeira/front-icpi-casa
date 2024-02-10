import { CampaignsFilter } from '../../../application/campaigns/getAllCampaignsUseCase';
import Register from '../../../domain/model/Register';
import api from '../api';

export const getCampaigns = (filters: CampaignsFilter) => {
  return api.get('/campaigns', {
    params: {
      name: filters.name
    }
  });
};
