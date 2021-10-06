import axios from 'axios';
import { message } from 'antd';

const request = axios.create({
  baseURL: '/api',
  timeout: 500
});

request.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    message.error(error);
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  (response) => {
    const res = response.data as any;
    if (res.code !== '200') {
      message.error(res.message);
    } else {
      return res;
    }
  },
  (error) => {
    message.error(error.message);
    return Promise.reject(error);
  }
);

export default request;
