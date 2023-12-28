import { createApp } from 'vue'
import pinia from '@/stores/index'

import App from './App.vue'
import router from './router'
import '@/styles/common.scss'
import plugin from '@/plugins'
import componentPlugin from '@/components'

const app = createApp(App)

app.use(pinia).use(router).use(plugin).use(componentPlugin).mount('#app')
