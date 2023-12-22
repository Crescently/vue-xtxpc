declare interface categoryData {
  id: string
  name: string
  picture: any
  children: {
    id: string
    name: string
    picture: string
    parentName: string
    parentId: string
    brands: any
    categories: any
    goods: goods[]
    saleProperties: any
  }[]
}

declare interface categoryFilter {
  brands: []
  id: string
  name: string
  parentId: string
  parentName: string
  saleProperties: []
  picture: any
  goods: goods[]
  category: {
    id: string
    layer: number
    name: string
    parent: any
  }
}
