import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { useUserStore } from '@/stores/user'
import { deleteShoppingCart, getShoppingCartList, insertShoppingCart } from '@/apis/cart'

export const useCartStore = defineStore(
  'cart',
  () => {
    const cartList = ref([] as cartType[])
    const userStore = useUserStore()

    //添加购物车
    const addCart = async (goods: cartType) => {
      const token = userStore.userInfo.token
      const { skuId, count } = goods
      //判断用户是否登录
      if (token) {
        //将购物车信息发送给后台
        await insertShoppingCart({ skuId, count })
        //更新数据
        await updateCartList()
      } else {
        // 到现在的购物车列表中查找，如果现在列表中有，就让count ++，否则就把整体添加到购物车中
        const item = cartList.value.find((item: any) => goods.skuId === item.skuId)
        if (item) {
          item.count++
        } else {
          cartList.value.push(goods)
        }
      }
    }

    const delCart = async (skuId: string) => {
      const token = userStore.userInfo.token
      //判断用户是否登录
      if (token) {
        await deleteShoppingCart([skuId])
        //更新列表
        await updateCartList()
      } else {
        const idx = cartList.value.findIndex((item) => skuId === item.skuId)
        cartList.value.splice(idx, 1)
      }
    }

    //清空购物车
    const clearCart = () => {
      cartList.value = []
    }

    const updateCartList = async () => {
      const res = await getShoppingCartList()
      cartList.value = res.data.result
    }

    //修改购物车单选框的状态
    const singleCheck = (skuId: string, selected: boolean) => {
      const item = cartList.value.find((item) => skuId === item.skuId) as cartType
      item.selected = selected
    }

    //使用计算属性计算商品总数，商品总价
    const allCount = computed(() => cartList.value.reduce((prev, cur) => prev + cur.count, 0))
    const allPrice = computed(() =>
      cartList.value.reduce(
        // @ts-ignore
        (prev, cur) => prev + cur.count * cur.price,
        0
      )
    )

    // 是否全选
    const isAll = computed(() => cartList.value.every((item) => item.selected))
    // 3. 已选择数量
    const selectedCount = computed(() =>
      cartList.value.filter((item) => item.selected).reduce((prev, cur) => prev + cur.count, 0)
    )
    // 4. 已选择商品价钱合计
    const selectedPrice = computed(() =>
      cartList.value
        .filter((item) => item.selected)
        .reduce(
          // @ts-ignore
          (prev, cur) => prev + cur.count * cur.price,
          0
        )
    )

    const allCheck = (selected: boolean) => {
      // 把cartlist中所有的selected状态改为当前的状态
      cartList.value.forEach((item) => (item.selected = selected))
    }

    return {
      cartList,
      addCart,
      delCart,
      allCount,
      allPrice,
      singleCheck,
      isAll,
      allCheck,
      selectedCount,
      selectedPrice,
      clearCart,
      updateCartList
    }
  },
  {
    persist: true
  }
)
