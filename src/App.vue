<template>
  <div class="container">
    <Header title="Task Tracker" />
    <Tasks :tasks="tasks"/>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Tasks from './components/Tasks.vue';

export default {
  name: 'App',
  components: {
    Header,
    Tasks,
},
  data() {
    return {
      tasks :[]
    }
  },
  created() {
    this.tasks = [
      {
        id: 1,
        text: 'Go to the Gym',
        day: 'Jan 3rd at 8:00pm',
        reminder: true
      },
      {
        id: 2,
        text: 'Work on the project',
        day: 'Jan 6th at 6:00am',
        reminder: false
      },
      {
        id: 3,
        text: 'Harvest your crops',
        day: 'Feb 24th at 8:00am',
        reminder: true
      }
    ]
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
