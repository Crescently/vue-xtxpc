import { computed, onUnmounted, ref } from 'vue'
import dayjs from 'dayjs'

export const useCountdown = () => {
  let timer: any = null
  //时间
  const time = ref(0)

  //格式化的时间
  const formatTime = computed(() => dayjs.unix(time.value).format('mm分ss秒'))
  //开启倒计时的函数
  const start = (currentTime: any) => {
    time.value = currentTime
    // 每隔1s就 -1
    timer = setInterval(() => {
      time.value--
    }, 1000)
  }
  //组件销毁时清除定时器
  onUnmounted(() => {
    timer && clearInterval(timer)
  })

  return {
    formatTime,
    start
  }
}
