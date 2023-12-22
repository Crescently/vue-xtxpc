<template>
  <FixedHeader />
  <LayoutNav />
  <LayoutHeader />
  <router-view />
  <LayoutFooter />
</template>

<script setup lang="ts">
import LayoutNav from '@/components/layout/LayoutNav.vue'
import LayoutHeader from '@/components/layout/LayoutHeader.vue'
import LayoutFooter from '@/components/layout/LayoutFooter.vue'
import FixedHeader from '@/components/FixedHeader.vue'
import { onMounted } from 'vue'
import { useCategoryStore } from '@/stores/category'

const categoryStore = useCategoryStore()
onMounted(() => {
  categoryStore.getCategory()
})
</script>

<style scoped></style>