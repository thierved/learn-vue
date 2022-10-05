<template>
  <div class="container">
    <Header @toggle-add-task="toggleAddTask" :showAddTask="showAddTask"  title="Task Tracker" />
    <AddTask v-show="showAddTask" @add-task="addTask"/>
    <Tasks @delete-task="deleteTask" @toggle-reminder="toggleReminder" :tasks="tasks" />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Tasks from './components/Tasks.vue';
import AddTask from './components/AddTask.vue'

export default {
  name: 'App',
  components: {
    Header,
    Tasks,
    AddTask
  },
  data() {
    return {
      tasks: [],
      showAddTask: false
    }
  },
  methods: {
    toggleAddTask() {
      this.showAddTask = !this.showAddTask;
    },
    addTask(task) {
      this.tasks = [...this.tasks, task];
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter(t => t.id !== id);
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
  min-height: 50vh;
  margin: 1rem auto;
  padding-bottom: 1rem;
  text-align: center;
  background: #ddd;
  font-family: sans-serif;
}
</style>
