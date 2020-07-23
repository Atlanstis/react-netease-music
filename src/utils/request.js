import axios from "axios";
const request = axios.create({
  baseURL: process.env.REACT_APP_URL,
  timeout: 5000,
});

// 添加请求拦截器
request.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
// 添加响应拦截器
request.interceptors.response.use(
  (response) => {
    const res = response.data;
    if (res.code !== 200) {
      return Promise.reject(new Error("Error"));
    } else {
      return response.data;
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default request;
