<template>
  <div class="swiperItem">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'swiperItem',
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
.swiperItem{
  width: 100%;
  flex-shrink: 0;

  img{
    width: 100%;
  }
}
</style>
