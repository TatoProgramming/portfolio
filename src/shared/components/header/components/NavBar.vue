<template>
  <nav class="ui secondary pointing three item menu">
    <router-link class="item" :to="$appData.baseUrl" active-class="active" exact>Home</router-link>
    <router-link class="item" :to="$appData.baseUrl + 'projects'" active-class="active">Projects</router-link>
    <router-link class="item" :to="$appData.baseUrl + 'resume'" active-class="active">Resume</router-link>
    <!--<router-link class="item" to="/contact" active-class="active">Contact</router-link>-->
  </nav>
</template>
<script>
  export default{
  }
</script>
