<template>
  <div>
    <h4>{{ this.$store.getters.doneTodos.length }} tarefa completa</h4>
    <h4>{{ this.$store.getters.undoneTodos.length }} tarefa incompleta</h4>
    <ul>
      <li v-for="(todo, index) in this.$store.state.todos" :key="index">
        {{ todo.text }}
        <button>Remove</button>
      </li>
    </ul>
    <form @submit.prevent="addTodo">
      <input placeholder="Add a Todo" />
    </form>
  </div>
</template>

<script>
export default {
  name: 'Todov2',
  data() {
    newTodo = { text: 'Todo 3', done: false }
  },
  computed: {
    // future filters
    doneTodosCount() {
      return this.$store.getters.doneTodos.length
    },
    undoneTodosCount() {
      return this.$store.getters.undoneTodos.length
    }
  },
  methods: {
    addTodo() {
      this.$store.commit('addtodo', this.newTodo)
    }
  }
}
</script>
