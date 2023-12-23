// 全局化注册所有组件
import ImageView from '@/components/imageView.vue'
import XtxGoodSku from '@/components/XtxSku/index.vue'

const componentPlugin = {
  // @ts-ignore
  install(app) {
    // app.component('组件名字'，组件配置对象)
    app.component('ImageView', ImageView)
    app.component('XtxSku', XtxGoodSku)
  }
}

export default componentPlugin
