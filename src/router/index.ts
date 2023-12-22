import { createRouter, createWebHistory } from 'vue-router'
import { routes } from '@/router/routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  //路由滚动行为控制，在页面切换时，控制滚动条的位置到顶部
  scrollBehavior: () => ({ top: 0 })
})

export default router
