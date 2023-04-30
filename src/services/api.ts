import axios from 'axios';

const api = axios.create({
  baseURL: `https://bff-edracma.advalentina1.com.br/`,
});

export default api;
