import axios from "axios";

if (process.env.NODE_ENV === 'development') {
  //开发环境 do something
  axios.defaults.baseURL = 'api';
} else {
  //生产环境 do something
  axios.defaults.baseURL = '';
}

const http = axios.create({
  //通用请求的地址前缀(例如，http://www.baidu.com/)
  baseURL: axios.defaults.baseURL,
  // 超时时间==
  timeout: 8000,
});

// 添加请求拦截器
http.interceptors.request.use(function (config) {
  if (sessionStorage.getItem("token")) {
    config.headers['Authorization'] = sessionStorage.getItem("token");
  }
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
http.interceptors.response.use(function (response) {
  // 在响应请求之前做些什么
  return response;
}, function (error) {
  // 对响应错误做些什么
  return Promise.reject(error);
});

export default http