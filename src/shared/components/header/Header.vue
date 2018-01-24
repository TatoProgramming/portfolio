<template>
  <header class="ui container">
    <JumboTron/>
    <NavBar/>
  </header>
</template>

<script>
  import NavBar from './components/NavBar.vue';
  import JumboTron from './components/Jumbo.vue';

  export default{
    components: {
      NavBar,
      JumboTron
    }
  }
</script>
