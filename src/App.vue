<template>
  <div class="container">
    <Header title="Task Tracker" />
    <Tasks @delete-task="deleteTask" @toggle-reminder="toggleReminder" :tasks="tasks" />
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
      tasks: []
    }
  },
  methods: {
    deleteTask(id) {
      this.tasks = this.tasks.filter(t => t.id !== id)
    },
    toggleReminder(id) {
      this.tasks = this.tasks.map(task => 
        task.id === id ? {...task, reminder: !(task.reminder)} : task
      );
    },
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
  width: 40%;
  height: 50vh;
  margin: 1rem auto;
  text-align: center;
  background: #ddd;
  font-family: sans-serif;
}
</style>
