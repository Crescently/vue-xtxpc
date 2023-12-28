<template>
  <div class="container">
    <!-- 面包屑 -->
    <div class="bread-container">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: `/category/${categoryFilterData.parentId}` }"
          >{{ categoryFilterData.parentName }}
        </el-breadcrumb-item>
        <el-breadcrumb-item>{{ categoryFilterData.name }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="sub-container">
      <el-tabs v-model="reqData.sortField" @tab-change="tabChange">
        <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
        <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
        <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
      </el-tabs>
      <div class="body" v-infinite-scroll="ScrollLoad" :infinite-scroll-disabled="disabled">
        <!-- 商品列表-->
        <GoodsItem v-for="goods in goodList" :goods="goods" :key="goods.id"></GoodsItem>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getCategoryFilterData, getSubCategoryList } from '@/apis/category'
import { useRoute } from 'vue-router'
import GoodsItem from '@/components/GoodsItem.vue'

const categoryFilterData = ref({} as categoryFilter)
const route = useRoute()
const getCategoryFilter = async () => {
  const res = await getCategoryFilterData(route.params.id as string)
  categoryFilterData.value = res.data.result
}

onMounted(() => {
  getCategoryFilter()
})

// 获取基础列表数据渲染
const goodList = ref([] as goods[])
const reqData = ref({
  categoryId: route.params.id,
  page: 1,
  pageSize: 20,
  sortField: 'publishTime'
} as queryData)

const getSubCategory = async () => {
  const res = await getSubCategoryList(reqData.value)
  goodList.value = res.data.result.items
}

onMounted(() => {
  getSubCategory()
})

const tabChange = () => {
  //从第一页开始
  reqData.value.page = 1
  getSubCategory()
}

const disabled = ref(false)
const ScrollLoad = async () => {
  reqData.value.page++
  const res = await getSubCategoryList(reqData.value)
  goodList.value = [...goodList.value, ...res.data.result.items]
  if (res.data.result.items.length === 0) {
    disabled.value = true
  }
}
</script>

<style scoped lang="scss">
.bread-container {
  padding: 25px 0;
  color: #666;
}

.sub-container {
  padding: 20px 10px;
  background-color: #fff;

  .body {
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
  }

  .goods-item {
    display: block;
    width: 220px;
    margin-right: 20px;
    padding: 20px 30px;
    text-align: center;

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

  .pagination-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }
}
</style>
