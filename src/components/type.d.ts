declare interface banner {
  id: string
  imgUrl: string
  type: string
  hrefUrl: string
}

declare interface newlist {
  id: string
  name: string
  orderNum: number
  picture: string
  price: string
  desc: string
}

declare interface hotlist {
  id: string
  alt: string
  picture: string
  title: string
}

declare interface productlist {
  id: string
  name: string
  picture: string
  children: {
    id: string
    layer: number
    name: string
    parent: any
  }[]
  goods: goods[]
  saleInfo: string
}

declare interface order {
  countdown: number
  createTime: string
  id: string
  orderState: number
  payChannel: number
  payLatestTime: string
  payMoney: number
  payType: number
  postFee: number
  skus: skus[]
  totalMoney: number
  totalNum: number
}

declare interface skus {
  id: string
  name: string
  image: string
  curPrice: number
  quantity: number
  realPay: number
  attrsText: string
  spuId: string
  totalMoney: any
  properties: {
    propertyMainName: string
    propertyValueName: string
  }[]
}
