<template>
  <div>
    <a :href="item.link" v-for="item in $appData.socialLinks">
      <i :class="item.iconName" class="link big icon"></i>
    </a>
  </div>
</template>

<script>

  export default {
    name: "SocialLinksBar",
    // data(){
    //   return{
    //
    //   }
    // }
  }
</script>

<style scoped>
  a{
    color: #000;
  }
</style>
