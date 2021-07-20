<template>
  <div class="home-container">
    <!-- 头部 navbar -->
    <nav-bar class="home-nav">
      <div slot="centre">购物街</div>
    </nav-bar>

    <!-- 轮播图 swiper -->
    <swiper>
      <swiper-iterm v-for="(item,index) in banner" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </swiper-iterm>
    </swiper>
  </div>
</template>

<script>
import { getHomeMultidata } from '../../api/home'
import navbar from '../../components/common/navbar/navbar.vue'// 导入 navbar
// import swiper from '../../components/common/swiper/swiper'
// import swiperItem from '../../components/common/swiper/swiperItem.vue'
import { swiper, swiperItem } from '../../components/common/swiper/swiper'
export default {
  name: 'home', // 首页
  components: {
    'nav-bar': navbar,
    'swiper-iterm': swiperItem,
    swiper
  },
  created () {
    getHomeMultidata().then(res => {
      console.log(res)
      // this.result = res
      this.banner = res.data.banner.list
      this.recommend = res.data.recommend.list
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
