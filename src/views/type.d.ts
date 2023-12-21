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
