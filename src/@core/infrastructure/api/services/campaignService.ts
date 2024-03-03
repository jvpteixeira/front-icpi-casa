import { CampaignsFilter } from '../../../application/campaigns/getAllCampaignsUseCase';
import api from '../api';

export const getCampaigns = (filters: CampaignsFilter) => {
  return api.get('/campaigns', {
    params: {
      name: filters.name
    }
  });
};

export const getCampaignById = (id: string) => {
  return api.get(`/campaign/${id}`);
};


export const getColaboratorByIdCampaign = (idCampaign: string) => {
  return api.get(`/campaigns/${idCampaign}/colaborators`);
};


