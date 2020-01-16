<template>
  <div id="app">
    <Header></Header>
    <div class="tab">
     <div class="tab-item">商品</div>
     <div class="tab-item">评论</div>
     <div class="tab-item">商家</div>
    </div>
  </div>
</template>

<script>
import Header from './components/header/header.vue'
export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style lang="scss">
#app{
  .tab{
    display: flex;
  }
}
</style>