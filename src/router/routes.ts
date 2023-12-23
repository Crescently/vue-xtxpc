import BasicLayout from '@/views/layout/BasicLayout.vue'
import HomePage from '@/views/home/HomePage.vue'
import CategoryPage from '@/views/category/CategoryPage.vue'
import SubCategory from '@/views/subcategory/SubCategory.vue'
import DetailPage from '@/views/detail/DetailPage.vue'

export const routes = [
  {
    path: '/',
    component: BasicLayout,
    children: [
      {
        path: '', //设置默认二级路由
        component: HomePage
      },
      {
        path: '/category/:id',
        component: CategoryPage
      },
      {
        path: '/category/sub/:id',
        component: SubCategory
      },
      {
        path: '/detail/:id',
        component: DetailPage
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/LoginPage.vue')
  }
]
