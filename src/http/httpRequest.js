import axios from 'axios'
const http = axios.create({
  timeout: 1000 * 30,
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  }
})
/**
 * 请求拦截
 */
http.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

/**
 * 响应拦截
 */
http.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.reject(error)
})
/**
 * 请求地址处理
 * @param {*} actionName action方法名称
 */
http.adornUrl = (actionName) => {
  return 'http://' + actionName
}

export default http
