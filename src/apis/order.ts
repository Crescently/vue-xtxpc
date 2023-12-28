import request from '@/utils/request'

export const getUserOrderList = (params: PageState) => {
  return request.get('/member/order', { params })
}
