<template>
  <main class="ui container">
    <Segment :title="$appData.segments.about.title">
      <p>My name is <strong>Taylor Putnam</strong>. I am a recent Computer Science graduate from Idaho State University.</p>
    </Segment>
    <Segment :title="$appData.segments.contact.title">
    </Segment>
    <hr/>
  </main>
</template>

<script>
  import Segment from './components/Segment';

  export default{
    components:{
      Segment
    }

  }
</script>
