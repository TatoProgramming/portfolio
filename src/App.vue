<template>
  <div id="app">
    <Header></Header>
    <div class="ui hidden divider"></div>
    <Home></Home>
    <Footer></Footer>
  </div>
</template>

<script>
  import Footer from './shared/components/Footer.vue';
  import Header from './shared/components/header/Header.vue';
  import Home from "./home/Home";


  export default {
    name: 'app',
    components: {
      Home,
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
