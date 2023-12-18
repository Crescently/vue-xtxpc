import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getCategoryList } from '@/apis/layout'

export const useCategoryStore = defineStore('category', () => {
  const categoryList = ref([] as any)
  const getCategory = async () => {
    const res = await getCategoryList()
    categoryList.value = res.data.result
  }
  return {
    categoryList,
    getCategory
  }
})
