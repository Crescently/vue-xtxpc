import request from '@/utils/request'

export const getCategoryList = () => {
  return request.get('/home/category/head')
}
