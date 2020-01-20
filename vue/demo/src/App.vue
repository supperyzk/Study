<template>
  <div id="app">
    <Header></Header>
    <Study></Study>
    <div class="tab">
     <div class="tab-item">商品</div>
     <div class="tab-item">评论</div>
     <div class="tab-item">商家</div>
    </div>
  </div>
</template>

<script>
import Header from './components/header/header.vue';
import Study from './components/study/study.vue'
export default {
  name: 'App',
  components: {
    Header,Study
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