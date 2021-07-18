<template>
  <div class="home-container">
    <nav-bar class="home-nav">
      <div slot="centre">购物街</div>
    </nav-bar>
  </div>
</template>

<script>
import navbar from '../../components/common/navbar/navbar.vue'
export default {
  name: 'home', // 首页
  components: {
    'nav-bar': navbar
  }
}
</script>

<style lang="less" scoped>
.home-container{
  .home-nav{
    background-color: var(--color-tint);
    color: #fff;
  }
}
</style>
