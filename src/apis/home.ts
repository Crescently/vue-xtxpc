import request from '@/utils/request'

export const getBannerList = (params = {} as any) => {
  const { distributionSite = '1' } = params
  return request.get('home/banner', { params: { distributionSite } })
}

export const getNewList = () => {
  return request.get('home/new')
}

export const getHotList = () => {
  return request.get('home/hot')
}

export const getProductList = () => {
  return request.get('/home/goods')
}
