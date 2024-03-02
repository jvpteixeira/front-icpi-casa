import api from '../api';

export const getColaboratorByIdCampaign = (id: string) => {
  return api.get(`/campaigns/${id}/colaborators`);

};

