// axiosconfig.js
import axios from 'axios';

// configure base url
const shoppiesAPI = axios.create({
  baseURL: 'https://my-shoppies-api.herokuapp.com/api',
  timeout: 60000,
});

export default shoppiesAPI;
