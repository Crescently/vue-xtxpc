import { defineStore } from 'pinia'
import { ref } from 'vue'
import { postUserLogin } from '@/apis/user'
import { useCartStore } from '@/stores/cart'
import { mergeShoppingCart } from '@/apis/cart'

export const useUserStore = defineStore(
  'user',
  () => {
    const cartStore = useCartStore()
    //定义用户的state
    const userInfo = ref({} as userInfo)
    //获取接口数据的函数
    const getUserInfo = async ({ account, password }: loginUser) => {
      const res = await postUserLogin({ account, password })
      userInfo.value = res.data.result
      //合并购物车数据
      await mergeShoppingCart(
        cartStore.cartList.map((item) => {
          return {
            skuId: item.skuId,
            selected: item.selected,
            count: item.count
          }
        })
      )
      //更新数据
      await cartStore.updateCartList()
    }

    const clearUserInfo = () => {
      // @ts-ignore
      userInfo.value = {}
      //清除购物车数据
      cartStore.clearCart()
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
