// axiosconfig.js
import axios from 'axios';

// configure base url
const shoppiesAPI = axios.create({
  baseURL: 'http://localhost:8008/api',
  timeout: 60000,
});

export default shoppiesAPI;
