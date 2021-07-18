<template>
  <tab-bar>
    <tab-bar-items path="/home" activeColor="pink">
      <img slot="item-icon" src="@/assets/img/tabbar/home.svg" alt="">
      <img slot="item-icon-active" src="@/assets/img/tabbar/home_active.svg" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-items>
    <tab-bar-items path="/category" activeColor="pink">
      <img slot="item-icon" src="@/assets/img/tabbar/category.svg" alt="">
      <img slot="item-icon-active" src="@/assets/img/tabbar/category_active.svg" alt="">
      <div slot="item-text">分类</div>
    </tab-bar-items>
    <tab-bar-items path="/shopcart" activeColor="pink">
      <img slot="item-icon" src="@/assets/img/tabbar/shopcart.svg" alt="">
      <img slot="item-icon-active" src="@/assets/img/tabbar/shopcart_active.svg" alt="">
      <div slot="item-text">购物车</div>
    </tab-bar-items>
    <tab-bar-items path="/profile" activeColor="pink">
      <img slot="item-icon" src="@/assets/img/tabbar/profile.svg" alt="">
      <img slot="item-icon-active" src="@/assets/img/tabbar/profile_active.svg" alt="">
      <div slot="item-text">我的</div>
    </tab-bar-items>
  </tab-bar>
</template>

<script>
import tabbar from '../../common/tabbar/tabbar.vue'
import tabbarItems from '../../common/tabbar/tabbarItems.vue'
export default {
  name: 'mainTabbar',
  components: {
    'tab-bar': tabbar,
    'tab-bar-items': tabbarItems
  }
}
</script>

<style lang="less" scoped>
</style>
