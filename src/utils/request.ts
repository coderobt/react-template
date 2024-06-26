import axios, { AxiosError } from 'axios'
import { message } from 'antd'
import { showLoading, hideLoading } from './loading'
import storage from './storage'
import env from '@/config'

//创建axios实例
const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 8000,
  timeoutErrorMessage: '请求超时,请稍后再试',
  //默认跨域
  withCredentials: true
})

//请求拦截器
instance.interceptors.request.use(
  config => {
    showLoading()
    const token = storage.get('token')
    if (token) {
      config.headers.Authorization = 'Token::' + token
    }
    if (env.mock) {
      config.baseURL = env.mockApi
    } else {
      config.baseURL = env.baseApi
    }
    return { ...config }
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)

//响应拦截器
instance.interceptors.response.use(
  response => {
    hideLoading()
    const data = response.data
    if (data.code === 50001) {
      message.error(data.msg)
      storage.remove('token')
      location.href = '/login'
    } else if (data.code != 0) {
      message.error(data.msg)
      return Promise.reject(data)
    }
    return data.data
  },
  (error: AxiosError) => {
    hideLoading()
    message.error(error.message)
    return Promise.reject(error.message)
  }
)

export default {
  get<T>(url: string, params?: object): Promise<T> {
    return instance.get(url, { params })
  },
  post<T>(url: string, params: object): Promise<T> {
    return instance.get(url, params)
  }
}
