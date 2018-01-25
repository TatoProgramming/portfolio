<template>
    <section class="ui segment">
      <h2 class="ui left floated header">{{ title }}</h2>
      <div class="ui clearing divider"></div>
      <slot></slot>
    </section>
</template>

<script>
    export default {
        name: "segment",
        props:[ 'title']

    }
</script>

<style scoped>

</style>
