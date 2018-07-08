<template>
  <section class="ui segment">
    <a :id="title">
      <h2 class="ui left floated header">{{ title }}</h2>
    </a>
    <div class="ui clearing divider"></div>
    <slot></slot>
  </section>
</template>

<script>
  export default {
    name: "segment",
    props: ['title']

  }
</script>

<style scoped>

</style>
