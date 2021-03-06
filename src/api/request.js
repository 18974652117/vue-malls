import axios from 'axios'
export function request (config) {
  // 1: 创建 axios 的实例
  const instance = axios.create({
    // baseURL: 'http://152.136.185.210:7878/api/m5',
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000

  })

  // 2: axios 的拦截器

  // 2.1： 情节拦截器的作用
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    console.log(err)
  })

  // 2.2：响应拦截器
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err)
  })

  // 3：发送请求
  return instance(config)
}
