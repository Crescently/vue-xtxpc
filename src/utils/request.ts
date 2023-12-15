import axios from 'axios'

const baseURL = ''

const instance = axios.create({
  baseURL,
  timeout: 100000
})

//请求拦截器
instance.interceptors.request.use(
  (config) => {

    return config
  },
  (err) => Promise.reject(err)
)

//响应拦截器
instance.interceptors.response.use(
  (res) => {
    if (res.data.code === 0) {
      return res
    }
    return Promise.reject(res.data)
  },
  (err) => {

    return Promise.reject(err)
  }
)

export default instance
export { baseURL }
