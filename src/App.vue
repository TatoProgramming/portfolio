<template>
  <div id="app">
    <Header></Header>
    <div class="ui hidden divider"></div>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
  import Footer from './shared/components/Footer.vue';
  import Header from './shared/components/header/Header.vue';
  import Home from './home/Home.vue';


  export default {
    name: 'app',
    components: {
      Footer,
      Header,
    },
    data () {
      return {}
    }
  }
</script>

<style>
  .top {
    margin-top: 5em;
  }

  .bottom {
    margin-bottom: 5em;
  }
</style>
