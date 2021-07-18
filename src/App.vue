<template>
  <div id="app">
    <main-tab-bars/>
    <router-view/>
  </div>
</template>
<script>
import mainTabbars from './components/content/mainTabbar/mainTabbars.vue'
export default {
  name: 'APP',
  components: {
    'main-tab-bars': mainTabbars
  }
}
</script>

<style lang="less">
@import "./assets/css/base.css";
</style>
