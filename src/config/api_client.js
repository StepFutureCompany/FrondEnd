import axios from 'axios';

const api_client = axios.create({
  baseURL: ("http://localhost:3333"),
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api_client