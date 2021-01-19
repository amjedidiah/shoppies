// axiosconfig.js
import axios from 'axios';

// configure base url
const omdbAPI = axios.create({
  baseURL: 'http://www.omdbapi.com',
  timeout: 60000,
});

export default omdbAPI;
