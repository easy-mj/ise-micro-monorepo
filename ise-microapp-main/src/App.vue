<template>
  <!-- 头部 -->
  <main-header></main-header>
  <!-- 导航 -->
  <main-nav></main-nav>
  <div class="sub-container">
    <!-- loading -->
    <loading v-if="isLoading"></loading>
    <!-- 子应用内容 -->
    <div v-if="!isLoading" class="sub-body">子应用内容</div>
  </div>
  <!-- 底部 -->
  <main-footer></main-footer>
</template>

<script setup>
import { ref } from 'vue'
import MainHeader from '@/components/MainHeader'
import MainNav from '@/components/MainNav'
import MainFooter from '@/components/MainFooter'
import Loading from '@/components/Loading'

const isLoading = ref(true)
setTimeout(() => {
  isLoading.value = false
}, 3000)
</script>

<style lang="scss">
html,
body,
#app {
  width: 100%;
  height: 100%;
}

* {
  margin: 0;
  padding: 0;
}

.sub-container {
  min-height: 100%;
  position: relative;
}
.sub-body {
  width: 100%;
  min-height: 100%;
}
</style>
