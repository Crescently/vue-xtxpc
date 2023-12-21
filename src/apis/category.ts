import request from '@/utils/request'

export const getCategoryData = (id: string) => {
  return request.get('/category', { params: { id } })
}
