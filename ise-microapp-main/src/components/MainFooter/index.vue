<template>
  <div class="main-footer-container">
    <div class="main-footer-content">
      <div class="main-footer-url">
        <span>精品选车 © 2025 88888.com</span>
        公司地址: 北京市朝阳区酒仙桥xx号xx大厦xx层xxxx室
      </div>
      <div class="main-footer-phone">
        <span>联系方式: 010-9999999</span>
        <span>京ICP备66666666号</span>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.main-footer {
  &-container {
    width: 100%;
    height: 100px;
    background: #f5f5f5;
  }
  &-content {
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  &-url {
    font-size: 14px;
    color: #9e9e9e;
    margin-bottom: 10px;

    span {
      font-size: 16px;
      color: #a1a1a1;
    }
  }
  &-phone {
    font-size: 14px;
    color: #9e9e9e;
  }
}
</style>
