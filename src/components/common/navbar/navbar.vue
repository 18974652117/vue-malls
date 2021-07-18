<template>
  <div class="navbar">
    <div class="left"><slot name="left"></slot></div>
    <div class="centre"><slot name="centre"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'navbar'
}
</script>

<style lang="less" scoped>
.navbar{
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
  box-shadow: 0 2px 1 rgba(100,100, 100, 0.3);
  .left, .right{
    width: 60px;
    // background-color: red;
  }
   .centre{
    flex: 1;
    // background-color: pink;
  }
}
</style>
