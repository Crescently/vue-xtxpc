import request from '@/utils/request'

export const postUserLogin = ({ account, password }: loginUser) => {
  return request.post('/login', { account, password })
}
