import request from '@/utils/request'

/**
 * 获取结算信息
 */
export const getCheckInfo = () => {
  return request.get('/member/order/pre')
}

/**
 * 提交订单
 *
 */
export const postCreateOrder = (data: any) => {
  return request.post('/member/order', { ...data })
}
