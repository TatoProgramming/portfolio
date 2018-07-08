<template>
  <main class="ui container">
    <Segment :title="'About Me'">
      <img class="ui left floated small rounded image" :src="require('./../assets/images/portrait.jpg')"/>
      <p>My name is <strong>Taylor Putnam</strong>.
        In 2017 I graduated from Idaho State University with a degree in Computer Science.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus neque dolor, aliquam a magna ac, vestibulum
        pulvinar dui. Sed finibus ornare dui ut dictum. Integer ut nunc diam. Mauris eget ullamcorper ex. Aliquam erat
        volutpat. Curabitur scelerisque, nisl non tristique ultrices, magna neque viverra libero, et elementum leo ante
        sit amet augue. Curabitur facilisis magna eros, vitae feugiat lectus dictum eget. Donec luctus, massa eu
        porttitor vehicula, augue orci dictum justo, eget dignissim erat est at purus.
      </p>
    </Segment>
    <Segment :title="'Projects'">
      <Projects></Projects>
    </Segment>
    <Segment :title="'Work Experience'">
    </Segment>
    <Segment :title="'Hobbies'">
    </Segment>
    <hr/>
  </main>
</template>

<script>
  import Segment from './components/Segment';
  import Projects from '../projects/Projects';

  export default {
    components: {
      Segment,
      Projects
    }

  }
</script>

<style scoped>
  i {
    color: #000
  }
</style>
