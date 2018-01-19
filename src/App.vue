<template>
  <div id="app" class="container">
    <Header></Header>
  </div>
</template>

<script>
  import Header from './shared/components/Header.vue';
  export default {
    name: 'app',
    components:{
      Header,
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<style>

</style>
