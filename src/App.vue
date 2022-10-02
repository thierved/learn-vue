<template>
  <div class="container">
    <Header title="Task Tracker"/>
  </div>
</template>

<script>
import Header from './components/Header.vue';
export default {
  name: 'App',
  components: {
    Header,
}
}
</script>

<style lang="scss">
  .container {
    width: 80%;
    height: 50vh;
    margin: 1rem auto;
    text-align: center;
    background: #ffe;
  }
</style>
