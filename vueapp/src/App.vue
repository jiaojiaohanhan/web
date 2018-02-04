<template>
  <div id="app">
    <top></top>
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
    <bottom></bottom>
  </div>
</template>

<script>
import rem from '@/assets/js/rem';
import reset from '@/assets/css/reset.css';
import ul1 from '@/assets/css/ul1.css';
import top from '@/components/common/Top.vue';
import bottom from '@/components/common/Bottom.vue';
import store from '@/vuex/store';
export default {
  name: 'App',
  components:{
    top,
    bottom
  },
  store
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
