// 封装分类数据相关代码

import { onMounted, ref } from 'vue'
import { onBeforeRouteUpdate, useRoute } from 'vue-router'
import { getCategoryData } from '@/apis/category'

export const useCategory = () => {
  const categoryData = ref({} as categoryData)
  const route = useRoute()
  const getCategory = async (id = route.params.id as string) => {
    const res = await getCategoryData(id)
    categoryData.value = res.data.result
  }

  onMounted(async () => {
    await getCategory()
  })

  //监听路由变化 实时更新数据
  onBeforeRouteUpdate(async (to) => {
    await getCategory(to.params.id as string)
  })

  return {
    categoryData
  }
}
