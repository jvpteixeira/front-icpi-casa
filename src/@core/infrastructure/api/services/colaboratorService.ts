import axios, { AxiosResponse } from 'axios';
import api from '../api';
import Colaborator from '../../../domain/model/Colaborator';

export const getColaboratorByIdCampaign = (id: string) => {
  return api.get(`/campaigns/${id}/colaborators`);

};

export async function postColaborators(campaignId: string, name: string, age: string, mail: string, phone: string): Promise<AxiosResponse<Colaborator>> {
  try {
    const response = await api.post(`campaigns/${campaignId}/colaborators`, {
      name,
      phone,
      age,
      mail
    });
    return response;
  } catch (error) {
    throw new Error('Erro ao criar colaborador');
  }
}