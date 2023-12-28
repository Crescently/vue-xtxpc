declare interface queryData {
  categoryId: string
  page: number
  pageSize: number
  sortField: string
}

declare interface loginUser {
  account: string
  password: string
}

declare interface PageState {
  orderState: number
  page: number
  pageSize: number
}
