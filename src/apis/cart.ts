import request from '@/utils/request'

/**
 * 添加购物车
 * @param skuId
 * @param count
 */
// @ts-ignore
export const insertShoppingCart = ({ skuId, count }) => {
  return request.post('/member/cart', {
    skuId,
    count
  })
}

/**
 * 获取购物车
 */
export const getShoppingCartList = () => {
  return request.get('/member/cart')
}

/**
 * 删除购物车
 *
 */
export const deleteShoppingCart = (ids: any[]) => {
  return request.delete('/member/cart', { data: { ids } })
}

/**
 * 合并本地购物车和后端购物车数据
 */
export const mergeShoppingCart = (data: any) => {
  return request.post('/member/cart/merge', data)
}
