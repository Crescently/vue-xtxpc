import axios from 'axios'
import { ElMessage } from 'element-plus'
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'

const baseURL = 'http://pcapi-xiaotuxian-front-devtest.itheima.net'

const instance = axios.create({
  baseURL,
  timeout: 100000
})

//请求拦截器
instance.interceptors.request.use(
  (config) => {
    const userStore = useUserStore()
    const token = userStore.userInfo.token
    // 请求头携带token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (err) => Promise.reject(err)
)

//响应拦截器
instance.interceptors.response.use(
  (res) => {
    return res
  },
  (err) => {
    //打印响应错误提示
    ElMessage.error(err.response.data.message)
    // token 401 报错处理
    // 清除本地数据 + 跳转到登录页
    if (err.response.status === 401) {
      const userStore = useUserStore()
      userStore.clearUserInfo()
      const router = useRouter()
      router.push({ path: '/login' })
    }
    return Promise.reject(err)
  }
)

export default instance
