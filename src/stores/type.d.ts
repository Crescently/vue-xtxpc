declare interface goods {
  desc: string
  id: string
  name: string
  orderNum: any
  picture: string
  price: string
}

declare interface categoryList {
  id: string
  name: string
  picture: string
  children: categoryList[]
  goods: goods[]
}

declare interface userInfo {
  account: string
  avatar: string
  birthday: string
  cityCode: string
  gender: string
  id: string
  mobile: string
  nickname: string
  profession: string
  provinceCode: string
  token: string
}

declare interface cartType {
  id: string
  name: string
  picture: string
  price: string
  count: number
  skuId: string
  attrsText: string
  selected: boolean
}
