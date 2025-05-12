import axios from 'axios';

const api = axios.create({
    baseURL: 'http://backend:5000/api',
  });
  

export default api;
