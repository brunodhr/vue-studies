<template>
  <div>
    <h4>{{ dones }} tarefa completa</h4>
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        {{ todo.text }}
        <button @click="rm(index)">Remove</button>
      </li>
    </ul>
    <form @submit.prevent="add(name)">
      <input placeholder="Add a Todo" v-model="name" />
    </form>
  </div>
</template>

<script>
export default {
  name: 'Todov2',
  data() {
    return {
      todos: this.$store.state.todo.todos,
      dones: this.$store.getters.done.length,
      name: ''
    }
  },
  methods: {
    add(text) {
      this.$store.dispatch('add', { text: text, done: false })
    },
    rm(index) {
      this.$store.dispatch('rm', index)
    }
  }
}
</script>
