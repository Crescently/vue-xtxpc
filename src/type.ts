export interface banner {
  id: string
  imgUrl: string
  type: string
  hrefUrl: string
}

export interface goods {
  desc: string
  id: string
  name: string
  orderNum: any
  picture: string
  price: string
}

export interface categoryList {
  id: string
  name: string
  picture: string
  children: categoryList[]
  goods: goods[]
}

export interface newlist {
  id: string
  name: string
  orderNum: number
  picture: string
  price: string
  desc: string
}

export interface hotlist {
  id: string
  alt: string
  picture: string
  title: string
}
