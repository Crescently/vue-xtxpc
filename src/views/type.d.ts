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

declare interface checkoutData {
  goods: {
    id: string
    name: string
    picture: string
    price: string
    count: number
    skuId: string
    attrsText: string
    payPrice: string
    totalPayPrice: number
    totalPrice: number
  }[]
  summary: {
    discountPrice: number
    goodsCount: number
    postFee: number
    totalPayPrice: number
    totalPrice: number
  }
  userAddresses: address[]
}

declare interface address {
  address: string
  addressTags: string
  cityCode: string
  contact: string
  countyCode: string
  fullLocation: string
  id: string
  isDefault: number
  postalCode: string
  provinceCode: string
  receiver: string
}

// address: '贵阳市花溪区'
// addressTags: '学校'
// cityCode: '210200'
// contact: '181865254562'
// countyCode: '210202'
// fullLocation: '辽宁省 大连市 中山区'
// id: '1711584072599343106'
// isDefault: 1
// postalCode: '111006'
// provinceCode: '210000'
// receiver: '小余'
