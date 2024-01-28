import Register from '../../../domain/model/Register';
import api from '../api';

export const getCampaigns = () => {
  return api.get('/campaigns');
};
