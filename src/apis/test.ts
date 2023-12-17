import request from '@/utils/request'

export const getCategoryAPI = () => {
  return request.get('home/category/head')
}
