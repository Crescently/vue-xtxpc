import request from '@/utils/request'

export const getCategoryData = (id: string) => {
  return request.get('/category', { params: { id } })
}

export const getCategoryFilterData = (id: string) => {
  return request.get('/category/sub/filter', { params: { id } })
}

export const getSubCategoryList = (data: queryData) => {
  return request.post('/category/goods/temporary', data)
}
