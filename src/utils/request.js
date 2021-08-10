import axios from 'axios'
// import { message } from '../resetMessage.js'
import { inteUrl } from '@/utils/config'
// import { handleCofirm } from '@/utils/messageBox'
import store from '../store'
import router from '../router'
import { getToken } from '@/utils/auth'
// 创建axios实例
const service = axios.create({
  baseURL: inteUrl, // api 的 base_url
  // baseURL: 'http://192.168.0.205:9001', // api 的 base_url
  timeout: 60000 // 请求超时时间
})
// request拦截器
service.interceptors.request.use(
  config => {
    // if (store.getters.token) {
    //   config.headers['authorization'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
    // }
    // config.headers['source'] = 'pc' // 让每个请求携带自定义token 请根据实际情况自行修改
    return config
  },
  error => {
    Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    /**
     * code为非20000是抛错 可结合自己业务进行修改
     */
    const res = response.data
    return Promise.resolve(res)
  },
  error => {
    message({
      message: error.message,
      type: 'error',
      duration: 3 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
