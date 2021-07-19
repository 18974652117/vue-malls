<template>
  <div class="home-container">
    <nav-bar class="home-nav">
      <div slot="centre">购物街</div>
    </nav-bar>
  </div>
</template>

<script>
import { getHomeMultidata } from '../../api/home'
import navbar from '../../components/common/navbar/navbar.vue'
export default {
  name: 'home', // 首页
  components: {
    'nav-bar': navbar
  },
  created () {
    getHomeMultidata().then(res => {
      console.log(res)
      // this.result = res
      this.banner = res.data.banner
      this.recommend = res.data.recommend
    })
  },
  data () {
    return {
      result: null,
      banner: [],
      recommend: []
    }
  }
}
</script>

<style lang="less" scoped>
.home-container{
  .home-nav{
    background-color: var(--color-tint);
    color: #fff;
    font-size: 18px;
  }
}
</style>
