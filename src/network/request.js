import axios from 'axios';

export function request(config) { // eslint-disable-line
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000,
  });

  // 拦截器
  instance.interceptors.request.use((data) => data, (err) => {
    console.log(err);
    return err;
  });

  return instance(config);
}

export function newRequest(config) {
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 5000,
  });

  // 拦截器
  instance.interceptors.request.use((data) => data, (err) => {
    console.log(err);
    return err;
  });

  return instance(config);
}
