<template>
  <div class="goods-hot">
    <h3>{{ title }}</h3>
    <!-- 商品区块 -->
    <RouterLink to="/" class="goods-item" v-for="item in detailDta" :key="item.id">
      <img :src="item.picture" alt="" />
      <p class="name ellipsis">{{ item.name }}</p>
      <p class="desc ellipsis">{{ item.desc }}</p>
      <p class="price">&yen;{{ item.price }}</p>
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { getHotGoods } from '@/apis/detail'
import { useRoute } from 'vue-router'

//定义props接受title参数
const props = defineProps<{
  hotType: any
}>()

const TITLEMAP = {
  1: '24小时热榜',
  2: '周热榜'
} as any

const title = computed(() => TITLEMAP[props.hotType])

const detailDta = ref([] as goods[])
const route = useRoute()
//获取热门商品数据
const getHotData = async () => {
  const res = await getHotGoods({
    id: route.params.id,
    type: props.hotType
  })
  detailDta.value = res.data.result
}
onMounted(() => {
  getHotData()
})
</script>

<style scoped lang="scss">
.goods-hot {
  h3 {
    height: 70px;
    background: $helpColor;
    color: #fff;
    font-size: 18px;
    line-height: 70px;
    padding-left: 25px;
    margin-bottom: 10px;
    font-weight: normal;
  }

  .goods-item {
    display: block;
    padding: 20px 30px;
    text-align: center;
    background: #fff;

    img {
      width: 160px;
      height: 160px;
    }

    p {
      padding-top: 10px;
    }

    .name {
      font-size: 16px;
    }

    .desc {
      color: #999;
      height: 29px;
    }

    .price {
      color: $priceColor;
      font-size: 20px;
    }
  }
}
</style>
