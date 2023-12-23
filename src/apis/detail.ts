import request from '@/utils/request'

export const getDetailData = (id: string) => {
  return request.get('/goods', { params: { id } })
}

// @ts-ignore
export const getHotGoods = ({ id, type, limit = 3 }) => {
  return request.get('/goods/hot', {
    params: {
      id,
      type,
      limit
    }
  })
}
