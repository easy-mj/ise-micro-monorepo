<template>
  <div class="select-container">
    <div class="select-content">
      <LeftNav />
      <selectDetail />
    </div>
  </div>
</template>

<script>
import LeftNav from './components/leftNav'
import selectDetail from './components/selectDetail'

export default {
  name: 'SelectCarIndex',
  components: {
    LeftNav,
    selectDetail
  }
}
</script>

<style lang="scss">
.select {
  &-container {
    margin-top: 50px;
  }
  &-content {
    width: 1200px;
    margin: 0 auto;
    display: flex;
  }
}
</style>
