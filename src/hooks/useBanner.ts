// 封装轮播图数据相关代码
import { onMounted, ref } from 'vue'
import { getBannerList } from '@/apis/home'

export const useBanner = () => {
  const bannerList = ref([] as banner[])
  const getBanner = async () => {
    const res = await getBannerList({ distributionSite: '2' })
    bannerList.value = res.data.result
  }

  onMounted(async () => {
    await getBanner()
  })

  return {
    bannerList
  }
}
