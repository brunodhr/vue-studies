<template>
  <div>
    <h1>{{ counter }}</h1>
    <button v-on:click="increment">Adicionar</button>
    <button v-on:click="decrement">Remover</button>
  </div>
</template>

<script>
import store from '@/store'

export default {
  name: 'Counterv2',
  computed: {
    counter() {
      return store.state.counter
    }
  },
  methods: {
    increment() {
      console.log('couint', this.counter)
      store.commit('increment')
    },
    decrement() {
      console.log('couint', this.counter)
      store.commit('decrement')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
