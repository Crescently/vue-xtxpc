import BasicLayout from '@/views/layout/BasicLayout.vue'
import homePage from '@/views/home/HomePage.vue'
import categoryPage from '@/views/category/CategoryPage.vue'
import SubCategory from '@/views/subcategory/SubCategory.vue'
import DetailPage from '@/views/detail/DetailPage.vue'
import shoppingCart from '@/views/cart/ShoppingCart.vue'
import CheckoutPage from '@/views/checkout/CheckoutPage.vue'
import PayPage from '@/views/pay/PayPage.vue'
import PayCallback from '@/views/pay/PayCallback.vue'

export const routes = [
  {
    path: '/',
    component: BasicLayout,
    children: [
      {
        path: '', //设置默认二级路由
        component: homePage
      },
      {
        path: '/category/:id',
        component: categoryPage
      },
      {
        path: '/category/sub/:id',
        component: SubCategory
      },
      {
        path: '/detail/:id',
        component: DetailPage
      },
      {
        path: '/cartlist',
        component: shoppingCart
      },
      {
        path: '/checkout',
        component: CheckoutPage
      },
      {
        path: '/pay',
        component: PayPage
      },
      {
        path: '/paycallback', // 注意路径，必须是paycallback
        component: PayCallback
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/LoginPage.vue')
  }
]
