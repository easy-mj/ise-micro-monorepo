<template>
  <div class="ad-banner-container">
    <img :src="adImg" alt="" v-if="adImg" />
    <img :src="require('@/assets/ad.png')" alt="" v-else />
  </div>
</template>

<script>
export default {
  name: 'AdBanner',
  props: ['adImg']
}
</script>

<style lang="scss">
.ad-banner-container {
  width: 100%;
  height: 80px;
  margin: 30px 0;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
