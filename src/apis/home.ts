import request from '@/utils/request'

export const getBannerList = () => {
  return request.get('home/banner')
}

export const getNewList = () => {
  return request.get('home/new')
}

export const getHotList = () => {
  return request.get('home/hot')
}
