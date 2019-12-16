<template>
  <div>
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        {{ todo }}
        <button v-on:click="removeTodo(index)">Remove</button>
      </li>
    </ul>

    <form @submit.prevent="addTodo">
      <input placeholder="Add a Todo" v-model="newTodo" />
    </form>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  name: 'Todo',
  data() {
    newTodo = ''
  },
  computed: {
    ...mapState(['todos'])
  },
  methods: {
    ...mapMutations(['ADD_TODO']),
    ...mapActions(['RM_TODO']),
    addTodo: function() {
      this.ADD_TODO(this.newTodo)
    },
    removeTodo: function(index) {
      console.log('bateu aquieww')
      this.removeTodo(index)
    }
  }
}
</script>
