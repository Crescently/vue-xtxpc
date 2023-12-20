import { createApp } from 'vue'
import pinia from '@/stores/index'

import App from './App.vue'
import router from './router'
import '@/styles/common.scss'
import plugin from '@/plugins'

const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(plugin)
app.mount('#app')
