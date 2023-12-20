import { createApp } from 'vue'
import pinia from '@/stores/index'

import App from './App.vue'
import router from './router'
import '@/styles/common.scss'
import { useIntersectionObserver } from '@vueuse/core'

const app = createApp(App)

app.use(pinia)
app.use(router)
app.mount('#app')

app.directive('img-lazy', {
  mounted(el, binding) {
    // el: 指令绑定的那个元素 img
    // binding: binding.value  指令等于号后面绑定的表达式的值  图片url
    const { stop } = useIntersectionObserver(el, ([{ isIntersecting }]) => {
      console.log(isIntersecting)
      if (isIntersecting) {
        // 进入视口区域
        el.src = binding.value
        stop()
      }
    })
  }
})
