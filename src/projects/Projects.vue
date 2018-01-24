<template>
  <main class="ui container">
    <div class="ui two stackable cards">
      <Card title="Ray Tracer" imageSource="../../assets/images/example.jpg"></Card>
      <Card title="Ray Marcher" imageSource="../../assets/images/example.jpg"></Card>
      <Card title="Terrain Generator" imageSource="../../assets/images/example.jpg"></Card>
      <Card title="Motion Capture" imageSource="../../assets/images/example.jpg"></Card>
    </div>
  </main>
</template>
<script>
  import Card from './components/ProjectCard.vue';

  export default {
    components: {
      Card
    }

  }
</script>
