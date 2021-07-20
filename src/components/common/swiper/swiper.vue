<template>
  <div id="hy-swiper">
    <div class="swiper">
      <slot></slot>
    </div>

    <div>
      <slot name="indicator"></slot>
    </div>

    <div class="indicator">
      <slot name="indicator" class="indi-item"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'swiper', // 轮播图
  data () {
    return {
      currentIndex: 1 // 当前 index
    }
  },
  methods: {
    /** 定时器 */
    startTimer () {
      this.playTimer = window.setInterval(() => {
        this.currentIndex++
        this.scrollContent(-this.scrollContent * this.totalWidth)
      }, this.interval)
    }
  }
}
</script>

<style lang="less" scoped>
#hy-swiper{
  overflow: hidden;
  position: relative;

  .swiper{
    display: flex;
  }

  .indicator{
    display: flex;
    justify-content: center;
    position: absolute;
    width: 100%;
    bottom: 8px;
  }
  .inid-item{
    width: 8px;
    height: 8px;
    border-radius: 4px;
    line-height: 8px;
    font-size: 12px;
    box-sizing: border-box;
    background-color: #fff;
    margin: 0 5px;
  }

  .indi-item.active {
    background-color: rgba(212, 62, 46, 1.0);
  }
}
</style>
