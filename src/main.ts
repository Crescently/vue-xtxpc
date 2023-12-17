import { createApp } from 'vue'
import pinia from '@/stores/index'

import App from './App.vue'
import router from './router'
import { getCategoryAPI } from '@/apis/test'
import axios from 'axios'

const app = createApp(App)

 // getCategoryAPI().then((res) =>{
 //   console.log(res.data)
 // })

const res = await getCategoryAPI()
console.log(res.data)

app.use(pinia)
app.use(router)
app.mount('#app')
