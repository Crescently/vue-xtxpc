import { defineStore } from 'pinia'
import { ref } from 'vue'
import { postUserLogin } from '@/apis/user'

export const useUserStore = defineStore(
  'user',
  () => {
    //定义用户的state
    const userInfo = ref({} as userInfo)
    //获取接口数据的函数
    const getUserInfo = async ({ account, password }: loginUser) => {
      const res = await postUserLogin({ account, password })
      userInfo.value = res.data.result
    }

    const clearUserInfo = () => {
      // @ts-ignore
      userInfo.value = {}
    }
    return {
      userInfo,
      getUserInfo,
      clearUserInfo
    }
  },
  {
    persist: true
  }
)
