<template>
  <div class="micro-main-body-loading-wrapper">
    <div class="micro-main-body-loading">
      <img :src="require('@/assets/loading.gif')" alt="" />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.micro-main-body-loading-wrapper {
  min-height: 100%;
  position: relative;
}

.micro-main-body-loading {
  width: 112px;
  height: 100%;
  min-height: 100%;
  // position: absolute;
  user-select: none;

  &-wrapper {
    width: 100%;
    height: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -90px;
  }

  img {
    width: 100%;
    height: 100%;
  }
}
</style>
