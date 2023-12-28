import request from '@/utils/request'

/**
 * 用户登录
 * @param account 用户名
 * @param password 密码
 */
export const postUserLogin = ({ account, password }: loginUser) => {
  return request.post('/login', { account, password })
}

/**
 * 获取系统推荐用户喜好列表
 * @param limit 展示条数
 */
export const getUserLikeList = ({ limit = 4 }) => {
  return request.get('/goods/relevant', { params: { limit } })
}
