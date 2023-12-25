export const routes = [
  {
    path: '/',
    component: () => import('@/views/layout/BasicLayout.vue'),
    children: [
      {
        path: '', //设置默认二级路由
        component: () => import('@/views/home/HomePage.vue')
      },
      {
        path: '/category/:id',
        component: () => import('@/views/category/CategoryPage.vue')
      },
      {
        path: '/category/sub/:id',
        component: () => import('@/views/subcategory/SubCategory.vue')
      },
      {
        path: '/detail/:id',
        component: () => import('@/views/detail/DetailPage.vue')
      },
      {
        path: '/cartlist',
        component: () => import('@/views/cart/ShoppingCart.vue')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/LoginPage.vue')
  }
]
