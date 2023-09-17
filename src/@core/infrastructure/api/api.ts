import axios from 'axios';

const api = axios.create({
  baseURL: 'http://212.1.214.10:9000/',
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});

export default api;
