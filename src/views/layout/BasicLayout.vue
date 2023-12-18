<template>
  <LayoutNav />
  <LayoutHeader />
  <router-view />
  <LayoutFooter />
</template>

<script setup lang="ts">
import LayoutNav from '@/components/LayoutNav.vue'
import LayoutHeader from '@/components/LayoutHeader.vue'
import LayoutFooter from '@/components/LayoutFooter.vue'
</script>

<style scoped></style>