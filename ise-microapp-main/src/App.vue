<template>
  <!-- 头部 -->
  <main-header v-show="headerStatus"></main-header>
  <!-- 导航 -->
  <main-nav v-show="navStatus"></main-nav>
  <div class="sub-container">
    <!-- loading -->
    <loading v-show="isLoading"></loading>
    <!-- 子应用内容 -->
    <div v-show="!isLoading" id="micro-subapp-container" class="sub-body"></div>
  </div>
  <!-- 底部 -->
  <main-footer></main-footer>
</template>

<script setup>
import MainHeader from '@/components/MainHeader'
import MainNav from '@/components/MainNav'
import MainFooter from '@/components/MainFooter'
import Loading from '@/components/Loading'
import { loadingStatus, headerStatus, navStatus } from '@/store'

const isLoading = loadingStatus
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
