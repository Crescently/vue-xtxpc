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

