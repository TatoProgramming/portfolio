<template>
  <article class="card">
    <a href="#" class="ui rounded image">
      <img :src="imageSource"/>
    </a>
    <section class="content">
      <a href="#" class="header">{{ title }}</a>
      <span class="meta">
        <span class="date">Uploaded date: MM/DD/YYYY</span>
      </span>
      <div class="description">
        [[ insert description ]]
      </div>
    </section>
  </article>
</template>
<script>
  export default {
    props: ['imageSource', 'title']

  }
</script>
