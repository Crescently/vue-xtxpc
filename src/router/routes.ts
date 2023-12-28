import BasicLayout from '@/views/layout/BasicLayout.vue'
import homePage from '@/views/home/HomePage.vue'
import categoryPage from '@/views/category/CategoryPage.vue'
import SubCategory from '@/views/subcategory/SubCategory.vue'
import DetailPage from '@/views/detail/DetailPage.vue'
import shoppingCart from '@/views/cart/ShoppingCart.vue'
import CheckoutPage from '@/views/checkout/CheckoutPage.vue'
import PayPage from '@/views/pay/PayPage.vue'
import PayCallback from '@/views/pay/PayCallback.vue'
import PersonalPage from '@/views/member/PersonalPage.vue'
import UserInfo from '@/components/member/UserInfo.vue'
import UserOrder from '@/components/member/UserOrder.vue'

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
        path: 'category/:id',
        component: categoryPage
      },
      {
        path: 'category/sub/:id',
        component: SubCategory
      },
      {
        path: 'detail/:id',
        component: DetailPage
      },
      {
        path: 'cartlist',
        component: shoppingCart
      },
      {
        path: 'checkout',
        component: CheckoutPage
      },
      {
        path: 'pay',
        component: PayPage
      },
      {
        path: 'paycallback',
        component: PayCallback
      },
      {
        path: 'member',
        component: PersonalPage,
        children: [
          {
            path: '', //置空 默认显示
            component: UserInfo
          },
          {
            path: 'order',
            component: UserOrder
          }
        ]
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/LoginPage.vue')
  }
]
