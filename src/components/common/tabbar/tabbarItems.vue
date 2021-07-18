<template>
    <div class="tab-bar-item" @click="itemClick">
      <div v-if="!isActive">
        <slot  name="item-icon"></slot>
      </div>
      <div v-else>
        <slot  name="item-icon-active"></slot>
      </div>
      <!-- <div :class="{active: isActive}"> -->
        <div :style="activeStyle"> 
        <slot  name="item-text" ></slot>
      </div>
      
    </div>
</template>

<script>
export default {
  props: {
    path: {
      type: String,
      required: true,
    },
    activeColor: {
      type: String,
      default:'pink'
    }
  },
  /** 计算属性 */ 
  computed:{
    /** 动态切换 tabbar */  
    isActive(){
      // home => item(/cart) = true    home => item(/home) = true
      return this.$route.path.indexOf(this.path) !== -1
    },
    
     /** 动态切换 tabbar 选择的颜色 */  
    activeStyle(){
      return this.isActive ? { color: this.activeColor }  : {  }
    } 
  },
  data(){
    return{
      // isActive: false,
    }
  },
  methods:{
    itemClick(){
      this.$router.push(this.path)
    }
  }
}
</script>

<style lang="less" scoped>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;

    img{
      width: 24px;
      height: 24px;
      margin-top: 3px;
      vertical-align: middle;
      margin-bottom: 2px;
    }

    // .active{
    //   color: #FF5777;
    // }
  }
</style>
