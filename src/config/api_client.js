import axios from 'axios';

const api_client = axios.create({
  baseURL: ("http://localhost:3333"),
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    Accept: '/',
  },
});

export default api_client;