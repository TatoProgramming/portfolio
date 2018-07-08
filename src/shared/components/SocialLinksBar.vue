<template>
  <div>
    <a :href="item.link" v-for="item in $appData.socialLinks" :title="item.tooltip">
      <i :class="[item.iconName, 'link huge icon']"></i>
    </a>
  </div>
</template>

<script>
  export default {
    name: "SocialLinksBar",
  }
</script>

<style scoped>
  a{
    color: #000;
  }
</style>
