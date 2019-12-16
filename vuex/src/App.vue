<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- <Counter /> -->
    <Counterv2 />
    <!-- <Todo /> -->
    <!-- <Todov2 /> -->
  </div>
</template>

<script>
import Counter from './components/Counter.vue'
import Counterv2 from './components/Counterv2.vue'
import Todo from './components/Todo.vue'
import Todov2 from './components/Todov2.vue'

import store from '@/store'

export default {
  name: 'app',
  store,
  components: {
    // Counter
    // Todo
    Counterv2
    // Todov2
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
ul {
  list-style: none;
}
</style>
