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