import request from '@/utils/request'

export const getOrderData = (id: any) => {
  return request.get(`/member/order/${id}`)
}
