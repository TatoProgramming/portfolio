<template>
  <footer class="ui container center aligned">
    <SocialLinks></SocialLinks>
  </footer>
</template>

<script>
  import SocialLinks from './SocialLinksBar.vue';
  export default{
    components:{
      SocialLinks
    }

  }
</script>

<style scoped>
  footer{
    padding: 80px;
  }
</style>


