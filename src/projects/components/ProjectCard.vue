<template>
  <article class="card">
    <a href="#" class="ui image">
      <img :src="imageSource"/>
    </a>
    <section class="content">
      <a href="#" class="header">{{ name }}</a>
      <div class="meta">
        <span class="category"> {{ meta }}</span>
      </div>
      <div class="description">
        {{ description }}
      </div>
    </section>
  </article>
</template>
<script>
  export default {
    props: [
      'imageSource',
      'name',
      'date',
      'description',
      'meta'
    ]
  }
</script>
