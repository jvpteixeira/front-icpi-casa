import Register from '../../../domain/model/Register';
import api from '../api';

export const doRegister = (register: Register) => {
  return api.post('/establishments', register);
};
